'use client'
import Map , { Marker, GeolocateControl }  from 'react-map-gl'
import { SearchBox } from '@mapbox/search-js-react'
import { useRef, useState } from 'react'
import 'mapbox-gl/dist/mapbox-gl.css';

export default function PropertyMap() {
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
                mapboxAccessToken={process.env.NEXT_PUBLIC_MAPBOX_ACCESS_TOKEN}>


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
