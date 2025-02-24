import React from "react";
import { FaHome, FaUser, FaCog, FaSignOutAlt } from "react-icons/fa";
import { FaBriefcase, FaCalendarCheck } from "react-icons/fa6";
import "../assets/style/sidebar.scss";
import logo from "../assets/img/logo3.png";
import { useAuth } from "../context/AuthContext";
import { Link, useNavigate } from "react-router-dom";

const SideBarMenu = () => {
  const { user } = useAuth();

  const navigate = useNavigate(); 
  
  const handleLogout = () => {
    sessionStorage.removeItem("token");
    navigate("/");
    window.location.reload(); 
  }

  return (
    <div className="sidebar bg-gray-900 text-white w-64">
      <div className="logo p-4">
        <img src={logo} alt="Logo" className="w-32 mx-auto" />
      </div>
      <ul className="menu space-y-2">
        {user?.role === "Admin" && (
          <li>
            <Link
              to="/YoneticiAnasayfa"
              className="flex items-center px-4 py-2 hover:bg-gray-700"
            >
              <FaHome className="w-5 h-5 mr-3" />
              <span>Ana Sayfa</span>
            </Link>
          </li>
        )}

        {user?.role === "Personel" && (
          <li>
            <Link
              to="/PersonelAnasayfa"
              className="flex items-center px-4 py-2 hover:bg-gray-700"
            >
              <FaHome className="w-5 h-5 mr-3" />
              <span>Personel Ana Sayfa</span>
            </Link>
          </li>
        )}

        {user?.role === "SirketYonetici" && (
          <li>
            <Link
              to="/SirketYoneticiAnasayfa"
              className="flex items-center px-4 py-2 hover:bg-gray-700"
            >
              <FaHome className="w-5 h-5 mr-3" />
              <span>Yönetici Ana Sayfa</span>
            </Link>
          </li>
        )}

        {user?.role === "Admin" && (
          <li>
            <input
              type="checkbox"
              id="sirketler-menu"
              className="peer hidden"
            />
            <label
              htmlFor="sirketler-menu"
              className="flex items-center px-4 py-2 w-full cursor-pointer hover:bg-gray-700 text-white"
            >
              <FaBriefcase className="w-5 h-5 mr-3" />
              <span>Şirketler</span>
              <svg
                className="w-4 h-4 ml-auto transform peer-checked:rotate-180 transition-transform"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M19 9l-7 7-7-7"
                />
              </svg>
            </label>
            <ul className="hidden peer-checked:block pl-8">
              <li>
                <Link
                  to="/Sirket"
                  className="flex items-center px-4 py-2 hover:bg-gray-700"
                >
                  <span>Şirket Listesi</span>
                </Link>
              </li>
              <li>
                <Link
                  to="/SirketEkle"
                  className="flex items-center px-4 py-2 hover:bg-gray-700"
                >
                  <span>Şirket Ekle</span>
                </Link>
              </li>
            </ul>
          </li>
        )}

        {user?.role === "SirketYonetici" && (
          <li>
            <input type="checkbox" id="personel-menu" className="peer hidden" />
            <label
              htmlFor="personel-menu"
              className="flex items-center px-4 py-2 w-full cursor-pointer hover:bg-gray-700 text-white"
            >
              <FaUser className="w-5 h-5 mr-3" />
              <span>Personel İşlemleri</span>
              <svg
                className="w-4 h-4 ml-auto transform peer-checked:rotate-180 transition-transform"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M19 9l-7 7-7-7"
                />
              </svg>
            </label>
            <ul className="hidden peer-checked:block pl-8">
              <li>
                <Link
                  to="/PersonelEkle"
                  className="flex items-center px-4 py-2 hover:bg-gray-700"
                >
                  <span>Personel Ekle</span>
                </Link>
              </li>
            </ul>
            <ul className="hidden peer-checked:block pl-8">
              <li>
                <Link
                  to="/PersonelListePage"
                  className="flex items-center px-4 py-2 hover:bg-gray-700"
                >
                  <span>Personeller</span>
                </Link>
              </li>
            </ul>
          </li>
        )}

        {user?.role === "Admin" && (
          <li>
            <input
              type="checkbox"
              id="yoneticiler-menu"
              className="peer hidden"
            />
            <label
              htmlFor="yoneticiler-menu"
              className="flex items-center px-4 py-2 w-full cursor-pointer hover:bg-gray-700 text-white"
            >
              <FaUser className="w-5 h-5 mr-3" />
              <span>Şirket Yöneticileri</span>
              <svg
                className="w-4 h-4 ml-auto transform peer-checked:rotate-180 transition-transform"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M19 9l-7 7-7-7"
                />
              </svg>
            </label>
            <ul className="hidden peer-checked:block pl-8">
              <li>
                <Link
                  to="/SirketYoneticiListe"
                  className="flex items-center px-4 py-2 hover:bg-gray-700"
                >
                  <span>Yönetici Listeleme</span>
                </Link>
              </li>
              <li>
                <Link
                  to="/SirketYoneticiEkle"
                  className="flex items-center px-4 py-2 hover:bg-gray-700"
                >
                  <span>Yönetici Ekle</span>
                </Link>
              </li>
            </ul>
          </li>
        )}

        {["SirketYonetici", "Personel"].includes(user?.role) && (
          <li>
            <input type="checkbox" id="talepler-menu" className="peer hidden" />
            <label
              htmlFor="talepler-menu"
              className="flex items-center px-4 py-2 w-full cursor-pointer hover:bg-gray-700 text-white"
            >
              <FaCalendarCheck className="w-5 h-5 mr-3" />
              <span>Talepler</span>
              <svg
                className="w-4 h-4 ml-auto transform peer-checked:rotate-180 transition-transform"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M19 9l-7 7-7-7"
                />
              </svg>
            </label>
            <ul className="hidden peer-checked:block pl-8">
           
              {user?.role === "Personel" && (
                <>
                  <li>
                    <Link
                      to="/IzinTalepEkle"
                      className="flex items-center px-4 py-2 hover:bg-gray-700"
                    >
                      <span>İzin Talep Ekle</span>
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/HarcamaTalepEkle"
                      className="flex items-center px-4 py-2 hover:bg-gray-700"
                    >
                      <span>Harcama Talep Ekle</span>
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/AvansTalepEkle"
                      className="flex items-center px-4 py-2 hover:bg-gray-700"
                    >
                      <span>Avans Talep Ekle</span>
                    </Link>
                  </li>
                </>
              )}

             
              {["SirketYonetici", "Personel"].includes(user?.role) && (
                <>
                  <li>
                    <Link
                      to="/IzinTalepListele"
                      className="flex items-center px-4 py-2 hover:bg-gray-700"
                    >
                      <span>İzin Talep Listele</span>
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/HarcamaTalepListele"
                      className="flex items-center px-4 py-2 hover:bg-gray-700"
                    >
                      <span>Harcama Talep Listele</span>
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/AvansTalepListele"
                      className="flex items-center px-4 py-2 hover:bg-gray-700"
                    >
                      <span>Avans Talep Listele</span>
                    </Link>
                  </li>
                </>
              )}
            </ul>
          </li>
        )}

        
        {user?.role === "Admin" && (
          <li>
            <input type="checkbox" id="paketler-menu" className="peer hidden" />
            <label
              htmlFor="paketler-menu"
              className="flex items-center px-4 py-2 w-full cursor-pointer hover:bg-gray-700 text-white"
            >
              <FaCog className="w-5 h-5 mr-3" />
              <span>Paketler</span>
              <svg
                className="w-4 h-4 ml-auto transform peer-checked:rotate-180 transition-transform"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M19 9l-7 7-7-7"
                />
              </svg>
            </label>
            <ul className="hidden peer-checked:block pl-8">
              <li>
                <Link
                  to="/PaketEkle"
                  className="flex items-center px-4 py-2 hover:bg-gray-700"
                >
                  <span>Paket Ekle</span>
                </Link>
              </li>
            </ul>
          </li>
        )}
           {["Admin","SirketYonetici", "Personel"].includes(user?.role) && (    
        <li>
          <Link onClick={handleLogout}
            to="/"
            className="flex items-center px-4 py-2 text-red-400 hover:bg-gray-700"
          >
            <FaSignOutAlt className="w-5 h-5 mr-3" />
            <span>Çıkış Yap</span>
          </Link>
        </li>
           )}
           <li>
           {!user?.role && (
            
          <Link
            to="/"
            className="flex items-center px-4 py-2 text-red-400 hover:bg-gray-700"
          >
            <FaSignOutAlt className="w-5 h-5 mr-3" />
            <span>Giriş Yap</span>
          </Link>)}
        </li>
      </ul>
    </div>
  );
};

export default SideBarMenu;
