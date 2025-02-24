import { jwtDecode } from "jwt-decode";
import React, { createContext, useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [token, setToken] = useState(null);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    const storedToken = sessionStorage.getItem("token");
    if (storedToken) {
      try {
        const decodedToken = jwtDecode(storedToken);
        const currentTime = Math.floor(Date.now() / 1000); 
        if (decodedToken.exp && decodedToken.exp < currentTime) {
          console.warn("Token süresi dolmuş.");
          logout();
          return;
        }
        setUser({
          role: decodedToken["http://schemas.microsoft.com/ws/2008/06/identity/claims/role"],
          userId: decodedToken["http://schemas.xmlsoap.org/ws/2005/05/identity/claims/nameidentifier"],
          sirketId: decodedToken["http://schemas.microsoft.com/ws/2008/06/identity/claims/userdata"],
        });
        setToken(storedToken);

        const remainingTime = (decodedToken.exp - currentTime) * 1000; 
        const timeout = setTimeout(() => {
          console.warn("Token süresi dolduğu için çıkış yapılıyor.");
          logout();
        }, remainingTime);

        return () => clearTimeout(timeout); 
      } catch (error) {
        console.error("Token çözümleme hatası:", error);
        logout();
      }
    }
    setLoading(false);
  }, []);

  const login = (token) => {
    try {
      const decodedToken = jwtDecode(token);
      const currentTime = Math.floor(Date.now() / 1000);
      if (decodedToken.exp && decodedToken.exp < currentTime) {
        console.warn("Token süresi dolmuş.");
        alert("Geçersiz token. Lütfen tekrar giriş yapın.");
        logout();
        return;
      }

      const role = decodedToken["http://schemas.microsoft.com/ws/2008/06/identity/claims/role"];
      const userId = decodedToken["http://schemas.xmlsoap.org/ws/2005/05/identity/claims/nameidentifier"];
      const sirketId = decodedToken["http://schemas.microsoft.com/ws/2008/06/identity/claims/userdata"];
      setUser({ role, userId, sirketId });
      setToken(token);
      sessionStorage.setItem("token", token);

      const remainingTime = (decodedToken.exp - currentTime) * 1000;
      const timeout = setTimeout(() => {
        console.warn("Token süresi dolduğu için çıkış yapılıyor.");
        logout();
      }, remainingTime);

      switch (role?.toLowerCase()) {
        case "admin":
          navigate("/YoneticiAnasayfa");
          break;
        case "sirketyonetici":
          navigate("/SirketYoneticiAnasayfa");
          break;
        case "personel":
          navigate("/PersonelAnasayfa");
          break;
        default:
          alert("Geçersiz yetki. Üyelikle yetki bilgisi olmayabilir...");
      }

      return () => clearTimeout(timeout);
    } catch (error) {
      console.error("Login hatası:", error);
      logout();
    }
  };

  const logout = () => {
    setUser(null);
    setToken(null);
    sessionStorage.removeItem("token");
    navigate("/");
  };

  return (
    <AuthContext.Provider value={{ user, token, login, logout, loading }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => React.useContext(AuthContext);

export default AuthContext;
