
"use client"

import SVGCercle from '../../../public/circle.svg';
import Image from 'next/image';
import Icon from '/components/Icon';
import { useDispatch, useSelector } from "react-redux";
import { useState, useEffect, useRef } from 'react';
import { userEdit } from '@/redux/features/auth/authSlice';
import axios from 'axios';
import { useRouter } from 'next/navigation'; 

export default function Page() {
    const dispatch = useDispatch();
    const router = useRouter();
    const { user, isLoading, error, token } = useSelector((state) => state.auth);
    const [id, setUserId] = useState("");
    const [fname, setfName] = useState("");
    const [lname, setlName] = useState("");
    const [email, setEmail] = useState("");
    const [phone, setPhone] = useState("");
    const [parmanentAddress, setParmanent] = useState("");
    const [image, setImage] = useState({});
    const [uploading, setUploading] = useState(false);
    const [hanlarotp, setOptSubmite] = useState(false);
    const [hanlarotpPhone, sethanlarotpPhone] = useState(false)
    const [otp, setOtp] = useState("");
  
    // Reference for hidden file input
    const fileInputRef = useRef(null);

    useEffect(() => {
        if (user.fname) setfName(user.fname);
        if (user.lname) setlName(user.lname);
        if (user.email) setEmail(user.email);
        if (user.phone) setPhone(user.phone);
        if (user.parmanentAddress) setParmanent(user.parmanentAddress);
        if (user._id) setUserId(user._id);
        if (user.profilePic) setImage(user.profilePic);
    }, [user, token]);

    const handleCopy = () => {
        navigator.clipboard.writeText(id).then(() => {
            alert("User ID copied to clipboard!");
        }).catch((error) => {
            console.error("Failed to copy text:", error);
        });
    };

    const userUpdate = async (e) => {
        e.preventDefault();
        const payload = {
            fname: fname || undefined,
            lname: lname || undefined,
            email: email || undefined,
            phone: phone || undefined,
            parmanentAddress: parmanentAddress || undefined,
            profilePic:image ,

        };
        dispatch(userEdit(payload));
    };

    const handleImageChange = async (e) => {
        const file = e.target.files[0];
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

    const triggerFileInput = () => {
        fileInputRef.current.click();
    };

    return (
        <div className='w-full h-full pt-16 pl-20 pr-40'>
            <div className='relative'>
                <h3 className='text-primary-400 text-2xl font-semibold'>Personal Info</h3>
                <button className='absolute-y-center -left-10' onClick={() => router.back()}>
                    <Icon className='icon' name='arrow-left' size={24} />
                </button>
            </div>

            {image.url ? (
                <Image src={image.url} height={120} width={120} alt="User Profile Image" onClick={triggerFileInput} />
            ) : uploading ? (
                <p>Uploading...</p>
            ) : (
                <Image src={SVGCercle} height={120} width={120} alt="Placeholder" onClick={triggerFileInput} />
            )}
            
            {/* Hidden file input */}
            <input
                ref={fileInputRef}
                type="file"
                accept="image/*"
                onChange={handleImageChange}
                style={{ display: 'none' }}  // Hide the input
            />

            <form onSubmit={userUpdate}>
                {/* <div className='border w-full rounded-lg relative py-3 px-4'>
                    <input
                        placeholder='User ID'
                        value={id}
                        readOnly
                    />
                    <button className='absolute right-4' onClick={handleCopy} type="button">
                        <Icon name='copy' className='icon inline mr-4' /> Copy
                    </button>
                </div> */}

                <div className='border w-1/2 rounded-lg relative py-3 px-4'>
                    <input
                        placeholder='First Name'
                        value={fname}
                        onChange={(e) => setfName(e.target.value)}
                    />
                </div>

                <div className='border w-1/2 rounded-lg relative py-3 px-4'>
                    <input
                        placeholder='Last Name'
                        value={lname}
                        onChange={(e) => setlName(e.target.value)}
                    />
                </div>

                <div className='border w-1/2 rounded-lg relative py-3 px-4'>
                    <input
                        placeholder='Phone'
                        value={phone}
                        onChange={(e) => setPhone(e.target.value)}
                    />
                </div>

                <div className='border w-1/2 rounded-lg relative py-3 px-4'>
                    <input
                        placeholder='Email'
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />
                </div>

                <div className='border w-full rounded-lg relative py-3 px-4'>
                    <input
                        placeholder='Address'
                        value={parmanentAddress}
                        onChange={(e) => setParmanent(e.target.value)}
                    />
                </div>

                {error && <div className='error-message text-red-500'>{error}</div>}
                <button className='btn btn-primary' type="submit">Save</button>
            </form>
        </div>
    );
}
