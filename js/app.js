/**
 * DADSON GROUP - APP CONTROLLER
 * SPA Routing, Layout Micro-interactions, and Transitions
 */

document.addEventListener('DOMContentLoaded', () => {
    
    // Elements
    const preloader = document.getElementById('preloader');
    const progress = document.querySelector('.preloader-progress');
    const header = document.querySelector('.main-header');
    const menuToggleBtn = document.getElementById('menu-toggle-btn');
    const mobileDrawer = document.getElementById('mobile-nav-drawer');
    const navLinks = document.querySelectorAll('.nav-link, .mob-link, #logo-link');
    const views = document.querySelectorAll('.page-view');
    const homeViewSaved = document.getElementById('home-view');
    const mainViewContainer = document.getElementById('main-view-container');

    // --- TRANSLATIONS DICTIONARY ---
    const translations = {
        tr: {
            el_service_proje_menu: "Proje & Yönetim",
            el_service_ortagerilim_menu: "Orta Gerilim Sistemleri",
            el_service_5_title: "Proje & Yönetim",
            el_service_5_desc: "Karmaşık elektrik ve enerji projelerinin tasarım aşamasından anahtar teslimine kadar uzman proje yönetimi ve danışmanlığı.",
            el_service_5_title_long: "PROJE VE YÖNETİM HİZMETLERİ",
            el_service_5_desc_long_1: "Dadson Elektrik olarak, karmaşık elektrik ve enerji projelerinin başlangıç aşamasından teslimine kadar olan tüm süreçleri profesyonel proje yönetimi metodolojileriyle koordine ediyoruz. Mühendislik tasarımlarının uluslararası standartlara uygunluğunu denetlerken, bütçe yönetimi, risk analizi ve iş programı planlamasıyla projelerin zamanında tamamlanmasını garanti altına alıyoruz.",
            el_service_5_desc_long_2: "Şantiye yönetiminden malzeme tedarik zinciri kontrolüne, yasal izin süreçlerinden kabul ve devreye alma operasyonlarına kadar işverenlerimizin adına tüm koordinasyonu üstleniyoruz. Kalite güvence ve kalite kontrol (QA/QC) mekanizmalarımızla saha uygulamalarındaki hataları sıfıra indiriyor, projelerinizin teknik ve idari açıdan eksiksiz ve en yüksek verimlilikle tamamlanmasını sağlıyoruz.",
            el_scope_5_1: "Mühendislik Tasarım Denetimi ve Proje Koordinasyonu",
            el_scope_5_2: "Bütçe, Maliyet Kontrolü ve Planlama Yönetimi",
            el_scope_5_3: "Saha Süpervizörlüğü ve İş Güvenliği (İSG) Denetimleri",
            el_scope_5_4: "Test, Devreye Alma ve Geçici Kabul Koordinasyonu",
            el_service_6_title: "Orta Gerilim Sistemleri",
            el_service_6_desc: "36 kV seviyesine kadar trafo merkezleri, şalt sahaları ve dağıtım şebekelerinin güvenli tasarımı, kurulumu ve testi.",
            el_service_6_title_long: "ORTA GERİLİM SİSTEMLERİ",
            el_service_6_desc_long_1: "Enerji iletim ve dağıtım şebekelerinin en kritik katmanını oluşturan Orta Gerilim (OG) sistemleri alanında, yüksek mühendislik birikimimizle anahtar teslim çözümler sunuyoruz. 36 kV seviyesine kadar olan trafo merkezleri, OG dağıtım merkezleri ve şalt sahalarının tasarım, kurulum ve devreye alma işlemlerini en yüksek güvenlik standartlarında gerçekleştiriyoruz.",
            el_service_6_desc_long_2: "Endüstriyel tesislerin, enerji santrallerinin ve şehir şebekelerinin kesintisiz enerji ihtiyacını karşılamak amacıyla OG metal-clad ve metal-enclosed hücre kurulumları, koruma rölesi koordinasyon testleri ve OG kablo bağlantı işlerini titizlikle uyguluyoruz. Enerji müsaadesi alınmasından geçici kabul süreçlerine kadar tüm resmi onay işlemlerini takip ederek tesislerinizin güvenli ve sürekli bir şekilde enerjiye kavuşmasını sağlıyoruz.",
            el_scope_6_1: "36 kV Trafo Merkezleri ve Şalt Sahaları Kurulumu",
            el_scope_6_2: "OG Metal-Clad ve Metal-Enclosed Hücre Entegrasyonu",
            el_scope_6_3: "Koruma Röleleri Ayarları ve Sekonder Koruma Testleri",
            el_scope_6_4: "OG Kablo Başlıkları, Ekleri ve Test/Devreye Alma İşlemleri",

            el_service_taahhut_menu: "Elektrik Taahhüt",
            el_service_aydinlatma_menu: "Aydınlatma Mimarisi",
            el_service_otomasyon_menu: "Otomasyon Sistemleri",
            el_service_solar_menu: "Güneş Enerjisi (Solar GES)",
            el_service_1_title: "ELEKTRİK TAAHHÜT HİZMETLERİ",
            el_service_2_title: "AYDINLATMA MİMARİSİ VE TASARIMI",
            el_service_3_title: "ENDÜSTRİYEL VE BİNA OTOMASYONU",
            el_service_4_title: "GÜNEŞ ENERJİSİ SİSTEMLERİ (SOLAR GES)",
            el_service_1_desc_long_1: "Dadson Elektrik olarak, geniş ölçekli endüstriyel tesisler, ticari yapılar, konut projeleri ve altyapı yatırımları için uluslararası mühendislik standartlarında anahtar teslim elektrik taahhüt çözümleri sunuyoruz. Projelendirme aşamasından test ve devreye alma süreçlerine kadar her safhada uzman mühendis kadromuz ve deneyimli saha ekiplerimizle sıfır hata ve yüksek güvenlik prensibiyle çalışıyoruz.",
            el_service_1_desc_long_2: "Enerji altyapısının can damarı olan Alçak Gerilim (AG) ve Orta Gerilim (OG) sistemlerinden, trafo merkezleri, AG ana dağıtım panoları ve jeneratör senkronizasyon sistemlerine kadar tüm güç dağıtım şebekelerini projelendirip kuruyoruz. Ayrıca, modern yapıların güvenlik ve iletişim sinir sistemini oluşturan yangın algılama, CCTV, network altyapıları ve zayıf akım sistemlerini en son teknolojilerle entegre ederek tesislerinize kesintisiz ve emniyetli bir çalışma ortamı kazandırıyoruz.",
            el_service_2_desc_long_1: "Işık, sadece bir ihtiyaç değil; mekanların ruhunu, estetiğini ve işlevselliğini ortaya çıkaran en önemli mimari unsurdur. Dadson olarak, modern aydınlatma mimarisi alanında estetiği, mühendisliği ve enerji verimliliğini harmanlayan premium tasarımlar üretiyoruz. İç mekanlardan dış cephelere, peyzaj alanlarından anıtsal yapılara kadar her projeye özgü ışık senaryoları tasarlıyoruz.",
            el_service_2_desc_long_2: "Kullanıcı odaklı ve sürdürülebilir tasarım ilkelerimizle, mekanların estetik değerini maksimuma çıkarırken enerji sarfiyatını en aza indiren LED teknolojileri ve akıllı otomasyon sistemleri kullanıyoruz. Oteller, alışveriş merkezleri, ofisler ve lüks konut projeleri için özel aydınlatma armatürleri, dinamik cephe aydınlatmaları ve mevsimsel/günlük değişimlere ayak uyduran akıllı kontrol arayüzleri geliştirerek projenizin prestijini aydınlatıyoruz.",
            el_service_3_desc_long_1: "Geleceğin teknolojisini bugünün yapılarına entegre eden Dadson, endüstriyel tesisler ve modern binalar için yüksek güvenlikli, verimli ve konforlu otomasyon çözümleri sunar. Akıllı bina teknolojilerinden (KNX), endüstriyel üretim hatlarının PLC ve SCADA yazılımlarına kadar tüm kontrol ve izleme sistemlerini anahtar teslim projelendiriyoruz.",
            el_service_3_desc_long_2: "Tesislerinizde enerji tüketimini optimize eden, iklimlendirme (HVAC), aydınlatma, güvenlik ve yangın sistemlerini tek bir merkezden izlemeyi ve yönetmeyi sağlayan Merkezi Bina Yönetim Sistemleri (BMS) kuruyoruz. Bu sayede hem işletme maliyetlerinizi düşürüyor hem de karbon ayak izinizi azaltarak sürdürülebilir bir gelecek için teknolojik bir altyapı inşa ediyoruz.",
            el_service_4_desc_long_1: "Sürdürülebilir bir gelecek ve sıfır karbon hedefiyle, işletmelerin ve konutların kendi temiz enerjilerini üretmelerini sağlayan çatı ve arazi tipi Güneş Enerjisi Santralleri (GES) kuruyoruz. Mühendislik, tedarik, inşaat (EPC) ve yasal süreç danışmanlığı dahil tüm süreçleri tek elden yöneterek anahtar teslim çözümler sunuyoruz.",
            el_service_4_desc_long_2: "En yüksek verimliliğe sahip Tier-1 güneş panelleri, yüksek kaliteli invertörler ve dayanıklı montaj altyapıları ile tesislerinizin çatısını ya da arazilerinizi birer yeşil enerji kaynağına dönüştürüyoruz. Yatırım analizi, şebeke bağlantı izinleri, projelendirme, kurulum ve devreye alma süreçlerinin yanı sıra, santrallerinizin uzun yıllar en yüksek performansla çalışmasını sağlayacak periyodik bakım ve uzaktan izleme hizmetleri de sunuyoruz.",
            el_scope_1_1: "Orta Gerilim (OG) Enerji Altyapısı (Trafo, Hücre Kurulumları)",
            el_scope_1_2: "Alçak Gerilim (AG) Dağıtım ve Pano Tesisatları",
            el_scope_1_3: "Zayıf Akım Sistemleri (Yangın Algılama, CCTV, Güvenlik, Network)",
            el_scope_1_4: "Fabrika, Endüstriyel Tesis ve Konut Elektrik Taahhüt İşleri",
            el_scope_2_1: "İç Mekan Aydınlatma Tasarımı (Konut, Ofis, Showroom)",
            el_scope_2_2: "Dış Cephe Aydınlatma Çözümleri (Binalar, Oteller, Tarihi Yapılar)",
            el_scope_2_3: "Peyzaj ve Çevre/Yol Aydınlatma Tasarımları",
            el_scope_2_4: "Akıllı Aydınlatma Kontrolü ve Işık Senaryoları Entegrasyonu",
            el_scope_3_1: "Akıllı Ev ve Akıllı Bina Sistemleri Tasarım ve Kurulumu (KNX)",
            el_scope_3_2: "Endüstriyel Otomasyon, PLC Programlama ve SCADA Çözümleri",
            el_scope_3_3: "Aydınlatma ve İklimlendirme (HVAC) Otomasyon Entegrasyonu",
            el_scope_3_4: "Enerji İzleme ve Merkezi Otomasyon Kontrol Panelleri",
            el_scope_4_1: "Çatı Tipi GES Kurulumu ve Mühendisliği (Fabrikalar, Depolar, Evler)",
            el_scope_4_2: "Arazi Tipi GES Santralleri Projelendirme ve Saha Kurulumu",
            el_scope_4_3: "Yasal Süreçler, Şebeke Bağlantı Anlaşmaları ve İzin Danışmanlığı",
            el_scope_4_4: "Güneş Paneli Bakım, Temizlik ve Performans Analizi Hizmetleri",

            el_service_1_title: "Elektrik Taahhüt",
            el_service_1_desc: "Konut, ticari ve endüstriyel tesisler için yüksek standartlarda anahtar teslim elektrik altyapı çözümleri.",
            el_service_2_title: "Aydınlatma Mimarisi",
            el_service_2_desc: "Mekanların estetik değerini artıran, enerji tasarruflu ve kullanıcı odaklı premium aydınlatma tasarımları.",
            el_service_3_title: "Otomasyon Sistemleri",
            el_service_3_desc: "Akıllı bina ve endüstriyel tesisler için konfor, güvenlik ve enerji verimliliği sağlayan otomasyon çözümleri.",
            el_service_4_title: "Güneş Enerjisi (Solar GES)",
            el_service_4_desc: "Sürdürülebilir bir gelecek için çatı ve arazi tipi güneş enerjisi santralleri anahtar teslim kurulumu ve mühendisliği.",
            el_services_main_title: "HİZMETLERİMİZ",
            el_services_main_subtitle: "Mühendislik gücümüz ve tecrübemizle yaşam alanlarına ve endüstriyel tesislere enerji veriyoruz.",
            el_services_explore_btn: "Detaylı Bilgi",

            nav_home: "Ana Sayfa",
            nav_elektrik: "Dadson Elektrik",
            nav_yapi: "Dadson Yapı",
            nav_hakkimizda: "Hakkımızda",
            nav_contact: "İletişime Geç",
            hero_title: "KÜRESEL GÜÇ, MODERN MÜHENDİSLİK",
            hero_desc: "DADSON GROUP KÜRESEL BİR TİCARET ŞİRKETİDİR",
            card_elektrik_title: "Dadson Elektrik",
            card_elektrik_desc: "Büyük ölçekli endüstriyel tesisler ve altyapı projeleri için küresel standartlarda elektrik taahhüt gücü.",
            card_elektrik_btn: "Keşfet",
            card_yapi_title: "Dadson Yapı",
            card_yapi_desc: "Modern şehircilik anlayışı ve premium yapı standartlarıyla, prestijli projelerde estetik ve dayanıklılık.",
            card_yapi_btn: "Keşfet",
            card_about_title: "Kurumsal",
            card_about_desc: "Dadson Group'un uluslararası iş yapma kültürü, küresel vizyonu ve sürdürülebilirlik ilkeleri.",
            card_about_btn: "Bizi Tanıyın",
            footer_tagline: "Küresel Ölçekte Güç, Güven ve Modern Mühendislik Çözümleri.",
            footer_corp: "Kurumsal",
            footer_about: "Hakkımızda",
            footer_vision: "Vizyon & Misyon",
            footer_contact: "İletişim",
            footer_companies: "Grup Şirketleri",
            footer_rights: "© 2026 Dadson Group. Tüm Hakları Saklıdır.",
            contact_title: "İLETİŞİM",
            contact_subtitle: "Küresel operasyonlarımız ve projelerimiz için bizimle doğrudan iletişime geçin.",
            contact_call_title: "Telefon",
            contact_call_desc: "Bizi Arayın",
            contact_wa_title: "WhatsApp",
            contact_wa_desc: "Destek Hattı",
            contact_mail_title: "E-Posta",
            contact_mail_desc: "E-Posta Gönderin",
            about_hero_title: "KURUMSAL",
            about_hero_subtitle: "Bir asrı aşan aile mirası, geleceğin vizyonuyla buluşuyor.",
            about_intro: "Dadson GROUP; bünyesinde faaliyet gösteren Dadson Elektrik ve Dadson Yapı ile birlikte, farklı sektörlerde hizmet vermeye açık, güçlü ticari iş birliklerini hedefleyen küresel bir ticaret oluşumudur. Kurumsallaşmayı, sürdürülebilir büyümeyi ve sektörler arası sinerjiyi esas alan Dadson GROUP; girişimcilere, yatırımcılara ve işini büyütmek isteyen profesyonellere ortak bir vizyon çatısı sunmaktadır. Güven, disiplin, kalite ve stratejik iş geliştirme anlayışıyla hareket eden şirketimiz; yerel başarılarını uluslararası ölçekte büyütmeyi hedefleyen modern bir ticaret ekosistemi oluşturmaktadır.",
            about_history_title: "Tarihçemiz",
            about_story_title: "ÜÇ KUŞAKLIK TECRÜBE",
            about_story_p1: "1906 yılında, Tarsus Elektrik Santrali yapım ve taahhüt faaliyetleriyle ticari hayatına başlayan DEMİRBAŞ ailesi, Türkiye’nin enerji ve yapı sektöründe bir asrı aşan köklü geçmişiyle güvenin, istikrarın ve mühendislik disiplininin sembolü hâline gelmiştir. Nesiller boyunca süregelen bu büyük miras; yalnızca ticari başarılarla değil, aynı zamanda ülkenin kalkınmasına katkı sağlayan vizyoner projeler, sürdürülebilir iş anlayışı ve tavizsiz kalite politikasıyla inşa edilmiştir.",
            about_story_p2: "Bir yüzyılı aşkın süredir faaliyet gösterdiği her alanda yüksek mühendislik standartlarını, etik ticaret anlayışını ve kusursuz iş disiplinini temel prensip olarak benimseyen DEMİRBAŞ ailesi; enerji, elektrik taahhüt ve yapı sektörlerinde gerçekleştirdiği sayısız projeyle sektörde saygın ve güvenilir bir konum elde etmiştir. Özellikle 1990–2024 yılları arasında elektrik taahhüt sektöründe üstlendiği projelerle; kalite, teknik yeterlilik, profesyonel organizasyon yapısı ve çözüm odaklı yaklaşımı sayesinde sektörün öncü ailelerinden biri olarak anılmıştır.",
            about_story_p3: "Kökleri geçmişin güçlü tecrübelerine dayanan bu aile mirası, 2022 yılında dördüncü nesil temsilci Yusuf Eren DEMİRBAŞ liderliğinde yeni bir döneme taşınmıştır. Yenilikçi düşünce yapısı, modern yönetim anlayışı ve global vizyonu ile hareket eden genç girişimci; nesillerdir babadan oğula aktarılan bu büyük birikimi çağın ihtiyaçlarına uygun şekilde yeniden yapılandırarak DADSON GROUP COMPANY markasını hayata geçirmiştir. Şirketin ismi; aile bağlarını, sadakati, devamlılığı ve nesiller arası aktarımı simgeleyen “Dad & Son” kavramından ilham alınarak oluşturulmuştur. Bu isim yalnızca bir marka değil; köklü bir geçmişin, güçlü bir aidiyetin ve geleceğe taşınan büyük bir vizyonun temsilidir.",
            about_story_p4: "DADSON GROUP COMPANY, geçmişten gelen mühendislik tecrübesini modern dünyanın inovatif iş modelleriyle birleştirerek faaliyet alanını yalnızca elektrik taahhüt hizmetleriyle sınırlı tutmamış; yapı, enerji, proje yönetimi, mühendislik ve yatırım alanlarında da güçlü bir ekosistem oluşturmayı hedeflemiştir. Şirket; teknik yeterliliği, kurumsal organizasyon yapısı ve sürdürülebilir büyüme stratejileriyle sektöründe yalnızca hizmet üreten bir yapı değil, aynı zamanda güven inşa eden bir marka olmayı amaçlamaktadır.",
            about_story_p5: "Bugün DADSON GROUP COMPANY; kalite, güvenilirlik, prestij ve profesyonellik ilkelerini merkezine alan kurumsal yaklaşımıyla, geleceğin yapı ve enerji projelerine yön veren güçlü bir organizasyon olarak faaliyetlerini sürdürmektedir. Her projede estetik, mühendislik ve fonksiyonelliği bir araya getiren şirket; yalnızca bugünün ihtiyaçlarını karşılayan değil, geleceğin standartlarını belirleyen projeler üretmeyi hedeflemektedir.",
            about_story_p6: "DADSON GROUP COMPANY’nin temel vizyonu; enerji ve yapı sektöründe ulusal ve uluslararası ölçekte saygın, öncü ve sürdürülebilir bir marka hâline gelmek, yüksek kalite anlayışıyla sektör standartlarını yeniden tanımlamaktır. Misyonu ise; güvenilir iş ortaklıkları kurarak, yenilikçi çözümler geliştirerek ve mühendislik disiplinden ödün vermeden şirketlere, yatırımcılara ve girişimcilere değer katmaktır.",
            about_story_p7: "Bir asrı aşan aile mirasının verdiği güçle hareket eden DADSON GROUP COMPANY, geçmişinden aldığı köklü tecrübeyi geleceğin vizyonuyla birleştirerek; yalnızca projeler inşa etmeyi değil, kalıcı değerler üretmeyi hedeflemektedir. Çünkü DADSON için başarı; yalnızca tamamlanan projelerle değil, ardında bırakılan güven, itibar ve sürdürülebilir mirasla ölçülmektedir.",
            about_quote: "DADSON için başarı; yalnızca tamamlanan projelerle değil, ardında bırakılan güven, itibar ve sürdürülebilir mirasla ölçülmektedir.",
            about_why_title: "NEDEN DADSON?",
            about_why_1_title: "Köklü Deneyim",
            about_why_1_desc: "1906’dan bugüne üç kuşağın bilgi ve tecrübesiyle sektörde güvenilir bir marka.",
            about_why_2_title: "Yüksek Kalite Standartları",
            about_why_2_desc: "Her projede estetik, işlevsellik ve dayanıklılığı ön planda tutan çözümler.",
            about_why_3_title: "Yenilikçi Yaklaşım",
            about_why_3_desc: "Modern teknolojiler ve sürdürülebilir enerji çözümleriyle geleceği şekillendirme vizyonu.",
            about_why_4_title: "Müşteri Odaklı Hizmet",
            about_why_4_desc: "Müşteri memnuniyetini temel alan, her ihtiyaca özel tasarlanmış projeler.",
            about_why_5_title: "Güçlü Aile Mirası",
            about_why_5_desc: "“Dad” ve “Son” kelimelerinin birleşiminden doğan, aile bağlarını ve güvenilirliği simgeleyen bir marka.",
            about_services_title: "HİZMETLERİMİZ",
            about_srv_1_title: "Elektrik Taahhüt",
            about_srv_1_desc: "Konut, ticari ve endüstriyel projeler için profesyonel elektrik altyapı hizmetleri.",
            about_srv_2_title: "Aydınlatma Mimarisi",
            about_srv_2_desc: "Mekanların estetik ve işlevselliğini artıran özel aydınlatma çözümleri.",
            about_srv_3_title: "Elektrik & Mühendislik",
            about_srv_3_desc: "Enerji verimliliği ve güvenlik odaklı mühendislik çözümleri.",
            about_srv_4_title: "Otomasyon Sistemleri",
            about_srv_4_desc: "Akıllı bina ve endüstriyel otomasyon sistemleriyle modern çözümler.",
            about_srv_5_title: "Güneş Enerjisi Sistemleri",
            about_srv_5_desc: "Yenilenebilir enerji kaynaklarıyla sürdürülebilir enerji çözümleri.",
            about_ref_title: "REFERANSLARIMIZ",
            about_ref_subtitle: "Başarılı projelerimizle sektörde güvenilir bir iş ortağıyız."
        ,
            word_elektrik: "Elektrik",
            word_yapi: "Yapı"
        ,
            word_dadson: "Dadson",
            elektrik_hero_title: "DADSON ELEKTRİK",
            elektrik_intro: "Küresel standartlarda yüksek mühendislik ve anahtar teslim elektrik taahhüt çözümleri.",
            elektrik_services_title: "Faaliyet Alanlarımız",
            elektrik_srv_1_title: "Orta Gerilim (OG) Sistemleri",
            elektrik_srv_2_title: "Alçak Gerilim (AG) Tesisatı",
            elektrik_srv_3_title: "Zayıf Akım Sistemleri",
            elektrik_srv_4_title: "Raylı Sistemler & Altyapı",
            elektrik_solar_badge: "YENİLENEBİLİR ENERJİ",
            elektrik_solar_title: "Güneş Enerjisi (Solar GES)",
            elektrik_projects_title: "Projelerimiz",
            elektrik_filter_all: "Tümü",
            elektrik_filter_completed: "Tamamlanan",
            elektrik_filter_ongoing: "Devam Eden",
            elektrik_badge_completed: "Tamamlandı",
            elektrik_badge_ongoing: "Devam Ediyor",
            elektrik_ref_title: "İş Ortaklarımız & Referanslar"
        ,
            nav_el_home: "ANASAYFA",
            nav_el_about: "HAKKIMIZDA",
            nav_el_services: "HİZMETLERİMİZ",
            nav_el_projects: "PROJELER",
            nav_el_career: "KARİYER",
            nav_el_contact: "İLETİŞİM",
            nav_group_exit: "GROUP SİTESİ",
            elektrik_services_empty_desc: "Hizmet detaylarımız yakında güncellenecektir.",
            elektrik_projects_empty_desc: "Referans projelerimiz yakında eklenecektir.",
            elektrik_career_empty_desc: "Kariyer fırsatları ve başvuru detayları yakında açıklanacaktır.",
            el_about_history_title: "Tarihçe",
            el_about_history_title_main: "TARİHÇE",
            el_about_ceo_quicklink: "CEO Eren DEMİRBAŞ",
            el_about_mission_title: "Misyonumuz",
            el_home_about_title: "KISACA DADSON",
            el_home_about_p1: "Kurucularımızın 1906’dan bu yana, bir asırdan daha uzun süredir birikim ve tecrübesiyle Türkiye’de elektrik taahhüt sektörünün en saygın ve bilinen şirketlerinden biri olarak faaliyet gösteriyoruz. Kuruluşumuzdan bugüne yüzlerce projede elektrik taahhüt işlerini tamamladık.",
            el_home_about_p2: "Misyonumuz; aldığımız tüm projeleri tam zamanında, uluslararası standartlarda erişilebilecek en yüksek kalitede, hatasız ve kalitemizi de yansıtan optimum fiyatla tamamlamaktır. Hedefimiz Elektrik Taahhüt alanında Dünyanın ilk 3 şirketi arasında yer almaktır.",
            el_home_stats_title: "RAKAMLARLA DADSON",
            el_home_stats_tagline: "Bir Asrı Aşan Güvenle Büyüyoruz!",
            el_home_stats_item1: "senelik tecrübe",
            el_home_stats_item2: "proje",
            el_home_stats_item3: "devam eden proje",
            el_about_history_subtitle: "ÜÇ KUŞAKTIR ENERJİYE YÖN VEREN MİRAS",
            el_about_history_p1: "Dadson Elektrik, temelleri 1906 yılında Türkiye’nin ilk elektrik üretim tesislerinden biri olan Tarsus Elektrik Santrali’ne dayanan köklü bir mühendislik ve ustalık mirasının temsilcisidir. Elektrik sektöründeki bilgi, disiplin ve saha tecrübesini üç kuşaktır sürdüren Demirbaş ailesi; geçmişten bugüne birçok başarılı projeye imza atmış, Güney Elektrik ve Güney Gerilim Elektrik gibi sektörün güvenilir markalarıyla enerji altyapısının gelişiminde önemli rol üstlenmiştir.",
            el_about_history_p2: "Bu güçlü birikimin modern vizyonla birleşmesi sonucunda, 2022 yılında Yusuf Eren DEMİRBAŞ liderliğinde kurulan Dadson Elektrik; elektrik taahhüt, aydınlatma mimarisi, güneş enerjisi sistemleri ve otomasyon teknolojileri alanlarında yenilikçi, sürdürülebilir ve yüksek standartlı çözümler sunmaktadır.",
            el_about_history_p3: "İsmini “Dad” (baba) ve “Son” (oğul) kelimelerinin birleşiminden alan Dadson, yalnızca bir marka değil; kuşaklar boyunca aktarılan bir meslek kültürünün, güven anlayışının ve geleceğe uzanan vizyonun sembolüdür. Geleneksel ustalığı çağdaş mühendislik yaklaşımıyla harmanlayan şirket, her projede kalite, estetik, verimlilik ve müşteri memnuniyetini temel ilke olarak benimsemektedir.",
            el_about_history_p4: "“Aydınlatılmamış tek bir sokak bırakmamak” vizyonuyla hareket eden Dadson Elektrik; yaşam alanlarına değer katan, şehirlerin enerjisini geleceğe taşıyan ve teknolojiyi insan odaklı çözümlerle buluşturan projeler üretmeye devam etmektedir.",
            el_about_ceo_title: "CEO'muz Eren DEMİRBAŞ",
            el_about_ceo_role: "Yönetim Kurulu Başkanı & CEO",
            el_about_ceo_p1: "Yusuf Eren DEMİRBAŞ, 2000 yılında Adana’da doğmuş olup, ortaokul ve lise tahsilini Bursa'da, üniversite eğitimini Eskişehir Osmangazi Üniversitesinde Ekonomi olarak tamamlamıştır. Eğitim hayatını tamamladıktan sonra, elektrik ve enerji sektöründe çalışmalara başlamıştır.",
            el_about_ceo_p2: "Aydınlatma mimarisi ve inovatif aydınlatma çözümleri sektöründe 2018 yılından itibaren yoğun çalışmalarda bulunmuş, yurtdışında yaygın invovatif aydınlatma teknolojilerinin Türkiye’ye tanıtılması ve getirilmesi konularında çalışmalarda bulunmuştur.",
            el_about_ceo_p3: "Yusuf Eren DEMİRBAŞ, 2021 yılına kadar ortağı ve yönetim kurulu üyesi olduğu Güney Gerilim Elektrik İnşaat Taah. Tic. ve San. LTD. ŞTİ’de çalışmalarda bulunmuş, halen kurucu ortağı olduğu Dadson Elektrik İnşaat Taahhüt Gayrimenkul Otomotiv Sanayi ve Ticaret Limited Şirketi'nde Yönetim Kurulu Başkan ve CEO’luk görevlerini sürdürmektedir.",
            el_about_ceo_p4: "Bursa'da yaşayan Yusuf Eren DEMİRBAŞ çeşitli dernek ve kuruluşlarda üyeliği ve yöneticiliği bulunmaktadır.",
            el_about_mission_section_title: "MİSYONUMUZ",
            el_about_mission_p1: "Dadson Elektrik olarak misyonumuz; mühendislik gücü, saha tecrübesi ve yenilikçi teknolojileri bir araya getirerek, ulusal ve uluslararası ölçekte güvenilir, sürdürülebilir ve yüksek standartlı elektrik çözümleri sunmaktır.",
            el_about_mission_p2: "Üç kuşaktan gelen mesleki birikimimizi modern mühendislik anlayışıyla harmanlayarak; elektrik taahhüt, enerji sistemleri, aydınlatma mimarisi, otomasyon ve yenilenebilir enerji alanlarında yaşam alanlarına, endüstriyel tesislere ve şehir altyapılarına değer katıyoruz.",
            el_about_mission_p3: "Her projede kalite, güvenlik, verimlilik ve estetik anlayışını temel ilke olarak benimseyen Dadson Elektrik; yalnızca bugünün ihtiyaçlarını karşılayan değil, geleceğin enerji dünyasına yön veren projeler üretmeyi hedeflemektedir.",
            el_about_mission_p4: "İnsan odaklı yaklaşımımız, güçlü teknik altyapımız ve çözüm odaklı hizmet anlayışımız ile dünyanın farklı coğrafyalarında güven duyulan bir mühendislik markası olmayı amaçlıyoruz.",
            el_about_goals_section_title: "HEDEFLERİMİZ",
            el_about_goals_li1: "Türkiye’nin önde gelen elektrik taahhüt firmalarından biri olarak, global pazarda sürdürülebilir büyüme sağlayan uluslararası bir marka haline gelmek.",
            el_about_goals_li2: "Avrupa, Orta Doğu, Körfez Bölgesi, Afrika ve Türk Cumhuriyetleri başta olmak üzere uluslararası projelerde aktif rol almak ve stratejik iş ortaklıkları geliştirmek.",
            el_about_goals_li3: "Elektrik taahhüt, güneş enerjisi sistemleri, akıllı bina teknolojileri ve endüstriyel otomasyon alanlarında yüksek mühendislik standartlarıyla ana yüklenici konumuna ulaşmak.",
            el_about_goals_li4: "Yenilenebilir enerji ve enerji verimliliği alanlarında çevreye duyarlı, sürdürülebilir ve geleceğe değer katan projeler geliştirmek.",
            el_about_goals_li5: "Teknolojik dönüşümü yakından takip ederek dijitalleşen dünyanın ihtiyaçlarına uygun akıllı enerji çözümleri üretmek.",
            el_about_goals_li6: "Uluslararası kalite standartlarına uygun, güvenli ve uzun ömürlü projelerle sektörde güvenin ve prestijin simgesi haline gelmek.",
            el_about_goals_li7: "İnsan kaynağına yatırım yaparak, uzman mühendislik kadroları ve güçlü saha ekipleriyle küresel ölçekte rekabet eden kurumsal bir yapı oluşturmak.",
            el_about_goals_li8: "“Aydınlatılmamış tek bir sokak bırakmamak” vizyonuyla; enerjiye erişimi kolaylaştıran, şehirlerin ve yaşam alanlarının dönüşümüne katkı sağlayan projelere imza atmak.",
            elektrik_proj_tag_infra: "Altyapı & Raylı Sistemler",
            elektrik_proj_1_title: "Bursa Metro Hattı Temel Topraklama Projesi",
            elektrik_proj_1_desc: "Bursa Raylı Sistemler projesinin tünel, istasyon ve ray altyapılarına yönelik yüksek standartlı temel topraklama ve kablolama mühendisliği.",
            elektrik_proj_tag_solar: "Yenilenebilir Enerji",
            elektrik_proj_2_title: "Endüstriyel Tesis Çatı GES Kurulumu",
            elektrik_proj_2_desc: "Büyük ölçekli endüstriyel üretim tesisleri için yüksek verimli, çevre dostu çatı tipi güneş enerjisi santrali projelendirme ve EPC kurulum hizmetleri.",
            elektrik_proj_tag_ind: "Elektrik Taahhüt",
            elektrik_proj_3_title: "Antalya Şehir Hastanesi Temel Topraklama Projesi",
            elektrik_proj_3_desc: "Antalya Şehir Hastanesi inşasında YDA İnşaat bünyesinde gerçekleştirilen, uluslararası standartlarda Cadweld ekzotermik kaynaklı temel topraklama montajı.",
            elektrik_proj_tag_comm: "Aydınlatma & Otomasyon",
            elektrik_proj_4_title: "Lüks Konut Projesi Akıllı Ev & Aydınlatma Tasarımı",
            elektrik_proj_4_desc: "Bursa Nilüfer lüks konut kompleksinin akıllı ev (KNX) otomasyon entegrasyonu ve estetik iç/dış cephe aydınlatma mimarisi tasarımı."
        },
        en: {
            el_service_proje_menu: "Project & Management",
            el_service_ortagerilim_menu: "Medium Voltage Systems",
            el_service_5_title: "Project & Management",
            el_service_5_desc: "Expert project management and consulting for complex electrical and energy projects from design to turnkey delivery.",
            el_service_5_title_long: "PROJECT AND MANAGEMENT SERVICES",
            el_service_5_desc_long_1: "As Dadson Electric, we coordinate all processes of complex electrical and energy projects from the initial phase to delivery using professional project management methodologies. While supervising the compliance of engineering designs with international standards, we guarantee the timely completion of projects with budget management, risk analysis, and work schedule planning.",
            el_service_5_desc_long_2: "We undertake all coordination on behalf of our employers, from site management to material supply chain control, legal permitting processes to acceptance and commissioning operations. With our quality assurance and quality control (QA/QC) mechanisms, we minimize errors in field applications, ensuring that your projects are completed with zero deficiency and highest efficiency from both technical and administrative aspects.",
            el_scope_5_1: "Engineering Design Supervision and Project Coordination",
            el_scope_5_2: "Budget, Cost Control and Planning Management",
            el_scope_5_3: "Site Supervision and Occupational Safety (HSE) Audits",
            el_scope_5_4: "Testing, Commissioning and Provisional Acceptance Coordination",
            el_service_6_title: "Medium Voltage Systems",
            el_service_6_desc: "Safe design, installation, and testing of transformer stations, switchyards, and distribution networks up to 36 kV.",
            el_service_6_title_long: "MEDIUM VOLTAGE SYSTEMS",
            el_service_6_desc_long_1: "In the field of Medium Voltage (MV) systems, which constitute the most critical layer of power transmission and distribution networks, we offer turnkey solutions with our high engineering expertise. We carry out the design, installation, and commissioning of transformer substations up to 36 kV, MV distribution centers, and switchyards at the highest safety standards.",
            el_service_6_desc_long_2: "To meet the uninterrupted energy needs of industrial facilities, power plants, and city networks, we meticulously perform MV metal-clad and metal-enclosed switchgear installations, protection relay coordination tests, and MV cable terminations. By tracking all official approvals from obtaining energy permissions to provisional acceptance, we ensure your facilities receive safe and continuous power.",
            el_scope_6_1: "36 kV Transformer Stations and Switchyards Installation",
            el_scope_6_2: "MV Metal-Clad and Metal-Enclosed Switchgear Integration",
            el_scope_6_3: "Protection Relays Setting and Secondary Protection Testing",
            el_scope_6_4: "MV Cable Terminations, Joints, Testing and Commissioning",

            el_service_taahhut_menu: "Electrical Contracting",
            el_service_aydinlatma_menu: "Architectural Lighting",
            el_service_otomasyon_menu: "Automation Systems",
            el_service_solar_menu: "Solar Energy (Solar GES)",
            el_service_1_title: "ELECTRICAL CONTRACTING SERVICES",
            el_service_2_title: "ARCHITECTURAL LIGHTING AND DESIGN",
            el_service_3_title: "INDUSTRIAL AND BUILDING AUTOMATION",
            el_service_4_title: "SOLAR ENERGY SYSTEMS (SOLAR GES)",
            el_service_1_desc_long_1: "As Dadson Electric, we offer turnkey electrical contracting solutions at international engineering standards for large-scale industrial facilities, commercial buildings, residential projects, and infrastructure investments. We work with zero-error and high-safety principles at every stage, from the design phase to testing and commissioning processes, with our expert engineering staff and experienced field teams.",
            el_service_1_desc_long_2: "We design and install all power distribution networks, from Low Voltage (LV) and Medium Voltage (MV) systems, which are the lifeblood of energy infrastructure, to substations, LV main distribution panels, and generator synchronization systems. In addition, we integrate fire detection, CCTV, network infrastructures, and weak current systems, which form the safety and communication nervous system of modern buildings, with the latest technologies to provide your facilities with a continuous and safe working environment.",
            el_service_2_desc_long_1: "Light is not just a necessity; it is the most important architectural element that reveals the soul, aesthetics, and functionality of spaces. As Dadson, we produce premium designs in the field of modern architectural lighting that blend aesthetics, engineering, and energy efficiency. We design project-specific lighting scenarios from indoor spaces to facades, landscape areas to monumental structures.",
            el_service_2_desc_long_2: "With our user-centric and sustainable design principles, we use LED technologies and smart automation systems that maximize the aesthetic value of spaces while minimizing energy consumption. We illuminate the prestige of your project by developing custom lighting fixtures, dynamic facade lighting, and smart control interfaces that adapt to seasonal/daily changes for hotels, shopping malls, offices, and luxury residential projects.",
            el_service_3_desc_long_1: "Integrating the technology of the future into today's buildings, Dadson offers high-security, efficient, and comfortable automation solutions for industrial facilities and modern buildings. We project turnkey control and monitoring systems from smart building technologies (KNX) to PLC and SCADA software of industrial production lines.",
            el_service_3_desc_long_2: "We install Building Management Systems (BMS) that optimize energy consumption in your facilities, allowing monitoring and management of HVAC, lighting, security, and fire systems from a single center. In this way, we both reduce your operating costs and reduce your carbon footprint, building a technological infrastructure for a sustainable future.",
            el_service_4_desc_long_1: "With the goal of a sustainable future and zero carbon, we install rooftop and ground-mounted Solar Power Plants (SPP) that enable businesses and residences to produce their own clean energy. We offer turnkey solutions by managing all processes from engineering, procurement, construction (EPC), and legal process consultancy from a single source.",
            el_service_4_desc_long_2: "We turn the roofs or lands of your facilities into a green energy source with the highest efficiency Tier-1 solar panels, high-quality inverters, and durable mounting infrastructures. In addition to investment analysis, grid connection permits, project design, installation, and commissioning processes, we also offer periodic maintenance and remote monitoring services to ensure that your power plants operate at the highest performance for many years.",
            el_scope_1_1: "Medium Voltage (MV) Energy Infrastructure (Transformers, Substation Installations)",
            el_scope_1_2: "Low Voltage (LV) Distribution and Switchboard Installations",
            el_scope_1_3: "Weak Current Systems (Fire Detection, CCTV, Security, Network)",
            el_scope_1_4: "Factory, Industrial Facility, and Residential Electrical Contracting Works",
            el_scope_2_1: "Interior Lighting Design (Residential, Office, Showroom)",
            el_scope_2_2: "Facade Lighting Solutions (Buildings, Hotels, Historical Buildings)",
            el_scope_2_3: "Landscape and Area/Street Lighting Designs",
            el_scope_2_4: "Smart Lighting Control and Lighting Scenarios Integration",
            el_scope_3_1: "Smart Home and Smart Building Systems Design and Installation (KNX)",
            el_scope_3_2: "Industrial Automation, PLC Programming, and SCADA Solutions",
            el_scope_3_3: "Lighting and HVAC Automation Integration",
            el_scope_3_4: "Energy Monitoring and Central Automation Control Panels",
            el_scope_4_1: "Rooftop Solar PV Installation and Engineering (Factories, Warehouses, Homes)",
            el_scope_4_2: "Ground-Mounted Solar Power Plants Design and Field Installation",
            el_scope_4_3: "Legal Processes, Grid Connection Agreements, and Permitting Consultancy",
            el_scope_4_4: "Solar Panel Maintenance, Cleaning, and Performance Analysis Services",

            el_service_1_title: "Electrical Contracting",
            el_service_1_desc: "High-standard turnkey electrical infrastructure solutions for residential, commercial, and industrial facilities.",
            el_service_2_title: "Architectural Lighting",
            el_service_2_desc: "Premium, energy-efficient, and user-centric lighting designs that enhance the aesthetic value of spaces.",
            el_service_3_title: "Automation Systems",
            el_service_3_desc: "Automation solutions providing comfort, safety, and energy efficiency for smart buildings and industrial plants.",
            el_service_4_title: "Solar Energy (Solar SPP)",
            el_service_4_desc: "Turnkey installation and engineering of rooftop and ground-mounted solar power plants for a sustainable future.",
            el_services_main_title: "OUR SERVICES",
            el_services_main_subtitle: "We power living spaces and industrial facilities with our engineering strength and experience.",
            el_services_explore_btn: "Detailed Info",

            nav_home: "Home",
            nav_elektrik: "Dadson Electric",
            nav_yapi: "Dadson Construction",
            nav_hakkimizda: "About Us",
            nav_contact: "Contact Us",
            hero_title: "GLOBAL POWER, MODERN ENGINEERING",
            hero_desc: "DADSON GROUP IS A GLOBAL TRADING COMPANY",
            card_elektrik_title: "Dadson Electric",
            card_elektrik_desc: "Electrical contracting and engineering strength at global standards for large-scale industrial plants and infrastructure.",
            card_elektrik_btn: "Explore",
            card_yapi_title: "Dadson Construction",
            card_yapi_desc: "Bringing aesthetics and durability together in prestigious projects with modern urbanism and premium standards.",
            card_yapi_btn: "Explore",
            card_about_title: "Corporate",
            card_about_desc: "Learn about Dadson Group's international business culture, global vision, and sustainability principles.",
            card_about_btn: "Discover Us",
            footer_tagline: "Power, Trust, and Modern Engineering Solutions on a Global Scale.",
            footer_corp: "Corporate",
            footer_about: "About Us",
            footer_vision: "Vision & Mission",
            footer_contact: "Contact",
            footer_companies: "Group Companies",
            footer_rights: "© 2026 Dadson Group. All Rights Reserved.",
            contact_title: "CONTACT",
            contact_subtitle: "Get in direct contact with us for our global operations and projects.",
            contact_call_title: "Phone",
            contact_call_desc: "Call Us",
            contact_wa_title: "WhatsApp",
            contact_wa_desc: "Support Line",
            contact_mail_title: "Email",
            contact_mail_desc: "Send an Email",
            about_hero_title: "CORPORATE",
            about_hero_subtitle: "A family legacy of over a century meets the vision of the future.",
            about_intro: "Dadson GROUP, along with Dadson Electric and Dadson Construction operating under its umbrella, is a global trade organization open to serving different sectors and aiming for strong commercial collaborations. Adopting institutionalization, sustainable growth, and cross-sector synergy as core principles, Dadson GROUP offers a shared vision framework to entrepreneurs, investors, and professionals looking to expand their business. Operating with an understanding of trust, discipline, quality, and strategic business development, our company creates a modern trade ecosystem aiming to scale local achievements to an international level.",
            about_history_title: "Our History",
            about_story_title: "THREE GENERATIONS OF EXPERIENCE",
            about_story_p1: "Starting its commercial life in 1906 with the construction and contracting activities of the Tarsus Power Plant, the DEMİRBAŞ family has become the symbol of trust, stability, and engineering discipline in Turkey's energy and construction sectors with a deep-rooted history spanning over a century. This great heritage, passed down through generations, was built not only through commercial success but also through visionary projects contributing to the country's development, a sustainable business approach, and an uncompromising quality policy.",
            about_story_p2: "Adopting high engineering standards, ethical trade understanding, and flawless business discipline as core principles in every field of operation for more than a century, the DEMİRBAŞ family has gained a respected and reliable position in the sector with countless projects completed in energy, electrical contracting, and construction. Especially with the projects undertaken in the electrical contracting sector between 1990 and 2024, they have been recognized as one of the leading families in the sector due to their quality, technical competence, professional organizational structure, and solution-oriented approach.",
            about_story_p3: "This family legacy, rooted in the strong experiences of the past, was carried into a new era in 2022 under the leadership of the fourth-generation representative, Yusuf Eren DEMİRBAŞ. Moving with an innovative mindset, modern management understanding, and global vision, the young entrepreneur restructured this great wealth passed down from father to son for generations to meet the needs of the age, establishing the DADSON GROUP COMPANY brand. The company's name was inspired by the concept of 'Dad & Son,' symbolizing family ties, loyalty, continuity, and intergenerational transmission. This name is not just a brand; it represents a deep-rooted past, a strong sense of belonging, and a grand vision carried into the future.",
            about_story_p4: "Combining the engineering experience of the past with the innovative business models of the modern world, DADSON GROUP COMPANY has not limited its field of activity to electrical contracting services; it has aimed to create a strong ecosystem in construction, energy, project management, engineering, and investment. With its technical competence, corporate organization, and sustainable growth strategies, the company aims to be not just a service-producing structure in its sector, but a brand that builds trust.",
            about_story_p5: "Today, with its corporate approach centered on the principles of quality, reliability, prestige, and professionalism, DADSON GROUP COMPANY continues its operations as a powerful organization shaping the construction and energy projects of the future. Bringing together aesthetics, engineering, and functionality in every project, the company aims to produce projects that do not just meet today's needs but set the standards of the future.",
            about_story_p6: "The fundamental vision of DADSON GROUP COMPANY is to become a respected, pioneering, and sustainable brand in the energy and construction sectors on national and international scales, redefining sector standards with a high-quality approach. Its mission is to add value to companies, investors, and entrepreneurs by establishing reliable partnerships, developing innovative solutions, and without compromising engineering discipline.",
            about_story_p7: "Acting with the strength of a family legacy of over a century, DADSON GROUP COMPANY aims not just to build projects but to produce lasting values by combining its deep-rooted experience with the vision of the future. Because for DADSON, success is measured not only by completed projects but by the trust, reputation, and sustainable legacy left behind.",
            about_quote: "For DADSON, success is measured not only by completed projects but by the trust, reputation, and sustainable legacy left behind.",
            about_why_title: "WHY DADSON?",
            about_why_1_title: "Rooted Experience",
            about_why_1_desc: "A reliable brand in the sector with the knowledge and experience of three generations since 1906.",
            about_why_2_title: "High Quality Standards",
            about_why_2_desc: "Solutions prioritizing aesthetics, functionality, and durability in every project.",
            about_why_3_title: "Innovative Approach",
            about_why_3_desc: "A vision to shape the future with modern technologies and sustainable energy solutions.",
            about_why_4_title: "Customer-Centric Service",
            about_why_4_desc: "Projects designed specifically for every need, based on customer satisfaction.",
            about_why_5_title: "Strong Family Legacy",
            about_why_5_desc: "A brand born from the combination of 'Dad' and 'Son', symbolizing family ties and reliability.",
            about_services_title: "OUR SERVICES",
            about_srv_1_title: "Electrical Contracting",
            about_srv_1_desc: "Professional electrical infrastructure services for residential, commercial, and industrial projects.",
            about_srv_2_title: "Architectural Lighting",
            about_srv_2_desc: "Special lighting solutions that enhance the aesthetics and functionality of spaces.",
            about_srv_3_title: "Electric & Engineering",
            about_srv_3_desc: "Engineering solutions focusing on energy efficiency and safety.",
            about_srv_4_title: "Automation Systems",
            about_srv_4_desc: "Modern solutions with smart building and industrial automation systems.",
            about_srv_5_title: "Solar Energy Systems",
            about_srv_5_desc: "Sustainable energy solutions with renewable energy sources.",
            about_ref_title: "OUR REFERENCES",
            about_ref_subtitle: "We are a reliable business partner in the sector with our successful projects."
        ,
            word_elektrik: "Electric",
            word_yapi: "Construction"
        ,
            word_dadson: "Dadson",
            elektrik_hero_title: "DADSON ELECTRIC",
            elektrik_intro: "High engineering and turnkey electrical contracting solutions at global standards.",
            elektrik_services_title: "Our Fields of Activity",
            elektrik_srv_1_title: "Medium Voltage (MV) Systems",
            elektrik_srv_2_title: "Low Voltage (LV) Installation",
            elektrik_srv_3_title: "Weak Current Systems",
            elektrik_srv_4_title: "Railway Systems & Infrastructure",
            elektrik_solar_badge: "RENEWABLE ENERGY",
            elektrik_solar_title: "Solar Energy (Solar SPP)",
            elektrik_projects_title: "Our Projects",
            elektrik_filter_all: "All",
            elektrik_filter_completed: "Completed",
            elektrik_filter_ongoing: "Ongoing",
            elektrik_badge_completed: "Completed",
            elektrik_badge_ongoing: "Ongoing",
            elektrik_ref_title: "Our Business Partners & References"
        ,
            nav_el_home: "HOME",
            nav_el_about: "ABOUT US",
            nav_el_services: "SERVICES",
            nav_el_projects: "PROJECTS",
            nav_el_career: "CAREER",
            nav_el_contact: "CONTACT",
            nav_group_exit: "GROUP SITE",
            elektrik_services_empty_desc: "Our service details will be updated soon.",
            elektrik_projects_empty_desc: "Reference projects will be added soon.",
            elektrik_career_empty_desc: "Career opportunities and application details will be announced soon.",
            el_about_history_title: "History",
            el_about_history_title_main: "HISTORY",
            el_about_ceo_quicklink: "CEO Eren DEMİRBAŞ",
            el_about_mission_title: "Our Mission",
            el_home_about_title: "DADSON IN BRIEF",
            el_home_about_p1: "With the accumulation and experience of our founders since 1906, for more than a century, we operate as one of the most respected and well-known companies in the electrical contracting sector in Turkey. From our establishment to the present day, we have completed electrical contracting works in hundreds of projects.",
            el_home_about_p2: "Our mission is to complete all projects we undertake on time, at the highest quality accessible by international standards, without errors, and at an optimum price reflecting our quality. Our goal is to be among the top 3 companies in the world in the field of Electrical Contracting.",
            el_home_stats_title: "DADSON IN NUMBERS",
            el_home_stats_tagline: "Growing with Trust Over a Century!",
            el_home_stats_item1: "years of experience",
            el_home_stats_item2: "projects",
            el_home_stats_item3: "ongoing projects",
            el_about_history_subtitle: "A LEGACY SHAPING ENERGY FOR THREE GENERATIONS",
            el_about_history_p1: "Dadson Electric represents a deep-rooted legacy of engineering and craftsmanship, with foundations dating back to 1906 to the Tarsus Hydroelectric Power Plant, one of Turkey's first electricity generation facilities. The Demirbaş family, maintaining knowledge, discipline, and field experience in the electricity sector for three generations, has accomplished many successful projects and played an important role in the development of energy infrastructure through reliable brands like Güney Elektrik and Güney Gerilim Elektrik.",
            el_about_history_p2: "As a result of combining this strong accumulation with a modern vision, Dadson Electric was established in 2022 under the leadership of Yusuf Eren DEMİRBAŞ, offering innovative, sustainable, and high-standard solutions in electrical contracting, architectural lighting, solar energy systems, and automation technologies.",
            el_about_history_p3: "Deriving its name from the combination of the words \"Dad\" (father) and \"Son\" (son), Dadson is not just a brand, but a symbol of professional culture, understanding of trust, and a vision extending to the future, passed down through generations. Blending traditional craftsmanship with a contemporary engineering approach, the company adopts quality, aesthetics, efficiency, and customer satisfaction as fundamental principles in every project.",
            el_about_history_p4: "Acting with the vision of \"leaving no street unlit,\" Dadson Electric continues to produce projects that add value to living spaces, carry the energy of cities into the future, and bring technology together with human-oriented solutions.",
            el_about_ceo_title: "Our CEO Eren DEMİRBAŞ",
            el_about_ceo_role: "Chairman of the Board & CEO",
            el_about_ceo_p1: "Yusuf Eren DEMİRBAŞ was born in Adana in 2000. He completed his middle and high school education in Bursa, and his university education in Economics at Eskişehir Osmangazi University. After completing his education, he began his work in the electricity and energy sector.",
            el_about_ceo_p2: "Since 2018, he has worked intensively in the architectural lighting and innovative lighting solutions sector, carrying out activities introducing and importing innovative lighting technologies widely used abroad to Turkey.",
            el_about_ceo_p3: "Until 2021, Yusuf Eren DEMİRBAŞ worked at Güney Gerilim Elektrik İnşaat Taah. Tic. ve San. LTD. ŞTİ, where he was a partner and board member. Currently, he continues his duties as the Chairman of the Board and CEO of Dadson Elektrik İnşaat Taahhüt Gayrimenkul Otomotiv Sanayi ve Ticaret Limited Şirketi, of which he is a founding partner.",
            el_about_ceo_p4: "Residing in Bursa, Yusuf Eren DEMİRBAŞ holds memberships and executive roles in various associations and organizations.",
            el_about_mission_section_title: "OUR MISSION",
            el_about_mission_p1: "As Dadson Electric, our mission is to combine engineering power, field experience, and innovative technologies to offer reliable, sustainable, and high-standard electrical solutions on national and international scales.",
            el_about_mission_p2: "By blending our professional accumulation of three generations with a modern understanding of engineering, we add value to living spaces, industrial facilities, and urban infrastructure in the fields of electrical contracting, energy systems, architectural lighting, automation, and renewable energy.",
            el_about_mission_p3: "Adopting quality, safety, efficiency, and aesthetics as fundamental principles in every project, Dadson Electric aims to produce projects that not only meet today's needs but also shape the energy world of the future.",
            el_about_mission_p4: "With our human-oriented approach, strong technical infrastructure, and solution-oriented service concept, we aim to be a trusted engineering brand in different geographies of the world.",
            el_about_goals_section_title: "OUR GOALS",
            el_about_goals_li1: "To become an international brand providing sustainable growth in the global market as one of Turkey's leading electrical contracting companies.",
            el_about_goals_li2: "To play an active role in international projects and develop strategic business partnerships, especially in Europe, the Middle East, the Gulf Region, Africa, and Turkic Republics.",
            el_about_goals_li3: "To reach the position of main contractor with high engineering standards in electrical contracting, solar energy systems, smart building technologies, and industrial automation.",
            el_about_goals_li4: "To develop environmentally friendly, sustainable, and future-valuing projects in renewable energy and energy efficiency.",
            el_about_goals_li5: "To produce smart energy solutions suitable for the needs of the digitalizing world by closely following technological transformation.",
            el_about_goals_li6: "To become a symbol of trust and prestige in the sector with safe, long-lasting projects complying with international quality standards.",
            el_about_goals_li7: "To create a corporate structure competing on a global scale with specialized engineering staff and strong field teams by investing in human resources.",
            el_about_goals_li8: "With the vision of \"leaving no street unlit,\" to sign projects that facilitate access to energy and contribute to the transformation of cities and living spaces.",
            elektrik_proj_tag_infra: "Infrastructure & Railway",
            elektrik_proj_1_title: "Bursa Metro Line Foundation Earthing Project",
            elektrik_proj_1_desc: "High-standard foundation earthing and cabling engineering for tunnels, stations, and rail infrastructure of the Bursa Rail Transit project.",
            elektrik_proj_tag_solar: "Renewable Energy",
            elektrik_proj_2_title: "Industrial Facility Rooftop Solar SPP Installation",
            elektrik_proj_2_desc: "High-efficiency, eco-friendly rooftop solar power plant engineering and EPC installation services for large-scale industrial manufacturing plants.",
            elektrik_proj_tag_ind: "Electrical Contracting",
            elektrik_proj_3_title: "Antalya City Hospital Foundation Earthing Project",
            elektrik_proj_3_desc: "International standard Cadweld exothermic welded foundation earthing installation executed under YDA Construction for the Antalya City Hospital project.",
            elektrik_proj_tag_comm: "Lighting & Automation",
            elektrik_proj_4_title: "Luxury Residential Project Smart Home & Lighting Design",
            elektrik_proj_4_desc: "Smart home (KNX) automation integration and aesthetic indoor/exterior facade lighting architectural design for the Bursa Nilüfer luxury residential complex."
        },
        ar: {
            el_service_proje_menu: "إدارة المشاريع",
            el_service_ortagerilim_menu: "أنظمة الجهد المتوسط",
            el_service_5_title: "إدارة المشاريع",
            el_service_5_desc: "إدارة واستشارات هندسية احترافية لمشاريع الكهرباء والطاقة المعقدة من مرحلة التصميم حتى التسليم الكامل.",
            el_service_5_title_long: "خدمات إدارة وتنسيق المشاريع",
            el_service_5_desc_long_1: "في دادسون للكهرباء، نقوم بتنسيق كافة مراحل مشاريع الكهرباء والطاقة المعقدة بدءاً من الفكرة الأولية وحتى التسليم النهائي، وذلك بالاعتماد على منهجيات إدارة المشاريع المهنية. ومن خلال الإشراف على مطابقة التصاميم الهندسية للمعايير الدولية، فإننا نضمن إنجاز المشاريع في أوقاتها المحددة وبأفضل مستويات إدارة الميزانية وتحليل المخاطر وجدولة الأعمال.",
            el_service_5_desc_long_2: "نتولى كافة أعمال التنسيق نيابة عن عملائنا، بدءاً من إدارة المواقع والتحكم في سلاسل توريد المواد، ووصولاً إلى استخراج التراخيص القانونية وأعمال الفحص والتشغيل التجريبي. وبفضل آليات ضمان الجودة ومراقبة الجودة (QA/QC)، نعمل على تفادي الأخطاء الميدانية بالكامل لضمان تسليم مشاريعكم خالية من العيوب وبأعلى كفاءة فنية وإدارية.",
            el_scope_5_1: "التدقيق الهندسي وتنسيق تصاميم المشاريع",
            el_scope_5_2: "إدارة الميزانية ومراقبة التكاليف والتخطيط",
            el_scope_5_3: "الإشراف الميداني وتدقيق السلامة والصحة المهنية (HSE)",
            el_scope_5_4: "تنسيق عمليات الفحص والتشغيل التجريبي والتسليم المؤقت",
            el_service_6_title: "أنظمة الجهد المتوسط",
            el_service_6_desc: "تصميم وتركيب واختبار آمن لمحطات المحولات والمفاتيح الكهربائية وشبكات التوزيع حتى جهد 36 كيلو فولت.",
            el_service_6_title_long: "أنظمة وشبكات الجهد المتوسط",
            el_service_6_desc_long_1: "في مجال أنظمة الجهد المتوسط (MV) التي تشكل الطبقة الأكثر أهمية في شبكات نقل وتوزيع الطاقة، نقدم حلولاً متكاملة تسليم مفتاح بخبراتنا الهندسية العالية. حيث نقوم بتصميم وتركيب وتشغيل محطات المحولات التي تصل قدرتها حتى 36 كيلو فولت، ومراكز توزيع الجهد المتوسط، وساحات المفاتيح الكهربائية وفقاً لأعلى معايير السلامة والأمان.",
            el_service_6_desc_long_2: "ولتلبية احتياجات الطاقة المستمرة للمنشآت الصناعية ومحطات توليد الطاقة والشبكات الحضرية، نقوم بتركيب خلايا الجهد المتوسط المعزولة بالمعدن (metal-clad) والمغلفة بالمعدن (metal-enclosed)، واختبارات تنسيق مرحلات الحماية، وتوصيل كابلات الجهد المتوسط بدقة متناهية. كما نتابع كافة الموافقات الرسمية بدءاً من الحصول على تراخيص الطاقة وحتى عمليات التسليم المؤقت لضمان تزويد منشآتكم بالطاقة الآمنة والمستمرة.",
            el_scope_6_1: "إنشاء محطات المحولات وساحات المفاتيح الكهربائية بقدرة 36 كيلو فولت",
            el_scope_6_2: "دمج خلايا الجهد المتوسط المغلفة والمعزولة بالمعدن",
            el_scope_6_3: "ضبط مرحلات الحماية وإجراء اختبارات الحماية الثانوية",
            el_scope_6_4: "تركيب نهايات كابلات الجهد المتوسط والوصلات والاختبار والتشغيل",

            el_service_taahhut_menu: "المقاولات الكهربائية",
            el_service_aydinlatma_menu: "هندسة الإضاءة",
            el_service_otomasyon_menu: "أنظمة الأتمتة",
            el_service_solar_menu: "الطاقة الشمسية (Solar GES)",
            el_service_1_title: "خدمات المقاولات الكهربائية",
            el_service_2_title: "هندسة وتصميم الإضاءة",
            el_service_3_title: "الأتمتة الصناعية وأتمتة المباني",
            el_service_4_title: "أنظمة الطاقة الشمسية (Solar GES)",
            el_service_1_desc_long_1: "في Dadson الكهربائية، نقدم حلول مقاولات كهربائية متكاملة بنظام تسليم المفتاح ووفقًا للمعايير الهندسية الدولية للمنشآت الصناعية الكبرى والمباني التجارية والمشاريع السكنية واستثمارات البنية التحتية. نعمل بمبادئ الأمان العالي والخلو التام من الأخطاء في كل مرحلة، بدءًا من التصميم والتخطيط وحتى عمليات الاختبار والتشغيل، بدعم من كادرنا الهندسي الخبير وفرقنا الميدانية المؤهلة.",
            el_service_1_desc_long_2: "نقوم بتصميم وتركيب شبكات توزيع الطاقة الكهربائية بالكامل، بدءًا من أنظمة الجهد المنخفض (AG) والجهد المتوسط (OG)، ومراكز المحولات، ولوحات التوزيع الرئيسية، وحتى أنظمة تزامن المولدات. بالإضافة إلى ذلك، نقوم بدمج أنظمة إنذار الحريق والكاميرات المراقبة (CCTV) وشبكات نقل البيانات وأنظمة التيار الخفيف التي تشكل الجهاز العصبي للمباني الحديثة مع أحدث التقنيات لضمان بيئة عمل آمنة ومستمرة لمنشآتكم.",
            el_service_2_desc_long_1: "الضوء ليس مجرد حاجة بل هو العنصر المعماري الأهم الذي يبرز روح المساحات وجماليتها ووظيفتها. في Dadson، نبتكر تصاميم إضاءة متميزة تجمع بين الجمال والهندسة وكفاءة الطاقة في مجال هندسة الإضاءة الحديثة. نقوم بتصميم سيناريوهات إضاءة مخصصة لكل مشروع، بدءًا من المساحات الداخلية والواجهات الخارجية وحتى المساحات الطبيعية والمعالم الأثرية.",
            el_service_2_desc_long_2: "مع التزامنا بمبادئ التصميم المستدام والمتمحور حول المستخدم، نستخدم تقنيات LED المتقدمة وأنظمة التحكم الذكية التي تزيد من القيمة الجمالية للمساحات مع تقليل استهلاك الطاقة إلى الحد الأدنى. نقوم بإضاءة هيبة مشاريعكم من خلال تطوير وحدات إضاءة مخصصة، وإضاءة واجهات ديناميكية، وواجهات تحكم ذكية تتكيف مع التغيرات الموسمية واليومية للفنادق ومراكز التسوق والمكاتب والمشاريع السكنية الفاخرة.",
            el_service_3_desc_long_1: "نقوم بدمج تكنولوجيا المستقبل في مباني اليوم، ونقدم في Dadson حلول أتمتة عالية الأمان والكفاءة والراحة للمنشآت الصناعية والمباني الحديثة. نقوم بتصميم أنظمة التحكم والمراقبة بالكامل بنظام تسليم المفتاح، بدءًا من تقنيات المباني الذكية (KNX) وحتى برمجيات PLC وSCADA لخطوط الإنتاج الصناعي.",
            el_service_3_desc_long_2: "نقوم بتركيب أنظمة إدارة المباني المركزية (BMS) التي تحسن استهلاك الطاقة في منشآتكم، وتتيح مراقبة وإدارة أنظمة التكييف والتهوية (HVAC) والإضاءة والأمن ومكافحة الحريق من مركز واحد. وبهذه الطريقة، نقلل من تكاليف التشغيل ونخفض البصمة الكربونية لبناء بنية تحتية تكنولوجية لمستقبل مستدام.",
            el_service_4_desc_long_1: "من أجل مستقبل مستدام وهدف صفر كربون، نقوم بتركيب محطات الطاقة الشمسية (GES) على الأسطح وفي الأراضي، مما يمكن الشركات والمنازل من إنتاج طاقتها النظيفة. ندير جميع العمليات من الهندسة والتوريد والبناء (EPC) والاستشارات القانونية من مصدر واحد لتقديم حلول متكاملة.",
            el_service_4_desc_long_2: "نحول أسطح منشآتكم أو أراضيكم إلى مصادر طاقة خضراء باستخدام ألواح شمسية عالية الكفاءة (Tier-1)، وعواكس عالية الجودة، وبنية تحتية متينة للتركيب. وبالإضافة إلى دراسات الجدوى وتراخيص الربط بالشبكة وتصميم المشاريع والتركيب والتشغيل، نقدم أيضًا خدمات الصيانة الدورية والمراقبة عن بعد لضمان عمل محطاتكم بأعلى أداء لسنوات طويلة.",
            el_scope_1_1: "البنية التحتية لطاقة الجهد المتوسط (المحولات والمحطات الفرعية)",
            el_scope_1_2: "تركيبات التوزيع ولوحات التوزيع للجهد المنخفض",
            el_scope_1_3: "أنظمة التيار الخفيف (كشف الحريق، الكاميرات المراقبة، الأمن، الشبكات)",
            el_scope_1_4: "أعمال المقاولات الكهربائية للمصانع والمنشآت الصناعية والسكنية",
            el_scope_2_1: "تصميم الإضاءة الداخلية (السكنية، المكاتب، صالات العرض)",
            el_scope_2_2: "حلول إضاءة الواجهات (المباني، الفنادق، المباني التاريخية)",
            el_scope_2_3: "تصاميم إضاءة الحدائق والمساحات الخارجية والشوارع",
            el_scope_2_4: "أتمتة التحكم في الإضاءة ودمج سيناريوهات الإضاءة الذكية",
            el_scope_3_1: "تصميم وتركيب أنظمة المنازل والمباني الذكية (KNX)",
            el_scope_3_2: "الأتمتة الصناعية، برمجة PLC وحلول التحكم والمراقبة (SCADA)",
            el_scope_3_3: "دمج أتمتة الإضاءة والتكييف والتهوية (HVAC)",
            el_scope_3_4: "مراقبة الطاقة ولوحات التحكم المركزية للأتمتة",
            el_scope_4_1: "تركيب وهندسة الطاقة الشمسية للأسطح (المصانع، المستودعات، المنازل)",
            el_scope_4_2: "تصميم والتركيب الميداني لمحطات الطاقة الشمسية على الأراضي",
            el_scope_4_3: "إدارة العمليات القانونية، اتفاقيات الربط مع الشبكة والاستشارات الفنية",
            el_scope_4_4: "خدمات صيانة وتنظيف وتحليل أداء لوحات الطاقة الشمسية",

            el_service_1_title: "المقاولات الكهربائية",
            el_service_1_desc: "حلول البنية التحتية الكهربائية الجاهزة وعالية المعايير للمنشآت السكنية والتجارية والصناعية.",
            el_service_2_title: "هندسة الإضاءة",
            el_service_2_desc: "تصاميم إضاءة متميزة وموفرة للطاقة وتتمحور حول المستخدم لتعزيز القيمة الجمالية للمساحات.",
            el_service_3_title: "أنظمة الأتمتة",
            el_service_3_desc: "حلول أتمتة توفر الراحة والأمان وكفاءة الطاقة للمباني الذكية والمصانع الصناعية.",
            el_service_4_title: "الطاقة الشمسية (Solar GES)",
            el_service_4_desc: "تركيب وهندسة محطات الطاقة الشمسية على الأسطح والأراضي بنظام تسليم المفتاح لمستقبل مستدام.",
            el_services_main_title: "خدماتنا",
            el_services_main_subtitle: "نمد المساحات السكنية والمنشآت الصناعية بالطاقة بقوتنا الهندسية وخبرتنا.",
            el_services_explore_btn: "معلومات تفصيلية",

            nav_home: "الرئيسية",
            nav_elektrik: "Dadson للكهرباء",
            nav_yapi: "Dadson للمقاولات",
            nav_hakkimizda: "من نحن",
            nav_contact: "اتصل بنا",
            hero_title: "قوة عالمية، هندسة حديثة",
            hero_desc: "مجموعة Dadson هي شركة تجارية عالمية",
            card_elektrik_title: "Dadson للكهرباء",
            card_elektrik_desc: "قوة المقاولات الكهربائية والهندسة بالمعايير العالمية للمصانع الصناعية الكبرى ومشاريع البنية التحتية.",
            card_elektrik_btn: "اكتشف",
            card_yapi_title: "Dadson للمقاولات",
            card_yapi_desc: "الجمع بين الجمالية والمتانة في المشاريع المرموقة بمفاهيم التخطيط العمراني الحديث ومعايير البناء الفاخرة.",
            card_yapi_btn: "اكتشف",
            card_about_title: "الشركة",
            card_about_desc: "تعرف على ثقافة الأعمال الدولية لمجموعة Dadson ورؤيتها العالمية ومبادئ الاستدامة لديها.",
            card_about_btn: "تعرف علينا",
            footer_tagline: "القوة والثقة والحلول الهندسية الحديثة على نطاق عالمي.",
            footer_corp: "الشركة",
            footer_about: "من نحن",
            footer_vision: "الرؤية والرسالة",
            footer_contact: "اتصال",
            footer_companies: "شركات المجموعة",
            footer_rights: "© 2026 مجموعة Dadson. جميع الحقوق محفوظة.",
            contact_title: "اتصل بنا",
            contact_subtitle: "تواصل معنا مباشرة بخصوص عملياتنا ومشاريعنا العالمية.",
            contact_call_title: "الهاتف",
            contact_call_desc: "اتصل بنا",
            contact_wa_title: "واتساب",
            contact_wa_desc: "خط الدعم",
            contact_mail_title: "البريد الإلكتروني",
            contact_mail_desc: "أرسل بريدًا إلكترونيًا",
            about_hero_title: "الشركة",
            about_hero_subtitle: "إرث عائلي يمتد لأكثر من قرن يلتقي برؤية المستقبل.",
            about_intro: "تعتبر مجموعة Dadson (Dadson GROUP)، جنبًا إلى جنب مع Dadson للكهرباء وDadson للمقاولات اللتين تعملان تحت مظلتها، كياناً تجارياً عالمياً منفتحاً لتقديم الخدمات في قطاعات مختلفة ويهدف إلى بناء شراكات تجارية قوية. واعتماداً على العمل المؤسسي والنمو المستدام والتآزر بين القطاعات كمبادئ أساسية، تقدم مجموعة Dadson إطار عمل برؤية مشتركة لرواد الأعمال والمستثمرين والمهنيين الراغبين في توسيع أعمالهم. ومن خلال العمل بمفهوم الثقة والانضباط والجودة وتطوير الأعمال الاستراتيجي، تعمل شركتنا على إنشاء نظام بيئي تجاري حديث يهدف إلى توسيع النجاحات المحلية على نطاق دولي.",
            about_history_title: "تاريخنا",
            about_story_title: "خبرة ثلاثة أجيال",
            about_story_p1: "بدأت عائلة ديميرباش (DEMİRBAŞ) مسيرتها التجارية في عام 1906 من خلال أنشطة بناء ومقاولات محطة طرسوس للكهرباء، لتصبح رمزاً للثقة والاستقرار والانضباط الهندسي في قطاعي الطاقة والبناء في تركيا، مع تاريخ عريق يمتد لأكثر من قرن. هذا الإرث العظيم المتوارث عبر الأجيال لم يُبْنَ بالنجاحات التجارية فحسب، بل أيضاً بالمشاريع الرؤيوية التي تسهم في تنمية البلاد، والنهج المستدام في العمل، وسياسة الجودة الصارمة.",
            about_story_p2: "بتبنيها معايير هندسية رفيعة، وفهماً أخلاقياً للتجارة، وانضباطاً مثالياً في العمل كمبادئ أساسية في كل مجال عملت فيه لأكثر من قرن، حظيت عائلة ديميرباش بمكانة محترمة وموثوقة في القطاع عبر مشاريع لا حصر لها أنجزتها في مجالات الطاقة والمقاولات الكهربائية والبناء. ولا سيما في المشاريع التي نفذتها في قطاع المقاولات الكهربائية بين عامي 1990 و2024، عُرفت كإحدى العائلات الرائدة بفضل الجودة والكفاءة الفنية والهيكل التنظيمي المهني والنهج الموجه نحو الحلول.",
            about_story_p3: "هذا الإرث العائلي، الممتدة جذوره في الخبرات القوية للماضي، انتقل إلى عهد جديد في عام 2022 بقيادة ممثل الجيل الرابع Yusuf Eren DEMİRBAŞ. وبفضل عقليته الابتكارية ورؤيته الإدارية الحديثة ورؤيته العالمية، أعاد هذا الرائد الشاب هيكلة هذه الخبرة العظيمة المتوارثة من الأب إلى الابن لتلائم متطلبات العصر، مطلقاً علامة مجموعة Dadson (DADSON GROUP COMPANY). واستلهم اسم الشركة من مفهوم 'الأب والابن' (Dad & Son)، تعبيراً عن الروابط العائلية والوفاء والاستمرارية والتوارث بين الأجيال. هذا الاسم ليس مجرد علامة تجارية؛ بل هو تجسيد لماضٍ عريق، وانتماء قوي، ورؤية عظيمة تتطلع للمستقبل.",
            about_story_p4: "من خلال دمج الخبرة الهندسية للماضي مع نماذج الأعمال المبتكرة للعالم الحديث، لم تحصر شركة مجموعة Dadson (DADSON GROUP COMPANY) مجال نشاطها في خدمات المقاولات الكهربائية فحسب، بل استهدفت أيضاً إنشاء نظام بيئي قوي في مجالات البناء والطاقة وإدارة المشاريع والهندسة والاستثمار. وتسعى الشركة، بكفاءتها الفنية وهيكلها التنظيمي المؤسسي واستراتيجيات نموها المستدام، إلى ألا تقتصر على تقديم الخدمات في قطاعها، بل أن تكون علامة تجارية تبني الثقة.",
            about_story_p5: "تواصل شركة مجموعة Dadson (DADSON GROUP COMPANY) اليوم أنشطتها كمنظمة قوية توجه مشاريع البناء والطاقة في المستقبل، بنهجها المؤسسي القائم على مبادئ الجودة والموثوقية والمكانة والمهنية. وإذ تجمع الشركة بين الجمالية والهندسة والوظيفة في كل مشروع, فإنها تهدف إلى إنتاج مشاريع لا تكتفي بتلبية احتياجات اليوم بل تضع معايير المستقبل.",
            about_story_p6: "تتمثل الرؤية الأساسية لشركة مجموعة Dadson (DADSON GROUP COMPANY) في أن تصبح علامة تجارية محترمة ورائدة ومستدامة في قطاعي الطاقة والبناء على الصعيدين الوطني والدولي، وإعادة تعريف معايير القطاع بنهج عالي الجودة. وتتمثل رسالتها في تقديم قيمة مضافة للشركات والمستثمرين ورواد الأعمال من خلال إقامة شراكات موثوقة وتطوير حلول مبتكرة ودون المساومة على الانضباط الهندسي.",
            about_story_p7: "بالعمل مستمدةً القوة من إرث عائلي يمتد لأكثر من قرن، لا تهدف شركة مجموعة Dadson (DADSON GROUP COMPANY) إلى مجرد بناء مشاريع، بل إلى خلق قيم دائمية من خلال دمج خبرتها العريقة مع رؤية المستقبل. لأن النجاح بالنسبة لDadson لا يُقاس بالمشاريع المكتملة فحسب، بل بالثقة والسمعة والإرث المستدام الذي يُخلَّف وراءها.",
            about_quote: "بالنسبة لDadson، لا يُقاس النجاح بالمشاريع المكتملة فحسب، بل بالثقة والسمعة والإرث المستدام الذي يُخلَّف وراءها.",
            about_why_title: "لماذا Dadson؟",
            about_why_1_title: "خبرة عريقة",
            about_why_1_desc: "علامة تجارية موثوقة في هذا القطاع بفضل معرفة وخبرة ثلاثة أجيال منذ عام 1906.",
            about_why_2_title: "معايير جودة عالية",
            about_why_2_desc: "حلول تعطي الأولوية للجمالية والوظيفة والمتانة في كل مشروع.",
            about_why_3_title: "نهج مبتكر",
            about_why_3_desc: "رؤية لتشكيل المستقبل بالتقنيات الحديثة وحلول الطاقة المستدامة.",
            about_why_4_title: "خدمة تتمحور حول العميل",
            about_why_4_desc: "مشاريع مصممة خصيصًا لكل حاجة، بناءً على رضا العملاء.",
            about_why_5_title: "إرث عائلي قوي",
            about_why_5_desc: "علامة تجارية ولدت من مزيج 'Dad' و 'Son'، ترمز للروابط العائلية والموثوقية.",
            about_services_title: "خدماتنا",
            about_srv_1_title: "مقاولات كهربائية",
            about_srv_1_desc: "خدمات البنية التحتية الكهربائية المهنية للمشاريع السكنية والتجارية والصناعية.",
            about_srv_2_title: "هندسة الإضاءة",
            about_srv_2_desc: "حلول إضاءة خاصة تعزز جمالية المساحات ووظيفتها.",
            about_srv_3_title: "الكهرباء والهندسة",
            about_srv_3_desc: "حلول هندسية تركز على كفاءة الطاقة والسلامة.",
            about_srv_4_title: "أنظمة الأتمتة",
            about_srv_4_desc: "حلول حديثة مع أنظمة المباني الذكية والأتمتة الصناعية.",
            about_srv_5_title: "أنظمة الطاقة الشمسية",
            about_srv_5_desc: "حلول الطاقة المستدامة مع مصادر الطاقة المتجددة.",
            about_ref_title: "عملاؤنا",
            about_ref_subtitle: "شريك تجاري موثوق في هذا القطاع بفضل مشاريعنا الناجحة."
        ,
            word_elektrik: "للكهرباء",
            word_yapi: "للمقاولات"
        ,
            word_dadson: "Dadson",
            elektrik_hero_title: "DADSON للكهرباء",
            elektrik_intro: "حلول المقاولات الكهربائية والهندسة الرفيعة الجاهزة للتسليم بمعايير عالمية.",
            elektrik_services_title: "مجالات نشاطنا",
            elektrik_srv_1_title: "أنظمة الجهد المتوسط",
            elektrik_srv_2_title: "تركيبات الجهد المنخفض",
            elektrik_srv_3_title: "أنظمة التيار الخفيف",
            elektrik_srv_4_title: "أنظمة السكك الحديدية والبنية التحتية",
            elektrik_solar_badge: "طاقة متجددة",
            elektrik_solar_title: "الطاقة الشمسية (GES)",
            elektrik_projects_title: "مشاريعنا",
            elektrik_filter_all: "الكل",
            elektrik_filter_completed: "المكتملة",
            elektrik_filter_ongoing: "قيد التنفيذ",
            elektrik_badge_completed: "مكتمل",
            elektrik_badge_ongoing: "مستمر",
            elektrik_ref_title: "شركاؤنا التجاريون ومراجعنا"
        ,
            nav_el_home: "الرئيسية",
            nav_el_about: "من نحن",
            nav_el_services: "خدماتنا",
            nav_el_projects: "المشاريع",
            nav_el_career: "الوظائف",
            nav_el_contact: "الاتصال",
            nav_group_exit: "موقع المجموعة",
            elektrik_services_empty_desc: "سيتم تحديث تفاصيل خدماتنا قريبًا.",
            elektrik_projects_empty_desc: "سيتم إضافة المشاريع المرجعية قريبًا.",
            elektrik_career_empty_desc: "سيتم الإعلان عن الفرص الوظيفية وتفاصيل التقديم قريبًا.",
            el_about_history_title: "التاريخ",
            el_about_history_title_main: "التاريخ",
            el_about_ceo_quicklink: "CEO Eren DEMİRBAŞ",
            el_about_mission_title: "مهمتنا",
            el_home_about_title: "دادسون في سطور",
            el_home_about_p1: "بفضل تراكم خبرات مؤسسينا وتجاربهم منذ عام 1906، ولأكثر من قرن من الزمان، نعمل كواحدة من أكثر الشركات احتراماً وشهرة في قطاع المقاولات الكهربائية في تركيا. ومنذ تأسيسنا وحتى يومنا هذا، قمنا بإنجاز أعمال المقاولات الكهربائية في مئات المشاريع.",
            el_home_about_p2: "مهمتنا هي إنجاز جميع المشاريع التي نتعهد بها في الوقت المحدد، وبأعلى جودة يمكن الوصول إليها وفقًا للمعايير الدولية، دون أخطاء، وبسعر مثالي يعكس جودتنا. هدفنا هو أن نكون بين أفضل 3 شركات في العالم في مجال المقاولات الكهربائية.",
            el_home_stats_title: "دادسون بالأرقام",
            el_home_stats_tagline: "نمو مع ثقة تتجاوز قرناً من الزمان!",
            el_home_stats_item1: "سنوات من الخبرة",
            el_home_stats_item2: "مشروع",
            el_home_stats_item3: "مشاريع جارية",
            el_about_history_subtitle: "إرث يوجه الطاقة لثلاثة أجيال",
            el_about_history_p1: "تمثل شركة دادسون للكهرباء إرثاً عريقاً من الهندسة والمهارة الحرفية، وتعود جذورها إلى عام 1906 في محطة طرسوس الكهرومائية، وهي واحدة من أولى منشآت توليد الكهرباء في تركيا. حافظت عائلة ديميرباش على المعرفة والانضباط والخبرة الميدانية в قطاع الكهرباء لثلاثة أجيال، وأنجزت العديد من المشاريع الناجحة ولعبت دورًا مهمًا في تطوير البنية التحتية للطاقة من خلال علامات تجارية موثوقة مثل غوني للكهرباء وغوني للجهد الكهربائي.",
            el_about_history_p2: "ونتيجة لدمج هذا التراكم القوي مع الرؤية الحديثة، تأسست شركة دادسون للكهرباء في عام 2022 تحت قيادة Yusuf Eren DEMİRBAŞ، وتقدم حلولاً مبتكرة ومستدامة وعالية المعايير في مجالات المقاولات الكهربائية، وهندسة الإضاءة، وأنظمة الطاقة الشمسية، وتقنيات الأتمتة.",
            el_about_history_p3: "مستوحى اسمها من دمج الكلمتين الإنجليزيتين \"Dad\" (الأب) و \"Son\" (الابن)، فإن دادسون ليست مجرد علامة تجارية، بل هي رمز لثقافة مهنية، ومفهوم الثقة، ورؤية تمتد إلى المستقبل، وتنتقل عبر الأجيال. ومن خلال دمج الحرفية التقليدية مع النهج الهندسي المعاصر، تتبنى الشركة الجودة والجمال والكفاءة ورضا العملاء كمبادئ أساسية في كل مشروع.",
            el_about_history_p4: "انطلاقاً من رؤية \"عدم ترك شارع واحد غير مضاء\"، تواصل دادسون للكهرباء إنتاج مشاريع تضيف قيمة إلى المساحات المعيشية، وتنقل طاقة المدن إلى المستقبل، وتجمع بين التكنولوجيا والحلول الموجهة نحو الإنسان.",
            el_about_ceo_title: "الرئيس التنفيذي Eren DEMİRBAŞ",
            el_about_ceo_role: "رئيس مجلس الإدارة والرئيس التنفيذي",
            el_about_ceo_p1: "ولد Yusuf Eren DEMİRBAŞ في أضنة عام 2000. أكمل تعليمه المتوسط والثانوي في بورصة، وتعليمه الجامعي في الاقتصاد بجامعة إسكي شهير عثمان غازي. بعد إكمال تعليمه، بدأ عمله في قطاع الكهرباء والطاقة.",
            el_about_ceo_p2: "منذ عام 2018، عمل بشكل مكثف في قطاع هندسة الإضاءة وحلول الإضاءة المبتكرة، وقام بأنشطة لتقديم واستيراد تقنيات الإضاءة المبتكرة المستخدمة على نطاق واسع في الخارج إلى تركيا.",
            el_about_ceo_p3: "حتى عام 2021، عمل Yusuf Eren DEMİRBAŞ في شركة غوني للجهد الكهربائي للإنشاءات والمقاولات والتجارة والصناعة المحدودة، حيث كان شريكًا وعضوًا في مجلس الإدارة. حاليًا، يواصل مهامه كرئيس لمجلس الإدارة والرئيس التنفيذي لشركة دادسون للكهرباء والمقاولات والعقارات والسيارات والصناعة والتجارة المحدودة، والتي هو شريك مؤسس فيها.",
            el_about_ceo_p4: "يقيم Yusuf Eren DEMİRBAŞ في بورصة، ويشغل عضويات وأدواراً إدارية في العديد من الجمعيات والمؤسسات.",
            el_about_mission_section_title: "مهمتنا",
            el_about_mission_p1: "بصفتنا دادسون للكهرباء، فإن مهمتنا هي الجمع بين القوة الهندسية والخبرة الميدانية والتقنيات المبتكرة لتقديم حلول كهربائية موثوقة ومستدامة وعالية المعايير على المستويين الوطني والدولي.",
            el_about_mission_p2: "من خلال دمج تراكمنا المهني الممتد لثلاثة أجيال مع الفهم الحديث للهندسة، نضيف قيمة إلى المساحات المعيشية والمنشآت الصناعية والبنية التحتية الحضرية في مجالات المقاولات الكهربائية وأنظمة الطاقة وهندسة الإضاءة والأتمتة والطاقة المتجددة.",
            el_about_mission_p3: "تتبنى دادسون للكهرباء الجودة والسلامة والكفاءة والجمال كمبادئ أساسية في كل مشروع، وتهدف إلى إنتاج مشاريع لا تلبي احتياجات اليوم فحسب، بل تشكل أيضًا عالم الطاقة في المستقبل.",
            el_about_mission_p4: "من خلال نهجنا الموجه نحو الإنسان، والبنية التحتية الفنية القوية، ومفهوم الخدمة الموجهة نحو الحلول، نهدف إلى أن نكون علامة تجارية هندسية موثوقة في مناطق مختلفة من العالم.",
            el_about_goals_section_title: "أهدافنا",
            el_about_goals_li1: "أن نصبح علامة تجارية دولية تحقق نموًا مستدامًا في السوق العالمية كواحدة من شركات المقاولات الكهربائية الرائدة في تركيا.",
            el_about_goals_li2: "القيام بدور نشط في المشاريع الدولية وتطوير شراكات تجارية استراتيجية، لا سيما في أوروبا والشرق الأوسط ومنطقة الخليج وأفريقيا والجمهوريات التركية.",
            el_about_goals_li3: "الوصول إلى منصب المقاول الرئيسي بمعايير هندسية عالية في المقاولات الكهربائية، وأنظمة الطاقة الشمسية، وتقنيات المباني الذكية، والأتمتة الصناعية.",
            el_about_goals_li4: "تطوير مشاريع صديقة للبيئة ومستدامة وتثمن المستقبل في مجالات الطاقة المتجددة وكفاءة الطاقة.",
            el_about_goals_li5: "إنتاج حلول طاقة ذكية مناسبة لاحتياجات العالم الرقمي من خلال المتابعة الوثيقة للتحول التكنولوجي.",
            el_about_goals_li6: "أن نصبح رمزًا للثقة والهيبة في القطاع من خلال مشاريع آمنة وطويلة الأمد تتوافق مع معايير الجودة الدولية.",
            el_about_goals_li7: "إنشاء هيكل مؤسسي يتنافس على نطاق عالمي مع موظفين هندسيين متخصصين وفرق ميدانية قوية من خلال الاستثمار في الموارد البشرية.",
            el_about_goals_li8: "انطلاقاً من رؤية \"عدم ترك شارع واحد غير مضاء\"، للمشاركة في مشاريع تسهل الوصول إلى الطاقة وتساهم في تحول المدن والمساحات المعيشية.",
            elektrik_proj_tag_infra: "البنية التحتية والسكك الحديدية",
            elektrik_proj_1_title: "مشروع تأريض أساسات خط مترو بورصة",
            elektrik_proj_1_desc: "هندسة تأريض الأساسات وتمديد الكابلات عالية المعايير للأنفاق والمحطات والبنية التحتية للسكك الحديدية لمشروع بورصة للنقل السككي.",
            elektrik_proj_tag_solar: "طاقة متجددة",
            elektrik_proj_2_title: "تركيب محطة طاقة شمسية على أسطح المنشآت الصناعية",
            elektrik_proj_2_desc: "خدمات هندسة وتركيب EPC لمحطات الطاقة الشمسية على الأسطح عالية الكفاءة والصديقة للبيئة للمصانع والمنشآت الإنتاجية الكبرى.",
            elektrik_proj_tag_ind: "المقاولات الكهربائية",
            elektrik_proj_3_title: "مشروع تأريض أساسات مستشفى أنطاليا للمدينة",
            elektrik_proj_3_desc: "تركيب تأريض الأساسات باللحام الطارد للحرارة Cadweld بمعايير دولية، والمنفذ تحت إشراف YDA لإنشاءات مستشفى أنطاليا للمدينة.",
            elektrik_proj_tag_comm: "الإضاءة والأتمتة",
            elektrik_proj_4_title: "تصميم الإضاءة والمنزل الذكي لمشروع سكني فاخر",
            elektrik_proj_4_desc: "تكامل أتمتة المنزل الذكي (KNX) وتصميم هندسة الإضاءة الخارجية والداخلية الجمالية لمجمع بورصة نيلوفر السكني الفاخر."
        },
        ka: {
            el_service_proje_menu: "პროექტები & მართვა",
            el_service_ortagerilim_menu: "საშუალო ძაბვის სისტემები",
            el_service_5_title: "პროექტები & მართვა",
            el_service_5_desc: "რთული ელექტრო და ენერგეტიკული პროექტების პროფესიონალური მართვა და კონსულტაცია დიზაინიდან სრულ ჩაბარებამდე.",
            el_service_5_title_long: "პროექტების მართვისა და საკონსულტაციო მომსახურება",
            el_service_5_desc_long_1: "Dadson Electric კოორდინაციას უწევს რთული ელექტრო და ენერგეტიკული პროექტების ყველა პროცესს საწყისი ფაზიდან ჩაბარებამდე, პროფესიონალური პროექტების მართვის მეთოდოლოგიების გამოყენებით. საინჟინრო დიზაინის საერთაშორისო სტანდარტებთან შესაბამისობის ზედამხედველობისას, ჩვენ გარანტიას ვაძლევთ პროექტების დროულ დასრულებას ბიუჯეტის მართვის, რისკების ანალიზისა და სამუშაო გრაფიკის დაგეგმვის მეშვეობით.",
            el_service_5_desc_long_2: "ჩვენ ვახორციელებთ ყველა კოორდინაციას ჩვენი დამკვეთების სახელით, დაწყებული სამშენებლო მოედნის მართვიდან მასალების მიწოდების ჯაჭვის კონტროლამდე, იურიდიული ნებართვების პროცესებიდან მიღება-ჩაბარებამდე და ექსპლუატაციაში გაშვებამდე. ხარისხის უზრუნველყოფისა და ხარისხის კონტროლის (QA/QC) მექანიზმებით, ჩვენ მინიმუმამდე დაგვყავს შეცდომები სამუშაოების წარმოებისას, რაც უზრუნველყოფს თქვენი პროექტების ტექნიკური და ადმინისტრაციული კუთხით ხარისხიანად დასრულებას.",
            el_scope_5_1: "საინჟინრო დიზაინის ზედამხედველობა და პროექტის კოორდინაცია",
            el_scope_5_2: "ბიუჯეტის, ხარჯების კონტროლისა და დაგეგმვის მართვა",
            el_scope_5_3: "სამუშაო მოედნის ზედამხედველობა და შრომის უსაფრთხოების (HSE) აუდიტი",
            el_scope_5_4: "ტესტირების, ექსპლუატაციაში გაშვებისა და დროებითი მიღება-ჩაბარების კოორდინაცია",
            el_service_6_title: "საშუალო ძაბვის სისტემები",
            el_service_6_desc: "ტრანსფორმატორების, ქვესადგურებისა და გამანაწილებელი ქსელების უსაფრთხო დიზაინი, მონტაჟი და ტესტირება 36 კვ-მდე.",
            el_service_6_title_long: "საშუალო ძაბვის სისტემები",
            el_service_6_desc_long_1: "ენერგიის გადაცემისა და განაწილების ქსელების ყველაზე კრიტიკულ ფენაში - საშუალო ძაბვის (OG) სისტემების სფეროში, ჩვენ გთავაზობთ სრულ გადაწყვეტილებებს ჩვენი მაღალი საინჟინრო გამოცდილებით. ჩვენ ვახორციელებთ 36 კვ-მდე სამტრანსფორმატორო ქვესადგურების, საშუალო ძაბვის გამანაწილებელი ცენტრებისა და ღია გამანაწილებელი მოწყობილობების დიზაინს, მონტაჟსა და ექსპლუატაციაში გაშვებას უსაფრთხოების უმაღლესი სტანდარტების დაცვით.",
            el_service_6_desc_long_2: "სამრეწველო ობიექტების, ელექტროსადგურებისა და საქალაქო ქსელების უწყვეტი ენერგომომარაგების მიზნით, ჩვენ ზედმიწევნით ვახორციელებთ საშუალო ძაბვის ლითონის დახურული უჯრედების მონტაჟს, დამცავი რელეების კოორდინაციის ტესტებს და საშუალო ძაბვის საკაბელო შეერთებებს. ენერგეტიკული ნებართვების მიღებიდან დროებით მიღება-ჩაბარებამდე ყველა ოფიციალური დამტკიცების პროცესის მონიტორინგით, ჩვენ უზრუნველყოფთ თქვენი ობიექტების უსაფრთხო და მუდმივ ენერგომომარაგებას.",
            el_scope_6_1: "36 კვ სამტრანსფორმატორო ქვესადგურების და ღია გამანაწილებელი მოწყობილობების მონტაჟი",
            el_scope_6_2: "საშუალო ძაბვის ლითონის დახურული უჯრედების ინტეგრაცია",
            el_scope_6_3: "დამცავი რელეების პარამეტრების დაყენება და მეორადი დაცვის ტესტირება",
            el_scope_6_4: "საშუალო ძაბვის საკაბელო ქუროების, შეერთებების მონტაჟი, ტესტირება და გაშვება",

            el_service_taahhut_menu: "ელექტრო სამონტაჟო",
            el_service_aydinlatma_menu: "განათების არქიტექტურა",
            el_service_otomasyon_menu: "ავტომატიზაციის სისტემები",
            el_service_solar_menu: "მზის ენერგია (Solar GES)",
            el_service_1_title: "ელექტრო სამონტაჟო მომსახურება",
            el_service_2_title: "განათების არქიტექტურა და დიზაინი",
            el_service_3_title: "მრეწველობისა და შენობების ავტომატიზაცია",
            el_service_4_title: "მზის ენერგიის სისტემები (Solar GES)",
            el_service_1_desc_long_1: "Dadson Elektrik გთავაზობთ ელექტრო სამონტაჟო სამუშაოების სრულ გადაწყვეტილებებს საერთაშორისო საინჟინრო სტანდარტების შესაბამისად სამრეწველო ობიექტების, კომერციული შენობების, საცხოვრებელი პროექტებისა და ინფრასტრუქტურისთვის. ჩვენი საინჟინრო ჯგუფი და საველე სპეციალისტები მუშაობენ უსაფრთხოების მკაცრი წესების დაცვით პროექტირებიდან ექსპლუატაციაში შესვლამდე.",
            el_service_1_desc_long_2: "ჩვენ ვაპროექტებთ და ვამონტაჟებთ გამანაწილებელ ქსელებს დაბალი (AG) და საშუალო ძაბვის (OG) სისტემებისთვის, სატრანსფორმატორო ქვესადგურებსა და გენერატორების სინქრონიზაციის სისტემებს. ასევე ვაერთიანებთ უსაფრთხოების სუსტი დენების სისტემებს (ხანძარსაწინააღმდეგო, ვიდეომეთვალყურეობა CCTV და ქსელები) თქვენი სამუშაო გარემოს სტაბილურობისთვის.",
            el_service_2_desc_long_1: "სინათლე უმნიშვნელოვანესი არქიტექტურული ელემენტია, რომელიც ავლენს სივრცის ესთეტიკასა და ფუნქციონალურობას. Dadson ქმნის პრემიუმ განათების პროექტებს, რომლებიც აერთიანებს ესთეტიკას, ინჟინერიასა და ენერგოეფექტურობას. ჩვენ ვქმნით ინდივიდუალურ სცენარებს ინტერიერისთვის, ფასადებისა და ლანდშაფტური ზონებისთვის.",
            el_service_2_desc_long_2: "მდგრადი პროექტირების პრინციპების შესაბამისად, ვიყენებთ LED ტექნოლოგიებსა და ჭკვიანი ავტომატიზაციის სისტემებს ენერგიის მინიმალური მოხმარებისთვის. ჩვენ ვამუშავებთ უნიკალურ სანათებს და დინამიკურ ფასადის განათებას სასტუმროებისთვის, ოფისებისა და ელიტური სახლებისთვის, რითაც ხაზს ვუსვამთ თქვენი პროექტის პრესტიჟს.",
            el_service_3_desc_long_1: "ჩვენ ვაერთიანებთ მომავლის ტექნოლოგიებს დღევანდელ შენობებში და გთავაზობთ ავტომატიზაციის საიმედო გადაწყვეტილებებს ქარხნებისა და საცხოვრებელი კომპლექსებისთვის. ჩვენ ვაპროექტებთ მართვის სისტემებს ჭკვიანი სახლის ტექნოლოგიებიდან (KNX) მრეწველობის PLC და SCADA პროგრამულ უზრუნველყოფამდე.",
            el_service_3_desc_long_2: "ჩვენ ვამონტაჟებთ შენობების მართვის ცენტრალიზებულ სისტემებს (BMS), რომლებიც ახდენენ ენერგიის მოხმარების ოპტიმიზაციას და მართავენ ვენტილაციას, გათბობა-კონდიცირებას (HVAC), განათებასა და უსაფრთხოებას ერთი ცენტრიდან. ეს ამცირებს საექსპლუატაციო ხარჯებსა და გარემოზე ზემოქმედებას.",
            el_service_4_desc_long_1: "ეკოლოგიურად სუფთა მომავლისთვის, ჩვენ ვაშენებთ სახურავისა და მიწისზედა მზის ელექტროსადგურებს (GES) სრულად, რაც ბიზნესსა და საცხოვრებელ სექტორს საკუთარი სუფთა ენერგიის წარმოების საშუალებას აძლევს. ჩვენ სრულად ვუძღვებით პროექტებს პროექტირებიდან (EPC) იურიდიულ გაფორმებამდე.",
            el_service_4_desc_long_2: "ჩვენ ვაქცევთ თქვენს სახურავებსა და ნაკვეთებს მწვანე ენერგიის წყაროდ მაღალი ეფექტურობის Tier-1 პანელებით, ხარისხიანი ინვერტორებითა და გამძლე კონსტრუქციებით. საინვესტიციო ანალიზისა და ქსელთან მიერთების გარდა, გთავაზობთ პერიოდულ ტექნიკურ მომსახურებასა და დისტანციურ მონიტორინგს.",
            el_scope_1_1: "საშუალო ძაბვის (OG) ენერგეტიკული ინფრასტრუქტურა (ტრანსფორმატორები, ქვესადგურები)",
            el_scope_1_2: "დაბალი ძაბვის (AG) განაწილება და ფარის დამონტაჟება",
            el_scope_1_3: "სუსტი დენის სისტემები (სახანძრო სიგნალიზაცია, CCTV, უსაფრთხოება, ქსელი)",
            el_scope_1_4: "ქარხნების, სამრეწველო და საცხოვრებელი ობიექტების ელექტრო სამონტაჟო სამუშაოები",
            el_scope_2_1: "შიდა განათების დიზაინი (საცხოვრებელი, ოფისი, შოურუმი)",
            el_scope_2_2: "ფასადის განათების გადაწყვეტილებები (შენობები, სასტუმროები, ისტორიული ძეგლები)",
            el_scope_2_3: "ლანდშაფტისა და ტერიტორიის/ქუჩის განათების დიზაინი",
            el_scope_2_4: "ჭკვიანი განათების კონტროლისა და სცენარების ინტეგრაცია",
            el_scope_3_1: "ჭკვიანი სახლის და შენობების სისტემების პროექტირება და მონტაჟი (KNX)",
            el_scope_3_2: "სამრეწველო ავტომატიზაცია, PLC პროგრამირება და SCADA გადაწყვეტილებები",
            el_scope_3_3: "განათებისა და კლიმატკონტროლის (HVAC) ავტომატიზაციის ინტეგრაცია",
            el_scope_3_4: "ენერგიის მონიტორინგი და ცენტრალური მართვის პანელები",
            el_scope_4_1: "მზის ელექტროსადგურების მონტაჟი სახურავებზე (ქარხნები, საწყობები, სახლები)",
            el_scope_4_2: "მიწისზედა მზის ელექტროსადგურების პროექტირება და მონტაჟი",
            el_scope_4_3: "იურიდიული პროცედურები, ქსელური შეერთების ხელშეკრულებები და კონსულტაცია",
            el_scope_4_4: "მზის პანელების მოვლა, გაწმენდა და ეფექტურობის ანალიზის სერვისები",

            el_service_1_title: "ელექტრო სამონტაჟო სამუშაოები",
            el_service_1_desc: "მაღალი სტანდარტის ელექტრო ინფრასტრუქტურის გადაწყვეტილებები საცხოვრებელი, კომერციული და სამრეწველო ობიექტებისთვის.",
            el_service_2_title: "განათების არქიტექტურა",
            el_service_2_desc: "პრემიუმ კლასის, ენერგოეფექტური და განათების დიზაინი სივრცის ესთეტიკის გასაუმჯობესებლად.",
            el_service_3_title: "ავტომატიზაციის სისტემები",
            el_service_3_desc: "ავტომატიზაციის გადაწყვეტილებები, რომლებიც უზრუნველყოფენ კომფორტს, უსაფრთხოებას და ენერგოეფექტურობას ჭკვიანი შენობებისთვის.",
            el_service_4_title: "მზის ენერგია (Solar GES)",
            el_service_4_desc: "მზის ელექტროსადგურების სამონტაჟო და საინჟინრო მომსახურება მდგრადი მომავლისთვის.",
            el_services_main_title: "ჩვენი მომსახურება",
            el_services_main_subtitle: "ჩვენ ენერგიით ვუზრუნველყოფთ საცხოვრებელ სივრცეებსა და სამრეწველო ობიექტებს ჩვენი საინჟინრო ძალებითა და გამოცდილებით.",
            el_services_explore_btn: "დეტალური ინფორმაცია",

            nav_home: "მთავარი",
            nav_elektrik: "Dadson ელექტრიკი",
            nav_yapi: "Dadson კონსტრაქშენი",
            nav_hakkimizda: "ჩვენს შესახებ",
            nav_contact: "კონტაქტი",
            hero_title: "გლობალური ძალა, თანამედროვე ინჟინერია",
            hero_desc: "DADSON GROUP არის გლობალური სავაჭრო კომპანია",
            card_elektrik_title: "Dadson ელექტრიკი",
            card_elektrik_desc: "გლობალური სტანდარტების ელექტროტექნიკური და საინჟინრო ძალა მსხვილი სამრეწველო ობიექტებისა და ინფრასტრუქტურისთვის.",
            card_elektrik_btn: "აღმოაჩინე",
            card_yapi_title: "Dadson კონსტრაქშენი",
            card_yapi_desc: "ესთეტიკისა და გამძლეობის გაერთიანება პრესტიჟულ პროექტებში თანამედროვე ურბანიზმისა და პრემიუმ სამშენებლო სტანდარტებით.",
            card_yapi_btn: "აღმოაჩინე",
            card_about_title: "კორპორატიული",
            card_about_desc: "გაეცანით Dadson Group-ის საერთაშორისო ბიზნეს კულტურას, გლობალურ ხედვას და მდგრადობის პრინციპებს.",
            card_about_btn: "გაგვიცანით",
            footer_tagline: "ძალა, ნდობა და თანამედროვე საინჟინრო გადაწყვეტილებები გლობალური მასშტაბით.",
            footer_corp: "კორპორატიული",
            footer_about: "ჩვენს შესახებ",
            footer_vision: "ხედვა და მისია",
            footer_contact: "კონტაქტი",
            footer_companies: "ჯგუფის კომპანიები",
            footer_rights: "© 2026 Dadson Group. ყველა უფლება დაცულია.",
            contact_title: "კონტაქტი",
            contact_subtitle: "დაგვიკავშირდით უშუალოდ ჩვენი გლობალური ოპერაციებისა და პროექტებისთვის.",
            contact_call_title: "ტელეფონი",
            contact_call_desc: "დაგვირეკეთ",
            contact_wa_title: "WhatsApp",
            contact_wa_desc: "მხარდაჭერის ხაზი",
            contact_mail_title: "ელ-ფოსტა",
            contact_mail_desc: "მოგვწერეთ ელ-ფოსტაზე",
            about_hero_title: "კორპორატიული",
            about_hero_subtitle: "საუკუნეზე მეტი ხნის ოჯახური მემკვიდრეობა მომავლის ხედვას ერწყმის.",
            about_intro: "Dadson GROUP, თავის შემადგენლობაში მოქმედი კომპანიებით Dadson Electric და Dadson Construction, არის გლობალური სავაჭრო გაერთიანება, რომელიც ღიაა სხვადასხვა სექტორში მომსახურების გაწევისთვის და მიზნად ისახავს ძლიერ კომერციულ თანამშრომლობას. Dadson GROUP, რომელიც ეფუძნება ინსტიტუციონალიზაციას, მდგრად ზრდასა და სექტორთაშორის სინერგიას, სთავაზობს საერთო ხედვის პლატფორმას მეწარმეებს, ინვესტორებსა და პროფესიონალებს, რომელთაც სურთ ბიზნესის გაფართოება. ნდობის, დისციპლინის, ხარისხისა და ბიზნესის სტრატეგიული განვითარების პრინციპებით მოქმედი ჩვენი კომპანია ქმნის თანამედროვე სავაჭრო ეკოსისტემას, რომელიც მიზნად ისახავს ლოკალური წარმატებების საერთაშორისო მასშტაბით გაზრდას.",
            about_history_title: "ჩვენი ისტორია",
            about_story_title: "სამი თაობის გამოცდილება",
            about_story_p1: "დემირბაშის (DEMİRBAŞ) ოჯახმა, რომელმაც კომერციული საქმიანობა 1906 წელს თარსუსის ელექტროსადგურის მშენებლობითა და სამშენებლო სამუშაოებით დაიწყო, საუკუნეზე მეტი ხნის განმავლობაში ნდობის, სტაბილურობისა და საინჟინრო დისციპლინის სიმბოლოდ იქცა თურქეთის ენერგეტიკისა და მშენებლობის სექტორში. თაობების განმავლობაში გადაცემული ეს უდიდესი მემკვიდრეობა აშენდა არა მხოლოდ კომერციული წარმატებებით, არამედ ქვეყნის განვითარებაში შეტანილი ხედვითი პროექტებით, მდგრადი ბიზნეს მიდგომითა და ხარისხის უკომპრომისო პოლიტიკით.",
            about_story_p2: "საუკუნეზე მეტი ხნის განმავლობაში, საქმიანობის ყველა სფეროში მაღალი საინჟინრო სტანდარტების, ეთიკური ვაჭრობისა და უზადო სამუშაო დისციპლინის ძირითად პრინციპებად მიღებით, დემირბაშის ოჯახმა მოიპოვა პატივსაცემი და საიმედო პოზიცია სექტორში ენერგეტიკის, ელექტრო სამუშაოებისა და მშენებლობის სფეროში განხორციელებული უამრავი პროექტით. განსაკუთრებით 1990–2024 წლებში ელექტრო სამუშაოების სექტორში განხორციელებული პროექტებით, იგი აღიარებულ იქნა როგორც ერთ-ერთი წამყვანი ოჯახი ხარისხის, ტექნიკური კომპეტენციის, პროფესიული ორგანიზაციული სტრუქტურისა და გადაწყვეტაზე ორიენტირებული მიდგომის წყალობით.",
            about_story_p3: "ეს ოჯახური მემკვიდრეობა, რომელიც ეფუძნება წარსულის მყარ გამოცდილებას, 2022 წელს ახალ ეპოქაში გადავიდა მეოთხე თაობის წარმომადგენლის, Yusuf Eren DEMİRBAŞ-ის ხელმძღვანელობით. ინოვაციური აზროვნებით, თანამედროვე მართვის სტილითა და გლობალური ხედვით მოქმედმა ახალგაზრდა მეწარმემ გარდაქმნა მამისგან შვილზე თაობების განმავლობაში გადაცემული ეს დიდი გამოცდილება ეპოქის მოთხოვნების შესაბამისად და დააარსა DADSON GROUP COMPANY. კომპანიის სახელი შთაგონებულია 'Dad & Son' (მამა და შვილი) კონცეფციით, რაც სიმბოლურად გამოხატავს ოჯახურ კავშირებს, ერთგულებას, უწყვეტობას და თაობათა შორის მემკვიდრეობას. ეს სახელი მხოლოდ ბრენდი არ არის; იგი წარმოადგენს ძირძველ წარსულს, ძლიერ კუთვნილებასა და მომავლის დიდ ხედვას.",
            about_story_p4: "წარსულის საინჟინრო გამოცდილებისა და თანამედროვე სამყაროს ინოვაციური ბიზნეს მოდელების გაერთიანებით, DADSON GROUP COMPANY-მ არ შემოფარგლა თავისი საქმიანობის სფერო მხოლოდ ელექტრო სამუშაოებით; მან მიზნად დაისახა ძლიერი ეკოსისტემის შექმნა მშენებლობის, ენერგეტიკის, პროექტების მართვის, საინჟინრო და საინვესტიციო სფეროებში. კომპანია თავისი ტექნიკური კომპეტენციით, კორპორატიული ორგანიზაციული სტრუქტურითა და მდგრადი ზრდის სტრატეგიებით მიზნად ისახავს იყოს არა მხოლოდ მომსახურების მიმწოდებელი, არამედ ბრენდი, რომელიც ნდობას აშენებს.",
            about_story_p5: "დღეს DADSON GROUP COMPANY, თავისი კორპორატიული მიდგომით, რომელიც ორიენტირებულია ხარისხის, საიმედოობის, პრესტიჟისა და პროფესიონალიზმის პრინციპებზე, აგრძელებს საქმიანობას, როგორც ძლიერი ორგანიზაცია, რომელიც განსაზღვრავს მომავლის სამშენებლო და ენერგეტიკულ პროექტებს. თითოეულ პროექტში ესთეტიკის, საინჟინრო საქმისა და ფუნქციონალურობის გაერთიანებით, კომპანია მიზნად ისახავს შექმნას პროექტები, რომლებიც არა მხოლოდ პასუხობენ დღევანდელ საჭიროებებს, არამედ ადგენენ მომავლის სტანდარტებს.",
            about_story_p6: "DADSON GROUP COMPANY-ის ძირითადი ხედვაა გახდეს პატივსაცემი, წამყვანი და მდგრადი ბრენდი ენერგეტიკისა და მშენებლობის სექტორში ეროვნულ და საერთაშორისო დონეზე, და მაღალი ხარისხის მიდგომით ხელახლა განსაზღვროს სექტორის სტანდარტები. მისი მისიაა ღირებულების შექმნა კომპანიებისთვის, ინვესტორებისა და მეწარმეებისთვის საიმედო პარტნიორობის დამყარებით, ინოვაციური გადაწყვეტილებების შემუშავებითა და საინჟინრო დისციპლინის დაცვით.",
            about_story_p7: "საუკუნეზე მეტი ოჯახური მემკვიდრეობის ძალით მოქმედი DADSON GROUP COMPANY მიზნად ისახავს არა მხოლოდ პროექტების მშენებლობას, არამედ მუდმივი ღირებულებების შექმნას თავისი მრავალწლიანი გამოცდილების მომავლის ხედვასთან გაერთიანებით. რადგან DADSON-ისთვის წარმატება იზომება არა მხოლოდ დასრულებული პროექტებით, არამედ დატოვებული ნდობით, რეპუტაციითა და მდგრადი მემკვიდრეობით.",
            about_quote: "DADSON-ისთვის წარმატება იზომება არა მხოლოდ დასრულებული პროექტებით, არამედ დატოვებული ნდობით, რეპუტაციითა და მდგრადი მემკვიდრეობით.",
            about_why_title: "რატომ Dadsonი?",
            about_why_1_title: "მრავალწლიანი გამოცდილება",
            about_why_1_desc: "სექტორის სანდო ბრენდი სამი თაობის ცოდნითა და გამოცდილებით 1906 წლიდან.",
            about_why_2_title: "ხარისხის მაღალი სტანდარტები",
            about_why_2_desc: "გადაწყვეტილებები, რომლებიც პრიორიტეტს ანიჭებენ ესთეტიკას, ფუნქციონალურობასა და გამძლეობას თითოეულ პროექტში.",
            about_why_3_title: "ინოვაციური მიდგომა",
            about_why_3_desc: "მომავლის ფორმირების ხედვა თანამედროვე ტექნოლოგიებითა და ენერგიის მდგრადი გადაწყვეტილებებით.",
            about_why_4_title: "მომხმარებელზე ორიენტირებული მომსახურება",
            about_why_4_desc: "თითოეულ საჭიროებაზე მორგებული პროექტები მომხმარებლის კმაყოფილების საფუძველზე.",
            about_why_5_title: "ძლიერი ოჯახური მემკვიდრეობა",
            about_why_5_desc: "ბრენდი, რომელიც დაიბადა სიტყვების 'Dad' და 'Son' კომბინაციიდან, ოჯახური კავშირებისა და საიმედოობის სიმბოლოა.",
            about_services_title: "ჩვენი მომსახურება",
            about_srv_1_title: "ელექტრო სამუშაოები",
            about_srv_1_desc: "პროფესიონალური ელექტრო ინფრასტრუქტურის მომსახურება საცხოვრებელი, კომერციული და ინდუსტრიული პროექტებისთვის.",
            about_srv_2_title: "განათების არქიტექტურა",
            about_srv_2_desc: "განათების სპეციალური გადაწყვეტილებები, რომლებიც აუმჯობესებენ სივრცის ესთეტიკასა და ფუნქციონალურობას.",
            about_srv_3_title: "ელექტროობა & ინჟინერია",
            about_srv_3_desc: "საინჟინრო გადაწყვეტილებები ენერგოეფექტურობასა და უსაფრთხოებაზე ორიენტირებული.",
            about_srv_4_title: "ავტომატიზაციის სისტემები",
            about_srv_4_desc: "თანამედროვე გადაწყვეტილებები ჭკვიანი სახლისა და ინდუსტრიული ავტომატიზაციის სისტემებით.",
            about_srv_5_title: "მზის ენერგიის სისტემები",
            about_srv_5_desc: "ენერგიის მდგრადი გადაწყვეტილებები განახლებადი ენერგიის წყაროებით.",
            about_ref_title: "ჩვენი პარტნიორები",
            about_ref_subtitle: "ჩვენ ვართ საიმედო ბიზნეს პარტნიორი სექტორში ჩვენი წარმატებული პროექტებით."
        ,
            word_elektrik: "ელექტრიკი",
            word_yapi: "კონსტრაქშენი"
        ,
            word_dadson: "Dadson",
            elektrik_hero_title: "DADSON ელექტრიკი",
            elektrik_intro: "მაღალი ინჟინერია და ანაზრაურებადი ელექტროტექნიკური გადაწყვეტილებები გლობალური სტანდარტებით.",
            elektrik_services_title: "საქმიანობის სფეროები",
            elektrik_srv_1_title: "საშუალო ძაბვის (OG) სისტემები",
            elektrik_srv_2_title: "დაბალი ძაბვის (AG) მონტაჟი",
            elektrik_srv_3_title: "სუსტი დენის სისტემები",
            elektrik_srv_4_title: "სარკინიგზო სისტემები და ინფრასტრუქტურა",
            elektrik_solar_badge: "განახლებადი ენერგია",
            elektrik_solar_title: "მზის ენერგია (Solar GES)",
            elektrik_projects_title: "ჩვენი პროექტები",
            elektrik_filter_all: "ყველა",
            elektrik_filter_completed: "დასრულებული",
            elektrik_filter_ongoing: "მიმდინარე",
            elektrik_badge_completed: "დასრულდა",
            elektrik_badge_ongoing: "მიმდინარეობს",
            elektrik_ref_title: "ჩვენი პარტნიორები და რეკომენდაციები"
        ,
            nav_el_home: "მთავარი",
            nav_el_about: "ჩვენს შესახებ",
            nav_el_services: "სერვისები",
            nav_el_projects: "პროექტები",
            nav_el_career: "კარიერა",
            nav_el_contact: "კონტაქტი",
            nav_group_exit: "ჯგუფის საიტი",
            elektrik_services_empty_desc: "ჩვენი სერვისების დეტალები მალე განახლდება.",
            elektrik_projects_empty_desc: "სარეკომენდაციო პროექტები მალე დაემატება.",
            elektrik_career_empty_desc: "კარიერული შესაძლებლობები და განაცხადის დეტალები მალე გამოცხადდება.",
            el_about_history_title: "ისტორია",
            el_about_history_title_main: "ისტორია",
            el_about_ceo_quicklink: "CEO Eren DEMİRBAŞ",
            el_about_mission_title: "ჩვენი მისია",
            el_home_about_title: "DADSON მოკლედ",
            el_home_about_p1: "ჩვენი დამფუძნებლების 1906 წლიდან მოყოლებული, საუკუნეზე მეტი ხნის დაგროვილი გამოცდილებით, ვოპერირებთ როგორც ერთ-ერთი ყველაზე პატივსაცემი და ცნობილი კომპანია თურქეთში ელექტრომონტაჟის სექტორში. დაარსებიდან დღემდე ასობით პროექტში შევასრულეთ ელექტრომონტაჟის სამუშაოები.",
            el_home_about_p2: "ჩვენი მისიაა დათქმულ დროში, საერთაშორისო სტანდარტების შესაბამის უმაღლეს ხარისხში, უშეცდომოდ და ჩვენი ხარისხის ამსახველ ოპტიმალურ ფასად დავასრულოთ ყველა აღებული პროექტი. ჩვენი მიზანია შევიდეთ მსოფლიოს ტოპ 3 კომპანიაში ელექტრომონტაჟის სფეროში.",
            el_home_stats_title: "DADSON ციფრებში",
            el_home_stats_tagline: "ვიზრდებით საუკუნეზე მეტი ხნის ნდობით!",
            el_home_stats_item1: "წლის გამოცდილება",
            el_home_stats_item2: "პროექტი",
            el_home_stats_item3: "მიმდინარე პროექტი",
            el_about_history_subtitle: "სამი თაობის ენერგეტიკული მემკვიდრეობა",
            el_about_history_p1: "Dadson Electric წარმოადგენს საინჟინრო და ოსტატობის ღრმა მემკვიდრეობას, რომლის საფუძვლები 1906 წლიდან იწყება თარსუსის ჰიდროელექტროსადგურზე, რომელიც თურქეთში ელექტროენერგიის ერთ-ერთი პირველი გენერაციის ობიექტია. დემირბაშების ოჯახი, რომელიც სამი თაობის განმავლობაში ინარჩუნებს ცოდნას, დისციპლინასა და გამოცდილებას ელექტროენერგიის სექტორში, მრავალ წარმატებულ პროექტს ახორციელებს და მნიშვნელოვან როლს თამაშობს ენერგეტიკული ინფრასტრუქტურის განვითარებაში ისეთი სანდო ბრენდების მეშვეობით, როგორებიცაა Güney Elektrik და Güney Gerilim Elektrik.",
            el_about_history_p2: "ამ ძლიერი დაგროვების თანამედროვე ხედვასთან შერწყმის შედეგად, 2022 წელს Yusuf Eren DEMİRBAŞ-ის ხელმძღვანელობით დაარსდა Dadson Electric, რომელიც გთავაზობთ ინოვაციურ, მდგრად და მაღალი სტანდარტების გადაწყვეტილებებს ელექტრომონტაჟის, განათების არქიტექტურის, მზის ენერგიის სისტემებისა და ავტომატიზაციის ტექნოლოგიების სფეროებში.",
            el_about_history_p3: "სახელწოდება მომდინარეობს სიტყვების \"Dad\" (მამა) და \"Son\" (ვაჟი) შერწყმით, Dadson არ არის მხოლოდ ბრენდი, არამედ პროფესიული კულტურის, ნდობისა და მომავლის ხედვის სიმბოლოა, რომელიც თაობიდან თაობას გადაეცემა. ტრადიციული ოსტატობისა და თანამედროვე საინჟინრო მიდგომის შერწყმით, კომპანია ხარისხს, ესთეტიკას, ეფექტურობასა და მომხმარებლის კმაყოფილებას მიიჩნევს ფუნდამენტურ პრინციპებად ყოველ პროექტში.",
            el_about_history_p4: "რწმენით \"არ დავტოვოთ არცერთი ქუჩა გაუნათებელი\", Dadson Electric აგრძელებს პროექტების შექმნას, რომლებიც მატებს ღირებულებას საცხოვრებელ სივრცეებს, გადააქვს ქალაქების ენერგია მომავალში და აერთიანებს ტექნოლოგიას ადამიანზე ორიენტირებულ გადაწყვეტილებებთან.",
            el_about_ceo_title: "ჩვენი CEO Eren DEMİRBAŞ",
            el_about_ceo_role: "დირექტორთა საბჭოს თავმჯდომარე და CEO",
            el_about_ceo_p1: "Yusuf Eren DEMİRBAŞ დაიბადა ადანაში 2000 წელს. მან საშუალო და უმაღლესი განათლება მიიღო ბურსაში, ხოლო საუნივერსიტეტო განათლება ეკონომიკის მიმართულებით ესქიშეჰირ ოსმანგაზის უნივერსიტეტში. განათლების დასრულების შემდეგ მან მუშაობა დაიწყო ელექტროენერგიის და ენერგეტიკის სექტორში.",
            el_about_ceo_p2: "2018 წლიდან მუშაობს განათების არქიტექტურისა და ინოვაციური განათების გადაწყვეტილებების სექტორში, ეწევა საზღვარგარეთ ფართოდ გამოყენებული ინოვაციური განათების ტექნოლოგიების თურქეთში დანერგვასა და იმპორტს.",
            el_about_ceo_p3: "2021 წლამდე Yusuf Eren DEMİRBAŞ მუშაობდა Güney Gerilim Elektrik İnşaat Taah. Tic. ve San. LTD. ŞTİ-ში პარტნიორად და საბჭოს წევრად. ამჟამად აგრძელებს საქმიანობას დირექტორთა საბჭოს თავმჯდომარისა და CEO-ს პოზიციაზე Dadson Elektrik İnşaat Taahhüt Gayrimenkul Otomotiv Sanayi ve Ticaret Limited Şirketi-ში, რომლის თანადამფუძნებელიც არის.",
            el_about_ceo_p4: "ცხოვრობს ბურსაში, Yusuf Eren DEMİRBAŞ არის სხვადასხვა ასოციაციებისა და ორგანიზაციების წევრი და ხელმძღვანელი.",
            el_about_mission_section_title: "ჩვენი მისია",
            el_about_mission_p1: "როგორც Dadson Electric, ჩვენი მისიაა საინჟინრო ძალის, მინდორზე გამოცდილებისა და ინოვაციური ტექნოლოგიების გაერთიანებით შევთავაზოთ საიმედო, მდგრადი და უმაღლესი სტანდარტების ელექტრო გადაწყვეტილებები ეროვნულ და საერთაშორისო დონეზე.",
            el_about_mission_p2: "სამი თაობის პროფესიული დაგროვების თანამედროვე საინჟინრო ხედვასთან შერწყმით, ჩვენ ვმატებთ ღირებულებას საცხოვრებელ სივრცეებს, სამრეწველო ობიექტებსა და ურბანულ ინფრასტრუქტურას ელექტრომონტაჟის, ენერგეტიკული სისტემების, განათების არქიტექტურის, ავტომატიზაციისა და განახლებადი ენერგიის სფეროებში.",
            el_about_mission_p3: "ხარისხის, უსაფრთხოების, ეფექტურობისა და ესთეტიკის ძირითად პრინციპებად მიღებით, Dadson Electric მიზნად ისახავს შექმნას პროექტები, რომლებიც არა მხოლოდ აკმაყოფილებს დღევანდელ საჭიროებებს, არამედ აყალიბებს მომავლის ენერგეტიკულ სამყაროს.",
            el_about_mission_p4: "ჩვენი ადამიანზე ორიენტირებული მიდგომით, ძლიერი ტექნიკური ინფრასტრუქტურით და გადაწყვეტილებებზე ორიენტირებული მომსახურების კონცეფციით, ჩვენი მიზნია ვიყოთ სანდო საინჟინრო ბრენდი მსოფლიოს სხვადასხვა გეოგრაფიულ რეგიონებში.",
            el_about_goals_section_title: "ჩვენი მიზნები",
            el_about_goals_li1: "გავხდეთ საერთაშორისო ბრენდი, რომელიც უზრუნველყოფს მდგრად ზრდას გლობალურ ბაზარზე, როგორც თურქეთის ერთ-ერთი წამყვანი ელექტრომონტაჟის კომპანია.",
            el_about_goals_li2: "აქტიური როლი ვითამაშოთ საერთაშორისო პროექტებში და განვავითაროთ სტრატეგიული ბიზნეს პარტნიორობა, განსაკუთრებით ევროპაში, ახლო აღმოსავლეთში, ყურის რეგიონში, აფრიკასა და თურქულ რესპუბლიკებში.",
            el_about_goals_li3: "მივაღწიოთ მთავარი კონტრაქტორის პოზიციას მაღალი საინჟინრო სტანდარტებით ელექტრომონტაჟში, მზის ენერგიის სისტემებში, ჭკვიანი შენობების ტექნოლოგიებსა და სამრეწველო ავტომატიზაციაში.",
            el_about_goals_li4: "განვავითაროთ ეკოლოგიურად სუფთა, მდგრადი და მომავლის ღირებულების მქონე პროექტები განახლებად ენერგიასა და ენერგოეფექტურობაში.",
            el_about_goals_li5: "შევქმნათ ჭკვიანი ენერგეტიკული გადაწყვეტილებები, რომლებიც შეესაბამება ციფრული სამყაროს საჭიროებებს ტექნოლოგიური ტრანსფორმაციის ყურადღებით თვალყურის დევნებით.",
            el_about_goals_li6: "გავხდეთ ნდობისა და პრესტიჟის სიმბოლო სექტორში უსაფრთხო, გრძელვადიანი პროექტებით, რომლებიც შეესაბამება ხარისხის საერთაშორისო სტანდარტებს.",
            el_about_goals_li7: "შევქმნათ კორპორატიული სტრუქტურა, რომელიც კონკურენციას უწევს გლობალურ დონეზე სპეციალიზებული საინჟინრო პერსონალითა და ძლიერი საველე გუნდებით ადამიანურ რესურსებში ინვესტიციების განხორციელებით.",
            el_about_goals_li8: "ხედვით \"არ დავტოვოთ არცერთი ქუჩა გაუნათებელი\", განვახორციელოთ პროექტები, რომლებიც ხელს უწყობენ ენერგიაზე ხელმისაწვდომობას და ხელს უწყობენ ქალაქებისა და საცხოვრებელი სივრცეების ტრანსფორმაციას.",
            elektrik_proj_tag_infra: "ინფრასტრუქტურა და რკინიგზა",
            elektrik_proj_1_title: "ბურსას მეტროს ხაზის საძირკვლის დამიწების პროექტი",
            elektrik_proj_1_desc: "მაღალი სტანდარტების საძირკვლის დამიწებისა და საკაბელო ინჟინერია ბურსას სარკინიგზო ტრანზიტის პროექტის გვირაბების, სადგურებისა და რკინიგზის ინფრასტრუქტურისთვის.",
            elektrik_proj_tag_solar: "განახლებადი ენერგია",
            elektrik_proj_2_title: "სამრეწველო ობიექტის სახურავის მზის ელექტროსადგურის მონტაჟი",
            elektrik_proj_2_desc: "მაღალეფექტური, ეკოლოგიურად სუფთა სახურავის მზის ელექტროსადგურის ინჟინერია და EPC სამონტაჟო მომსახურება მსხვილი სამრეწველო საწარმოებისთვის.",
            elektrik_proj_tag_ind: "ელექტრო სამონტაჟო",
            elektrik_proj_3_title: "ანტალიის საქალაქო საავადმყოფოს საძირკვლის დამიწების პროექტი",
            elektrik_proj_3_desc: "საერთაშორისო სტანდარტების Cadweld ეგზოთერმული შედუღებით საძირკვლის დამიწების მონტაჟი, შესრულებული YDA Construction-ის ფარგლებში ანტალიის საავადმყოფოსთვის.",
            elektrik_proj_tag_comm: "განათება და ავტომატიზაცია",
            elektrik_proj_4_title: "ჭკვიანი სახლი და განათების დიზაინი მდიდრული საცხოვრებელი პროექტისთვის",
            elektrik_proj_4_desc: "ჭკვიანი სახლის (KNX) ავტომატიზაციის ინტეგრაცია და ესთეტიკური შიდა/გარე ფასადის განათების არქიტექტურული დიზაინი ბურსას ნილუფერის მდიდრული საცხოვრებელი კომპლექსისთვის."
        },
        ru: {
            el_service_proje_menu: "Управление проектами",
            el_service_ortagerilim_menu: "Системы среднего напряжения",
            el_service_5_title: "Управление проектами",
            el_service_5_desc: "Профессиональное управление проектами и консалтинг для сложных электрических и энергетических проектов на всех этапах.",
            el_service_5_title_long: "УСЛУГИ УПРАВЛЕНИЯ ПРОЕКТАМИ",
            el_service_5_desc_long_1: "Dadson Electric координирует все процессы сложных электрических и энергетических проектов от начальной фазы до сдачи, используя профессиональные методологии управления проектами. Контролируя соответствие инженерных решений международным стандартам, мы гарантируем своевременное завершение проектов с помощью контроля бюджета, анализа рисков и планирования графика работ.",
            el_service_5_desc_long_2: "Мы берем на себя всю координацию от имени наших заказчиков, включая управление площадкой, контроль цепочки поставок материалов, получение юридических разрешений, проведение испытаний и ввод в эксплуатацию. С нашими механизмами обеспечения качества и контроля качества (QA/QC) мы минимизируем ошибки на объекте, гарантируя завершение ваших проектов без дефектов и с наивысшей эффективностью.",
            el_scope_5_1: "Инженерный надзор за проектированием и координация проектов",
            el_scope_5_2: "Управление бюджетом, контроль затрат и планирование",
            el_scope_5_3: "Надзор на площадке и аудит охраны труда и техники безопасности (HSE)",
            el_scope_5_4: "Координация испытаний, ввода в эксплуатацию и промежуточной приемки",
            el_service_6_title: "Системы среднего напряжения",
            el_service_6_desc: "Безопасное проектирование, монтаж и испытание трансформаторных станций, распределительных устройств и сетей до 36 кВ.",
            el_service_6_title_long: "СИСТЕМЫ СРЕДНЕГО НАПРЯЖЕНИЯ",
            el_service_6_desc_long_1: "В сфере систем среднего напряжения (СН), составляющих наиболее критичный уровень сетей передачи и распределения электроэнергии, мы предлагаем комплексные решения под ключ на основе нашего высокого инженерного опыта. Мы осуществляем проектирование, монтаж и ввод в эксплуатацию трансформаторных подстанций до 36 кВ, распределительных пунктов СН и открытых распределительных устройств.",
            el_service_6_desc_long_2: "Для обеспечения бесперебойного энергоснабжения промышленных объектов, электростанций и городских сетей мы тщательно выполняем установку ячеек СН в металлической оболочке (metal-clad и metal-enclosed), испытания координации защитных реле и концевые заделки кабелей СН. Мы контролируем все этапы официального согласования, от получения разрешений на присоединение до сдачи в эксплуатацию.",
            el_scope_6_1: "Строительство трансформаторных подстанций и распределительных устройств 36 кВ",
            el_scope_6_2: "Интеграция ячеек среднего напряжения типа Metal-Clad и Metal-Enclosed",
            el_scope_6_3: "Настройка релейной защиты и проведение испытаний вторичной коммутации",
            el_scope_6_4: "Монтаж кабельных муфт среднего напряжения, испытания и ввод в эксплуатацию",

            el_service_taahhut_menu: "Электромонтаж",
            el_service_aydinlatma_menu: "Световой дизайн",
            el_service_otomasyon_menu: "Системы автоматизации",
            el_service_solar_menu: "Солнечная энергия (СЭС)",
            el_service_1_title: "УСЛУГИ ЭЛЕКТРОМОНТАЖА",
            el_service_2_title: "АРХИТЕКТУРНОЕ ОСВЕЩЕНИЕ И ДИЗАЙН",
            el_service_3_title: "ПРОМЫШЛЕННАЯ АВТОМАТИЗАЦИЯ И АВТОМАТИЗАЦИЯ ЗДАНИЙ",
            el_service_4_title: "СИСТЕМЫ СОЛНЕЧНОЙ ЭНЕРГИИ (Solar GES)",
            el_service_1_desc_long_1: "Dadson Electric предлагает готовые решения в области электромонтажа под ключ в соответствии с международными инженерными стандартами для крупных промышленных предприятий, коммерческих зданий, жилых комплексов и инфраструктурных объектов. Наша опытная команда инженеров и полевых специалистов работает по строгим принципам безопасности на каждом этапе от проектирования до ввода в эксплуатацию.",
            el_service_1_desc_long_2: "Мы проектируем и монтируем распределительные сети низкого (НН) и среднего напряжения (СН), трансформаторные подстанции, распределительные щиты и системы синхронизации генераторов. Мы также интегрируем современные слаботочные системы (пожарная сигнализация, видеонаблюдение CCTV и компьютерные сети) для обеспечения стабильной и безопасной рабочей среды.",
            el_service_2_desc_long_1: "Свет — важнейший архитектурный элемент, раскрывающий атмосферу и функциональность пространства. Dadson разрабатывает проекты освещения премиум-класса, сочетающие в себе эстетику, инженерию и энергоэффективность. Мы создаем индивидуальные сценарии освещения для любых объектов от интерьеров до фасадов зданий и ландшафтных зон.",
            el_service_2_desc_long_2: "Следуя принципам устойчивого проектирования, мы используем передовые светодиодные технологии (LED) и интеллектуальные системы автоматизации, которые минимизируют энергопотребление. Разрабатывая уникальные светильники и динамическую фасадную подсветку с гибким управлением для отелей, офисов и элитного жилья, мы подчеркиваем престиж вашего проекта.",
            el_service_3_desc_long_1: "Интегрируя технологии будущего в современные здания, Dadson предлагает надежные, эффективные решения по автоматизации для заводов и жилых комплексов. Мы проектируем системы управления под ключ от технологий умного дома (KNX) до программного обеспечения для промышленных контроллеров PLC и SCADA.",
            el_service_3_desc_long_2: "Мы внедряем единые системы управления зданиями (BMS), оптимизирующие энергопотребление и позволяющие контролировать вентиляцию, кондиционирование (HVAC), освещение и пожарную безопасность из общего центра. Это снижает эксплуатационные расходы и углеродный след предприятия для устойчивого будущего.",
            el_service_4_desc_long_1: "Стремясь к экологически чистому будущему с нулевыми выбросами, мы строим крышные и наземные солнечные электростанции (СЭС) под ключ, позволяя бизнесу и жилому сектору производить собственную чистую энергию. Мы полностью сопровождаем проекты от проектирования (EPC) до юридического оформления.",
            el_service_4_desc_long_2: "Мы превращаем ваши крыши и участки в источники зеленой энергии за счет высокоэффективных модулей Tier-1, качественных инверторов и долговечных конструкций. Помимо анализа окупаемости и подключения к сети, мы предоставляем услуги регулярного технического обслуживания СЭС и удаленного мониторинга.",
            el_scope_1_1: "Энергетическая инфраструктура среднего напряжения (СН) (трансформаторы, подстанции)",
            el_scope_1_2: "Распределительные устройства и щитовое оборудование низкого напряжения (НН)",
            el_scope_1_3: "Слаботочные системы (пожарная сигнализация, видеонаблюдение, СКУД, ЛВС)",
            el_scope_1_4: "Электромонтажные работы на заводах, промышленных и жилых объектах",
            el_scope_2_1: "Дизайн интерьерного освещения (жилые дома, офисы, шоурумы)",
            el_scope_2_2: "Решения для фасадного освещения (здания, отели, исторические памятники)",
            el_scope_2_3: "Ландшафтное освещение и освещение прилегающих территорий/дорог",
            el_scope_2_4: "Интеллектуальное управление и интеграция световых сценариев",
            el_scope_3_1: "Проектирование и интеграция систем «Умный дом» и «Умное здание» (KNX)",
            el_scope_3_2: "Промышленная автоматизация, программирование ПЛК и решения SCADA",
            el_scope_3_3: "Автоматизация и интеграция систем освещения и кондиционирования (HVAC)",
            el_scope_3_4: "Мониторинг энергопотребления и центральные панели управления автоматикой",
            el_scope_4_1: "Проектирование и монтаж крышных СЭС (заводы, склады, частные дома)",
            el_scope_4_2: "Проектирование и монтаж наземных солнечных электростанций",
            el_scope_4_3: "Юридическое сопровождение, согласование с сетями и оформление разрешений",
            el_scope_4_4: "Техническое обслуживание, чистка панелей и анализ эффективности СЭС",

            el_service_1_title: "Электромонтажные работы",
            el_service_1_desc: "Высокостандартные готовые решения в области электротехнической инфраструктуры для жилых, коммерческих и промышленных объектов.",
            el_service_2_title: "Архитектура освещения",
            el_service_2_desc: "Премиальные, энергоэффективные и ориентированные на пользователя дизайны освещения, повышающие эстетическую ценность пространств.",
            el_service_3_title: "Системы автоматизации",
            el_service_3_desc: "Решения по автоматизации, обеспечивающие комфорт, безопасность и энергоэффективность для умных зданий и промышленных предприятий.",
            el_service_4_title: "Солнечная энергия (Solar GES)",
            el_service_4_desc: "Проектирование и сдача «под ключ» крышных и наземных солнечных электростанций для устойчивого будущего.",
            el_services_main_title: "НАШИ УСЛУГИ",
            el_services_main_subtitle: "Мы обеспечиваем энергией жилые пространства и промышленные объекты благодаря нашему инженерному потенциалу и опыту.",
            el_services_explore_btn: "Подробнее",

            nav_home: "Главная",
            nav_elektrik: "Dadson Электрик",
            nav_yapi: "Dadson Строительство",
            nav_hakkimizda: "О нас",
            nav_contact: "Связаться",
            hero_title: "ГЛОБАЛЬНАЯ СИЛА, СОВРЕМЕННЫЙ ИНЖИНИРИНГ",
            hero_desc: "DADSON GROUP — ГЛОБАЛЬНАЯ ТОРГОВАЯ КОМПАНИЯ",
            card_elektrik_title: "Dadson Электрик",
            card_elektrik_desc: "Электромонтажные и инженерные мощности мирового уровня для крупных промышленных предприятий и инфраструктурных проектов.",
            card_elektrik_btn: "Подробнее",
            card_yapi_title: "Dadson Строительство",
            card_yapi_desc: "Сочетание эстетики и долговечности в престижных проектах с современным урбанизмом и премиальными стандартами.",
            card_yapi_btn: "Подробнее",
            card_about_title: "О компании",
            card_about_desc: "Узнайте больше о международной деловой культуре Dadson Group, глобальном видении и принципах устойчивого развития.",
            card_about_btn: "О нас",
            footer_tagline: "Сила, доверие и современные инженерные решения в глобальном масштабе.",
            footer_corp: "Компания",
            footer_about: "О нас",
            footer_vision: "Видение и миссия",
            footer_contact: "Контакты",
            footer_companies: "Компании группы",
            footer_rights: "© 2026 Dadson Group. Все права защищены.",
            contact_title: "КОНТАКТЫ",
            contact_subtitle: "Свяжитесь с нами напрямую по вопросам наших глобальных операций и проектов.",
            contact_call_title: "Телефон",
            contact_call_desc: "Позвонить нам",
            contact_wa_title: "WhatsApp",
            contact_wa_desc: "Линия поддержки",
            contact_mail_title: "Электронная почта",
            contact_mail_desc: "Написать письмо",
            about_hero_title: "О КОМПАНИИ",
            about_hero_subtitle: "Семейное наследие, наcчитывающее более века, соединяется с видением будущего.",
            about_intro: "Dadson GROUP совместно со входящими в его состав компаниями Dadson Electric и Dadson Construction представляет собой глобальную торговую организацию, готовую к оказанию услуг в различных отраслях и нацеленную на построение прочного коммерческого сотрудничества. Основываясь на принципах институционализации, устойчивого роста и межотраслевой синергии, Dadson GROUP предлагает единую концептуальную платформу для предпринимателей, инвесторов и профессионалов, стремящихся к развитию своего бизнеса. Действуя в духе доверия, дисциплины, качества и стратегического развития бизнеса, наша компания создает современную торговую экосистему, нацеленную на масштабирование локальных успехов на международном уровне.",
            about_history_title: "Наша история",
            about_story_title: "ОПЫТ ТРЕХ ПОКОЛЕНИЙ",
            about_story_p1: "Семья ДЕМИРБАШ, начавшая свою коммерческую деятельность в 1906 году со строительства и подрядных работ на электростанции Тарсус, стала символом доверия, стабильности и инженерной дисциплины в энергетическом и строительном секторах Турции благодаря своей более чем вековой истории. Это великое наследие, передающееся из поколения в поколение, строилось не только на коммерческих успехах, но и на дальновидных проектах, способствующих развитию страны, устойчивом ведении бизнеса и бескомпромиссной политике качества.",
            about_story_p2: "Приняв высокие инженерные стандарты, этическое понимание торговли и безупречную рабочую дисциплину в качестве основных принципов во всех сферах своей деятельности на протяжении более века, семья ДЕМИРБАШ заняла уважаемое и надежное положение в секторе благодаря многочисленным проектам в области энергетики, электромонтажных работ и строительства. Особенно благодаря проектам в секторе электромонтажных подрядных работ в период с 1990 по 2024 год, они стали признаны одной из ведущих семей в отрасли благодаря качеству, технической компетентности, профессиональной организационной структуре и ориентированному на решения подходу.",
            about_story_p3: "Это семейное наследие, уходящее корнями в богатый опыт прошлого, вступило в новую эру в 2022 году под руководством представителя четвертого поколения Yusuf Eren DEMİRBAŞ. Действуя на основе инновационного мышления, современного подхода к управлению и глобального видения, молодой предприниматель реструктурировал этот огромный опыт, передававшийся из поколения в поколение от отца к сыну, в соответствии с требованиями времени и вдохнул жизнь в бренд DADSON GROUP COMPANY. Название компании вдохновлено концепцией «Dad & Son» (Отец и Сын), символизирующей семейные узы, преданность, непрерывность и преемственность поколений. Это имя — не просто торговая марка, это отражение глубоких корней, сильного чувства сопричастности и великого видения будущего.",
            about_story_p4: "Объединяя инженерный опыт прошлого с инновационными бизнес-моделями современного мира, DADSON GROUP COMPANY не ограничивает сферу своей деятельности только услугами электромонтажа; компания нацелена на создание мощной экосистемы в строительстве, энергетике, управлении проектами, инжиниринге и инвестициях. Благодаря своей технической компетентности, корпоративной организационной структуре и стратегиям устойчивого роста компания стремится быть не просто структурой, предоставляющей услуги в своей сфере, а брендом, созидающим доверие.",
            about_story_p5: "Сегодня DADSON GROUP COMPANY благодаря своему корпоративному подходу, основанному на принципах качества, надежности, престижа и профессионализма, продолжает свою деятельность как мощная организация, определяющая направление строительных и энергетических проектов будущего. Объединяя в каждом проекте эстетику, инженерию и функциональность, компания стремится создавать проекты, которые не просто отвечают сегодняшним потребностям, но и устанавливают стандарты будущего.",
            about_story_p6: "Основное видение DADSON GROUP COMPANY заключается в том, чтобы стать уважаемым, ведущим и устойчивым брендом в энергетическом и строительном секторах как на национальном, так и на международном уровнях, переопределяя отраслевые стандарты на основе качественного подхода. Миссия компании — приносить пользу компаниям, инвесторам и предпринимателям путем установления надежных партнерских отношений, разработки инновационных решений и соблюдения строгой инженерной дисциплины.",
            about_story_p7: "Действуя с силой семейного наследия, насчитывающего более века, DADSON GROUP COMPANY стремится не просто строить проекты, а создавать долговечные ценности, сочетая свой богатый опыт с видением будущего. Ведь для DADSON успех измеряется не только завершенными проектами, но и оставленным после себя доверием, репутацией и устойчивым наследием.",
            about_quote: "Для DADSON успех измеряется не только завершенными проектами, но и оставленным после себя доверием, репутацией и устойчивым наследием.",
            about_why_title: "ПОЧЕМУ DADSON?",
            about_why_1_title: "Глубокий опыт",
            about_why_1_desc: "Надежный бренд в секторе с знаниями и опытом трех поколений с 1906 года.",
            about_why_2_title: "Стандарты качества",
            about_why_2_desc: "Решения, отдающие приоритет эстетике, функциональности и долговечности в каждом проекте.",
            about_why_3_title: "Инновационный подход",
            about_why_3_desc: "Видение будущего благодаря современным технологиям и экологически безопасным решениям в энергетике.",
            about_why_4_title: "Клиентоориентированность",
            about_why_4_desc: "Проекты, разработанные специально для любых нужд на основе удовлетворенности клиентов.",
            about_why_5_title: "Семейное наследие",
            about_why_5_desc: "Бренд, родившийся из слияния слов «Dad» и «Son», символизирующий семейные узы и надежность.",
            about_services_title: "НАШИ УСЛУГИ",
            about_srv_1_title: "Электромонтаж",
            about_srv_1_desc: "Профессиональные услуги по электроснабжению для жилых, коммерческих и промышленных объектов.",
            about_srv_2_title: "Световой дизайн",
            about_srv_2_desc: "Специальные световые решения, повышающие эстетику и функциональность пространства.",
            about_srv_3_title: "Электрика и инжиниринг",
            about_srv_3_desc: "Инженерные решения с акцентом на энергоэффективность и безопасность.",
            about_srv_4_title: "Системы автоматизации",
            about_srv_4_desc: "Современные решения для умных зданий и систем промышленной автоматизации.",
            about_srv_5_title: "Солнечная энергетика",
            about_srv_5_desc: "Экологически безопасные решения в энергетике на основе возобновляемых источников.",
            about_ref_title: "НАШИ РЕФЕРЕНЦИИ",
            about_ref_subtitle: "Мы являемся надежным деловым партнером в секторе благодаря нашим успешным проектам."
        ,
            word_elektrik: "Электрик",
            word_yapi: "Строительство"
        ,
            word_dadson: "Dadson",
            elektrik_hero_title: "DADSON ЭЛЕКТРИКА",
            elektrik_intro: "Высококлассный инжиниринг и готовые решения в области электромонтажа по мировым стандартам.",
            elektrik_services_title: "Наши сферы деятельности",
            elektrik_srv_1_title: "Системы среднего напряжения (СН)",
            elektrik_srv_2_title: "Установка низкого напряжения (НН)",
            elektrik_srv_3_title: "Слаботочные системы",
            elektrik_srv_4_title: "Рельсовые системы и инфраструктура",
            elektrik_solar_badge: "ВОЗОБНОВЛЯЕМАЯ ЭНЕРГИЯ",
            elektrik_solar_title: "Солнечная энергия (СЭС)",
            elektrik_projects_title: "Наши проекты",
            elektrik_filter_all: "Все",
            elektrik_filter_completed: "Завершенные",
            elektrik_filter_ongoing: "Текущие",
            elektrik_badge_completed: "Завершено",
            elektrik_badge_ongoing: "В процессе",
            elektrik_ref_title: "Наши партнеры и отзывы"
        ,
            nav_el_home: "ГЛАВНАЯ",
            nav_el_about: "О НАС",
            nav_el_services: "УСЛУГИ",
            nav_el_projects: "ПРОЕКТЫ",
            nav_el_career: "КАРЬЕРА",
            nav_el_contact: "КОНТАКТЫ",
            nav_group_exit: "САЙТ ГРУППЫ",
            elektrik_services_empty_desc: "Информация об услугах будет обновлена в ближайшее время.",
            elektrik_projects_empty_desc: "Примеры проектов будут добавлены в ближайшее время.",
            elektrik_career_empty_desc: "Информация о вакансиях и подаче резюме будет объявлена в ближайшее время.",
            el_about_history_title: "История",
            el_about_history_title_main: "ИСТОРИЯ",
            el_about_ceo_quicklink: "CEO Eren DEMİRBAŞ",
            el_about_mission_title: "Наша миссия",
            el_home_about_title: "DADSON В ДВУХ СЛОВАХ",
            el_home_about_p1: "Благодаря накопленному опыту наших основателей с 1906 года, на протяжении более века, мы работаем как одна из самых уважаемых и известных компаний в секторе электромонтажных работ в Турции. С момента нашего основания и по сей день мы выполнили электромонтажные работы в сотнях проектов.",
            el_home_about_p2: "Наша миссия заключается в том, чтобы выполнять все взятые на себя проекты вовремя, с наивысшим качеством, доступным по международным стандартам, без ошибок и по оптимальной цене, отражающей наше качество. Наша цель — войти в тройку лучших компаний мира в области электромонтажных работ.",
            el_home_stats_title: "DADSON В ЦИФРАХ",
            el_home_stats_tagline: "Растем с доверием на протяжении более века!",
            el_home_stats_item1: "лет опыта",
            el_home_stats_item2: "проектов",
            el_home_stats_item3: "текущих проектов",
            el_about_history_subtitle: "НАСЛЕДИЕ, НАПРАВЛЯЮЩЕЕ ЭНЕРГИЮ ТРИ ПОКОЛЕНИЯ",
            el_about_history_p1: "Dadson Electric представляет собой глубокое наследие инженерии и мастерства, основы которого восходят к 1906 году к гидроэлектростанции Тарсус, одной из первых электростанций в Турции. Семья Демирбаш, сохраняющая знания, дисциплину и полевой опыт в электроэнергетическом секторе на протяжении трех поколений, выполнила множество успешных проектов и сыграла важную роль в развитии энергетической инфраструктуры благодаря надежным брендам, таким как Güney Elektrik и Güney Gerilim Elektrik.",
            el_about_history_p2: "В результате объединения этого богатого опыта с современным видением в 2022 году под руководством Yusuf Eren DEMİRBAŞ была основана компания Dadson Electric, предлагающая инновационные, экологически устойчивые и высокостандартые решения в области электромонтажа, архитектурного освещения, систем солнечной энергии и технологий автоматизации.",
            el_about_history_p3: "Получив свое название от слияния английских слов \"Dad\" (отец) и \"Son\" (сын), Dadson — это не просто бренд, а символ профессиональной культуры, доверия и долгосрочного видения, передаваемого из поколения в поколение. Сочетая традиционное мастерство с современным инженерным подходом, компания принимает качество, эстетику, эффективность и удовлетворенность клиентов в качестве фундаментальных принципов в каждом проекте.",
            el_about_history_p4: "Руководствуясь видением \"не оставлять ни одной неосвещенной улицы\", Dadson Electric продолжает создавать проекты, которые приносят по жилым пространствам, несут энергию городов в будущее и объединяют технологии с решениями, ориентированными на человека.",
            el_about_ceo_title: "Наш CEO Eren DEMİRBAŞ",
            el_about_ceo_role: "Председатель совета директоров и CEO",
            el_about_ceo_p1: "Yusuf Eren DEMİRBAŞ родился в Адане в 2000 году. Он окончил среднюю и старшую школу в Бурсе, а высшее образование по специальности «Экономика» получил в Университете Эскишехир Османгази. После окончания учебы начал работу в сфере электроэнергетики и энергетики.",
            el_about_ceo_p2: "С 2018 года он активно работает в сфере архитектурного освещения и инновационных осветительных решений, внедряя и импортируя в Турцию инновационные технологии освещения, широко используемые за рубежом.",
            el_about_ceo_p3: "До 2021 года Yusuf Eren DEMİRBAŞ работал в компании Güney Gerilim Elektrik İnşaat Taah. Tic. ve San. LTD. ŞTİ в качестве партнера и члена совета директоров. В настоящее время он продолжает выполнять обязанности председателя совета директоров и генерального директора (CEO) компании Dadson Elektrik İnşaat Taahhüt Gayrimenkul Otomotiv Sanayi ve Ticaret Limited Şirketi, соучредителем которой является.",
            el_about_ceo_p4: "Проживая в Бурсе, Yusuf Eren DEMİRBAŞ является членом и руководителем различных ассоциаций и организаций.",
            el_about_mission_section_title: "НАША МИССИЯ",
            el_about_mission_p1: "Миссия Dadson Electric — объединить инженерную мощь, полевой опыт и инновационные технологии для предоставления надежных, устойчивых и высокостандартных решений в сфере электроснабжения на национальном и международном уровнях.",
            el_about_mission_p2: "Сочетая наш трехвековой профессиональный опыт с современным инженерным подходом, мы привносим ценность в жилые пространства, промышленные объекты и городскую инфраструктуру в областях электромонтажа, энергетических систем, архитектурного освещения, автоматизации и возобновляемой энергии.",
            el_about_mission_p3: "Принимая качество, безопасность, эффективность и эстетику в качестве основных принципов в каждом проекте, Dadson Electric стремится создавать проекты, которые не только отвечают сегодняшним потребностям, но и формируют энергетический мир будущего.",
            el_about_mission_p4: "Благодаря нашему ориентированному на человека подходу, сильной технической инфраструктуре и концепции услуг, нацеленной на решения, мы стремимся быть надежным инженерным брендом в различных регионах мира.",
            el_about_goals_section_title: "НАШИ ЦЕЛИ",
            el_about_goals_li1: "Стать ведущим международным брендом, обеспечивающим устойчивый рост на мировом рынке в качестве одной из ведущих электромонтажных компаний Турции.",
            el_about_goals_li2: "Играть активную роль в международных проектах и развивать стратегические деловые партнерства, особенно в Европе, на Ближнем Востоке, в регионе Персидского залива, в Африке и в тюркских республиках.",
            el_about_goals_li3: "Достичь позиции генерального подрядчика с высокими инженерными стандартами в области электромонтажа, солнечных энергосистем, технологий «умного дома» и промышленной автоматизации.",
            el_about_goals_li4: "Разрабатывать экологически чистые, устойчивые и ориентированные на будущее проекты в области возобновляемой энергетики и энергоэффективности.",
            el_about_goals_li5: "Создавать интеллектуальные энергетические решения, соответствующие потребностям цифрового мира, внимательно отслеживая технологические преобразования.",
            el_about_goals_li6: "Стать символом доверия и престижа в секторе благодаря безопасным, долговечным проектам, соответствующим международным стандартам качества.",
            el_about_goals_li7: "Создать корпоративную структуру, конкурирующую в глобальном масштабе, со специализированным инженерным персоналом и сильными полевыми бригадами путем инвестиций в человеческие ресурсы.",
            el_about_goals_li8: "Руководствуясь видением \"не оставлять ни одной неосвещенной улицы\", осуществлять проекты, облегчающие доступ к энергии и способствующие трансформации городов и жилых пространств.",
            elektrik_proj_tag_infra: "Инфраструктура и рельсовые системы",
            elektrik_proj_1_title: "Проект заземления фундамента линии метро в Бурсе",
            elektrik_proj_1_desc: "Высокостандартное проектирование заземления фундамента и прокладки кабелей для тоннелей, станций и рельсовой инфраструктуры метрополитена Бурсы.",
            elektrik_proj_tag_solar: "Возобновляемая энергия",
            elektrik_proj_2_title: "Крышная солнечная СЭС для промышленного предприятия",
            elektrik_proj_2_desc: "Проектирование и EPC-монтаж высокоэффективных и экологически чистых крышных солнечных электростанций для крупных промышленных объектов.",
            elektrik_proj_tag_ind: "Электромонтажные работы",
            elektrik_proj_3_title: "Проект заземления фундамента городской больницы Антальи",
            elektrik_proj_3_desc: "Монтаж заземления фундамента с использованием экзотермической сварки Cadweld по международным стандартам, выполненный под руководством YDA для больницы Антальи.",
            elektrik_proj_tag_comm: "Освещение и автоматизация",
            elektrik_proj_4_title: "Умный дом и световой дизайн элитного жилого комплекса",
            elektrik_proj_4_desc: "Интеграция автоматизации «умный дом» (KNX) и эстетический архитектурный дизайн интерьерного и фасадного освещения для элитного жилого комплекса в районе Нилюфер, Бурса."
        },
        fr: {
            el_service_proje_menu: "Gestion de Projets",
            el_service_ortagerilim_menu: "Moyenne Tension",
            el_service_5_title: "Gestion de Projets",
            el_service_5_desc: "Gestion de projet experte et conseil pour les projets électriques et énergétiques complexes, de la conception à la livraison.",
            el_service_5_title_long: "SERVICES DE GESTION DE PROJETS",
            el_service_5_desc_long_1: "Chez Dadson Électricité, nous coordonnons tous les processus des projets électriques et énergétiques complexes, de la phase initiale à la livraison, en utilisant des méthodologies professionnelles de gestion de projet. Tout en supervisant la conformité des conceptions d'ingénierie avec les normes internationales, nous garantissons la réalisation des projets dans les délais grâce à la gestion budgétaire, l'analyse des risques et la planification.",
            el_service_5_desc_long_2: "Nous assurons toute la coordination pour le compte de nos clients, de la gestion de chantier au contrôle de la chaîne d'approvisionnement en matériaux, en passant par les procédures administratives et la mise en service. Grâce à nos mécanismes d'assurance qualité et de contrôle qualité (QA/QC), nous éliminons les erreurs sur le terrain pour garantir des projets sans défauts et performants.",
            el_scope_5_1: "Supervision de la conception technique et coordination des projets",
            el_scope_5_2: "Gestion du budget, contrôle des coûts et planification",
            el_scope_5_3: "Supervision de chantier et audits de santé et sécurité au travail (HSE)",
            el_scope_5_4: "Coordination des essais, de la mise en service et de la réception provisoire",
            el_service_6_title: "Systèmes Moyenne Tension",
            el_service_6_desc: "Conception, installation et test en toute sécurité de postes de transformation, de postes de couplage et de réseaux jusqu'à 36 kV.",
            el_service_6_title_long: "SYSTÈMES MOYENNE TENSION",
            el_service_6_desc_long_1: "Dans le domaine des systèmes moyenne tension (MT), qui constituent la couche la plus critique des réseaux de transport et de distribution d'électricité, nous proposons des solutions clés en main basées sur notre expertise technique. Nous concevons, installons et mettons en service des postes de transformation jusqu'à 36 kV, des centres de distribution MT et des postes électriques extérieurs.",
            el_service_6_desc_long_2: "Afin de répondre aux besoins en énergie continue des sites industriels, des centrales électriques et des réseaux urbains, nous réalisons avec rigueur l'installation de cellules MT sous enveloppe métallique (metal-clad et metal-enclosed), les tests de protection et les raccordements de câbles MT. Nous gérons toutes les approbations officielles du raccordement à la réception finale.",
            el_scope_6_1: "Installation de postes de transformation et de couplage 36 kV",
            el_scope_6_2: "Intégration de cellules moyenne tension de type Metal-Clad et Metal-Enclosed",
            el_scope_6_3: "Configuration des relais de protection et tests de protection secondaire",
            el_scope_6_4: "Raccordement de câbles moyenne tension, jonctions, essais et mise en service",

            el_service_taahhut_menu: "Installations Électriques",
            el_service_aydinlatma_menu: "Éclairage Architectural",
            el_service_otomasyon_menu: "Systèmes d'Automatisation",
            el_service_solar_menu: "Énergie Solaire (Solar GES)",
            el_service_1_title: "SERVICES D'INSTALLATIONS ÉLECTRIQUES",
            el_service_2_title: "ÉCLAIRAGE ARCHITECTURAL ET DESIGN",
            el_service_3_title: "AUTOMATISATION INDUSTRIELLE ET DE BÂTIMENT",
            el_service_4_title: "SYSTÈMES D'ÉNERGIE SOLAIRE (Solar GES)",
            el_service_1_desc_long_1: "Chez Dadson Électricité, nous proposons des solutions clés en main d'installations électriques aux normes d'ingénierie internationales pour les complexes industriels, bâtiments commerciaux, projets résidentiels et infrastructures. De la conception aux tests et à la mise en service, nos ingénieurs et nos équipes de terrain travaillent selon des critères stricts de sécurité et de précision.",
            el_service_1_desc_long_2: "Nous concevons et déployons l'ensemble des réseaux de distribution, des systèmes basse tension (BT) et moyenne tension (MT) aux transformateurs, tableaux de distribution principaux et systèmes de synchronisation. Nous intégrons également les technologies de sécurité et de communication (détection incendie, vidéosurveillance CCTV, réseaux de données et courants faibles) pour garantir un environnement de travail sécurisé et continu.",
            el_service_2_desc_long_1: "La lumière révèle l'âme et la fonctionnalité des espaces. Dadson conçoit des solutions d'éclairage architectural haut de gamme alliant esthétique, ingénierie et efficacité énergétique. Nous concevons des scénarios d'éclairage sur mesure pour chaque projet, des espaces intérieurs aux façades, en passant par les aménagements paysagers et les monuments.",
            el_service_2_desc_long_2: "Axés sur la durabilité, nous utilisons des technologies LED avancées et des systèmes d'automatisation intelligente pour maximiser la valeur esthétique tout en réduisant la consommation d'énergie. Nous développons des luminaires sur mesure, des éclairages de façades dynamiques et des interfaces de contrôle pour les hôtels, centres commerciaux, bureaux et projets résidentiels de luxe.",
            el_service_3_desc_long_1: "Dadson intègre les technologies du futur dans les bâtiments d'aujourd'hui grâce à des solutions d'automatisation performantes, sécurisées et confortables. Nous concevons des systèmes de contrôle clés en main, de la domotique (KNX) aux progiciels de gestion PLC et SCADA pour les lignes de production industrielles.",
            el_service_3_desc_long_2: "Nous installons des systèmes de gestion technique de bâtiment (GTB/BMS) qui optimisent la consommation d'énergie et permettent de piloter le génie climatique (CVC), l'éclairage, la sécurité et la détection incendie depuis une interface unique. Cela réduit vos coûts d'exploitation et votre empreinte carbone pour un avenir plus vert.",
            el_service_4_desc_long_1: "Dans un objectif de transition énergétique et de décarbonation, nous installons des centrales solaires photovoltaïques en toiture ou au sol permettant aux entreprises et résidences de produire leur propre énergie propre. Nous gérons l'ensemble du projet : ingénierie, approvisionnement, construction (EPC) et conseil administratif.",
            el_service_4_desc_long_2: "Nous transformons vos toits et terrains en sources d'énergie verte grâce à des panneaux solaires Tier-1 à haut rendement, des onduleurs de qualité et des structures de montage durables. En plus de l'analyse d'investissement et du raccordement au réseau, nous assurons la maintenance périodique et le suivi à distance.",
            el_scope_1_1: "Infrastructure d'énergie moyenne tension (MT) (transformateurs, sous-stations)",
            el_scope_1_2: "Installations de distribution et tableaux électriques basse tension (BT)",
            el_scope_1_3: "Systèmes de courants faibles (détection incendie, vidéosurveillance, sécurité, réseau)",
            el_scope_1_4: "Travaux d'électricité générale pour usines, sites industriels et bâtiments résidentiels",
            el_scope_2_1: "Conception d'éclairage intérieur (résidentiel, bureau, showroom)",
            el_scope_2_2: "Solutions d'éclairage de façade (bâtiments, hôtels, monuments historiques)",
            el_scope_2_3: "Conceptions d'éclairage paysager, extérieur et routier",
            el_scope_2_4: "Contrôle d'éclairage intelligent et intégration de scénarios lumineux",
            el_scope_3_1: "Conception et installation de domotique et gestion technique de bâtiment (KNX)",
            el_scope_3_2: "Automatisation industrielle, programmation automate (API) et solutions SCADA",
            el_scope_3_3: "Intégration de l'automatisation de l'éclairage et du génie climatique (CVC)",
            el_scope_3_4: "Suivi de consommation énergétique et pupitres de commande centralisés",
            el_scope_4_1: "Installation photovoltaïque en toiture (usines, entrepôts, maisons résidentielles)",
            el_scope_4_2: "Ingénierie et installation sur site de centrales solaires au sol",
            el_scope_4_3: "Démarches administratives, contrats de raccordement réseau et conseil d'autorisation",
            el_scope_4_4: "Services de maintenance, nettoyage de panneaux et analyse de performance solaire",

            el_service_1_title: "Installations Électriques",
            el_service_1_desc: "Solutions d'infrastructure électrique clé en main de haut niveau pour les installations résidentielles, commerciales et industrielles.",
            el_service_2_title: "Éclairage Architectural",
            el_service_2_desc: "Conceptions d'éclairage haut de gamme, écoénergétiques et axées sur l'utilisateur qui rehaussent la valeur esthétique des espaces.",
            el_service_3_title: "Systèmes d'Automatisation",
            el_service_3_desc: "Solutions d'automatisation offrant confort, sécurité et efficacité énergétique pour les bâtiments intelligents et les usines industrielles.",
            el_service_4_title: "Énergie Solaire (Solar GES)",
            el_service_4_desc: "Installation et ingénierie clé en main de centrales solaires sur toiture et au sol pour un avenir durable.",
            el_services_main_title: "NOS SERVICES",
            el_services_main_subtitle: "Nous alimentons les espaces de vie et les installations industrielles grâce à notre force d'ingénierie et notre expérience.",
            el_services_explore_btn: "Détails",

            nav_home: "Accueil",
            nav_elektrik: "Dadson Électricité",
            nav_yapi: "Dadson Construction",
            nav_hakkimizda: "À Propos",
            nav_contact: "Contact",
            hero_title: "PUISSANCE GLOBALE, INGÉNIERIE MODERNE",
            hero_desc: "DADSON GROUP EST UNE SOCIÉTÉ COMMERCIALE MONDIALE",
            card_elektrik_title: "Dadson Électricité",
            card_elektrik_desc: "Ingénierie et installations électriques aux standards mondiaux pour les grands sites industriels et projets d'infrastructures.",
            card_elektrik_btn: "Découvrir",
            card_yapi_title: "Dadson Construction",
            card_yapi_desc: "Allier esthétique et durabilité dans des projets prestigieux grâce à l'urbanisme moderne et aux normes de construction de luxe.",
            card_yapi_btn: "Découvrir",
            card_about_title: "Entreprise",
            card_about_desc: "Découvrez la culture d'entreprise internationale, la vision globale et les principes de durabilité de Dadson Group.",
            card_about_btn: "Nous connaître",
            footer_tagline: "Puissance, confiance et solutions d'ingénierie moderne à l'échelle mondiale.",
            footer_corp: "Entreprise",
            footer_about: "À Propos",
            footer_vision: "Vision & Mission",
            footer_contact: "Contact",
            footer_companies: "Sociétés du groupe",
            footer_rights: "© 2026 Dadson Group. Tous droits réservés.",
            contact_title: "CONTACT",
            contact_subtitle: "Contactez-nous directement pour nos opérations et projets mondiaux.",
            contact_call_title: "Téléphone",
            contact_call_desc: "Appelez-nous",
            contact_wa_title: "WhatsApp",
            contact_wa_desc: "Ligne de Support",
            contact_mail_title: "E-mail",
            contact_mail_desc: "Envoyer un e-mail",
            about_hero_title: "ENTREPRISE",
            about_hero_subtitle: "Un héritage familial de plus d'un siècle s'unit à la vision de l'avenir.",
            about_intro: "Dadson GROUP, avec Dadson Électricité et Dadson Construction opérant sous son égide, est une organisation commerciale mondiale ouverte à servir différents secteurs et visant à établir de solides collaborations commerciales. Adoptant l'institutionnalisation, la croissance durable et la synergie intersectorielle comme principes fondamentaux, Dadson GROUP offre un cadre de vision partagé aux entrepreneurs, investisseurs et professionnels souhaitant développer leurs activités. Opérant avec un sens aigu de confiance, de discipline, de qualité et de développement commercial stratégique, notre entreprise crée un écosystème commercial moderne visant à étendre les succès locaux à l'échelle internationale.",
            about_history_title: "Notre histoire",
            about_story_title: "TROIS GÉNÉRATIONS D'EXPÉRIENCE",
            about_story_p1: "Ayant débuté sa vie commerciale en 1906 avec la construction et les activités contractuelles de la centrale électrique de Tarsus, la famille DEMİRBAŞ est devenue le symbole de la confiance, de la stabilité et de la discipline technique dans les secteurs turcs de l'énergie et de la construction grâce à une histoire centenaire. Ce grand patrimoine, transmis de génération en génération, s'est construit non seulement par des succès commerciaux, mais aussi par des projets visionnaires contribuant au développement du pays, une approche commerciale durable et une politique de qualité sans compromis.",
            about_story_p2: "Adoptant des normes d'ingénierie élevées, une éthique commerciale et une discipline de travail irréprochable comme principes fondamentaux dans tous les domaines d'activité depuis plus d'un siècle, la famille DEMİRBAŞ a acquis une position respectée et fiable dans le secteur grâce à d'innombrables projets menés dans l'énergie, l'électricité générale et la construction. Participeront à des projets d'électricité générale entre 1990 et 2024, elle est devenue l'une des familles pionnières grâce à sa qualité, sa compétence technique, sa structure organisationnelle professionnelle et son approche orientée solutions.",
            about_story_p3: "Cet héritage familial, ancré dans les solides expériences du passé, a été porté vers une nouvelle ère en 2022 sous la direction du représentant de la quatrième génération, Yusuf Eren DEMİRBAŞ. Animé par un esprit d'innovation, une gestion moderne et une vision globale, le jeune entrepreneur a restructuré ce grand savoir-faire transmis de père en fils depuis des générations pour l'adapter aux exigences de l'époque, donnant naissance à la marque DADSON GROUP COMPANY. Le nom de l'entreprise s'inspire du concept 'Dad & Son' (Père et Fils), symbolisant les liens familiaux, la loyauté, la continuité et la transmission intergénérationnelle. Ce nom n'est pas seulement une marque; il représente un passé ancré, un fort sentiment d'appartenance et une grande vision d'avenir.",
            about_story_p4: "Alliant l'expérience d'ingénierie du passé aux modèles d'affaires innovants du monde moderne, DADSON GROUP COMPANY n'a pas limité son champ d'activité aux services d'électricité générale; elle a visé à créer un écosystème solide dans la construction, l'énergie, la gestion de projet, l'ingénierie et l'investissement. Grâce à sa compétence technique, sa structure organisationnelle d'entreprise et ses stratégies de croissance durable, l'entreprise aspire à être non seulement un prestataire de services, mais une marque qui bâtit la confiance.",
            about_story_p5: "Aujourd'hui, avec son approche d'entreprise centrée sur les principes de qualité, de fiabilité, de prestige et de professionnalisme, DADSON GROUP COMPANY poursuit ses activités en tant qu'organisation solide orientant les projets de construction et d'énergie du futur. Alliant esthétique, ingénierie et fonctionnalité dans chaque projet, l'entreprise vise à réaliser des projets qui ne répondent pas seulement aux besoins d'aujourd'hui, mais définissent les normes de demain.",
            about_story_p6: "La vision fondamentale de DADSON GROUP COMPANY est de devenir une marque respectée, pionnière et durable dans les secteurs de l'énergie et de la construction à l'échelle nationale et internationale, en redéfinissant les normes du secteur grâce à une approche de haute qualité. Sa mission est d'apporter de la valeur aux entreprises, investisseurs et entrepreneurs en établissant des partenariats fiables, en développant des solutions innovantes et sans jamais compromettre la discipline technique.",
            about_story_p7: "Agissant avec la force d'un héritage familial de plus d'un siècle, DADSON GROUP COMPANY vise non seulement à réaliser des projets mais à produire des valeurs durables en combinant son expérience ancrée à la vision de l'avenir. Car pour DADSON, le succès ne se mesure pas seulement aux projets achevés, mais à la confiance, à la réputation et à l'héritage durable laissés derrière soi.",
            about_quote: "Pour DADSON, le succès se mesure non seulement aux projets achevés, mais à la confiance, à la réputation et à l'héritage durable laissés derrière soi.",
            about_why_title: "POURQUOI DADSON ?",
            about_why_1_title: "Expérience ancrée",
            about_why_1_desc: "Une marque de confiance dans le secteur grâce aux connaissances et à l'expérience de trois générations depuis 1906.",
            about_why_2_title: "Normes de qualité",
            about_why_2_desc: "Des solutions privilégiant l'esthétique, la fonctionnalité et la durabilité dans chaque projet.",
            about_why_3_title: "Approche innovante",
            about_why_3_desc: "Une vision pour façonner l'avenir avec des technologies modernes et des solutions énergétiques durables.",
            about_why_4_title: "Service client",
            about_why_4_desc: "Des projets conçus spécifiquement pour chaque besoin, basés sur la satisfaction du client.",
            about_why_5_title: "Héritage familial",
            about_why_5_desc: "Une marque née de l'association de 'Dad' et 'Son', symbolisant les liens familiaux et la fiabilité.",
            about_services_title: "NOS SERVICES",
            about_srv_1_title: "Electricité Générale",
            about_srv_1_desc: "Services professionnels d'infrastructures électriques pour projets résidentiels, commerciaux et industriels.",
            about_srv_2_title: "Eclairage d'Architecture",
            about_srv_2_desc: "Solutions d'éclairage spéciales qui rehaussent l'esthétique et la fonctionnalité des espaces.",
            about_srv_3_title: "Électricité & Ingénierie",
            about_srv_3_desc: "Solutions d'ingénierie axées sur l'efficacité énergétique et la sécurité.",
            about_srv_4_title: "Systèmes d'Automatisation",
            about_srv_4_desc: "Solutions modernes avec systèmes de bâtiment intelligent et d'automatisation industrielle.",
            about_srv_5_title: "Énergie Solaire",
            about_srv_5_desc: "Solutions énergétiques durables avec sources d'énergie renouvelables.",
            about_ref_title: "NOS RÉFÉRENCES",
            about_ref_subtitle: "Nous sommes un partenaire de confiance dans le secteur grâce à nos projets réussis."
        ,
            word_elektrik: "Électricité",
            word_yapi: "Construction"
        ,
            word_dadson: "Dadson",
            elektrik_hero_title: "DADSON ÉLECTRICITÉ",
            elektrik_intro: "Ingénierie de pointe et solutions d'installations électriques clé en main aux standards mondiaux.",
            elektrik_services_title: "Nos domaines d'activité",
            elektrik_srv_1_title: "Systèmes moyenne tension (MT)",
            elektrik_srv_2_title: "Installation basse tension (BT)",
            elektrik_srv_3_title: "Systèmes de courants faibles",
            elektrik_srv_4_title: "Systèmes ferroviaires & infrastructures",
            elektrik_solar_badge: "ÉNERGIE RENOUVELABLE",
            elektrik_solar_title: "Énergie solaire (Centrales GES)",
            elektrik_projects_title: "Nos projets",
            elektrik_filter_all: "Tout",
            elektrik_filter_completed: "Terminés",
            elektrik_filter_ongoing: "En cours",
            elektrik_badge_completed: "Terminé",
            elektrik_badge_ongoing: "En cours",
            elektrik_ref_title: "Nos partenaires & références"
        ,
            nav_el_home: "ACCUEIL",
            nav_el_about: "À PROPOS",
            nav_el_services: "SERVICES",
            nav_el_projects: "PROJETS",
            nav_el_career: "CARRIÈRE",
            nav_el_contact: "CONTACT",
            nav_group_exit: "SITE DU GROUPE",
            elektrik_services_empty_desc: "Les détails de nos services seront bientôt mis à jour.",
            elektrik_projects_empty_desc: "Nos projets de référence seront bientôt ajoutés.",
            elektrik_career_empty_desc: "Les opportunités de carrière et les détails de candidature seront annoncés prochainement.",
            el_about_history_title: "Histoire",
            el_about_history_title_main: "HISTOIRE",
            el_about_ceo_quicklink: "CEO Eren DEMİRBAŞ",
            el_about_mission_title: "Notre mission",
            el_home_about_title: "DADSON EN BREF",
            el_home_about_p1: "Forts du savoir-faire et de l'expérience de nos fondateurs depuis 1906, soit depuis plus d'un siècle, nous opérons comme l'une des entreprises les plus respectées et les plus connues du secteur de l'installation électrique en Turquie. Depuis notre création jusqu'à nos jours, nous avons réalisé des travaux d'installation électrique dans des centaines de projets.",
            el_home_about_p2: "Notre mission is de mener à bien tous les projets que nous entreprenons dans les délais, avec le plus haut niveau de qualité accessible selon les normes internationales, sans erreur, et à un prix optimal reflétant notre qualité. Notre objectif est de figurer parmi les 3 premières entreprises mondiales dans le domaine de l'installation électrique.",
            el_home_stats_title: "DADSON EN CHIFFRES",
            el_home_stats_tagline: "Grandir en toute confiance depuis plus d'un siècle !",
            el_home_stats_item1: "années d'expérience",
            el_home_stats_item2: "projets",
            el_home_stats_item3: "projets en cours",
            el_about_history_subtitle: "UN HÉRITAGE GUIDANT L'ÉNERGIE DEPUIS TROIS GÉNÉRATIONS",
            el_about_history_p1: "Dadson Électricité représente un héritage d'ingénierie et de savoir-faire profondément enraciné, dont les fondations remontent à 1906 avec la centrale hydroélectrique de Tarsus, l'une des premières installations de production d'électricité en Turquie. La famille Demirbaş, qui perpétue le savoir, la discipline et l'expérience de terrain dans le secteur de l'électricité depuis trois générations, a réalisé de nombreux projets couronnés de succès et a joué un rôle important dans le développement des infrastructures énergétiques à travers des marques fiables telles que Güney Elektrik et Güney Gerilim Elektrik.",
            el_about_history_p2: "Fruit de l'alliance de ce solide savoir-faire et d'une vision moderne, Dadson Électricité a été fondée en 2022 sous la direction de Yusuf Eren DEMİRBAŞ, proposant des solutions innovantes, durables et haut de gamme dans les domaines de l'installation électrique, de l'éclairage architectural, des systèmes d'énergie solaire et des technologies d'automatisation.",
            el_about_history_p3: "Tirant son nom de l'association des mots anglais \"Dad\" (père) et \"Son\" (fils), Dadson n'est pas seulement une marque, mais le symbole d'une culture professionnelle, d'une relation de confiance et d'une vision tournée vers l'avenir, transmises de génération en génération. Alliant savoir-faire traditionnel et ingénierie contemporaine, l'entreprise place la qualité, l'esthétique, l'efficacité et la satisfaction du client au cœur de chaque projet.",
            el_about_history_p4: "Forte de son ambition de « ne laisser aucune rue sans lumière », Dadson Électricité continue de concevoir des projets qui valorisent les espaces de vie, propulsent l'énergie des villes vers l'avenir et associent technologie et solutions axées sur l'humain.",
            el_about_ceo_title: "Notre CEO Eren DEMİRBAŞ",
            el_about_ceo_role: "Président du Conseil & CEO",
            el_about_ceo_p1: "Yusuf Eren DEMİRBAŞ est né à Adana en 2000. Il a fait ses études secondaires à Bursa et ses études universitaires en économie à l'Université Eskişehir Osmangazi. Après l'obtention de son diplôme, il a commencé sa carrière dans le secteur de l'électricité et de l'énergie.",
            el_about_ceo_p2: "Depuis 2018, he a travaillé activement dans le domaine de l'éclairage architectural et des solutions d'éclairage innovantes, œuvrant à l'introduction et à l'importation en Turquie des technologies d'éclairage innovantes couramment utilisées à l'étranger.",
            el_about_ceo_p3: "Jusqu'en 2021, Yusuf Eren DEMİRBAŞ a collaboré au sein de Güney Gerilim Elektrik İnşaat Taah. Tic. ve San. LTD. ŞTİ en tant qu'associé et membre du conseil d'administration. Il exerce aujourd'hui les fonctions de président du conseil d'administration et de directeur général (CEO) de Dadson Elektrik İnşaat Taahhüt Gayrimenkul Otomotiv Sanayi ve Ticaret Limited Şirketi, dont il est le cofondateur.",
            el_about_ceo_p4: "Résidant à Bursa, Yusuf Eren DEMİRBAŞ est membre et administrateur de diverses associations et organisations.",
            el_about_mission_section_title: "NOTRE MISSION",
            el_about_mission_p1: "Chez Dadson Électricité, notre mission consiste à conjuguer puissance d'ingénierie, expérience de terrain et technologies innovantes pour offrir des solutions électriques fiables, durables et de haute qualité à l'échelle nationale et internationale.",
            el_about_mission_p2: "En associant notre savoir-faire de trois générations à une vision moderne de l'ingénierie, nous valorisons les espaces de vie, les installations industrielles et les infrastructures urbaines dans les domaines de l'installation électrique, des systèmes énergétiques, de l'éclairage architectural, de l'automatisation et des énergies renouvelables.",
            el_about_mission_p3: "Plaçant la qualité, la sécurité, l'efficacité et l'esthétique au cœur de chaque réalisation, Dadson Électricité ambitionne de concevoir des projets qui non seulement répondent aux besoins actuels, mais façonnent également le monde énergétique de demain.",
            el_about_mission_p4: "Grâce à notre approche axée sur l'humain, nos solides compétences techniques et notre sens du service orienté vers les solutions, nous visons à être une marque d'ingénierie de confiance dans différentes régions du monde.",
            el_about_goals_section_title: "NOS OBJECTIFS",
            el_about_goals_li1: "Devenir une marque internationale assurant une croissance durable sur le marché mondial en tant que l'une des principales entreprises d'installations électriques de Turquie.",
            el_about_goals_li2: "Jouer un rôle actif dans les projets internationaux et développer des partenariats stratégiques, notamment en Europe, au Moyen-Orient, dans le Golfe, en Afrique et dans les Républiques turciques.",
            el_about_goals_li3: "Atteindre la position d'entrepreneur principal avec des normes d'ingénierie élevées dans l'installation électrique, le solaire photovoltaïque, la domotique et l'automatisation industrielle.",
            el_about_goals_li4: "Développer des projets éco-responsables, durables et à forte valeur d'avenir dans le domaine des énergies renouvelables et de l'efficacité énergétique.",
            el_about_goals_li5: "Concevoir des solutions énergétiques intelligentes adaptées aux besoins du monde numérique en suivant de près l'évolution technologique.",
            el_about_goals_li6: "Devenir un symbole de confiance et de prestige dans le secteur grâce à des projets sûrs, durables et conformes aux normes de qualité internationales.",
            el_about_goals_li7: "Structurer une entreprise compétitive au niveau mondial en investissant dans le capital humain, avec des ingénieurs spécialisés et des équipes de terrain performantes.",
            el_about_goals_li8: "Avec l'ambition de « ne laisser aucune rue sans lumière », mener des projets qui facilitent l'accès à l'énergie et soutiennent la transformation des villes et des espaces de vie.",
            elektrik_proj_tag_infra: "Infrastructure & Ferroviaire",
            elektrik_proj_1_title: "Projet de mise à la terre des fondations de la ligne de métro de Bursa",
            elektrik_proj_1_desc: "Ingénierie de haute qualité pour la mise à la terre des fondations et le câblage des tunnels, stations et infrastructures ferroviaires du projet de métro de Bursa.",
            elektrik_proj_tag_solar: "Énergie renouvelable",
            elektrik_proj_2_title: "Installation de centrale solaire sur toiture de site industriel",
            elektrik_proj_2_desc: "Services d'ingénierie et d'installation EPC de centrales solaires sur toiture à haute efficacité et respectueuses de l'environnement pour les sites industriels.",
            elektrik_proj_tag_ind: "Installations Électriques",
            elektrik_proj_3_title: "Projet de mise à la terre des fondations de l'Hôpital de la Ville d'Antalya",
            elektrik_proj_3_desc: "Installation de mise à la terre des fondations par soudure exothermique Cadweld aux normes internationales, réalisée sous la direction de YDA pour l'Hôpital d'Antalya.",
            elektrik_proj_tag_comm: "Éclairage & Domotique",
            elektrik_proj_4_title: "Maison intelligente & design d'éclairage pour projet résidentiel de luxe",
            elektrik_proj_4_desc: "Intégration domotique (KNX) et conception d'éclairage architectural extérieur et intérieur esthétique pour le complexe résidentiel de luxe à Bursa Nilüfer."
        },
        it: {
            el_service_proje_menu: "Gestione Progetti",
            el_service_ortagerilim_menu: "Media Tensione",
            el_service_5_title: "Gestione Progetti",
            el_service_5_desc: "Gestione progetti e consulenza professionale per progetti elettrici ed energetici complessi, dalla progettazione alla consegna chiavi in mano.",
            el_service_5_title_long: "SERVIZI DI GESTIONE PROGETTI",
            el_service_5_desc_long_1: "In Dadson Electric coordiniamo tutti i processi di progetti elettrici ed energetici complessi, dalla fase iniziale alla consegna, applicando metodologie professionali di project management. Oltre a supervisionare la conformità dei progetti ingegneristici agli standard internazionali, garantiamo il completamento nei tempi previsti tramite il controllo del budget, l'analisi dei rischi e la pianificazione.",
            el_service_5_desc_long_2: "Ci occupiamo di tutta la coordinazione per conto dei nostri committenti, dalla gestione del cantiere al controllo della catena di fornitura dei materiali, dalle pratiche burocratiche al collaudo e messa in servizio. Con i nostri sistemi di QA/QC, riduciamo a zero gli errori in cantiere, garantendo progetti conformi ed altamente efficienti.",
            el_scope_5_1: "Supervisione del design ingegneristico e coordinamento del progetto",
            el_scope_5_2: "Gestione del budget, controllo dei costi e pianificazione",
            el_scope_5_3: "Supervisione del sito e audit sulla salute e sicurezza sul lavoro (HSE)",
            el_scope_5_4: "Coordinamento di test, messa in servizio e collaudo provvisorio",
            el_service_6_title: "Sistemi di Media Tensione",
            el_service_6_desc: "Progettazione, installazione e collaudo in sicurezza di cabine di trasformazione, quadri di distribuzione e reti fino a 36 kV.",
            el_service_6_title_long: "SISTEMI DI MEDIA TENSIONE",
            el_service_6_desc_long_1: "Nel settore dei sistemi di media tensione (MT), che costituiscono il livello più critico delle reti di trasmissione e distribuzione dell'energia, offriamo soluzioni chiavi in mano basate sulla nostra elevata competenza. Eseguiamo la progettazione, l'installazione e la messa in servizio di cabine di trasformazione fino a 36 kV, centri di distribuzione MT e stazioni elettriche all'aperto.",
            el_service_6_desc_long_2: "Per soddisfare il fabbisogno di energia continua di impianti industriali, centrali elettriche e reti cittadine, eseguiamo l'installazione di scomparti MT protetti e blindati (metal-clad e metal-enclosed), test di coordinamento dei relè di protezione e giunzioni di cavi MT. Seguiamo tutte le approvazioni ufficiali, dall'ottenimento dei permessi al collaudo provvisorio.",
            el_scope_6_1: "Installazione di cabine di trasformazione e stazioni elettriche da 36 kV",
            el_scope_6_2: "Integrazione di scomparti di media tensione tipo Metal-Clad e Metal-Enclosed",
            el_scope_6_3: "Impostazione dei relè di protezione e prove di protezione secondaria",
            el_scope_6_4: "Giunzioni e terminazioni per cavi di media tensione, collaudo e messa in servizio",

            el_service_taahhut_menu: "Impiantistica Elettrica",
            el_service_aydinlatma_menu: "Illuminazione Architetturale",
            el_service_otomasyon_menu: "Sistemi di Automazione",
            el_service_solar_menu: "Energia Solare (Solar GES)",
            el_service_1_title: "SERVIZI DI IMPIANTISTICA ELETTRICA",
            el_service_2_title: "ILLUMINAZIONE ARCHITETTURALE E DESIGN",
            el_service_3_title: "AUTOMAZIONE INDUSTRIALE E DI EDIFICIO",
            el_service_4_title: "SISTEMI DI ENERGIA SOLARE (Solar GES)",
            el_service_1_desc_long_1: "Dadson Elettrica offre soluzioni chiavi in mano di impiantistica elettrica conformi agli standard ingegneristici internazionali per complessi industriali, edifici commerciali, progetti residenziali e infrastrutture. Dalla fase di progettazione ai collaudi e alla messa in servizio, i nostri ingegneri ed equipe sul campo lavorano con la massima sicurezza e precisione.",
            el_service_1_desc_long_2: "Progettiamo e installiamo reti di distribuzione, sistemi a bassa tensione (BT) e media tensione (MT), cabine di trasformazione, quadri di distribuzione principali e sistemi di sincronizzazione dei generatori. Integriamo inoltre sistemi di sicurezza e comunicazione (rilevazione incendi, videosorveglianza CCTV, reti dati e correnti deboli) per garantire ambienti operativi protetti e continui.",
            el_service_2_desc_long_1: "La luce esalta l'anima e la funzionalità degli spazi. Dadson realizza soluzioni di illuminazione architetturale di alto livello che fondono estetica, ingegneria ed efficienza energetica. Sviluppiamo scenari di luce su misura per ogni progetto, dagli ambienti interni alle facciate esterne, aree paesaggistiche e strutture monumentali.",
            el_service_2_desc_long_2: "Orientati alla sostenibilità, impieghiamo tecnologie LED avanzate e sistemi di automazione intelligente per massimizzare la resa estetica riducendo i consumi energetici. Progettiamo corpi illuminanti personalizzati, facciate dinamiche e interfacce di controllo che si adattano alle variazioni stagionali e giornaliere per hotel, centri commerciali, uffici e residenze di lusso.",
            el_service_3_desc_long_1: "Dadson integra le tecnologie del futuro negli edifici di oggi, offrendo soluzioni di automazione sicure, efficienti e confortevoli. Progettiamo sistemi di controllo chiavi in mano, dalla domotica (KNX) ai software PLC e SCADA per le linee di produzione industriali.",
            el_service_3_desc_long_2: "Installiamo sistemi di gestione centralizzata degli edifici (BMS) che ottimizzano i consumi energetici e consentono di monitorare e gestire climatizzazione (HVAC), illuminazione, sicurezza e impianti antincendio da un unico centro. Questo riduce i costi operativi e l'impronta di carbonio per un futuro ecosostenibile.",
            el_service_4_desc_long_1: "Con l'obiettivo di un futuro sostenibile e zero emissioni, installiamo impianti solari fotovoltaici su tetto e a terra per consentire ad aziende e residenze di produrre energia pulita. Gestiamo l'intero ciclo del progetto: ingegneria, approvvigionamento, costruzione (EPC) e consulenza burocratica.",
            el_service_4_desc_long_2: "Trasformiamo tetti e terreni in fonti di energia rinnovabile grazie a pannelli fotovoltaici Tier-1 ad alta efficienza, inverter di qualità e strutture di supporto durevoli. Oltre all'analisi dell'investimento e all'allaccio alla rete, forniamo manutenzione periodica e monitoraggio da remoto.",
            el_scope_1_1: "Infrastrutture energetiche a media tensione (MT) (trasformatori, cabine elettriche)",
            el_scope_1_2: "Quadri elettrici e sistemi di distribuzione a bassa tensione (BT)",
            el_scope_1_3: "Impianti a corrente debole (rilevamento incendi, TVCC, sicurezza, reti dati)",
            el_scope_1_4: "Opere di impiantistica elettrica per fabbriche, impianti industriali e complessi residenziali",
            el_scope_2_1: "Progettazione illuminotecnica per interni (residenze, uffici, showroom)",
            el_scope_2_2: "Soluzioni di illuminazione per facciate (edifici, hotel, monumenti storici)",
            el_scope_2_3: "Progettazione illuminotecnica per esterni, paesaggistica e stradale",
            el_scope_2_4: "Controllo intelligente della luce e integrazione di scenari domotici",
            el_scope_3_1: "Progettazione e installazione di sistemi domotici ed edifici intelligenti (KNX)",
            el_scope_3_2: "Automazione industriale, programmazione PLC e soluzioni di supervisione (SCADA)",
            el_scope_3_3: "Integrazione dell'automazione dell'illuminazione e climatizzazione (HVAC)",
            el_scope_3_4: "Monitoraggio energetico e pannelli centralizzati di controllo dell'automazione",
            el_scope_4_1: "Installazione e ingegneria di impianti fotovoltaici su tetto (fabbriche, magazzini, case)",
            el_scope_4_2: "Progettazione e installazione sul campo di parchi solari fotovoltaici a terra",
            el_scope_4_3: "Pratiche burocratiche, contratti di allaccio alla rete e consulenza autorizzativa",
            el_scope_4_4: "Servizi di manutenzione, pulizia pannelli e analisi delle prestazioni fotovoltaiche",

            el_service_1_title: "Impiantistica Elettrica",
            el_service_1_desc: "Soluzioni infrastrutturali elettriche chiavi in mano ad alto standard per strutture residenziali, commerciali e industriali.",
            el_service_2_title: "Illuminazione Architetturale",
            el_service_2_desc: "Progetti di illuminazione premium, a risparmio energetico e incentrati sull'utente che valorizzano il pregio estetico degli spazi.",
            el_service_3_title: "Sistemi di Automazione",
            el_service_3_desc: "Soluzioni di automazione che garantiscono comfort, sicurezza ed efficienza energetica per edifici intelligenti e impianti industriali.",
            el_service_4_title: "Energia Solare (Solar GES)",
            el_service_4_desc: "Installazione e ingegnerizzazione chiavi in mano di impianti solari fotovoltaici su tetto e a terra per un futuro sostenibile.",
            el_services_main_title: "I NOSTRI SERVIZI",
            el_services_main_subtitle: "Diamo energia agli spazi abitativi e agli impianti industriali con la nostra forza ingegneristica e la nostra esperienza.",
            el_services_explore_btn: "Dettagli",

            nav_home: "Home",
            nav_elektrik: "Dadson Elettrica",
            nav_yapi: "Dadson Costruzioni",
            nav_hakkimizda: "Chi Siamo",
            nav_contact: "Contattaci",
            hero_title: "POTENZA GLOBALE, INGEGNERIA MODERNA",
            hero_desc: "DADSON GROUP È UNA SOCIETÀ COMMERCIALE GLOBALE",
            card_elektrik_title: "Dadson Elettrica",
            card_elektrik_desc: "Ingegneria e impiantistica elettrica a standard globali per grandi impianti industriali e progetti di infrastrutture.",
            card_elektrik_btn: "Scopri",
            card_yapi_title: "Dadson Costruzioni",
            card_yapi_desc: "Unire estetica e durevolezza in progetti prestigiosi con concetti di urbanesimo moderno e standard edilizi di lusso.",
            card_yapi_btn: "Scopri",
            card_about_title: "Azienda",
            card_about_desc: "Scopri la cultura aziendale internazionale, la visione globale e i principi di sostenibilità del Gruppo Dadson.",
            card_about_btn: "Chi Siamo",
            footer_tagline: "Potenza, fiducia e soluzioni ingegneristiche moderne su scala globale.",
            footer_corp: "Azienda",
            footer_about: "Chi Siamo",
            footer_vision: "Visione e Missione",
            footer_contact: "Contatti",
            footer_companies: "Società del Gruppo",
            footer_rights: "© 2026 Gruppo Dadson. Tutti i diritti riservati.",
            contact_title: "CONTATTO",
            contact_subtitle: "Mettiti in contatto directo con noi per le nostre operazioni e progetti globali.",
            contact_call_title: "Telefono",
            contact_call_desc: "Chiamaci",
            contact_wa_title: "WhatsApp",
            contact_wa_desc: "Linea di Supporto",
            contact_mail_title: "E-mail",
            contact_mail_desc: "Invia un'e-mail",
            about_hero_title: "AZIENDA",
            about_hero_subtitle: "Un'eredità familiare di oltre un secolo si unisce alla visione del futuro.",
            about_intro: "Dadson GROUP, insieme a Dadson Electric e Dadson Construction che operano sotto la sua egida, è un'organizzazione commerciale globale aperta a servire diversi settori e orientata a solide collaborazioni commerciali. Adottando come principi cardine l'istituzionalizzazione, la crescita sostenibile e la sinergia intersettoriale, Dadson GROUP offre un quadro di visione condivisa a imprenditori, investitori e professionisti che desiderano espandere la propria attività. Operando con una filosofia basata su fiducia, disciplina, qualità e sviluppo strategico del business, la nostra azienda crea un ecosistema commerciale moderno con l'obiettivo di elevare i successi locali a livello internazionale.",
            about_history_title: "La nostra storia",
            about_story_title: "TRE GENERAZIONI DI ESPERIENZA",
            about_story_p1: "Iniziando la propria attività commerciale nel 1906 con la costruzione e le attività contrattuali della centrale elettrica di Tarsus, la famiglia DEMİRBAŞ è diventata il simbolo di fiducia, stabilità e disciplina ingegneristica nei settori dell'energia e delle costruzioni in Turchia, con una storia secolare. Questo grande patrimonio, tramandato di generazione in generazione, è stato costruito non solo attraverso i successi commerciali, ma anche con progetti visionari che contribuiscono allo sviluppo del paese, un approccio aziendale sostenibile e una politica di qualità senza compromessi.",
            about_story_p2: "Adottando standard ingegneristici elevati, un'etica commerciale e una disciplina lavorativa impeccabile come principi fondamentali in ogni settore di attività da oltre un secolo, la famiglia DEMİRBAŞ ha acquisito una posizione rispettata e affidabile grazie a innumerevoli progetti in campo energetico, impiantistico e costruttivo. In particolare, con i progetti intrapresi nel settore dell'impiantistica elettrica tra il 1990 e il 2024, si è affermata come una delle famiglie leader del settore per qualità, competenza tecnica, struttura organizzativa professionale e approccio orientato alle soluzioni.",
            about_story_p3: "Questo patrimonio di famiglia, radicato nelle forti esperienze del passato, è stato traghettato in una nuova era nel 2022 sotto la guida del rappresentante della quarta generazione, Yusuf Eren DEMİRBAŞ. Muovendosi con mentalità innovativa, approccio manageriale moderno e visione globale, il giovane imprenditore ha ristrutturato questo grande bagaglio di conoscenze tramandato di padre in figlio per generazioni per adattarlo alle esigenze dell'epoca, dando vita al marchio DADSON GROUP COMPANY. Il nome dell'azienda si ispira al concetto di 'Dad & Son' (Padre e Figlio), simboleggiando i legami familiari, la lealtà, la continuità e la trasmissione intergenerazionale. Questo nome non è semplicemente un marchio; rappresenta un passato radicato, un forte senso di appartenenza e una grande visione proiettata nel futuro.",
            about_story_p4: "Unendo l'esperienza ingegneristica del passato ai modelli di business innovativi del mondo moderno, DADSON GROUP COMPANY non ha limitato il proprio campo d'azione ai soli servizi di impiantistica elettrica; ha mirato a creare un forte ecosistema nei settori dell'edilizia, dell'energia, del project management, dell'ingegneria e degli investimenti. Grazie a competenza tecnica, struttura organizzativa aziendale e strategie di crescita sostenibile, l'azienda punta a essere non solo un fornitore di servizi, ma un marchio che costruisce fiducia.",
            about_story_p5: "Oggi, con il suo approccio aziendale centrato sui principi di qualità, affidabilità, prestigio e professionalità, DADSON GROUP COMPANY continua a operare come una solida organizzazione che guida i progetti edilizi ed energetici del futuro. Unendo estetica, ingegneria e funzionalità in ogni lavoro, l'azienda mira a realizzare progetti che non solo soddisfino le esigenze di oggi, ma definiscano gli standard del futuro.",
            about_story_p6: "La visione fondamentale di DADSON GROUP COMPANY è diventare un marchio rispettato, all'avanguardia e sostenibile nei settori dell'energia e dell'edilizia a livello nazionale e internazionale, ridefinendo gli standard del settore con un approccio di alta qualità. La sua missione è aggiungere valore ad aziende, investitori e imprenditori instaurando partnership affidabili, sviluppando soluzioni innovative e senza mai scendere a compromessi con la disciplina ingegneristica.",
            about_story_p7: "Agendo con la forza di un patrimonio familiare di oltre un secolo, DADSON GROUP COMPANY mira non solo a costruire progetti ma a produrre valori duraturi, unendo la sua radicata esperienza alla visione del futuro. Perché per DADSON il successo si misura non solo dai progetti completati, ma dalla fiducia, dalla reputazione e dall'eredità sostenibile lasciate alle spalle.",
            about_quote: "Per DADSON il successo si misura non solo dai progetti completati, ma dalla fiducia, dalla reputazione e dall'eredità sostenibile lasciate alle spalle.",
            about_why_title: "PERCHÉ DADSON?",
            about_why_1_title: "Esperienza Radicata",
            about_why_1_desc: "Un marchio affidabile nel settore con la conoscenza e l'esperienza di tre generazioni dal 1906.",
            about_why_2_title: "Standard di Qualità",
            about_why_2_desc: "Soluzioni che privilegiano estetica, funzionalità e durata in ogni progetto.",
            about_why_3_title: "Approccio Innovativo",
            about_why_3_desc: "Una visione per plasmare il futuro con tecnologie moderne e soluzioni energetiche sostenibili.",
            about_why_4_title: "Servizio al Cliente",
            about_why_4_desc: "Progetti progettati specificamente per ogni esigenza, basati sulla soddisfazione del cliente.",
            about_why_5_title: "Eredità Familiare",
            about_why_5_desc: "Un marchio nato dall'unione di 'Dad' e 'Son', che simboleggia i ligami familiari e l'affidabilità.",
            about_services_title: "I NOSTRI SERVIZI",
            about_srv_1_title: "Elettricità Generale",
            about_srv_1_desc: "Servizi di infrastrutture elettriche professionali per progetti residenziali, commerciali e industriali.",
            about_srv_2_title: "Illuminotecnica",
            about_srv_2_desc: "Soluzioni illuminotecniche speciali che esaltano l'estetica e la funzionalità degli spazi.",
            about_srv_3_title: "Elettricità & Ingegneria",
            about_srv_3_desc: "Soluzioni ingegneristiche focalizzate su efficienza energetica e sicurezza.",
            about_srv_4_title: "Sistemi di Automazione",
            about_srv_4_desc: "Soluzioni moderne con sistemi di domotica e automazione industriale.",
            about_srv_5_title: "Energia Solare",
            about_srv_5_desc: "Soluzioni energetiche sostenibili con fonti di energia rinnovabili.",
            about_ref_title: "I NOSTRI RIFERIMENTI",
            about_ref_subtitle: "Siamo un partner commerciale affidabile nel settore con i nostri progetti di successo."
        ,
            nav_el_home: "HOME",
            nav_el_about: "CHI SIAMO",
            nav_el_services: "SERVIZI",
            nav_el_projects: "PROGETTI",
            nav_el_career: "CARRIERA",
            nav_el_contact: "CONTATTI",
            nav_group_exit: "SITO DEL GRUPPO",
            elektrik_services_empty_desc: "I dettagli dei nostri servizi saranno aggiornati a breve.",
            elektrik_projects_empty_desc: "I nostri progetti di riferimento saranno aggiunti a breve.",
            elektrik_career_empty_desc: "Le opportunità di lavoro e i dettagli per la candidatura saranno annunciati a breve.",
            el_about_history_title: "Storia",
            el_about_history_title_main: "STORIA",
            el_about_ceo_quicklink: "CEO Eren DEMİRBAŞ",
            el_about_mission_title: "La nostra missione",
            el_home_about_title: "DADSON IN BREVE",
            el_home_about_p1: "Con il bagaglio di competenze e l'esperienza dei nostri fondatori dal 1906, da oltre un secolo operiamo come una delle aziende più stimate e conosciute nel settore dell'impiantistica elettrica in Turchia. Dalla nostra fondazione ad oggi, abbiamo completato lavori di installazione elettrica in centinaia di progetti.",
            el_home_about_p2: "La nostra missione è completare tutti i progetti che intraprendiamo in tempo, con la massima qualità accessibile secondo gli standard internazionali, senza errori e ad un prezzo oganizzato che rifletta la nostra qualità. Il nostro obiettivo è essere tra le prime 3 aziende al mondo nel campo dell'Impiantistica Elettrica.",
            el_home_stats_title: "DADSON IN CIFRE",
            el_home_stats_tagline: "Crescere con fiducia da oltre un secolo!",
            el_home_stats_item1: "anni di esperienza",
            el_home_stats_item2: "progetti",
            el_home_stats_item3: "progetti in corso",
            el_about_history_subtitle: "UN'EREDITÀ CHE GUIDA L'ENERGIA DA TRE GENERAZIONI",
            el_about_history_p1: "Dadson Elettrica rappresenta un'eredità storica di ingegneria e maestria, con radici che risalgono al 1906 con la centrale idroelettrica di Tarsus, uno dei primi impianti di generazione elettrica in Turchia. La famiglia Demirbaş, che tramanda conoscenza, disciplina ed esperienza sul campo nel settore elettrico da tre generazioni, ha realizzato numerosi progetti di successo e ha svolto un ruolo chiave nello sviluppo delle infrastrutture energetiche attraverso marchi affidabili come Güney Elektrik e Güney Gerilim Elektrik.",
            el_about_history_p2: "Dall'unione di questo solido bagaglio di competenze e di una visione moderna, nasce nel 2022 Dadson Elettrica, guidata da Yusuf Eren DEMİRBAŞ, che offre soluzioni innovative, sostenibili e di alta qualità nei settori dell'impiantistica elettrica, dell'illuminazione architetturale, dei sistemi di energia solare e delle tecnologie di automazione.",
            el_about_history_p3: "Il nome deriva dall'unione delle parole inglesi \"Dad\" (padre) e \"Son\" (figlio): Dadson non è solo un marchio, ma il simbolo di una cultura professionale, di un rapporto di fiducia e di una visione proiettata nel futuro, tramandati di generazione in generazione. Fondendo l'artigianato tradizionale con un moderno approccio ingegneristico, l'azienda assume qualità, estetica, efficienza e soddisfazione del cliente come principi cardine di ogni progetto.",
            el_about_history_p4: "Forte dell'obiettivo di «non lasciare nessuna strada senza luce», Dadson Elettrica continua a realizzare progetti che valorizzano gli spazi abitativi, proiettano l'energia delle città nel futuro e coniugano tecnologia e soluzioni a misura d'uomo.",
            el_about_ceo_title: "Il nostro CEO Eren DEMİRBAŞ",
            el_about_ceo_role: "Presidente del Consiglio & CEO",
            el_about_ceo_p1: "Yusuf Eren DEMİRBAŞ è nato ad Adana nel 2000. Ha completato gli studi secondari a Bursa e si è laureato in Economia presso l'Università Eskişehir Osmangazi. Al termine del percorso accademico, ha iniziato la sua carriera nel settore dell'energia e dell'elettricità.",
            el_about_ceo_p2: "Dal 2018 lavora attivamente nel settore dell'illuminazione architetturale e delle soluzioni illuminotecniche innovative, operando per introdurre e importare in Turchia tecnologie all'avanguardia ampiamente divise all'estero.",
            el_about_ceo_p3: "Fino al 2021, Yusuf Eren DEMİRBAŞ ha lavorato come socio e membro del consiglio di amministrazione presso Güney Gerilim Elektrik İnşaat Taah. Tic. ve San. LTD. ŞTİ. Attualmente ricopre le cariche di presidente del consiglio di amministrazione e amministratore delegato (CEO) di Dadson Elektrik İnşaat Taahhüt Gayrimenkul Otomotiv Sanayi ve Ticaret Limited Şirketi, di cui è socio fondatore.",
            el_about_ceo_p4: "Residente a Bursa, Yusuf Eren DEMİRBAŞ è membro e consigliere di diverse associazioni e organizzazioni di categoria.",
            el_about_mission_section_title: "LA NOSTRA MISSIONE",
            el_about_mission_p1: "In Dadson Elettrica la nostra missione consiste nell'unire forza ingegneristica, esperienza sul campo e tecnologie all'avanguardia per offrire soluzioni elettriche affidabili, sostenibili e di alta qualità a livello nazionale e internazionale.",
            el_about_mission_p2: "Integrando il nostro patrimonio professionale di tre generazioni con una concezione moderna dell'ingegneria, valorizziamo gli spazi residenziali, gli impianti industriali e le infrastrutture urbane nei settori dell'installazione elettrica, dei sistemi energetici, dell'illuminazione architetturale, dell'automazione e delle energie rinnovabili.",
            el_about_mission_p3: "Assumendo qualità, sicurezza, efficienza ed estetica come punti cardine di ogni realizzazione, Dadson Elettrica punta a sviluppare progetti che non solo rispondano alle esigenze di oggi, ma plasmino anche il futuro mondo dell'energia.",
            el_about_mission_p4: "Con il nostro approccio a misura d'uomo, una solida base tecnica e un servizio orientato alle soluzioni, miriamo a essere un marchio ingegneristico di riferimento e di fiducia in diverse aree del mondo.",
            el_about_goals_section_title: "I NOSTRI OBIETTIVI",
            el_about_goals_li1: "Diventare un marchio internazionale in grado di garantire una crescita costante sul mercato globale in qualità di una delle principali imprese di impiantistica elettrica in Turchia.",
            el_about_goals_li2: "Svolgere un ruolo attivo nei progetti internazionali e stringere partnership commerciali strategiche, in particolare in Europa, Medio Oriente, area del Golfo, Africa e nelle Repubbliche turcofone.",
            el_about_goals_li3: "Raggiungere la posizione di general contractor con elevati standard ingegneristici nell'installazione elettrica, nel solare fotovoltaico, nella domotica e nell'automazione industriale.",
            el_about_goals_li4: "Sviluppare progetti ecosostenibili, durevoli e orientati al futuro nel settore delle energie rinnovabili e dell'efficienza energetica.",
            el_about_goals_li5: "Progettare soluzioni energetiche intelligenti che rispondano alle esigenze del mondo digitale seguendo da vicino l'evoluzione tecnologica.",
            el_about_goals_li6: "Diventare un simbolo di fiducia e di prestigio nel settore grazie a progetti sicuri, duraturi e conformi alle norme di qualità internazionali.",
            el_about_goals_li7: "Strutturare un'azienda competitiva a livello globale investendo nelle risorse umane, con ingegneri specializzati e team sul campo altamente performanti.",
            el_about_goals_li8: "Con l'obiettivo di «non lasciare nessuna strada senza luce», realizzare progetti che facilitino l'accesso all'energia e supportino la transformação delle città e degli spazi abitativi.",
            word_elektrik: "Elettrica",
            word_yapi: "Costruzioni",
            word_dadson: "Dadson",
            elektrik_hero_title: "DADSON ELETTRICA",
            elektrik_intro: "Ingegneria avanzata e soluzioni di impiantistica elettrica chiavi in mano a standard globali.",
            elektrik_services_title: "I nostri campi di attività",
            elektrik_srv_1_title: "Sistemi a media tensione (MT)",
            elektrik_srv_2_title: "Installazione a bassa tensione (BT)",
            elektrik_srv_3_title: "Sistemi a correnti deboli",
            elektrik_srv_4_title: "Sistemi ferroviari & infrastrutture",
            elektrik_solar_badge: "ENERGIA RINNOVABILE",
            elektrik_solar_title: "Energia solare (Impianti GES)",
            elektrik_projects_title: "I nostri progetti",
            elektrik_filter_all: "Tutti",
            elektrik_filter_completed: "Completati",
            elektrik_filter_ongoing: "In corso",
            elektrik_badge_completed: "Completato",
            elektrik_badge_ongoing: "In corso",
            elektrik_ref_title: "I nostri partner & referenze"
        ,
            elektrik_proj_tag_infra: "Infrastrutture e Sistemi Ferroviari",
            elektrik_proj_1_title: "Progetto di messa a terra delle fondazioni della linea metropolitana di Bursa",
            elektrik_proj_1_desc: "Ingegneria di alto livello per la messa a terra delle fondazioni e il cablaggio di tunnel, stazioni e infrastrutture ferroviarie del progetto metropolitano di Bursa.",
            elektrik_proj_tag_solar: "Energia rinnovabile",
            elektrik_proj_2_title: "Installazione di impianto fotovoltaico su tetto industriale",
            elektrik_proj_2_desc: "Servizi di ingegneria e installazione EPC di impianti solari su tetto ad alta efficienza ed ecocompatibili per grandi stabilimenti produttivi.",
            elektrik_proj_tag_ind: "Impiantistica Elettrica",
            elektrik_proj_3_title: "Progetto di messa a terra delle fondazioni dell'Ospedale Civico di Antalya",
            elektrik_proj_3_desc: "Installazione di messa a terra delle fondazioni con saldatura esotermica Cadweld a standard internazionali, eseguita sotto la direzione di YDA per l'Ospedale di Antalya.",
            elektrik_proj_tag_comm: "Illuminazione e Domotica",
            elektrik_proj_4_title: "Smart home e design illuminotecnico per progetto residenziale di lusso",
            elektrik_proj_4_desc: "Integrazione domotica (KNX) e progettazione illuminotecnica architetturale per esterni e interni per il complesso residenziale di lusso a Bursa Nilüfer."
        }
    };

    // --- i18n CORE ENGINE ---
    // Flag SVG dictionary (Circular CSS clipping will shape them into perfect round flag elements)
    const flagSVGs = {
        tr: `<svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><rect width="24" height="24" fill="#e30a17"/><circle cx="10" cy="12" r="6" fill="#fff"/><circle cx="12" cy="12" r="4.8" fill="#e30a17"/><path d="M17.5 12l-1.93.627.737-1.92-1.24-.9 1.536.002.597-1.42.597 1.42 1.536-.002-1.24.9.737 1.92-1.93-.627z" fill="#fff"/></svg>`,
        en: `<svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><rect width="24" height="24" fill="#00247d"/><path d="M0 0l24 24M24 0L0 24" stroke="#fff" stroke-width="3"/><path d="M0 0l24 24M24 0L0 24" stroke="#cf142b" stroke-width="1.2"/><path d="M12 0v24M0 12h24" stroke="#fff" stroke-width="5"/><path d="M12 0v24M0 12h24" stroke="#cf142b" stroke-width="3"/></svg>`,
        ar: `<svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><rect width="24" height="24" fill="#006c35"/><path d="M6 16h12M8 13.5v5" stroke="#fff" stroke-width="1.2" stroke-linecap="round"/><path d="M7 8.5c1.5-2 3.5 0 5-1.5c1-1 2-1 3 .5M9 11c1-1 3-1 4.5.5c1 1 2 0 2.5-1" stroke="#fff" stroke-width="1.2" stroke-linecap="round"/></svg>`,
        ka: `<svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><rect width="24" height="24" fill="#fff"/><path d="M12 0v24M0 12h24" stroke="#ff0000" stroke-width="4"/><path d="M5 6h2M6 5v2M17 6h2M18 5v2M5 18h2M6 17v2M17 18h2M18 17v2" stroke="#ff0000" stroke-width="1.2" stroke-linecap="round"/></svg>`,
        ru: `<svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><rect width="24" height="8" fill="#fff"/><rect y="8" width="24" height="8" fill="#0039a6"/><rect y="16" width="24" height="8" fill="#d52b1e"/></svg>`,
        fr: `<svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><rect width="8" height="24" fill="#002395"/><rect x="8" width="8" height="24" fill="#fff"/><rect x="16" width="8" height="24" fill="#ed2939"/></svg>`,
        it: `<svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><rect width="8" height="24" fill="#009246"/><rect x="8" width="8" height="24" fill="#fff"/><rect x="16" width="8" height="24" fill="#ce2b37"/></svg>`
    };

    const getSystemLanguage = () => {
        const savedLang = localStorage.getItem('dadson-lang');
        if (savedLang && translations[savedLang]) {
            return savedLang;
        }
        // Default to TR
        return 'tr';
    };

    let currentLang = getSystemLanguage();

    const applyLanguage = (lang) => {
        if (!translations[lang]) return;
        currentLang = lang;
        localStorage.setItem('dadson-lang', lang);

        // Update document tags
        document.documentElement.lang = lang;
        document.documentElement.dir = (lang === 'ar') ? 'rtl' : 'ltr';

        // Translate elements
        document.querySelectorAll('[data-i18n]').forEach(el => {
            const key = el.getAttribute('data-i18n');
            if (translations[lang][key]) {
                el.textContent = translations[lang][key];
            }
        });

        // Update Desktop language Selector text label
        document.querySelectorAll('.lang-label, .elektrik-lang-label').forEach(el => {
            el.textContent = lang.toUpperCase();
        });

        // Update Desktop language Selector flag icon
        document.querySelectorAll('.lang-icon').forEach(iconEl => {
            if (flagSVGs[lang]) {
                iconEl.innerHTML = flagSVGs[lang];
            }
        });

        // Update active class in selectors
        document.querySelectorAll('.lang-opt, .mob-lang-opt').forEach(opt => {
            if (opt.getAttribute('data-lang') === lang) {
                opt.classList.add('active');
            } else {
                opt.classList.remove('active');
            }
        });
    };

    // Register translation selector listeners and initialize flag icons
    document.querySelectorAll('.lang-opt').forEach(opt => {
        // Prepend flag container inside each option
        const lang = opt.getAttribute('data-lang');
        if (flagSVGs[lang]) {
            const flagSpan = document.createElement('span');
            flagSpan.className = 'lang-opt-flag';
            flagSpan.innerHTML = flagSVGs[lang];
            opt.insertBefore(flagSpan, opt.firstChild);
        }

        opt.addEventListener('click', (e) => {
            e.preventDefault();
            const lang = opt.getAttribute('data-lang');
            applyLanguage(lang);
        });
    });

    document.querySelectorAll('.mob-lang-opt').forEach(opt => {
        opt.addEventListener('click', (e) => {
            e.preventDefault();
            const lang = opt.getAttribute('data-lang');
            applyLanguage(lang);
            // Close the active drawer dynamically
            setTimeout(() => {
                if (mobileDrawer && mobileDrawer.classList.contains('open')) {
                    toggleMobileMenu();
                }
                if (elektrikMobileDrawer && elektrikMobileDrawer.classList.contains('open')) {
                    toggleElektrikMobileMenu();
                }
            }, 250);
        });
    });

    // Run initial language setup
    applyLanguage(currentLang);

    // --- 1. PRELOADER LOGIC ---
    let progressVal = 0;
    const interval = setInterval(() => {
        progressVal += Math.floor(Math.random() * 15) + 5;
        if (progressVal >= 100) {
            progressVal = 100;
            clearInterval(interval);
            setTimeout(() => {
                preloader.classList.add('fade-out');
                // Trigger initial fade-in for the active page
                const activeView = document.querySelector('.page-view.active');
                if (activeView) {
                    setTimeout(() => {
                        activeView.classList.add('fade-in');
                    }, 100);
                }
            }, 500);
        }
        progress.style.width = progressVal + '%';
    }, 50);

    // Fallback load event in case interval gets stuck
    window.addEventListener('load', () => {
        clearInterval(interval);
        progress.style.width = '100%';
        setTimeout(() => {
            preloader.classList.add('fade-out');
            const activeView = document.querySelector('.page-view.active');
            if (activeView) {
                activeView.classList.add('fade-in');
            }
        }, 300);
    });

    // --- 2. HEADER SCROLL STATE ---
    window.addEventListener('scroll', () => {
        const elektrikHeader = document.querySelector('.elektrik-main-header');
        if (window.scrollY > 50) {
            header.classList.add('scrolled');
            if (elektrikHeader) elektrikHeader.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
            if (elektrikHeader) elektrikHeader.classList.remove('scrolled');
        }
    });

    // --- 3. MOBILE MENU TOGGLE ---
    const toggleMobileMenu = () => {
        const isOpen = mobileDrawer.classList.contains('open');
        if (isOpen) {
            mobileDrawer.classList.remove('open');
            menuToggleBtn.classList.remove('open');
            document.body.style.overflow = '';
        } else {
            mobileDrawer.classList.add('open');
            menuToggleBtn.classList.add('open');
            document.body.style.overflow = 'hidden'; // Lock background scrolling
        }
    };

    menuToggleBtn.addEventListener('click', toggleMobileMenu);

    // --- ELEKTRİK MOBILE MENU TOGGLE ---
    const elektrikMenuToggleBtn = document.getElementById('elektrik-menu-toggle-btn');
    const elektrikMobileDrawer = document.getElementById('elektrik-mobile-nav-drawer');
    
    const toggleElektrikMobileMenu = () => {
        if (!elektrikMobileDrawer || !elektrikMenuToggleBtn) return;
        const isOpen = elektrikMobileDrawer.classList.contains('open');
        if (isOpen) {
            elektrikMobileDrawer.classList.remove('open');
            elektrikMenuToggleBtn.classList.remove('open');
            document.body.style.overflow = '';
            // Reset accordion dropdowns to closed state
            const submenus = elektrikMobileDrawer.querySelectorAll('.elektrik-mob-submenu');
            submenus.forEach(menu => menu.classList.remove('open'));
        } else {
            elektrikMobileDrawer.classList.add('open');
            elektrikMenuToggleBtn.classList.add('open');
            document.body.style.overflow = 'hidden';
        }
    };
    
    if (elektrikMenuToggleBtn) {
        elektrikMenuToggleBtn.addEventListener('click', toggleElektrikMobileMenu);
    }

    const elektrikMobLinks = document.querySelectorAll('.elektrik-mob-link');
    elektrikMobLinks.forEach(link => {
        link.addEventListener('click', () => {
            if (link.classList.contains('elektrik-mob-dropdown-trigger')) {
                return;
            }
            if (elektrikMobileDrawer && elektrikMobileDrawer.classList.contains('open')) {
                toggleElektrikMobileMenu();
            }
        });
    });

    // --- ELEKTRİK ABOUT TAB TOGGLING REMOVED PER CLIENT REQUEST ---

    // --- ELEKTRİK MOBILE SUBMENU DROPDOWN TOGGLER ---
    const initElektrikMobileSubmenu = () => {
        const mobDropdownContainers = document.querySelectorAll('.elektrik-mob-dropdown-container');
        mobDropdownContainers.forEach(container => {
            const trigger = container.querySelector('.elektrik-mob-dropdown-trigger');
            const submenu = container.querySelector('.elektrik-mob-submenu');
            if (trigger && submenu) {
                trigger.addEventListener('click', (e) => {
                    e.preventDefault();
                    submenu.classList.toggle('open');
                });
            }
        });

        const submenuLinks = document.querySelectorAll('.elektrik-mob-submenu-link');
        submenuLinks.forEach(link => {
            link.addEventListener('click', () => {
                const elektrikMobileDrawer = document.getElementById('elektrik-mobile-nav-drawer');
                if (elektrikMobileDrawer && elektrikMobileDrawer.classList.contains('open')) {
                    toggleElektrikMobileMenu();
                }
            });
        });
    };
    initElektrikMobileSubmenu();

    // --- 4. SPA CLIENT-SIDE ROUTER ---
    
    // Navigate function
    const navigateTo = (targetHash, isInitial = false) => {
        // Clean hash (e.g. "#elektrik-about" -> "elektrik-about")
        let fullTargetId = targetHash.replace('#', '') || 'home';
        
        let targetId = fullTargetId;
        let subViewId = null;

        if (fullTargetId.startsWith('elektrik')) {
            subViewId = fullTargetId;
            targetId = 'elektrik';
            if (subViewId === 'elektrik' || subViewId === 'elektrik-home') {
                subViewId = 'elektrik-home';
            } else if (subViewId.startsWith('elektrik-about')) {
                subViewId = 'elektrik-about';
            } else if (subViewId.startsWith('elektrik-services')) {
                subViewId = 'elektrik-services';
            }
        }
        
        // Ensure valid views (fallback to home if page doesn't exist)
        const validViews = ['home', 'elektrik', 'yapi', 'hakkimizda', 'contact'];
        if (!validViews.includes(targetId)) {
            targetId = 'home';
        }

        // Toggle global header/footer vs elektrik header/footer display states
        const globalHeader = document.querySelector('.main-header');
        const globalFooter = document.querySelector('.main-footer');
        const elektrikHeader = document.querySelector('.elektrik-main-header');
        const elektrikFooter = document.querySelector('.elektrik-footer');
        
        if (targetId === 'elektrik') {
            if (globalHeader) globalHeader.style.display = 'none';
            if (globalFooter) globalFooter.style.display = 'none';
            if (elektrikHeader) elektrikHeader.style.display = 'flex';
            if (elektrikFooter) elektrikFooter.style.display = 'block';
            if (elektrikMobileDrawer) elektrikMobileDrawer.style.display = 'flex';
        } else {
            if (globalHeader) globalHeader.style.display = '';
            if (globalFooter) globalFooter.style.display = '';
            if (elektrikHeader) elektrikHeader.style.display = 'none';
            if (elektrikFooter) elektrikFooter.style.display = 'none';
            if (elektrikMobileDrawer) {
                elektrikMobileDrawer.style.display = 'none';
                elektrikMobileDrawer.classList.remove('open');
                if (elektrikMenuToggleBtn) elektrikMenuToggleBtn.classList.remove('open');
            }
        }

        // Restore home-view to the DOM if we are returning to the home portal page
        if (targetId === 'home') {
            if (homeViewSaved && !document.getElementById('home-view')) {
                mainViewContainer.insertBefore(homeViewSaved, mainViewContainer.firstChild);
                // Translate the restored view elements
                applyLanguage(currentLang);
            }
            // Force play the video when returning to home view (since DOM removal pauses it)
            const heroBgVideo = document.getElementById('hero-bg-video');
            if (heroBgVideo) {
                heroBgVideo.play().catch(err => console.log('Video playback resume failed/blocked:', err));
            }
        }

        const targetView = document.getElementById(`${targetId}-view`);
        const currentActiveView = document.querySelector('.page-view.active');

        // Handle Elektrik sub-routing inside the view
        if (targetId === 'elektrik' && subViewId) {
            const elektrikSubviews = document.querySelectorAll('.elektrik-subview');
            elektrikSubviews.forEach(subview => {
                if (subview.id === `${subViewId}-subview`) {
                    subview.classList.add('active');
                } else {
                    subview.classList.remove('active');
                }
            });

            // Handle About Us Sub-tabs Toggling on page load / routing
            if (subViewId === 'elektrik-about') {
                const sections = document.querySelectorAll('.elektrik-about-section');
                
                const activateAboutTab = (sectionId) => {
                    sections.forEach(sec => {
                        if (sec.id === sectionId) {
                            sec.classList.add('active');
                            sec.style.display = 'block';
                            
                            // Re-trigger scroll reveal since it was hidden
                            if (typeof initScrollReveal === 'function') initScrollReveal();
                        } else {
                            sec.classList.remove('active');
                            sec.style.display = 'none';
                        }
                    });
                };

                if (targetHash === '#elektrik-about-ceo') {
                    activateAboutTab('el-ceo-sec');
                } else if (targetHash === '#elektrik-about-mission') {
                    activateAboutTab('el-mission-sec');
                } else {
                    // Default to history (Tarihçe) if hash is #elektrik-about-history or #elektrik-about
                    activateAboutTab('el-history-sec');
                }
            }

            // Handle Services Sub-tabs Toggling on page load / routing
            if (subViewId === 'elektrik-services') {
                const servicesSections = document.querySelectorAll('.elektrik-services-section-tab');
                
                const activateServicesTab = (sectionId) => {
                    servicesSections.forEach(sec => {
                        if (sec.id === sectionId) {
                            sec.classList.add('active');
                            sec.style.display = 'block';
                            
                            // Re-trigger scroll reveal since it was hidden
                            if (typeof initScrollReveal === 'function') initScrollReveal();
                        } else {
                            sec.classList.remove('active');
                            sec.style.display = 'none';
                        }
                    });
                };

                if (targetHash === '#elektrik-services-aydinlatma') {
                    activateServicesTab('el-srv-aydinlatma-sec');
                } else if (targetHash === '#elektrik-services-otomasyon') {
                    activateServicesTab('el-srv-otomasyon-sec');
                } else if (targetHash === '#elektrik-services-solar') {
                    activateServicesTab('el-srv-solar-sec');
                } else if (targetHash === '#elektrik-services-proje') {
                    activateServicesTab('el-srv-proje-sec');
                } else if (targetHash === '#elektrik-services-ortagerilim') {
                    activateServicesTab('el-srv-ortagerilim-sec');
                } else {
                    // Default to taahhut if hash is #elektrik-services-taahhut or #elektrik-services
                    activateServicesTab('el-srv-taahhut-sec');
                }
            }

            // Update Elektrik header active navigation links
            const elektrikNavLinks = document.querySelectorAll('.elektrik-nav-link, .elektrik-mob-link, .elektrik-mob-submenu-link, .elektrik-submenu a');
            elektrikNavLinks.forEach(link => {
                const dataTarget = link.getAttribute('data-target');
                const href = link.getAttribute('href');
                
                let isLinkActive = false;
                if ((subViewId === 'elektrik-about' || subViewId === 'elektrik-services') && (link.classList.contains('elektrik-dropdown-trigger') || link.classList.contains('elektrik-mob-dropdown-trigger'))) {
                    const i18nKey = link.getAttribute('data-i18n');
                    if (subViewId === 'elektrik-about' && i18nKey === 'nav_el_about') {
                        isLinkActive = true;
                    } else if (subViewId === 'elektrik-services' && i18nKey === 'nav_el_services') {
                        isLinkActive = true;
                    }
                } else if (dataTarget === subViewId || href === `#${subViewId}`) {
                    isLinkActive = true;
                } else if (href === targetHash) {
                    isLinkActive = true;
                }
                
                if (isLinkActive) {
                    link.classList.add('active');
                } else {
                    link.classList.remove('active');
                }
            });
        }

        if (currentActiveView === targetView) {
            // Already there, just make sure fade-in is applied
            if (targetView && !targetView.classList.contains('fade-in')) {
                targetView.classList.add('fade-in');
            }
            // Close mobile drawers if navigating within the same view
            if (mobileDrawer && mobileDrawer.classList.contains('open')) {
                toggleMobileMenu();
            }
            if (elektrikMobileDrawer && elektrikMobileDrawer.classList.contains('open')) {
                toggleElektrikMobileMenu();
            }
            window.scrollTo(0, 0);
            return;
        }

        // Close mobile drawers if navigating
        if (mobileDrawer.classList.contains('open')) {
            toggleMobileMenu();
        }
        if (elektrikMobileDrawer && elektrikMobileDrawer.classList.contains('open')) {
            toggleElektrikMobileMenu();
        }

        // Update active navigation classes
        updateActiveNavLinks(targetId);

        if (isInitial) {
            // Instant swap for initial render to avoid overlay flicker and race conditions
            if (currentActiveView) {
                currentActiveView.classList.remove('fade-in');
                currentActiveView.classList.remove('active');
            }
            if (targetView) {
                targetView.classList.add('active');
                targetView.classList.add('fade-in');
            }
            
            // Completely delete home-view from the DOM when moving away to optimize/clear background elements
            if (targetId !== 'home' && homeViewSaved && homeViewSaved.parentNode) {
                homeViewSaved.parentNode.removeChild(homeViewSaved);
            }

            window.scrollTo(0, 0);
            
            // Re-bind hover listeners, 3D tilt and scroll reveal on initial load
            if (typeof addCursorHoverListeners === 'function') addCursorHoverListeners();
            if (typeof add3DTiltEffect === 'function') add3DTiltEffect();
            if (typeof initScrollReveal === 'function') initScrollReveal();
            if (typeof initProjectFilters === 'function') initProjectFilters();
            return;
        }

        // Show transition curtain loader overlay
        const transitionOverlay = document.getElementById('transition-overlay');
        if (transitionOverlay) {
            transitionOverlay.classList.add('active');
        }

        // Perform the page swap behind the curtain after it fades in (300ms)
        setTimeout(() => {
            if (currentActiveView) {
                currentActiveView.classList.remove('fade-in');
                currentActiveView.classList.remove('active');
            }
            
            if (targetView) {
                targetView.classList.add('active');
                void targetView.offsetWidth; // Trigger reflow
                targetView.classList.add('fade-in');
            }

            // Completely delete home-view from the DOM when moving away to optimize/clear background elements
            if (targetId !== 'home' && homeViewSaved && homeViewSaved.parentNode) {
                homeViewSaved.parentNode.removeChild(homeViewSaved);
            }

            // Scroll page back to top
            window.scrollTo(0, 0);

            // Fade out the transition curtain after page is ready (additional 300ms)
            setTimeout(() => {
                if (transitionOverlay) {
                    transitionOverlay.classList.remove('active');
                }
                // Re-bind hover listeners, 3D tilt and scroll reveal after navigation finishes
                if (typeof addCursorHoverListeners === 'function') addCursorHoverListeners();
                if (typeof add3DTiltEffect === 'function') add3DTiltEffect();
                if (typeof initScrollReveal === 'function') initScrollReveal();
                if (typeof initProjectFilters === 'function') initProjectFilters();
            }, 300);
        }, 300);
    };

    // Update link active state helper
    const updateActiveNavLinks = (activeId) => {
        navLinks.forEach(link => {
            const dataTarget = link.getAttribute('data-target');
            const href = link.getAttribute('href');
            
            // If it is our main logo link, skip active states highlight
            if (link.id === 'logo-link') return;

            if (dataTarget === activeId || href === `#${activeId}`) {
                link.classList.add('active');
            } else {
                link.classList.remove('active');
            }
        });
    };

    // Hash change listener (for back/forward buttons & URL entries)
    window.addEventListener('hashchange', () => {
        navigateTo(window.location.hash);
    });

    // Handle clicks on direct anchor tags
    navLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            const href = link.getAttribute('href');
            // Handle regular hashes only
            if (href.startsWith('#')) {
                // Default hash routing handles navigating to views
            }
        });
    });

    // Initial check on load
    const initialHash = window.location.hash;
    if (initialHash) {
        navigateTo(initialHash, true);
    } else {
        // Explicitly set hash if empty
        window.location.hash = '#home';
    }

    // Fallback Video Loop Fix for Local File Systems
    const heroBgVideo = document.getElementById('hero-bg-video');
    if (heroBgVideo) {
        heroBgVideo.addEventListener('ended', () => {
            heroBgVideo.currentTime = 0;
            heroBgVideo.play().catch(err => console.log('Video play fallback interrupted:', err));
        });
    }

    // --- CUSTOM DESKTOP CURSOR ---
    const cursorDot = document.getElementById('cursor-dot');
    const cursorOutline = document.getElementById('cursor-outline');
    let hasCursorInitialized = false;

    function initializeCustomCursor() {
        if (cursorDot && cursorOutline && window.matchMedia('(pointer: fine)').matches && !hasCursorInitialized) {
            hasCursorInitialized = true;
            let mouseX = 0, mouseY = 0;
            let outlineX = 0, outlineY = 0;

            document.addEventListener('mousemove', (e) => {
                mouseX = e.clientX;
                mouseY = e.clientY;
                cursorDot.style.left = mouseX + 'px';
                cursorDot.style.top = mouseY + 'px';
            });

            const animateOutline = () => {
                const ease = 0.15;
                outlineX += (mouseX - outlineX) * ease;
                outlineY += (mouseY - outlineY) * ease;
                cursorOutline.style.left = outlineX + 'px';
                cursorOutline.style.top = outlineY + 'px';
                requestAnimationFrame(animateOutline);
            };
            requestAnimationFrame(animateOutline);
            addCursorHoverListeners();
        }
    }

    function addCursorHoverListeners() {
        if (!window.matchMedia('(pointer: fine)').matches) return;
        const hoverables = document.querySelectorAll('a, button, .lang-opt, .mob-lang-opt, .hero-text-link, .video-brand-item, [role="button"]');
        hoverables.forEach(el => {
            el.removeEventListener('mouseenter', onCursorEnter);
            el.removeEventListener('mouseleave', onCursorLeave);
            el.addEventListener('mouseenter', onCursorEnter);
            el.addEventListener('mouseleave', onCursorLeave);
        });
    }

    function onCursorEnter() {
        document.body.classList.add('cursor-hover');
    }

    function onCursorLeave() {
        document.body.classList.remove('cursor-hover');
    }

    // Initialize cursor
    initializeCustomCursor();

    // --- 3D TILT EFFECT FOR HERO LOGO ---
    function add3DTiltEffect() {
        const heroLogo = document.querySelector('.hero-brand-logo-img');
        if (heroLogo) {
            heroLogo.addEventListener('mousemove', (e) => {
                const rect = heroLogo.getBoundingClientRect();
                const x = e.clientX - rect.left - rect.width / 2;
                const y = e.clientY - rect.top - rect.height / 2;
                
                // Limit the maximum tilt angle to 8 degrees for subtle, non-disruptive 3D effect
                const rotX = -(y / (rect.height / 2)) * 8;
                const rotY = (x / (rect.width / 2)) * 8;
                
                heroLogo.style.transform = `perspective(1000px) rotateX(${rotX}deg) rotateY(${rotY}deg) scale3d(1.02, 1.02, 1.02)`;
            });
            
            heroLogo.addEventListener('mouseleave', () => {
                heroLogo.style.transform = `perspective(1000px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)`;
            });
        }
    }

    // Initialize 3D tilt
    add3DTiltEffect();

    // --- MOUSE PARALLAX REMOVED PER CLIENT REQUEST ---

    // --- SCROLL REVEAL ANIMATION ---
    function initScrollReveal() {
        if (!('IntersectionObserver' in window)) return;
        
        document.body.classList.add('reveal-ready');
        
        const revealOptions = {
            threshold: 0.1,
            rootMargin: '0px 0px -20px 0px'
        };
        
        const revealObserver = new IntersectionObserver((entries, observer) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('revealed');
                    
                    // If it is the elektrik stats counter, trigger animation
                    if (entry.target.classList.contains('elektrik-stats')) {
                        animateCounters();
                    }
                    
                    observer.unobserve(entry.target); // Stop observing once revealed
                }
            });
        }, revealOptions);
        
        const elementsToReveal = document.querySelectorAll('.about-p, .scroll-reveal');
        elementsToReveal.forEach(el => {
            el.classList.remove('revealed'); // Reset state for re-entry animation
            revealObserver.observe(el);
        });
    }

    // --- METRIC NUMBER COUNTERS ANIMATION ---
    function animateCounters() {
        const counters = document.querySelectorAll('.counter-num');
        if (counters.length === 0) return;
        
        counters.forEach(counter => {
            const target = parseInt(counter.getAttribute('data-target'), 10);
            if (isNaN(target)) return;
            
            // Set starting point
            counter.textContent = '0';
            
            let count = 0;
            const duration = 1500; // 1.5 seconds animation
            const startTime = performance.now();
            
            const updateCount = (currentTime) => {
                const elapsed = currentTime - startTime;
                const progress = Math.min(elapsed / duration, 1);
                
                // Easing: easeOutQuad
                const easeProgress = progress * (2 - progress);
                
                count = Math.floor(easeProgress * target);
                counter.textContent = count;
                
                if (progress < 1) {
                    requestAnimationFrame(updateCount);
                } else {
                    counter.textContent = target; // Ensure exact final value
                }
            };
            
            requestAnimationFrame(updateCount);
        });
    }

    // --- PROJECTS FILTER & 3D COVERFLOW SYSTEM ---
    function initProjectFilters() {
        const filterBtns = document.querySelectorAll('.project-filter-btn');
        const projectCards = document.querySelectorAll('.el-project-card');
        const track = document.querySelector('.el-projects-slider-track');
        const container = document.querySelector('.el-projects-slider-container');
        const prevBtn = document.querySelector('.slider-nav-btn.prev-btn');
        const nextBtn = document.querySelector('.slider-nav-btn.next-btn');
        const pagination = document.querySelector('.el-projects-pagination');
        
        if (projectCards.length === 0 || !track) return;
        
        let activeIndex = 0;
        let visibleCards = [];
        let currentFilter = 'all';
        
        // Touch & Drag state variables
        let startX = 0;
        let isDragging = false;
        
        // Filter cards and build array
        function filterCards() {
            visibleCards = [];
            projectCards.forEach(card => {
                const status = card.getAttribute('data-status');
                if (currentFilter === 'all' || status === currentFilter) {
                    visibleCards.push(card);
                    card.style.display = 'flex';
                    card.style.opacity = '1';
                } else {
                    card.style.display = 'none';
                    card.style.opacity = '0';
                    card.style.transform = 'translate3d(0, 0, -200px) rotateY(0deg) scale(0.8)';
                    card.classList.remove('active-slide');
                }
            });
            
            // Adjust activeIndex to be within bounds
            if (activeIndex >= visibleCards.length) {
                activeIndex = Math.max(0, visibleCards.length - 1);
            }
            
            updatePagination();
            updateSlider();
        }
        
        // Update pagination dots
        function updatePagination() {
            if (!pagination) return;
            pagination.innerHTML = '';
            visibleCards.forEach((_, i) => {
                const dot = document.createElement('div');
                dot.className = `pagination-dot${i === activeIndex ? ' active' : ''}`;
                dot.addEventListener('click', () => {
                    activeIndex = i;
                    updatePagination();
                    updateSlider();
                });
                pagination.appendChild(dot);
            });
        }
        
        // Calculate dynamic dimensions and update transforms
        function updateSlider() {
            if (visibleCards.length === 0) return;
            
            const isMobile = window.innerWidth < 768;
            const isSmallMobile = window.innerWidth < 480;
            const xSpacing = isSmallMobile ? 40 : (isMobile ? 80 : 180);
            const centerOffset = isSmallMobile ? 30 : (isMobile ? 60 : 120);
            const rotateAngle = isMobile ? 30 : 45;
            const zSpacing = isMobile ? -100 : -150;
            
            visibleCards.forEach((card, i) => {
                const offset = i - activeIndex;
                const absOffset = Math.abs(offset);
                
                card.classList.remove('active-slide');
                
                if (offset === 0) {
                    // Center Active Card
                    card.classList.add('active-slide');
                    card.style.transform = 'perspective(1200px) translateX(0) translateZ(0) rotateY(0deg) scale(1)';
                    card.style.opacity = '1';
                    card.style.zIndex = '10';
                    card.style.pointerEvents = 'auto';
                } else if (offset > 0) {
                    // Right Cards
                    const tx = (offset * xSpacing) + centerOffset;
                    const tz = zSpacing - (absOffset * 50);
                    const ry = -rotateAngle;
                    const scale = 1 - absOffset * 0.12;
                    const opacity = Math.max(0.1, 1 - absOffset * 0.35);
                    
                    card.style.transform = `perspective(1200px) translateX(${tx}px) translateZ(${tz}px) rotateY(${ry}deg) scale(${scale})`;
                    card.style.opacity = opacity.toString();
                    card.style.zIndex = (10 - absOffset).toString();
                    card.style.pointerEvents = 'none'; // Prevent clicks on background elements
                } else {
                    // Left Cards
                    const tx = (offset * xSpacing) - centerOffset;
                    const tz = zSpacing - (absOffset * 50);
                    const ry = rotateAngle;
                    const scale = 1 - absOffset * 0.12;
                    const opacity = Math.max(0.1, 1 - absOffset * 0.35);
                    
                    card.style.transform = `perspective(1200px) translateX(${tx}px) translateZ(${tz}px) rotateY(${ry}deg) scale(${scale})`;
                    card.style.opacity = opacity.toString();
                    card.style.zIndex = (10 - absOffset).toString();
                    card.style.pointerEvents = 'none'; // Prevent clicks on background elements
                }
            });
            
            // Highlight active navigation dots
            const dots = document.querySelectorAll('.pagination-dot');
            dots.forEach((dot, idx) => {
                if (idx === activeIndex) {
                    dot.classList.add('active');
                } else {
                    dot.classList.remove('active');
                }
            });
        }
        
        // Tilt Effect for Active Slide
        projectCards.forEach(card => {
            const glare = card.querySelector('.el-card-glare');
            
            card.addEventListener('mousemove', (e) => {
                if (!card.classList.contains('active-slide')) return;
                
                const rect = card.getBoundingClientRect();
                const x = e.clientX - rect.left;
                const y = e.clientY - rect.top;
                
                const xc = rect.width / 2;
                const yc = rect.height / 2;
                
                // Tilt angle limits
                const rotateX = -(y - yc) / (yc / 10);
                const rotateY = (x - xc) / (xc / 10);
                
                card.style.transform = `perspective(1200px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateZ(30px) scale(1.03)`;
                
                if (glare) {
                    glare.style.opacity = '1';
                    const pctX = (x / rect.width) * 100;
                    const pctY = (y / rect.height) * 100;
                    glare.style.background = `radial-gradient(circle at ${pctX}% ${pctY}%, rgba(255, 255, 255, 0.15) 0%, rgba(255, 255, 255, 0) 65%)`;
                }
            });
            
            card.addEventListener('mouseleave', () => {
                if (!card.classList.contains('active-slide')) return;
                card.style.transform = 'perspective(1200px) translateX(0) translateZ(0) rotateY(0deg) scale(1)';
                if (glare) {
                    glare.style.opacity = '0';
                }
            });
            
            // Allow clicking side cards to make them active
            card.addEventListener('click', (e) => {
                if (card.classList.contains('active-slide')) return;
                
                // Find card index in visibleCards
                const idx = visibleCards.indexOf(card);
                if (idx !== -1) {
                    e.preventDefault();
                    e.stopPropagation();
                    activeIndex = idx;
                    updatePagination();
                    updateSlider();
                }
            });
        });
        
        // Navigation Buttons
        if (prevBtn) {
            prevBtn.addEventListener('click', (e) => {
                e.preventDefault();
                if (activeIndex > 0) {
                    activeIndex--;
                } else {
                    activeIndex = visibleCards.length - 1; // Loop back
                }
                updatePagination();
                updateSlider();
            });
        }
        
        if (nextBtn) {
            nextBtn.addEventListener('click', (e) => {
                e.preventDefault();
                if (activeIndex < visibleCards.length - 1) {
                    activeIndex++;
                } else {
                    activeIndex = 0; // Loop back
                }
                updatePagination();
                updateSlider();
            });
        }
        
        // Drag & Swipe Logic for mobile and desktop dragging
        if (container) {
            container.addEventListener('touchstart', dragStart, { passive: true });
            container.addEventListener('touchend', dragEnd);
            container.addEventListener('touchmove', dragAction, { passive: true });
            
            container.addEventListener('mousedown', dragStart);
            container.addEventListener('mouseup', dragEnd);
            container.addEventListener('mouseleave', dragEnd);
            container.addEventListener('mousemove', dragAction);
        }
        
        function getPositionX(e) {
            return e.type.includes('touch') ? e.touches[0].clientX : e.clientX;
        }
        
        function dragStart(e) {
            isDragging = true;
            startX = getPositionX(e);
            if (e.type === 'mousedown') {
                container.style.cursor = 'grabbing';
            }
        }
        
        function dragAction(e) {
            if (!isDragging) return;
            const currentX = getPositionX(e);
            const diff = currentX - startX;
            
            // Threshold for triggering slide change (60px swipe)
            if (Math.abs(diff) > 60) {
                if (diff > 0 && activeIndex > 0) {
                    activeIndex--;
                    isDragging = false; // Prevent multiple triggers in one swipe
                } else if (diff < 0 && activeIndex < visibleCards.length - 1) {
                    activeIndex++;
                    isDragging = false;
                }
                updatePagination();
                updateSlider();
            }
        }
        
        // Set cursor styling helper
        if (container) {
            container.style.cursor = 'grab';
        }
        
        function dragEnd() {
            isDragging = false;
            if (container) {
                container.style.cursor = 'grab';
            }
        }
        
        // Filter Buttons Setup
        // Remove duplicate event listeners if navigation is triggered multiple times
        filterBtns.forEach(btn => {
            const newBtn = btn.cloneNode(true);
            btn.parentNode.replaceChild(newBtn, btn);
        });
        
        // Re-fetch cloned buttons
        const newFilterBtns = document.querySelectorAll('.project-filter-btn');
        newFilterBtns.forEach(btn => {
            btn.addEventListener('click', (e) => {
                e.preventDefault();
                newFilterBtns.forEach(b => b.classList.remove('active'));
                btn.classList.add('active');
                
                currentFilter = btn.getAttribute('data-filter');
                filterCards();
            });
        });
        
        // Resize handling
        window.addEventListener('resize', updateSlider);
        
        // Initial setup
        filterCards();
    }
    
    // --- AMBIENT PARTICLES SYSTEM ---
    function initAmbientParticles() {
        const canvas = document.getElementById('ambient-particles');
        if (!canvas) return;
        
        const ctx = canvas.getContext('2d');
        let particles = [];
        const particleCount = 15; // Extremely subtle, minimalist density
        
        // Resize canvas helper
        function resizeCanvas() {
            canvas.width = window.innerWidth;
            canvas.height = window.innerHeight;
        }
        window.addEventListener('resize', resizeCanvas);
        resizeCanvas();
        
        // Particle Class definition
        class Particle {
            constructor() {
                this.reset();
                // Randomize vertical starting positions on startup
                this.y = Math.random() * canvas.height;
            }
            
            reset() {
                this.x = Math.random() * canvas.width;
                this.y = canvas.height + Math.random() * 20; // Start below fold
                this.size = Math.random() * 1.2 + 0.5; // Very small (0.5px to 1.7px)
                this.speedY = -(Math.random() * 0.35 + 0.1); // Slow elegant upward drift
                this.speedX = (Math.random() * 0.16 - 0.08); // Slight side-to-side drift
                this.opacity = Math.random() * 0.35 + 0.15; // Low opacity for premium subtlety
            }
            
            update() {
                this.y += this.speedY;
                this.x += this.speedX;
                
                // If it goes off screen, reset
                if (this.y < -20 || this.x < -20 || this.x > canvas.width + 20) {
                    this.reset();
                }
            }
            
            draw() {
                // 1. Draw glowing aura (larger, blurred concentric circle)
                ctx.beginPath();
                ctx.arc(this.x, this.y, this.size * 3.5, 0, Math.PI * 2);
                ctx.fillStyle = `rgba(248, 218, 0, ${this.opacity * 0.2})`; // Brand Yellow glow
                ctx.fill();
                
                // 2. Draw solid particle core (tiny)
                ctx.beginPath();
                ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
                ctx.fillStyle = `rgba(248, 218, 0, ${this.opacity})`; // Brand Yellow core
                ctx.fill();
            }
        }
        
        // Setup particles
        for (let i = 0; i < particleCount; i++) {
            particles.push(new Particle());
        }
        
        // Frame loop
        function animate() {
            ctx.clearRect(0, 0, canvas.width, canvas.height);
            for (let i = 0; i < particles.length; i++) {
                particles[i].update();
                particles[i].draw();
            }
            requestAnimationFrame(animate);
        }
        animate();
    }
    
    // Initial runs
    initScrollReveal();
    initAmbientParticles();
    initProjectFilters();
});

