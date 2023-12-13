import React from "react";
import Logo from "../assets/sanal-manav-logo.png";
import { Link } from "react-router-dom";

const AdminNavbar = () => {
  return (
    <div className="h-screen w-56 bg-slate-900 flex flex-col items-center p-2 fixed">
      <div>
        <Link to='/admin'>
          <img src={Logo} alt="logo" className="w-32 mb-10" />
        </Link>
      </div>
      <div className="flex flex-col w-full">
        <Link to='/admin/fruits' className=" text-white p-2 text-xl text-center  bg-blue-600 hover:bg-blue-700 duration-300 rounded-lg mb-2">
          Meyveler
        </Link>
        <Link to='/admin/vegetables' className=" text-white p-2 text-xl text-center  bg-blue-600 hover:bg-blue-700 duration-300 rounded-lg mb-2">
          Sebzeler
        </Link>
        <Link to='/admin/orders' className=" text-white p-2 text-xl text-center  bg-blue-600 hover:bg-blue-700 duration-300 rounded-lg mb-2">
          Siparişler
        </Link>
        <Link to='/admin/addproduct' className=" text-white p-2 text-xl text-center  bg-blue-600 hover:bg-blue-700 duration-300 rounded-lg mb-2">
          Ürün Ekle
        </Link>
      </div>
    </div>
  );
};

export default AdminNavbar;
