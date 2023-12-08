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
  }
};
 const deleteData = (dataId) => async (dispatch) => {
  try{
    const response = await axios.delete(`http://localhost:3005/data/${dataId}`);
  dispatch(deleteData(response.data))
  return response.data;
  }catch(error) {
    console.error('Veri silinirken hata oluştu:',error.response.data);
  }
};

export { fetchData , updateData , deleteData};
