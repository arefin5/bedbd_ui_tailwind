
"use client"
import { useEffect, useState, useRef } from "react";
import { Plus, X } from "lucide-react";
import Image from "next/image";

export default function DropImage({ setImages }) {
  const [previewImages, setPreviewImages] = useState([]);
  const [dragActive, setDragActive] = useState(false);
  const [isDropEvent, setIsDropEvent] = useState(false);

  useEffect(() => {
    console.log(previewImages);
  }, [previewImages]);

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

    const files = event.dataTransfer.files;
    const newImages = [];
    const fileObjects = [];
    for (const file of files) {
      if (file && file.type.startsWith('image/')) {
        newImages.push(URL.createObjectURL(file));
        fileObjects.push({ file, preview: URL.createObjectURL(file) });
      }
    }
    if (newImages.length > 0) {
      setPreviewImages((prevImages) => [...prevImages, ...newImages]);
      setImages((prev) => [...prev, ...fileObjects]);
      setIsDropEvent(true);
    }
  };

  const handleChange = (event) => {
    const files = event.target.files;
    const newImages = [];
    const fileObjects = [];
    for (const file of files) {
      if (file && file.type.startsWith('image/')) {
        newImages.push(URL.createObjectURL(file));
        fileObjects.push({ file, preview: URL.createObjectURL(file) });
      }
    }
    if (newImages.length > 0) {
      setPreviewImages((prevImages) => [...prevImages, ...newImages]);
      setImages((prev) => [...prev, ...fileObjects]);
    }
  };

  const handleClick = (e) => {
    if (!isDropEvent) {
      document.getElementById('fileInput').click();
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
        className="cursor-pointer w-full max-w-4xl bg-neutral-100 border border-neutral-400 border-dashed rounded-10px py-10"
      >
        <input
          type="file"
          id="fileInput"
          accept="image/*"
          multiple
          onChange={handleChange}
          className="hidden"
        />
        <h3 className="text-center text-neutral-700 text-sm font-medium">Drag and drop or</h3>
        <div className="py-3 px-6 mt-6 mb-2.5 ml-auto mr-auto flex gap-x-4 w-fit text text-neutral-600 text-base font-medium border rounded-lg border-neutral-200">
          <Plus className="icon" />
          Upload photos
        </div>
        <h2 className="text-neutral-900 text-center text-sm font-normal">jpg/jpeg or png, maximum 5MB each</h2>
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
              <div className="absolute bg-white rounded-full p-2.5 cursor-pointer right-3 top-6">
                <X className="icon" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
