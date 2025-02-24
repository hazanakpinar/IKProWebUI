import React from 'react';
import { Outlet } from 'react-router-dom';  // Outlet, Route içeriği için
import SideBarMenu from './SideBarMenu';
import '../assets/style/layout.scss';

const Layout = () => {
    return (
        <div className="layout">
            <div className="side-bar-menu">
                <SideBarMenu /> {/* Sidebar Menüsünü buraya yerleştiriyoruz */}
            </div>
            <div className="page-content bg-gray-200">
                <Outlet /> {/* Sayfa içeriği burada gösterilecek */}
            </div>
        </div>
    );
};

export default Layout;
