
"use client";

import { useEffect, useState } from "react";
import { Plus, X } from "lucide-react";
import Image from "next/image";
import imageCompression from "browser-image-compression";

export default function DropImage({ setImages, existingImages ,handleRemoveImage }) {
  const [previewImages, setPreviewImages] = useState([]);
  const MAX_FILE_SIZE_MB = 5;
  const SUPPORTED_FORMATS = ["image/jpeg", "image/png"];

  useEffect(() => {
    setPreviewImages(existingImages.map((img) => img.preview));
    setImages(existingImages);
  }, [existingImages]);

  const validateFile = (file) => {
    if (!SUPPORTED_FORMATS.includes(file.type)) {
      alert(`${file.name} is not a supported format. Please upload JPG or PNG files.`);
      return false;
    }
    if (file.size > MAX_FILE_SIZE_MB * 1024 * 1024) {
      alert(`${file.name} exceeds the maximum size of ${MAX_FILE_SIZE_MB}MB.`);
      return false;
    }
    return true;
  };

  const handleFiles = async (files) => {
    const newImages = [];
    const fileObjects = [];

    for (const file of files) {
      if (validateFile(file)) {
        const previewUrl = URL.createObjectURL(file);
        newImages.push(previewUrl);
        fileObjects.push({ file, preview: previewUrl });
      } else {
        try {
          const options = { maxSizeMB: 5, fileType: "image/jpeg" };
          const compressedFile = await imageCompression(file, options);
          const previewUrl = URL.createObjectURL(compressedFile);
          newImages.push(previewUrl);
          fileObjects.push({ file: compressedFile, preview: previewUrl });
        } catch (error) {
          console.error(`Failed to process ${file.name}:`, error);
        }
      }
    }

    if (newImages.length > 0) {
      setPreviewImages((prevImages) => [...prevImages, ...newImages]);
      setImages((prev) => [...prev, ...fileObjects]);
    }
  };

  const handleDragOver = (event) => {
    event.preventDefault();
  };

  const handleDrop = (event) => {
    event.preventDefault();
    handleFiles(event.dataTransfer.files);
  };

  const handleChange = (event) => {
    handleFiles(event.target.files);
  };

  // const handleRemoveImage = (index) => {
  //   setPreviewImages((prev) => prev.filter((_, imgIndex) => imgIndex !== index));
  //   setImages((prev) => prev.filter((_, imgIndex) => imgIndex !== index));
  // };

  return (
    <>
      <div
        onDragOver={handleDragOver}
        onDrop={handleDrop}
        className="cursor-pointer w-full max-w-4xl bg-neutral-100 border border-neutral-400 border-dashed rounded-10px py-10"
      >
        <input
          type="file"
          accept="image/*"
          multiple
          onChange={handleChange}
          className="hidden"
          id="fileInput"
        />
        <h3 className="text-center text-neutral-700 text-sm font-medium">Drag and drop or</h3>
        <div
          className="py-3 px-6 mt-6 mb-2.5 mx-auto flex gap-x-4 w-fit text-neutral-600 text-base font-medium border rounded-lg border-neutral-200"
          onClick={() => document.getElementById("fileInput").click()}
        >
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
                onClick={() => handleRemoveImage(index)}
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