// ========== PROJECT DETAIL MODAL (Global Scope) ==========
function openProjectDetail(projectId) {
    // Stop event from bubbling to card click handler
    if (event) { event.stopPropagation(); }
    
    const modal = document.getElementById('project-detail-' + projectId);
    if (!modal) return;
    
    // Scroll modal content to top before showing
    const content = modal.querySelector('.project-detail-content');
    if (content) { content.scrollTop = 0; }
    
    // Reset gallery to first image
    const galleryImages = modal.querySelectorAll('.gallery-img');
    if (galleryImages.length > 0) {
        galleryImages.forEach(img => img.classList.remove('active'));
        galleryImages[0].classList.add('active');
        const counter = modal.querySelector('.gallery-counter');
        if (counter) counter.textContent = '1 / ' + galleryImages.length;
    }
    
    modal.classList.add('active');
    document.body.style.overflow = 'hidden';
    
    // Reset counters to 0 before animating
    const counters = modal.querySelectorAll('.counter-animate');
    counters.forEach(c => { c.textContent = '0'; });
    
    // Start counter animation after modal transition completes
    setTimeout(() => {
        animateProjectCounters(modal);
    }, 400);
}

function closeProjectDetail() {
    // Find whichever modal is currently active
    const activeModal = document.querySelector('.project-detail-modal.active');
    if (!activeModal) return;
    
    activeModal.classList.remove('active');
    document.body.style.overflow = '';
}

