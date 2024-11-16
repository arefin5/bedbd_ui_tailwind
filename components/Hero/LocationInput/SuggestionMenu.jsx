
import { generateRandomLocations } from "@/app/lib/sampleLocationPoints"

export default function SuggestionMenu({ mapSearchBox, mapData, setMapData, mapRef, searchSession, setPropertyLoactions }) {

    async function handleSearchSuggestionOptionClick(suggestion){
        const result = await mapSearchBox.retrieve(suggestion, searchSession)
        console.log(result)
        const { features } = result
        setMapData(state => ({...state, isSuggestionMenuOpen: false, selectedSuggestion: {...suggestion, coordinates: features[0]['geometry']['coordinates'] }}))
        if(features && features.length > 0 ){
            if(mapData['isMapOpen'] ){
                if(mapRef.current){
                    const bounds = mapRef.current.getBounds();
                    console.log(bounds)
                    // Fetch Properties within map bound 
                    // then set to Property locaiton like setPropertyLoactions(sampleLocaiton)
                    // ****************************
                    //
                    //
    
                    const sampleLocaiton =  generateRandomLocations(
                                                                features[0]['geometry']['coordinates'][1],  
                                                                features[0]['geometry']['coordinates'][0], 
                                                                30, 50);
                    setPropertyLoactions(sampleLocaiton)
                    mapRef?.current.flyTo({ center: features[0]['geometry']['coordinates'], 
                                            essential: true ,
                                            zoom: 16 
                                        })
                                    }
                }
        }


        // const { features } = await search.retrieve(suggestion, { sessionToken });
    }

  return (
    <div className={`${mapData['isMapOpen'] ? 'top-12': 'top-8' } absolute z-20  bg-white w-72 h-max rounded-lg shadow-lg origin-top-right ring-1 ring-black ring-opacity-5 focus:outline-none transition-all duration-300 transform scale-95 overflow-hidden`}>
        {
            mapData['suggestions'].map(suggestion=> (
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
