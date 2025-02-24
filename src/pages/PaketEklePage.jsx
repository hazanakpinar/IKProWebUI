import "../assets/style/paketEkle.scss";
import React, { useContext } from "react";
import DataContext from "../context/DataContext";
import { useNavigate } from "react-router-dom";

const PaketEklePage = () => {
  const { paketPost, state, dispatch } =
    useContext(DataContext);
const navigate=useNavigate();
  return (
    <>
      <div className="paket-ekle mt-8">
        <div className="mt-4">
          <div className="p-6 bg-white rounded-md shadow-md">
            <h2 className="text-lg text-gray-700 font-semibold capitalize text-center mb-8">
              Paket Ekle
            </h2>

            <form onSubmit={paketPost}>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mt-4">
                <div>
                  <label className="text-gray-700">Paket Adı</label>
                  <input
                    className="form-input w-full mt-2 rounded-md focus:border-indigo-600"
                    type="text"
                    placeholder="Paket Adı Giriniz"
                    onChange={(e) =>
                      dispatch({ type: "paketAdi", payload: e.target.value })
                    }
                  />
                   {state.errors.PaketAdi && <div className='error'>{state.errors.PaketAdi}</div>}
                </div>

                <div>
                  <label className="text-gray-700">Süresi</label>
                  <input
                    className="form-input w-full mt-2 rounded-md focus:border-indigo-600"
                    type="text"
                    placeholder="Gün Sayısı Belirtiniz"
                    onChange={(e) =>
                      dispatch({ type: "sure", payload: e.target.value })
                    }
                  />
                  {state.errors.PaketSuresi && <div className='error'>{state.errors.PaketSuresi}</div>}
                </div>

                <div>
                  <label className="text-gray-700">Fiyatı</label>
                  <input
                    className="form-input w-full mt-2 rounded-md focus:border-indigo-600"
                    type="text"
                    placeholder="Fiyatı Belirtiniz"
                    onChange={(e) =>
                      dispatch({ type: "fiyati", payload: e.target.value })
                    }
                  />
                  {state.errors.Fiyat && <div className='error'>{state.errors.Fiyat}</div>}
                </div>

                <div>
                  <label className="text-gray-700">Yayınlanma Tarihi</label>
                  <input
                    className="form-input w-full mt-2 rounded-md focus:border-indigo-600"
                    type="date"
                    onChange={(e) =>
                      dispatch({
                        type: "yayinlanmaTarihi",
                        payload: e.target.value,
                      })
                    }
                  />
                  {state.errors.YayinlanmaTarihi && <div className='error'>{state.errors.YayinlanmaTarihi}</div>}
                </div>

                <div>
                  <label className="text-gray-700">
                    Yayından Kaldırılma Tarihi
                  </label>
                  <input
                    className="form-input w-full mt-2 rounded-md focus:border-indigo-600"
                    type="date"
                    onChange={(e) =>
                      dispatch({
                        type: "yayindanKaldirilmaTarihi",
                        payload: e.target.value,
                      })
                    }
                  />
                   {state.errors.YayindanKaldirilmaTarihi && <div className='error'>{state.errors.YayindanKaldirilmaTarihi}</div>}
                </div>

                <div>
                  <label className="text-gray-700">Kullanıcı Sayısı</label>
                  <input
                    className="form-input w-full mt-2 rounded-md focus:border-indigo-600"
                    type="number"
                    placeholder="Kullanıcı Sayısı Belirtiniz"
                    onChange={(e) =>
                      dispatch({
                        type: "kullaniciSayisi",
                        payload: e.target.value,
                      })
                    }
                  />
                  {state.errors.KullaniciSayisi && <div className='error'>{state.errors.KullaniciSayisi}</div>}
                </div>

                <div>
                  <label className="text-gray-700">Para Birimi</label>
                  <select
                    className="form-input w-full mt-2 rounded-md focus:border-indigo-600 bg-gray-200"
                    onChange={(e) =>
                      dispatch({ type: "paketParaBirimi", payload: e.target.value })
                    }
                  >
                    <option value="">Para Birimi Seçiniz</option>
                    <option value="TRY">TRY</option>
                    <option value="USD">USD</option>
                    <option value="EUR">EUR</option>
                  </select>
                  {state.errors.ParaBirimi && <div className='error'>{state.errors.ParaBirimi}</div>}
                </div>

                <div className="mt-4">
                  <label className="text-gray-700">Aktiflik Durumu</label>
                  <label className="switch ml-3">
                    <input
                      className="form-input w-full mt-2 rounded-md focus:border-indigo-600"
                      type="checkbox"
                      checked={state.paketAktiflikDurumu}
                      onChange={(e) => dispatch({ type: "paketAktiflikDurumu",payload:e.target.checked})}
                    />
                      {state.errors.Aktif && <div className='error'>{state.errors.Aktif}</div>}
                    <span className="slider"></span>
                  </label>
                </div>
              </div>
              <div className="flex justify-end mt-4">
                <input
                  className="px-4 py-2 bg-gray-800 text-gray-200 rounded-md hover:bg-gray-700 focus:outline-none focus:bg-gray-700"
                  type="submit"
                  value="EKLE"
                />
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default PaketEklePage;
