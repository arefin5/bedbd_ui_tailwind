'use client'
import { useState } from 'react';
import { Upload } from "lucide-react"
import Image from 'next/image';



export default function DropImage() {
  const [image, setImage] = useState(null);
  const [dragActive, setDragActive] = useState(false);
  const [isDropEvent, setIsDropEvent] = useState(false);

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

    const file = event.dataTransfer.files[0];
    if (file && file.type.startsWith('image/')) {
      setImage(URL.createObjectURL(file));
      setIsDropEvent(true);
    }
  };

  const handleChange = (event) => {
    const file = event.target.files[0];
    if (file && file.type.startsWith('image/')) {
      setImage(URL.createObjectURL(file));
    }
  };

  const handleClick = (e) => {
    if (!isDropEvent) {
      document.getElementById('fileInput').click();
    }
    setIsDropEvent(false);
  };


  return (
    <div 
      onDragOver={handleDragOver}
      onDragLeave={handleDragLeave}
      onDrop={handleDrop}
      onClick={handleClick}
      className="select-none text-select-none bg-white py-6 px-12 h-full">

        {/* w-72 h-80  */}
      <div className='rounded border border-neutral-400 mt-auto border-dashed relative w-full h-full flex flex-col items-center justify-center content-center gap-y-4'>
        {image ? (

          <Image src={image} alt="Preview" fill className='object-contain'/>
        ) : (<>
          <Upload className='icon' size={24} />
          <div className='border border-neutral-300 rounded-md py-2.5 px-12'>
              Browse
          </div>
          <p className='text-center max-w-52 text-neutral-400 '>Or drag and drop your photo here</p>
        </>
        )}


        <input 
          type="file"
          id="fileInput"
          accept="image/*"
          onChange={handleChange}
          style={{ display: 'none' }}/>
        
      </div> 
    </div>
  )
}
