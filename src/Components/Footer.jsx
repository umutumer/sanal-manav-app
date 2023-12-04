import React from 'react'
import { Link } from 'react-router-dom'
import FooterLogo from '../assets/sanal-manav-logo.png'

const Footer = () => {
  return (
    <div className='flex w-full h-32 items-center justify-evenly bg-green-700'>
        <div>
            <img src={FooterLogo} alt="logo" className='w-28' />
        </div>
        <div className='flex items-center justify-center flex-col text-white text-xl'>
            <Link to='/' className='mb-2'>Anasayfa</Link>
            <Link to='/products' className='mb-2'>Ürünler</Link>
        </div>
    </div>
  )
}

export default Footer