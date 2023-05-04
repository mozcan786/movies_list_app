// store.js
import { configureStore } from '@reduxjs/toolkit';
import contentReducer from './contentSlice';

const store = configureStore({
  reducer: {
    content: contentReducer,
  },
});

export default store;
