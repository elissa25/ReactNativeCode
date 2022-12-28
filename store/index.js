import { configureStore } from '@reduxjs/toolkit';
import loginSlice from './slices/login-slice';
import articleSlice from './slices/articles-slice';


const store = configureStore({
  reducer: { login: loginSlice.reducer , articles:articleSlice.reducer},
});

export default store;