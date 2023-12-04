import React, { useState } from "react";
import LoginLogo from "../../assets/sanal-manav-logo.png";
import { useNavigate } from "react-router";
const Login = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleClickSubmit = () => {
    const correctEmail = "admin@gmail.com";
    const correctPassword = "password123";

    if (email === correctEmail && password === correctPassword) {
      navigate("/admin");
    } else if (email === "" || password === "") {
      setError("Lütfen email ve şifrenizi giriniz.");
    } else {
      setError("Giriş bilgileriniz hatalı.Lütfen tekrar deneyiniz.");
    }
  };
  return (
    <div className="w-full h-screen flex items-center justify-center bg-gray-950">
      <div className="w-96 h-96 rounded-xl bg-slate-800 flex flex-col items-center">
        <div>
          <img src={LoginLogo} alt="" className="w-40" />
          <h3 className="text-center text-white text-2xl font-bold mb-2">Admin Giriş</h3>
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
          {error && <p className='text-red-600 mb-2'>{error}</p>}
        </div>
      </div>
    </div>
  );
};

export default Login;
