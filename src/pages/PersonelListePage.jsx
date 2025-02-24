import React, { useContext } from "react";
import "../assets/style/sirket.scss";
import { Link } from "react-router-dom";
import DataContext from "../context/DataContext";

const PersonelListePage = () => {
  const { state } = useContext(DataContext);
  const personeller = state.personeller;

  return (
    <div className="flex flex-col mt-8 yonetici-listesi">
      <div className="-my-2 py-2 overflow-x-auto sm:-mx-6 sm:px-6 lg:-mx-8 lg:px-8">
        <div className="align-middle inline-block min-w-full shadow overflow-hidden sm:rounded-lg border-b border-gray-200">
          <table className="min-w-full">
            <thead>
              <tr>
                <th className="px-6 py-6 border-b border-gray-200 bg-gray-50 text-left text-xl leading-4 font-medium text-gray-900 uppercase tracking-wider">
                  Fotoğraf
                </th>
                <th className="px-6 py-6 border-b border-gray-200 bg-gray-50 text-left text-xl leading-4 font-medium text-gray-900 uppercase tracking-wider">
                  Ad Soyad
                </th>
                <th className="px-6 py-6 border-b border-gray-200 bg-gray-50 text-left text-xl leading-4 font-medium text-gray-900 uppercase tracking-wider">
                  İletişim
                </th>
                <th className="px-6 py-3 border-b border-gray-200 bg-gray-50"></th>
              </tr>
            </thead>

            <tbody className="bg-white">
              {personeller.length === 0 ? (
                <tr>
                  <td colSpan="4" className="text-center py-4">
                    Yükleniyor...
                  </td>
                </tr>
              ) : (
                personeller.map((personel, index) => (
                  <tr key={index}>
                    <td className="px-6 py-2 whitespace-no-wrap border-b border-gray-200">
                      <div className="text-sm leading-5 font-medium text-gray-900">
                        <img
                          className="object-cover object-center w-20 h-20 rounded-full"
                          src={personel.fotograf}
                          alt="Personel Fotoğrafı"
                        />
                      </div>
                    </td>

                    <td className="px-6 py-4 whitespace-no-wrap border-b border-gray-200">
                      <div className="text-sm leading-5 font-medium text-gray-900">
                        {personel.adi} {personel.soyadi}
                      </div>
                    </td>

                    <td className="px-6 py-4 whitespace-no-wrap border-b border-gray-200">
                      <div className="text-sm leading-5 text-gray-500">
                        Email: {personel.email}
                      </div>
                      <div className="text-sm leading-5 text-gray-500">
                        Telefon: {personel.phoneNumber}
                      </div>
                    </td>

                    <td className="px-6 py-4 whitespace-no-wrap text-right border-b border-gray-200 text-sm leading-5 font-medium">
                    <Link
                        to={`/PersonelDetayPage/${personel.id}`}
                        state={{ personel: personel }}
                        className="text-indigo-600 hover:text-indigo-900">
                        Detayları Gör
                      </Link>
                          
                    </td>
                  </tr>
                ))
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default PersonelListePage;
