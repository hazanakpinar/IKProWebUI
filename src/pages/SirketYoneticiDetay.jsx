import React, { useContext, useEffect } from "react";
import "../assets/style/sirketYoneticiDetay.scss";
import { Link, useLocation, useNavigate } from "react-router-dom";
import DataContext from "../context/DataContext";
import AuthContext from "../context/AuthContext";

const SirketYoneticiDetay = () => {
  const location = useLocation();
  const { state, dispatch, updateSirketYonetici } = useContext(DataContext);
  const { user } = useContext(AuthContext);
  const navigate=useNavigate();
  const sirketler = state.sirketler;
  const yonetici = location.state?.yonetici;
  const userRole = user.role
  

  if (!yonetici || sirketler.length === 0) {
    return <p>Yükleniyor...</p>;
  }

  if (!yonetici) return <p>Veri bulunamadı!</p>;
  const sirket = sirketler.find((x) => x.sirketID === yonetici.sirketID);

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
          src={yonetici.fotograf || "https://via.placeholder.com/150"}
          alt="SirketYonetici"
        />
      </div>
      <div className="text-center mt-2 mb-10">
        <h2 className="font-semibold">{yonetici.adi || "Bilgi Yok"} {yonetici.soyadi || "Bilgi Yok"}</h2>
        <p className="text-gray-500">{yonetici.departman || "Bilgi Yok"}</p>
      </div>
      <form onSubmit={updateSirketYonetici} className="p-4">
        <div className='form-body grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-2 gap-4'>
          <div className="flex flex-col">
            <label><strong>Ad:</strong></label>
            <input type="text" value={yonetici.adi || "Bilgi Yok"} readOnly className="form-input" />
          </div>
          <div className="flex flex-col">
            <label><strong>Soyad:</strong></label>
            <input type="text" value={yonetici.soyadi || "Bilgi Yok"} readOnly className="form-input" />
          </div>
          <div className="flex flex-col">
            <label><strong>Departman:</strong></label>
            <input type="text" value={yonetici.departman || "Bilgi Yok"} readOnly className="form-input" />
          </div>
          <div className="flex flex-col">
            <label><strong>İkinci Ad:</strong></label>
            <input type="text" value={yonetici.ikinciAdi || "Bilgi Yok"} readOnly className="form-input" />
          </div>
          <div className="flex flex-col">
            <label><strong>İkinci Soyad:</strong></label>
            <input type="text" value={yonetici.ikinciSoyadi || "Bilgi Yok"} readOnly className="form-input" />
          </div>
          <div className="flex flex-col">
            <label><strong>Doğum Tarihi:</strong></label>
            <input type="text" value={yonetici.dogumTarihi || "Bilgi Yok"} readOnly className="form-input" />
          </div>
          <div className="flex flex-col">
            <label><strong>Doğum Yeri:</strong></label>
            <input type="text" value={yonetici.dogumYeri || "Bilgi Yok"} readOnly className="form-input" />
          </div>
          <div className="flex flex-col">
            <label><strong>TCKN:</strong></label>
            <input type="text" value={yonetici.tcNo || "Bilgi Yok"} readOnly className="form-input" />
          </div>
          <div className="flex flex-col">
            <label><strong>İşe Giriş Tarihi:</strong></label>
            <input type="text" value={yonetici.iseGirisTarih || "Bilgi Yok"} readOnly className="form-input" />
          </div>
          <div className="flex flex-col">
            <label><strong>Şirket:</strong></label>
            <input type="text" value={sirket?.ad || "Bilgi Yok"} readOnly className="form-input" />
          </div>
          <div className="flex flex-col">
            <label><strong>Maaş:</strong></label>
            <input type="text" value={yonetici.maas || "Bilgi Yok"} readOnly className="form-input" />
          </div>
          <div className="flex flex-col">
            <label><strong>Email:</strong></label>
            <input type="text" value={yonetici.email || "Bilgi Yok"} readOnly className="form-input" />
          </div>
          <div className="flex flex-col">
            <label><strong>Telefon:</strong></label>
            <input type="text" value={state.yoneticiTelefon || "Bilgi Yok"} className="form-input" onChange={e => dispatch({ type: "yoneticiTelefon", payload: e.target.value })}
            />
          </div>
          <div className="flex flex-col">
            <label><strong>Adres:</strong></label>
            <input type="text" value={state.yoneticiAdres || "Bilgi Yok"} className="form-input" onChange={e => dispatch({ type: "yoneticiAdres", payload: e.target.value })}
            />
          </div>
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
              reader.onload = () => dispatch({ type: "sirketYoneticiFotograf", payload: reader.result });
              reader.readAsDataURL(file);
            }} className="form-input" />
          </div>
        </div>
        <div className=" flex p-4 border-t mx-8 mt-2">
          {userRole!=="Admin"&&(
            <button onClick={() => {
            if (userRole === 'SirketYonetici') { navigate('/SirketYoneticiListe') }
            else { navigate('/SirketYoneticiAnasayfa') }
          }}
            className="w-1/4 block mx-auto rounded-full bg-gray-900 hover:shadow-lg font-semibold text-white px-6 py-2">
            Güncelle
          </button>)}

          <Link to={userRole === 'Admin' ? '/SirketYoneticiListe' : '/SirketYoneticiAnasayfa'} className="w-1/4 block mx-auto rounded-full bg-gray-900 hover:shadow-lg font-semibold text-white px-6 py-2 text-center">
            Geri
          </Link>
        </div>
      </form>
    </div>

  );
};

export default SirketYoneticiDetay;
