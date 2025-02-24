import React, { useState } from "react";
import "../assets/style/login.scss";
import Dashboard from "../assets/img/dashboard.jpg";
import { Link } from "react-router-dom";
import axios from "axios";
import { useAuth } from "../context/AuthContext";

const LoginPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const { login } = useAuth();
  const baseUrl = import.meta.env.VITE_BaseUrl;

  const handleLogin = async (e) => {
    e.preventDefault();
    setError("");

    try {
      const response = await axios.post(`YourApiUrl`, {
        email,
        password,
      });
      const token = response.data;
      if (!token) {
        throw new Error("Token alınamadı.");
      }

      login(token); // AuthContext üzerinden login işlemi
    } catch (err) {
      console.error("Giriş hatası:", err);
      setError("Giriş başarısız. Lütfen bilgilerinizi kontrol edin.");
    }
  };

  return (
    <>
      <div className="container">
        <div className="login-section">
          <div className="form-container">
            <h1 className="hg">Hoşgeldiniz</h1>
            <form onSubmit={handleLogin}>
              <label htmlFor="email">Email</label>
              <input
                type="email"
                id="email"
                placeholder="Email adresinizi giriniz"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              <label htmlFor="password">Şifre</label>
              <input
                type="password"
                id="password"
                placeholder="Şifrenizi giriniz"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
              <button className="login" type="submit">Giriş Yap</button>
              <Link className="sifremiUnuttum" to={`/SifremiUnuttum`}>Şifremi Unuttum</Link>
            </form>
            {error && <p>{error}</p>}
          </div>
        </div>

        <div className="image-section">
          <div className="content">
            <h2>"İdeal İş, İdeal Gelecek!"</h2>
            <p>İnsan Kaynakları Yönetim Sistemimize Hoşgeldiniz.</p>
          </div>
          <img src={Dashboard} alt="Dashboard Preview" />
        </div>
      </div>
    </>
  );
};

export default LoginPage;
