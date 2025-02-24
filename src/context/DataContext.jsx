import { createContext, useEffect, useReducer } from "react";
import axios from "axios";
import { initialState, reducer } from "../reducer/reducer";
import { useLocation, useNavigate } from "react-router-dom";
import { useAuth } from "./AuthContext";
import * as Yup from "yup";
import { Bounce, toast } from "react-toastify";
import { baseUrl } from "../base";

const DataContext = createContext();

export const DataProvider = ({ children }) => {
  const { user } = useAuth();
  const location = useLocation();
  const [state, dispatch] = useReducer(reducer, initialState);
  // const baseUrl = import.meta.env.VITE_BaseUrl;
  const currentYear = new Date().getFullYear();
  const navigate = useNavigate();

  const sirketValidate = {
    Ad: state.sirketAd,
    Unvan: state.sirketUnvan,
    MersisNo: state.sirketMersisNo,
    VergiNo: state.sirketVergiNo,
    VergiDairesi: state.sirketVergiDairesi,
    Logo: state.sirketLogo,
    Telefon: state.sirketTelefon,
    Adres: state.sirketAdres,
    Email: state.sirketEmail,
    CalisanSayisi: state.sirketCalisanSayisi,
    KurulusYili: state.sirketKurulusYili,
    SozlesmeBaslangic: state.sirketSozlesmeBaslangic,
    SozlesmeBitis: state.sirketSozlesmeBitis,
    PaketID: state.paketId,
  };

  const sirketYoneticiValidate = {
    Adi: state.sirketYoneticiAdi,
    Soyadi: state.sirketYoneticiSoyadi,
    DogumTarihi: state.sirketYoneticiDogumTarihi,
    DogumYeri: state.sirketYoneticiDogumYeri,
    TcNo: state.sirketYoneticiTcNo,
    IseGirisTarih: state.sirketYoneticiIseGiris,
    Meslek: state.sirketYoneticiMeslek,
    Departman: state.sirketYoneticiDepartman,
    Email: state.sirketYoneticiEmail,
    PhoneNumber: state.sirketYoneticiTelefon,
    SirketID: state.sirketYoneticiSirketId,
    Adres: state.sirketYoneticiAdres,
    Fotograf: state.sirketYoneticiFotograf,
  };

  const personelValidate = {
    Fotograf: state.personelFotograf,
    Adi: state.personelAd,
    Soyadi: state.personelSoyad,
    DogumTarihi: state.personelDogumTarihi,
    DogumYeri: state.personelDogumYeri,
    TcNo: state.personelTC,
    IseGirisTarih: state.personelIseGirisTarihi,
    Meslek: state.personelMeslek,
    Departman: state.personelDepartman,
    SirketID: state.personelSirketId,
    Email: state.personelEmail,
    Adres: state.personelAdres,
    PhoneNumber: state.personelTelefon,
    Maas: state.personelMaas,
  };

  const izinValidate = {
    IzinTuru: state.izinTuru,
    BaslangicTarihi: state.baslangicTarihi,
    BitisTarihi: state.bitisTarihi,
    GunSayisi: state.gunSayisi,
  };
  const avansValidate = {
    AvansTuru: state.avansTuru,
    Tutar: state.avansTutar,
    ParaBirimi: state.avansParaBirimi,
    Aciklama: state.aciklama,
  };
  const harcamaValidate = {
    HarcamaTuru: state.harcamaTuru,
    Tutar: state.harcamaTutar,
    ParaBirimi: state.harcamaParaBirimi,
    DosyaEkleme: state.dosyaEkleme,
  };
  const paketValidate = {
    PaketAdi: state.paketAdi,
    PaketSuresi: state.sure,
    YayinlanmaTarihi: state.yayinlanmaTarihi,
    YayindanKaldirilmaTarihi: state.yayindanKaldirilmaTarihi,
    Fiyat: state.fiyati,
    Aktif: state.paketAktiflikDurumu,
    KullaniciSayisi: state.kullaniciSayisi,
    ParaBirimi: state.paketParaBirimi,
  };
  const getSirketler = async () => {
    const url = `${baseUrl}Sirket`;
    const response = await axios.get(url);
    const tumSirketler = response.data;
    dispatch({ type: "getSirketler", payload: tumSirketler });
  };

  const getYoneticiler = async () => {
    const url = `${baseUrl}User/sirketyoneticilistesi`;
    const response = await axios.get(url);
    const tumYoneticiler = response.data;
    dispatch({ type: "getYoneticiler", payload: tumYoneticiler });
  };

  const getSirketYonetici = async (id) => {
    const url = `${baseUrl}User/sirketyonetici/${id}`;
    const response = await axios.get(url);
    const sirketYoneticiBilgisi = response.data;
    dispatch({
      type: "getSirketYoneticiDetay",
      payload: sirketYoneticiBilgisi,
    });
  };
  const getAdminDetay = async (id) => {
    const url = `${baseUrl}User/siteyonetici/${id}`;
    const response = await axios.get(url);
    const adminDetails = response.data;
    dispatch({ type: "getAdminDetay", payload: adminDetails });
  };

  const getPaketler = async () => {
    const url = `${baseUrl}Paket/paket-listele`;
    const response = await axios.get(url);
    const tumPaketler = response.data;
    dispatch({ type: "getPaketler", payload: tumPaketler });
  };

  const getIzinTalepler = async () => {
    const url = `${baseUrl}Talep/izinTalepListele/${user.sirketId}`;
    const response = await axios.get(url);
    const tumIzinTalepler = response.data;
    dispatch({ type: "getIzinTalepler", payload: tumIzinTalepler });
  };

  const getHarcamaTalepler = async () => {
    const url = `${baseUrl}Talep/harcamaTalepListele/${user.sirketId}`;
    const response = await axios.get(url);
    const tumHarcamaTalepler = response.data;
    dispatch({ type: "getHarcamaTalepler", payload: tumHarcamaTalepler });
  };

  const getAvansTalepler = async () => {
    const url = `${baseUrl}Talep/avansTalepListele/${user.sirketId}`;
    const response = await axios.get(url);
    const tumAvansTalepler = response.data;
    dispatch({ type: "getAvansTalepler", payload: tumAvansTalepler });
  };

  const getPersoneller = async () => {
    const url = `${baseUrl}User/personelgetir/${user.sirketId}`;
    const response = await axios.get(url);
    const tumPersoneller = response.data;
    dispatch({ type: "getPersoneller", payload: tumPersoneller });
  };

  const getPersonelDetay = async (id) => {
    const url = `${baseUrl}User/personelDetayGetir/${id}`;
    const response = await axios.get(url);
    const personelDetay = response.data;
    dispatch({ type: "getPersonelDetay", payload: personelDetay });
  };

  const addIzinTalep = async (newIzinTalep) => {
    let url = `${baseUrl}Talep/izinTalepEkle`;
    dispatch({ type: "addIzinTalep", newIzinTalep });
    const response = await axios.post(url, newIzinTalep);
    toast.success("İzin Talebi Oluşturuldu!", {
      position: "top-right",
      autoClose: 3500,
      hideProgressBar: false,
      closeOnClick: false,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
      transition: Bounce,
    });
  };

  const addHarcamaTalep = async (newHarcamaTalep) => {
    let url = `${baseUrl}Talep/harcamaTalepEkle`;
    dispatch({ type: "addHarcamaTalep", newHarcamaTalep });
    const response = await axios.post(url, newHarcamaTalep);
    toast.success("Harcama Talebi Oluşturuldu!", {
      position: "top-right",
      autoClose: 3500,
      hideProgressBar: false,
      closeOnClick: false,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
      transition: Bounce,
    });
  };

  const addAvansTalep = async (newAvansTalep) => {
    let url = `${baseUrl}Talep/avansTalepEkle`;
    dispatch({ type: "addAvansTalep", newAvansTalep });
    try {
      const response = await axios.post(url, newAvansTalep);
      if (response.status === 200) {
        toast.success("Avans Talebi Oluşturuldu!", {
          position: "top-right",
          autoClose: 3500,
          hideProgressBar: false,
          closeOnClick: false,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
          transition: Bounce,
        });
      }
    } catch (error) {
      toast.error("Avans Talep eklenemedi!", {
        position: "top-right",
        autoClose: 3500,
        hideProgressBar: false,
        closeOnClick: false,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
        transition: Bounce,
      });
    }
  };

  const addSirket = async (newSirket) => {
    dispatch({ type: "addSirket", newSirket });
    try {
      const response = await axios.post(
        `${baseUrl}Sirket/sirketekle`,
        newSirket
      );
      if (response.status === 200) {
        toast.success("Şirket Eklendi!", {
          position: "top-right",
          autoClose: 3500,
          hideProgressBar: false,
          closeOnClick: false,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
          transition: Bounce,
        });
      }
    } catch (error) {
      toast.error("Şirket eklenemedi!", {
        position: "top-right",
        autoClose: 3500,
        hideProgressBar: false,
        closeOnClick: false,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
        transition: Bounce,
      });
    }
  };

  const addSirketYonetici = async (newSirketYonetici) => {
    dispatch({ type: "addSirketYonetici", newSirketYonetici });
    try {
      const response = await axios.post(
        `${baseUrl}User/sirketyoneticiekle`,
        newSirketYonetici
      );
      if (response.status === 200) {
        toast.success("Şirket Yöneticisi Eklendi!", {
          position: "top-right",
          autoClose: 3500,
          hideProgressBar: false,
          closeOnClick: false,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
          transition: Bounce,
        });
      }
    } catch (error) {
      toast.error("Şirket Yöneticisi Eklenemedi!", {
        position: "top-right",
        autoClose: 3500,
        hideProgressBar: false,
        closeOnClick: false,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
        transition: Bounce,
      });
    }
  };

  const handleSubmitSirket = async (e) => {
    e.preventDefault();
    try {
      await validationSchemaSirket.validate(sirketValidate, {
        abortEarly: false,
      });
      addSirket({
        Ad: state.sirketAd,
        Unvan: state.sirketUnvan,
        MersisNo: state.sirketMersisNo,
        VergiNo: state.sirketVergiNo,
        VergiDairesi: state.sirketVergiDairesi,
        Logo: state.sirketLogo,
        Telefon: state.sirketTelefon,
        Adres: state.sirketAdres,
        Email: state.sirketEmail,
        CalisanSayisi: state.sirketCalisanSayisi,
        KurulusYili: state.sirketKurulusYili,
        SozlesmeBaslangic: new Date(
          state.sirketSozlesmeBaslangic
        ).toISOString(),
        SozlesmeBitis: new Date(state.sirketSozlesmeBitis).toISOString(),
        Aktif: state.sirketAktiflikDurumu,
        PaketID: state.paketId,
      });
    } catch (error) {
      const newErrors = {};

      error.inner.forEach((err) => {
        newErrors[err.path] = err.message;
      });

      dispatch({ type: "errors", payload: newErrors });
    }
  };

  const validationSchemaSirket = Yup.object({
    Ad: Yup.string().required("Şirket Adı Giriniz Lütfen!"),
    Unvan: Yup.string().required("Şirket Unvanı Giriniz Lütfen!"),
    MersisNo: Yup.string()
      .matches(/^\d{16}$/, "Mersis No 16 Haneli Olmalıdır!")
      .required("Mersis No Giriniz Lütfen!"),
    VergiNo: Yup.string()
      .matches(/^\d{10}$/, "Vergi No 10 Haneli Olmalıdır!")
      .required("Vergi No Giriniz Lütfen!"),
    VergiDairesi: Yup.string().required("Vergi Dairesi Giriniz Lütfen!"),
    Logo: Yup.string().required("Logo Giriniz Lütfen!"),
    Telefon: Yup.string()
      .matches(/^\d{11}$/, "Telefon Numarası 11 Haneli Olmalıdır")
      .required("Telefon Numarası Giriniz Lütfen!"),
    Adres: Yup.string().required("Adres Giriniz Lütfen!"),
    Email: Yup.string()
      .email("Geçerli Bir Email Giriniz!")
      .required("Email Giriniz Lütfen!"),
    CalisanSayisi: Yup.string().required("Çalışan Sayısı Giriniz Lütfen!"),
    KurulusYili: Yup.number()
      .transform((value, originalValue) =>
        originalValue === "" ? undefined : value
      )
      .min(1800, "Kuruluş Yılı 1800 Yılından Küçük Olamaz")
      .max(currentYear, `Kuruluş Yılı ${currentYear} Yılından Büyük Olamaz!`)
      .required("Kuruluş Yılı Giriniz Lütfen!"),
    SozlesmeBaslangic: Yup.date()
      .transform((value, originalValue) =>
        originalValue === "" ? undefined : value
      )
      .required("Sözleşme Başlangıç Tarihi Giriniz Lütfen!"),
    SozlesmeBitis: Yup.date()
      .transform((value, originalValue) =>
        originalValue === "" ? undefined : value
      )
      .min(
        Yup.ref("SozlesmeBaslangic"),
        "Sözleşme Bitiş Tarihi, Başlangıç Tarihinden Eski Olamaz!"
      )
      .required("Sözleşme Bitiş Tarihi Giriniz Lütfen!"),
    PaketID: Yup.string()
      .notOneOf([""], "Lütfen Geçerli Bir Paket Seçiniz")
      .required("Paket Seçiniz Lütfen!"),
  });

  const handleSubmitSirketYonetici = async (e) => {
    e.preventDefault();
    try {
      await validationSchemaYonetici.validate(sirketYoneticiValidate, {
        abortEarly: false,
      });
      addSirketYonetici({
        Adi: state.sirketYoneticiAdi,
        Soyadi: state.sirketYoneticiSoyadi,
        IkinciAdi: state.sirketYoneticiIkinciAdi,
        IkinciSoyadi: state.sirketYoneticiIkinciSoyadi,
        DogumTarihi: state.sirketYoneticiDogumTarihi,
        DogumYeri: state.sirketYoneticiDogumYeri,
        TcNo: state.sirketYoneticiTcNo,
        IseGirisTarih: state.sirketYoneticiIseGiris,
        Aktif: state.sirketYoneticiAktiflik,
        Meslek: state.sirketYoneticiMeslek,
        Departman: state.sirketYoneticiDepartman,
        Email: state.sirketYoneticiEmail,
        PhoneNumber: state.sirketYoneticiTelefon,
        SirketID: state.sirketYoneticiSirketId,
        Adres: state.sirketYoneticiAdres,
        Fotograf: state.sirketYoneticiFotograf,
      });
    } catch (error) {
      const newErrors = {};

      error.inner.forEach((err) => {
        newErrors[err.path] = err.message;
      });

      dispatch({ type: "errors", payload: newErrors });
    }
  };

  const validationSchemaYonetici = Yup.object({
    Adi: Yup.string().required("Yönetici Adı Giriniz Lütfen!"),
    Soyadi: Yup.string().required("Yönetici Soyadı Giriniz Lütfen!"),
    DogumTarihi: Yup.date()
      .transform((value, originalValue) =>
        originalValue === "" ? undefined : value
      )
      .required("Doğum Tarihi Giriniz Lütfen!"),
    DogumYeri: Yup.string().required("Doğum Yeri Giriniz Lütfen!"),
    TcNo: Yup.string().required("TC Giriniz Lütfen!"),
    IseGirisTarih: Yup.date()
      .transform((value, originalValue) =>
        originalValue === "" ? undefined : value
      )
      .required("İşe Giriş Tarihi Giriniz Lütfen!"),
    PhoneNumber: Yup.string()
      .matches(/^\d{11}$/, "Telefon Numarası 11 Haneli Olmalıdır")
      .required("Telefon Numarası Giriniz Lütfen!"),
    Adres: Yup.string().required("Adres Giriniz Lütfen!"),
    Email: Yup.string()
      .email("Geçerli Bir Email Giriniz!")
      .required("Email Giriniz Lütfen!"),
    Meslek: Yup.string().required("Meslek Giriniz Lütfen!"),
    Departman: Yup.string().required("Departman Giriniz Lütfen!"),
    Fotograf: Yup.string().required("Fotoğraf Yükleyiniz Lütfen!"),
    SirketID: Yup.string()
      .notOneOf([""], "Lütfen Geçerli Bir Şirket Seçiniz")
      .required("Şirket Seçiniz Lütfen!"),
  });

  // Paket işlemleri

  const addPaket = async (newPaket) => {
    dispatch({ type: "addPaket", newPaket });
    try {
      const response = await axios.post(`${baseUrl}Paket/paket-ekle`, newPaket);
      if (response.status === 200) {
        toast.success("Paket Eklendi!", {
          position: "top-right",
          autoClose: 3500,
          hideProgressBar: false,
          closeOnClick: false,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
          transition: Bounce,
        });
        navigate("/YoneticiAnasayfa");
      }
    } catch (error) {
      toast.error("Paket Eklenemedi!", {
        position: "top-right",
        autoClose: 3500,
        hideProgressBar: false,
        closeOnClick: false,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
        transition: Bounce,
      });
    }
  };

  const validationSchemaPaket = Yup.object({
    PaketAdi: Yup.string().required("Paket Adı Giriniz Lütfen!"),
    PaketSuresi: Yup.string().required("Paket Süresi Giriniz Lütfen!"),
    YayinlanmaTarihi: Yup.date()
      .transform((value, originalValue) =>
        originalValue === "" ? undefined : value
      )
      .required("Yayınlanma Tarihi Giriniz Lütfen!"),
    YayindanKaldirilmaTarihi: Yup.date()
      .transform((value, originalValue) =>
        originalValue === "" ? undefined : value
      )
      .min(
        Yup.ref("YayinlanmaTarihi"),
        "Yayından Kaldırılma Tarihi, Yayınlanma Tarihinden Eski Olamaz!"
      )
      .required("Sözleşme Bitiş Tarihi Giriniz Lütfen!"),
    Fiyat: Yup.string().required("Fiyat Giriniz Lütfen!"),
    Aktif: Yup.string().required("Aktiflik Durumu Seçiniz Lütfen!"),
    KullaniciSayisi: Yup.string().required("Kullanıcı Sayısı Giriniz Lütfen!"),
    ParaBirimi: Yup.string().required("Para Birimi Giriniz Lütfen!"),
  });
  const paketPost = async (e) => {
    e.preventDefault();
    try {
      await validationSchemaPaket.validate(paketValidate, {
        abortEarly: false,
      });
      addPaket({
        PaketAdi: state.paketAdi,
        PaketSuresi: state.sure,
        Fiyat: state.fiyati,
        YayinlanmaTarihi: new Date(state.yayinlanmaTarihi).toISOString(),
        YayindanKaldirilmaTarihi: new Date(
          state.yayindanKaldirilmaTarihi
        ).toISOString(),
        KullaniciSayisi: parseInt(state.kullaniciSayisi, 10),
        ParaBirimi: state.paketParaBirimi,
        Aktif: state.paketAktiflikDurumu,
      });
    } catch (error) {
      const newErrors = {};

      error.inner.forEach((err) => {
        newErrors[err.path] = err.message;
      });

      dispatch({ type: "errors", payload: newErrors });
    }
  };

  const updateAdmin = async (e) => {
    e.preventDefault();
    const updatedData = {
      id: 1,
      Fotograf: state.fotograf || state.adminDetay.fotograf,
      Adres: state.adres,
      PhoneNumber: state.phoneNumber,
    };
    try {
      const response = await axios.put(
        `${baseUrl}User/siteyonetici`,
        updatedData
      );
      if (response.status === 200) {
        toast.success("Admin Güncellendi!", {
          position: "top-right",
          autoClose: 3500,
          hideProgressBar: false,
          closeOnClick: false,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
          transition: Bounce,
        });
      }
    } catch (error) {
      toast.error("Admin Güncellenemedi!", {
        position: "top-right",
        autoClose: 3500,
        hideProgressBar: false,
        closeOnClick: false,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
        transition: Bounce,
      });
    }
  };

  const updateSirketYonetici = async (e) => {
    e.preventDefault();
    const updatedData = {
      id: state.sirketYoneticiDetay?.id,
      Fotograf: state.sirketYoneticiFotograf || state.fotograf,
      Adres: state.yoneticiAdres,
      PhoneNumber: state.yoneticiTelefon,
    };
    try {
      const response = await axios.put(
        `${baseUrl}User/sirketyoneticiguncelle`,
        updatedData
      );
      if (response.status === 200) {
        toast.success("Şirket Yöneticisi Güncellendi!", {
          position: "top-right",
          autoClose: 3500,
          hideProgressBar: false,
          closeOnClick: false,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
          transition: Bounce,
        });
      }
    } catch (error) {
      toast.error("Şirket Yöneticisi Güncellenemedi!", {
        position: "top-right",
        autoClose: 3500,
        hideProgressBar: false,
        closeOnClick: false,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
        transition: Bounce,
      });
    }
  };

  const validationSchemaIzinTalep = Yup.object({
    IzinTuru: Yup.string().required("İzin Türü Giriniz Lütfen!"),
    BaslangicTarihi: Yup.date()
      .transform((value, originalValue) =>
        originalValue === "" ? undefined : value
      )
      .required("Başlangıç Tarihi Giriniz Lütfen!"),
    BitisTarihi: Yup.date()
      .transform((value, originalValue) =>
        originalValue === "" ? undefined : value
      )
      .min(
        Yup.ref("BaslangicTarihi"),
        "Bitiş Tarihi, Başlangıç Tarihinden Eski Olamaz!"
      )
      .required("Bitiş Tarihi Giriniz Lütfen!"),
    GunSayisi: Yup.string().required("Gün Sayısı Giriniz Lütfen!"),
  });

  /// izin talep için
  const handleIzinTalepGonder = async (e) => {
    e.preventDefault();
    try {
      await validationSchemaIzinTalep.validate(izinValidate, {
        abortEarly: false,
      });
      addIzinTalep({
        izinTuru: state.izinTuru,
        baslangicTarihi: state.baslangicTarihi,
        bitisTarihi: state.bitisTarihi,
        talepTarihi: new Date().toISOString(),
        gunSayisi: state.gunSayisi,
        appUserId: user.userId,
        onayDurumu: state.onayDurumu,
        cevaplanmaTarihi: state.cevaplanmaTarihi,
      });
    } catch (error) {
      const newErrors = {};

      error.inner.forEach((err) => {
        newErrors[err.path] = err.message;
      });

      dispatch({ type: "errors", payload: newErrors });
    }
  };

  const validationSchemaHarcamaTalep = Yup.object({
    HarcamaTuru: Yup.string().required("Harcama Türü Giriniz Lütfen!"),
    Tutar: Yup.string().required("Tutar Giriniz Lütfen!"),
    ParaBirimi: Yup.string().required("Para Birimi Giriniz Lütfen!"),
    DosyaEkleme: Yup.string().required("Dosya Giriniz Lütfen!"),
  });
  /// harcama talep için
  const handleHarcamaTalepGonder = async (e) => {
    e.preventDefault();
    try {
      await validationSchemaHarcamaTalep.validate(harcamaValidate, {
        abortEarly: false,
      });
      addHarcamaTalep({
        appUserId: user.userId,
        talepTarihi: new Date().toISOString(),
        onayDurumu: state.onayDurumu,
        cevaplanmaTarihi: state.cevaplanmaTarihi,
        harcamaTuru: state.harcamaTuru,
        tutar: state.harcamaTutar,
        paraBirimi: state.harcamaParaBirimi,
        dosyaEkleme: state.dosyaEkleme,
      });
    } catch (error) {
      const newErrors = {};

      error.inner.forEach((err) => {
        newErrors[err.path] = err.message;
      });

      dispatch({ type: "errors", payload: newErrors });
    }
  };

  const validationSchemaAvansTalep = Yup.object({
    AvansTuru: Yup.string().required("Avans Türü Giriniz Lütfen!"),
    Tutar: Yup.string().required("Tutar Giriniz Lütfen!"),
    ParaBirimi: Yup.string().required("Para Birimi Giriniz Lütfen!"),
    Aciklama: Yup.string().required("Açıklama Giriniz Lütfen!"),
  });
  /// avans talep için
  const handleAvansTalepGonder = async (e) => {
    e.preventDefault();
    try {
      await validationSchemaAvansTalep.validate(avansValidate, {
        abortEarly: false,
      });
      addAvansTalep({
        appUserId: user.userId,
        talepTarihi: new Date().toISOString(),
        onayDurumu: state.onayDurumu,
        cevaplanmaTarihi: state.cevaplanmaTarihi,
        avansTuru: state.avansTuru,
        tutar: state.avansTutar,
        aciklama: state.aciklama,
        paraBirimi: state.avansParaBirimi,
      });
    } catch (error) {
      const newErrors = {};

      error.inner.forEach((err) => {
        newErrors[err.path] = err.message;
      });

      dispatch({ type: "errors", payload: newErrors });
    }
  };

  //onay durumu için selamın aleyküm
  const updateOnayDurum = async (id, durum, talepTipi) => {
    const updatedData = {
      Id: id,
      onayDurumu: durum,
    };
    try {
      const response = await axios.put(
        `${baseUrl}Talep/${talepTipi}TalepGuncelle`,
        updatedData
      );
      if (response.status === 200) {
        alert("Durum Güncelleme Başarılı");       
      }
    } catch (error) {
      console.error("Güncelleme hatası:", error);
    }
  };

  //Personel EKLE
  const handleSubmitPersonel = async (e) => {
    e.preventDefault();
    try {
      await validationSchemaPersonel.validate(personelValidate, {
        abortEarly: false,
      });
      addPersonel({
        Fotograf: state.personelFotograf,
        Adi: state.personelAd,
        Soyadi: state.personelSoyad,
        IkinciAdi: state.personelIkinciAd,
        IkinciSoyadi: state.personelIkinciSoyad,
        DogumTarihi: new Date(state.personelDogumTarihi).toISOString(),
        DogumYeri: state.personelDogumYeri,
        TcNo: state.personelTC,
        IseGirisTarih: new Date(state.personelIseGirisTarihi).toISOString(),
        IstenCikisTarihi: new Date(
          state.personelIstenCikisTarihi
        ).toISOString(),
        Aktif: state.personelAktiflikDurumu,
        Meslek: state.personelMeslek,
        Departman: state.personelDepartman,
        Email: state.personelEmail,
        Adres: state.personelAdres,
        PhoneNumber: state.personelTelefon,
        Maas: state.personelMaas,
      });
    } catch (error) {
      const newErrors = {};
      error.inner.forEach((err) => {
        newErrors[err.path] = err.message;
      });

      dispatch({ type: "errors", payload: newErrors });
    }
  };

  const validationSchemaPersonel = Yup.object({
    Adi: Yup.string().required("Personel Adı Giriniz Lütfen!"),
    Soyadi: Yup.string().required("Personel Soyadı Giriniz Lütfen!"),
    DogumTarihi: Yup.date()
      .transform((value, originalValue) =>
        originalValue === "" ? undefined : value
      )
      .required("Doğum Tarihi Giriniz Lütfen!"),
    DogumYeri: Yup.string().required("Doğum Yeri Giriniz Lütfen!"),
    TcNo: Yup.string().required("TC Giriniz Lütfen!"),
    IseGirisTarih: Yup.date()
      .transform((value, originalValue) =>
        originalValue === "" ? undefined : value
      )
      .required("İşe Giriş Tarihi Giriniz Lütfen!"),
    PhoneNumber: Yup.string()
      .matches(/^\d{11}$/, "Telefon Numarası 11 Haneli Olmalıdır")
      .required("Telefon Numarası Giriniz Lütfen!"),
    Adres: Yup.string().required("Adres Giriniz Lütfen!"),
    Email: Yup.string()
      .email("Geçerli Bir Email Giriniz!")
      .required("Email Giriniz Lütfen!"),
    Meslek: Yup.string().required("Meslek Giriniz Lütfen!"),
    Departman: Yup.string().required("Departman Giriniz Lütfen!"),
    Fotograf: Yup.string().required("Fotoğraf Yükleyiniz Lütfen!"),
    Maas: Yup.string().required("Maaş Giriniz Lütfen!"),
  });

  //şifremi unuttum için
  const handleSifremiUnuttumSubmit = async (e) => {
    e.preventDefault();
    let url = `${baseUrl}Login/sifremiUnuttum`;
    let email = state.email;
    const response = await axios.get(
      `${url}?email=${encodeURIComponent(email)}`
    );
  };

  const addPersonel = async (newPersonel) => {
    dispatch({ type: "addPersonel", newPersonel });
    try {
      const response = await axios.post(
        `${baseUrl}User/personelekle`,
        newPersonel
      );
      if (response.status === 200) {
        toast.success("Personel Eklendi!", {
          position: "top-right",
          autoClose: 3500,
          hideProgressBar: false,
          closeOnClick: false,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
          transition: Bounce,
        });
      }
    } catch (error) {
      toast.error("Personel Eklenilmedi!", {
        position: "top-right",
        autoClose: 3500,
        hideProgressBar: false,
        closeOnClick: false,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
        transition: Bounce,
      });
    }
  };

  const updatePersonel = async (e) => {
    e.preventDefault();
    const updatedData = {
      id: state.personelDetay?.id,
      Fotograf: state.personelFotograf || state.personelDetay.fotograf,
      Adres: state.personelAdres || "",
      PhoneNumber: state.personelTelefon || "",
    };
    try {
      const response = await axios.put(
        `${baseUrl}User/personelGuncelle`,
        updatedData
      );
      if (response.status === 200) {
        toast.success("Personel Güncellendi!", {
          position: "top-right",
          autoClose: 3500,
          hideProgressBar: false,
          closeOnClick: false,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
          transition: Bounce,
        });
      }
    } catch (error) {
      toast.error("Personel Güncellenemedi!", {
        position: "top-right",
        autoClose: 3500,
        hideProgressBar: false,
        closeOnClick: false,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
        transition: Bounce,
      });
    }
  };

  useEffect(() => {
    if (!user) return;
    const userId = user.userId;
    // Admin Rolü için
    if (user.role === "Admin") {
      if (location.pathname === "/YoneticiAnasayfa") {
        getAdminDetay(userId);
      }
      if (location.pathname === "/YoneticiDetay/1") {
        getAdminDetay(userId);
      }
      if (location.pathname === "/Sirket") {
        getSirketler();
      }
      if (location.pathname === "/SirketEkle") {
        getPaketler();
      }
      if (location.pathname === "/SirketYoneticiEkle") {
        getSirketler();
      }
      if (location.pathname === "/SirketYoneticiListe") {
        getYoneticiler();
        getSirketler();
      }
    }

    if (user.role === "SirketYonetici") {
      if (location.pathname === "/SirketYoneticiListe") {
        getYoneticiler();
        getSirketler();
      }
      if (location.pathname === "/SirketYoneticiAnasayfa") {
        getSirketler();
        getSirketYonetici(userId);
      }
      if (location.pathname === `/SirketYoneticiDetay/${userId}`) {
        getSirketler();
        getSirketYonetici(userId);
      }
      if (location.pathname === "/IzinTalepListele") {
        getIzinTalepler(user.sirketId);
        getPersoneller();
      }
      if (location.pathname === "/HarcamaTalepListele") {
        getHarcamaTalepler(user.sirketId);
        getPersoneller();
      }
      if (location.pathname === "/AvansTalepListele") {
        getAvansTalepler(user.sirketId);
        getPersoneller();
      }
      if (location.pathname === "/PersonelEkle") {
        getSirketler();
      }
      if (location.pathname === "/PersonelListePage") {
        getPersoneller(user.sirketId);
      }
      if (location.pathname === `/PersonelDetayPage/${userId}`) {
        getPersonelDetay(user.Id);
        getSirketler();
      }
    }

    if (user.role === "Personel") {
      if (location.pathname === "/PersonelAnasayfa") {
        getPersonelDetay(userId);
        getSirketler();
      }
      if (location.pathname === `/PersonelDetayPage/${userId}`) {
        getPersonelDetay(userId);
        getSirketler();
      }
      if (location.pathname === "/PersonelEkle") {
        getSirketler();
      }
      if (location.pathname === "/IzinTalepListele") {
        getIzinTalepler();
        getPersoneller();
      }
      if (location.pathname === "/HarcamaTalepListele") {
        getHarcamaTalepler();
        getPersoneller();
      }
      if (location.pathname === "/AvansTalepListele") {
        getAvansTalepler();
        getPersoneller();
      }
    }
  }, [location.pathname, user]);

  useEffect(() => {
    if (state.adminDetay) {
      dispatch({ type: "adminAdres", payload: state.adminDetay.adres });
      dispatch({ type: "adminTelefon", payload: state.adminDetay.phoneNumber });
    }
  }, [state.adminDetay]);

  useEffect(() => {
    if (state.sirketYoneticiDetay) {
      dispatch({
        type: "yoneticiAdres",
        payload: state.sirketYoneticiDetay.adres,
      });
      dispatch({
        type: "yoneticiTelefon",
        payload: state.sirketYoneticiDetay.phoneNumber,
      });
    }
  }, [state.sirketYoneticiDetay]);

  useEffect(() => {
    if (state.personelDetay) {
      dispatch({ type: "personelAdres", payload: state.personelDetay.adres });
      dispatch({
        type: "personelTelefon",
        payload: state.personelDetay.phoneNumber,
      });
    }
  }, [state.personelDetay]);

  return (
    <DataContext.Provider
      value={{
        state,
        user,
        dispatch,
        handleSubmitSirket,
        handleSubmitSirketYonetici,
        updateAdmin,
        handleIzinTalepGonder,
        handleHarcamaTalepGonder,
        handleAvansTalepGonder,
        paketPost,
        updatePersonel,
        getPersonelDetay,
        getSirketler,
        handleSubmitPersonel,
        handleSifremiUnuttumSubmit,
        updateSirketYonetici,
        updateOnayDurum,
        getAvansTalepler,
        getPersoneller
      }}
    >
      {children}
    </DataContext.Provider>
  );
};
export default DataContext;
