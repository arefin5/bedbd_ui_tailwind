import { Search, CalendarDays, Users, Filter, ArrowLeft } from "lucide-react"
import Icon from '/components/Icon'
import PropertyTypeSelect from './PropertyTypeSelect'
import FilterSection from './FilterSection'
import { Plus, Minus } from "lucide-react"
import CheckBoxIcon from '/components/InputCheckBox/CheckBoxIcon'
import InputCheckBox from '/components/InputCheckBox'
import StarFilledIcon from '/public/icons/star_filled.svg'
import Image from "next/image"
export default function Hero() {
    const isSearched = false
    return (
        <>
            <div className=" w-100  md:bg-hero ">
                <div className={`
                    ${!isSearched &&
                    'md:relative md:container min-h-96  md:ml-auto md:mr-auto '
                    }`}>


                    <form className={`
                    ${isSearched
                            ? ' md:w-80 md:min-h-screen md:py-8 md:px-6 md:bg-secondary-50'
                            : 'md:absolute-center md:rounded-2xl md:min-h-52 md:w-full md:max-w-5xl md:bg-white md:backdrop-filter md:backdrop-blur-2xl md:bg-opacity-70'
                        }  
                    `}>

                        {
                            isSearched &&
                            <div className="flex  items-center justify-between mb-8">
                                <div className="border font-semibold text-primary-400 text-sm border-primary-400 rounded-full flex py-3 px-6 gap-x-2.5 w-fit">
                                    <Filter className="text-primary-400" size={24} />
                                    Advance Search
                                </div>
                                <button className="rounded-full bg-primary-400 h-min p-2.5">
                                    <ArrowLeft className="icon" size={24} />
                                </button>
                            </div>
                        }

                        <div className={`
                            ${!isSearched
                                ? 'px-4 py-6 space-y-4 | md:max-w-4xl md:rounded-full md:flex md:items-center md:py-3.5 md:pl-8 md:pr-4 md:bg-white md:space-y-0 md:justify-between md:shadow-search-section md:absolute-x-center md:bottom-8'
                                : 'md:space-y-6'
                            }`}>
                            <div className={`
                                    ${!isSearched
                                && 'relative px-6 py-2.5 block rounded-full shadow-search-input | md:shadow-none md:px-0 md:py-0 md:rounded-none md:static md:h-max md:max-w-52'
                                }   
                                    relative px-6 py-2.5 block rounded-full shadow-search-input | md:shadow-none md:px-0 md:py-0 md:rounded-none md:static md:h-max md:max-w-52 
                                `}>
                                <label
                                    className={`
                                        ${isSearched
                                            ? 'md:text-neutral-500 md:text-lg mb-2'
                                            : 'text-neutral-600 text-xs md:text-sm '
                                        }
                                        font-semibold
                                    `}>Location</label>
                                <input
                                    className={`
                                        ${!isSearched
                                            ? 'block bg-transparent placeholder-medium placeholder-text-sm placeholder-text-netural-300 | md:static'
                                            : 'block w-full md:px-2.5 md:py-2 md:border md:border-neutral-300 md:rounded-md'
                                        }
                                        `}
                                    placeholder="Which City Do you prefer?" />
                                {/* <Search className="icon absolute-y-center right-4 md:hidden "/> */}
                                <Icon name='search' className="icon absolute-y-center right-4 md:hidden " />
                            </div>
                            <>
                                <div className={`
                                    ${isSearched
                                        ? 'hidden'
                                        : 'hidden | md:block md:h-max md:relative md:custom-left-line-150 md:ml-4'
                                    }
                                    `}>
                                    <label className={`
                                            ${isSearched
                                            ? 'md:text-neutral-500 md:text-lg mb-2'
                                            : 'text-neutral-600 text-xs md:text-sm font-semibold'
                                        }
                                        `}>Check In</label>
                                    <input className={`
                                            ${isSearched
                                            ? 'block w-full md:px-2.5 md:py-2 md:border md:border-neutral-300 md:rounded-md'
                                            : 'block bg-transparent placeholder-medium placeholder-text-sm placeholder-text-netural-300 md:max-w-32'
                                        }
                                        `} placeholder="Add Date" />
                                </div>
                                <div
                                    className={`
                                        ${isSearched
                                            ? 'hidden'
                                            : 'hidden | md:block md:h-max md:relative md:custom-left-line-150 md:ml-4'
                                        }
                                    `}>
                                    <label
                                        className={`
                                            ${isSearched
                                                ? 'md:text-neutral-500 md:text-lg mb-2'
                                                : 'text-neutral-600 text-xs md:text-sm font-semibold'
                                            }
                                        `}>Check Out</label>
                                    <input
                                        className={`
                                            ${isSearched
                                                ? 'block w-full md:px-2.5 md:py-2 md:border md:border-neutral-300 md:rounded-md'
                                                : 'block bg-transparent placeholder-medium placeholder-text-sm placeholder-text-netural-300 md:max-w-32'
                                            }
                                        `} placeholder="Add Date" />
                                </div>
                                <div className={`
                                        ${isSearched
                                        ? ''
                                        : 'relative px-6 py-2.5 block rounded-full shadow-search-input | md:hidden'
                                    }
                                    `}>
                                    <label
                                        className={`
                                            ${isSearched
                                                ? 'md:text-neutral-500 md:text-lg mb-2'
                                                : 'text-neutral-600 text-xs '
                                            }
                                            font-semibold
                                        `}>Check In-Out</label>
                                    <input
                                        className={`
                                            ${isSearched
                                                ? 'block w-full md:px-2.5 md:py-2 md:border md:border-neutral-300 md:rounded-md'
                                                : 'block bg-transparent placeholder-medium placeholder-text-sm placeholder-text-netural-300'
                                            }
                                        `}

                                        placeholder="Add Date" />
                                    {/* <CalendarDays className='icon absolute-y-center right-4 md:hidden'/> */}
                                    <Icon name='calendar-days' className='icon absolute-y-center right-4 md:hidden' />
                                </div>
                            </>


                            {/* Guest count  */}
                            <>
                                {/* <div className="relative px-6 py-2.5 block rounded-full shadow-search-input | md:shadow-none md:h-max md:rounded-none md:p-0 md:custom-left-line-150 md:ml-4  ">
                                    <label className=" text-neutral-600 text-xs md:text-sm font-semibold ">Guest</label>
                                    <input className="block bg-transparent placeholder-medium placeholder-text-sm md:max-w-24" placeholder="Adult, infant 1"/>
                                    <Icon name='users' className="icon absolute-y-center right-4 md:hidden"/>                            
                                </div> */}
                                <div className={`
                                        ${isSearched
                                        ? ''
                                        : 'relative px-6 py-2.5 block rounded-full shadow-search-input | md:shadow-none md:h-max md:rounded-none md:p-0 md:custom-left-line-150 md:ml-4'
                                    }
                                        relative
                                    `}>
                                    <label
                                        className={`
                                            ${isSearched
                                                ? 'md:text-neutral-500 md:text-lg mb-2'
                                                : 'text-neutral-600 text-xs md:text-sm '
                                            }
                                            font-semibold
                                        `}>Guest</label>
                                    <Minus
                                        className={`
                                            ${isSearched
                                                ? 'absolute bottom-2.5 left-16'
                                                : 'inline hidden'
                                            }
                                            icon `} size={24} />
                                    <input
                                        className={`
                                            ${isSearched
                                                ? 'block w-full md:px-2.5 md:py-2 md:border md:border-neutral-300 md:rounded-md md:placeholder-text-center text-center  '
                                                : 'block bg-transparent placeholder-medium placeholder-text-sm md:max-w-24'
                                            }
                                        `}
                                        placeholder={`${isSearched ? '0' : 'Adult, infant 1'}`} />
                                    <Plus
                                        className={`
                                            ${isSearched
                                                ? 'absolute bottom-2.5 right-16'
                                                : 'inline hidden'
                                            }
                                            icon `}

                                        // className="icon inline hidden" 
                                        size={24} />
                                </div>

                            </>

                            <PropertyTypeSelect />

                            <div className={`
                                    ${!isSearched
                                && 'hidden relative px-6 py-2.5 block rounded-full shadow-search-input | md:shadow-none md:h-max md:rounded-none md:p-0 md:custom-left-line-150 md:ml-4'
                                }
                                `}>
                                <label
                                    className={`
                                        ${isSearched
                                            ? 'md:text-neutral-500 md:text-lg mb-2'
                                            : 'text-neutral-600 text-xs md:text-sm font-semibold'
                                        }
                                    font-semibold
                                    `} >Property Type</label>
                                <select
                                    className={`
                                            ${isSearched
                                        && 'block w-full md:px-2.5 md:py-2 md:border md:border-neutral-300 md:rounded-md md:placeholder-text-center'
                                        }
                                        `}>
                                    <option value=''>Select Type</option>
                                    <option value='apartment'>Apartment</option>
                                    <option value='entire_house'>Entire House</option>
                                    <option value='shared_room'>Share Room</option>
                                    <option value='condos'>Condos</option>
                                    <option value='villa'>Villa</option>
                                    <option value='farmhouse'>Farmhouse</option>
                                </select>
                            </div>

                            <div
                                className={`
                                    ${!isSearched
                                    && 'hidden relative px-6 py-2.5 block rounded-full shadow-search-input | md:shadow-none md:h-max md:rounded-none md:p-0 md:custom-left-line-150 md:ml-4'
                                    }
                                `}>
                                <label
                                    className={`
                                        ${isSearched
                                            ? 'md:text-neutral-500 md:text-lg mb-2'
                                            : 'text-neutral-600 text-xs md:text-sm'
                                        }
                                        font-semibold
                                        `}>Property View</label>
                                <select className={`
                                            ${isSearched
                                    && 'block w-full md:px-2.5 md:py-2 md:border md:border-neutral-300 md:rounded-md md:placeholder-text-center'
                                    }
                                        `}>
                                    <option value='apartment'>Shared wash room</option>
                                    <option value='entire_house'>Beach View</option>
                                </select>
                            </div>

                            <div className={`
                                    ${!isSearched
                                && 'hidden relative px-6 py-2.5 block rounded-full shadow-search-input | md:shadow-none md:h-max md:rounded-none md:p-0 md:custom-left-line-150 md:ml-4'
                                }
                                `} >
                                <label
                                    className={`
                                        ${isSearched
                                            ? 'md:text-neutral-500 md:text-lg mb-2'
                                            : 'text-neutral-600 text-xs md:text-sm font-semibold'
                                        }
                                    font-semibold
                                    `}>Property View</label>
                                <select
                                    className={`
                                        ${isSearched
                                        && 'block w-full md:px-2.5 md:py-2 md:border md:border-neutral-300 md:rounded-md md:placeholder-text-center'
                                        }
                                    `}>
                                    <option value='apartment'>Full Furnished</option>
                                    <option value='entire_house'>Semi-Furnished</option>
                                    <option value='entire_house'>Empty</option>
                                </select>
                            </div>

                            <div
                                className={`
                                        ${isSearched
                                        ? 'relative block rounded-full shadow-search-input | md:shadow-none md:h-max md:rounded-none'
                                        : 'md:hidden'
                                    }
                                    `}
                            >
                                <label className="block text-neutral-600 text-xs md:text-sm font-semibold mb-2">Area Range</label>
                                <input className="w-full " type="range" id="area_range" name="area_range" min="500" max="7000" />
                            </div>

                            <div className={`
                                        ${isSearched
                                    ? 'relative block rounded-full shadow-search-input | md:shadow-none md:h-max md:rounded-none'
                                    : 'md:hidden'
                                }
                                    `}>
                                <label className="block text-neutral-600 text-xs md:text-sm font-semibold mb-2">Price Range</label>
                                <input className="w-full " type="range" id="price_range" name="price_range" min="5" max="500" />
                            </div>
                            {/* Rating... */}
                            <div className={`
                                    
                                    border w-fit border-neutral-200 "
                                    ${isSearched ? 'flex divide-x divide-neutral-200 rounded-md' : 'md:hidden'}`}>
                                <div className='p-2 flex items-center gap-1 '>
                                    {/* <Icon name='check' size={24}/> */}
                                    <input className='hidden' type="radio" name="rating" value='any' id="rating_any" />
                                    <label className="text-neutral-600 text-xs md:text-sm font-semibold" htmlFor="rating_3_5">Any</label>
                                    <div className='relative w-6 h-6'>
                                        <Image src={StarFilledIcon} fill className="object-scale-down" />
                                    </div>
                                    {/* <label className="text-neutral-600 text-xs md:text-sm font-semibold" htmlFor="rating_any">Any</label> */}
                                </div>

                                <div className='p-2 flex items-center gap-1'>
                                    <Icon name='check' size={24} />
                                    <input className='hidden' type="radio" name="rating" value='3.5' id="rating_3_5" />
                                    <label className="text-neutral-600 text-xs md:text-sm font-semibold" htmlFor="rating_3_5">3.5</label>
                                    {/* <div className='relative w-6 h-6'>
                                        <Image src={StarFilledIcon} fill className="object-scale-down" />
                                    </div>   */}
                                </div>

                                <div className='p-2 flex items-center gap-1'>
                                    <input className='hidden' type="radio" name="rating" value='4.0' id="rating_4_0" />
                                    <label className="text-neutral-600 text-xs md:text-sm font-semibold" htmlFor="rating_4_0">4.0</label>
                                    <div className='relative w-6 h-6'>
                                        <Image src={StarFilledIcon} fill className="object-scale-down" />
                                    </div>

                                </div>
                                <div className='p-2 flex items-center gap-1'>
                                    <input className='hidden' type="radio" name="rating" value='4.5' id="rating_4_5" />
                                    <label className="text-neutral-600 text-xs md:text-sm font-semibold" htmlFor="rating_4_5">4.5</label>
                                    <div className='relative w-6 h-6'>
                                        <Image src={StarFilledIcon} fill className="object-scale-down" />
                                    </div>
                                </div>
                            </div>

                            {/* Amenities... */}
                            <div className={`${isSearched ? 'space-y-2' : 'md:hidden'}`}>

                                <h3 className='text-neutral-500 text-lg font-semibold'>Amenities</h3>

                                <ul className="space-y-4">
                                    <li>
                                        <InputCheckBox
                                            genere='amenity'
                                            id='food_court'
                                            name='amenities'
                                            txt='Food Court'
                                            value='food_court' />
                                    </li>

                                    <li>
                                        <InputCheckBox
                                            genere='amenity'
                                            id='parking_area'
                                            name='amenities'
                                            txt='Parking Area'
                                            value='parking_area' />
                                    </li>
                                    <li>
                                        <InputCheckBox
                                            genere='amenity'
                                            id='wifi'
                                            name='amenities'
                                            txt='Wifi'
                                            value='wifi' />
                                    </li>
                                </ul>

                            </div>
                            {/* Badges... */}
                            <div className={`${isSearched ? 'space-y-2' : 'md:hidden'}`}    >
                                <h3 className='text-neutral-500 text-lg font-semibold'>Badge</h3>
                                <ul className='space-y-4'>
                                    <li>
                                        <InputCheckBox
                                            genere='badge'
                                            id='recommended'
                                            name='badges'
                                            txt='Recommended by bedbd'
                                            value='recommended' />
                                    </li>
                                    <li>
                                        <InputCheckBox
                                            genere='badge'
                                            id='lorem'
                                            name='badges'
                                            txt='Lorem Badge'
                                            value='lorem' />
                                    </li>
                                </ul>
                            </div>

                            {/* Gender Preference */}
                            <div className="hidden relative px-6 py-2.5 block rounded-full shadow-search-input | md:shadow-none md:h-max md:rounded-none md:p-0 md:custom-left-line-150 md:ml-4  ">
                                <label className=" text-neutral-600 text-xs md:text-sm font-semibold ">Gender Preference</label>
                                <select>
                                    <option value=''>No choice</option>
                                    <option value='entire_house'>Male</option>
                                    <option value='shared_room'>Female</option>
                                </select>
                            </div>
                            <div className='flex pl-14 pr-14 mt-8 space-x-4 md:mt-0 md:p-0 '>
                                <button className='btn font-medium text-base text-primary-400 underline md:hidden'>Clear</button>
                                <button className="btn btn-primary space-x-4 text-center flex items-center justify-center md:h-14 md:w-14 md:rounded-full md:p-auto">
                                    {/* <Search className="icon mr-4 md:m-0 md:h-8 md:w-8"/> */}
                                    <Icon name='search' className="icon mr-4 md:m-0 md:h-8 md:w-8" />
                                    <span className="md:hidden">Search</span></button>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
            <FilterSection />

        </>

    )
}
