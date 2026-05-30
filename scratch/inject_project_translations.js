const fs = require('fs');
const path = 'js/app.js';

let content = fs.readFileSync(path, 'utf8');

const replacements = [
    {
        target: 'elektrik_proj_1_title: "Raylı Sistemler & Altyapı Projesi",',
        replace: `elektrik_proj_1_title: "Raylı Sistemler & Altyapı Projesi",
            elektrik_proj_1_desc: "Şehir içi metro hatlarının ve raylı sistemlerin tüm elektrifikasyon, sinyalizasyon ve trafo altyapı mühendisliği.",
            elektrik_proj_2_desc: "Büyük endüstriyel tesisler için yüksek verimli çatı tipi güneş enerjisi santrali mühendisliği, tedariği ve kurulumu.",
            elektrik_proj_3_desc: "Otomotiv fabrikası üretim hatlarının yüksek gerilim trafo merkezleri, AG/OG panoları ve hassas otomasyon güç altyapısı kurulumu.",
            elektrik_proj_4_desc: "A++ akıllı gökdelen projesinin jeneratör senkronizasyonu, kesintisiz güç kaynağı entegrasyonu ve tüm busbar dağıtım şebekesi.",`
    },
    {
        target: 'elektrik_proj_1_title: "Railway Systems & Infrastructure Project",',
        replace: `elektrik_proj_1_title: "Railway Systems & Infrastructure Project",
            elektrik_proj_1_desc: "All electrification, signaling, and transformer substation infrastructure engineering of urban metro and light rail transit networks.",
            elektrik_proj_2_desc: "Engineering, procurement, and turnkey installation of high-efficiency rooftop photovoltaic solar power plants for industrial facilities.",
            elektrik_proj_3_desc: "High-voltage substation systems, MV/LV distribution panels, and clean-power automation infrastructure for automotive production plants.",
            elektrik_proj_4_desc: "Generator synchronization, UPS network integration, and complete busbar electrical distribution grid of an A++ grade luxury smart high-rise towers.",`
    },
    {
        target: 'elektrik_proj_1_title: "مشروع أنظمة السكك الحديدية والبنية التحتية",',
        replace: `elektrik_proj_1_title: "مشروع أنظمة السكك الحديدية والبنية التحتية",
            elektrik_proj_1_desc: "جميع أعمال الهندسة الكهربائية، الإشارات، وبنية محطات التحويل لشبكات المترو والنقل السككي الخفيف.",
            elektrik_proj_2_desc: "هندسة، توريد، وتركيب محطات الطاقة الشمسية الكهروضوئية عالية الكفاءة على أسطح المصانع والمنشآت الصناعية.",
            elektrik_proj_3_desc: "أنظمة محطات التحويل ذات الجهد العالي، لوحات التوزيع ذات الجهد المتوسط والمنخفض، والبنية التحتية للطاقة النظيفة لمصانع السيارات.",
            elektrik_proj_4_desc: "مزامنة المولدات، تكامل شبكة UPS، ونظام توزيع الطاقة عبر القضبان النحاسية (Busbar) لمجمع أبراج ذكية فاخرة من فئة A++.",`
    },
    {
        target: 'elektrik_proj_1_title: "სარკინიგზო სისტემები და ინფრასტრუქტურის პროექტი",',
        replace: `elektrik_proj_1_title: "სარკინიგზო სისტემები და ინფრასტრუქტურის პროექტი",
            elektrik_proj_1_desc: "მეტროპოლიტენისა და მსუბუქი სარკინიგზო ტრანზიტის ქსელების სრული ელექტრიფიკაცია, სიგნალიზაცია და ქვესადგურების საინჟინრო ინფრასტრუქტურა.",
            elektrik_proj_2_desc: "სამრეწველო ობიექტების მაღალეფექტური მზის ფოტოელექტრული სადგურების საინჟინრო უზრუნველყოფა და მონტაჟი.",
            elektrik_proj_3_desc: "ავტოქარხნების მაღალი ძაბვის ქვესადგურები, საშუალო/დაბალი ძაბვის გამანაწილებელი ფარები და ავტომატიზაციის კვების ინფრასტრუქტურა.",
            elektrik_proj_4_desc: "გენერატორების სინქრონიზაცია, UPS ქსელების ინტეგრაცია და A++ კლასის ელიტარული ჭკვიანი ცათამბჯენების სრული სალტური გამანაწილებელი ქსელი.",`
    },
    {
        target: 'elektrik_proj_1_title: "Проект рельсовых систем и инфраструктуры",',
        replace: `elektrik_proj_1_title: "Проект рельсовых систем и инфраструктуры",
            elektrik_proj_1_desc: "Электрификация, сигнализация и тяговые подстанции для городских линий метро и рельсового транспорта.",
            elektrik_proj_2_desc: "Проектирование, поставка и монтаж под ключ высокоэффективных крышных фотоэлектрических систем для промышленных предприятий.",
            elektrik_proj_3_desc: "Высоковольтные подстанции, распределительные щиты СН/НН и автоматизированная инфраструктура электроснабжения автозавода.",
            elektrik_proj_4_desc: "Синхронизация генераторов, бесперебойное питание и шинопроводная распределительная сеть интеллектуального комплекса класса А++.",`
    },
    {
        target: 'elektrik_proj_1_title: "Projet de systèmes ferroviaires & infrastructures",',
        replace: `elektrik_proj_1_title: "Projet de systèmes ferroviaires & infrastructures",
            elektrik_proj_1_desc: "Ingénierie complète de l'électrification, de la signalisation et des sous-stations électriques des lignes de métro.",
            elektrik_proj_2_desc: "Conception, approvisionnement et installation clé en main de centrales solaires photovoltaïques sur toiture industrielle.",
            elektrik_proj_3_desc: "Sous-stations haute tension, tableaux de distribution HTA/BT et infrastructure d'alimentation automatisée pour usine automobile.",
            elektrik_proj_4_desc: "Synchronisation des générateurs, intégration réseau ondulé et système complet de distribution par gaines à barres pour tours intelligentes.",`
    },
    {
        target: 'elektrik_proj_1_title: "Progetto sistemi ferroviari & infrastrutture",',
        replace: `elektrik_proj_1_title: "Progetto sistemi ferroviari & infrastrutture",
            elektrik_proj_1_desc: "Ingegneria completa di elettrificazione, segnalamento e sottostazioni elettriche delle linee metropolitane.",
            elektrik_proj_2_desc: "Ingegneria, approvvigionamento e installazione chiavi in mano di impianti fotovoltaici su coperture industriali ad alta efficienza.",
            elektrik_proj_3_desc: "Sottostazioni ad alta tensione, quadri di distribuzione MT/BT e infrastruttura di potenza per automazione industriale automotive.",
            elektrik_proj_4_desc: "Sincronizzazione dei generatori, integrazione UPS e sistema di distribuzione a blindosbarra di un complesso residenziale A++.",`
    }
];

replacements.forEach(r => {
    if (content.includes(r.target)) {
        content = content.replace(r.target, r.replace);
        console.log(`Success: Replaced target for ${r.target.substring(0, 30)}`);
    } else {
        console.log(`Error: Target not found: ${r.target.substring(0, 30)}`);
    }
});

fs.writeFileSync(path, content, 'utf8');
console.log('Project translations injected successfully.');
