import Calender from "./Calender";
import { useSelector } from "react-redux"
import { CalendarDays } from "lucide-react";
import { useState, useEffect, useRef} from "react";
import debounce from "@/app/lib/debounce";
import { useDispatch } from "react-redux";
import { clearDateSelection, setCheckInOutDate } from "@/redux/features/search/searchSlice";
import formatTimestampPretty from "@/app/lib/formatTimestampPretty";

export default function CheckInOutInput({calenderInfo, setCalenderInfo}) {
    const checkInCheckOutRef = useRef(null)
    const dispatch =  useDispatch()

    const { isMapOpen } = useSelector(state => state.search.location);

    const {  selectedDate } = useSelector(state => state.search);
    // console.log(selectedDate)
    

    // const [isCalenderOpen, setIsCalenderOpen] = useState(false)
    // const [calenderType, setCalenderType] = useState('checkIn')
    function closeCalender(e){
        e.preventDefault()
        setCalenderInfo(state=>({...state, isCalenderOpen: false}))
    }
    function handleClearSelction(e) {
        e.preventDefault()
        if(selectedDate.length>0)
            // setSelectDate([])
            dispatch(clearDateSelection())
            setCalenderInfo({...calenderInfo, calenderType: 'checkIn'})

    }

    const onDateClickHandlar = debounce((date, calenderType) => {
        const serializedTimestamp = date.getTime();
        if(calenderType==="checkIn"){
            (serializedTimestamp === selectedDate[0])
                ? dispatch(setCheckInOutDate([0, selectedDate[1]]))
                : dispatch(setCheckInOutDate([serializedTimestamp, selectedDate[1]]))
                setCalenderInfo({   ...calenderInfo,
                                    calenderType: 'checkOut' })
        }
        if(calenderType==="checkOut"){
            // (serializedTimestamp === selectedDate[1])
            if(selectedDate[0]===0 && selectedDate[1]>0){
                if(serializedTimestamp === selectedDate[1]){
                    dispatch(setCheckInOutDate([selectedDate[0], 0]))
                }else if(serializedTimestamp < selectedDate[1]){
                    dispatch(setCheckInOutDate([serializedTimestamp, selectedDate[1] ]))
                }else if(serializedTimestamp > selectedDate[1]){
                    dispatch(setCheckInOutDate([selectedDate[1], serializedTimestamp ]))
                }
            }
            else if(serializedTimestamp < selectedDate[0]){
                dispatch(setCheckInOutDate([serializedTimestamp, 0 ]))
            } else if(serializedTimestamp === selectedDate[0]){
                dispatch(setCheckInOutDate([0, selectedDate[1] ]))
            } else if(serializedTimestamp < selectedDate[1] ){
                dispatch(setCheckInOutDate([selectedDate[0], serializedTimestamp ]))
            } else if(serializedTimestamp === selectedDate[1]){
                dispatch(setCheckInOutDate([selectedDate[0], 0 ]))
            } else if((serializedTimestamp > selectedDate[1])){
                dispatch(setCheckInOutDate([selectedDate[0], serializedTimestamp]))
            }
            }
      }, 300);
      const today = new Date


    function onCkeckInInputClick() {
        setCalenderInfo({   isCalenderOpen: true,
                            calenderType: 'checkIn' })
    }
    function onCkeckOutInputClick() {
        setCalenderInfo({   isCalenderOpen: true,
                            calenderType: 'checkOut' })
    }

    function handleClickOutsideCheckInOut(event){

    if (checkInCheckOutRef.current && !checkInCheckOutRef.current.contains(event.target)) {
        // setMapData(state => ({ ...state, isSuggestionMenuOpen: false}));
        // setIsCalenderOpen(false)
        setCalenderInfo(state=>({...state, isCalenderOpen: false}))
        // dispatch(closeSuggestionsMenu())
        }
}
    
    useEffect(() => {
        let ignore = false 
        if(!ignore && calenderInfo['isCalenderOpen']){
            document.addEventListener('mousedown', handleClickOutsideCheckInOut);
        }
        return () => {
            ignore = true
          document.removeEventListener('mousedown', handleClickOutsideCheckInOut);
        };
      }, [calenderInfo['isCalenderOpen']]);

    //   ${
    //     (calenderInfo['isCalenderOpen'] && calenderInfo['calenderType'] ==="checkIn")
    //         && 'bg-white drop-shadow-lg drop-shadow-secondary-400'
    // } 

                                        // md:top-[180px] md:h-32 md:transition-transform md:duration-500 md:-translate-y-44
                                    // md:top-8 md:transition-transform md:duration-500 md:translate-y-40 md:bg-white md:min-h-52


      return (
        <div ref={checkInCheckOutRef} 
                className={`flex relative  rounded-full
                    ${isMapOpen 
                        ? 'grid gap-y-6'
                        : calenderInfo['isCalenderOpen'] 
                            ? 'absolute md:transition-all md:duration-500 md:-translate-y-64 drop-shadow-white z-50'
                            : 'md:transition-transform md:duration-500 md:custom-left-line-150 '
                    }
        `}>


            {/* Check In */}
            <div onClick={onCkeckInInputClick} 
                className={`
                    ${isMapOpen
                        ? 'px-6 py-2.5 rounded-full shadow-search-input md:shadow-none md:rounded-none md:py-0 md:px-0'
                        : `hidden md:block md:h-max md:rounded-l-full md:pl-4 md:pr-1
                                        ${
                                            calenderInfo['isCalenderOpen'] 
                                                ? calenderInfo['calenderType'] ==="checkIn" 
                                                    ? 'bg-white drop-shadow-lg drop-shadow-secondary-400'
                                                    : 'bg-gray-100'
                                                : 'bg-white'
                                        }
                                                py-2 pl-4  md:relative  `
                                }`}>
                <label className={`font-semibold
                        ${isMapOpen
                            ? 'md:text-neutral-500 md:text-lg mb-2 '
                            : 'text-neutral-600 text-xs md:text-sm '
                    }
                    `}>Check In</label>
                <input value={(selectedDate[0] < today.getTime()) ? '' : formatTimestampPretty(selectedDate[0])   } className={`${isMapOpen
                                            ? 'block w-full md:px-2.5 md:py-2 md:border md:border-neutral-300 md:rounded-md'
                                            : 'block bg-transparent placeholder-medium placeholder-text-sm placeholder-text-netural-300 md:max-w-32'
                                        }`} 
                        placeholder="Add Date" />
            </div>

            {/* Check Out section */}
            <div onClick={onCkeckOutInputClick} 
                className={`
                            ${
                                isMapOpen
                                    ? 'px-6 py-2.5 rounded-full shadow-search-input md:shadow-none md:rounded-none md:py-0 md:px-0'
                                    : `hidden | md:block md:h-max md:relative pl-4
                                        ${
                                        calenderInfo['isCalenderOpen'] 
                                            ? calenderInfo['calenderType'] ==="checkOut"
                                                ? 'bg-white drop-shadow-lg drop-shadow-secondary-400  '
                                                : 'bg-gray-100 '
                                            : 'md:custom-left-line-150 bg-white'
                                        } py-2 pl-4 rounded-r-full`
                                }`
                        }>
                <label
                    className={` font-semibold
                        ${isMapOpen
                            ? 'md:text-neutral-500 md:text-lg mb-2'
                            : 'text-neutral-600 text-xs md:text-sm '
                        }
                    `}>Check Out</label>
                <input value={selectedDate[1] < today.getTime() ? '': formatTimestampPretty(selectedDate[1])}
                    className={`
                        ${isMapOpen
                            ? 'block w-full md:px-2.5 md:py-2 md:border md:border-neutral-300 md:rounded-md'
                            : 'block  bg-transparent placeholder-medium placeholder-text-sm placeholder-text-netural-300 md:max-w-32'
                        }
                    `} placeholder="Add Date" />
            </div>
            {/* <div onClick={()=>setIsCalenderOpen(state=>!state)} className={`${isMapOpen
                                    ? 'px-6 py-2.5 rounded-full shadow-search-input md:shadow-none md:rounded-none md:py-0 md:px-0'
                                    : 'px-6 py-2.5 block rounded-full shadow-search-input | md:hidden'
                                } w-full relative`}>
                <label
                    className={`${isMapOpen
                                        ? 'md:text-neutral-500 md:text-lg mb-2'
                                        : 'text-neutral-600 text-xs'
                                    } font-semibold`}>Check In-Out</label>
                <input value={selectedDate?.length > 1 
                                            ? formatTimestampPretty(selectedDate[0])+ '     -      ' +formatTimestampPretty(selectedDate[1]) 
                                            : selectedDate?.length > 0
                                                ?  formatTimestampPretty(selectedDate[0])
                                                : ''
                                }
                    className={`w-full ${isMapOpen
                                        ? 'block  md:px-2.5 md:py-2 md:border md:border-neutral-300 md:rounded-md'
                                        : 'block bg-transparent placeholder-medium placeholder-text-sm placeholder-text-netural-300'
                                    }`}
    
                    placeholder="Add Date" />
    
                <CalendarDays className='icon absolute-y-center right-4 md:hidden'/>
            </div> */}
            {/* {
                 (calenderInfo['isCalenderOpen']  
               && calenderInfo['calenderType'] === "checkIn")
                    && <Calender type="checkIn"  
                        handleClearSelction={handleClearSelction}
                        onClickHandlar={onDateClickHandlar} 
                        today={today}/>
            }{
                (calenderInfo['isCalenderOpen'] 
             && (calenderInfo['calenderType'] === "checkOut"))
                    &&  <Calender type="checkOut"  
                        handleClearSelction={handleClearSelction}
                        onClickHandlar={onDateClickHandlar} 
                        today={today}/>
            } */}
             {/* {calenderInfo.isCalenderOpen && ["checkIn", "checkOut"].includes(calenderInfo.calenderType) && (
                <Calender 
                    type={calenderInfo.calenderType}
                    handleClearSelction={handleClearSelction}
                    onClickHandlar={onDateClickHandlar}
                    today={today}
                    close={closeCalender}
                />
            )}        */}
            {
                 

                <div  className={`bg-white 
                        ${calenderInfo.isCalenderOpen 
                            ? 'opacity-100 delay-500 ease-in duration-1500 z-[999] ' 
                            : 'opacity-0 delay-50 ease-out duration-100'
                        } transition 
                    ${isMapOpen 
                        ? `left-[300px]  z-[999] fixed ${calenderInfo['calenderType'] ==="checkIn" ? 'top-[324px]' : 'top-[420px]' }` 
                        : "absolute top-[calc(100%+6px)] md:left-1/2 md:-translate-x-1/2"} 
                         w-max md:w-[600px]  bg-white p-4 rounded-lg shadow-md `}>
                    <Calender 
                        type={calenderInfo.calenderType}
                        handleClearSelction={handleClearSelction}
                        onClickHandlar={onDateClickHandlar}
                        today={today}
                        close={closeCalender}
                    />
                </div>
                    
            }       

        </div>
      )


//   return (
//     <div ref={checkInCheckOutRef} className={`flex ${isMapOpen && ''}`}>
//         <div onClick={()=>setIsCalenderOpen(state=>!state)} className={`${isMapOpen
//                                 ? 'hidden'
//                                 : 'hidden | md:block md:h-max md:relative md:custom-left-line-150 md:ml-4'
//                             }`}>
//             <label className={`
//                     ${isMapOpen
//                     ? 'md:text-neutral-500 md:text-lg mb-2'
//                     : 'text-neutral-600 text-xs md:text-sm font-semibold'
//                 }
//                 `}>Check In</label>
//             <input value={selectedDate?.length > 0 ? formatTimestampPretty(selectedDate[0]) : ''   } className={`${isMapOpen
//                                         ? 'block w-full md:px-2.5 md:py-2 md:border md:border-neutral-300 md:rounded-md'
//                                         : 'block bg-transparent placeholder-medium placeholder-text-sm placeholder-text-netural-300 md:max-w-32'
//                                     }`} 
//                     placeholder="Add Date" />
//         </div>
//         <div onClick={()=>setIsCalenderOpen(state=>!state)} className={`${isMapOpen
//                                 ? 'hidden'
//                                 : 'hidden | md:block md:h-max md:relative md:custom-left-line-150 md:ml-4'
//                             }`}>
//             <label
//                 className={`
//                     ${isMapOpen
//                         ? 'md:text-neutral-500 md:text-lg mb-2'
//                         : 'text-neutral-600 text-xs md:text-sm font-semibold'
//                     }
//                 `}>Check Out</label>
//             <input value={selectedDate?.length > 1 ? formatTimestampPretty(selectedDate[1]) : ''   }
//                 className={`
//                     ${isMapOpen
//                         ? 'block w-full md:px-2.5 md:py-2 md:border md:border-neutral-300 md:rounded-md'
//                         : 'block bg-transparent placeholder-medium placeholder-text-sm placeholder-text-netural-300 md:max-w-32'
//                     }
//                 `} placeholder="Add Date" />
//         </div>
//         <div onClick={()=>setIsCalenderOpen(state=>!state)} className={`${isMapOpen
//                                 ? 'px-6 py-2.5 rounded-full shadow-search-input md:shadow-none md:rounded-none md:py-0 md:px-0 '
//                                 : 'px-6 py-2.5 block rounded-full shadow-search-input | md:hidden'
//                             } w-full relative`}>
//             <label
//                 className={`${isMapOpen
//                                     ? 'md:text-neutral-500 md:text-lg mb-2'
//                                     : 'text-neutral-600 text-xs '
//                                 } font-semibold`}>Check In-Out</label>
//             <input value={selectedDate?.length > 1 
//                                         ? formatTimestampPretty(selectedDate[0])+ '     -      ' +formatTimestampPretty(selectedDate[1]) 
//                                         : selectedDate?.length > 0
//                                             ?  formatTimestampPretty(selectedDate[0])
//                                             : ''
//                             }
//                 className={`w-full ${isMapOpen
//                                     ? 'block  md:px-2.5 md:py-2 md:border md:border-neutral-300 md:rounded-md'
//                                     : 'block bg-transparent placeholder-medium placeholder-text-sm placeholder-text-netural-300'
//                                 }`}

//                 placeholder="Add Date" />

//             <CalendarDays className='icon absolute-y-center right-4 md:hidden'/>
//         </div>
//         {
//             isCalenderOpen && <Calender  handleClearSelction={handleClearSelction} selectedDate={selectedDate} onClickHandlar={onDateClickHandlar} today={today}/>
//         }
//     </div>
//   )
}
