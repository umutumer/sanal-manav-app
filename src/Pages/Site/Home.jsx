import React, { useEffect } from "react";
import Navbar from "../../Components/Navbar";
import HomePicture from "../../assets/sanal-manav-reyon.jpg";
import { Link } from "react-router-dom";
import { FaTruckFast } from "react-icons/fa6";
import { RiSecurePaymentFill } from "react-icons/ri";
import { BiHappy } from "react-icons/bi";
import { useDispatch, useSelector } from "react-redux";
import { fetchData } from "../../Redux/Action";

const Home = () => {
  const dispatch = useDispatch();
  const data = useSelector((state) => state.data);
  const filteredData = data.filter((star) => star.haftaninYildizi);

  useEffect(() => {
    dispatch(fetchData());
  }, [dispatch]);
  return (
    <div>
      <Navbar />
      <div className="w-full h-[60vh] mt-28 bg-black relative">
        <img
          src={HomePicture}
          alt="HomePicture"
          className="w-full h-full object-cover opacity-70"
        />
        <div className="absolute w-full h-full flex flex-col items-center justify-center top-0 text-white">
          <p className="text-5xl font-bold mb-5">TEK TIKLA HEMEN KAPINDA !</p>
          <Link
            to="/products"
            className="w-40 p-2 bg-green-600 text-center rounded-xl"
          >
            Sipariş Ver
          </Link>
        </div>
      </div>
      <div className="w-full flex flex-wrap justify-around bg-gray-100">
        <div className="w-200 p-10 flex flex-col items-center">
          <FaTruckFast className="text-4xl text-green-600" />
          <h3 className="text-xl font-medium text-green-600">Hızlı Teslimat</h3>
        </div>
        <div className="p-10 flex flex-col items-center">
          <RiSecurePaymentFill className="text-4xl text-green-600" />
          <h3 className="text-xl font-medium text-green-600">Güvenli Ödeme</h3>
        </div>
        <div className="p-10 flex flex-col items-center">
          <BiHappy className="text-4xl text-green-600" />
          <h3 className="text-xl font-medium text-green-600">
            Mutlu Müşteriler
          </h3>
        </div>
        <div className="w-full flex items-center">
          {filteredData.map((yildiz, index) => (
            <div className="w-56" key={index}>
              <img src="" alt="resim" />
              <p>{yildiz.ad}</p>
              <p>{yildiz.fiyat}₺</p>
              <button>Sepete Ekle</button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Home;
