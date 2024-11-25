"use client"
import PropertyTypeSelect from './PropertyTypeSelect'
import FilterSection from './FilterSection'
import { Search, Filter, ArrowLeft } from "lucide-react"
import {  useState, useRef } from "react"
import {  useSearchBoxCore, useSearchSession } from "@mapbox/search-js-react"
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

export default function Hero(){
    const mapRef = useRef(null)
    const mapSearchBox = useSearchBoxCore({ accessToken: 'pk.eyJ1IjoibWQtYWwtbWFtdW4iLCJhIjoiY2x1ZHk1dDZlMWkxdTJqbmlkN2JmZWljaiJ9.YTqqaus6tdGIdJPx5sqlew' })
    const searchSession = new useSearchSession(mapSearchBox);

    const {location, selectedDate  } = useSelector(state => state.search);

    const {  selectedLocation, 
                    isMapOpen,
        isSuggestionsMenuOpen,
                    suggestions
                } = useSelector(state => state.search.location);

    function formSubmit(e) {
        e.preventDefault()
        console.log(location)
        console.log(selectedDate)
    }

    return (
        <>
            <div className=" relative w-100 md:bg-hero z-10 ">
                <div className={`${ isMapOpen
                                        ? 'grid md:flex ' 
                                        :'md:relative md:container min-h-96  md:ml-auto md:mr-auto '}`}>
                    <form className={`${isMapOpen
                                            ? ' md:min-w-[calc(theme(minWidth.96)-50px)] md:h-full overflow-y-scroll md:py-8 md:px-6 md:bg-secondary-50 max-h-[calc(100vh-100px)]'
                                            : 'md:absolute-center md:rounded-2xl md:min-h-52 md:w-full md:max-w-5xl md:bg-white md:backdrop-filter md:backdrop-blur-2xl md:bg-opacity-70'}`}>
                        {
                            isMapOpen &&
                                <div className=" hidden md:flex  items-center justify-between mb-8 ">
                                    <div className="border font-semibold text-primary-400 text-sm border-primary-400 rounded-full flex py-3 px-6 gap-x-2.5 w-fit">
                                        <Filter className="text-primary-400" size={24} />
                                        Advance Search
                                    </div>
                                    <button className="rounded-full bg-primary-400 h-min p-2.5">
                                        <ArrowLeft className="icon text-white" size={24} />
                                    </button>
                                </div>
                        }

                        <div className={`w-full  space-y-4 px-4 py-6
                            ${isMapOpen
                                ? 'md:space-y-6 w-[274px]'
                                : '  | md:max-w-4xl md:rounded-full md:flex md:items-center md:py-3.5 md:pl-8 md:pr-4 md:bg-white md:space-y-0 md:justify-between md:shadow-search-section md:absolute-x-center md:bottom-8'
                                 
                            }`}>
                            <LocationInput mapSearchBox={mapSearchBox} searchSession={searchSession} mapRef={mapRef} />
                            <CheckInOutInput/>

                            <GuestCountInput />
                            {
                                !isMapOpen
                                    && <PropertyTypeSelect />
                            }                      
                            <PropertyTypeInput />

                            <PropertyViewInput />
                            <PropertyConditionInput/>
                            <AreaRangeInput/>

                            <PriceRangeInput/>

                            <RatingInput/>

                            <AmenitiesInput/>
                            <BadgesInput/>
                            
                            <GenderPreference/>

                            {/* Submit Button */}
                            <div className='flex pl-14 pr-14 mt-8 space-x-4 md:mt-0 md:p-0 '>
                                {/* <button className={`btn font-medium text-base text-primary-400 underline ${!isMapOpen && 'md:hidden'} `}>Clear</button> */}
                                <button onClick={formSubmit} className={`btn btn-primary space-x-4 text-center flex items-center justify-center ${!isMapOpen && 'md:h-14 md:w-14 md:rounded-full md:p-auto' }`} >
                                    <Search className='icon mr-4 md:m-0 md:h-8 md:w-8'/>
                                    <span className={` ${ !isMapOpen && 'md:hidden' } `}>Search</span></button>
                            </div>
                        </div>
                    </form>
                    {
                        // map
                        isMapOpen
                        &&  <div className="p-8 w-full min-h-[600px]  md:min-h-full md:max-h-[calc(100vh-80px)]">
                                <LocationMap ref={mapRef}  />
                            </div>
                    }
                </div>
            </div>
            { !isMapOpen && <FilterSection /> }
        </>
    )
}