import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

export const fetchPostDetails = createAsyncThunk(
  'postDetails/get',
  async (postId, thynkApi) => {
    try {
      const { data } = await axios.get(
        `https://jsonplaceholder.typicode.com/posts/${postId}`
      );
      console.log('data: ', data);
      ////ЦУ БЦДЕ ЗАПИСАНО В ACTION.PAYLOAD РЕДЮСЕРУ////
      return data;
    } catch (err) {
      return thynkApi.rejectWithValue(err.message);
    }
  }
);

const initialState = {
  postDetails: null,
  isLoading: false,
  error: null,
};

const postDetailsSlice = createSlice({
  // Ім'я слайсу
  name: 'postDetails',
  // Початковий стан редюсера слайсу
  initialState,
  // Об'єкт редюсерів
  reducers: {},
  extraReducers: builder =>
    builder
      .addCase(fetchPostDetails.pending, (state, action) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(fetchPostDetails.fulfilled, (state, action) => {
        state.isLoading = false;
        state.postDetails = action.payload;
      })
      .addCase(fetchPostDetails.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      }),

  ////Якщо декілька кейсів однакових pending або rejected////

  // .addMatcher(
  //   isAnyOf(fetchPostDetails.pending, fetchPostDetails2.pending),
  //   state => {
  //     state.isLoading = true;
  //     state.error = null;
  //   }
  // ),
});

//// Генератори екшен кріейтерів
// export const { fetchPostDetails } = postDetailsSlice.actions;
//// Редюсер слайсу
export const postDetailsReducer = postDetailsSlice.reducer;
