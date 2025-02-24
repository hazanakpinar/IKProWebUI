(IkPro-backend repositorysinin frontend projesidir..)

# İnsan Kaynakları Yönetim Sistemi (IKPro) Web UI

Bu repository, İnsan Kaynakları Yönetim Sistemi (IKYS) için frontend kısmını içerir. Web UI, React.js ile geliştirilmiş dinamik ve kullanıcı dostu bir arayüz sunmaktadır. Kullanıcılar, bu arayüz üzerinden şirketler, çalışanlar ve taleplerle ilgili işlemleri gerçekleştirebilir.

## Proje Özeti

İnsan Kaynakları Yönetim Sistemi'nin Web UI'si, kullanıcı dostu bir arayüzle şirket yönetimi, çalışan takibi ve talep yönetimini kolaylaştırır. Frontend tarafı, kullanıcıların hızlı ve etkili bir şekilde etkileşimde bulunmalarını sağlar.

### Temel Özellikler:

- **Kullanıcı Rolleri**: Admin, Şirket Yöneticisi ve Çalışan rollerine göre yetkilendirme yapılır.
- **Yönetici Yönetimi**: Çalışan bilgilerini ekleme, güncelleme, silme.
- **Şirket Yönetimi**: Şirket bilgileri görüntülenebilir, düzenlenebilir ve silinebilir.
- **Çalışan Yönetimi**: Çalışanlar eklenebilir, bilgileri güncellenebilir ve silinebilir.
- **Talep Yönetimi**: Çalışanlar talepler oluşturabilir ve bunların durumlarını izleyebilir.

## Kullanılan Teknolojiler
- **Frontend**: React.js
  
## Gereksinimler

- **Node.js**: React frontend geliştirme için gereklidir. [Node.js'i buradan indiriniz](https://nodejs.org/en/).
- **npm veya yarn**: Bağımlılıkları yönetmek için kullanılır.

## Kurulum

### 1. Repository'yi Klonlayın

Web UI'yi bilgisayarınıza klonlamak için:
 ```bash
git clone https://github.com/hazanakpinar/IKProWebUI.git
````
### 2. UI için gerekli API URL'lerini ekleyin.
UI'nin backend API ile doğru şekilde iletişim kurabilmesi için `.env` dosyasındaki API URL'lerini doğru şekilde yapılandırmanız gerekmektedir. Aşağıda örnek URL'leri ve açıklamaları yer almaktadır:
 ```bash
# Backend API URL'lerini güncelleyin. //örnek
REACT_APP_API_URL=https://localhost:5001        # API'nin ana URL'si
REACT_APP_API_COMPANIES_URL=https://localhost:5001/api/companies   # Şirketlerle ilgili API URL'si
REACT_APP_API_EMPLOYEES_URL=https://localhost:5001/api/employees   # Çalışanlarla ilgili API URL'si
REACT_APP_API_REQUESTS_URL=https://localhost:5001/api/requests     # Taleplerle ilgili API URL'si
````
### 3. Bağımlılıkları Yükleyin
Projede kullanılan bağımlılıkları ve modülleri yüklemek için:
 ```bash
 npm install
````


