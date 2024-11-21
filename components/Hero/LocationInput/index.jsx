// import { forwardRef } from 'react'
import { useRef, useEffect } from 'react'
import { Search } from 'lucide-react'
import debounce from '@/app/lib/debounce'
import convertToString from '@/app/lib/convertToString'
import SuggestionMenu from './SuggestionMenu'
import { useDispatch, useSelector } from 'react-redux'
import { openSuggestionsMenu , clearSuggestionsMenu, setOpenSuggestionsMenu, closeSuggestionsMenu} from '@/redux/features/search/searchSlice'

const LocationInput = ({ mapSearchBox, searchSession, mapRef }) => {
    const dispatch = useDispatch()
    const {     
                        isMapOpen,
            isSuggestionsMenuOpen,
                      suggestions
                                    } = useSelector(state => state.search.location);

    const searchBoxGroupRef = useRef(null)
    const searchBoxRef =  useRef(null)

    const handleSearchInput = debounce(async (event) => {
        const query  = convertToString(event.target.value)
        if(query.length > 0){
            try {
                const response = await mapSearchBox.suggest(query, searchSession);
                if (response) {
                    if(response['suggestions'].length > 0){
                        console.log(response)
                        dispatch(setOpenSuggestionsMenu(response['suggestions']))
                        // setMapData(state => ({
                        //     ...state,
                        //     isSuggestionMenuOpen: true,
                        //     suggestions: response['suggestions']
                        // }))

                    } else {
                        dispatch(clearSuggestionsMenu())
                        // setMapData(state => ({
                        //     ...state,
                        //     isSuggestionMenuOpen: false,
                        //     suggestions: []
                        // }))
                    }
                }
              } catch (error) {
                console.error('Error fetching search suggestions:', error);
              }
        } else{
            // setMapData(state => ({...state, suggestions: []}))
            dispatch(clearSuggestionsMenu())
        }
        
    }, 400)

    function handleLocaitonSearchBoxFocus(e) {
        const value  = convertToString(e.target.value)
        if(value.length > 0 && !isSuggestionsMenuOpen &&  suggestions.length > 0 ){
            // setMapData(state => ({...state, isSuggestionMenuOpen: true }))
            dispatch(openSuggestionsMenu())
        }  
    }

    function handleClickOutsideSearchBoxGroup(event){
        console.log('close')
        if (searchBoxGroupRef.current && !searchBoxGroupRef.current.contains(event.target)) {
            // setMapData(state => ({ ...state, isSuggestionMenuOpen: false}));

            dispatch(closeSuggestionsMenu())
          }
    }
    
    useEffect(() => {
        document.addEventListener('mousedown', handleClickOutsideSearchBoxGroup);
        return () => {
          document.removeEventListener('mousedown', handleClickOutsideSearchBoxGroup);
        };
      }, []);


  return (
    <div ref={searchBoxGroupRef} className={`w-full  
            ${isMapOpen
                ? 'md:shadow-none md:px-0 md:py-0 md:rounded-none md:static md:h-max md:max-w-52 md:min-w-full' 
                : 'w-64 '
                }   
            relative px-6 py-2.5 block rounded-full shadow-search-input | md:shadow-none md:px-0 md:py-0 md:rounded-none md:static md:h-max md:max-w-52 
        `}>
        <label
            className={`${isMapOpen
                            ? 'md:text-neutral-500 md:text-lg mb-2'
                            : 'text-neutral-600 text-xs md:text-sm '
                        } font-semibold`}>
            Location
        </label>
        <div className="relative ">
            <input ref={searchBoxRef} className={`
                        ${isMapOpen
                        ? 'block w-full md:px-2.5 md:py-2 md:border md:border-neutral-300 md:rounded-md'
                        : 'block bg-transparent placeholder-medium placeholder-text-sm placeholder-text-netural-300 md:max-w-64'
                    }`} 
                    onChange={handleSearchInput}
                    onFocus={handleLocaitonSearchBoxFocus}
                    placeholder="Provide your locaiton " />

            {
                isSuggestionsMenuOpen &&  suggestions?.length > 0
                && <SuggestionMenu searchBoxRef={searchBoxRef} mapSearchBox={mapSearchBox} mapRef={mapRef} searchSession={searchSession}/>
                // && <div className={`${mapData['isMapOpen'] ? 'top-12': 'top-8' } absolute z-20  bg-white w-72 h-max rounded-lg shadow-lg origin-top-right ring-1 ring-black ring-opacity-5 focus:outline-none transition-all duration-300 transform scale-95 overflow-hidden`}>
                //         {
                //             mapData['suggestions'].map(suggestion=> (
                //                         <div className=" px-4 py-2 hover:bg-gray-100"
                //                             key={suggestion['mapbox_id']} onClick={async ()=>handleSearchSuggestionOptionClick(suggestion)}>
                //                             <div className=" w-full text-base font-semibold ">{suggestion['name']}</div>
                //                             {
                //                                 suggestion['full_address'] 
                //                                     ? <div>{suggestion['full_address'] + (suggestion['place_formatted'] ? (', ' + suggestion['place_formatted']) : '') }</div>
                //                                     : suggestion['place_formatted'] 
                //                                             && <div>{ suggestion['place_formatted']}</div>
                //                             }
                //                         </div>))
                //         }
                //     </div>
            }
            
        </div>
        <Search className="icon absolute-y-center right-4 md:hidden "/>
    </div>
  )
}

export default LocationInput