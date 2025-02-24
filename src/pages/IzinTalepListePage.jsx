import React, { useContext } from "react";
import "../assets/style/sirketEkle.scss";
import DataContext from "../context/DataContext";
import AuthContext from "../context/AuthContext";

const IzinTalepListePage = () => {
  const { state,updateOnayDurum } = useContext(DataContext);
  const talepTipi="izin"
  const izinTalepler = state[`${talepTipi}Talepler`];
  
  const personelMap = state.personeller.reduce((acc, personel) => {
    acc[personel.id] = personel;
    return acc;
  }, {});

  const { user } = useContext(AuthContext);
  const userRole = user.role
  const userId = user.userId

  const seciliIzinTalepler = userRole === 'Personel' 
    ? izinTalepler.filter(item => String(item.appUserId) === String(userId)) 
    : izinTalepler

  return (
    <div className="flex flex-col mt-8 izin-talepleri-listesi sirket-ekle">
      <div className="-my-2 py-2 overflow-x-auto sm:-mx-3 sm: lg:-mx-8 lg:px-8">
        <div className="align-middle inline-block min-w-full shadow overflow-hidden sm:rounded-lg border-b border-gray-200 Hazan">
          <table className="min-w-full">
            <thead className="yapistir">
              <tr>
              {userRole!=='Personel'&&(
                <th className="px-6 py-6 border-b border-gray-200 bg-gray-50 text-left text-xl leading-4 font-medium text-gray-900 uppercase tracking-wider">
                  Personel
                </th>)}
                <th className="px-6 py-6 border-b border-gray-200 bg-gray-50 text-left text-xl leading-4 font-medium text-gray-900 uppercase tracking-wider"><div>
                  İzin Türü
                </div>
                </th>
                <th className=" px-6 py-6 border-b border-gray-200 bg-gray-50 text-left text-xl leading-4 font-medium text-gray-900 uppercase tracking-wider"><div>
                  Başlangıç Tarihi
                </div>
                </th>
                <th className=" px-6 py-6 border-b border-gray-200 bg-gray-50 text-left text-xl leading-4 font-medium text-gray-900 uppercase tracking-wider"><div>
                  Bitiş Tarihi
                </div>
                </th>
                <th className=" px-6 py-6 border-b border-gray-200 bg-gray-50 text-left text-xl leading-4 font-medium text-gray-900 uppercase tracking-wider"><div>
                  Gün Sayısı
                </div>
                </th>
                <th className=" px-6 py-6 border-b border-gray-200 bg-gray-50 text-left text-xl leading-4 font-medium text-gray-900 uppercase tracking-wider"><div>
                  Onay Durumu
                </div>
                </th>
              </tr>
            </thead>

            <tbody className="bg-white">
              {izinTalepler.length === 0 ? (
                <tr>
                  <td colSpan="6" className="text-center py-4">
                    Yükleniyor...
                  </td>
                </tr>
              ) : (
                seciliIzinTalepler.map((izinTalebi) => {
                  const personel = personelMap[izinTalebi.appUserId];
                  return (
                    <tr key={izinTalebi.id}>
                      {userRole!=='Personel'&&(
                    <td className="px-6 py-4 whitespace-no-wrap border-b border-gray-200">
                      <div className="text-sm leading-5 font-medium text-gray-900">
                        {personel?personel.adi: "Bilinmiyor"}
                      </div>
                    </td>)}

                      <td className=" px-6 py-4 whitespace-no-wrap border-b border-gray-200">
                        <div className="text-sm leading-5 text-gray-500">
                          {izinTalebi.izinTuru || "Bilinmiyor"}
                        </div>
                      </td>

                      <td className=" px-6 py-4 whitespace-no-wrap border-b border-gray-200">
                        <div className="text-sm leading-5 text-gray-500">
                          {new Date(
                            izinTalebi.baslangicTarihi
                          ).toLocaleDateString()}
                        </div>
                      </td>

                      <td className=" px-6 py-4 whitespace-no-wrap border-b border-gray-200">
                        <div className="text-sm leading-5 text-gray-500">
                          {new Date(
                            izinTalebi.bitisTarihi
                          ).toLocaleDateString()}
                        </div>
                      </td>

                      <td className=" px-6 py-4 whitespace-no-wrap border-b border-gray-200">
                        <div className="text-sm leading-5 text-gray-500">
                          {izinTalebi.gunSayisi || "Bilinmiyor"}
                        </div>
                      </td>

                      <td className=" px-6 py-4 whitespace-no-wrap border-b border-gray-200">
                        <div className="text-sm leading-5 text-gray-500">
                          {izinTalebi.onayDurumu === 0
                            ? "OnayBekleyen"
                            : izinTalebi.onayDurumu === 1
                            ? "Onaylandi"
                            : izinTalebi.onayDurumu === 3
                            ? "IptalEdildi"
                            : izinTalebi.onayDurumu === 2
                            ? "Reddedildi"
                            : "Bilinmeyen Durum"}
                        </div>

                        
                      {userRole === "SirketYonetici" && (
                          <div className="flex">
                            <button
                              className="text-green-300 hover:bg-yellow-200"
                              onClick={() => updateOnayDurum(izinTalebi.id, 1, talepTipi)}
                            >
                              Onayla
                            </button>
                            <button
                              className="text-red-300 hover:bg-red-500"
                              onClick={() => updateOnayDurum(izinTalebi.id, 2, talepTipi)}
                            >
                              Reddet
                            </button>
                          </div>
                        )}
                      </td>
                    </tr>
                  );
                })
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default IzinTalepListePage;
