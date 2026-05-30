const fs = require('fs');

const jsPath = 'js/app.js';
let content = fs.readFileSync(jsPath, 'utf8');

const projectKeys = [
    'elektrik_proj_tag_infra',
    'elektrik_proj_1_title',
    'elektrik_proj_1_desc',
    'elektrik_proj_tag_solar',
    'elektrik_proj_2_title',
    'elektrik_proj_2_desc',
    'elektrik_proj_tag_ind',
    'elektrik_proj_3_title',
    'elektrik_proj_3_desc',
    'elektrik_proj_tag_comm',
    'elektrik_proj_4_title',
    'elektrik_proj_4_desc'
];

const newTranslations = {
    tr: {
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
        elektrik_proj_4_desc: "Bursa Nilüfer lüks konut kompleksinin akıllı ev (KNX) otomasyon entegrasyonu ve estetik iç/dış cephe aydınlatma mimarisi tasarimi."
    },
    en: {
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
        elektrik_proj_tag_infra: "Инфраструктура и рельсовые системы",
        elektrik_proj_1_title: "Проект заземления фундамента линии metro в Бурсе",
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

const langs = ['tr', 'en', 'ar', 'ka', 'ru', 'fr', 'it'];

langs.forEach(lang => {
    const startIdx = content.indexOf(`${lang}: {`);
    if (startIdx === -1) {
        console.error(`Lang not found: ${lang}`);
        return;
    }
    
    // Find limit of this language block
    const nextLangs = ['en:', 'ar:', 'ka:', 'ru:', 'fr:', 'it:', '};'];
    let endIdx = content.length;
    for (const nextLang of nextLangs) {
        const idx = content.indexOf(nextLang, startIdx + 10);
        if (idx !== -1 && idx < endIdx) {
            endIdx = idx;
        }
    }
    
    let blockContent = content.substring(startIdx, endIdx);
    
    // Split block content into lines and filter out any lines that contain the project keys
    let lines = blockContent.split('\n');
    let filteredLines = lines.filter(line => {
        return !projectKeys.some(key => line.includes(`${key}:`));
    });
    
    // Find the closing brace of the language dictionary (usually it's at the end or before a trailing comma)
    let closingBraceIdx = -1;
    for (let i = filteredLines.length - 1; i >= 0; i--) {
        if (filteredLines[i].includes('}') || filteredLines[i].trim() === '}' || filteredLines[i].trim() === '},') {
            closingBraceIdx = i;
            break;
        }
    }
    
    if (closingBraceIdx === -1) {
        console.error(`Closing brace not found for ${lang}`);
        return;
    }
    
    // Construct the new clean keys block to inject
    let injectionLines = [];
    const keysMap = newTranslations[lang];
    for (const [k, v] of Object.entries(keysMap)) {
        const escapedV = v.replace(/"/g, '\\"');
        injectionLines.push(`            ${k}: "${escapedV}",`);
    }
    
    // Insert the new lines right before the line containing the closing brace
    filteredLines.splice(closingBraceIdx, 0, ...injectionLines);
    
    // Reconstruct the block and replace in content
    const newBlock = filteredLines.join('\n');
    content = content.substring(0, startIdx) + newBlock + content.substring(endIdx);
    console.log(`Cleaned and updated translations for ${lang}`);
});

fs.writeFileSync(jsPath, content, 'utf8');
console.log("Success! Clean project translations updated in js/app.js");
