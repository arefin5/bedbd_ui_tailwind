// 'use client'
// import Map , { Marker, GeolocateControl }  from 'react-map-gl'
// import { SearchBox } from '@mapbox/search-js-react'
// import { useRef, useState } from 'react'
// import 'mapbox-gl/dist/mapbox-gl.css';
 
// export default function LocationMap() {
//     const mapRef = useRef();
//     const geoControlRef = useRef();

//     const [mapInfo, setMapInfo] = useState({
//                                         center:{
//                                           latitude:23.794716682329422,
//                                           longitude:90.41353033484006,
//                                         },
//                                         zoom:13,
//                                         marker:{
//                                           latitude:23.794716682329422,
//                                           longitude:90.41353033484006,
//                                         },
//                                         locationName:'',
//                                         setMapPosition: false
//                                       })


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
//     <>
//           <div className='relative'>
//             <SearchBox 
//                   className='form-input'
//                   accessToken='eyJ1IjoibWQtYWwtbWFtdW4iLCJhIjoiY2x1ZHk1dDZlMWkxdTJqbmlkN2JmZWljaiJ9'
//                   // accessToken={process.env.NEXT_PUBLIC_MAPBOX_ACCESS_TOKEN}
//                   onRetrieve={handleRetrieve}
//                   placeholder='Search your location or click on location button'
//                   value={mapInfo['locationName']}/>
//             </div>
//           <p className="text-sm text-neutral-600 font-normal mt-6">Or Drag the pin where is your property located.</p>
//           <input className='hidden' type="number" id="latitude_input" name="latitude" value={mapInfo['marker']['latitude']} step="any" />
//           <input className='hidden' type="number" id="longitude_input" name="longitude" value={mapInfo['marker']['longitude']} step="any" />


//           <div className="w-full min-h-96 h-96 relative rounded-lg overflow-hidden ">
//           <Map 
//             ref={mapRef}
//             zoom = { mapInfo['zoom'] }
//             longitude={ mapInfo['center']['longitude'] }
//             latitude={ mapInfo['center']['latitude'] }
//             mapStyle="mapbox://styles/mapbox/streets-v9"
//             onMove={onMapMoveHandlar}
//           //   onData={onMapDataHandlar}
//             mapboxAccessToken='pk.eyJ1IjoibWQtYWwtbWFtdW4iLCJhIjoiY2x1ZHk1dDZlMWkxdTJqbmlkN2JmZWljaiJ9.YTqqaus6tdGIdJPx5sqlew'
//             // mapboxAccessToken={process.env.NEXT_PUBLIC_MAPBOX_ACCESS_TOKEN}
//             >
//             <GeolocateControl 
//               ref={geoControlRef}
//               onGeolocate={onGeolocateCtrlClickHandlar}/>

//             <Marker onDrag={onMarkerDragHandlar} draggable 
//               longitude={ mapInfo['marker']['longitude']}
//               latitude={ mapInfo['marker']['latitude']}
//               color="red" anchor="center" />
//           </Map> 
//           </div>
//       </>
//   )
// }
"use client"

import Map, { Marker, GeolocateControl } from 'react-map-gl';
import { SearchBox } from '@mapbox/search-js-react';
import { useRef, useState } from 'react';
import { useDispatch } from 'react-redux';
import 'mapbox-gl/dist/mapbox-gl.css';
import { updateFormData } from '@/redux/list/createListSlice';

export default function LocationMap() {
  const mapRef = useRef();
  const geoControlRef = useRef();
  const dispatch = useDispatch();

  const [mapInfo, setMapInfo] = useState({
    center: {
      latitude: 23.794716682329422,  // Set initial latitude
      longitude: 90.41353033484006, // Set initial longitude
    },
    zoom: 13,
    marker: {
      latitude: 23.794716682329422,
      longitude: 90.41353033484006,
    },
    locationName: '',
    setMapPosition: false,
  });

  // Update Redux state when the coordinates change
  const updateCoordinatesInRedux = (latitude, longitude) => {

    const payload = {
      ...currentFormData.formData,
      location: {
        ...formData.location,
        type: "Point",
        coordinates: [longitude, latitude],  // Use the coordinates directly from the map
      },
    };
     dispatch(updateFormData(payload)); 
  };

  function onMapMoveHandlar(e) {
    const { latitude, longitude, zoom } = e.viewState;
    setMapInfo({
      ...mapInfo,
      center: { latitude, longitude },
      zoom,
    });

    // Update Redux with new coordinates
    updateCoordinatesInRedux(latitude, longitude);
  }

  function onGeolocateCtrlClickHandlar(e) {
    const { latitude, longitude } = e.coords;
    setMapInfo({
      ...mapInfo,
      marker: { latitude, longitude },
      setMapPosition: true,
    });

    // Update Redux with new coordinates
    updateCoordinatesInRedux(latitude, longitude);
  }

  function onMarkerDragHandlar(e) {
    const { lat, lng } = e.lngLat;
    setMapInfo({
      ...mapInfo,
      marker: { latitude: lat, longitude: lng },
    });

    // Update Redux with new coordinates
    updateCoordinatesInRedux(lat, lng);
  }

  function handleRetrieve(e) {
    const { latitude, longitude } = e.features[0].properties.coordinates;
    setMapInfo({
      ...mapInfo,
      center: { latitude, longitude },
      marker: { latitude, longitude },
      locationName: e.features[0].properties.full_address,
    });

    // Update Redux with new coordinates
    updateCoordinatesInRedux(latitude, longitude);
  }

  return (
    <>
      <div className='relative'>
        <SearchBox
          className='form-input'
          accessToken='YOUR_MAPBOX_ACCESS_TOKEN'
          onRetrieve={handleRetrieve}
          placeholder='Search your location or click on location button'
          value={mapInfo['locationName']}
        />
      </div>
      <p className="text-sm text-neutral-600 font-normal mt-6">
        Or Drag the pin where is your property located.
      </p>
      <input
        className='hidden'
        type="number"
        id="latitude_input"
        name="latitude"
        value={mapInfo['marker']['latitude']}
        step="any"
      />
      <input
        className='hidden'
        type="number"
        id="longitude_input"
        name="longitude"
        value={mapInfo['marker']['longitude']}
        step="any"
      />

      <div className="w-full min-h-96 h-96 relative rounded-lg overflow-hidden">
        <Map
          ref={mapRef}
          zoom={mapInfo['zoom']}
          longitude={mapInfo['center']['longitude']}
          latitude={mapInfo['center']['latitude']}
          mapStyle="mapbox://styles/mapbox/streets-v9"
          onMove={onMapMoveHandlar}
          mapboxAccessToken="YOUR_MAPBOX_ACCESS_TOKEN"
        >
          <GeolocateControl
            ref={geoControlRef}
            onGeolocate={onGeolocateCtrlClickHandlar}
          />
          <Marker
            onDrag={onMarkerDragHandlar}
            draggable
            longitude={mapInfo['marker']['longitude']}
            latitude={mapInfo['marker']['latitude']}
            color="red"
            anchor="center"
          />
        </Map>
      </div>
    </>
  );
}
