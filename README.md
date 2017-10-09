# ICO Takipçisi

Bu uygulama [Codefiction](http://www.codefiction.tech) ekibi tarafından açık kaynak kodlu olarak geliştirilmiştir. Kayıtlı firma ya da projelerden Codefiction ya da bu projenin bakımını yapan kişiler "kesinlikle" sorumlu değildir. 

### Amaç

Bu uygulamanın amacı, Türkiye'den ICO'ya girip bitirmiş (past), girecek (upcoming) ve şu an ICO'da bulunan (current) uygulamaları tek bir yerde toplamaktır.

### Nasıl dahil olabilirim?

Codefiction altındaki bu projeyi kendi hesabınıza fork'layıp, [json](https://github.com/CodeFiction/ico-takipcisi/tree/master/src/assets/ico-list.json) dosyasına ICO projenizi ekledikten sonra bize PR atabilir veya proje isminizi, kısa bir tanıtım yazısını ve icotracker.net linkini [Codefiction Twitter](https://twitter.com/codefictiontech) hesabından iletişime geçerek iletebilirsiniz.

#### Json dosyasındaki alanlar
**Durum (Status)**
* Bitti: ICO'nun bittiği durumlarda kullanılır.
* Bekliyor: ICO'ya henüz girilmediği durumlarda kullanılır. Hazırlıkların devam ettiği projelerdir.
* Devam: ICO'ya girilmiş ve halen ICO'da olunan durumlar içindir.

**IcoLink**

Projenin icotracker.net adresindeki linkidir. Projenin kendi web sitesinin veya whitepaper'ının linki de koyulabilir.

# Geliştirme
### Çalıştırma

    npm install

    npm start

### Yeni bileşen ekleme

    ng generate component bilesen-ismi

> Yeni bileşen ekler.

### Derleme

    npm build

### Birim testleri çalıştırmak

    npm test

### Uçtan uca (end-to-end) testleri çalıştırmak

    npm e2e