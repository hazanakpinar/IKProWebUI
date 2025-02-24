import "./assets/style/index.scss";
import { Routes, Route, BrowserRouter as Router } from "react-router-dom";
import Layout from "./components/Layout";
import LoginPage from "./pages/LoginPage";
import YoneticiAnasayfa from "./pages/YoneticiAnasayfa";
import YoneticiDetay from "./pages/YoneticiDetay";
import Sirket from "./pages/Sirket";
import SirketYoneticiListePage from "./pages/SirketYoneticiListePage";
import SirketYoneticiDetay from "./pages/SirketYoneticiDetay";
import SirketDetay from "./pages/SirketDetayPage";
import SirketEklePage from "./pages/SirketEklePage";
import SirketYoneticiEklePage from "./pages/SirketYoneticiEklePage";
import PaketEklePage from "./pages/PaketEklePage";
import IzinTalepPage from "./pages/IzinTalepPage";
import HarcamaTalepPage from "./pages/HarcamaTalepPage";
import AvansTalepPage from "./pages/AvansTalepPage";
import PersonelAnasayfa from "./pages/PersonelAnasayfa";
import PersonelDetayPage from "./pages/PersonelDetayPage";
import IzinTalepListePage from "./pages/IzinTalepListePage";
import HarcamaTalepListePage from "./pages/HarcamaTalepListePage";
import AvansTalepListePage from "./pages/AvansTalepListePage";
import SirketYoneticiAnasayfa from "./pages/SirketYoneticiAnasayfa";
import PersonelEklePage from "./pages/PersonelEklePage";
import SifremiUnuttumPage from "./pages/SifremiUnuttumPage";
import { AuthProvider } from "./context/AuthContext";
import ProtectedRoute from "./pages/ProtectedRoute";
import { DataProvider } from "./context/DataContext";
import Unauthorized from "./pages/errorPages/UnAuthorized";
import PersonelListePage from "./pages/PersonelListePage";
import { ToastContainer, toast } from 'react-toastify';

function App() {
  return (
    <AuthProvider>
      <DataProvider>
        <ToastContainer />
        <Routes>
          {/* Login rotası */}
          <Route index element={<LoginPage />} />
          <Route path="/unauthorized" element={<Unauthorized />} />

          {/* Korumalı rotalar */}
          <Route path="/" element={<Layout />}>
            <Route
              path="/YoneticiAnasayfa"
              element={
                <ProtectedRoute roles="Admin">
                  <YoneticiAnasayfa />
                </ProtectedRoute>
              }
            />
            <Route
              path="/YoneticiDetay/:yoneticiID"
              element={
                <ProtectedRoute roles="Admin">
                  <YoneticiDetay />
                </ProtectedRoute>
              }
            />
            <Route
              path="/PersonelAnasayfa"
              element={
                <ProtectedRoute roles="Personel">
                  <PersonelAnasayfa />
                </ProtectedRoute>
              }
            />
            <Route
              path="/Sirket"
              element={
                <ProtectedRoute roles="Admin">
                  <Sirket />
                </ProtectedRoute>
              }
            />
            <Route
              path="/SirketYoneticiAnasayfa"
              element={
                <ProtectedRoute roles="SirketYonetici">
                  <SirketYoneticiAnasayfa />
                </ProtectedRoute>
              }
            />
            <Route
              path="/PersonelListePage"
              element={
                <ProtectedRoute roles="SirketYonetici">
                  <PersonelListePage />
                </ProtectedRoute>
              }
            />
            <Route
              path="/SirketYoneticiEkle"
              element={
                <ProtectedRoute roles="Admin">
                  <SirketYoneticiEklePage />
                </ProtectedRoute>
              }
            />
            <Route
              path="/SirketYoneticiListe"
              element={
                <ProtectedRoute roles="Admin">
                  <SirketYoneticiListePage />
                </ProtectedRoute>
              }
            />
            <Route
              path="/SirketYoneticiDetay/:id"
              element={
                <ProtectedRoute roles="SirketYonetici,Admin">
                  <SirketYoneticiDetay />
                </ProtectedRoute>
              }
            />
            <Route
              path="/SirketDetay/:sirketID"
              element={
                <ProtectedRoute roles="Admin">
                  <SirketDetay />
                </ProtectedRoute>
              }
            />
            <Route
              path="/SirketEkle"
              element={
                <ProtectedRoute roles="Admin">
                  <SirketEklePage />
                </ProtectedRoute>
              }
            />
            <Route
              path="/PaketEkle"
              element={
                <ProtectedRoute roles="Admin">
                  <PaketEklePage />
                </ProtectedRoute>
              }
            />
            <Route
              path="/IzinTalepEkle"
              element={
                <ProtectedRoute roles="Personel">
                  <IzinTalepPage />
                </ProtectedRoute>
              }
            />
            <Route
              path="/HarcamaTalepEkle"
              element={
                <ProtectedRoute roles="Personel">
                  <HarcamaTalepPage />
                </ProtectedRoute>
              }
            />
            <Route
              path="/AvansTalepEkle"
              element={
                <ProtectedRoute roles="Personel">
                  <AvansTalepPage />
                </ProtectedRoute>
              }
            />
            <Route
              path="/IzinTalepListele"
              element={
                <ProtectedRoute roles={["Personel", "SirketYonetici"]}>
                  <IzinTalepListePage />
                </ProtectedRoute>
              }
            />
            <Route
              path="/HarcamaTalepListele"
              element={
                <ProtectedRoute roles={["Personel", "SirketYonetici"]}>
                  <HarcamaTalepListePage />
                </ProtectedRoute>
              }
            />
            <Route
              path="/AvansTalepListele"
              element={
                <ProtectedRoute roles={["Personel", "SirketYonetici"]}>
                  <AvansTalepListePage />
                </ProtectedRoute>
              }
            />
            <Route
              path="/PersonelDetayPage/:id"
              element={
                <ProtectedRoute roles={["Personel", "SirketYonetici"]}>
                  <PersonelDetayPage />
                </ProtectedRoute>
              }
            />
            <Route
              path="/PersonelEkle"
              element={
                <ProtectedRoute roles="SirketYonetici">
                  <PersonelEklePage />
                </ProtectedRoute>
              }
            />
            <Route path="/SifremiUnuttum" element={<SifremiUnuttumPage />} />
          </Route>
        </Routes>
      </DataProvider>
    </AuthProvider>
  );
}

export default App;
