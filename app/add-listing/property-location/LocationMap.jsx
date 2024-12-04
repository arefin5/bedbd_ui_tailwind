'use client'
import Map , { Marker, GeolocateControl }  from 'react-map-gl'
import { useRef, useState, useEffect } from 'react'
import 'mapbox-gl/dist/mapbox-gl.css';
import { useDispatch } from 'react-redux';
import { updateFormData } from '@/redux/list/createListSlice';
import { useSearchBoxCore, useSearchSession } from "@mapbox/search-js-react"
import debounce from '@/app/lib/debounce';
import { setOpenSuggestionsMenu , clearSuggestionsMenu, setMapOpen} from '@/redux/features/search/searchSlice';
import SuggestionMenu from '@/components/Hero/LocationInput/SuggestionMenu';
import { useSelector } from 'react-redux';
import convertToString from '@/app/lib/convertToString';


export default function LocationMap() {
    const mapSearchBox = useSearchBoxCore({ accessToken: 'pk.eyJ1IjoibWQtYWwtbWFtdW4iLCJhIjoiY2x1ZHk1dDZlMWkxdTJqbmlkN2JmZWljaiJ9.YTqqaus6tdGIdJPx5sqlew' })
    const searchSession = new useSearchSession(mapSearchBox);
    const {   isSuggestionsMenuOpen,
                suggestions, selectedLocation
                              } = useSelector(state => state.search.location);
    const { formData } = useSelector((state) => state.form); 
    

    const searchBoxRef = useRef(null)
    const mapRef = useRef();
    const geoControlRef = useRef();
    const dispatch = useDispatch()



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
    // const [suggestionsInfo, setSuggestionsInfo] = useState({
    //                                                 isSuggestionsMenuOpen: true, 
    //                                                           suggestions: [],
    //                                                   selectedSuggestions: {}
    //                                                       })

  
    useEffect(()=>{
      if(selectedLocation.latitude && selectedLocation.longitude){
        console.log(selectedLocation)
        setMapInfo({...mapInfo, 
                    marker: {
                              latitude: selectedLocation.latitude,
                              longitude: selectedLocation.longitude,
                            }
                  })
      }
    }, [selectedLocation])


    const handleGeolocate = (position) => {
      const { latitude, longitude } = position.coords;
      setMapInfo((prev) => ({
        ...prev,
        marker: { latitude, longitude },
        setMapPosition: true,
      }));
  
      mapRef.current?.flyTo({
        center: [longitude, latitude],
        zoom: 15,
        speed: 1.2,
        essential: true,
      });
    };

    const handleSearchInput = debounce(async (event) => {
      const query = convertToString(event.target.value);
      if (query.length > 0) {
        try {
          const response = await mapSearchBox.suggest(query, searchSession);
          if (response?.suggestions?.length > 0) {
            dispatch(setMapOpen())
            dispatch(setOpenSuggestionsMenu(response.suggestions));
          } else {
            dispatch(clearSuggestionsMenu());
          }
        } catch (error) {
          console.error('Error fetching search suggestions:', error);
        }
      } else {
        dispatch(clearSuggestionsMenu());
      }
    }, 400);

    // function onMapMoveHandlar(e) {
    //     setMapInfo({
    //       ...mapInfo,
    //       center:{
    //         latitude: e['viewState']['latitude'],
    //         longitude: e['viewState']['longitude'],
    //       },
    //       zoom: e['viewState']['zoom']
    //     })
    //   }

    function onGeolocateCtrlClickHandlar(e) {
      console.log(e) 
        setMapInfo({
          ...mapInfo,
          marker: {
                  latitude: e['coords']['latitude'],
                  longitude: e['coords']['longitude'],
                },
          setMapPosition: true
        })
      }
      


      
  const handleMarkerDrag = debounce((event) => {
    const { lat, lng } = event.lngLat;
    setMapInfo((prev) => ({
      ...prev,
      marker: { latitude: lat, longitude: lng },
    }));
      const payload = {
        ...formData,
        location: {
          ...formData.location,
          type: "Point",
          coordinates: [lng, lat], // Either the selected or default coordinates
        },
      };
  
       dispatch(updateFormData(payload));
    // dispatch(updateFormData({ latitude: lat, longitude: lng }));
  }, 500);
 
  const handleRetrieve = (data) => {
    const feature = data.features[0];
    const { latitude, longitude } = feature.properties.coordinates;
    setMapInfo({
      center: { latitude, longitude },
      marker: { latitude, longitude },
      locationName: feature.properties.full_address,
    });
    mapRef.current?.flyTo({
      center: [longitude, latitude],
      zoom: 15,
      speed: 1.2,
      essential: true,
    });
  };

  return (
    <>
          <div className='relative'>
            {/* <SearchBox 
                  className='form-input'
                  accessToken='eyJ1IjoibWQtYWwtbWFtdW4iLCJhIjoiY2x1ZHk1dDZlMWkxdTJqbmlkN2JmZWljaiJ9'
                  // accessToken={process.env.NEXT_PUBLIC_MAPBOX_ACCESS_TOKEN}
                  onRetrieve={handleRetrieve}
                  placeholder='Search your location or click on location button'
                  value={mapInfo['locationName']}/> */}
          
            <input ref={searchBoxRef} className=" marker-class w-full px-4 py-3 rounded-lg text-base font-medium text-neutral-600 border border-neutral-400"
                    onChange={handleSearchInput}
                    // onFocus={handleLocaitonSearchBoxFocus}
                    placeholder="Search your locaiton " />
            {
              isSuggestionsMenuOpen &&  suggestions?.length > 0
              && <SuggestionMenu 
                    searchBoxRef={searchBoxRef}
                    mapSearchBox={mapSearchBox} 
                    mapRef={mapRef} 
                    searchSession={searchSession}/>
            }
            </div>
          <p className="text-sm text-neutral-600 font-normal mt-6">Or Drag the pin where is your property located.</p>
          <input className='hidden' type="number" id="latitude_input" name="latitude" value={mapInfo['marker']['latitude']} step="any" />
          <input className='hidden' type="number" id="longitude_input" name="longitude" value={mapInfo['marker']['longitude']} step="any" />


          <div className="w-full min-h-96 h-96 relative rounded-lg overflow-hidden ">

          <Map
          ref={mapRef}
          initialViewState={{
            longitude: mapInfo.center.longitude,
            latitude: mapInfo.center.latitude,
            zoom: mapInfo.zoom,
          }}
          mapStyle="mapbox://styles/mapbox/streets-v9"
          mapboxAccessToken="pk.eyJ1IjoibWQtYWwtbWFtdW4iLCJhIjoiY2x1ZHk1dDZlMWkxdTJqbmlkN2JmZWljaiJ9.YTqqaus6tdGIdJPx5sqlew"
        >
          <GeolocateControl
            ref={geoControlRef}
            position="top-left"
            trackUserLocation
            showAccuracyCircle={false}
            onGeolocate={handleGeolocate}
          />
          <Marker
            longitude={mapInfo.marker.longitude}
            latitude={mapInfo.marker.latitude}
            draggable
            onDragEnd={handleMarkerDrag}
            color="red"
          />
        </Map>
          {/* <Map 
            ref={mapRef}
            // zoom = { mapInfo['zoom'] }
            initialViewState={{
              longitude: 90.41353033484006,
              latitude: 23.794716682329422,
              zoom: 15,
            }}
            mapStyle="mapbox://styles/mapbox/streets-v9"
            scrollZoom={true}
            dragPan={true}
            mapboxAccessToken='pk.eyJ1IjoibWQtYWwtbWFtdW4iLCJhIjoiY2x1ZHk1dDZlMWkxdTJqbmlkN2JmZWljaiJ9.YTqqaus6tdGIdJPx5sqlew'
            /> */}
            {/* <GeolocateControl 
              ref={geoControlRef}
              onGeolocate={onGeolocateCtrlClickHandlar}/> */}

            {/* <Marker onDrag={onMarkerDragHandlar} draggable 
              color="red" anchor="center" /> */}
          {/* </Map>  */}
          </div>
      </>
  )
}









