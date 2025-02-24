import React, { useContext } from 'react';
import '../assets/style/YoneticiDetay.scss';
import DataContext from '../context/DataContext';
import { Link } from 'react-router-dom';

const YoneticiDetay = () => {
    const { state, dispatch, updateAdmin } = useContext(DataContext);
    const adminDetay = state.adminDetay;
    if (adminDetay.length === 0) {
        return <p>Yükleniyor...</p>;
    }
    return (
        <div className="yonetici-content max-w-2xl mx-4 sm:max-w-sm md:max-w-sm lg:max-w-sm xl:max-w-sm sm:mx-auto md:mx-auto lg:mx-auto xl:mx-auto mt-16 bg-white shadow-xl rounded-lg text-gray-900">
            <div className="rounded-t-lg h-32 overflow-hidden">
                <img
                    className="object-cover object-top w-full"
                    src='https://cdn.pixabay.com/photo/2020/06/05/07/48/panorama-5261863_1280.jpg'
                    alt='Background'
                />
            </div>
            <div className="mx-auto w-48 h-48 relative -mt-16 border-4 border-white rounded-full overflow-hidden">
                <img
                    className="object-cover object-center w-full h-full"
                    src={adminDetay.fotograf}
                    alt={`${adminDetay.adi} ${adminDetay.soyadi}`}
                />
            </div>
            <div className="text-center mt-2 mb-10">
                <h2 className="font-semibold">{`${adminDetay.adi} ${adminDetay.soyadi}`}</h2>
                <p className="text-gray-500">{adminDetay.meslek}</p>
            </div>
            <form onSubmit={updateAdmin} className="p-4">
                <div className='form-body grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-2 gap-4'>
                    <div className="flex flex-col">
                        <label><strong>Adı:</strong></label>
                        <input type="text" value={adminDetay.adi} readOnly className="form-input" />
                    </div>
                    <div className="flex flex-col">
                        <label><strong>Soyadı:</strong></label>
                        <input type="text" value={adminDetay.soyadi} readOnly className="form-input" />
                    </div>
                    <div className="flex flex-col">
                        <label><strong>Doğum Tarihi:</strong></label>
                        <input type="text" value={adminDetay.dogumTarihi} readOnly className="form-input" />
                    </div>
                    <div className="flex flex-col">
                        <label><strong>Doğum Yeri:</strong></label>
                        <input type="text" value={adminDetay.dogumYeri} readOnly className="form-input" />
                    </div>
                    <div className="flex flex-col">
                        <label><strong>TC:</strong></label>
                        <input type="text" value={adminDetay.tcNo} readOnly className="form-input" />
                    </div>
                    <div className="flex flex-col">
                        <label><strong>İşe Giriş Tarihi:</strong></label>
                        <input type="text" value={adminDetay.iseGirisTarih} readOnly className="form-input" />
                    </div>
                    <div className="flex flex-col">
                        <label><strong>İşten Çıkış Tarihi:</strong></label>
                        <input type="text" value={adminDetay.istenCikisTarihi} readOnly className="form-input" />
                    </div>
                    <div className="flex flex-col">
                        <label><strong>Aktiflik Durumu:</strong></label>
                        <input type="text" value={adminDetay.aktif} readOnly className="form-input" />
                    </div>
                    <div className="flex flex-col">
                        <label><strong>Meslek:</strong></label>
                        <input type="text" value={adminDetay.meslek} readOnly className="form-input" />
                    </div>
                    <div className="flex flex-col">
                        <label><strong>Departman:</strong></label>
                        <input type="text" value={adminDetay.departman} readOnly className="form-input" />
                    </div>
                    <div className="flex flex-col">
                        <label><strong>Email:</strong></label>
                        <input type="text" value={adminDetay.email} readOnly className="form-input" />
                    </div>
                    <div className="flex flex-col">
                        <label><strong>Adres:</strong></label>
                        <input
                            type="text"
                            value={state.adres}
                            onChange={e => dispatch({ type: "adminAdres", payload: e.target.value })}
                            className="form-input"
                        />
                    </div>
                    <div className="flex flex-col">
                        <label><strong>Telefon:</strong></label>
                        <input
                            type="number"
                            value={state.phoneNumber}
                            onChange={e => dispatch({ type: "adminTelefon", payload: e.target.value })}
                            className="form-input"
                        />
                    </div>
                    <div className="flex flex-col">
                        <label><strong>Fotoğraf:</strong></label>
                        <input
                            type="file"
                            accept=".jpeg,.jpg,.png"
                            onChange={(e) => {
                                const file = e.target.files[0];
                                if (file) {
                                    const reader = new FileReader();
                                    reader.onload = () => dispatch({ type: "adminFotograf", payload: reader.result });
                                    reader.readAsDataURL(file);
                                }
                            }}
                            className="form-input"
                        />
                    </div>
                </div>
                <div className=" flex p-4 border-t mx-8 mt-2">
                    <button className="w-1/4 block mx-auto rounded-full bg-gray-900 hover:shadow-lg font-semibold text-white px-6 py-2">
                        Güncelle
                    </button>

                    <Link to="/YoneticiAnasayfa" className="w-1/4 block mx-auto rounded-full bg-gray-900 hover:shadow-lg font-semibold text-white px-6 py-2 text-center">
                        Geri
                    </Link>
                </div>
            </form>


        </div>
    );
};

export default YoneticiDetay;
