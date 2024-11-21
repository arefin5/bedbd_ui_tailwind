import { createSlice } from '@reduxjs/toolkit'

const initialState = { 
            
            location: { 
                            selectedLocation: { name:'' },
                                    isMapOpen: false,
                                    isSuggestionsMenuOpen: false,
                        suggestions: [], 
                        },
            
            

        }

const searchSlice = createSlice({
  name: 'search',
  initialState,
  reducers: {
    setMapOpen: (state) => {
        return {
                ...state,
                location:{ ...state['location'], isMapOpen: true },
                };
    },
    openSuggestionsMenu : (state, action) => {
        return {
          ...state,
          location:{ ...state['location'], 
            isSuggestionsMenuOpen: true  },
        };
      },
    closeSuggestionsMenu : (state, action) => {
    return {
        ...state,
        location:{ ...state['location'], 
        isSuggestionsMenuOpen: false  },
    };
    },
      clearSuggestionsMenu : (state, action) => {
        return {
          ...state,
          location:{ ...state['location'], 
                    isSuggestionsMenuOpen: false, 
                              suggestions: []},
                    };
      },
    setOpenSuggestionsMenu : (state, action) => {
        return {
          ...state,
          location:{ ...state['location'], 
            isSuggestionsMenuOpen: true, 
                          suggestions: action.payload },
        };
      },
    selectSuggestedLocation : (state, action) => {
        return {
                ...state,
                location:{          ...state['location'], 
                            isSuggestionsMenuOpen: false, 
                                 selectedLocation: action.payload },
                };
      },
    //   addCordinateSelectedLocation : (state, action) => {
    //     return {
    //             ...state,
    //             location:{          ...state['location'], 
    //                              selectedLocation: {
    //                                 ...state['location']['selectedLocation'],
    //                                 ...action.payload                                    
    //                              }},
    //             };
    //   },
    
    setLocation: (state, action) => {
        return {
          ...state,
          location: action.payload,
        };
      },
  },
})

export const { setLocation, setOpenSuggestionsMenu, closeSuggestionsMenu, clearSuggestionsMenu, selectSuggestedLocation, openSuggestionsMenu } = searchSlice.actions
export default searchSlice.reducer