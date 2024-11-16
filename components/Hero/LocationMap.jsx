'use client'
import Map , { Marker }  from 'react-map-gl'
import { useState, forwardRef, useEffect } from 'react'
import 'mapbox-gl/dist/mapbox-gl.css';
import { sampleLocaiton } from '@/app/lib/sampleLocationPoints';
import Image from 'next/image';
import favicon from '/public/favicon.svg'





export const LocationMap = forwardRef(({ properties }, ref) => {

  // useEffect(()=>{
  //   if(ref?.current)
  //     ref.current.scrollZoom.enable()
  // }, [ref])

  return (
    <div className="h-full rounded-xl overflow-hidden ">
        <Map 
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
              {
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
              }
          </Map> 
    </div>
    
  )
})
export default LocationMap
// export default map

// export default function LocationMap({mapData, property}) {
//   console.log(sampleLocaiton)

//     const mapRef = useRef();
//     const geoControlRef = useRef();

//     const [mapInfo, setMapInfo] = useState(mapData)


//     function onMapMoveHandlar(e) {
//         setMapInfo({
//           ...mapInfo,
//           center:{
//             latitude: e['viewState']['latitude'],
//             longitude: e['viewState']['longitude'],
//           },
//           zoom: e['viewState']['zoom']
//         })

//         }

//     function onGeolocateCtrlClickHandlar(e) {
//       console.log(e) 
//         setMapInfo({
//           ...mapInfo,
//           marker: {
//                   latitude: e['coords']['latitude'],
//                   longitude: e['coords']['longitude'],
//                 },
//           setMapPosition: true
//         })
//       }

//     function onMarkerDragHandlar(e) {
//       setMapInfo({
//         ...mapInfo,
//         marker: {
//                 latitude: e['lngLat']['lat'],
//                 longitude: e['lngLat']['lng'],
//               } 
//         })
//       }

//     function handleRetrieve(e) {
//       setMapInfo({
//         ...mapInfo,
//         center:{
//           latitude: e['features'][0]['properties']['coordinates']['latitude'],
//           longitude: e['features'][0]['properties']['coordinates']['longitude'],
//         },
//         marker:{
//           latitude: e['features'][0]['properties']['coordinates']['latitude'],
//           longitude: e['features'][0]['properties']['coordinates']['longitude'],
//         },
//         locationName:e['features'][0]['properties']['full_address']
//       })
//     }

//   return (
//     <div className="h-full rounded-xl overflow-hidden ">
//         <Map 
//             ref={mapRef}
//             zoom = { mapInfo['zoom'] }
//             longitude={ mapInfo['center']['longitude'] }
//             latitude={ mapInfo['center']['latitude'] }
//             mapStyle="mapbox://styles/mapbox/streets-v9"
//             onMove={onMapMoveHandlar}
//             mapboxAccessToken='pk.eyJ1IjoibWQtYWwtbWFtdW4iLCJhIjoiY2x1ZHk1dDZlMWkxdTJqbmlkN2JmZWljaiJ9.YTqqaus6tdGIdJPx5sqlew'
//             >
//               {
//                 property.map(item=> <Marker 
//                                       anchor="bottom"
//                                         longitude={ item['longitude'] }
//                                         latitude={ item['latitude'] }
//                                         color="red"/>)
//               }
//           </Map> 
//     </div>
    
//   )
// }

// mapboxAccessToken='pk.eyJ1IjoibWQtYWwtbWFtdW4iLCJhIjoiY2x1ZHk1dDZlMWkxdTJqbmlkN2JmZWljaiJ9.YTqqaus6tdGIdJPx5sqlew'


