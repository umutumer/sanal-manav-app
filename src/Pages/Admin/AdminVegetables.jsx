import React, { useEffect, useState } from "react";
import AdminNavbar from "../../Components/AdminNavbar";
import { useDispatch, useSelector } from "react-redux";
import {  deleteData, fetchData, updateData } from "../../Redux/Action";

const AdminVegetables = () => {
  const dispatch = useDispatch();
  const data = useSelector((state) => state.data);
  const filteredData = Array.isArray(data) ? data.filter((vegetables) => vegetables.tur === "Sebze"):[];

  const [editingIndex, setEditingIndex] = useState(null);
  const [editedData, setEditedData] = useState({
    ad: "",
    resim: "",
    fiyat: "",
  });

  const handleEditClick = (index) => {
    setEditingIndex(index);
    setEditedData(filteredData[index]);
  };

  const handleCancelEdit = () => {
    setEditingIndex(null);
    setEditedData({
      ad: "",
      resim: "",
      fiyat: "",
    });
  };

  const handleUpdateData = async () => {
    try {
      if (editingIndex !== null && editingIndex !== undefined) {
        await dispatch(updateData({ dataId: filteredData[editingIndex].id, newData: editedData }));
        dispatch(fetchData());
      } else {
        console.error("Hata: Geçerli bir meyve seçilmemiş.");
      }
    } catch (error) {
      console.error('Veri güncellenirken hata oluştu:', error);
    } finally {
      handleCancelEdit();
    }
  };
  const handleDeleteClick = async (dataId) => {
    try {
      if(dataId){
        await dispatch(deleteData(dataId));
        dispatch(fetchData());
      }else {
        console.error("silinecek verinin kimliği belirtilmemiş");
      }
    } catch (error) {
      console.error("Veri silinirken hata oluştu:", error.payload);
    }
  };

  useEffect(() => {
    dispatch(fetchData());
  }, [dispatch]);
  return (
    <div className="flex min-h-screen bg-slate-800">
      <div className="w-56 mr-8">
        <AdminNavbar />
        {editingIndex !== null && (
          <div className="fixed top-0 left-0 w-full h-full bg-gray-800 bg-opacity-75 flex justify-center items-center">
            <div className="bg-gray-700 w-64 h-72 flex flex-col items-center justify-center rounded shadow-lg shadow-black text-white">
              <h3>Sebze Adı:</h3>
              <input
                type="text"
                value={editedData.ad}
                onChange={(e) =>
                  setEditedData({ ...editedData, ad: e.target.value })
                }
                className="bg-gray-600 p-2 rounded-md w-[90%]"
              />
              <h3>Sebze Resmi:</h3>
              <input
                type="text"
                value={editedData.resim}
                onChange={(e) =>
                  setEditedData({ ...editedData, resim: e.target.value })
                }
                className="bg-gray-600 p-2 rounded-md w-[90%]"
              />
              <h3>Sebze Fiyatı:</h3>
              <input
                type="number"
                value={editedData.fiyat}
                onChange={(e) =>
                  setEditedData({ ...editedData, fiyat: parseFloat(e.target.value) })
                }
                className="bg-gray-600 p-2 rounded-md w-[90%]"
              />
              <div className="mt-4">
                <button
                  onClick={() => handleUpdateData()}
                  className="mr-2 bg-green-500  p-2 rounded"
                >
                  Kaydet
                </button>
                <button
                  onClick={() => handleCancelEdit()}
                  className="bg-red-500  p-2 rounded"
                >
                  İptal
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
      <div className="w-full">
        <table className="w-full text-white">
          <thead className="mb-2"> 
            <tr className="bg-slate-900 text-blue-600">
              <th>Sebze Adı</th>
              <th>Sebze Resim</th>
              <th>Sebze Fiyatı</th>
              <th>İşlemler</th>
            </tr>
          </thead>
          <tbody>
            {filteredData.map((sebze, index) => (
              <tr className="bg-slate-800 even:bg-slate-900 p-2 text-center" key={index}>
                <td>{sebze.ad}</td>
                <td><img src={sebze.resim} alt="" className="w-10" /></td>
                <td>{sebze.fiyat}₺</td>
                <td>
                <button
                    onClick={() => handleEditClick(index)}
                    className="bg-blue-500 w-20 text-white p-2 m-1 rounded"
                  >
                    Düzenle
                  </button>
                  <button
                    onClick={()=> handleDeleteClick(sebze.id)}
                    className="bg-red-500 w-20 text-white p-2 m-1 rounded"
                  >
                    Sil
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AdminVegetables;
