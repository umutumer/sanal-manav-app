import React, { useEffect } from "react";
import Navbar from "../../Components/Navbar";
import HomePicture from "../../assets/sanal-manav-reyon.jpg";
import { Link } from "react-router-dom";
import { FaTruckFast } from "react-icons/fa6";
import { RiSecurePaymentFill } from "react-icons/ri";
import { BiHappy } from "react-icons/bi";
import { useDispatch, useSelector } from "react-redux";
import { fetchData } from "../../Redux/Action";
import Footer from "../../Components/Footer";
import { addToCart } from "../../Redux/CartSlice";
import { toast } from "react-toastify";

const Home = () => {
  const dispatch = useDispatch();
  const data = useSelector((state) => state.data);
  const filteredData = data.filter((star) => star.haftaninYildizi);

  const handleAddToCart = (productId) => {
    const product = data.find((item) => item.id === productId);
    if (product) {
      dispatch(addToCart(product));
      toast.success('🛒 Sepete Eklendi!', {
        position: "bottom-right",
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
        });
    }
  };

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
          <p className="text-5xl font-bold mb-5 sm:ml-0 ml-1 ">TEK TIKLA HEMEN KAPINDA !</p>
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
      </div>
      <div className="w-full flex flex-col items-center mt-20">
        <h3 className="sm:text-4xl text-3xl font-bold mb-10 text-green-600">
          Haftanın Yıldızları ⭐
        </h3>
        <div className=" flex flex-wrap justify-center w-full mb-20 ">
          {filteredData.map((yildiz, index) => (
            <div
              className="sm:w-56 w-44 sm:h-[330px] h-[280px] border rounded-xl border-green-600 m-2 text-center"
              key={index}
            >
              <img
                src={yildiz.resim}
                alt="resim"
                className="sm:w-56 w-44 sm:h-52 h-40 object-cover p-2"
              />
              <h4 className="text-xl font-semibold text-green-600 mb-2">
                {yildiz.ad}
              </h4>
              <p className="mb-4">
                <span className="text-green-600">Fiyat: </span>
                {yildiz.fiyat}₺
              </p>
              <button onClick={()=>handleAddToCart(yildiz.id)} className="bg-green-600 text-white sm:p-2 p-1 rounded-xl w-[90%]">
                Sepete Ekle
              </button>
            </div>
          ))}
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Home;
