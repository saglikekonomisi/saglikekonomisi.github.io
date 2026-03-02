// Get Current Year
function getCurrentYear() {
    var d = new Date();
    var year = d.getFullYear();
    document.querySelector("#displayDateYear").innerText = year;
}
getCurrentYear()

//client section owl carousel
$(".owl-carousel").owlCarousel({
    loop: true,
    margin: 10,
    nav: true,
    dots: false,
    navText: [
        '<i class="fa fa-long-arrow-left" aria-hidden="true"></i>',
        '<i class="fa fa-long-arrow-right" aria-hidden="true"></i>'
    ],
    autoplay: true,
    autoplayHoverPause: true,
    responsive: {
        0: {
            items: 1
        },
        768: {
            items: 2
        },
        1000: {
            items: 2
        }
    }
});

/** google_map js **/

function myMap() {
    var mapProp = {
        center: new google.maps.LatLng(40.712775, -74.005973),
        zoom: 18,
    };
    var map = new google.maps.Map(document.getElementById("googleMap"), mapProp);
}

function showPrivacyPolicy() {
    // Karakter hatasını önlemek için metni encode edilmiş bir yapıda saklayabilirsiniz 
    // veya dosya kodlamasını düzelttikten sonra aşağıdaki temiz yapıyı kullanın.
    const policyText = "REFERANS TEKNİK – GİZLİLİK POLİTİKASI VE AYDINLATMA METNİ\n\n" +
        "1. Veri Sorumlusu\n" +
        "Bu gizlilik politikası, Referans Teknik Endüstriyel Mutfak Ekipman Çözümleri Ltd. Şti. (\"Şirket\") tarafından işletilen web sitesini ziyaret eden kullanıcıların kişisel verilerinin işlenmesine ilişkin esasları belirlemektedir.\n\n" +
        "2. İşlenen Kişisel Veriler ve Toplama Yöntemleri\n" +
        "Web sitemizi ziyaretiniz sırasında; iletişim formları aracılığıyla paylaştığınız ad-soyad, e-posta adresi, telefon numarası gibi bilgiler ile çerezler (cookies) aracılığıyla toplanan tarayıcı bilgileri ve IP adresleriniz işlenmektedir.\n\n" +
        "3. Veri İşleme Amaçları\n" +
        "- Ürün ve hizmet taleplerinizin karşılanması,\n" +
        "- Sektörel çözümlerimize ilişkin bilgilendirme yapılması,\n" +
        "- Web sitesi performansının artırılması ve kullanıcı deneyiminin iyileştirilmesi.\n\n" +
        "4. Çerezler (Cookies)\n" +
        "Sitemizde, dil tercihlerinizi hatırlamak amacıyla çerezler kullanılmaktadır.\n\n" +
        "5. Kişisel Verilerin Aktarılması\n" +
        "Kişisel verileriniz üçüncü şahıslarla paylaşılmaz.\n\n" +
        "6. Veri Sahibinin Hakları\n" +
        "Taleplerinizi info@referansteknik.com adresine iletebilirsiniz.";

    alert(policyText);
}


