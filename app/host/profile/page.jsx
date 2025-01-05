
"use client"

import SVGCercle from '../../../public/circle.svg'
import Image from 'next/image'
import Icon from '/components/Icon'
import { useDispatch, useSelector } from "react-redux";
import { useState, useEffect, useRef ,memo,useCallback} from 'react'
import { userEdit, verifyOtpEmail, verifyOtp } from '@/redux/features/auth/authSlice';
import axiosInstance from '@/redux/services/axiosInstance';
import axios from 'axios';

const MemoizedIcon = memo(({ name, className }) => (
  <Icon name={name} className={className} />
));

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
  const [ageWarning, setAgeWarning] = useState(false); // Warning message
  let age = 0;
  const [customeError,setError]=useState(false);
  
  const [loadings,setLoadings]=useState(false);
  const [message,setMessage]=useState("")

  const dispatch = useDispatch();
  const { user, isLoading, error, token } = useSelector((state) => state.auth);
  const [showPassword, setShowPassword] = useState(false);
   const [otpErro,setOptError]=useState("")
   const [otpMsg,setOtpMsg]=useState("")
//  <Icon name="badge-check" className="icon inline" />




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
    setBirth(user?.birth);
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
    setMessage(false)
    const birthDate = new Date(birth);
    const today = new Date();
    setLoadings(true);

    let computedAge = today.getFullYear() - birthDate.getFullYear();
    const monthDiff = today.getMonth() - birthDate.getMonth();
    const dayDiff = today.getDate() - birthDate.getDate();

    if (monthDiff < 0 || (monthDiff === 0 && dayDiff < 0)) {
      computedAge--;
    }
    if(computedAge<18){
    return  setAgeWarning(true)
    } 
    const sanitizedPhone = handlePhoneChange(phone);

    if (!sanitizedPhone) {
      console.error("Invalid phone number");
      // alert("Please enter a valid phone number!"); // Notify the user
      setError(true);
      
      return;
    }
    const payload = {
      fname: fname || undefined,
      lname: lname || undefined,
      email: email || undefined,
      phone: sanitizedPhone || undefined,
      parmanentAddress: parmanentAddress || undefined,
      presentAddress: presentAddress || user.presentAddress || undefined,
      about: about || undefined,
      profilePic: image,
      cover: cover || undefined,
      birth,
      age: computedAge,
    };
    // console.log(payload)
    // profilePic
    // if(ageWarning)
    // dispatch(userEdit(payload));
    const resultAction =  await   dispatch(userEdit(payload));
     
        if (userEdit.fulfilled.match(resultAction)) {
          setError(false);
          
          setMessage("profile Update Success")
        setLoadings(false);
        } else {
          console.error("Error during user edit:", resultAction.payload);
        }
    // console.log(image);
    // console.log(payload.profilePic)
  };
  const handlePhoneChange = (phone) => {
    let input = phone.trim(); // Trim whitespace
  
    // Remove "+88" or "88" from the beginning
    if (input.startsWith("+88")) {
      input = input.slice(3);
    } else if (input.startsWith("88")) {
      input = input.slice(2);
    }
  
    // Check if the phone number is valid (starts with "01" and has 11 digits)
    const phoneRegex = /^01\d{9}$/;
    if (phoneRegex.test(input)) {
      return input; // Return the sanitized phone number
    } else {
      setError(true)
     
      return ""; // Return empty if invalid
    }
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
        setOtpMsg("OTP sent successfully!");
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
    setOtp("");
    window.location.href = "/host/profile";
  };

  // phone 
  const otpGeneratePhone = async (e) => {
    e.preventDefault();
    try {
      const response = await axiosInstance.post("/generate-otp-phone", { phone });
      // console.log(response);

      if (response.status === 200) {
        sethanlarotpPhone(true)
        setOtpMsg("OTP sent successfully!");
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
    setOtp("");
    window.location.href = "/host/profile";
  };

  return (
    <div className="ml-5 relative w-full">
    {/*  */}
    <div className="w-full bg-secondary-50 h-64 rounded-lg relative overflow-hidden">
    {cover.url ? (
      <img
        src={cover.url}
        alt="Cover"
        className="w-full h-full object-cover cursor-pointer"
        onClick={triggerFileInputCover}
      />
    ) : (
      <div
        className="w-full h-full bg-gray-200 flex items-center justify-center cursor-pointer"
        onClick={triggerFileInputCover}
      >
        <p>Upload Cover Image</p>
      </div>
    )}
    <input
      ref={fileInputRefCover}
      type="file"
      accept="image/*"
      onChange={handleImageCoverChange}
      style={{ display: 'none' }}
    />
  </div>

  {/* Profile Image */}
  <div className="absolute top-48 left-8 w-32 h-32 rounded-full border-4 border-white overflow-hidden bg-gray-100">
    {image.url ? (
      <img
        src={image.url}
        alt="Profile"
        className="w-full h-full object-cover cursor-pointer"
        onClick={triggerFileInput}
      />
    ) : (
      <div
        className="flex items-center justify-center w-full h-full cursor-pointer"
        onClick={triggerFileInput}
      >
        <p>Upload Profile</p>
      </div>
    )}
    <input
      ref={fileInputRef}
      type="file"
      accept="image/*"
      onChange={handleImageChange}
      style={{ display: 'none' }}
    />
 <div className=" bg-secondary-50  w-80 relative rounded-lg pt-32 px-6"  >
          {/* <textarea id="about-text"
            className="py-6 px-4 h-80 w-72 max-w-full mt-4 bg-white rounded-lg "
            placeholder="say something about yourself"
            value={about}
            onChange={(e) => setAbout(e.target.value)}
          ></textarea>
          <button className=" cursor-pointer mt-4 relative-x-center hover:underline text-red-500"> Delete Account 
          </button> */}
        </div>
  </div>
 
 
  {/* User Info Form */}
    {/*  */}
      <div className='flex mt-10  '>
      <div className=" bg-secondary-50  w-30  rounded-lg pt-32 px-6"  >
          <textarea id="about-text"
            className="py-6 px-4 h-80 w-72 max-w-full mt-4 bg-white rounded-lg "
            placeholder="say something about yourself"
            value={about}
            onChange={(e) => setAbout(e.target.value)}
          ></textarea>
          <button className=" cursor-pointer mt-4  hover:underline text-red-500"> Delete Account 
          </button>
        </div>
       <div className=" bg-secondary-50 w-full max-w-3xl  rounded-lg py-10 px-6 ">
       <form className="" onSubmit={userUpdate}>
          {/* <div className="">
            <input
              className="w-full border border-neutral-300 py-3 px-4 rounded-md"
              placeholder="User ID"
              value={id}
              readOnly />
          </div> */}

             <div className="flex ">
             <div className="w-1/2 inline-block mr-2  ">
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
             </div>
          {otpMsg && <div className='success-message text-green'>{otpMsg}
          </div>}
          {/* <div className="w-1/2">
            <div className='relative'>
            <input className="w-full border border-neutral-300 py-3 px-4 rounded-md"
              placeholder="Phone"
              value={phone}
              
              onChange={(e) => setPhone(e.target.value)}
            />
              {customeError && <div className='error-message text-red-500'>
                please provide valid Phone number
              </div>}
            {user && user.isPhoneVerified ? (
              <p>
              <Icon name="badge-check" className="icon inline" /> </p>
            ) : (
              <button className='
              btn btn-secondary mt-2' onClick={otpGeneratePhone}>Please Verified Your Phone Number </button>
            )
            }
            </div> */}
            {/* <div className="w-1/2">
  <div className='relative'>
    <input className="w-full border border-neutral-300 py-3 px-4 rounded-md"
      placeholder="Phone"
      value={phone}
      onChange={(e) => setPhone(e.target.value)}
    />
    <div className="mt-2">
      {customeError && <div className='error-message text-red-500'>
        please provide valid Phone number
      </div>}
      {user && user.isPhoneVerified ? (
        <p>
          <Icon name="badge-check" className="icon inline" />
        </p>
      ) : (
        <button className='btn btn-secondary mt-2' onClick={otpGeneratePhone}>
          Please Verify Your Phone Number
        </button>
      )}
    </div>
  </div>

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
          </div> */}
          {/* <div className="w-1/2">
  <div className='relative flex items-center'>
    <input className="w-full border border-neutral-300 py-3 px-4 rounded-md"
      placeholder="Phone"
      value={phone}
      onChange={(e) => setPhone(e.target.value)}
    />
    <div className="ml-4">
      {customeError && <div className='error-message text-red-500'>
        please provide valid Phone number
      </div>}
      {user && user.isPhoneVerified ? (
        <Icon name="badge-check" className="icon inline" />
      ) : (
        <button className='btn btn-secondary' onClick={otpGeneratePhone}>
          Verify Now 
        </button>
      )}
    </div>
  </div>

  {hanlarotpPhone && (
    <div className='relative flex items-center mt-4'>
      <input
        className="w-full border border-neutral-300 py-3 px-4 rounded-md"
        placeholder="OTP"
        value={otp}
        onChange={(e) => setOtp(e.target.value)}
      />
      <button onClick={VerifyedPhone} className="btn btn-primary ml-4">
        Submit OTP
      </button>
    </div>
  )}
</div> */}

<div className="w-1/2 py-4">
  {/* Phone Input Field */}
  <div className="relative flex items-center">
    <input
      className="w-full border border-neutral-300 py-3 px-4 rounded-md"
      placeholder="Phone"
      value={phone}
      onChange={(e) => setPhone(e.target.value)}
    />
    <div className="absolute right-4 flex items-center">
      {customeError && (
        <span className="text-red-500 text-sm mr-2">
          Please provide a valid phone number
        </span>
      )}
      {user && user.isPhoneVerified ? (
        <MemoizedIcon name="badge-check" className="text-blue-500"/>
       
      ) : (
        <p
          className="bg-orange-500 hover:bg-orange-600 text-white  rounded-md"
          onClick={otpGeneratePhone}
        >
          Verify Now
        </p>
      )}
    </div>
  </div>

  {/* OTP Input Field */}
  {hanlarotpPhone && (
    <div className="relative flex items-center mt-4">
      <input
        className="w-full border border-neutral-300 py-3 px-4 rounded-md"
        placeholder="Enter OTP"
        value={otp}
        onChange={(e) => setOtp(e.target.value)}
      />
      <button
        onClick={VerifyedPhone}
        className="ml-4 bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded-md"
      >
        Submit OTP
      </button>
    </div>
  )}
</div>

          <div className="w-full py-4">
          <div className="relative flex items-center">
               <input
              className="w-full border border-neutral-300 py-3 px-4 rounded-md"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <div className="absolute right-4 flex items-center mb-1">
      {customeError && (
        <span className="text-red-500 text-sm mr-2">
          Please provide a valid Email
        </span>
      )}
      {user && user.isEmailVerified ? (
               <MemoizedIcon name="badge-check" className="text-blue-500"/>
            ) : (
              <p onClick={otpGenerateEmail} className="mb-2">
                Please  Verifiy
              </p>

            )
            }
            </div>
          </div>
           
            
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


          <div className="py-4">
            <input className="w-full border border-neutral-300 py-3 px-4 rounded-md"
              placeholder="Address"
              value={parmanentAddress}
              onChange={(e) => setParmanent(e.target.value)}

            />

          </div>
          <div className="w-full border border-neutral-300 py-3 px-4 rounded-md">

            <input
              type="date"
              value={birth}
              onChange={(e) => setBirth(e.target.value)}
              // className="w-full  py-3 px-4 rounded-md"
            />
            {ageWarning && (
              <p className="text-red-500 mt-2">You are under Age</p>
            )}
          </div>
          {error && <div className='error-message text-red-500'>{error}</div>}
          {message && <div className='success-message text-green'>{message}
          </div>}
          
          <button disabled={ageWarning}
            className="btn btn-primary relative-x-center max-w-72" type="submit">
             { loadings  ?(
              "Saveing"
             ):"save "}
            </button>
        </form>
       </div>
      </div>

    </div>
  )
}