function animateProjectCounters(modal) {
    const counters = modal.querySelectorAll('.counter-animate');
    
    counters.forEach(counter => {
        const target = parseInt(counter.getAttribute('data-target'), 10);
        const suffix = counter.getAttribute('data-suffix') || '';
        if (isNaN(target)) return;
        
        counter.textContent = '0';
        const duration = 2000;
        const startTime = performance.now();
        
        const updateCount = (currentTime) => {
            const elapsed = currentTime - startTime;
            const progress = Math.min(elapsed / duration, 1);
            
            // easeOutExpo for dramatic effect
            const easeProgress = progress === 1 ? 1 : 1 - Math.pow(2, -10 * progress);
            
            const current = Math.floor(easeProgress * target);
            
            // Format numbers with dots for thousands
            const formatted = current.toLocaleString('tr-TR');
            counter.textContent = formatted + suffix;
            
            if (progress < 1) {
                requestAnimationFrame(updateCount);
            } else {
                counter.textContent = target.toLocaleString('tr-TR') + suffix;
            }
        };
        
        requestAnimationFrame(updateCount);
    });
}

// Gallery Navigation
function galleryNav(galleryId, direction) {
    if (event) { event.stopPropagation(); }
    
    const gallery = document.getElementById('gallery-' + galleryId);
    if (!gallery) return;
    
    const images = gallery.querySelectorAll('.gallery-img');
    const counter = document.getElementById('gallery-counter-' + galleryId);
    if (images.length === 0) return;
    
    // Find current active
    let currentIndex = 0;
    images.forEach((img, i) => {
        if (img.classList.contains('active')) currentIndex = i;
    });
    
    // Remove active from current
    images[currentIndex].classList.remove('active');
    
    // Calculate new index with wrapping
    let newIndex = currentIndex + direction;
    if (newIndex < 0) newIndex = images.length - 1;
    if (newIndex >= images.length) newIndex = 0;
    
    // Set new active
    images[newIndex].classList.add('active');
    
    // Update counter
    if (counter) {
        counter.textContent = (newIndex + 1) + ' / ' + images.length;
    }
}

// ESC key to close modal
document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
        closeProjectDetail();
    }
});
