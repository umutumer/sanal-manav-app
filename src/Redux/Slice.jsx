import { createSlice } from '@reduxjs/toolkit';

const dataSlice = createSlice({
  name: 'data',
  initialState: [],
  reducers: {
    setData: (state, action) => {
      return  action.payload;
    },
    upData:(state,action) =>{
      return  {
        ...state,
        data: action.payload,
      }
    },
    delData:(state,action) =>{
      return state.filter((item) => item.id !== action.payload)
    }
  },
});

export const { setData ,upData , delData } = dataSlice.actions;

export default dataSlice.reducer;