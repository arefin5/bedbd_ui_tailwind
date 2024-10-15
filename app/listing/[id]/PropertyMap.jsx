'use client'
import Map , { Marker, GeolocateControl }  from 'react-map-gl'
import { SearchBox } from '@mapbox/search-js-react'
import { useRef, useState, useEffect } from 'react'
import 'mapbox-gl/dist/mapbox-gl.css';

export default function PropertyMap({data}) {
  console.log(data)

  const { coordinates } = data
  const mapRef = useRef();
  const [mapInfo, setMapInfo] = useState({
    center:{
      latitude:23.794716682329422,
      longitude:90.41353033484006,
    },
    zoom:13,
    marker:{
      latitude:23.794716682329422,
      longitude:90.41353033484006,
    },
    locationName:'',
    setMapPosition: false
  })
  useEffect(()=>{
    setMapInfo(info=>({...info, 
                          center:{
                            latitude: coordinates[1],
                            longitude:coordinates[0],
                          },
                          marker:{
                            latitude: coordinates[1],
                            longitude:coordinates[0],
                          },
                          setMapPosition:true
                      })
                )
  },[coordinates])

  function onMapMoveHandlar(e) {
    setMapInfo({
      ...mapInfo,
      center:{
        latitude: e['viewState']['latitude'],
        longitude: e['viewState']['longitude'],
      },
      zoom: e['viewState']['zoom']
    })

    }

  return (
    <>
      {/* <div className='w-screen  min-h-xl max-w-screen-md marker-class'> */}
        <div className=" w-full xl:min-w-490px h-96 xl:w-342px xl:h-auto rounded-lg overflow-hidden">
              <Map 
                ref={mapRef}
                zoom = { mapInfo['zoom'] }
                longitude={ mapInfo['center']['longitude'] }
                latitude={ mapInfo['center']['latitude'] }
                mapStyle="mapbox://styles/mapbox/streets-v9"
                onMove={onMapMoveHandlar}
              //   onData={onMapDataHandlar}
                mapboxAccessToken='pk.eyJ1IjoibWQtYWwtbWFtdW4iLCJhIjoiY2x1ZHk1dDZlMWkxdTJqbmlkN2JmZWljaiJ9.YTqqaus6tdGIdJPx5sqlew'>


                <Marker 
                  longitude={ mapInfo['marker']['longitude']}
                  latitude={ mapInfo['marker']['latitude']}
                  color="red" anchor="center" />
              </Map> 
            </div>
      {/* </div> */}
          
      </>
  )
}
