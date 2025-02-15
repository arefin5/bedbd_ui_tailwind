"use client"
import PropertyTypeSelect from './PropertyTypeSelect'
import Image from 'next/image'
import FilterSection from './FilterSection'
import { Search, Filter, ArrowLeft } from "lucide-react"
import { useState, useRef, useEffect } from "react"
import { useSearchBoxCore, useSearchSession } from "@mapbox/search-js-react"
import LocationMap from "./LocationMap"
import LocationInput from './LocationInput'
import { useSelector } from 'react-redux'
import CheckInOutInput from './CheckInOutInput'
import GuestCountInput from './GuestCountInput'
import PropertyTypeInput from './PropertyTypeInput'
import PropertyViewInput from './PropertyViewInput'
import PropertyConditionInput from './PropertyConditionInput'
import AreaRangeInput from './AreaRangeInput'
import PriceRangeInput from './PriceRangeInput'
import RatingInput from './RatingInput'
import AmenitiesInput from './AmenitiesInput'
import BadgesInput from './BadgesInput'
import GenderPreference from './GenderPreference'
import { useDispatch } from 'react-redux'
import { setMapOpen, setMapClose } from '@/redux/features/search/searchSlice'
import axios from 'axios'
import SearchProperty from '../PropertyGallery/SearchProperty'

