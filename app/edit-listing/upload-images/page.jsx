
"use client";
import Icon from "/components/Icon";
import DropImage from "./DropImage";
import axios from "axios";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useRouter } from "next/navigation";
import { updateFormData } from "@/redux/list/editListSlice";

export default function Page() {
  const [images, setImages] = useState([]);
  const existingImages = useSelector((state) => state.editForm.editlist?.images || []);
  const router = useRouter();
  const dispatch = useDispatch();

  useEffect(() => {
    const formattedImages = existingImages.map((img) => ({
      file: null, // No file for existing images
      preview: img.url, // Use the URL as the preview
    }));
    setImages(formattedImages);
  }, [existingImages]);

  const handleRemoveImage = (index) => {
    const isExistingImage = !images[index]?.file; // Determine if it's an existing image
  
    if (isExistingImage) {
      // Remove the existing image from the images array directly
      setImages((prevImages) => prevImages.filter((_, imgIndex) => imgIndex !== index));
    } else {
      // Remove the new image from the local state
      setImages((prevImages) => prevImages.filter((_, imgIndex) => imgIndex !== index));
    }
  };
  
  const handleSubmitImage = async (e) => {
    e.preventDefault();
    try {
      const formData = new FormData();
      let hasNewImages = false;
  
      // Append images to FormData
      images.forEach((image) => {
        if (image.file) {
          // New images (files)
          formData.append("image", image.file);
          hasNewImages = true; // Track if there are new images
        } else if (image.preview) {
          // Existing images (URLs)
          formData.append("existingImages", image.preview);
        }
      });
  
      // If there are no new images to upload, skip the API call
      if (!hasNewImages) {
        console.log("No new images to upload. Using existing images.");
        await dispatch(updateFormData({ images: existingImages }));
        router.push("/edit-listing/price");
        return;
      }
  
      // Make the API call to upload images
      const response = await axios.post(
        // "https://backend.bedbd.com/api/images//upload-image-edit",
        "http://localhost:5001/api/images/upload-image-edit",

        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );
  
      // Handle the response from the server
      const uploadedImages = response.data; // Assuming server returns all image URLs
      const allImages = [...uploadedImages, ...existingImages];
  console.log("allImages",allImages)
      // Dispatch combined images to Redux
      await dispatch(updateFormData({ images: allImages }));
  
      // Navigate to the next page
      router.push("/edit-listing/price");
    } catch (error) {
      console.error("Error uploading images:", error);
    }
  };
  
  const back = (e) => {
    e.preventDefault();
    router.push("/edit-listing/home-rules");
  };

  return (
    <div className="min-h-screen py-20">
      <h2 className="text-primary-400 text-4xl text-center font-medium mb-12">Upload Images</h2>
      <form className="w-full max-w-4xl mx-auto mt-28 px-8" onSubmit={handleSubmitImage}>
        <DropImage setImages={setImages} existingImages={images} handleRemoveImage={handleRemoveImage} />
        <div className="flex gap-x-8 mt-14 max-w-3xl mx-auto">
          <button className="btn btn-secondary max-w-36 relative" onClick={back}>
            <Icon name="chevron-left" className="icon absolute-y-center left-4" />
            Back
          </button>
          <button type="submit" className="btn btn-primary">
            Continue
          </button>
        </div>
      </form>
    </div>
  );
}
