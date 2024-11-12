
// 'use client';
// import Icon from '/components/Icon';
// import DropImage from '/components/DropImage';
// import { useState } from 'react';
// import axios from 'axios';
// import { useDispatch, useSelector } from 'react-redux';
// import { useRouter } from 'next/navigation';
// import { userEdit } from '@/redux/features/auth/authSlice';

// export default function page() {
//     // if (varificationId) user.varificationId = varificationId;
//     // if (varificationIdType) user.varificationIdType = varificationIdType;

//     const [image, setImage] = useState({});
//     const [uploading, setUploading] = useState(false);
//     const { user, isLoading, error, token } = useSelector((state) => state.auth);

//     const handleImageChange = async (file) => {
//         const formData = new FormData();
//         formData.append("image", file);
//         setUploading(true);
//         try {
//             const { data } = await axios.post("http://145.223.22.239:5001/api/images/single-image-upload", formData);
//             //   console.log(data);
//             setImage({ url: data.url, public_id: data.public_id });
//         } catch (err) {
//             console.error("Image upload error:", err);
//         } finally {
//             setUploading(false);
//         }
//     };
//     const router = useRouter();
//     const dispatch = useDispatch();
//     useEffect(() => {
//         if (!user && !user.isEmailVerified && !isPhoneVerified && !token) {
//             alert("please Verify your Email and Phone number ")
//             return router.push("/user/profile")
//         }

//     }, [user, token]);
//     const handleSubmite = async (e) => {
//         e.preventDefault();
//         try {

//             const payload = {
//                 varificationId: image,
//                 varificationIdType:
//             }
//             dispatch(userEdit(payload));
//             router.push("/upload-doc")
//         } catch (error) {
//             console.log(error)
//         }
//     }

//     return (
//         <div className='modal-background'>
//             <div className='pt-14 pb-24 sm:px-24 px-16 bg-secondary-50 w-screen max-w-3.5xl | absolute-center rounded-2xl'>
//                 <h3 className='registration-form-title mb-12' >Upload Document</h3>
//                 <form className='w-96 relative-x-center rounded'>
//                     <select name='doc-type' className="outline-none w-full bg-transparent text-sm text-left py-3.5 px-6 mb-8 font-semibold text-neutral-500 border border-neutral-400 rounded-md ">
//                         <option className='py-3.5' value=''>Select document type</option>
//                         <option className='py-3.5' value='dl'>Driving Licence</option>
//                         <option className='py-3.5' value='nid'>National Identity Card</option>
//                         <option className='py-3.5' value='passport'>Passport</option>
//                     </select>
//                     <div className='w-full h-60'>
//                         <DropImage onImageUpload={handleImageChange} />
//                     </div>
//                     <button
//                         className='btn btn-primary mt-10'
//                         disabled={uploading}
//                     >
//                         {uploading ? "Uploading..." : "Continue"}
//                     </button>
//                 </form>
//                 <Icon name='arrow-left' className='text-neutral-600 cursor-pointer absolute top-8 left-8' />
//             </div>
//         </div>

//     )
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
    const [docType, setDocType] = useState('');
    const { user, token } = useSelector((state) => state.auth);
    const router = useRouter();
    const dispatch = useDispatch();

    useEffect(() => {
        if (!user || !user.isEmailVerified || !user.isPhoneVerified || !token) {
            alert("Please verify your email and phone number.");
            router.push("/user/profile");
        }
    }, [user, token]);

    const handleImageChange = async (file) => {
        const formData = new FormData();
        formData.append("image", file);
        setUploading(true);
        try {
            const { data } = await axios.post("http://145.223.22.239:5001/api/images/single-image-upload", formData);
            setImage({ url: data.url, public_id: data.public_id });
        } catch (err) {
            console.error("Image upload error:", err);
        } finally {
            setUploading(false);
        }
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!docType) {
            alert("Please select a document type.");
            return;
        }
        const payload = {
            verificationId: image,
            verificationIdType: docType
        };
        dispatch(userEdit(payload));
        router.push("/registration/end");
    };
    const Back=(e)=>{
        e.preventDefault();
        router.push("/registration/upload-photo")
    }

    return (
        <div className="modal-background">
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
                        <DropImage onImageUpload={handleImageChange} />
                    </div>
                    <button
                        type="submit"
                        className="btn btn-primary mt-10"
                        disabled={uploading}
                    >
                        {uploading ? "Uploading..." : "Continue"}
                    </button>
                </form>
                <Icon name="arrow-left" className="text-neutral-600 cursor-pointer absolute top-8 left-8" />
            </div>
        </div>
    );
}
