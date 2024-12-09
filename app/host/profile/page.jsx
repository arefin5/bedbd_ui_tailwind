
"use client"

import SVGCercle from '../../../public/circle.svg'
import Image from 'next/image'
import Icon from '/components/Icon'
import { useDispatch, useSelector } from "react-redux";
import { useState, useEffect, useRef } from 'react'
import { userEdit, verifyOtpEmail, verifyOtp } from '@/redux/features/auth/authSlice';
import axiosInstance from '@/redux/services/axiosInstance';
import axios from 'axios';

export default function profile() {
  const [id, setUserId] = useState("")
  const [fname, setfName] = useState("");
  const [lname, setlName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [parmanentAddress, setParmanent] = useState("");
  const [presentAddress, setPresentAddress] = useState("");
  const [about, setAbout] = useState("");
  const [image, setImage] = useState({});
  const [uploading, setUploading] = useState(false);
  const [cover, setCover] = useState({})
  const fileInputRef = useRef(null);
  const fileInputRefCover = useRef(null);
  const [hanlarotp, setOptSubmite] = useState(false);
  const [hanlarotpPhone, sethanlarotpPhone] = useState(false)
  const [otp, setOtp] = useState("");
  const [birth, setBirth] = useState("");
  const [ageWarning, setAgeWarning] = useState(""); // Warning message
   let age=0;

  // const handleDateChange = (e) => {
  //   const inputDate = e.target.value;
  //   setBirth(inputDate);

  //   // Check if the date format is valid (dd/mm/yyyy)
  //   const [day, month, year] = inputDate.split("/").map(Number);

  //   if (day && month && year) {
  //     const birthDate = new Date(year, month - 1, day); // Convert to a Date object
  //     const today = new Date();

  //     // Calculate age
  //      age = today.getFullYear() - birthDate.getFullYear();
  //     const monthDiff = today.getMonth() - birthDate.getMonth();
  //     const dayDiff = today.getDate() - birthDate.getDate();

  //     if (monthDiff < 0 || (monthDiff === 0 && dayDiff < 0)) {
  //       age--; // Adjust age if the birthdate hasn't occurred yet this year
  //     }

  //     // Check if the user is under 18
  //     if (age < 18) {
  //       setAgeWarning("You are under age.");
  //     } else {
  //       setAgeWarning(""); // Clear the warning if age is 18 or older
  //     }
  //   } else {
  //     setAgeWarning("Invalid date format. Please use dd/mm/yyyy.");
  //   }
  // };
  const handleDateChange = (e) => {
    const inputDate = e.target.value; // Format: yyyy-mm-dd
    setBirth(inputDate);
  
    const birthDate = new Date(inputDate);
    const today = new Date();
  
    let age = today.getFullYear() - birthDate.getFullYear();
    const monthDiff = today.getMonth() - birthDate.getMonth();
    const dayDiff = today.getDate() - birthDate.getDate();
  
    if (monthDiff < 0 || (monthDiff === 0 && dayDiff < 0)) {
      age--;
    }
  
    // Show warning if age is under 18
    if (age < 18) {
      setAgeWarning("You are under age.");
    } else {
      setAgeWarning("");
    }
  };
  
  const dispatch = useDispatch();
  const { user, isLoading, error, token } = useSelector((state) => state.auth);

  useEffect(() => {
    setfName(user.fname || "");
    setlName(user.lname || "");
    setEmail(user.email || "");
    setPhone(user.phone || "");
    setParmanent(user.parmanentAddress || " ");
    setPresentAddress(user.presentAddress || "");
    setCover(user.cover || {});
    setImage(user.profilePic || {});
    setAbout(user.about || "");
    setUserId(user._id);
    setBirth(user?.birth)
  }, [user, token, hanlarotp, hanlarotpPhone])

  const handleCopy = () => {
    navigator.clipboard.writeText(id).then(() => {
      alert("User ID copied to clipboard!");
    }).catch((error) => {
      console.error("Failed to copy text: ", error);
    });
  };
  const userUpdate = async (e) => {
    e.preventDefault();
    const birthDate = new Date(birth);
    const today = new Date();
  
    let computedAge = today.getFullYear() - birthDate.getFullYear();
    const monthDiff = today.getMonth() - birthDate.getMonth();
    const dayDiff = today.getDate() - birthDate.getDate();
  
    if (monthDiff < 0 || (monthDiff === 0 && dayDiff < 0)) {
      computedAge--;
    }
    const payload = {
      fname: fname || undefined,
      lname: lname || undefined,
      email: email || undefined,
      phone: phone || undefined,
      parmanentAddress: parmanentAddress || undefined,
      presentAddress: presentAddress || user.presentAddress || undefined,
      about: about || undefined,
      profilePic: image,
      cover: cover || undefined,
      birth,
    age: computedAge,
    };
    console.log(payload)
    // profilePic
    dispatch(userEdit(payload));
    // console.log(image);
    // console.log(payload.profilePic)
  };
  const handleImageChange = async (e) => {
    const file = e.target.files[0];
    let formData = new FormData();
    formData.append("image", file);
    // console.log([...formData]);
    setUploading(true);
    try {
      const { data } = await axios.post("https://backend.bedbd.com/api/images/single-image-upload", formData);
      // console.log("uploaded image => ", data);
      setImage({
        url: data.url,
        public_id: data.public_id,
      });
      setUploading(false);
    } catch (err) {
      console.log(err);
      setUploading(false);
    }
  };
  const handleImageCoverChange = async (e) => {
    const file = e.target.files[0];
    let formData = new FormData();
    formData.append("image", file);
    // console.log([...formData]);
    setUploading(true);
    try {
      const { data } = await axios.post("https://backend.bedbd.com/api/images/single-image-upload", formData);
      // console.log("uploaded image => ", data);
      setCover({
        url: data.url,
        public_id: data.public_id,
      });
      setUploading(false);
    } catch (err) {
      console.log(err);
      setUploading(false);
    }
  };
  const triggerFileInput = () => {
    fileInputRef.current.click();
  };
  const triggerFileInputCover = () => {
    fileInputRefCover.current.click();
  };

  const otpGenerateEmail = async (e) => {
    e.preventDefault();
    try {
      const response = await axiosInstance.post("/generate-otp", { email });
      console.log(response);

      if (response.status === 200) {
        setOptSubmite(true);
        alert("OTP sent successfully!");
      }
    } catch (error) {
      console.error("Error sending OTP:", error);
    }
  };
  const VerifyedEmail = (e) => {
    e.preventDefault();
     dispatch(verifyOtpEmail({ email, otp }));
     setOptSubmite(false);
     sethanlarotpPhone(false);
     setOtp("")
  };

  // phone 
  const otpGeneratePhone = async (e) => {
    e.preventDefault();
    try {
      const response = await axiosInstance.post("/generate-otp-phone", { phone });
      console.log(response);

      if (response.status === 200) {
        sethanlarotpPhone(true)
        alert("OTP sent successfully!");
      }
    } catch (error) {
      console.error("Error sending OTP:", error);
    }
  };
  const VerifyedPhone = (e) => {
    e.preventDefault();
    dispatch(verifyOtp({ phone, otp }));
    sethanlarotpPhone(false)
    setOptSubmite(false);
    setOtp("")
  };

  return (
    <div className="w-full">
      <div className="w-full bg-secondary-50 rounded-lg h-64 relative ">
        {cover.url ? (
          <Image
            src={cover.url}
            height={120} width={120}
            alt="User Cover photo Image"
            onClick={triggerFileInputCover} />
        ) : uploading ? (
          <p>Uploading...</p>
        ) : (
          <Image src={SVGCercle} height={120} width={120} alt="Placeholder"
            onClick={triggerFileInputCover} />
        )}

        {/* cover */}
        <input
          ref={fileInputRefCover}
          onChange={handleImageCoverChange}
          type="file"
          accept="image/*"
          style={{ display: 'none' }}
        />

      </div>
      <div className="flex">
        <div className=" bg-secondary-50  w-80 relative rounded-lg pt-32 px-6"  >
          <div className="absolute min-w-64 h-64 rounded-full overflow-hidden absolute-x-center -top-40">


          </div>

          {/* profile  */}
          {image.url ? (
            <Image
              src={image.url}
              height={120} width={120}
              alt="User Profile Image"
              onClick={triggerFileInput} />
          ) : uploading ? (
            <p>Uploading...</p>
          ) : (
            <Image src={SVGCercle} height={120} width={120} alt="Placeholder"
              onClick={triggerFileInput} />
          )}

          {/* Hidden file input */}
          <input
            ref={fileInputRef}
            type="file"
            accept="image/*"
            onChange={handleImageChange}
            style={{ display: 'none' }}  // Hide the input
          />
          {/*  */}
          <textarea id="about-text"
            className="py-6 px-4 h-80 w-72 max-w-full mt-4 bg-white rounded-lg "
            placeholder="say something about yourself"
            value={about}
            onChange={(e) => setAbout(e.target.value)}
          ></textarea>
          <button className=" cursor-pointer mt-4 relative-x-center hover:underline text-red-500"> Delete Account </button>
        </div>
        <form className=" bg-secondary-50 w-full max-w-3xl  rounded-lg py-10 px-6 " onSubmit={userUpdate}>
          {/* <div className="">
            <input
              className="w-full border border-neutral-300 py-3 px-4 rounded-md"
              placeholder="User ID"
              value={id}
              readOnly />
          </div> */}

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
            {user && user.isPhoneVerified ? (
              <p>verified </p>
            ) : (
              <button className='
              btn btn-secondary mt-2' onClick={otpGeneratePhone}>Please Verified Your Phone Number </button>
            )
            }
            {hanlarotpPhone && (
              <>
                <input
                  className="w-full border border-neutral-300 py-3 px-4 rounded-md"
                  placeholder="OTP"
                  value={otp}
                  onChange={(e) => setOtp(e.target.value)}
                />
                <button onClick={VerifyedPhone} className="btn btn-primary mt-2">
                  Submit OTP
                </button>
              </>
            )}
          </div>

          <div className="w-1/2">
            <input
              className="w-full border border-neutral-300 py-3 px-4 rounded-md"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            {user && user.isEmailVerified ? (
              <p>verified </p>
            ) : (
              <button onClick={otpGenerateEmail} className="btn btn-secondary mt-2">
                   Please  Verifiy
                </button>
             
            )
            }
            {hanlarotp && (
              <>
                <input
                  className="w-full border border-neutral-300 py-3 px-4 rounded-md"
                  placeholder="OTP"
                  value={otp}
                  onChange={(e) => setOtp(e.target.value)}
                />
                <button onClick={VerifyedEmail} className="btn btn-primary mt-2">
                  Submit OTP
                </button>
              </>
            )}
          </div>
          <div className="">
            {/* <input className="w-full border border-neutral-300 py-3 px-4 rounded-md" placeholder="ID No." /> */}
          </div>

          {/* <div className="">
            <input className="w-full border border-neutral-300 py-3 px-4 rounded-md"
              placeholder="Present Address"
              value={presentAddress}
              onChange={(e) => setPresentAddress(e.target.value)}
            />
          </div> */}

          <div className="">
            <input className="w-full border border-neutral-300 py-3 px-4 rounded-md"
              placeholder="Address"
              value={parmanentAddress}
              onChange={(e) => setParmanent(e.target.value)}

            />
         
            </div>
            <div className="">
            {/* <input className="w-full border border-neutral-300 py-3 px-4 rounded-md"
              placeholder="dd/mm/yyyy"
              value={birth}
              onChange={(e) => setBirth(e.target.setBirth)}

<input
  type="date"
  value={birth}
  onChange={(e) => setBirth(e.target.value)}
  className="w-full border border-neutral-300 py-3 px-4 rounded-md"
/>
            /> */}
            <input
  type="date"
  value={birth}
  onChange={(e) => setBirth(e.target.value)}
  className="w-full border border-neutral-300 py-3 px-4 rounded-md"
/>
               {ageWarning && (
        <p className="text-red-500 mt-2">{ageWarning}</p>
      )}
          </div>
          {error && <div className='error-message text-red-500'>{error}</div>}
          <button  disabled={!!ageWarning}
           className="btn btn-primary relative-x-center max-w-72" type="submit">Save</button>
        </form>
      </div>

    </div>
  )
}