// "use client"

// import Map, { Marker, GeolocateControl } from 'react-map-gl';
// import { SearchBox } from '@mapbox/search-js-react';
// import { useRef, useState } from 'react';
// import { useDispatch } from 'react-redux';
// import 'mapbox-gl/dist/mapbox-gl.css';
// import { updateFormData } from '@/redux/list/createListSlice';

// export default function LocationMap() {
//   const mapRef = useRef();
//   const geoControlRef = useRef();
//   const dispatch = useDispatch();

//   const [mapInfo, setMapInfo] = useState({
//     center: {
//       latitude: 23.794716682329422,  // Set initial latitude
//       longitude: 90.41353033484006, // Set initial longitude
//     },
//     zoom: 13,
//     marker: {
//       latitude: 23.794716682329422,
//       longitude: 90.41353033484006,
//     },
//     locationName: '',
//     setMapPosition: false,
//   });

//   // Update Redux state when the coordinates change
//   const updateCoordinatesInRedux = (latitude, longitude) => {

//     const payload = {
//       ...currentFormData.formData,
//       location: {
//         ...formData.location,
//         type: "Point",
//         coordinates: [longitude, latitude],  // Use the coordinates directly from the map
//       },
//     };
//      dispatch(updateFormData(payload)); 
//   };

