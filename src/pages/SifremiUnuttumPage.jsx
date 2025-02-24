import React, { useContext } from "react";
import "../assets/style/sirketEkle.scss";
import DataContext from "../context/DataContext";

const SifremiUnuttumPage = () => {
  const { dispatch, handleSifremiUnuttumSubmit } = useContext(DataContext);

  return (
    <>
      <div className="sifremi-unuttum mt-8">
        <div className="mt-4">
          <div className="p-6 bg-white rounded-md shadow-md">
            <h2 className="text-lg text-gray-700 font-semibold capitalize text-center mb-8">
              Şifremi Unuttum
            </h2>

            <form onSubmit={handleSifremiUnuttumSubmit}>
              <div className="flex justify-center mt-4">
                <div>
                  <label className="text-gray-700 flex justify-center">Mail</label>
                  <input
                    className="form-input-sifre  mt-2 rounded-md focus:border-indigo-300"
                    type="text"
                    onChange={(e) =>
                      dispatch({ type: "email", payload: e.target.value })
                    }
                  />
                </div>
              </div>

              <div className="flex justify-center mt-4">
                <input
                  className="px-4 py-2 bg-gray-800 text-gray-200 rounded-md hover:bg-gray-700 focus:outline-none focus:bg-gray-700"
                  type="submit"
                  value="ŞİFRE SIFIRLA"
                />
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default SifremiUnuttumPage;
