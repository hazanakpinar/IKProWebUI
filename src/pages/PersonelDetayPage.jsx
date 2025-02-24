import React, { useContext } from "react";
import "../assets/style/personelDetay.scss";
import DataContext from "../context/DataContext";
import { Link, useLocation } from 'react-router-dom';
import AuthContext from "../context/AuthContext";


const PersonelDetayPage = () => {
  const { state, dispatch, updatePersonel } = useContext(DataContext);
  const location = useLocation();

  const { user } = useContext(AuthContext);

  const sirketler = state.sirketler;
  const personel = location.state?.personel;

  if (!personel) {
    return <p>Yükleniyor...</p>;
  }

  const sirket = sirketler.find(x => x.sirketID === personel.sirketID) || {};
  const formatDate = (date) => {
    if (!date) return "Bilgi Yok";
    const parsedDate = new Date(date);
    if (isNaN(parsedDate)) return "Geçersiz Tarih"; 
    return parsedDate.toLocaleDateString("tr-TR", {
      year: "numeric",
      month: "2-digit",
      day: "2-digit",
    });
  };

const iseGirisTarih = formatDate(personel.iseGirisTarih);
const istenCikisTarih = formatDate(personel.istenCikisTarihi);
const dogumTarih = formatDate(personel.dogumTarihi);

  if (!personel) {
    return <div>personel boş...</div>;
  }

  return (
    <div className="yonetici-content max-w-2xl mx-4 sm:max-w-sm md:max-w-sm lg:max-w-sm xl:max-w-sm sm:mx-auto md:mx-auto lg:mx-auto xl:mx-auto mt-16 bg-white shadow-xl rounded-lg text-gray-900">
      <div className="rounded-t-lg h-32 overflow-hidden">
        <img
          className="object-cover object-top w-full"
          src="https://cdn.pixabay.com/photo/2020/06/05/07/48/panorama-5261863_1280.jpg"
          alt="Background"
        />
      </div>
      <div className="mx-auto w-48 h-48 relative -mt-16 border-4 border-white rounded-full overflow-hidden">
        <img
          className="object-cover object-center w-full h-full"
          src={
            personel.fotograf ||
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT6E1Z0q4HhSyzG6pUoHIRVDy54WukV9lgcIQ&s"
          }
          alt="Personel"
        />
      </div>
      <div className="text-center mt-2 mb-10">
        <h2 className="font-semibold">{`${personel.adi || "Ad"} ${personel.soyadi || "Soyad"}`}</h2>
        <p className="text-gray-500">{personel.departman || "Bilgi Yok"}</p>
      </div>
      <form className="p-4" onSubmit={updatePersonel}>
        <div className='form-body grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-2 gap-4'>
          <div className="flex flex-col">
            <label><strong>Adı:</strong></label>
            <input type="text" value={personel.adi} readOnly className="form-input" />
          </div>
          <div className="flex flex-col">
            <label><strong>İkinci Ad:</strong></label>
            <input type="text" value={personel.ikinciAdi || "Bilgi Yok"} readOnly className="form-input" />
          </div>
          <div className="flex flex-col">
            <label><strong>Soyadı:</strong></label>
            <input type="text" value={personel.soyadi} readOnly className="form-input" />
          </div>
          <div className="flex flex-col">
            <label><strong>İkinci Soyad:</strong></label>
            <input type="text" value={personel.ikinciSoyadi || "Bilgi Yok"} readOnly className="form-input" />
          </div>
          <div className="flex flex-col">
            <label><strong>Doğum Tarihi:</strong></label>
            <input type="text" value={dogumTarih|| "Bilgi Yok"} readOnly className="form-input" />
          </div>
          <div className="flex flex-col">
            <label><strong>Doğum Yeri:</strong></label>
            <input type="text" value={personel.dogumYeri || "Bilgi Yok"} readOnly className="form-input" />
          </div>
          <div className="flex flex-col">
            <label><strong>TC:</strong></label>
            <input type="text" value={personel.tcNo || "Bilgi Yok"} readOnly className="form-input" />
          </div>
          <div className="flex flex-col">
            <label><strong>İşe Giriş Tarihi:</strong></label>
            <input type="text" value={iseGirisTarih || "Bilgi Yok"} readOnly className="form-input" />
          </div>
          <div className="flex flex-col">
            <label><strong>İşten Çıkış Tarihi:</strong></label>
            <input type="text" value={istenCikisTarih || "Bilgi Yok"} readOnly className="form-input" />
          </div>
          <div className="flex flex-col">
            <label><strong>Aktiflik Durumu:</strong></label>
            <input type="text" value={personel.aktif ? "Evet" : "Hayır"} readOnly className="form-input" />
          </div>
          <div className="flex flex-col">
            <label><strong>Meslek:</strong></label>
            <input type="text" value={personel.meslek || "Bilgi Yok"} readOnly className="form-input" />
          </div>
          <div className="flex flex-col">
            <label><strong>Departman:</strong></label>
            <input type="text" value={personel.departman || "Bilgi Yok"} readOnly className="form-input" />
          </div>
          <div className="flex flex-col">
            <label><strong>Şirket:</strong></label>
            <input type="text" value={sirket.ad || "Bilgi Yok"} readOnly className="form-input" />
          </div>

          <div className="flex flex-col">
            <label><strong>Email:</strong></label>
            <input type="text" value={personel.email || "Bilgi Yok"} readOnly className="form-input" />
          </div>
          <div className="flex flex-col">
            <label><strong>Maaş:</strong></label>
            <input type="text" value={personel.maas || "Bilgi Yok"} readOnly className="form-input" />
          </div>

          {/* BURALAR SADECE SIRKETYONETICISINE GORUNECEK */}
          {user.role !== "Personel" && (
          <div className="flex flex-col">
            <label><strong>Adres:</strong></label>
            <input type="text" value={personel.adres || "Bilgi Yok"} readOnly className="form-input" />
          </div>
          )}

          {user.role !== "Personel" && (
          <div className="flex flex-col">
            <label><strong>Telefon:</strong></label>
            <input type="text" value={personel.phoneNumber || "Bilgi Yok"} readOnly className="form-input" />
          </div>
          )}

          {/* BURALAR SADECE PERSONELE GORUNECEK */}
          {user.role !== "SirketYonetici" && (
          <div className="flex flex-col">
            <label><strong>Adres:</strong></label>
            <input type="text" value={state.personelAdres || "Bilgi Yok"} onChange={(e) => dispatch({ type: "personelAdres", payload: e.target.value })} className="form-input" />
          </div>
          )}
          {user.role !== "SirketYonetici" && (
          <div className="flex flex-col">
            <label><strong>Telefon:</strong></label>
            <input type="number" value={state.personelTelefon  || "Bilgi Yok"}
            readOnly={user.role === "SirketYonetici"}
             onChange={(e) => dispatch({ type: "personelTelefon", payload: e.target.value })} className="form-input" />
          </div>
        )}
          {user.role !== "SirketYonetici" && (
          <div className="flex flex-col">
            <label><strong>Fotoğraf:</strong></label>
            <input type="file" accept=".jpeg,.jpg,.png" onChange={(e) => {
              let file = e.target.files[0];
              if (!file) return;
              if (!["image/jpeg", "image/png"].includes(file.type)) {
                alert("Lütfen geçerli bir dosya formatı seçin (.jpeg, .jpg, .png)");
                return;
              }
              const reader = new FileReader();
              reader.onload = () => dispatch({ type: "personelFotograf", payload: reader.result });
              reader.readAsDataURL(file);
            }} className="form-input" />
          </div>)}
        </div>
        <div className="flex p-4 border-t mx-8 mt-2">
        {user.role !== "SirketYonetici" && (
          <button className="w-1/4 block mx-auto rounded-full bg-gray-900 hover:shadow-lg font-semibold text-white px-6 py-2 text-center">
            Güncelle
          </button>
        )}
          {/* </div> */}
          {user.role !== "SirketYonetici" && (
            // <div>
            <Link to="/PersonelAnasayfa" className="w-1/4 block mx-auto rounded-full bg-gray-900 hover:shadow-lg font-semibold text-white px-6 py-2 text-center">
              Geri
            </Link>
        )}
        </div>

          {/* BU BUTON SADECE SIRKETYONETICISINE GORUNECEK */}
          {user.role !== "Personel" && (
          <div>
          <Link to="/PersonelListePage" className="w-1/4 block mx-auto rounded-full bg-gray-900 hover:shadow-lg font-semibold text-white px-6 py-2 text-center">
            Geri
          </Link>
        </div>
        )}
      </form>
    </div>

  );
};

export default PersonelDetayPage;
