import { configureStore } from '@reduxjs/toolkit';
import dataReducer from './Slice';
import cartReducer from './CartSlice';

const store = configureStore({
  reducer: {
    data: dataReducer,
    cart: cartReducer,
  },

});

export default store;
