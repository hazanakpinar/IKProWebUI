import React, { useContext, useEffect } from "react";
import "../assets/style/sirketEkle.scss";
import DataContext from "../context/DataContext";
import AuthContext from "../context/AuthContext";


const AvansTalepListePage = () => {
  const { state, updateOnayDurum  } = useContext(DataContext);
  //const avansTalepleri = state.avansTalepler;
  const talepTipi="avans"
  const avansTalepleri = state[`${talepTipi}Talepler`];
  
  const personelMap = state.personeller.reduce((acc, personel) => {
    acc[personel.id] = personel;
    return acc;
  }, {});

   
  const { user } = useContext(AuthContext);
  const userRole = user.role
  const userId = user.userId


  const seciliAvansTalepler = userRole === 'Personel' 
    ? avansTalepleri.filter(item => String(item.appUserId) === String(userId)) 
    : avansTalepleri

  return (
    <div className="flex flex-col mt-8 izin-talepleri-listesi">
      <div className="-my-2 py-2 overflow-x-auto sm:-mx-6 sm:px-6 lg:-mx-8 lg:px-8">
        <div className="align-middle inline-block min-w-full shadow overflow-hidden sm:rounded-lg border-b border-gray-200 Hazan">
          <table className="min-w-full">
            <thead>
              <tr>
              {userRole!=='Personel'&&(
                <th className="px-6 py-6 border-b border-gray-200 bg-gray-50 text-left text-xl leading-4 font-medium text-gray-900 uppercase tracking-wider">
                  Personel
                </th>)}
                <th className="px-6 py-6 border-b border-gray-200 bg-gray-50 text-left text-xl leading-4 font-medium text-gray-900 uppercase tracking-wider">
                  Avans Türü
                </th>
                <th className="px-6 py-6 border-b border-gray-200 bg-gray-50 text-left text-xl leading-4 font-medium text-gray-900 uppercase tracking-wider">
                  Tutar
                </th>
                <th className="px-6 py-6 border-b border-gray-200 bg-gray-50 text-left text-xl leading-4 font-medium text-gray-900 uppercase tracking-wider">
                  Para Birimi
                </th>
                <th className="px-6 py-6 border-b border-gray-200 bg-gray-50 text-left text-xl leading-4 font-medium text-gray-900 uppercase tracking-wider">
                  Açıklama
                </th>
                <th className="px-6 py-3 border-b border-gray-200 bg-gray-50 text-left text-xl leading-4 font-medium text-gray-900 uppercase tracking-wider">
                  Onay Durumu
                </th>
                {/* <th className="px-6 py-3 border-b border-gray-200 bg-gray-50 text-left text-xl leading-4 font-medium text-gray-900 uppercase tracking-wider">
                  Talep Tarihi
                </th>
                <th className="px-6 py-3 border-b border-gray-200 bg-gray-50 text-left text-xl leading-4 font-medium text-gray-900 uppercase tracking-wider">
                  Cevaplanma Tarihi
                </th>
                <th className="px-6 py-3 border-b border-gray-200 bg-gray-50"></th> */}
              </tr>
            </thead>

            <tbody className="bg-white">
              {avansTalepleri.length === 0 ? (
                <tr>
                  <td colSpan="6" className="text-center py-4">
                    Yükleniyor...
                  </td>
                </tr>
              ) : (
                seciliAvansTalepler.map((item) => {
                  const personel = personelMap[item.appUserId]
                  return(
                  <tr key={item.id}>
                    {userRole!=='Personel'&&(
                    <td className="px-6 py-4 whitespace-no-wrap border-b border-gray-200">
                      <div className="text-sm leading-5 font-medium text-gray-900">
                        {personel?personel.adi: "Bilinmiyor"}
                      </div>
                    </td>)}
                    <td className="px-6 py-4 whitespace-no-wrap border-b border-gray-200">
                      <div className="text-sm leading-5 font-medium text-gray-900">
                        {item.avansTuru || "Bilinmiyor"}
                      </div>
                    </td>

                    <td className="px-6 py-4 whitespace-no-wrap border-b border-gray-200">
                      <div className="text-sm leading-5 font-medium text-gray-900">
                        {item.tutar || "Bilinmiyor"}
                      </div>
                    </td>
                    <td className="px-6 py-4 whitespace-no-wrap border-b border-gray-200">
                      <div className="text-sm leading-5 font-medium text-gray-900">
                        {item.paraBirimi || "Bilinmiyor"}
                      </div>
                    </td>

                    <td className="px-6 py-4 whitespace-no-wrap border-b border-gray-200">
                      <div className="text-sm leading-5 font-medium text-gray-900">
                        {item.aciklama || "Bilinmiyor"}
                      </div>
                    </td>

                    <td className="px-6 py-4 whitespace-no-wrap border-b border-gray-200">
                      <div className="text-sm leading-5 text-gray-500">
                        {item.onayDurumu === 0
                          ? "OnayBekleyen"
                          : item.onayDurumu === 1
                          ? "Onaylandi"
                          : item.onayDurumu === 3
                          ? "IptalEdildi"
                          : item.onayDurumu === 2
                          ? "Reddedildi"
                          : "Bilinmeyen Durum"}
                      </div>

                      {userRole === "SirketYonetici" && (
                          <div className="flex">
                            <button 
                              className="text-green-300 hover:bg-yellow-200"
                              onClick={() => updateOnayDurum(item.id, 1, talepTipi)}
                            >
                              Onayla
                            </button>
                            <button
                              className="text-red-300 hover:bg-red-500"
                              onClick={() => updateOnayDurum(item.id, 2, talepTipi)}
                            >
                              Reddet
                            </button>
                          </div>
                        )}
                    </td>
                    
                  </tr>
                )})
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};



export default AvansTalepListePage;
