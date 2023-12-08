import React, { useEffect, useState } from "react";
import LoginLogo from "../../assets/sanal-manav-logo.png";
import { useNavigate } from "react-router";

const Login = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const images = [
    {
      src: "https://png.pngtree.com/png-clipart/20220716/ourmid/pngtree-banana-yellow-fruit-banana-skewers-png-image_5944324.png",
      positionClass: "top-5 left-5",
    },
    {
      src: "https://watermark.lovepik.com/photo/20211118/large/lovepik-fresh-juicy-orange-png-picture_480004785.jpg",
      positionClass: "bottom-5 right-5",
    },
    {
      src: "https://narsu.com.tr/wp-content/uploads/2021/03/u%CC%88ru%CC%88nler_meyve_ic%CC%A7go%CC%88rsel_nar.png",
      positionClass: "top-24 left-52",
    },
    {
      src: "https://dogaaktar.com/5221-large_default/ananas-sirkesi-250-ml-for-all-food-organic.jpg",
      positionClass: "top-[200px] right-[300px]",
    },
    {
      src: "https://clipart-library.com/image_gallery2/Mango-PNG-Picture.png",
      positionClass: "top-[300px] left-[300px]",
    },
    {
      src: "https://static.vecteezy.com/system/resources/previews/027/216/419/non_2x/watermelon-watermelon-watermelon-transparent-transparent-background-ai-generated-free-png.png",
      positionClass: "bottom-[400px] right-[200px]",
    },
    {
      src: "https://static.vecteezy.com/system/resources/previews/022/825/549/original/peach-fruit-peach-on-transparent-background-png.png",
      positionClass: "bottom-[400px] left-[200px]",
    },
    {
      src: "https://png.pngtree.com/png-clipart/20230114/ourmid/pngtree-photo-of-avocado-png-image_6561465.png",
      positionClass: "top-24 left-52",
    },
    {
      src: "https://www.eskitadinda.com/img/yesil-erik_353_1447_2.png",
      positionClass: "bottom-5 left-5",
    },
    {
      src: "https://pngimg.com/d/papaya_PNG48.png",
      positionClass: "bottom-[200px] left-[200px]",
    },
  ];

  const handleClickSubmit = () => {
    const correctEmail = "admin@gmail.com";
    const correctPassword = "password123";

    if (email === correctEmail && password === correctPassword) {
      navigate("/admin");
    } else if (email === "" || password === "") {
      setError("Lütfen email ve şifrenizi giriniz.");
    } else {
      setError("Giriş bilgileriniz hatalı. Lütfen tekrar deneyiniz.");
    }
  };

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 750);

    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <div className="w-full h-screen flex items-center justify-center bg-gray-950 relative">
      <div className="w-full h-full relative">
        {images.map((image, index) => (
          <img
            key={index}
            src={image.src}
            alt={`Görsel ${index + 1}`}
            className={`sm:w-40 w-20 absolute ${
              index === currentImageIndex ? "opacity-100 " + image.positionClass : "opacity-0 " + image.positionClass
            } transition-opacity duration-1000 ease-in-out`}
          />
        ))}
      </div>
      <div className="w-full h-screen absolute bg-black opacity-20 z-20"></div>
      <div className="w-full h-screen flex items-center justify-center absolute z-50">
        <form className="w-96 h-96 rounded-xl bg-slate-800 flex flex-col items-center">
          <div>
            <img src={LoginLogo} alt="" className="w-40" />
            <h3 className="text-center text-white text-2xl font-bold mb-2">
              Admin Giriş
            </h3>
          </div>
          <div className="w-full flex flex-col items-center justify-center">
            <input
              type="text"
              className="mb-2 rounded w-[90%] py-2 px-3 text-white bg-slate-700"
              placeholder="E-posta"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
            <input
              type="password"
              className="mb-2 rounded w-[90%] py-2 px-3 text-white bg-slate-700"
              placeholder="Parola"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
            <button
              onClick={handleClickSubmit}
              className=" bg-blue-600 hover:bg-blue-700 ease-in-out duration-300 text-white font-bold w-[90%] py-2 px-4 mb-2 rounded"
              type="button"
            >
              Giriş Yap
            </button>
            {error && <p className="text-red-600 mb-2">{error}</p>}
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
