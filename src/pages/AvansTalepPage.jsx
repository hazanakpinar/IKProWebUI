import React, { useContext } from 'react'
import '../assets/style/sirketEkle.scss'
import DataContext from '../context/DataContext'

const AvansTalepPage = () => {

  const { state,dispatch, handleAvansTalepGonder } = useContext(DataContext);

  return (
    <>
      <div className='avans-talep-ekle mt-8'>

        <div className="mt-4">
          <div className="p-6 bg-white rounded-md shadow-md">
            <h2 className="text-lg text-gray-700 font-semibold capitalize text-center mb-8">Avans Talep Oluştur</h2>

            <form onSubmit={handleAvansTalepGonder}>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mt-4">
                <div>
                  <label className="text-gray-700">Avans Türü</label>
                  <input className="form-input w-full mt-2 rounded-md focus:border-indigo-600" type="text" onChange={e => dispatch({ type: "avansTuru", payload: e.target.value })} />
                  {state.errors.AvansTuru && <div className='error'>{state.errors.AvansTuru}</div>}
                </div>
                <div>
                  <label className="text-gray-700">Avans Tutarı</label>
                  <input className="form-input w-full mt-2 rounded-md focus:border-indigo-600" type="number" onChange={e => dispatch({ type: "avansTutar", payload: parseFloat( e.target.value )})} />
                  {state.errors.Tutar && <div className='error'>{state.errors.Tutar}</div>}
                </div>
                <div>
                  <label className="text-gray-700">Para Birimi</label>
                  <select
                    className="form-input w-full mt-2 rounded-md focus:border-indigo-600 bg-gray-200"
                    onChange={(e) =>
                      dispatch({ type: "avansParaBirimi", payload: e.target.value })
                    }
                  >
                    <option value="">Para Birimi Seçiniz</option>
                    <option value="TRY">TRY</option>
                    <option value="USD">USD</option>
                    <option value="EUR">EUR</option>
                  </select>
                     {state.errors.ParaBirimi && <div className='error'>{state.errors.ParaBirimi}</div>}
                </div>
                <div>
                  <label className="text-gray-700">Açıklama</label>
                  <input className="form-input w-full mt-2 rounded-md focus:border-indigo-600" type="text" onChange={e => dispatch({ type: "aciklama", payload: e.target.value })} />
                  {state.errors.Aciklama && <div className='error'>{state.errors.Aciklama}</div>}
                </div>
                {/* <div>
                  <label className="text-gray-700">Onay Durumu (bunu cevap olarak alıp göstericez)</label>
                  <input readOnly disabled className="form-input w-full mt-2 rounded-md focus:border-indigo-600" type="text" onChange={e => dispatch({ type: "onayDurumu", payload: e.target.value })} />
                </div> */}
                {/* <div>
                  <label className="text-gray-700">Cevaplanma Tarihi</label>
                  <input readOnly disabled className="form-input w-full mt-2 rounded-md focus:border-indigo-600" type="date" onChange={e => dispatch({ type: "cevaplanmaTarihi", payload: e.target.value })} />
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

export default AvansTalepPage
