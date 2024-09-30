import Icon from "/components/Icon"
import Image from "next/image"

export default function profile() {
  return (
    <div className="w-full">
      <div className="w-full bg-secondary-50 rounded-lg h-64 relative ">
        <button className="absolute-center border border-neutral-500 rounded-lg py-3 px-14"><Icon name='upload' size={24} className="icon inline w-max mr-2"/> Browser</button>
      </div>
      <div className="flex">
        <div className=" bg-secondary-50  w-80 relative rounded-lg pt-32 px-6"  >
          <div className="absolute min-w-64 h-64 rounded-full overflow-hidden absolute-x-center -top-40">
            <Image
              className="object-cover" 
              src='https://s3-alpha-sig.figma.com/img/9426/3d80/328ad64aebfeeac45c8e75b49193f69f?Expires=1721606400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=WaQfc7QT9MhYNK0ELmuXw~FJbN7HW8rVoE4rOCerGzhpnehjFmZJX88vOZlQSOCVmAX44s5TsDubx-ukT8HY3tDxkXb1K-9CWvbOUgZ8oimP0XUF5Pj-xXChJ5NoqGa95zAlebxJK0K65m~y4bgwKNO3yu-l1v8t-DpXHzEp7mIUkHmCEL0PngV0ybFNEb1Lcl7d8kabmtDYCv2KYh7z5WJN0vgi1bYyEFa6SeDssQU1NwFfpdEEhw7N0wTsXTWOOPDVdKVieClpJpkJuwVAudcdsf12JkvykFFE8yfrYI1x-zBUWmFY8hYuBpoKuzxDHGoBbwmCcfrt3QuVuBf0JA__' fill />
          </div>
          <button className="border border-neutral-500 rounded-lg py-3 px-14 relative-x-center"><Icon name='upload' size={24} className="icon inline w-max mr-2"/> Browser</button>
          <textarea id="about-text" className="py-6 px-4 h-80 w-72 max-w-full mt-4 bg-white rounded-lg " placeholder="say something about yourself"></textarea>
          <button className=" cursor-pointer mt-4 relative-x-center hover:underline text-red-500"> Delete Account </button>
        </div>
        <form className=" bg-secondary-50 w-full max-w-3xl  rounded-lg py-10 px-6 ">
          <div className="">
            <input className="w-full border border-neutral-300 py-3 px-4 rounded-md" placeholder="User ID" /> 
          </div>

          <div className="w-1/2 inline-block ">
            <input className="w-full border border-neutral-300 py-3 px-4 rounded-md" placeholder="First Name" /> 
          </div>

          <div className="w-1/2">
            <input className="w-full border border-neutral-300 py-3 px-4 rounded-md" placeholder="Last Name" /> 
          </div>

          <div className="w-1/2">
            <input className="w-full border border-neutral-300 py-3 px-4 rounded-md" placeholder="Phone" /> 
          </div>

          <div className="w-1/2">
            <input className="w-full border border-neutral-300 py-3 px-4 rounded-md" placeholder="Emial" /> 
          </div>


          <div className="">
            <input className="w-full border border-neutral-300 py-3 px-4 rounded-md" placeholder="ID No." /> 
          </div>

          <div className="">
            <input className="w-full border border-neutral-300 py-3 px-4 rounded-md" placeholder="Present Address" /> 
          </div>

          <div className="">
            <input className="w-full border border-neutral-300 py-3 px-4 rounded-md" placeholder="Parmanent Address" /> 
          </div>
          
          <button className="btn btn-primary relative-x-center max-w-72" type="submit">Edit/Save</button>
        </form>
      </div>
      
    </div>
  )
}
