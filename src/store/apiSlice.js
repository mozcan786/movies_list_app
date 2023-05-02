import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { API_ENDPOINTS } from './constants';

export const fetchApiData = createAsyncThunk(
  'api/fetchApiData',
  async (endpointName, params) => {
    const { url, method } = API_ENDPOINTS[endpointName];
    const response = await axios({
      method: method,
      url: url,
      params:params,
    });
    return response.data;
  }
);

const initialState = {
  data: null,
  status: 'idle',
  error: null,
};

const apiSlice = createSlice({
  name: 'api',
  initialState,
  extraReducers: (builder) => {
    builder
      .addCase(fetchApiData.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchApiData.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.data = action.payload;
      })
      .addCase(fetchApiData.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
      });
  },
});

export default apiSlice.reducer;