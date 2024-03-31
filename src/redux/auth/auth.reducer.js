import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

export const instance = axios.create({
  baseUrl: 'https://connections-api.herokuapp.com/',
});

instance.defaults.baseURL = 'https://connections-api.herokuapp.com';

// const setToken = token => {
//   instance.defaults.headers.common.Authorization = `Bearer ${token}`;
// };

export const loginThunk = createAsyncThunk(
  'auth/login',
  async (formData, thynkApi) => {
    try {
      const { data } = await axios.post('/users/login', formData);
      return data;
    } catch (err) {
      return thynkApi.rejectWithValue(err.message);
    }
  }
);

const initialState = {
  isLoading: false,
  error: null,
  authenticated: false,
  token: null,
  userData: null,
};

const authSlice = createSlice({
  // Ім'я слайсу
  name: 'auth',
  // Початковий стан редюсера слайсу
  initialState,
  // Об'єкт редюсерів
  reducers: {},
});

// Редюсер слайсу
export const authReducer = authSlice.reducer;
