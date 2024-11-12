// "use client";

// import Icon from '/components/Icon'
// import DropImage from '/components/DropImage'
// import { useState } from 'react';
// export default function page() {
//     const [image, setImage] = useState({});
//     const [uploading, setUploading] = useState(false);

//     const handleImageChange = async (e) => {
//         const file = e.target.files[0];
//         const formData = new FormData();
//         formData.append("image", file);
        
//         setUploading(true);
//         try {
//             const { data } = await axios.post("http://145.223.22.239:5001/api/images/single-image-upload", formData);
//             setImage({ url: data.url, public_id: data.public_id });
//         } catch (err) {
//             console.error("Image upload error:", err);
//         } finally {
//             setUploading(false);
//         }
//     };

//     return (
//         <div className='modal-background'>
//             <div className='pt-14 pb-24 sm:px-24 px-16 bg-secondary-50 w-screen max-w-3.5xl | absolute-center rounded-2xl'>
//                 <h3 className='registration-form-title mb-12' >Upload photo</h3>
//                 <form className='w-96 relative-x-center rounded'>
//                     <div className='w-full h-80'>
//                         <DropImage/>
//                     </div>
//                     <button className='btn btn-primary mt-10'>Continue</button>
//                 </form>                
//                 <Icon name='arrow-left' className='text-neutral-600 cursor-pointer absolute top-8 left-8'/>
//             </div>
//         </div>
        
//       )
// }
'use client';
import Icon from '/components/Icon';
import DropImage from '/components/DropImage';
import { useState } from 'react';
import axios from 'axios';
import { useDispatch, useSelector } from 'react-redux';
import { useRouter } from 'next/navigation';
import { userEdit } from '@/redux/features/auth/authSlice';

export default function Page() {
  const [image, setImage] = useState({});
  const [uploading, setUploading] = useState(false);
  const { user, isLoading, error, token } = useSelector((state) => state.auth);

  const handleImageChange = async (file) => {
    const formData = new FormData();
    formData.append("image", file);
    setUploading(true);
    try {
      const { data } = await axios.post("http://145.223.22.239:5001/api/images/single-image-upload", formData);
    //   console.log(data);
      setImage({ url: data.url, public_id: data.public_id });
    } catch (err) {
      console.error("Image upload error:", err);
    } finally {
      setUploading(false);
    }
  };
  const router=useRouter();
  const dispatch=useDispatch();
  useEffect(() => {
    if(!user && !user.isEmailVerified && !isPhoneVerified && !token){
        alert("please Verify your Email and Phone number ")
        return router.push("/user/profile")
    }

}, [user, token]);
const handleSubmite=async(e)=>{
    e.preventDefault();
    try{
      
        const payload={
            varificationImage:image,
        }
        dispatch(userEdit(payload));
        router.push("/registration/upload-doc")
    }catch(error){
        console.log(error)
    }
}
  return (
    <div className='modal-background'>
      <div className='pt-14 pb-24 sm:px-24 px-16 bg-secondary-50 w-screen max-w-3.5xl absolute-center rounded-2xl'>
        <h3 className='registration-form-title mb-12'>Upload photo</h3>
        <form className='w-96 relative-x-center rounded'>
          <div className='w-full h-80'>
            <DropImage onImageUpload={handleImageChange} />
          </div>
          <button 
            className='btn btn-primary mt-10' 
            disabled={uploading}
          >
            {uploading ? "Uploading..." : "Continue"}
          </button>
        </form>
        <Icon name='arrow-left' className='text-neutral-600 cursor-pointer absolute top-8 left-8' />
      </div>
    </div>
  );
}
