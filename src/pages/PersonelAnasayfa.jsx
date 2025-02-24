import React, { useContext } from "react";
import "../assets/style/personelAnasayfa.scss";
import { Link, useNavigate } from "react-router-dom";
import DataContext from "../context/DataContext";

const PersonelAnasayfa = () => {
  const { state } = useContext(DataContext);
  const personelDetay = state.personelDetay || {
    personelAdi: "Bilinmiyor",
    personelSoyadi: "Bilinmiyor",
    personelMeslek: "Bilinmiyor",
    personelEmail: "",
    personelTelefon: "",
    personelAdres: "",
    personelDepartman: "",
    personelFotograf:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT6E1Z0q4HhSyzG6pUoHIRVDy54WukV9lgcIQ&s",
  };

  if (!personelDetay) {
    return <div>Loading...</div>;
  }
  const navigate = useNavigate();

   return (
          <div
              className="yonetici-content max-w-2xl mx-4 sm:max-w-sm md:max-w-sm lg:max-w-sm xl:max-w-sm sm:mx-auto md:mx-auto lg:mx-auto xl:mx-auto mt-16 bg-white shadow-xl rounded-lg text-gray-900">
              <div className="rounded-t-lg h-32 overflow-hidden">
                  <img
                      className="object-contain object-top w-full"
                      src="https://cdn.pixabay.com/photo/2020/06/05/07/48/panorama-5261863_1280.jpg"
                      alt="Background"
                  />
              </div>
              <div className="mx-auto w-48 h-48 relative -mt-16 border-4 border-white rounded-full overflow-hidden">
                  <img
                      className="object-cover object-center w-full h-full"
                      src={personelDetay.fotograf}
                  alt={`${personelDetay.adi} ${personelDetay.soyadi}`}
                  />
              </div>
              <div className="text-center mt-2 mb-10">
                  <h2 className="font-semibold">
                      {personelDetay.adi} {personelDetay.soyadi}
                  </h2>
                  <p className="text-gray-500">{state.meslek}</p>
              </div>
              <ul className="py-4 mt-2 text-gray-700 flex items-center justify-around">
                  <li className="flex flex-col items-center space-evenly">
                      <svg
                          className="w-5 fill-current text-blue-900"
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 20 20">
                          <path d="M2 3a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V5a2 2 0 0 0-2-2H2zm16 2-8 5-8-5h16zm-16 1.2v7.8l5.4-3.4L2 6.2zm16 7.8V6.2l-5.4 3.4L18 14z" />
                      </svg>
                      <div>
                      <strong>Email:</strong> {personelDetay.email}
                      </div>
                  </li>
                  <li className="flex flex-col items-center space-evenly">
                      <svg
                          className="w-5 fill-current text-blue-900"
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 24 24">
                          <path d="M6.62 10.79a15.051 15.051 0 006.59 6.59l2.2-2.2a1 1 0 011.11-.21 11.72 11.72 0 004.52 1.17 1 1 0 011 .91v3.12a1 1 0 01-.88 1c-10.11.79-18.4-7.6-17.61-17.61a1 1 0 011-.88h3.12a1 1 0 01.91 1 11.72 11.72 0 001.17 4.52 1 1 0 01-.21 1.11z" />
                      </svg>
                      <div>
                      <strong>Telefon:</strong> {personelDetay.phoneNumber}
                      </div>
                  </li>
                  <li className="flex flex-col items-center space-evenly">
                      <svg
                          className="w-5 fill-current text-blue-900"
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 20 20">
                          <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
                      </svg>
                      <div>
                      <strong>Adres:</strong> {personelDetay.adres}
                      </div>
                  </li>
                  <li className="flex flex-col items-center space-evenly">
                      <svg
                          className="w-5 fill-current text-blue-900"
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 20 20">
                          <path d="M7 8a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm0 1c2.15 0 4.2.4 6.1 1.09L12 16h-1.25L10 20H4l-.75-4H2L.9 10.09A17.93 17.93 0 0 1 7 9zm8.31.17c1.32.18 2.59.48 3.8.92L18 16h-1.25L16 20h-3.96l.37-2h1.25l1.65-8.83zM13 0a4 4 0 1 1-1.33 7.76 5.96 5.96 0 0 0 0-7.52C12.1.1 12.53 0 13 0z" />
                      </svg>
                      <div>
                      <strong>Departman:</strong> {personelDetay.departman}
                      </div>
                  </li>
              </ul>
              <div className="p-4 border-t mx-8 mt-2">
                  <Link
                      to={`/PersonelDetayPage/${personelDetay.id}`}
                      state={{ personel: personelDetay }}
                      className="w-1/4 block mx-auto rounded-full bg-gray-900 hover:shadow-lg font-semibold text-white px-6 py-2 text-center">
                      Detaylar
                  </Link>
              </div>
          </div>
  );
};

export default PersonelAnasayfa;
