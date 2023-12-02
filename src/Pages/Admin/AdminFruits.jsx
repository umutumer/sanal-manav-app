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
    <div className="flex">
      <div className="w-56 mr-10">
        <AdminNavbar />
      </div>
      <div className="w-full">
        <table className="w-full">
          <thead className="border-b-2 mb-2"> 
            <tr>
              <th>Meyve Adı</th>
              <th>Meyve Açıklaması</th>
              <th>Meyve Fiyatı</th>
              <th>İşlemler</th>
            </tr>
          </thead>
          <tbody>
            {filteredData.map((meyve, index) => (
              <tr className="border-b-2" key={index}>
                <td>{meyve.ad}</td>
                <td>{meyve.açıklama}</td>
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
