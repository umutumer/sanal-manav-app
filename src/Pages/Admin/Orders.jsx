import React, { useEffect } from "react";
import AdminNavbar from "../../Components/AdminNavbar";
import { useDispatch, useSelector } from "react-redux";
import { deleteOrder, fetchOrder } from "../../Redux/Action";
import { toast } from "react-toastify";

const Orders = () => {
  const dispatch = useDispatch();
  const orders = useSelector((state) => state.data || []);
  console.log(orders);

  const handleDeleteClick = async (orderId) => {
    try {
      if (orderId) {
        await dispatch(deleteOrder(orderId));
        dispatch(fetchOrder());
        toast.success('Sipariş Teslim Edildi!', {
            position: "top-center",
            autoClose: 2000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "dark",
            });
      } else {
        console.error("silinecek verinin kimliği belirtilmemiş");
      }
    } catch (error) {
      console.error("Veri silinirken hata oluştu:", error.payload);
    }
  };

  useEffect(() => {
    dispatch(fetchOrder());
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
              <th>Müşteri</th>
              <th>Adres</th>
              <th>Not</th>
              <th>Ürün</th>
              <th>Teslimat</th>
            </tr>
          </thead>
          <tbody>
          {orders.map((order, index) => (
            <tr
              className="bg-slate-800 even:bg-slate-900 p-2 text-center"
              key={index}
            >
              <td>{order.isimSoyisim}</td>
              <td>{order.adres}</td>
              <td>{order.siparisNotu || "-"}</td>
              <td>
                {Array.isArray(order.urunler) &&
                  order.urunler.map((urun, urunIndex) => (
                    <div key={urunIndex}>
                      {urun && urun.ad ? urun.ad : "Bilgi yok"}
                    </div>
                  ))}
              </td>
              <td>
                <button
                  onClick={() => handleDeleteClick(order.id)}
                  className="bg-red-500 w-20 text-white p-2 m-1 rounded"
                >
                  Teslim Edildi
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

export default Orders;
