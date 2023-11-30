import { setData } from './Slice';
import axios from 'axios';

export const fetchFruits = () => async (dispatch) => {
  try {
    const response = await axios.get('http://localhost:3005/meyveler');
    dispatch(setData(response.data));
  } catch (error) {
    console.error('Veriler getirilirken hata oluştu:', error);
  }
};
export const fetchVegetables = () => async (dispatch) => {
  try {
    const response = await axios.get('http://localhost:3005/sebzeler');
    dispatch(setData(response.data));
  } catch (error) {
    console.error('Veriler getirilirken hata oluştu:', error);
  }
};
