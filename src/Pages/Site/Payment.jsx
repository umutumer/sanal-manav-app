import React, { useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router";
import { setSiparisField, setUrunler } from "../../Redux/OrderSlice";
import { sendOrder } from "../../Redux/Action";
import { paymentConfirm } from "../../Redux/CartSlice";
import { toast } from "react-toastify";

const Payment = () => {
  const cartItems = useSelector((state) => state.cart.items);
  const cartItemCount = useSelector((state) => state.cart.itemCount);
  const cartItemPrice = useSelector((state) => state.cart.totalPrice);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const isimSoyisimRef = useRef();
  const adresRef = useRef();
  const siparisNotuRef = useRef();

  const handleSubmit = () => {
    const isimSoyisim = isimSoyisimRef.current.value;
    const adres = adresRef.current.value;
    const siparisNotu = siparisNotuRef.current.value;

    dispatch(setSiparisField({ field: "isimSoyisim", value: isimSoyisim }));
    dispatch(setSiparisField({ field: "adres", value: adres }));
    dispatch(setSiparisField({ field: "siparisNotu", value: siparisNotu }));
    dispatch(setUrunler(cartItems));

    dispatch(sendOrder(isimSoyisim, adres, siparisNotu, cartItems));
    dispatch(paymentConfirm());
    toast.success('Siparişiniz Alındı!', {
      position: "bottom-right",
      autoClose: 2000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
      });
    navigate("/");
  };

  return (
    <div className="w-full min-h-screen flex flex-col items-center justify-center">
      <h3 className="mb-10 text-4xl font-medium text-green-500">ÖDEME</h3>
      <div className="w-full flex flex-wrap justify-center">
        <div className="w-[900px] flex flex-col m-5">
          <form className="flex w-full justify-around flex-wrap">
            <div className="flex w-full mb-10 justify-around flex-wrap">
              <div className="flex flex-col items-center w-full p-2 bg-gray-100 rounded-xl sm:mb-0 mb-5">
                <div className="flex flex-wrap items-center justify-center w-full">
                  <div className="w-[80%] mb-5">
                    <label className="text-green-500 font-medium text-xl">
                      İsim Soyisim
                    </label>{" "}
                    <br />
                    <input
                      ref={isimSoyisimRef}
                      className="w-[100%] h-10 border p-1"
                      type="text"
                      placeholder="İsim Soyisim"
                      required
                    />
                    <br />
                  </div>
                  <div className="w-[80%] mb-5">
                    <label className="text-green-500 font-medium text-xl">
                      Adres
                    </label>{" "}
                    <br />
                    <input
                      ref={adresRef}
                      className="w-[100%] h-10 border p-1"
                      type="text"
                      placeholder="Adres"
                      required
                    />
                    <br />
                  </div>
                  <div className="w-[80%] mb-5">
                    <label className="text-green-500 font-medium text-xl">
                      Sipariş Notu
                    </label>{" "}
                    <br />
                    <input
                      ref={siparisNotuRef}
                      className="w-[100%] h-10 border p-1"
                      type="text"
                      placeholder="Sipariş Notu"
                      required
                    />
                  </div>
                </div>
              </div>
            </div>
          </form>
          <form className="flex w-full justify-around flex-wrap">
            <div className="flex w-full mb-10 justify-around flex-wrap">
              <div className="flex flex-col items-center w-[100%] p-2 bg-gray-100 rounded-xl sm:mb-0 mb-5">
                <div className="flex flex-wrap w-[80%]">
                  <div className="w-[70%] mb-5">
                    <label className="text-green-500 font-medium text-xl">
                      Kartın Üzerindeki İsim
                    </label>{" "}
                    <br />
                    <input
                      className="w-[90%] h-10 border p-1"
                      type="text"
                      placeholder="John Doe"
                      required
                    />{" "}
                    <br />
                  </div>
                  <div className="w-[30%] mb-5">
                    <label className="text-green-500 font-medium text-xl">
                      CVV
                    </label>{" "}
                    <br />
                    <input
                      className="w-[100%] h-10 border p-1"
                      type="password"
                      maxlength="3"
                      placeholder="xxx"
                      required
                    />
                  </div>
                </div>
                <div className="w-[80%] mb-5">
                  <label className="text-green-500 font-medium text-xl">
                    Kart Numarası
                  </label>{" "}
                  <br />
                  <input
                    className="w-[100%] h-10 border p-1"
                    id="ccn"
                    type="tel"
                    inputmode="numeric"
                    pattern="[0-9\s]{13,19}"
                    autocomplete="cc-number"
                    maxlength="19"
                    placeholder="xxxx xxxx xxxx xxxx"
                    required
                  />
                </div>
                <div className="w-[80%] mb-5">
                  <label className="text-green-500 font-medium text-xl">
                    Son Kullanma Tarihi{" "}
                  </label>{" "}
                  <br />
                  <select
                    className="w-[20%] h-10 mr-2 border"
                    name="Months"
                    id="Months"
                    required
                  >
                    <option value="01">01</option>
                    <option value="02">02</option>
                    <option value="03">03</option>
                    <option value="04">04</option>
                    <option value="05">05</option>
                    <option value="06">06</option>
                    <option value="07">07</option>
                    <option value="08">08</option>
                    <option value="09">09</option>
                    <option value="10">10</option>
                    <option value="11">11</option>
                    <option value="12">12</option>
                  </select>
                  <select
                    className="w-[20%] h-10 border"
                    name="Years"
                    id="Years"
                    required
                  >
                    <option value="2023">2023</option>
                    <option value="2024">2024</option>
                    <option value="2025">2025</option>
                    <option value="2026">2026</option>
                    <option value="2027">2027</option>
                    <option value="2028">2028</option>
                    <option value="2029">2029</option>
                    <option value="2030">2030</option>
                    <option value="2031">2031</option>
                  </select>
                </div>
              </div>
            </div>
          </form>
        </div>
        <div>
        <div className="flex flex-wrap justify-center sm:w-[700px] w-[400px]  max-h-screen m-5">
          {cartItems.map((item, index) => (
            <div
              className="flex  items-center bg-gray-100 rounded-xl mb-10 sm:w-[300px] w-[200px] h-28 relative m-1"
              key={index}
            >
              <div className="sm:m-2 m-1">
                <img className="sm:w-24 w-12" src={item.resim} alt="" />
              </div>
              <div className="sm:p-5 p-2">
                <p className="mr-1">
                  <span className="font-medium text-green-600">Ürün İsmi:</span>{" "}
                  {item.ad}
                </p>
                <p className="mr-1">
                  <span className="font-medium text-green-600">Fiyat:</span>{" "}
                  {item.fiyat}₺
                </p>
              </div>
              <div></div>
            </div>
          ))}
        </div>
        <div className="sm:w-[700px] w-[400px] flex justify-center m-5">
        <div className="flex w-[300px] m-5 justify-around flex-wrap">
          <div className="w-[300px] h-[250px] bg-gray-100 flex flex-col items-center rounded-xl relative">
            <h3 className="text-2xl mb-3 mt-1">Sipariş Özeti</h3>
            <p className="text-2xl mb-3">
              <span className="font-medium text-green-500">Toplam Ürün:</span>{" "}
              {cartItemCount}
            </p>
            <p className="text-xl mb-3">
              <span className="font-medium text-green-500">Toplam Ücret:</span>{" "}
              {cartItemPrice}₺
            </p>
            <button
              onClick={() => handleSubmit()}
              className="w-[90%] bg-green-500 text-white text-xl text-center absolute bottom-4 rounded-xl p-1"
            >
              Ödeme Yap
            </button>
          </div>
        </div>
        </div>
        </div>
      </div>
    </div>
  );
};

export default Payment;
