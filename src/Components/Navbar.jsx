import React from 'react'
import NavbarLogo from '../assets/sanal-manav-logo.png'
import { Link } from 'react-router-dom'
const Navbar = () => {
  return (
    <nav className='flex justify-between items-center p-2 bg-green-700 fixed w-full h-28 text-xl text-white top-0 z-50'>
        <div className='w-24'>
            <img src={NavbarLogo} alt="NavbarLogo" className='w-full' />
        </div>
        <div>
            <Link to='/' className='mr-2'>Anasayfa</Link>
            <Link to='/about' className='mr-2'>Hakkında</Link>
            <Link to='/products' className='mr-2'>Ürünler</Link>
        </div>
        <div>
            <Link to='/login' className='mr-2'>Admin</Link>
            <Link to='/cart' className='mr-2'>Sepet</Link>
        </div>
    </nav>
  )
}

export default Navbar