//   function onMapMoveHandlar(e) {
//     const { latitude, longitude, zoom } = e.viewState;
//     setMapInfo({
//       ...mapInfo,
//       center: { latitude, longitude },
//       zoom,
//     });

//     // Update Redux with new coordinates
//     updateCoordinatesInRedux(latitude, longitude);
//   }

//   function onGeolocateCtrlClickHandlar(e) {
//     const { latitude, longitude } = e.coords;
//     setMapInfo({
//       ...mapInfo,
//       marker: { latitude, longitude },
//       setMapPosition: true,
//     });

//     // Update Redux with new coordinates
//     updateCoordinatesInRedux(latitude, longitude);
//   }

//   function onMarkerDragHandlar(e) {
//     const { lat, lng } = e.lngLat;
//     setMapInfo({
//       ...mapInfo,
//       marker: { latitude: lat, longitude: lng },
//     });

//     // Update Redux with new coordinates
//     updateCoordinatesInRedux(lat, lng);
//   }

//   function handleRetrieve(e) {
//     const { latitude, longitude } = e.features[0].properties.coordinates;
//     setMapInfo({
//       ...mapInfo,
//       center: { latitude, longitude },
//       marker: { latitude, longitude },
//       locationName: e.features[0].properties.full_address,
//     });

//     // Update Redux with new coordinates
//     updateCoordinatesInRedux(latitude, longitude);
//   }

//   return (
//     <>
//       <div className='relative'>
//         <SearchBox
//           className='form-input'
//           accessToken='YOUR_MAPBOX_ACCESS_TOKEN'
//           onRetrieve={handleRetrieve}
//           placeholder='Search your location or click on location button'
//           value={mapInfo['locationName']}
//         />
//       </div>
//       <p className="text-sm text-neutral-600 font-normal mt-6">
//         Or Drag the pin where is your property located.
//       </p>
//       <input
//         className='hidden'
//         type="number"
//         id="latitude_input"
//         name="latitude"
//         value={mapInfo['marker']['latitude']}
//         step="any"
//       />
//       <input
//         className='hidden'
//         type="number"
//         id="longitude_input"
//         name="longitude"
//         value={mapInfo['marker']['longitude']}
//         step="any"
//       />

//       <div className="w-full min-h-96 h-96 relative rounded-lg overflow-hidden">
//         <Map
//           ref={mapRef}
//           zoom={mapInfo['zoom']}
//           longitude={mapInfo['center']['longitude']}
//           latitude={mapInfo['center']['latitude']}
//           mapStyle="mapbox://styles/mapbox/streets-v9"
//           onMove={onMapMoveHandlar}
//           mapboxAccessToken="YOUR_MAPBOX_ACCESS_TOKEN"
//         >
//           <GeolocateControl
//             ref={geoControlRef}
//             onGeolocate={onGeolocateCtrlClickHandlar}
//           />
//           <Marker
//             onDrag={onMarkerDragHandlar}
//             draggable
//             longitude={mapInfo['marker']['longitude']}
//             latitude={mapInfo['marker']['latitude']}
//             color="red"
//             anchor="center"
//           />
//         </Map>
//       </div>
//     </>
//   );
// }
