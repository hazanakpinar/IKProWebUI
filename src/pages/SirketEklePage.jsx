import React, { useContext } from 'react'
import '../assets/style/sirketEkle.scss'
import DataContext from '../context/DataContext'

const SirketEklePage = () => {

  const { handleSubmitSirket, state, dispatch } = useContext(DataContext);

  return (
    <>
      <div className='sirket-ekle mt-8'>

        <div className="mt-4">
          <div className="p-6 bg-white rounded-md shadow-md">
            <h2 className="text-lg text-gray-700 font-semibold capitalize text-center mb-8">Şirket Ekle</h2>

            <form onSubmit={handleSubmitSirket}>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mt-4">
                <div>
                  <label className="text-gray-700">Ad</label>
                  <input className="form-input w-full mt-2 rounded-md focus:border-indigo-600" type="text" onChange={e => dispatch({ type: "sirketAd", payload: e.target.value })} />
                  {state.errors.Ad && <div className='error'>{state.errors.Ad}</div>}
                </div>
                <div>
                  <label className="text-gray-700">Unvan</label>
                  <input className="form-input w-full mt-2 rounded-md focus:border-indigo-600" type="text" onChange={e => dispatch({ type: "sirketUnvan", payload: e.target.value })} />
                  {state.errors.Unvan && <div className='error'>{state.errors.Unvan}</div>}

                </div>
                <div>
                  <label className="text-gray-700">Mersis No</label>
                  <input className="form-input w-full mt-2 rounded-md focus:border-indigo-600" type="text" onChange={e => dispatch({ type: "sirketMersisNo", payload: e.target.value })} />
                  {state.errors.MersisNo && <div className='error'>{state.errors.MersisNo}</div>}

                </div>
                <div>
                  <label className="text-gray-700">Vergi No</label>
                  <input className="form-input w-full mt-2 rounded-md focus:border-indigo-600" type="text" onChange={e => dispatch({ type: "sirketVergiNo", payload: e.target.value })} />
                  {state.errors.VergiNo && <div className='error'>{state.errors.VergiNo}</div>}
                </div>
                <div>
                  <label className="text-gray-700">Vergi Dairesi</label>
                  <input className="form-input w-full mt-2 rounded-md focus:border-indigo-600" type="text" onChange={e => dispatch({ type: "sirketVergiDairesi", payload: e.target.value })} />
                  {state.errors.VergiDairesi && <div className='error'>{state.errors.VergiDairesi}</div>}
                </div>
                <div>
                  <label className="text-gray-700">Logo</label>
                  <input
                    className="form-input w-full mt-2 rounded-md focus:border-indigo-600"
                    type="file"
                    accept=".jpg, .jpeg, .png"
                    onChange={(e) => {
                      const file = e.target.files[0];
                      if (file) {
                        const reader = new FileReader();
                        reader.onload = () => dispatch({ type: "sirketLogo", payload: (reader.result) }); // Base64 olarak yükle
                        reader.readAsDataURL(file);
                      }
                    }}
                  />
                  {state.errors.Logo && <div className='error'>{state.errors.Logo}</div>}
                </div>
                <div>
                  <label className="text-gray-700">Telefon Numarası</label>
                  <input className="form-input w-full mt-2 rounded-md focus:border-indigo-600" type="number" onChange={e => dispatch({ type: "sirketTelefon", payload: e.target.value })} />
                  {state.errors.Telefon && <div className='error'>{state.errors.Telefon}</div>}
                </div>
                <div>
                  <label className="text-gray-700">Adres</label>
                  <input className="form-input w-full mt-2 rounded-md focus:border-indigo-600" type="text" onChange={e => dispatch({ type: "sirketAdres", payload: e.target.value })} />
                  {state.errors.Adres && <div className='error'>{state.errors.Adres}</div>}
                </div>
                <div>
                  <label className="text-gray-700">Email</label>
                  <input className="form-input w-full mt-2 rounded-md focus:border-indigo-600" type="text" onChange={e => dispatch({ type: "sirketEmail", payload: e.target.value })} />
                  {state.errors.Email && <div className='error'>{state.errors.Email}</div>}
                </div>
                <div>
                  <label className="text-gray-700">Çalışan Sayısı</label>
                  <input className="form-input w-full mt-2 rounded-md focus:border-indigo-600" type="number" onChange={e => dispatch({ type: "sirketCalisanSayisi", payload: e.target.value })} />
                  {state.errors.CalisanSayisi && <div className='error'>{state.errors.CalisanSayisi}</div>}
                </div>
                <div>
                  <label className="text-gray-700">Kuruluş yılı</label>
                  <input className="form-input w-full mt-2 rounded-md focus:border-indigo-600" type="number" onChange={e => dispatch({ type: "sirketKurulusYili", payload: e.target.value })} />
                  {state.errors.KurulusYili && <div className='error'>{state.errors.KurulusYili}</div>}
                </div>
                <div>
                  <label className="text-gray-700">Sözleşme Başlangıc Tarihi</label>
                  <input className="form-input w-full mt-2 rounded-md focus:border-indigo-600" type="date" onChange={e => dispatch({ type: "sirketSozlesmeBaslangic", payload: e.target.value })} />
                  {state.errors.SozlesmeBaslangic && <div className='error'>{state.errors.SozlesmeBaslangic}</div>}
                </div>
                <div>
                  <label className="text-gray-700">Sözleşme Bitiş Tarihi</label>
                  <input className="form-input w-full mt-2 rounded-md focus:border-indigo-600" type="date" onChange={e => dispatch({ type: "sirketSozlesmeBitis", payload: e.target.value })} />
                  {state.errors.SozlesmeBitis && <div className='error'>{state.errors.SozlesmeBitis}</div>}
                </div>
                <div className='mt-6'>
                  <label className="text-gray-700">Aktiflik Durumu</label>
                  <label className="switch ml-3">
                    <input
                      className="form-input w-full mt-2 rounded-md focus:border-indigo-600"
                      type="checkbox"
                      checked={state.sirketAktiflikDurumu}
                      onChange={(e) => dispatch({ type: "sirketAktiflikDurumu", payload: e.target.checked })}
                    />
                    <span className="slider"></span>
                  </label>
                </div>
                <div>
                  <label className="text-gray-700">Paket</label>
                  <select
                    className="form-input w-full mt-2 rounded-md focus:border-indigo-600 bg-gray-200"
                    onChange={e => dispatch({ type: "paketId", payload: e.target.value })}
                  >
                    <option value="">Paket Seçiniz</option>
                    {state.paketler.map((paketItem) => (
                      <option key={paketItem.paketID} value={paketItem.paketID}>
                        {paketItem.paketAdi}
                      </option>
                    ))}
                  </select>
                  {state.errors.PaketID && <div className='error'>{state.errors.PaketID}</div>}
                </div>


              </div>

              <div className="flex justify-end mt-4">
                <input className=" ekle px-4 py-2 bg-gray-800 text-gray-200 rounded-md hover:bg-gray-700 focus:outline-none focus:bg-gray-700" type="submit"
                  value="EKLE" />

              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  )
}

export default SirketEklePage
