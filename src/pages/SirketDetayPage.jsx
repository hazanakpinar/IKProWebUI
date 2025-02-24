import React from 'react'
import '../assets/style/sirketDetay.scss'
import { Link, useLocation } from 'react-router-dom';
import defaultLogo from "../assets/img/logo3.png";

const SirketDetay = () => {

    const location = useLocation();
    const sirketInfo = location.state?.sirketInfoDetay;
    if (!sirketInfo) return <p>Veri bulunamadı!</p>;


    return (
        <div className="yonetici-content max-w-2xl mx-4 sm:max-w-sm md:max-w-sm lg:max-w-sm xl:max-w-sm sm:mx-auto md:mx-auto lg:mx-auto xl:mx-auto mt-16 bg-white shadow-xl rounded-lg text-gray-900">
            <div className="rounded-t-lg h-32 overflow-hidden">
                <img
                    className="object-cover object-top w-full"
                    src="https://cdn.pixabay.com/photo/2020/06/05/07/48/panorama-5261863_1280.jpg"
                    alt="Background"
                />
            </div>
            <div className="mx-auto w-32 h-32 relative -mt-16 border-4 border-white rounded-full overflow-hidden">
                <img
                    className="object-cover object-center h-32"
                    src={sirketInfo.logo || defaultLogo}
                    alt={sirketInfo.ad || "Default Logo"}
                />
            </div>
            <div className="text-center mt-2 mb-10">
                <h2 className="font-semibold">{sirketInfo.ad || "Bilgi Yok"}</h2>
                <p className="text-gray-500">{sirketInfo.unvan || "Bilgi Yok"}</p>
            </div>
            <form className="p-4">
                <div className='form-body grid grid-cols-1 sm:grid-cols-2 gap-4'>
                    <div className="flex flex-col">
                        <label><strong>Mersis No:</strong></label>
                        <input type="text" value={sirketInfo.mersisNo || "Bilgi Yok"} readOnly className="form-input" />
                    </div>
                    <div className="flex flex-col">
                        <label><strong>Vergi No:</strong></label>
                        <input type="text" value={sirketInfo.vergiNo || "Bilgi Yok"} readOnly className="form-input" />
                    </div>
                    <div className="flex flex-col">
                        <label><strong>Vergi Dairesi:</strong></label>
                        <input type="text" value={sirketInfo.vergiDairesi || "Bilgi Yok"} readOnly className="form-input" />
                    </div>
                    <div className="flex flex-col">
                        <label><strong>Telefon:</strong></label>
                        <input type="text" value={sirketInfo.telefon || "Bilgi Yok"} readOnly className="form-input" />
                    </div>
                    <div className="flex flex-col">
                        <label><strong>Adres:</strong></label>
                        <input type="text" value={sirketInfo.adres || "Bilgi Yok"} readOnly className="form-input" />
                    </div>
                    <div className="flex flex-col">
                        <label><strong>Email:</strong></label>
                        <input type="text" value={sirketInfo.email || "Bilgi Yok"} readOnly className="form-input" />
                    </div>
                    <div className="flex flex-col">
                        <label><strong>Çalışan Sayısı:</strong></label>
                        <input type="text" value={sirketInfo.calisanSayisi || "Bilgi Yok"} readOnly className="form-input" />
                    </div>
                    <div className="flex flex-col">
                        <label><strong>Kuruluş Yılı:</strong></label>
                        <input type="text" value={sirketInfo.kurulusYili || "Bilgi Yok"} readOnly className="form-input" />
                    </div>
                    <div className="flex flex-col">
                        <label><strong>Sözleşme Başlangıç Tarihi:</strong></label>
                        <input type="text" value={sirketInfo.sozlesmeBaslangic || "Bilgi Yok"} readOnly className="form-input" />
                    </div>
                    <div className="flex flex-col">
                        <label><strong>Sözleşme Bitiş Tarihi:</strong></label>
                        <input type="text" value={sirketInfo.sozlesmeBitis || "Bilgi Yok"} readOnly className="form-input" />
                    </div>
                    <div className="flex flex-col">
                        <label><strong>Aktiflik:</strong></label>
                        <input type="text" value={sirketInfo.aktiflikDurumu ? "Evet" : "Hayır"} readOnly className="form-input" />
                    </div>
                </div>
                <div className="flex p-4 border-t mt-2 justify-center">
                    <Link to="/Sirket" className="w-1/4 block rounded-full bg-gray-900 hover:shadow-lg font-semibold text-white px-6 py-2 text-center">
                        Geri
                    </Link>
                </div>
            </form>
        </div>

    );
};

export default SirketDetay
