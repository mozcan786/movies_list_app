import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { API_ENDPOINT_1, API_ENDPOINT_2 } from './constants';

export const fetchAPIThunk = createAsyncThunk('content/fetchAPI', async ({ apiEndpoint }, { rejectWithValue }) => {
    try {
        const response = await axios.get(apiEndpoint);
        return response.data;
    } catch (error) {
        return rejectWithValue(error.response.data);
    }
});

const contentSlice = createSlice({
    name: 'content',
    initialState: {
        data: {
            api1: null,
            api2: null,
        },
        loading: true,
        error: null,
    },
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchAPIThunk.pending, (state) => {
                state.loading = true;
            })
            .addCase(fetchAPIThunk.fulfilled, (state, action) => {
                switch (action.meta.arg.apiEndpoint) {
                    case API_ENDPOINT_1:
                        state.data.api1 = action.payload;
                        break;
                    case API_ENDPOINT_2:
                        state.data.api2 = action.payload;
                        break;
                    default:
                        break;
                }
                state.loading = false;
                state.error = null;
            })
            .addCase(fetchAPIThunk.rejected, (state, action) => {
                state.loading = false;
                state.error = action.error.message;
            });
    },
});

export const selectAPIData = (state) => state.content.data;
export const selectLoading = (state) => state.content.loading;
export const selectError = (state) => state.content.error;

export default contentSlice.reducer;
