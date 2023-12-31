import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { BsFillTrashFill } from 'react-icons/bs'
import { removeFromCart } from "../../Redux/CartSlice";
import Navbar from "../../Components/Navbar";
import { toast } from "react-toastify";

const Cart = () => {
  const cartItems = useSelector((state) => state.cart.items);
  const cartItemCount = useSelector((state) => state.cart.itemCount);
  const cartItemPrice = useSelector((state) => state.cart.totalPrice);
  const dispatch = useDispatch();

  const handleRemoveFromCart = (index) => {
    dispatch(removeFromCart(index));
    toast.success('Ürün Sepetten Çıkarıldı !', {
      position: "bottom-right",
      autoClose: 2000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
      });
  };
  if (cartItemCount === 0) {
    return(
        
        <div>
            <Navbar />
            <div className="mt-32 text-4xl text-center text-green-600">
                Sepetiniz Boş
            </div>
        </div>
    )
  }else{
    return (
        <div className="w-full flex flex-col min-h-screen">
            <Navbar />
          <h2 className="text-center text-4xl mt-32 text-green-500">Sepetiniz</h2>
          <div className="w-full mt-10 flex flex-wrap items-center sm:justify-around justify-center relative">
            <div className="w-[700px] flex flex-wrap items-center justify-center">
              {cartItems.map((item, index) => (
                <div
                  className="flex items-center bg-gray-100 rounded-xl mb-10 w-[340px] h-28 relative m-1"
                  key={index}
                >
                  <div className="m-2">
                    <img className="w-24" src={item.resim} alt="" />
                  </div>
                  <div className="m-2">
                    <p className="mr-1"><span className="font-medium text-green-600">Ürün İsmi:</span> {item.ad}</p>
                    <p className="mr-1"><span className="font-medium text-green-600">Ürün Kategorisi:</span> {item.tur}</p>
                    <p className="mr-1"><span className="font-medium text-green-600">Fiyat:</span> {item.fiyat}₺</p>
                  </div>
                  <div>
                  <button   onClick={() => handleRemoveFromCart(index)}  className="absolute right-0 top-0 text-xl text-center text-white bg-green-600 w-[30px] rounded-se-xl p-[5px]"><BsFillTrashFill /></button>
                  </div>
                </div>
              ))}
            </div>
            <div className="min-w-[300px] h-[300px] bg-gray-100 sm:mr-20 mr-0 sm:mb-0 mb-5 flex flex-col items-center text-center rounded-xl relative">
              <h3 className="text-2xl mb-3 mt-1">Sipariş Özeti</h3>
              <p className="text-2xl mb-3"><span className="font-medium text-green-500">Toplam Ürün:</span> {cartItemCount}</p>
              <p className="text-xl mb-3"><span className="font-medium text-green-500">Toplam Fiyat:</span> {cartItemPrice}₺</p>
              <Link to='/payment' className="w-[90%] bg-green-500 text-white text-xl text-center absolute bottom-4 rounded-xl p-1">Sepeti Onayla</Link>
            </div>
           
          </div>
        </div>
      );
  }

  
};

export default Cart;