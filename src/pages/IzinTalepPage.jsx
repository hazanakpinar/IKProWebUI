import React, { useContext } from 'react'
import '../assets/style/sirketEkle.scss'
import DataContext from '../context/DataContext'

const IzinTalepPage = () => {

  const { state,dispatch, handleIzinTalepGonder } = useContext(DataContext);

  return (
    <>
      <div className='izin-talep-ekle mt-8'>

        <div className="mt-4">
          <div className="p-6 bg-white rounded-md shadow-md">
            <h2 className="text-lg text-gray-700 font-semibold capitalize text-center mb-8">İzin Talep Oluştur</h2>

            <form onSubmit={handleIzinTalepGonder}>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mt-4">
                <div>
                  <label className="text-gray-700">İzin Türü</label>
                  <input className="form-input w-full mt-2 rounded-md focus:border-indigo-600" type="text" onChange={e => dispatch({ type: "izinTuru", payload: e.target.value })} />
                  {state.errors.IzinTuru && <div className='error'>{state.errors.IzinTuru}</div>}
                </div>
                <div>
                  <label className="text-gray-700">Başlangıç Tarihi</label>
                  <input className="form-input w-full mt-2 rounded-md focus:border-indigo-600" type="date" onChange={e => dispatch({ type: "baslangicTarihi", payload: e.target.value })} />
                  {state.errors.BaslangicTarihi && <div className='error'>{state.errors.BaslangicTarihi}</div>}
                </div>
                <div>
                  <label className="text-gray-700">Bitiş Tarihi</label>
                  <input className="form-input w-full mt-2 rounded-md focus:border-indigo-600" type="date" onChange={e => dispatch({ type: "bitisTarihi", payload: e.target.value })} />
                  {state.errors.BitisTarihi && <div className='error'>{state.errors.BitisTarihi}</div>}
                </div>
                <div>
                  <label className="text-gray-700">Gün Sayısı</label>
                  <input className="form-input w-full mt-2 rounded-md focus:border-indigo-600" type="number" onChange={e => dispatch({ type: "gunSayisi", payload: e.target.value })} />
                  {state.errors.GunSayisi && <div className='error'>{state.errors.GunSayisi}</div>}
                </div>
                {/* <div>
                  <label className="text-gray-700">Onay Durumu (bunu cevap olarak alıp göstericez)</label>
                  <input readOnly className="form-input w-full mt-2 rounded-md focus:border-indigo-600" type="text" onChange={e => dispatch({ type: "onayDurumu", payload: e.target.value })} />
                </div>
                <div>
                  <label className="text-gray-700">Cevaplanma Tarihi</label>
                  <input disabled readOnly className="form-input w-full mt-2 rounded-md focus:border-indigo-600" type="date" onChange={e => dispatch({ type: "cevaplanmaTarihi", payload: e.target.value })} />
                </div> */}

              </div>

              <div className="flex justify-end mt-4">
                <input className="px-4 py-2 bg-gray-800 text-gray-200 rounded-md hover:bg-gray-700 focus:outline-none focus:bg-gray-700" type="submit" value="EKLE" />
              </div>

            </form>
          </div>
        </div>
      </div>
    </>
  )
}

export default IzinTalepPage

