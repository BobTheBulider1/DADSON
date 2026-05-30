const fs = require('fs');
const path = require('path');

const jsPath = path.join(__dirname, '..', 'js', 'app.js');
let appJsContent = fs.readFileSync(jsPath, 'utf8');

const newTranslations = {
    tr: {
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
        el_service_4_desc_long_2: "En yüksek verimliliğe sahip Tier-1 güneş panelleri, yüksek kaliteli invertörler ve dayanıklı montaj altyapıları ile tesislerinizin çatısını ya da arazilerinizi birer yeşil enerji kaynağına dönüştürüyoruz. Yatırım analizi, şebeke bağlantı izinleri, projelendirme, kurulum ve devreye alma süreçlerinin yanı sıra, santrallerinizin uzun yıllar en yüksek performansla çalışmasını sağlayacak periyodik bakım ve uzaktan izleme hizmetleri de sunuyoruz."
    },
    en: {
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
        el_service_4_desc_long_2: "We turn the roofs or lands of your facilities into a green energy source with the highest efficiency Tier-1 solar panels, high-quality inverters, and durable mounting infrastructures. In addition to investment analysis, grid connection permits, project design, installation, and commissioning processes, we also offer periodic maintenance and remote monitoring services to ensure that your power plants operate at the highest performance for many years."
    },
    ar: {
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
        el_service_4_desc_long_2: "نحول أسطح منشآتكم أو أراضيكم إلى مصادر طاقة خضراء باستخدام ألواح شمسية عالية الكفاءة (Tier-1)، وعواكس عالية الجودة، وبنية تحتية متينة للتركيب. وبالإضافة إلى دراسات الجدوى وتراخيص الربط بالشبكة وتصميم المشاريع والتركيب والتشغيل، نقدم أيضًا خدمات الصيانة الدورية والمراقبة عن بعد لضمان عمل محطاتكم بأعلى أداء لسنوات طويلة."
    },
    ka: {
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
        el_service_4_desc_long_2: "ჩვენ ვაქცევთ თქვენს სახურავებსა და ნაკვეთებს მწვანე ენერგიის წყაროდ მაღალი ეფექტურობის Tier-1 პანელებით, ხარისხიანი ინვერტორებითა და გამძლე კონსტრუქციებით. საინვესტიციო ანალიზისა და ქსელთან მიერთების გარდა, გთავაზობთ პერიოდულ ტექნიკურ მომსახურებასა და დისტანციურ მონიტორინგს."
    },
    ru: {
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
        el_service_4_desc_long_2: "Мы превращаем ваши крыши и участки в источники зеленой энергии за счет высокоэффективных модулей Tier-1, качественных инверторов и долговечных конструкций. Помимо анализа окупаемости и подключения к сети, мы предоставляем услуги регулярного технического обслуживания СЭС и удаленного мониторинга."
    },
    fr: {
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
        el_service_4_desc_long_2: "Nous transformons vos toits et terrains en sources d'énergie verte grâce à des panneaux solaires Tier-1 à haut rendement, des onduleurs de qualité et des structures de montage durables. En plus de l'analyse d'investissement et du raccordement au réseau, nous assurons la maintenance périodique et le suivi à distance."
    },
    it: {
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
        el_service_4_desc_long_2: "Trasformiamo tetti e terreni in fonti di energia rinnovabile grazie a pannelli fotovoltaici Tier-1 ad alta efficienza, inverter di qualità e strutture di supporto durevoli. Oltre all'analisi dell'investimento e all'allaccio alla rete, forniamo manutenzione periodica e monitoraggio da remoto."
    }
};

for (const lang in newTranslations) {
    const keys = newTranslations[lang];
    // Find the language section in js/app.js. Format: lang: { ... }
    const langHeader = lang + ': {';
    const idx = appJsContent.indexOf(langHeader);
    if (idx === -1) {
        console.error(`Could not find language: ${lang}`);
        continue;
    }
    
    // Build strings to append inside the language object
    let appendedString = '';
    for (const key in keys) {
        // Escape quotes
        const val = keys[key].replace(/"/g, '\\"');
        appendedString += `\n            ${key}: "${val}",`;
    }
    
    // Inject at the beginning of the language dictionary block (right after "lang: {")
    const insertPos = idx + langHeader.length;
    appJsContent = appJsContent.slice(0, insertPos) + appendedString + appJsContent.slice(insertPos);
}

fs.writeFileSync(jsPath, appJsContent, 'utf8');
console.log('Translations successfully updated in app.js!');
