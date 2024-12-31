
"use client";
import { useEffect, useState } from "react";
import { Plus, X } from "lucide-react";
import Image from "next/image";
import imageCompression from "browser-image-compression";

export default function DropImage({ setImages }) {
  const [previewImages, setPreviewImages] = useState([]);
  const [dragActive, setDragActive] = useState(false);
  const [isDropEvent, setIsDropEvent] = useState(false);
   const [errors,setErrors]=useState("")
  const MAX_FILE_SIZE_MB = 5;
  const SUPPORTED_FORMATS = ["image/jpeg", "image/png"];

  useEffect(() => {
    return () => {
      // Cleanup object URLs to prevent memory leaks
      previewImages.forEach((url) => URL.revokeObjectURL(url));
    };
  }, [previewImages]);
  useEffect(() => {
    const data=JSON.parse(localStorage.getItem("data"));
    const storedImages = data.images;
    if (storedImages) {
      // setPreviewImages(storedImages.map(img => img.url));
      const imageUrls = storedImages.map(img => img.url);
      setPreviewImages(imageUrls);
      setImages(storedImages);
    }
  }, [setImages]);
  const validateFile = (file) => {
    if (!SUPPORTED_FORMATS.includes(file.type)) {
      setErrors(`${file.name} is not a supported format. Please upload JPG or PNG files.`);
      return false;
    }
    if (file.size > MAX_FILE_SIZE_MB * 1024 * 1024) {
      setErrors(`${file.name} exceeds the maximum size of ${MAX_FILE_SIZE_MB}MB.`);
      return false;
    }
    return true;
  };

  
  const handleFiles = async (files) => {
    const validImages = [];
    const validFileObjects = [];

    for (const file of files) {
      if (validateFile(file)) {
        // Process only valid files
        const previewUrl = URL.createObjectURL(file);
        validImages.push(previewUrl);
        validFileObjects.push({ file, preview: previewUrl });
      } else {
        setErrors(`${file.name} is not a supported format or exceeds the size limit. Skipping.`);
      }
    }

    // Update state only with valid files
    if (validImages.length > 0) {
      setPreviewImages((prevImages) => [...prevImages, ...validImages]);
      setImages((prev) => [...prev, ...validFileObjects]);
    }
  };

  const handleDragOver = (event) => {
    event.preventDefault();
    setDragActive(true);
  };

  const handleDragLeave = () => {
    setDragActive(false);
  };

  const handleDrop = (event) => {
    event.preventDefault();
    setDragActive(false);
    handleFiles(event.dataTransfer.files);
    setIsDropEvent(true);
  };

  const handleChange = (event) => {
    handleFiles(event.target.files);
  };

  const handleClick = () => {
    if (!isDropEvent) {
      document.getElementById("fileInput").click();
    }
    setIsDropEvent(false);
  };

  return (
    <>
      <div
        onDragOver={handleDragOver}
        onDragLeave={handleDragLeave}
        onDrop={handleDrop}
        onClick={handleClick}
        className={`cursor-pointer w-full max-w-4xl bg-neutral-100 border border-neutral-400 border-dashed rounded-10px py-10 ${dragActive ? "bg-neutral-200" : ""
          }`}
      >
        <input
          type="file"
          id="fileInput"
          accept="image/*"
          multiple
          onChange={handleChange}
          className="hidden"
        />
        {
  errors && <div className='error-message text-red-500'>
                        {errors}
                        </div>
                    }
        <h3 className="text-center text-neutral-700 text-sm font-medium">Drag and drop or</h3>
        <div className="py-3 px-6 mt-6 mb-2.5 ml-auto mr-auto flex gap-x-4 w-fit text-neutral-600 text-base font-medium border rounded-lg border-neutral-200">
          <Plus className="icon" />
          Upload photos
        </div>
        <h2 className="text-neutral-900 text-center text-sm font-normal">
          JPG/JPEG or PNG, maximum {MAX_FILE_SIZE_MB}MB each
        </h2>
      </div>

      <div className="pt-10">
        <p>Arrange the photos in the desired order by clicking and dragging them for guests to view.</p>
        <div className="grid md:grid-cols-2 gap-4 mt-4">
          {previewImages.map((image, index) => (
            <div
              key={index}
              className="relative w-full min-h-72 aspect-[3/2] border rounded-lg overflow-hidden"
            >
              <Image src={image} alt={`image-${index}`} layout="fill" className="object-cover" />
            
              <div
                onClick={() => {
                  // Ensure index is valid
                  if (!previewImages || !previewImages[index]) {
                    console.error("Invalid index or image structure in previewImages");
                    return;
                  }

                  
                  const imageToRemove = previewImages[index];

                  // Remove the image from the preview state using splice
                  setPreviewImages((prev) => {
                    const updatedPreviewImages = [...prev];
                    updatedPreviewImages.splice(index, 1); // Removes 1 element at the specified index
                    return updatedPreviewImages;
                  });

                  // Get current uploaded images from localStorage
                  const datas=JSON.parse(localStorage.getItem("data")) || [];
                  const uploadedImages =datas.images;

                  // Use splice to remove the image from the uploaded images array
                  const updatedImages = [...uploadedImages];
                  updatedImages.splice(
                    updatedImages.findIndex((image) => image.url === imageToRemove.url),
                    1
                  ); // Find the index and remove the image

                  // Update the localStorage with the remaining images
                  // localStorage.setItem("uploadedImages", JSON.stringify(updatedImages));
                  const updatedData=JSON.parse(localStorage.getItem("data")) || [];
                   updatedData.images=updatedImages;
                   localStorage.setItem("data",JSON.stringify(updatedData));
                }}
                className="absolute bg-white rounded-full p-2.5 cursor-pointer right-3 top-6"
              >
                <X className="icon" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}