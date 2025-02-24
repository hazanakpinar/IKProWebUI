import "../assets/style/sirketYoneticiEkle.scss";
import React, { useContext } from "react";
import DataContext from "../context/DataContext";

const PersonelEklePage = () => {
  const { handleSubmitPersonel, state, dispatch } = useContext(DataContext);

  return (
    <>
      <div className="mt-8">
        <div className="mt-4">
          <div className="p-6 bg-white rounded-md shadow-md">
            <h2 className="text-lg text-gray-700 font-semibold capitalize text-center mb-8">
              Personel Ekle
            </h2>

            <form onSubmit={handleSubmitPersonel}>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mt-4">
                <div>
                  <label className="text-gray-700">Personel Fotoğrafı</label>
                  <input
                    className="form-input w-full mt-2 rounded-md focus:border-indigo-600"
                    type="file"
                    accept="image/*"
                    onChange={(e) => {
                      const file = e.target.files[0];
                      if (file) {
                        const reader = new FileReader();
                        reader.onload = () =>
                          dispatch({
                            type: "personelFotograf",
                            payload: reader.result,
                          }); // Base64 olarak yükle
                        reader.readAsDataURL(file);
                      }
                    }}
                  />
                  {state.errors.Fotograf && <div className='error'>{state.errors.Fotograf}</div>}

                </div>

                <div>
                  <label className="text-gray-700">Ad</label>
                  <input
                    className="form-input w-full mt-2 rounded-md focus:border-indigo-600"
                    type="text"
                    placeholder="Adı Giriniz"
                    onChange={(e) =>
                      dispatch({ type: "personelAd", payload: e.target.value })
                    }
                  />
                  {state.errors.Adi && <div className='error'>{state.errors.Adi}</div>}

                </div>

                <div>
                  <label className="text-gray-700">İkinci Ad</label>
                  <input
                    className="form-input w-full mt-2 rounded-md focus:border-indigo-600"
                    type="text"
                    placeholder="İkinci Adı Giriniz"
                    onChange={(e) =>
                      dispatch({
                        type: "personelIkinciAd",
                        payload: e.target.value,
                      })
                    }
                  />
                </div>

                <div>
                  <label className="text-gray-700">Soyad</label>
                  <input
                    className="form-input w-full mt-2 rounded-md focus:border-indigo-600"
                    type="text"
                    placeholder="Soyadı Giriniz"
                    onChange={(e) =>
                      dispatch({
                        type: "personelSoyad",
                        payload: e.target.value,
                      })
                    }
                  />
                  {state.errors.Soyadi && <div className='error'>{state.errors.Soyadi}</div>}

                </div>

                <div>
                  <label className="text-gray-700">İkinci Soyad</label>
                  <input
                    className="form-input w-full mt-2 rounded-md focus:border-indigo-600"
                    type="text"
                    placeholder="İkinci Soyadı Giriniz"
                    onChange={(e) =>
                      dispatch({
                        type: "personelIkinciSoyad",
                        payload: e.target.value,
                      })
                    }
                  />
                </div>

                <div>
                  <label className="text-gray-700">Doğum Tarihi</label>
                  <input
                    className="form-input w-full mt-2 rounded-md focus:border-indigo-600"
                    type="date"
                    onChange={(e) =>
                      dispatch({
                        type: "personelDogumTarihi",
                        payload: e.target.value,
                      })
                    }
                  />
                  {state.errors.DogumTarihi && <div className='error'>{state.errors.DogumTarihi}</div>}

                </div>

                <div>
                  <label className="text-gray-700">Doğum Yeri</label>
                  <input
                    className="form-input w-full mt-2 rounded-md focus:border-indigo-600"
                    type="text"
                    placeholder="Doğum Yerini Giriniz"
                    onChange={(e) =>
                      dispatch({
                        type: "personelDogumYeri",
                        payload: e.target.value,
                      })
                    }
                  />
                  {state.errors.DogumYeri && <div className='error'>{state.errors.DogumYeri}</div>}

                </div>

                <div>
                  <label className="text-gray-700">TC</label>
                  <input
                    className="form-input w-full mt-2 rounded-md focus:border-indigo-600"
                    type="text"
                    placeholder="TC Kimlik Numarası Giriniz"
                    onChange={(e) =>
                      dispatch({ type: "personelTC", payload: e.target.value })
                    }
                  />
                  {state.errors.TcNo && <div className='error'>{state.errors.TcNo}</div>}
                </div>

                <div>
                  <label className="text-gray-700">İşe Giriş Tarihi</label>
                  <input
                    className="form-input w-full mt-2 rounded-md focus:border-indigo-600"
                    type="date"
                    onChange={(e) =>
                      dispatch({
                        type: "personelIseGirisTarihi",
                        payload: e.target.value,
                      })
                    }
                  />
                  {state.errors.IseGirisTarih && <div className='error'>{state.errors.IseGirisTarih}</div>}

                </div>

                <div>
                  <label className="text-gray-700">İşten Çıkış Tarihi</label>
                  <input
                    className="form-input w-full mt-2 rounded-md focus:border-indigo-600"
                    type="date"
                    onChange={(e) =>
                      dispatch({
                        type: "personelIstenCikisTarihi",
                        payload: e.target.value,
                      })
                    }
                  />
                </div>

                <div className="mt-5">
                  <label className="text-gray-700">Aktiflik Durumu</label>
                  <label className="switch ml-3">
                    <input
                      className="form-input w-full mt-2 rounded-md focus:border-indigo-600"
                      type="checkbox"
                      checked={state.personelAktiflikDurumu}
                      onChange={e => dispatch({ type: "personelAktiflikDurumu", payload: e.target.checked })}
                    />
                    <span className="slider"></span>
                  </label>
                </div>

                <div>
                  <label className="text-gray-700">Meslek</label>
                  <input
                    className="form-input w-full mt-2 rounded-md focus:border-indigo-600"
                    type="text"
                    placeholder="Mesleğinizi Giriniz"
                    onChange={(e) =>
                      dispatch({
                        type: "personelMeslek",
                        payload: e.target.value,
                      })
                    }
                  />
                  {state.errors.Meslek && <div className='error'>{state.errors.Meslek}</div>}

                </div>

                <div>
                  <label className="text-gray-700">Departman</label>
                  <input
                    className="form-input w-full mt-2 rounded-md focus:border-indigo-600"
                    type="text"
                    placeholder="Departmanınızı Giriniz"
                    onChange={(e) =>
                      dispatch({
                        type: "personelDepartman",
                        payload: e.target.value,
                      })
                    }
                  />
                  {state.errors.Departman && <div className='error'>{state.errors.Departman}</div>}

                </div>


                <div>
                  <label className="text-gray-700">Email</label>
                  <input
                    className="form-input w-full mt-2 rounded-md focus:border-indigo-600"
                    type="email"
                    placeholder="Email Adresinizi Giriniz"
                    onChange={(e) =>
                      dispatch({
                        type: "personelEmail",
                        payload: e.target.value,
                      })
                    }
                  />
                  {state.errors.Email && <div className='error'>{state.errors.Email}</div>}

                </div>

                <div>
                  <label className="text-gray-700">Adres</label>
                  <input
                    className="form-input w-full mt-2 rounded-md focus:border-indigo-600"
                    type="text"
                    placeholder="Adresinizi Giriniz"
                    onChange={(e) =>
                      dispatch({
                        type: "personelAdres",
                        payload: e.target.value,
                      })
                    }
                  />
                  {state.errors.Adres && <div className='error'>{state.errors.Adres}</div>}

                </div>

                <div>
                  <label className="text-gray-700">Telefon</label>
                  <input
                    className="form-input w-full mt-2 rounded-md focus:border-indigo-600"
                    type="tel"
                    placeholder="Telefon Numaranızı Giriniz"
                    onChange={(e) =>
                      dispatch({
                        type: "personelTelefon",
                        payload: e.target.value,
                      })
                    }
                  />
                  {state.errors.PhoneNumber && <div className='error'>{state.errors.PhoneNumber}</div>}

                </div>

                <div>
                  <label className="text-gray-700">Maaş</label>
                  <input
                    className="form-input w-full mt-2 rounded-md focus:border-indigo-600"
                    type="number"
                    placeholder="Maaşınızı Giriniz"
                    onChange={(e) =>
                      dispatch({
                        type: "personelMaas",
                        payload: parseFloat(e.target.value),
                      })
                    }
                  />
                  {state.errors.Maas && <div className='error'>{state.errors.Maas}</div>}

                </div>



                <div className="flex justify-end mt-4">
                  <input
                    className="px-4 py-2 bg-gray-800 text-gray-200 rounded-md hover:bg-gray-700 focus:outline-none focus:bg-gray-700"
                    type="submit"
                    value="Ekle"
                  />
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default PersonelEklePage;
