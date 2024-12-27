
"use client"
import Icon from '/components/Icon';
import DropImage from './DropImage';
import axios from 'axios';
import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { useRouter } from 'next/navigation';
import { updateFormData } from '@/redux/list/createListSlice';

export default function Page() {
  const [images, setImages] = useState([]);
  const [error,setErrors]=useState(false)
  useEffect(() => {
    // if images from localStorage exist, set them to state
 
  }, [images]);

   useEffect(() => {
    // console.log(images);
    // if images from localStorage exist, set them to state
    const uploadedImages = JSON.parse(localStorage.getItem("uploadedImages"));
    if (uploadedImages) {
     console.log('uploadedImages', uploadedImages);
      setImages(uploadedImages);
    }
  }, []);
  const router = useRouter();
  const dispatch = useDispatch();
  const handleSubmitImage = async (e) => {
    e.preventDefault();
    try {
      const formData = new FormData();
      images.forEach((image) => {
        formData.append('image', image.file);  // Use the 'file' property
      });
    for (let pair of formData.entries()) {
      console.log(pair[0] + ', ' + pair[1]);
    }
      const response = await axios.post("https://backend.bedbd.com/api/images/upload-image-file", formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });
     
     const payload = { 
       image:response.data
};  
localStorage.setItem("uploadedImages", JSON.stringify(response.data));
setErro(false)
await dispatch(updateFormData(payload));
            router.push('/add-listing/price'); // Navigate to the next pag
              // console.log('Uploaded images:', response.data);
    } catch (error) {
      setError(true)
      console.error("Error uploading images:", error);
    }
  };
  const back = (e) => {
    e.preventDefault();
    router.push('/add-listing/home-rules');
  };

  return (
    <div className="min-h-screen py-20">
      <div>
        <h2 className="text-primary-400 text-4xl text-center font-medium mb-12">Upload Images</h2>
        <form className="w-full max-w-4xl ml-auto mr-auto mt-28 px-8" onSubmit={handleSubmitImage}>
        {error && <div className="text-center error-message text-red-500">
          please Add 5 Images 
        </div>}
          <DropImage setImages={setImages}  />
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