export default function Hero() {
    const dispatch = useDispatch()
    const mapRef = useRef(null)
    const [calenderInfo, setCalenderInfo] = useState({  isCalenderOpen: false,
                                                        calenderType: '' })
    const mapSearchBox = useSearchBoxCore({ accessToken: 'pk.eyJ1IjoibWQtYWwtbWFtdW4iLCJhIjoiY2x1ZHk1dDZlMWkxdTJqbmlkN2JmZWljaiJ9.YTqqaus6tdGIdJPx5sqlew' })
    const searchSession = new useSearchSession(mapSearchBox);

    const { location, selectedDate } = useSelector(state => state.search);
    const [lists, setLists] = useState([]);
    const [showData, setShowData] = useState(false);
    //  const [gust,setgust]=useState(0);
     const [guestCount, setGuestCount] = useState(0);

    const { isMapOpen } = location;
    useEffect(() => {
        console.log(guestCount)
        // console.log("lists in use Effect", lists);
    }, [selectedDate, showData, lists,guestCount])
 
    const formSubmit = async (e) => {
        e.preventDefault();
        dispatch(setMapOpen());

        const { latitude, longitude, ...locations } = location.selectedLocation;
        if(!latitude || !longitude){
            return
        }
        let [checkinDate, checkoutDate] = [null, null];

        if (selectedDate.length === 2) {
            checkinDate = new Date(selectedDate[0]).toISOString();
            checkoutDate = new Date(selectedDate[1]).toISOString();
        }

        const searchdata = {
            longitude,
            latitude,
            locations,
            checkinDate,
            checkoutDate,
            guestCount
        };

        try {
            // const response = await axios.get("http://localhost:5001/api/sort-by-location/", { params: searchdata });
            const response = await axios.get("https://backend.bedbd.com/api/sort-by-location/", { params: searchdata });

            if (response.data?.length > 0) {
                setLists(response.data);
                setShowData(true);
                // const queryParams = new URLSearchParams(searchdata).toString();
                // window.open(`/search`, '_blank');
            } else {
                console.log("No data found");
                setShowData(false);
            }
        } catch (error) {
            console.error("Error fetching data:", error);
        }
    };

    useEffect(() => {
        // console.log("Selected date:", selectedDate);
        // console.log("Show Data:", showData);
        // console.log("Lists in useEffect:", lists);
    }, [selectedDate, showData, lists, guestCount ]);

    // useEffect(() => {
    //     console.log("Updated lists:", lists);
    // }, []);
    const backHome = () => {
        window.location.href = "/";
    };
    
    return (
        <>
            <div className=" relative w-100 md:bg-hero z-10 ">
                <div className={`relative  ${isMapOpen
                                                ? 'grid md:flex '
                                                : ' md:container min-h-[430px] md:ml-auto md:mr-auto '}`}>

                <h1 className={` hidden md:block
                                ${(!isMapOpen && !calenderInfo['isCalenderOpen']) 
                                    ? 'md:opacity-100 md:ease-in md:delay-300 md:duration-800 ' 
                                    : 'md:opacity-30 md:ease-out md:delay-150 md:duration-500 blur-sm'} transition-all   absolute top-14 left-1/2 -translate-x-1/2 text-center text-neutral-600 font-medium text-3xl`}> 
                                Start getting deals by choosing your 
                <br/>
                    <span className='text-primary-400 font-semibold'>perfect place</span>
                </h1>
                <Image src="/decorative__arrow.svg" 
                    className={`hidden md:block transition-all object-contain absolute top-[42px] left-[calc(50%+20px)]
                                ${(!isMapOpen && !calenderInfo['isCalenderOpen']) 
                                    ? 'md:opacity-100 ease-in delay-300 duration-800 ' 
                                    : 'opacity-30 ease-out delay-150 duration-500 md:blur-sm' } `}  height={136} width={280} />

                    
                    <form className={`${isMapOpen
                        ? 'z-20 md:min-w-[calc(theme(minWidth.96)-50px)] md:h-full overflow-y-scroll md:py-8 md:px-6 md:bg-secondary-50 max-h-[calc(100vh-100px)]'
                        : `md:top-[180px] md:bg-white md:min-h-52 
                            ${
                                calenderInfo['isCalenderOpen'] 
                                    // md:top-[180px] md:h-32 md:transition-transform md:duration-500 md:-translate-y-44
                                    // md:top-8 md:transition-transform md:duration-500 md:translate-y-40 md:bg-white md:min-h-52
                                        ? 'md:bg-opacity-30 md:bg-blur-sm' 
                                        : '' 
                            }   
                            absolute-x-center  md:rounded-2xl  md:w-full md:max-w-5xl  md:backdrop-filter md:backdrop-blur-2xl md:bg-opacity-70`}`}>
                        {
                            isMapOpen &&
                                <div className=" hidden md:flex  items-center justify-between mb-8 ">
                                    <div className="border font-semibold text-primary-400 text-sm border-primary-400 rounded-full flex py-3 px-6 gap-x-2.5 w-fit">
                                        <Filter className="text-primary-400" size={24} />
                                        Advance Search
                                    </div>
                                    <button className="rounded-full bg-primary-400 h-min p-2.5">
                                        <ArrowLeft className="icon text-white" size={24}  onClick={backHome}/>
                                    </button>
                                </div>
                        }
                        

                        <div className={`w-full space-y-4 px-4 py-6 
                            ${isMapOpen
                                ? 'md:space-y-6 w-[274px]'
                                : `relative md:max-w-4xl md:rounded-full md:flex md:items-center md:py-1.5 md:pl-8 md:pr-4 md:space-y-0 md:justify-between  md:absolute-x-center md:bottom-8 
                                        md:bg-white md:shadow-search-section
                                
                                        ${
                                            !calenderInfo['isCalenderOpen'] 
                                                // ? 'md:bg-white md:shadow-search-section' 
                                                // : 'md:bg-neutral-50' 
                                        }
                                    `

                            }`}>
                                {/* <div className='marker-class z-30 h-96 absolute hidden top-0 bg-neutral-600 w-80 ' >
                                </div> */}
                            <LocationInput isCalenderOpen={calenderInfo['isCalenderOpen'] } mapSearchBox={mapSearchBox} searchSession={searchSession} mapRef={mapRef} />
                            <CheckInOutInput  calenderInfo={calenderInfo} setCalenderInfo={setCalenderInfo} />

                            <GuestCountInput isCalenderOpen={calenderInfo['isCalenderOpen']} gust={guestCount} setGust={setGuestCount} />
                            {
                                !isMapOpen
                                    && <PropertyTypeSelect isMapOpen={isMapOpen} isCalenderOpen={calenderInfo['isCalenderOpen']} />
                            }
                            <PropertyTypeInput />

                            <PropertyViewInput />
                            <PropertyConditionInput />
                            <AreaRangeInput />

                            <PriceRangeInput />

                            <RatingInput />

                            <AmenitiesInput />
                            <BadgesInput />

                            <GenderPreference />

                            {/* Submit Button */}
                            <div className='flex pl-14 pr-14 mt-8 space-x-4 md:mt-0 md:p-0 '>
                                {/* <button className={`btn font-medium text-base text-primary-400 underline ${!isMapOpen && 'md:hidden'} `}>Clear</button> */}
                                <button onClick={formSubmit} 
                                    className={`btn btn-primary space-x-4 text-center flex items-center justify-center 
                                        ${!isMapOpen 
                                            && `md:h-14 md:w-14 md:rounded-full md:p-auto md:transition-all md:ease-in-out md:delay-300 md:duration-800
                                                ${ calenderInfo['isCalenderOpen']
                                                        && 'md:opacity-30 md:blur-sm'
                                                    }
                                             `}`} >
                                    <Search className='icon mr-4 md:m-0 md:h-8 md:w-8' />
                                    <span className={` ${!isMapOpen && 'md:hidden'} `}>Search</span></button>
                            </div>
                        </div>
                    </form>
                    {
                        // map
                        isMapOpen
                        && <div className="z-10 p-8 w-full min-h-[600px]  md:min-h-full md:max-h-[calc(100vh-80px)]">
                            <LocationMap ref={mapRef} />
                        </div>
                    }
                </div>
            </div>
            {!isMapOpen && <FilterSection />}

            {showData ? (
                <SearchProperty listings={lists} />
            ) : null}
        </>
    )
}