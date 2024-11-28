
// 'use client';
// import Icon from '/components/Icon';
// import DropImage from '/components/DropImage';
// import { useState,useEffect } from 'react';
// import axios from 'axios';
// import { useDispatch, useSelector } from 'react-redux';
// import { useRouter } from 'next/navigation';
// import { userEdit } from '@/redux/features/auth/authSlice';

// export default function Page() {
//   const [image, setImage] = useState({});
//   const [uploading, setUploading] = useState(false);
//   const { user, isLoading, error, token } = useSelector((state) => state.auth);

//   const handleImageChange = async (file) => {
//     const formData = new FormData();
//     formData.append("image", file);
//     setUploading(true);
//     try {
//       const { data } = await axios.post("http://145.223.22.239:5001/api/images/single-image-upload", formData);
//     //   console.log(data);
//       setImage({ url: data.url, public_id: data.public_id });
//     } catch (err) {
//       console.error("Image upload error:", err);
//     } finally {
//       setUploading(false);
//     }
//   };
//   const router=useRouter();
//   const dispatch=useDispatch();
//   useEffect(() => {
//     if(!user && !user.isEmailVerified && !isPhoneVerified && !token){
//         alert("please Verify your Email and Phone number ")
//         return router.push("/user/profile")
//     }
//      if(user?.varificationImage){
//       setImage({varificationImage})
//      }
// }, [user, token]);
// const handleSubmite=async(e)=>{
//     e.preventDefault();
//     try{
      
//         const payload={
//             varificationImage:image,
//         }
//         dispatch(userEdit(payload));
//         if (userEdit.fulfilled.match(resultAction)) {
//           router.push("/registration/upload-doc");
//           } else {
//           console.log("Error during phone login:", resultAction.payload);
//           }
//         // router.push("/registration/upload-doc");
//     }catch(error){
//         console.log(error)
//     }
// }
// const backToPrevious=(e)=>{
//   e.preventDefault();
//   router.push("/registration/terms-conditions")
// }
//   return (
//     <div className='modal-background'>
//       <div className='pt-14 pb-24 sm:px-24 px-16 bg-secondary-50 w-screen max-w-3.5xl absolute-center rounded-2xl'>
//         <h3 className='registration-form-title mb-12'>Upload photo</h3>
//         <form className='w-96 relative-x-center rounded'>
//           <div className='w-full h-80'>
//             <DropImage onImageUpload={handleImageChange} />
//           </div>
//           <button 
//             className='btn btn-primary mt-10' 
//             disabled={uploading}
//           >
//             {uploading ? "Uploading..." : "Continue"}
//           </button>
//         </form>
//         <Icon name="arrow-left"
//                 onClick={backToPrevious}
//                  className="text-neutral-600 cursor-pointer absolute top-8 left-8" />
//       </div>
//     </div>
//   );
// }
'use client';
import Icon from '/components/Icon';
import DropImage from '/components/DropImage';
import { useState, useEffect } from 'react';
import axios from 'axios';
import { useDispatch, useSelector } from 'react-redux';
import { useRouter } from 'next/navigation';
import { userEdit } from '@/redux/features/auth/authSlice';

export default function Page() {
  const [image, setImage] = useState({});
  const [uploading, setUploading] = useState(false);
  const { user, token } = useSelector((state) => state.auth);
  const router = useRouter();
  const dispatch = useDispatch();
const profilePic=null;

  useEffect(() => {
    if (!user || !user.isEmailVerified || !user.isPhoneVerified || !token) {
      alert("Please verify your email and phone number.");
      router.push("/user/profile");
    } 
    // console.log(user)
    if  (user?.profilePic) {
      console.log(profilePic)
      setImage(user.profilePic);
    }
  }, [user, token]);

  const handleImageChange = async (file) => {
    const formData = new FormData();
    formData.append("image", file);
    setUploading(true);
    try {
      const { data } = await axios.post("http://backend.bedbd.com/api/images/single-image-upload", formData);
      setImage({ url: data.url, public_id: data.public_id });
    } catch (err) {
      console.error("Image upload error:", err);
    } finally {
      setUploading(false);
    }
  };

  const handleSubmit = async(e) => {
    e.preventDefault();
    const payload = { profilePic: image };
    // dispatch(userEdit(payload));
    const resultAction = await dispatch(userEdit(payload));
    if (userEdit.fulfilled.match(resultAction)) {
      router.push("/registration/upload-doc");
    } else {
      console.error("Error during user edit:", resultAction.payload);
    }
    router.push("/registration/upload-doc");
  };

  const backToPrevious = (e) => {
    e.preventDefault();
    router.push("/registration/terms-conditions");
  };

  return (
    <div className="modal-background">
      <div className="pt-14 pb-24 sm:px-24 px-16 bg-secondary-50 w-screen max-w-3.5xl absolute-center rounded-2xl">
        <h3 className="registration-form-title mb-12">Upload photo</h3>
        <form onSubmit={handleSubmit} className="w-96 relative-x-center rounded">
          <div className="w-full h-80">
            <DropImage
              onImageUpload={handleImageChange}
              initialImage={user?.profilePic?.url}
            />
          </div>
          <button
            type="submit"
            className="btn btn-primary mt-10"
            disabled={uploading}
          >
            {uploading ? "Uploading..." : "Continue"}
          </button>
        </form>
        <Icon
          name="arrow-left"
          onClick={backToPrevious}
          className="text-neutral-600 cursor-pointer absolute top-8 left-8"
        />
      </div>
    </div>
  );
}
