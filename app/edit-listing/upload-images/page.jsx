
// // // "use client"
// // // import Icon from '/components/Icon';
// // // import DropImage from './DropImage';
// // // import axios from 'axios';
// // // import { useEffect, useState } from 'react';
// // // import { useDispatch } from 'react-redux';
// // // import { useRouter } from 'next/navigation';
// // // import { updateFormData } from '@/redux/list/editListSlice';

// // // export default function Page() {
// // //   const [images, setImages] = useState([]);
// // //   const [error, setErrors] = useState(false)
// // //   useEffect(() => {
// // //     // if images from localStorage exist, set them to state

// // //   }, [images]);

// // //   useEffect(() => {
// // //     // console.log(images);
// // //     // if images from localStorage exist, set them to state
// // //     const data=JSON.parse(localStorage.getItem("data"));
// // //     const uploadedImages = data.images;
// // //     // const uploadedImages = JSON.parse(localStorage.getItem("uploadedImages"));
// // //     if (uploadedImages) {
// // //       console.log('uploadedImages', uploadedImages);
// // //       setImages(uploadedImages);
// // //     }
// // //   }, []);
// // //   const router = useRouter();
// // //   const dispatch = useDispatch();
 
// // //   const handleSubmitImage = async (e) => {
// // //     e.preventDefault();

// // //     // Get images from localStorage
// // //     const data=JSON.parse(localStorage.getItem("data"));
// // //     const localImages = data.images;
// // //     console.log(localImages);
// // //     console.log("length",localImages.length)
// // //     try {
// // //       const formData = new FormData();
// // //       images.forEach((image) => {
// // //         formData.append('image', image.file);
// // //       });

// // //     // If there are already 3 or more images, skip the upload and go to the next page
// // //     if (localImages.length >= 2 && formData.length === 0) {
// // //       const payload={
// // //         images:localImages
// // //       }
// // //       await dispatch(updateFormData(payload));
// // //       router.push('/add-listing/price');
// // //       return; // Skip the rest of the process
// // //     };

    
// // //       // Create FormData and append selected images
    
// // //       // Debug: Log the formData
// // //       for (let pair of formData.entries()) {
// // //         console.log(pair[0] + ', ' + pair[1]);
// // //       }

// // //       // Call API to upload images
// // //       const response = await axios.post("https://backend.bedbd.com/api/images/upload-image-file", formData, {
// // //         headers: {
// // //           'Content-Type': 'multipart/form-data',
// // //         },
// // //       });

// // //       // Combine the new uploaded images with the existing ones from localStorage
// // //       const combinedImages = [...localImages, ...response.data];

// // //       // Update localStorage with the combined images
// // //       localStorage.setItem("uploadedImages", JSON.stringify(combinedImages));

// // //       // Update the images state
// // //       setImages(combinedImages);

// // //       // If we now have 3 or more images, dispatch the action and move to the next step
// // //       if (combinedImages.length >= 3) {
// // //         const payload = { images: combinedImages };
// // //         await dispatch(updateFormData(payload));
// // //         router.push('/edit-listing/price');
// // //       } else {
// // //         setErrors(true);
// // //       }
// // //     } catch (error) {
// // //       setErrors(true);
// // //       console.error("Error uploading images:", error);
// // //     }
// // //   };
  
// // //   const back = (e) => {
// // //     e.preventDefault();
// // //     router.push('/edit-listing/home-rules');
// // //   };

// // //   return (
// // //     <div className="min-h-screen py-20">
// // //       <div>
// // //         <h2 className="text-primary-400 text-4xl text-center font-medium mb-12">Upload Images</h2>
// // //         <form className="w-full max-w-4xl ml-auto mr-auto mt-28 px-8" onSubmit={handleSubmitImage}>
// // //           {error && <div className="text-center error-message text-red-500">
// // //             please Add 3 Images
// // //           </div>}
// // //           <DropImage setImages={setImages} />
// // //           <div className="flex gap-x-8 mt-14 max-w-3xl ml-auto mr-auto">
// // //             <button className="btn btn-secondary max-w-36 relative" onClick={back}>
// // //               <Icon name="chevron-left" className="icon absolute-y-center left-4" />
// // //               Back
// // //             </button>
// // //             <button type="submit" className="btn btn-primary">
// // //               Continue
// // //             </button>
// // //           </div>
// // //         </form>
// // //       </div>
// // //     </div>
// // //   );
// // // }
// // "use client";
// // import Icon from '/components/Icon';
// // import DropImage from './DropImage';
// // import axios from 'axios';
// // import { useEffect, useState } from 'react';
// // import { useDispatch } from 'react-redux';
// // import { useRouter } from 'next/navigation';
// // import { updateFormData } from '@/redux/list/editListSlice';

