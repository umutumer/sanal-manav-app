import React, { useEffect } from "react";
import AdminNavbar from "../../Components/AdminNavbar";
import { useDispatch, useSelector } from "react-redux";
import {  fetchData } from "../../Redux/Action";

const AdminVegetables = () => {
  const dispatch = useDispatch();
  const data = useSelector((state) => state.data);
  const filteredData = data.filter((vegetables) => vegetables.tur === "Sebze")

  useEffect(() => {
    dispatch(fetchData());
  }, [dispatch]);
  return (
    <div className="flex min-h-screen bg-slate-800">
      <div className="w-56 mr-10">
        <AdminNavbar />
      </div>
      <div className="w-full">
        <table className="w-full text-white">
          <thead className="mb-2"> 
            <tr className="bg-slate-900 text-blue-600">
              <th>Sebze Adı</th>
              <th>Sebze Açıklaması</th>
              <th>Sebze Fiyatı</th>
              <th>İşlemler</th>
            </tr>
          </thead>
          <tbody>
            {filteredData.map((sebze, index) => (
              <tr className="bg-slate-800 even:bg-slate-900 p-2" key={index}>
                <td>{sebze.ad}</td>
                <td>{sebze.açıklama}</td>
                <td>{sebze.fiyat}₺</td>
                <td>
                  <button>sil</button>
                  <button>düzenle</button>
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
