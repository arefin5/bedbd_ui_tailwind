// 'use client'
// import Image from "next/image"
// import Navbar from './Navbar'
// import Link from "next/link"


// export default function Header() {
//   // inline-block
//   // console.log("header test ... ") ;
//   const returnHome=(e)=>{
//     window.location.reload();

//   }
//   return (
//     <div className="p-4 header-shadow sticky top-0 relative z-100 bg-white">
//       <div className="container mx-auto flex justify-between items-center">
//         <div className="relative w-16 h-8 object-contain">
//           <Link href="/">
//           <Image src={'/logo.png'} fill  onClick={returnHome} />
//           </Link>
//         </div>
//         <Navbar/>
//       </div>
//     </div>

//   )
// }
'use client';
import Image from "next/image";
import Navbar from './Navbar';
import Link from "next/link";

export default function Header() {
  const returnHome = (e) => {
    e.preventDefault(); // Prevent default anchor behavior
    window.history.pushState({}, '', '/'); // Replace URL with "/"
    window.location.reload(); // Reload the page
  };

  return (
    <div className="p-4 header-shadow sticky top-0 relative z-100 bg-white">
      <div className="container mx-auto flex justify-between items-center">
        <div className="relative w-16 h-8 object-contain">
            <Image src={'/logo.png'} fill alt="Home Logo" onClick={returnHome}/>
        </div>
        <Navbar />
      </div>
    </div>
  );
}
