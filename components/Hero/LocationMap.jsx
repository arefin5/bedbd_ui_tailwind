'use client'
import Map , { Marker }  from 'react-map-gl'
import { useState, forwardRef, useEffect, useRef } from 'react'
import 'mapbox-gl/dist/mapbox-gl.css';
import { sampleLocaiton } from '@/app/lib/sampleLocationPoints';
import Image from 'next/image';
import favicon from '/public/favicon.svg'
import debounce from '@/app/lib/debounce';
import * as turf from '@turf/turf';
import { useGetMapListingsQuery } from '@/redux/features/api/apiSlice';
import { useSelector } from 'react-redux';

export const LocationMap = forwardRef((props, ref) => {
  const location = useSelector(state => state.search.location);
  const { selectedLocation, isMapOpen } = location
  // const isMapMountedRef = useRef(false)

  const [mapState, setMapState] = useState({
                                              latitude: 23.794716682329422, 
                                              longitude: 90.41353033484006,
                                              distance: 1.5,
                                          })
  const { data, isLoading, isError, error } = useGetMapListingsQuery({
                                                                          latitude: mapState['latitude'],
                                                                          longitude:  mapState['longitude'],
                                                                          distance: mapState['distance']
                                                                      });

function mapOnLoad() {
  if(ref.current && isMapOpen){
    const map = ref.current.getMap()
    if(selectedLocation.hasOwnProperty("latitude") 
        && 
      selectedLocation.hasOwnProperty("longitude")){
        map?.flyTo({center: [selectedLocation.longitude, selectedLocation.latitude],
          zoom: 15,})
      }
  }
}

  const handleMapChange = () => {

    const map = ref.current.getMap(); // Access the Map instance
    const center = map.getCenter(); // Get center of the map

    const bounds = map.getBounds();
    const northEast = bounds.getNorthEast();

    const from = turf.point([center.lng, center.lat]); // center of the map
    const to = turf.point([northEast.lng, northEast.lat]); 
    const options = { units: 'kilometers' };
    const distance = turf.distance(from, to, options);


    setMapState(state => ({ 
                            ...state,  
                            latitude: center.lat,  
                            latitude: center.lat,                            
                            distance
                          }))
  };
  const debouncedHandleMapChange = debounce(handleMapChange, 1000);

  return (
    <div className="h-full rounded-xl overflow-hidden z-10">
        <Map 
            onMoveEnd={debouncedHandleMapChange}
            onZoomEnd={debouncedHandleMapChange}
            onLoad={mapOnLoad}
            ref={ref}
            initialViewState={{
              longitude: 90.41353033484006,
              latitude: 23.794716682329422,
              zoom: 15,
            }}
            mapStyle="mapbox://styles/mapbox/streets-v9"
            scrollZoom={true}
            dragPan={true}
            mapboxAccessToken='pk.eyJ1IjoibWQtYWwtbWFtdW4iLCJhIjoiY2x1ZHk1dDZlMWkxdTJqbmlkN2JmZWljaiJ9.YTqqaus6tdGIdJPx5sqlew'
            >
              {/* {
                properties?.length>0 
                  && properties.map((item, idx)=> <Marker anchor="bottom" key={idx}
                                              longitude={ item['longitude'] }
                                              latitude={ item['latitude'] }
                                              color="red">
                                                <div className='relative bg-primary-100 rounded-2xl px-3 py-1 bg-white bg-opacity-70 shadow-secondary-50 shadow-sm z-10 hover:z-30 hover:bg-opacity-100'>
                                                      <div className='h-8 w-14 relative'>
                                                        <Image src={favicon} fill/>
                                                      </div>
                                                      {
                                                        (item['price'] && item['currency'])
                                                        &&  <div className='absolute bottom-2.5 left-11  w-max text-secondary-400 font-semibold  rounded-xl '>
                                                              {
                                                                item['currency'] +' '+item['price'] 
                                                              }
                                                            </div>
                                                      }                                                        
                                                </div>
                                              </Marker>)
              } */}
          </Map> 
    </div>
  )
})
export default LocationMap