// // export default function Page() {
// //   const [images, setImages] = useState([]);
// //   const [error, setErrors] = useState(false);
  
// //   useEffect(() => {
// //     const data = JSON.parse(localStorage.getItem("data"));
// //     const uploadedImages = data.images;
// //     if (uploadedImages) {
// //       setImages(uploadedImages);
// //     }
// //   }, []);

// //   const router = useRouter();
// //   const dispatch = useDispatch();

// //   // const handleSubmitImage = async (e) => {
// //   //   e.preventDefault();

// //   //   const data = JSON.parse(localStorage.getItem("data"));
// //   //   const localImages = data.images || [];
    
// //   //   try {
// //   //     const formData = new FormData();
// //   //     images.forEach((image) => {
// //   //       formData.append('image', image.file);
// //   //     });

// //   //     // If there are already 3 or more images, skip the upload and go to the next page
// //   //     if (localImages.length >= 3 && formData.getAll('image').length === 0) {
// //   //       const payload = { images: localImages };
// //   //        dispatch(updateFormData(payload));
// //   //       router.push('/edit-listing/price');
// //   //       return; // Skip the rest of the process
// //   //     }

// //   //     // If formData is empty, skip the API call
// //   //     if (formData.getAll('image').length === 0) {
// //   //       setErrors(true);
// //   //       return;
// //   //     }

// //   //     // Call API to upload images
// //   //     const response = await axios.post("https://backend.bedbd.com/api/images/upload-image-file", formData, {
// //   //       headers: {
// //   //         'Content-Type': 'multipart/form-data',
// //   //       },
// //   //     });

// //   //     // Combine the new uploaded images with the existing ones from localStorage
// //   //     const combinedImages = [...localImages, ...response.data];

// //   //     // Update localStorage with the combined images
// //   //     data.images = combinedImages;
// //   //     localStorage.setItem("data", JSON.stringify(data));

// //   //     // Update the images state
// //   //     setImages(combinedImages);

// //   //     // If we now have 3 or more images, dispatch the action and move to the next step
// //   //     if (combinedImages.length >= 3) {
// //   //       const payload = { images: combinedImages };
// //   //       await dispatch(updateFormData(payload));
// //   //       router.push('/edit-listing/price');
// //   //     } else {
// //   //       setErrors(true);
// //   //     }
// //   //   } catch (error) {
// //   //     setErrors(true);
// //   //     console.error("Error uploading images:", error);
// //   //   }
// //   // };

// //   const handleSubmitImage = async (e) => {
// //     e.preventDefault();

// //     const data = JSON.parse(localStorage.getItem("data")) || {};
// //     const localImages = data.images || [];
    
// //     try {
// //       const formData = new FormData();
// //       images.forEach((image) => {
// //         formData.append('image', image.file);
// //       });

// //       const formDataLength = formData.getAll('image').length;

// //       switch (true) {
// //         case localImages.length >= 3 && formDataLength === 0:
// //           const payload = { images: localImages };
// //           await dispatch(updateFormData(payload));
// //           router.push('/edit-listing/price');
// //           return; // Skip the rest of the process

// //         case formDataLength === 0:
// //           setErrors(true);
// //           return;

// //         default:
// //           // Call API to upload images
// //           const response = await axios.post("https://backend.bedbd.com/api/images/upload-image-file", formData, {
// //             headers: {
// //               'Content-Type': 'multipart/form-data',
// //             },
// //           });

// //           // Combine the new uploaded images with the existing ones from localStorage
// //           const combinedImages = [...localImages, ...response.data];

// //           // Update localStorage with the combined images
// //           data.images = combinedImages;
// //           localStorage.setItem("data", JSON.stringify(data));

// //           // Update the images state
// //           setImages(combinedImages);

// //           // If we now have 3 or more images, dispatch the action and move to the next step
// //           if (combinedImages.length >= 3) {
// //             const payload = { images: combinedImages };
// //             await dispatch(updateFormData(payload));
// //             router.push('/edit-listing/price');
// //           } else {
// //             setErrors(true);
// //           }
// //       }
// //     } catch (error) {
// //       setErrors(true);
// //       console.error("Error uploading images:", error);
// //     }
// //   };
// //   const back = (e) => {
// //     e.preventDefault();
// //     router.push('/edit-listing/home-rules');
// //   };

