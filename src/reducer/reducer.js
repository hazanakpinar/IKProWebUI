export const initialState = {
  //Admin
  fotograf: "",
  adres: "",
  phoneNumber: "",
  adminDetay: [],
  //Şirket
  sirketAd: "",
  sirketUnvan: "",
  sirkekMersisNo: "",
  sirketVergiNo: "",
  sirketVergiDairesi: "",
  sirketLogo: "",
  sirketTelefon: "",
  sirketAdres: "",
  sirketEmail: "",
  sirketCalisanSayisi: "",
  sirketKurulusYili: "",
  sirketSozlesmeBaslangic: "",
  sirketSozlesmeBitis: "",
  sirketAktiflikDurumu: false,
  paketId: "",
  //Şirket Yönetici
  sirketYoneticiAdi: "",
  sirketYoneticiIkinciAdi: "",
  sirketYoneticiSoyadi: "",
  sirketYoneticiIkinciSoyadi: "",
  sirketYoneticiDogumTarihi: "",
  sirketYoneticiDogumYeri: "",
  sirketYoneticiTcNo: "",
  sirketYoneticiIseGiris: "",
  sirketYoneticiAktiflik: false,
  sirketYoneticiMeslek: "",
  sirketYoneticiDepartman: "",
  sirketYoneticiEmail: "",
  sirketYoneticiTelefon: "",
  sirketYoneticiSirketId: "",
  sirketYoneticiAdres: "",
  sirketYoneticiFotograf: "",
  sirketler: [],
  yoneticiler: [],
  sirketYoneticiDetay: null,
  // Paket
  paketAdi: "",
  sure: "",
  fiyati: "",
  yayinlanmaTarihi: "",
  yayindanKaldirilmaTarihi: "",
  kullaniciSayisi: "",
  paketParaBirimi: "",
  paketAktiflikDurumu: false,
  paketler: [],
  //izin talep
  izinTuru: "",
  baslangicTarihi: "",
  bitisTarihi: "",
  gunSayisi: "",
  onayDurumu: 0,
  cevaplanmaTarihi: "2026-01-06T13:40:17.924Z",
  talepTarihi: "",
  appUserId: "",
  izinTalepler: [],
  //harcama talep
  harcamaTuru: "",
  harcamaTutar: "",
  harcamaParaBirimi: "",
  dosyaEkleme: "",
  harcamaTalepler: [],
  //avans talep
  avansTutar: "",
  aciklama: "",
  avansTuru: "",
  avansParaBirimi: "",
  avansTalepler: [],
  //personeller
  personeller: [],
  personelFotograf: "",
  personelAd: "",
  personelIkinciAd: "",
  personelSoyad: "",
  personelIkinciSoyad: "",
  personelDogumTarihi: "",
  personelDogumYeri: "",
  personelTC: "",
  personelIseGirisTarihi: "",
  personelIstenCikisTarihi: "",
  personelAktiflikDurumu: false,
  personelMeslek: "",
  personelDepartman: "",
  personelSirket: "",
  personelEmail: "",
  personelAdres: "",
  personelTelefon: "",
  personelMaas: "",
  personelSirketId: "",
  personelDetay: [],
  //Sirket Yönetici
  sirketYoneticiDetay: [],
  yoneticiFotograf:"",
  yoneticiAdres:"",
  yoneticiTelefon:"",
  //sifremi unuttum
  email:"",
  //error
  errors:[],

};

