import React, { useContext } from 'react'
import '../assets/style/sirket.scss'
import { Link } from 'react-router-dom';
import DataContext from '../context/DataContext';
import defaultLogo from "../assets/img/logo3.png"; // Default logo yolu


const Sirket = () => {
    const { state } = useContext(DataContext)
    const sirketler = state.sirketler;
    return (
        <div className="flex flex-col mt-8 sirketler">
            <div className="-my-2 py-2 overflow-x-auto sm:-mx-6 sm:px-6 lg:-mx-8 lg:px-8">
                <div className="align-middle inline-block min-w-full shadow overflow-hidden sm:rounded-lg border-b border-gray-200 Hazan">
                    <table className="min-w-full">
                        <thead>
                            <tr>
                                {/* <th className="px-6 py-6 border-b border-gray-200 bg-gray-50 text-left text-xl leading-4 font-medium text-gray-900 uppercase tracking-wider">
                                    Logo
                                </th> */}
                                <th className="px-6 py-6 border-b border-gray-200 bg-gray-50 text-left text-xl leading-4 font-medium text-gray-900 uppercase tracking-wider">
                                    Şirket Adı
                                </th>
                                <th className="px-6 py-6 border-b border-gray-200 bg-gray-50 text-left text-xl leading-4 font-medium text-gray-900 uppercase tracking-wider">
                                    Unvan
                                </th>
                                <th className="px-6 py-6 border-b border-gray-200 bg-gray-50 text-left text-xl leading-4 font-medium text-gray-900 uppercase tracking-wider">
                                    İletişim
                                </th>
                                <th className="px-6 py-3 border-b border-gray-200 bg-gray-50"></th>
                            </tr>
                        </thead>

                        <tbody className="bg-white">
                            {sirketler.length === 0 ? (
                                <tr>
                                    <td colSpan="5" className="text-center py-4">
                                        Yükleniyor...
                                    </td>
                                </tr>
                            ) : (
                                sirketler.map((sirketInfo) => (
                                    <tr key={sirketInfo.sirketID}>
                                        {/* <td className="px-6 py-4 whitespace-no-wrap border-b border-gray-200">
                                            <div className="flex items-center">
                                                <div className="flex-shrink-0 h-10 w-10">
                                                    <img
                                                        className="h-10 w-10 rounded-full"
                                                        src={sirketInfo.logo} // Logo varsa kullan, yoksa default
                                                        alt={sirketInfo.ad}
                                                    />
                                                </div>
                                            </div>
                                        </td> */}

                                        <td className="px-6 py-4 whitespace-no-wrap border-b border-gray-200">
                                            <div className="text-sm leading-5 font-medium text-gray-900">
                                                {sirketInfo.ad}
                                            </div>
                                        </td>

                                        <td className="px-6 py-4 whitespace-no-wrap border-b border-gray-200">
                                            <div className="text-sm leading-5 text-gray-900">
                                                {sirketInfo.unvan}
                                            </div>
                                        </td>

                                        <td className="px-6 py-4 whitespace-no-wrap border-b border-gray-200">
                                            <div className="text-sm leading-5 text-gray-500">
                                                Email: {sirketInfo.email}
                                            </div>
                                            <div className="text-sm leading-5 text-gray-500">
                                                Telefon: {sirketInfo.telefon}
                                            </div>
                                        </td>

                                        <td className="px-6 py-4 whitespace-no-wrap text-right border-b border-gray-200 text-sm leading-5 font-medium">
                                            <Link
                                                to={`/SirketDetay/${sirketInfo.sirketID}`}
                                                state={{ sirketInfoDetay: sirketInfo }}

                                                className="text-indigo-600 hover:text-indigo-900"
                                            >
                                                Detayları Görüntüle
                                            </Link>
                                        </td>
                                    </tr>
                                ))
                            )}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};


export default Sirket
