import React from 'react'
import NavbarLogo from '../assets/sanal-manav-logo.png'
import { Link } from 'react-router-dom'
import { useSelector } from 'react-redux';
import { FaShoppingCart } from "react-icons/fa";
import { FaUserCog } from "react-icons/fa";
const Navbar = () => {
  const cartItemCount = useSelector((state) => state.cart.itemCount);
  return (
    <nav className='flex justify-between items-center p-2 bg-green-700 fixed w-full h-28 text-xl text-white top-0 z-50'>
        <div className='w-24'>
            <img src={NavbarLogo} alt="NavbarLogo" className='w-full' />
        </div>
        <div>
            <Link to='/' className='mr-2 text-xl'>Anasayfa</Link>
            <Link to='/products' className='mr-2 text-xl'>Ürünler</Link>
        </div>
        <div className='flex items-center'>
            <Link to='/login' className='mr-2 text-3xl'><FaUserCog /></Link>
            <Link to="/cart" className="mr-2 relative text-white text-3xl">
          <FaShoppingCart />
          {cartItemCount > 0 && <span className="absolute -top-2 -right-1 w-6 h-4 sm:h-6 sm:text-base  text-sm text-center bg-green-500 rounded-full">{cartItemCount}</span>}
        </Link>
        </div>
    </nav>
  )
}

export default Navbar