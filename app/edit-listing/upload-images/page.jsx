

"use client";
import Icon from '/components/Icon';
import DropImage from './DropImage';
import axios from 'axios';
import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { useRouter } from 'next/navigation';
import { updateFormData } from '@/redux/list/editListSlice';

export default function Page() {
  const [images, setImages] = useState([]);
  const [error, setErrors] = useState(false);
  
  useEffect(() => {
    const data = JSON.parse(localStorage.getItem("data")) || {};
    const uploadedImages = data.images || [];
    if (uploadedImages.length) {
      setImages(uploadedImages);
    }
  }, []);

  const router = useRouter();
  const dispatch = useDispatch();

  const handleSubmitImage = async (e) => {
    e.preventDefault();

    
    
    
    try {





const formData = new FormData();

images.filter((image) => image.file !== undefined) // Skip undefined values
            .forEach((image) => {
                formData.append('image', image.file);
            });
 const formDataLength =await formData.getAll('image').length;
 const data = JSON.parse(localStorage.getItem("data")) || {};
    const localImages = data.images || [];
     const totalLength=localImages?.length+formDataLength;
     if( localImages.length >= 3 && formDataLength === 0){
             const payload = { images: localImages };
             await dispatch(updateFormData(payload));
             router.push('/edit-listing/price');
             return; // Skip the rest of the process
      }else{
           if(totalLength < 3){
          setErrors(true);
          return;
           }else{
            const response = await axios.post("https://backend.bedbd.com/api/images/upload-image-file", formData, {
            headers: {
              'Content-Type': 'multipart/form-data'
            }
          });
          // Handle the response as needed
          // console.log(response.data);
                   // Combine the new uploaded images with the existing ones from localStorage
          const combinedImages = [...localImages, ...response.data];
          // Update localStorage with the combined images

          data.images=combinedImages;

          localStorage.setItem("data", JSON.stringify(data));
          
            const payload = { images: combinedImages };
            await dispatch(updateFormData(payload));
            router.push('/edit-listing/price');
           
      }
      
  
      
  
    
      }


    } catch (error) {
      setErrors(true);
      console.error("Error uploading images:", error);
    }
  };

  const back = (e) => {
    e.preventDefault();
    router.push('/edit-listing/home-rules');
  };

  return (
    <div className="min-h-screen py-20">
      <div>
        <h2 className="text-primary-400 text-4xl text-center font-medium mb-12">Upload Images</h2>
        <form className="w-full max-w-4xl ml-auto mr-auto mt-28 px-8" onSubmit={handleSubmitImage}>
          {error && <div className="text-center error-message text-red-500">
            Please add at least 3 images
          </div>}
          <DropImage setImages={setImages} />
          <div className="flex gap-x-8 mt-14 max-w-3xl ml-auto mr-auto">
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
    </div>
  );
}