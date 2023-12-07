import { setData, upData } from './Slice';
import axios from 'axios';

const fetchData = () => async (dispatch) => {
  try {
    const response = await axios.get('http://localhost:3005/data');
    dispatch(setData(response.data));
  } catch (error) {
    console.error('Veriler getirilirken hata oluştu:', error);
  }
};

const updateData = ({ dataId, newData }) => async (dispatch) => {
  try {
    const response = await axios.put(`http://localhost:3005/data/${dataId}`, newData);
    dispatch(upData(response.data));
    return response.data; 
  } catch (error) {
    console.error('Veri güncellenirken hata oluştu:', error);
    throw error; 
  }
};

export { fetchData, updateData };
