import React, { useRef } from "react";
import AdminNavbar from "../../Components/AdminNavbar";
import { useNavigate } from "react-router";
import { useDispatch } from "react-redux";
import { createData } from "../../Redux/Action";
import { setDataField } from "../../Redux/Slice";
import { toast } from "react-toastify";

const AddProduct = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const turRef = useRef();
  const adRef = useRef();
  const resimRef = useRef();
  const fiyatRef = useRef();

  const handleSubmit = () => {
    const tur = turRef.current.value;
    const ad = adRef.current.value;
    const resim = resimRef.current.value;
    const fiyat = parseFloat(fiyatRef.current.value);

    dispatch(setDataField({ field: "tur", value: tur }));
    dispatch(setDataField({ field: "ad", value: ad }));
    dispatch(setDataField({ field: "resim", value: resim}));
    dispatch(setDataField({ field: "fiyat", value: fiyat }));

    dispatch(createData(tur, ad, resim, fiyat));
    toast.success("Ürün Eklendi!", {
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
  return (
    <div className="flex bg-slate-800 min-h-screen">
      <div className="w-56 mr-8">
        <AdminNavbar />
      </div>
      <div className="w-full flex justify-center items-center ">
        <div className="w-full flex flex-col justify-center items-center">
          <h3 className="text-white text-4xl font-semibold">Ürün Ekleme</h3>
          <div className="w-[80%] mb-5">
            <label className="text-blue-700 font-medium text-xl">
              Ürün Kategori
            </label>{" "}
            <br />
            <select
              className="w-[100%] h-10 border p-1 rounded-xl"
              name="ürün kategori"
              id=""
              ref={turRef}
            >
              <option value="Meyve">Meyve</option>
              <option value="Sebze">Sebze</option>
            </select>
          </div>
          <div className="w-[80%] mb-5">
            <label className="text-blue-700 font-medium text-xl">
              Ürün İsim
            </label>{" "}
            <br />
            <input
              ref={adRef}
              className="w-[100%] h-10 border p-1 rounded-xl"
              type="text"
              placeholder="Ürün İsim"
              required
            />
            <br />
          </div>
          <div className="w-[80%] mb-5">
            <label className="text-blue-700 font-medium text-xl">
              Ürün Resim Url
            </label>{" "}
            <br />
            <input
              ref={resimRef}
              className="w-[100%] h-10 border p-1 rounded-xl"
              type="text"
              placeholder="Ürün Resim Url"
              required
            />
            <br />
          </div>
          <div className="w-[80%] mb-5">
            <label className="text-blue-700 font-medium text-xl">
              Ürün Fiyat
            </label>{" "}
            <br />
            <input
              ref={fiyatRef}
              className="w-[100%] h-10 border p-1 rounded-xl"
              type="number"
              placeholder="Ürün Fiyat"
              required
            />
          </div>
          <div className="w-[80%] flex justify-end">
            <button
              className="bg-blue-700 text-white w-56 p-1 text-xl rounded-xl"
              onClick={() => handleSubmit()}
            >
              Ekle
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddProduct;
