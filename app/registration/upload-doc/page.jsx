'use client';
import Icon from '/components/Icon';
import DropImage from '/components/DropImage';
import { useState, useEffect } from 'react';
import axios from 'axios';
import { useDispatch, useSelector } from 'react-redux';
import { useRouter } from 'next/navigation';
import { userEdit } from '@/redux/features/auth/authSlice';

export default function Page() {
    const [uploading, setUploading] = useState(false);
    const [docType, setDocType] = useState('');
    const { user, token } = useSelector((state) => state.auth);
    const router = useRouter();
    const dispatch = useDispatch();
    const [image, setImage] = useState({});
    const varificationId=null;
    const varificationIdType=null;
    
    useEffect(() => {
      if (!user || !user.isEmailVerified || !user.isPhoneVerified || !token) {
        alert("Please verify your email and phone number.");
        router.push("/user/profile");
      } 
      // console.log(user)
      if  (user?.varificationId) {
        // console.log(varificationId)
        setImage(user.varificationId);
      }
      if(user?.varificationIdType){
        
        setDocType(user.varificationIdType)
      }
    }, [user, token]);
    const handleImageChange = async (file) => {
      const formData = new FormData();
      formData.append("image", file);
      setUploading(true);
      try {
        const { data } = await axios.post("https://backend.bedbd.com/api/images/single-image-upload", formData);
        setImage({ url: data.url, public_id: data.public_id });
      } catch (err) {
        console.error("Image upload error:", err);
      } finally {
        setUploading(false);
      }
    };
  

     const handleSubmit = async(e) => {
        e.preventDefault();
        const payload = { 
          
          varificationId: image ,
          varificationIdType: docType
        };
        // console.log(payload);

     
        const resultAction = await dispatch(userEdit(payload));
        if (userEdit.fulfilled.match(resultAction)) {
          router.push("/registration/end");
          // console.log("success");
        } else {
          console.error("Error during user edit:", resultAction.payload);
        }
        // router.push("/registration/end");
      };


   const backToPrevious=(e)=>{
        e.preventDefault();
        router.push("/registration/upload-photo")
    }

    return (
        <div className="modal-background" >
            <div className="pt-14 pb-24 sm:px-24 px-16 bg-secondary-50 w-screen
             max-w-3.5xl absolute-center rounded-2xl">
                <h3 className="registration-form-title mb-12">Upload Document</h3>
                <form onSubmit={handleSubmit} className="w-96 relative-x-center rounded">
                    <select
                        name="doc-type"
                        className="outline-none w-full bg-transparent text-sm text-left py-3.5 px-6 mb-8 font-semibold text-neutral-500 border border-neutral-400 rounded-md"
                        value={docType}
                        onChange={(e) => setDocType(e.target.value)}
                    >
                        <option value="" disabled>Select document type</option>
                        <option value="dl">Driving Licence</option>
                        <option value="nid">National Identity Card</option>
                        <option value="passport">Passport</option>
                    </select>
                 
                    <div className="w-full h-60">
                    {/* <DropImageMultiple setImages={setImages}/> */}
                    <DropImage
              onImageUpload={handleImageChange}
              initialImage={user?.varificationId ?.url}
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
                <Icon name="arrow-left"
                onClick={backToPrevious}
                 className="text-neutral-600 cursor-pointer absolute top-8 left-8" />
            </div>
        </div>
    );
}
