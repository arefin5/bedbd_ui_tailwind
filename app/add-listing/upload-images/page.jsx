
"use client"
import Icon from '/components/Icon';
import DropImage from './DropImage';
import axios from 'axios';
import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { useRouter } from 'next/navigation';
import { updateFormData } from '@/redux/list/createListSlice';
import axiosForImage from '@/app/lib/axiosForImage';

export default function Page() {
  const [images, setImages] = useState([]);
  const [error, setErrors] = useState(false)
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
  // const handleSubmitImage = async (e) => {
  //   e.preventDefault();
  //   try {
  //     const formData = new FormData();
  //     images.forEach((image) => {
  //       formData.append('image', image.file);
  //     });
  //     for (let pair of formData.entries()) {
  //       console.log(pair[0] + ', ' + pair[1]);
  //     }
  //     const localImages = JSON.parse(localStorage.getItem("uploadedImages"));

  //       switch (localImages.length<3) {
              

  //       }
      
  //     // const response = await axios.post("https://backend.bedbd.com/api/images/upload-image-file", formData, {
  //     //   headers: {
  //     //     'Content-Type': 'multipart/form-data',
  //     //   },
  //     // });
  //     const response = await axiosForImage.post("/images/upload-image-file", formData, {
  //                 headers: {
  //                   'Content-Type': 'multipart/form-data',
  //                 },
  //                 crossOrigin: 'anonymous',
  //               });
  //     // const response = await axios.post("http://localhost:5001/api/images/upload-image-file", formData, {
  //     //   headers: {
  //     //     'Content-Type': 'multipart/form-data',
  //     //   },
  //     // });
     
  //     const existingImages = JSON.parse(localStorage.getItem("uploadedImages")) || [];
  //     const combinedImages = [...existingImages, ...response.data];
    
  //     // Update localStorage
  //     localStorage.setItem("uploadedImages", JSON.stringify(combinedImages));

  //     // Update state
  //     setImages(combinedImages);

  //     if (combinedImages.length >= 3) {
  //       const payload = { images: combinedImages };
  //       await dispatch(updateFormData(payload));
  //       router.push('/add-listing/price'); 
  //     } else {
  //       setErrors(true);
  //     }
  //   } catch (error) {
  //     setErrors(true)
  //     console.error("Error uploading images:", error);
  //   }
  // };
  // const handleSubmitImage = async (e) => {
  //   e.preventDefault();

  //   // Get images from localStorage
  //   const localImages = JSON.parse(localStorage.getItem("uploadedImages")) || [];
  //   try {
  //     const formData = new FormData();
  //     images.forEach((image) => {
  //       formData.append('image', image.file);
  //     });

  //   // If there are already 3 or more images, skip the upload and go to the next page
  //   if (localImages.length >= 3 && formData.length === 0) {
  //     const payload={
  //       images:localImages
  //     }
  //     await dispatch(updateFormData(payload));
  //     router.push('/add-listing/price');
  //     return; // Skip the rest of the process
  //   };

    
  //     // Create FormData and append selected images
    
  //     // Debug: Log the formData
  //     for (let pair of formData.entries()) {
  //       console.log(pair[0] + ', ' + pair[1]);
  //     }

  //     // Call API to upload images
  //     const response = await axios.post("https://backend.bedbd.com/api/images/upload-image-file", formData, {
  //       headers: {
  //         'Content-Type': 'multipart/form-data',
  //         'Content-Type': 'application/json',
  //       },
  //     });

  //     // Combine the new uploaded images with the existing ones from localStorage
  //     const combinedImages = [...localImages, ...response.data];

  //     // Update localStorage with the combined images
  //     localStorage.setItem("uploadedImages", JSON.stringify(combinedImages));

  //     // Update the images state
  //     setImages(combinedImages);

  //     // If we now have 3 or more images, dispatch the action and move to the next step
  //     if (combinedImages.length >= 3) {
  //       const payload = { images: combinedImages };
  //       await dispatch(updateFormData(payload));
  //       router.push('/add-listing/price');
  //     } else {
  //       setErrors(true);
  //     }
  //   } catch (error) {
  //     setErrors(true);
  //     console.error("Error uploading images:", error);
  //   }
  // };
  // const handleSubmitImage = async (e) => {
  //   e.preventDefault();

  //   const data = JSON.parse(localStorage.getItem("data")) || {};
  //   const localImages = data.images || [];
    
  //   try {
  //     const formData = new FormData();
  //     images.forEach((image) => {
  //       formData.append('image', image.file);
  //     });

  //     const formDataLength = formData.getAll('image').length;
  //       console.log("form data length",formDataLength);
  //       console.log("local images length",localImages.length);
  //     switch (true) {
  //       case localImages.length >= 3 && localImages.length <= formDataLength:
  //         const payload = { images: localImages };
  //         await dispatch(updateFormData(payload));
  //         router.push('/edit-listing/price');
  //         return; // Skip the rest of the process

  //       case formDataLength === 0:
  //         setErrors(true);
  //         console.log("image length issues in form data");
  //         return;

  //       default:
  //         // Call API to upload images
  //         const response = await axiosForImage.post("/images/upload-image-file", formData, {
  //           headers: {
  //             'Content-Type': 'multipart/form-data',
  //           },
  //           crossOrigin: 'anonymous',
  //         });

  //         // Combine the new uploaded images with the existing ones from localStorage
  //         const combinedImages = [...localImages, ...response.data];

  //         // Update localStorage with the combined images
  //         data.images = combinedImages;
  //         localStorage.setItem("data", JSON.stringify(data));
           
  //         // Update the images state
  //         setImages(combinedImages);

  //         // If we now have 3 or more images, dispatch the action and move to the next step
  //         if (combinedImages.length >= 3) {
  //           const payload = { images: combinedImages };
  //           await dispatch(updateFormData(payload));
  //           router.push('/edit-listing/price');
  //         } else {

  //           setErrors(true);
  //         }
  //     }
  //   } catch (error) {
  //     setErrors(true);
  //     console.log("api response erroor",error);
  //     console.error("Error uploading images:", error);
  //   }
  // };

  const handleSubmitImage = async (e) => {
    e.preventDefault();
   
    try {
      const formData = new FormData();
      images.forEach((image) => {
        formData.append('image', image.file);
      });
      const formDataLength = formData.getAll('image').length;
      const localImages = JSON.parse(localStorage.getItem("uploadedImages"));
      console.log("img length",localImages.length);
      console.log("from le",formDataLength)

      switch (true) {
        case localImages.length >= 3 && localImages.length <= formDataLength:
          const payload = { images: localImages };
          await dispatch(updateFormData(payload));
          router.push('/edit-listing/price');
          return; // Skip the rest of the process

        case formDataLength === 0:
          setErrors(true);
          return;

        default:
          // Call API to upload images
          const response = await axios.post("https://backend.bedbd.com/api/images/upload-image-file", formData, {
            headers: {
              'Content-Type': 'multipart/form-data',
            },
          });

          // Combine the new uploaded images with the existing ones from localStorage
          const combinedImages = [...localImages, ...response.data];

          // Update localStorage with the combined images
          data.images = combinedImages;
          // localStorage.setItem("data", JSON.stringify(data));
          localStorage.setItem("uploadedImages", JSON.stringify(combinedImages));
          // Update the images state
          setImages(combinedImages);

          // If we now have 3 or more images, dispatch the action and move to the next step
          if (combinedImages.length >= 3) {
            const payload = { images: combinedImages };
            await dispatch(updateFormData(payload));
            router.push('/edit-listing/price');
          } else {
            setErrors(true);
          }
      }
    } catch (error) {
      setErrors(true);
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
            please Add 3 Images
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