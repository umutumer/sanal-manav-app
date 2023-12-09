import { configureStore } from '@reduxjs/toolkit';
import dataReducer from './Slice';
import cartReducer from './CartSlice';
import orderReducer from './OrderSlice'

const store = configureStore({
  reducer: {
    data: dataReducer,
    cart: cartReducer,
    order: orderReducer,
  },

});

export default store;
