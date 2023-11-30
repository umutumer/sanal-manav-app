import { configureStore } from '@reduxjs/toolkit';
import thunk from 'redux-thunk';
import dataReducer from './Slice';

const store = configureStore({
  reducer: {
    data: dataReducer,
  },
  middleware: [thunk],
});


export default store;