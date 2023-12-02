import React from "react";
import AdminNavbar from "../../Components/AdminNavbar";
import { Link } from "react-router-dom";
import MeyvelerResim from '../../assets/sanal-manav-meyveler.png'

const AdminHome = () => {
  return (
    <div className="bg-gray-100 flex w-screen h-screen">
      <div className='w-56 mr-10'>
      <AdminNavbar />
      </div>
      <div className="flex flex-col items-center justify-center w-full h-full">
        <div className="w-full h-[50%] flex items-center justify-center">
          <div className="w-[40%] h-[90%] bg-gray-200 rounded-2xl m-5 relative">
            <Link to='/admin/fruits'>
            <img src={MeyvelerResim} alt="meyveler" className="w-full h-full text-center rounded-2xl object-cover" />
            <p className="absolute top-0 w-full h-full flex items-center text-3xl font-bold text-white justify-center">MEYVELER</p>
            </Link>
          </div>
          <div className="w-[40%] h-[90%] bg-gray-200 rounded-2xl m-5">
            Sebzeler
          </div>
        </div>
        <div className="w-full h-[50%] flex items-center justify-center">
          <div className="w-[85%] h-[90%] bg-gray-200 rounded-2xl m-5">
            Siparişler
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminHome;
