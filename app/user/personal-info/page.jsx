
"use client"

import SVGCercle from '../../../public/circle.svg'
import Image from 'next/image'
import Icon from '/components/Icon'
import { useDispatch, useSelector } from "react-redux";
import { useState ,useEffect} from 'react'
import { userEdit } from '@/redux/features/auth/authSlice';

export default function page() {
       const dispatch = useDispatch();
       const { user, isLoading, error,token } = useSelector((state) => state.auth);
       const [id,setUserId]=useState("")
       const [fname,setfName]=useState("");
       const [lname,setlName]=useState("");
       const [email,setEmail]=useState("");
       const [phone,setPhone]=useState("");
       const [parmanentAddress,setParmanent]=useState("");
       useEffect(()=>{
             setfName(user.fname|| "");
             setlName(user.lname || "")
             setEmail(user.email|| "");
             setPhone(user.phone|| "");
             setParmanent(user.parmanentAddress || " ");
             setUserId(user._id)
       },[user,token])
           const handleCopy = () => {
        navigator.clipboard.writeText(id).then(() => {
            alert("User ID copied to clipboard!");
        }).catch((error) => {
            console.error("Failed to copy text: ", error);
        });
    };
    const userUpdate=async(e)=>{
        try{
            e.preventDefault();
            console.log("start User Editor ");
              dispatch(userEdit({ fname, lname, email, phone, parmanentAddress }));
        }catch(error){
            console.log(error)
        }
    }
  return (
    <div className='w-full h-full pt-16 pl-20 pr-40'>
        <div className='relative'>
            <h3 className='text-primary-400 text-2xl font-semibold'>Personal Info</h3>
            <button className='absolute-y-center -left-10'>
                <Icon className='icon' name='arrow-left' size={24} />
            </button>
        </div>
        <Image src={SVGCercle} height={120} width={120}/>
        <form onSubmit={userUpdate}>
            <div className='border w-full rounded-lg relative py-3 px-4'>
                <input placeholder='User iD' 
                        value={id}
                        readOnly
                 />
                <button className='absolute right-4' onClick={handleCopy}  type="button" >
                  <Icon name='copy' className='icon inline mr-4'/> Copy
                </button>
            </div>

            <div className='border w-1/2 rounded-lg relative py-3 px-4 '>
                <input placeholder='First Name'
                  value={fname}
                  onChange={(e) => setfName(e.target.value)}
                 />
            </div>

            <div className='border w-1/2 rounded-lg relative py-3 px-4 '>
                <input
                 placeholder='Last Name'
                 value={lname}
                 onChange={(e) => setlName(e.target.value)}

                />
            </div>

            <div className='border w-full rounded-lg relative py-3 px-4'>
                <input placeholder='ID No' />
            </div>

            <div className='border w-1/2 rounded-lg relative py-3 px-4 '>
                <input placeholder='Phone'
                   value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                 />
            </div>

            <div className='border w-1/2 rounded-lg relative py-3 px-4 '>
                <input placeholder='Email'
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                 />
            </div>

            <div className='border w-full rounded-lg relative py-3 px-4'>
                <input placeholder='Permanent Address' 
                  value={parmanentAddress}
                  onChange={(e) =>setParmanent(e.target.value)}
                   />
            </div>
            {error && <div className='error-message text-red-500'>{error}</div>}
            <button className='btn btn-primary'>Edit</button>
        </form>
    </div>
  )
}
