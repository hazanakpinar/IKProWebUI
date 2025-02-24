import React, { useContext, useState } from "react";
import "../assets/style/sirketEkle.scss";
import DataContext from "../context/DataContext";
import AuthContext from "../context/AuthContext";

const HarcamaTalepListePage = () => {
  const { state, updateOnayDurum } = useContext(DataContext);
  //const harcamaTalepleri = state.harcamaTalepler;
  const talepTipi = "harcama";
  const harcamaTalepleri = state[`${talepTipi}Talepler`];

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);

  // Fotoğraf tıklama işlemi
  const openModal = (imageSrc) => {
    setSelectedImage(imageSrc);
    setIsModalOpen(true);
  };

  // Modal kapama işlemi
  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedImage(null); // Seçilen resmi sıfırlama
  };

  const personelMap = state.personeller.reduce((acc, personel) => {
    acc[personel.id] = personel;
    return acc;
  }, {});

  const { user } = useContext(AuthContext);
  const userRole = user.role;
  const userId = user.userId;

  const seciliHarcamaTalepleri =
    userRole === "Personel"
      ? harcamaTalepleri.filter(
          (item) => String(item.appUserId) === String(userId)
        )
      : harcamaTalepleri;

  return (
    <div className="flex flex-col mt-8 izin-talepleri-listesi">
      <div className="-my-2 py-2 overflow-x-auto sm:-mx-6 sm:px-6 lg:-mx-8 lg:px-8">
        <div className="align-middle inline-block min-w-full shadow overflow-hidden sm:rounded-lg border-b border-gray-200 Hazan">
          <table className="min-w-full harcama-satir">
            <thead>
              <tr>
                {userRole !== "Personel" && (
                  <th className="px-6 py-6 border-b border-gray-200 bg-gray-50 text-left text-xl leading-4 font-medium text-gray-900 uppercase tracking-wider">
                    Personel
                  </th>
                )}
                <th className="px-6 py-6 border-b border-gray-200 bg-gray-50 text-left text-xl leading-4 font-medium text-gray-900 uppercase tracking-wider">
                  Harcama Türü
                </th>
                <th className="px-6 py-6 border-b border-gray-200 bg-gray-50 text-left text-xl leading-4 font-medium text-gray-900 uppercase tracking-wider">
                  Tutar
                </th>
                <th className="px-6 py-6 border-b border-gray-200 bg-gray-50 text-left text-xl leading-4 font-medium text-gray-900 uppercase tracking-wider">
                  Para Birimi
                </th>

                <th className="px-6 py-3 border-b border-gray-200 bg-gray-50 text-left text-xl leading-4 font-medium text-gray-900 uppercase tracking-wider">
                  Eklenecek Dosya
                </th>
                <th className="px-6 py-3 border-b border-gray-200 bg-gray-50 text-left text-xl leading-4 font-medium text-gray-900 uppercase tracking-wider">
                  Onay Durumu
                </th>
              </tr>
            </thead>

            <tbody className="bg-white">
              {harcamaTalepleri.length === 0 ? (
                <tr>
                  <td colSpan="6" className="text-center py-4">
                    Yükleniyor...
                  </td>
                </tr>
              ) : (
                seciliHarcamaTalepleri.map((item) => {
                  const personel = personelMap[item.appUserId];
                  return (
                    <tr key={item.id}>
                      {userRole !== "Personel" && (
                        <td className="px-6 py-4 whitespace-no-wrap border-b border-gray-200">
                          <div className="text-sm leading-5 font-medium text-gray-900">
                            {personel ? personel.adi : "Bilinmiyor"}
                          </div>
                        </td>
                      )}
                      <td className="px-6 py-4 whitespace-no-wrap border-b border-gray-200">
                        <div className="text-sm leading-5 font-medium text-gray-900">
                          {item.harcamaTuru || "Bilinmiyor"}
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
                        <div className="text-sm leading-5 font-medium text-gray-900 fotoicin">
                          <img
                            className="foto-sekil"
                            src={item.dosyaEkleme}
                            alt="Dosya Görseli"
                            loading="lazy"
                            onClick={() => openModal(item.dosyaEkleme)}
                          />
                        </div>
                      </td>

                      {isModalOpen && selectedImage && (
                        <div className="modal-overlay">
                          <div className="modal-content">
                            <button className="close-btn" onClick={closeModal}>
                              &times; {/* X simgesi */}
                            </button>
                            <img
                              src={selectedImage}
                              alt="Büyütülmüş Dosya Görseli"
                              className="modal-image"
                            />
                          </div>
                        </div>
                      )}

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
                              onClick={() =>
                                updateOnayDurum(item.id, 1, talepTipi)
                              }
                            >
                              Onayla
                            </button>
                            <button
                              className="text-red-300 hover:bg-red-500"
                              onClick={() =>
                                updateOnayDurum(item.id, 2, talepTipi)
                              }
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

export default HarcamaTalepListePage;
