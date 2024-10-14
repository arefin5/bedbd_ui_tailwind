"use client"

import SVGCercle from '../../../public/circle.svg'
import Image from 'next/image'
import Icon from '/components/Icon'
import { useDispatch, useSelector } from "react-redux";
import { useState, useEffect } from 'react'
import { userEdit } from '@/redux/features/auth/authSlice';

export default function profile() {
  const [id, setUserId] = useState("")
  const [fname, setfName] = useState("");
  const [lname, setlName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [parmanentAddress, setParmanent] = useState("");
  const [presentAddress, setPresentAddress] = useState("");
  const dispatch = useDispatch();
  const { user, isLoading, error, token } = useSelector((state) => state.auth);
  useEffect(() => {
    setfName(user.fname || "");
    setlName(user.lname || "")
    setEmail(user.email || "");
    setPhone(user.phone || "");
    setParmanent(user.parmanentAddress || " ");
    setPresentAddress(user.presentAddress || "");
    setUserId(user._id)
  }, [user, token])
  const handleCopy = () => {
    navigator.clipboard.writeText(id).then(() => {
      alert("User ID copied to clipboard!");
    }).catch((error) => {
      console.error("Failed to copy text: ", error);
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
      presentAddress:presentAddress || user.presentAddress || undefined
    };
    
    dispatch(userEdit(payload));
  };
  // const userUpdate = async (e) => {
  //   try {
  //     e.preventDefault();
  //     console.log("start User Editor ");
  //     dispatch(userEdit({ fname, lname, email, phone, parmanentAddress }));
  //   } catch (error) {
  //     console.log(error)
  //   }
  // }
  return (
    <div className="w-full">
      <div className="w-full bg-secondary-50 rounded-lg h-64 relative ">
        <button className="absolute-center border border-neutral-500 rounded-lg py-3 px-14"><Icon name='upload' size={24} className="icon inline w-max mr-2" /> Browser</button>
      </div>
      <div className="flex">
        <div className=" bg-secondary-50  w-80 relative rounded-lg pt-32 px-6"  >
          <div className="absolute min-w-64 h-64 rounded-full overflow-hidden absolute-x-center -top-40">
            <Image
              className="object-cover"
              alt='...'
              src='https://s3-alpha-sig.figma.com/img/9426/3d80/328ad64aebfeeac45c8e75b49193f69f?Expires=1721606400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=WaQfc7QT9MhYNK0ELmuXw~FJbN7HW8rVoE4rOCerGzhpnehjFmZJX88vOZlQSOCVmAX44s5TsDubx-ukT8HY3tDxkXb1K-9CWvbOUgZ8oimP0XUF5Pj-xXChJ5NoqGa95zAlebxJK0K65m~y4bgwKNO3yu-l1v8t-DpXHzEp7mIUkHmCEL0PngV0ybFNEb1Lcl7d8kabmtDYCv2KYh7z5WJN0vgi1bYyEFa6SeDssQU1NwFfpdEEhw7N0wTsXTWOOPDVdKVieClpJpkJuwVAudcdsf12JkvykFFE8yfrYI1x-zBUWmFY8hYuBpoKuzxDHGoBbwmCcfrt3QuVuBf0JA__' fill />
          </div>
          <button className="border border-neutral-500 rounded-lg py-3 px-14 relative-x-center">
            <Icon name='upload' size={24} className="icon inline w-max mr-2" /> Browser</button>
          <textarea id="about-text" className="py-6 px-4 h-80 w-72 max-w-full mt-4 bg-white rounded-lg " placeholder="say something about yourself"></textarea>
          <button className=" cursor-pointer mt-4 relative-x-center hover:underline text-red-500"> Delete Account </button>
        </div>
        <form className=" bg-secondary-50 w-full max-w-3xl  rounded-lg py-10 px-6 " onSubmit={userUpdate}>
          <div className="">
            <input
              className="w-full border border-neutral-300 py-3 px-4 rounded-md"
              placeholder="User ID"
              value={id}
              readOnly />
          </div>

          <div className="w-1/2 inline-block ">
            <input
              className="w-full border border-neutral-300 py-3 px-4 rounded-md"
              placeholder="First Name"
              value={fname}
              onChange={(e) => setfName(e.target.value)}
            />
          </div>

          <div className="w-1/2">
            <input
              className="w-full border border-neutral-300 py-3 px-4 rounded-md"
              placeholder="Last Name"

              value={lname}
              onChange={(e) => setlName(e.target.value)}
            />
          </div>

          <div className="w-1/2">
            <input className="w-full border border-neutral-300 py-3 px-4 rounded-md"
              placeholder="Phone"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
            />
          </div>

          <div className="w-1/2">
            <input
              className="w-full border border-neutral-300 py-3 px-4 rounded-md"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>


          <div className="">
            <input className="w-full border border-neutral-300 py-3 px-4 rounded-md" placeholder="ID No." />
          </div>

          <div className="">
            <input className="w-full border border-neutral-300 py-3 px-4 rounded-md"
              placeholder="Present Address"
              value={presentAddress}
              onChange={(e) => setPresentAddress(e.target.value)}
            />
          </div>

          <div className="">
            <input className="w-full border border-neutral-300 py-3 px-4 rounded-md"
              placeholder="Parmanent Address"
              value={parmanentAddress}
              onChange={(e) => setParmanent(e.target.value)}

            />
          </div>
          {error && <div className='error-message text-red-500'>{error}</div>}
          <button className="btn btn-primary relative-x-center max-w-72" type="submit">Edit/Save</button>
        </form>
      </div>

    </div>
  )
}
