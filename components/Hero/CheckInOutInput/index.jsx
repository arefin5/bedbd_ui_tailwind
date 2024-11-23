import Calender from "./Calender";
import { useSelector } from "react-redux"
import { CalendarDays } from "lucide-react";
import { useState, useEffect, useRef} from "react";
import debounce from "@/app/lib/debounce";
import { useDispatch } from "react-redux";
import { clearDateSelection, setCheckInOutDate } from "@/redux/features/search/searchSlice";


export default function CheckInOutInput() {
    const checkInCheckOutRef = useRef(null)
    const dispatch =  useDispatch()

    const { isMapOpen } = useSelector(state => state.search.location);
    const {  selectedDate } = useSelector(state => state.search);

    // const [selectedDate, setSelectDate] = useState([])
    const [isCalenderOpen, setIsCalenderOpen] = useState(false)

    function handleClearSelction(e) {
        e.preventDefault()
        if(selectedDate.length>0)
            // setSelectDate([])
            dispatch(clearDateSelection())

    }
    function formatDatePretty(date) {
        if (!(date instanceof Date) || isNaN(date)) {
          throw new Error("Invalid Date object provided.");
        }
      
        const months = [
          "Jan", "Feb", "Mar", "Apr", "May", "Jun", 
          "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"
        ];
      
        const day = date.getDate();
        const month = months[date.getMonth()]; // Months are 0-indexed
        const year = date.getFullYear();
      
        return `${day} ${month} ${year}`;
      }
    const onDateClickHandlar = debounce((date) => {
        // console.log("Selected Date:", date);
        if(selectedDate.length === 0){
            // setSelectDate([date])
            dispatch(setCheckInOutDate([date]))
        }else if(selectedDate.length === 1){
            if(selectedDate[0].getTime() === date.getTime()){
                // setSelectDate([])
                dispatch(clearDateSelection())
            } 
            if(selectedDate[0].getTime() < date.getTime()){
                dispatch(setCheckInOutDate([selectedDate[0], date]))
                // setSelectDate(() => [selectedDate[0], date])
            }else{
                dispatch(setCheckInOutDate([date, selectedDate[0]]))
                // setSelectDate(() => [date, selectedDate[0]])
            }
        }else if(selectedDate.length === 2 ){
            const difference_0 = Math.abs(selectedDate[0].getTime() - date.getTime())
            const difference_1 = Math.abs(selectedDate[1].getTime() - date.getTime())
            if(difference_0 < difference_1){
                if(selectedDate[1].getTime() < date.getTime()){
                    dispatch(setCheckInOutDate([selectedDate[1], date]))
                    // setSelectDate(()=>[selectedDate[1], date])
                }else{
                    dispatch(setCheckInOutDate([date, selectedDate[1]]))
                    // setSelectDate(()=>[date, selectedDate[1]])
                }
                
            }else if(difference_1 < difference_0){
                if(selectedDate[0].getTime() < date.getTime()){
                    dispatch(setCheckInOutDate([selectedDate[0], date]))
                    // setSelectDate(()=>[selectedDate[0], date])
                }else{
                    dispatch(setCheckInOutDate([date, selectedDate[0]]))
                    // setSelectDate(()=>[date, selectedDate[0]])
                }
                // setSelectDate(()=>[date, selectedDate[1]])
            }
        }
      }, 300);
      const today = new Date

    function handleClickOutsideCheckInOut(event){

    if (checkInCheckOutRef.current && !checkInCheckOutRef.current.contains(event.target)) {
        // setMapData(state => ({ ...state, isSuggestionMenuOpen: false}));
        setIsCalenderOpen(false)
        // dispatch(closeSuggestionsMenu())
        }
}
    
    useEffect(() => {
        document.addEventListener('mousedown', handleClickOutsideCheckInOut);
        return () => {
          document.removeEventListener('mousedown', handleClickOutsideCheckInOut);
        };
      }, []);



  return (
    <div ref={checkInCheckOutRef} className="relative flex">
        <div onClick={()=>setIsCalenderOpen(state=>!state)} className={`${isMapOpen
                                ? 'hidden'
                                : 'hidden | md:block md:h-max md:relative md:custom-left-line-150 md:ml-4'
                            }`}>
            <label className={`
                    ${isMapOpen
                    ? 'md:text-neutral-500 md:text-lg mb-2'
                    : 'text-neutral-600 text-xs md:text-sm font-semibold'
                }
                `}>Check In</label>
            <input value={selectedDate?.length > 0 ? formatDatePretty(selectedDate[0]) : ''   } className={`${isMapOpen
                                        ? 'block w-full md:px-2.5 md:py-2 md:border md:border-neutral-300 md:rounded-md'
                                        : 'block bg-transparent placeholder-medium placeholder-text-sm placeholder-text-netural-300 md:max-w-32'
                                    }`} 
                    placeholder="Add Date" />
        </div>
        <div onClick={()=>setIsCalenderOpen(state=>!state)} className={`${isMapOpen
                                ? 'hidden'
                                : 'hidden | md:block md:h-max md:relative md:custom-left-line-150 md:ml-4'
                            }`}>
            <label
                className={`
                    ${isMapOpen
                        ? 'md:text-neutral-500 md:text-lg mb-2'
                        : 'text-neutral-600 text-xs md:text-sm font-semibold'
                    }
                `}>Check Out</label>
            <input value={selectedDate?.length > 1 ? formatDatePretty(selectedDate[1]) : ''   }
                className={`
                    ${isMapOpen
                        ? 'block w-full md:px-2.5 md:py-2 md:border md:border-neutral-300 md:rounded-md'
                        : 'block bg-transparent placeholder-medium placeholder-text-sm placeholder-text-netural-300 md:max-w-32'
                    }
                `} placeholder="Add Date" />
        </div>
        <div onClick={()=>setIsCalenderOpen(state=>!state)} className={`${isMapOpen
                                ? 'px-6 py-2.5 rounded-full shadow-search-input md:shadow-none md:rounded-none md:py-0 md:px-0 '
                                : 'px-6 py-2.5 block rounded-full shadow-search-input | md:hidden'
                            } w-full relative`}>
            <label
                className={`${isMapOpen
                                    ? 'md:text-neutral-500 md:text-lg mb-2'
                                    : 'text-neutral-600 text-xs '
                                } font-semibold`}>Check In-Out</label>
            <input value={selectedDate?.length > 1 
                                        ? formatDatePretty(selectedDate[0])+ '     -      ' +formatDatePretty(selectedDate[1]) 
                                        : selectedDate?.length > 0
                                            ?  formatDatePretty(selectedDate[0])
                                            : ''
                            }
                className={`w-full ${isMapOpen
                                    ? 'block  md:px-2.5 md:py-2 md:border md:border-neutral-300 md:rounded-md'
                                    : 'block bg-transparent placeholder-medium placeholder-text-sm placeholder-text-netural-300'
                                }`}

                placeholder="Add Date" />

            <CalendarDays className='icon absolute-y-center right-4 md:hidden'/>
        </div>
        {
            isCalenderOpen && <Calender handleClearSelction={handleClearSelction} selectedDate={selectedDate} onClickHandlar={onDateClickHandlar} today={today}/>
        }
    </div>
  )
}
