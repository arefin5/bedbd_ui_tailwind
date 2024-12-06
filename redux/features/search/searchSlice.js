import { createSlice } from '@reduxjs/toolkit'

const initialState = { 
            
            location: { 
                            selectedLocation: { name:'' },
                                    isMapOpen: false,
                                    isSuggestionsMenuOpen: false,
                        suggestions: [], 
                        },
          selectedDate: [0, 0],
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
    setMapClose: (state) => {
      return {
              ...state,
              location:{ ...state['location'], isMapOpen: false },
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
    setLocation: (state, action) => {
      return {
        ...state,
        location: action.payload,
      };
      },
    clearDateSelection: (state, action) => {
      localStorage.removeItem('selectedDate');
      // localStorage.removeItem("selectedDate");
      return {
        ...state,
        selectedDate: [0, 0],
      };
      },
    setCheckInOutDate: (state, action) => {
      localStorage.setItem('selectedDate', JSON.stringify(action.payload));
      // localStorage.setItem("selectedDate", JSON.stringify(selectedDate));
      return {
        ...state,
        selectedDate: action.payload,
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
    
    
  },
})

export const { setMapClose, setMapOpen, setLocation, setOpenSuggestionsMenu, closeSuggestionsMenu, clearSuggestionsMenu, selectSuggestedLocation, openSuggestionsMenu, clearDateSelection, setCheckInOutDate } = searchSlice.actions
export default searchSlice.reducer