// src/features/userSlice.ts

import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';
import songApi from 'src/apis/song.api';
import { List, Song } from 'src/types/types.type';
import { payloadCreator } from 'src/utils/utils';


export const getSongs = createAsyncThunk('task/getTasks', payloadCreator(songApi.getSongs))

interface SongState {
  error?: string | null,
  songs: any
}

const initialState: SongState = {
  songs: [],
  error: null
}

const userSlice = createSlice({
  name: 'song',
  initialState,
  reducers: {
    
  },
  extraReducers: builder => {
    // The `builder` callback form is used here because it provides correctly typed reducers from the action creators
    builder.addCase(getSongs.fulfilled, (state, { payload }) => {
      state.songs = payload.data.data.data.items
    })
    builder.addCase(getSongs.rejected, (state, action) => {
      if (action.payload) {
     
      } else {
      }
    })
  }
});


const songReducer = userSlice.reducer;
export default songReducer
