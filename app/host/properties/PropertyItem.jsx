
import { FilePen , Trash, EllipsisVertical} from "lucide-react"
import Link from "next/link"
import Image from "next/image"
import { useDispatch } from "react-redux";
// import { useRouter } from "next/";
import { useRouter } from 'next/navigation';
import { editList } from "@/redux/list/editListSlice";

export default function PropertyItem({data, index, listView}) {

    const {_id:id , images, propertyTitle, location } = data
// console.log(data);
const dispatch = useDispatch();
  const router = useRouter();

  const handleEditClick =async (data, e) => {
    e.preventDefault(); 
     // Store the data in localStorage as a string
     localStorage.removeItem("data");

  // Store the new data in localStorage as a string
 await localStorage.setItem("data", JSON.stringify(data));
  await  dispatch(editList(data)); // Set the ID in Redux
    router.push("/edit-listing/property-type"); // Navigate to the target page

  };
  return (<div key={id} className={`${listView 
                ? 'grid grid-cols-host-property h-12' 
                : 'max-w-[300px]  pb-6'
                } w-full bg-white items-center rounded-lg font-medium text-base`}>
            {
                listView && <>
                <div className="text-center"> {index + 1} </div>
                <Link href={`/listing/${id}`} className="text-center text-secondary-400">
                    {id }
                </Link>
                </>
            }
            {
            !listView && 
                <div className="relative max-h-[193px] rounded-t-lg overflow-hidden w-full h-auto aspect-[145/89] flex">
                    { images && images.length > 0 ? (
                        images.map((image, imgIndex) => (
                        // <div key={imgIndex} className="flex-shrink-0 w-full h-full  ">
                        <Image alt={`Property Image ${imgIndex + 1}`} className='object-cover ' src={image.url} fill />
                        // </div>
                    ))
                    ) 
                    : ( <div className="w-full h-full flex items-center justify-center text-neutral-300">No images available</div>)}
                </div>
            }


            <div className={`${!listView && 'text-primary-400 text-xl font-semibold px-4 mt-4'}`}>{propertyTitle}</div>
                {
                    !listView && 
                    <div className="font-medium text-base text-neutral-300 px-4">{location.address}</div>
                }

                {/* Buttons */}
                <div className= {`${!listView && 'flex justify-between mt-6 px-4'}  w-full `}>
                    {!listView && <buttom className="btn btn-secondary max-w-28 
                    rounded-lg text-base w-full border-primary-400 py-2">Preview
                        <Link href={`/listing/${id}`}></Link>
                    </buttom>}
                    <div className={`${listView && 'mx-auto'}w-40 flex gap-4  text-neutral-800`}>
                        <div className="p-2 rounded-xl hover:bg-green-50" onClick={(event) => handleEditClick(data, event)}  >
                            <FilePen className="icon" size={24}/>
                        </div>
                        <div className="p-2 rounded-xl hover:bg-red-50">
                            <Trash className="icon" size={24}/>
                        </div>
                        <div className="p-2 rounded-xl hover:bg-blue-50">
                            <EllipsisVertical className="icon" size={24}/>
                        </div>
                    </div>
                </div>

            </div> )
}