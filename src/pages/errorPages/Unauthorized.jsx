import React from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../context/AuthContext";

const Unauthorized = () => {
  const { user, logout } = useAuth();
  const navigate = useNavigate();

  const handleRedirect = () => {
    // Kullanıcının rolüne göre yönlendirme yap
    switch (user?.role) {
      case "Admin":
        navigate("/"); // Admin'in ana sayfasına yönlendirme
        break;
      case "SirketYonetici":
        navigate("/SirketYoneticiAnasayfa"); // Şirket yöneticisinin ana sayfası
        break;
      case "Personel":
        navigate("/PersonelAnasayfa"); // Personelin ana sayfası
        break;
      default:
        navigate("/"); // Varsayılan olarak genel ana sayfa
    }
  };

  const handleLogout = () => {
    // Kullanıcıyı çıkış yap
    logout();
  };

  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h1>Yetkisiz Erişim</h1>
      <p>Bu sayfaya erişim yetkiniz bulunmamaktadır.</p>
      <div style={{ marginTop: "20px" }}>
        <button
          onClick={handleRedirect}
          style={{
            marginRight: "10px",
            padding: "10px 20px",
            backgroundColor: "#007BFF",
            color: "#fff",
            border: "none",
            borderRadius: "5px",
            cursor: "pointer",
          }}
        >
          Ana Sayfaya Git
        </button>
        <button
          onClick={handleLogout}
          style={{
            padding: "10px 20px",
            backgroundColor: "#FF0000",
            color: "#fff",
            border: "none",
            borderRadius: "5px",
            cursor: "pointer",
          }}
        >
          Çıkış Yap
        </button>
      </div>
    </div>
  );
};

export default Unauthorized;
