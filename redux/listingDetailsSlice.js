// store/gallerySlice.js
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    showImageGallery:false
};

const listingDetailsSlice = createSlice({
  name: 'listingDetails',
  initialState,
  reducers: {
    showGallery: (state) => {
      state.isGalleryVisible = true;
    },
    hideGallery: (state) => {
      state.isGalleryVisible = false;
    },
    toggleGallery: (state) => {
      state.isGalleryVisible = !state.isGalleryVisible;
    },
    addImage: (state, action) => {
      state.images.push(action.payload); // Add a new image to the gallery
    },
    removeImage: (state, action) => {
      state.images = state.images.filter((image) => image.id !== action.payload);
    },
  },
});

export const { showGallery, hideGallery, toggleGallery, addImage, removeImage } = gallerySlice.actions;

export default gallerySlice.reducer;