// //   return (
// //     <div className="min-h-screen py-20">
// //       <div>
// //         <h2 className="text-primary-400 text-4xl text-center font-medium mb-12">Upload Images</h2>
// //         <form className="w-full max-w-4xl ml-auto mr-auto mt-28 px-8" onSubmit={handleSubmitImage}>
// //           {error && <div className="text-center error-message text-red-500">
// //             Please add at least 3 images
// //           </div>}
// //           <DropImage setImages={setImages} />
// //           <div className="flex gap-x-8 mt-14 max-w-3xl ml-auto mr-auto">
// //             <button className="btn btn-secondary max-w-36 relative" onClick={back}>
// //               <Icon name="chevron-left" className="icon absolute-y-center left-4" />
// //               Back
// //             </button>
// //             <button type="submit" className="btn btn-primary">
// //               Continue
// //             </button>
// //           </div>
// //         </form>
// //       </div>
// //     </div>
// //   );
// // }
// "use client";
// import Icon from '/components/Icon';
// import DropImage from './DropImage';
// import axios from 'axios';
// import { useEffect, useState } from 'react';
// import { useDispatch } from 'react-redux';
// import { useRouter } from 'next/navigation';
// import { updateFormData } from '@/redux/list/editListSlice';

// export default function Page() {
//   const [images, setImages] = useState([]);
//   const [error, setErrors] = useState(false);
  
//   useEffect(() => {
//     const data = JSON.parse(localStorage.getItem("data")) || {};
//     const uploadedImages = data.images || [];
//     if (uploadedImages.length) {
//       setImages(uploadedImages);
//     }
//   }, []);

//   const router = useRouter();
//   const dispatch = useDispatch();

//   const handleSubmitImage = async (e) => {
//     e.preventDefault();

//     const data = JSON.parse(localStorage.getItem("data")) || {};
//     const localImages = data.images || [];
    
//     try {
//       const formData = new FormData();
//       images.forEach((image) => {
//         formData.append('image', image.file);
//       });

//       // If there are already 3 or more images, skip the upload and go to the next page
//       if (localImages.length >= 3 && formData.getAll('image').length === 0) {
//         const payload = { images: localImages };
//         await dispatch(updateFormData(payload));
//         router.push('/edit-listing/price');
//         return; // Skip the rest of the process
//       }

//       // If formData is empty, skip the API call
//       if (formData.getAll('image').length === 0) {
//         setErrors(true);
//         return;
//       }

//       // Call API to upload images
//       const response = await axios.post("https://backend.bedbd.com/api/images/upload-image-file", formData, {
//         headers: {
//           'Content-Type': 'multipart/form-data',
//         },
//       });

//       // Combine the new uploaded images with the existing ones from localStorage
//       const combinedImages = [...localImages, ...response.data];

//       // Update localStorage with the combined images
//       data.images = combinedImages;
//       localStorage.setItem("data", JSON.stringify(data));

//       // Update the images state
//       setImages(combinedImages);

//       // If we now have 3 or more images, dispatch the action and move to the next step
//       if (combinedImages.length >= 3) {
//         const payload = { images: combinedImages };
//         await dispatch(updateFormData(payload));
//         router.push('/edit-listing/price');
//       } else {
//         setErrors(true);
//       }
//     } catch (error) {
//       setErrors(true);
//       console.error("Error uploading images:", error);
//     }
//   };

//   const back = (e) => {
//     e.preventDefault();
//     router.push('/edit-listing/home-rules');
//   };

//   return (
//     <div className="min-h-screen py-20">
//       <div>
//         <h2 className="text-primary-400 text-4xl text-center font-medium mb-12">Upload Images</h2>
//         <form className="w-full max-w-4xl ml-auto mr-auto mt-28 px-8" onSubmit={handleSubmitImage}>
//           {error && <div className="text-center error-message text-red-500">
//             Please add at least 3 images
//           </div>}
//           <DropImage setImages={setImages} />
//           <div className="flex gap-x-8 mt-14 max-w-3xl ml-auto mr-auto">
//             <button className="btn btn-secondary max-w-36 relative" onClick={back}>
//               <Icon name="chevron-left" className="icon absolute-y-center left-4" />
//               Back
//             </button>
//             <button type="submit" className="btn btn-primary">
//               Continue
//             </button>
//           </div>
//         </form>
//       </div>
//     </div>
//   );
// }

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

    const data = JSON.parse(localStorage.getItem("data")) || {};
    const localImages = data.images || [];
    
    
    try {
      const formData = new FormData();
      images.forEach((image) => {
        formData.append('image', image.file);
      });
      const formDataLength = formData.getAll('image').length;

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
          localStorage.setItem("data", JSON.stringify(data));

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