import React, { useEffect } from "react";
import AdminNavbar from "../../Components/AdminNavbar";
import { useDispatch, useSelector } from "react-redux";
import { fetchData } from "../../Redux/Action";

const AdminFruits = () => {
  const dispatch = useDispatch();
  const data = useSelector((state) => state.data);
  const filteredData = data.filter((fruit) => fruit.tur === "Meyve")

  useEffect(() => {
    dispatch(fetchData());
  }, [dispatch]);
  return (
    <div className="flex bg-slate-800 min-h-screen">
      <div className="w-56 mr-8">
        <AdminNavbar />
      </div>
      <div className="w-full">
        <table className="w-full text-white">
          <thead className="mb-2"> 
            <tr className="bg-slate-900 text-blue-600">
              <th>Meyve Adı</th>
              <th>Meyve Resmi</th>
              <th>Meyve Fiyatı</th>
              <th>İşlemler</th>
            </tr>
          </thead>
          <tbody>
            {filteredData.map((meyve, index) => (
              <tr className=" bg-slate-800 even:bg-slate-900 p-2" key={index}>
                <td>{meyve.ad}</td>
                <td><img src={meyve.resim} alt="" className="w-10" /></td>
                <td>{meyve.fiyat}₺</td>
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

export default AdminFruits;
