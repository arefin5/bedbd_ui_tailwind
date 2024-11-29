import { setLocation, selectSuggestedLocation } from "@/redux/features/search/searchSlice";
import { useDispatch, useSelector } from "react-redux";

export default function SuggestionMenu({ mapSearchBox, searchBoxRef, mapRef, searchSession  }) {
    const dispatch = useDispatch()
    const { selectedLocation,
                    isMapOpen,
        issuggestionsMenuOpen,
                  suggestions
                } = useSelector(state => state.search.location);
    // const suggestions = useSelector(state => state.suggestions);
    
    async function handleSearchSuggestionOptionClick(suggestion){
        if (searchBoxRef.current) {
            searchBoxRef.current.value = suggestion['name'];
          }

        const result = await mapSearchBox.retrieve(suggestion, searchSession)
        //   console.log(result)
        const { features } = result
        const selectedLocationData = {
                                        name : suggestion?.name || '',
                             place_formatted : suggestion?.place_formatted|| '',
                                     country : suggestion?.context?.country?.name || '',
                                country_code : suggestion?.context?.country?.country_code || '',
                                    district : suggestion?.context?.district?.name || '',
                                feature_type : suggestion?.context?.feature_type || '',
                                   longitude : features[0].geometry.coordinates[0], 
                                    latitude : features[0].geometry.coordinates[1]
                            }
        dispatch(selectSuggestedLocation(selectedLocationData))
        // setMapData(state => (
        //     {...state, 
        //         isSuggestionMenuOpen: false, 
        //         selectedSuggestion: 
        //         {...suggestion, coordinates: features[0]['geometry']['coordinates'] }}))
        if(features && features.length > 0 ){
            console.log(mapRef.current)
            console.log(features[0]['geometry']['coordinates'])
            const center = mapRef.current.getCenter()
            console.log(center)
            if(isMapOpen){
                console.log(isMapOpen)
                if(mapRef.current){

                    mapRef?.current.flyTo({ center: features[0]['geometry']['coordinates'], 
                                            essential: true ,
                                            zoom: 13 
                                        })
                                    }
                }
        }
    }

  return (
    <div className={`${isMapOpen ? 'top-12': 'top-8' } absolute z-20  bg-white w-72 h-max rounded-lg shadow-lg origin-top-right ring-1 ring-black ring-opacity-5 focus:outline-none transition-all duration-300 transform scale-95 overflow-hidden`}>
        {
            // mapData['suggestions']
            suggestions.map(suggestion=> (
                        <div className=" px-4 py-2 hover:bg-gray-100"
                            key={suggestion['mapbox_id']} onClick={async ()=>handleSearchSuggestionOptionClick(suggestion)}>
                            <div className=" w-full text-base font-semibold ">{suggestion['name']}</div>
                            {
                                suggestion['full_address'] 
                                    ? <div>{suggestion['full_address'] + (suggestion['place_formatted'] ? (', ' + suggestion['place_formatted']) : '') }</div>
                                    : suggestion['place_formatted'] 
                                            && <div>{ suggestion['place_formatted']}</div>
                            }
                        </div>))
        }
    </div>
  )
}
