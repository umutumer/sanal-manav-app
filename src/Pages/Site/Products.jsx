import React, { useEffect } from 'react'
import Navbar from '../../Components/Navbar'
import Footer from '../../Components/Footer'
import { useDispatch, useSelector } from 'react-redux';
import { fetchData } from '../../Redux/Action';
import { addToCart } from '../../Redux/CartSlice';
import { toast } from 'react-toastify';

const Products = () => {
    const dispatch = useDispatch();
    const data = useSelector((state) => state.data);

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
    <div className='w-full'>
        <Navbar />
        <h3 className='mt-32 text-4xl font-bold text-center text-green-600'>ÜRÜNLER</h3>
        <div className='w-full flex flex-wrap justify-center mt-10 mb-20'>
            {data.map((dat,index) =>(
                 <div
                 className="w-56 h-[330px] border rounded-xl border-green-600 m-2 text-center"
                 key={index}
               >
                 <img
                   src={dat.resim}
                   alt="resim"
                   className="w-56 h-52 object-cover p-2"
                 />
                 <h4 className="text-xl font-semibold text-green-600 mb-2">
                   {dat.ad}
                 </h4>
                 <p className="mb-4">
                   <span className="text-green-600">Fiyat: </span>
                   {dat.fiyat}₺
                 </p>
                 <button onClick={() => handleAddToCart(dat.id)} className="bg-green-600 text-white p-2 rounded-xl w-[90%]">
                   Sepete Ekle
                 </button>
               </div>
            ))}
        </div>
        <Footer/>
    </div>
  )
}

export default Products