export const reducer = (state, action) => {
  switch (action.type) {
    case "sirketYoneticiAdi":
      return {
        ...state,
        sirketYoneticiAdi: action.payload,
      };
    case "sirketYoneticiIkinciAdi":
      return {
        ...state,
        sirketYoneticiIkinciAdi: action.payload,
      };
    case "sirketYoneticiSoyadi":
      return {
        ...state,
        sirketYoneticiSoyadi: action.payload,
      };
    case "sirketYoneticiIkinciSoyadi":
      return {
        ...state,
        sirketYoneticiIkinciSoyadi: action.payload,
      };
    case "sirketYoneticiDogumTarihi":
      return {
        ...state,
        sirketYoneticiDogumTarihi: action.payload,
      };
    case "sirketYoneticiDogumYeri":
      return {
        ...state,
        sirketYoneticiDogumYeri: action.payload,
      };
    case "sirketYoneticiTcNo":
      return {
        ...state,
        sirketYoneticiTcNo: action.payload,
      };
    case "sirketYoneticiIseGiris":
      return {
        ...state,
        sirketYoneticiIseGiris: action.payload,
      };
    case "sirketYoneticiAktiflik":
      return {
        ...state,
        sirketYoneticiAktiflik: action.payload,
      };
    case "sirketYoneticiMeslek":
      return {
        ...state,
        sirketYoneticiMeslek: action.payload,
      };
    case "sirketYoneticiDepartman":
      return {
        ...state,
        sirketYoneticiDepartman: action.payload,
      };
    case "sirketYoneticiEmail":
      return {
        ...state,
        sirketYoneticiEmail: action.payload,
      };
    case "sirketYoneticiTelefon":
      return {
        ...state,
        sirketYoneticiTelefon: action.payload,
      };
    case "sirketYoneticiSirketId":
      return {
        ...state,
        sirketYoneticiSirketId: action.payload,
      };
    case "sirketYoneticiAdres":
      return {
        ...state,
        sirketYoneticiAdres: action.payload,
      };
    case "sirketYoneticiFotograf":
      return {
        ...state,
        sirketYoneticiFotograf: action.payload,
      };

    //Sirket
    case "sirketAd":
      return {
        ...state,
        sirketAd: action.payload,
      };
    case "sirketUnvan":
      return {
        ...state,
        sirketUnvan: action.payload,
      };
    case "sirketMersisNo":
      return {
        ...state,
        sirketMersisNo: action.payload,
      };
    case "sirketVergiNo":
      return {
        ...state,
        sirketVergiNo: action.payload,
      };
    case "sirketVergiDairesi":
      return {
        ...state,
        sirketVergiDairesi: action.payload,
      };
    case "sirketLogo":
      return {
        ...state,
        sirketLogo: action.payload,
      };
    case "sirketTelefon":
      return {
        ...state,
        sirketTelefon: action.payload,
      };
    case "sirketAdres":
      return {
        ...state,
        sirketAdres: action.payload,
      };
    case "sirketEmail":
      return {
        ...state,
        sirketEmail: action.payload,
      };
    case "paketId": //***
      return {
        ...state,
        paketId: action.payload,
      };
    case "sirketCalisanSayisi":
      return {
        ...state,
        sirketCalisanSayisi: action.payload,
      };
    case "sirketKurulusYili":
      return {
        ...state,
        sirketKurulusYili: action.payload,
      };
    case "sirketSozlesmeBaslangic":
      return {
        ...state,
        sirketSozlesmeBaslangic: action.payload,
      };
    case "sirketSozlesmeBitis":
      return {
        ...state,
        sirketSozlesmeBitis: action.payload,
      };
    case "sirketAktiflikDurumu":
      return {
        ...state,
        sirketAktiflikDurumu: action.payload,
      };
    case "adminAdres":
      return {
        ...state,
        adres: action.payload,
      };
    case "adminTelefon":
      return {
        ...state,
        phoneNumber: action.payload,
      };
    case "adminFotograf":
      return {
        ...state,
        fotograf: action.payload,
      };
    case "getSirketler":
      return {
        ...state,
        sirketler: action.payload,
      };
    case "getYoneticiler":
      return {
        ...state,
        yoneticiler: action.payload,
      };
    case "getAdminDetay":
      return {
        ...state,
        adminDetay: action.payload,
      };
    case "getSirketYoneticiDetay":
      return {
        ...state,
        sirketYoneticiDetay: action.payload,
      };
      case "yoneticiFotograf":
      return {
        ...state,
        yoneticiFotograf: action.payload,
      };
      case "yoneticiAdres":
      return {
        ...state,
        yoneticiAdres: action.payload,
      };
      case "yoneticiTelefon":
      return {
        ...state,
        yoneticiTelefon: action.payload,
      };

    case "getPaketler":
      return {
        ...state,
        paketler: action.payload,
      };

    case "addSirketYonetici":
      const newSirketYoneticiler = [
        ...state.yoneticiler,
        action.newSirketYonetici,
      ];
      return {
        ...state,
        yoneticiler: newSirketYoneticiler,
      };

    case "paketAdi":
      return {
        ...state,
        paketAdi: action.payload,
      };
    case "sure":
      return {
        ...state,
        sure: action.payload,
      };
    case "fiyati":
      return {
        ...state,
        fiyati: action.payload,
      };
    case "yayinlanmaTarihi":
      return {
        ...state,
        yayinlanmaTarihi: action.payload,
      };
    case "yayindanKaldirilmaTarihi":
      return {
        ...state,
        yayindanKaldirilmaTarihi: action.payload,
      };
    case "kullaniciSayisi":
      return {
        ...state,
        kullaniciSayisi: action.payload,
      };
    case "paketParaBirimi":
      return {
        ...state,
        paketParaBirimi: action.payload,
      };
    case "paketAktiflikDurumu":
      return {
        ...state,
        paketAktiflikDurumu: action.payload,
      };

    case "addSirket":
      const newSirketler = [...state.sirketler, action.newSirket];
      return {
        ...state,
        sirketler: newSirketler,
      };
    case "addPaket":
      const newPaketler = [...state.paketler, action.newPaket];
      return {
        ...state,
        paketler: newPaketler,
      };
    // izin talep için
    case "izinTuru":
      return {
        ...state,
        izinTuru: action.payload,
      };
    case "baslangicTarihi":
      return {
        ...state,
        baslangicTarihi: action.payload,
      };
    case "bitisTarihi":
      return {
        ...state,
        bitisTarihi: action.payload,
      };
    case "gunSayisi":
      return {
        ...state,
        gunSayisi: action.payload,
      };
    case "onayDurumu":
      return {
        ...state,
        onayDurumu: action.payload,
      };
    case "cevaplanmaTarihi":
      return {
        ...state,
        cevaplanmaTarihi: action.payload,
      };
    case "addIzinTalep":
      const newIzinTalepler = [...state.izinTalepler, action.newIzinTalep];
      return {
        ...state,
        izinTalepler: newIzinTalepler,
      };
    case "talepTarihi":
      return {
        ...state,
        talepTarihi: action.payload,
      };
    case "getIzinTalepler":
      return {
        ...state,
        izinTalepler: action.payload,
      };

    //harcama talep
    case "harcamaTuru":
      return {
        ...state,
        harcamaTuru: action.payload,
      };
    case "harcamaParaBirimi":
      return {
        ...state,
        harcamaParaBirimi: action.payload,
      };
    case "harcamaTutar":
      return {
        ...state,
        harcamaTutar: action.payload,
      };
    case "dosyaEkleme":
      return {
        ...state,
        dosyaEkleme: action.payload,
      };
    case "harcamaTalepler":
      return {
        ...state,
        harcamaTalepler: action.payload,
      };
    case "addHarcamaTalep":
      const newHarcamaTalepler = [
        ...state.harcamaTalepler,
        action.newHarcamaTalep,
      ];
      return {
        ...state,
        harcamaTalepler: newHarcamaTalepler,
      };
    case "getHarcamaTalepler":
      return {
        ...state,
        harcamaTalepler: action.payload,
      };

    //avans
    case "avansTutar":
      return {
        ...state,
        avansTutar: action.payload,
      };
    case "aciklama":
      return {
        ...state,
        aciklama: action.payload,
      };
    case "avansTuru":
      return {
        ...state,
        avansTuru: action.payload,
      };
    case "avansParaBirimi":
      return {
        ...state,
        avansParaBirimi: action.payload,
      };
    case "addAvansTalep":
      const newAvansTalepler = [...state.avansTalepler, action.newAvansTalep];
      return {
        ...state,
        avansTalepler: newAvansTalepler,
      };
    case "getAvansTalepler":
      return {
        ...state,
        avansTalepler: action.payload,
      };
    //Personel
    case "getPersoneller":
      return {
        ...state,
        personeller: action.payload,
      };
    case "getPersonelDetay":
      return {
        ...state,
        personelDetay: {
          ...state.personelDetay,
          ...action.payload,
        },
      };
    case "addPersonel":
      const newPersoneller = [...state.personeller, action.newPersonel];
      return {
        ...state,
        personeller: newPersoneller,
      };

    case "personelFotograf":
      return {
        ...state,
        personelFotograf: action.payload,
      };
    case "personelAd":
      return {
        ...state,
        personelAd: action.payload,
      };
    case "personelIkinciAd":
      return {
        ...state,
        personelIkinciAd: action.payload,
      };
    case "personelSoyad":
      return {
        ...state,
        personelSoyad: action.payload,
      };
    case "personelIkinciSoyad":
      return {
        ...state,
        personelIkinciSoyad: action.payload,
      };
    case "personelDogumTarihi":
      return {
        ...state,
        personelDogumTarihi: action.payload,
      };
    case "personelDogumYeri":
      return {
        ...state,
        personelDogumYeri: action.payload,
      };
    case "personelTC":
      return {
        ...state,
        personelTC: action.payload,
      };
    case "personelIseGirisTarihi":
      return {
        ...state,
        personelIseGirisTarihi: action.payload,
      };
    case "personelIstenCikisTarihi":
      return {
        ...state,
        personelIstenCikisTarihi: action.payload,
      };
    case "personelAktiflikDurumu":
      return {
        ...state,
        personelAktiflikDurumu: action.payload,
      };
    case "personelMeslek":
      return {
        ...state,
        personelMeslek: action.payload,
      };
    case "personelDepartman":
      return {
        ...state,
        personelDepartman: action.payload,
      };
    case "personelSirket":
      return {
        ...state,
        personelSirket: action.payload,
      };
    case "personelEmail":
      return {
        ...state,
        personelEmail: action.payload,
      };
    case "personelAdres":
      return {
        ...state,
        personelAdres: action.payload,
      };
    case "personelTelefon":
      return {
        ...state,
        personelTelefon: action.payload,
      };
    case "personelMaas":
      return {
        ...state,
        personelMaas: action.payload,
      };
    case "personelSirketId":
      return {
        ...state,
        personelSirketId: action.payload,
      };
      case"email":
      return{
          ...state,
          email:action.payload
      };
      case"errors":
      return{
        ...state,
        errors:action.payload
      }

    default:
      console.error("Unknown action type:", action.type);
      return state; // Varsayılan olarak mevcut state'i döndür
  }
};
