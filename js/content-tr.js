/* ============================================================
   BAIEF — Turkish text for the eight pairs
   Keyed by pair id. Anything left out falls back to the English
   in data.js, so a partial translation still renders.
   ============================================================ */
'use strict';

const PAIRS_TR = {

"cappadocia-medusae": {
  headline: "Peribacaları, iki kez oyuldu",
  earth: {
    name: "Göreme, Kapadokya", where: "Türkiye",
    rock: "İgnimbrit ve volkanik kül, 9–2,6 milyon yıllık",
    blurb: "Erciyes ve Hasandağ bu yaylayı kızgın külle örttü. Kül kaynaşıp yumuşak bir kayaya dönüştü. Sonra yağmur ve rüzgâr milyonlarca yıl boyunca onu kulelere oydu; insanlar da kuleleri oyup ev ve kilise yaptı."
  },
  target: {
    name: "Aeolis ve Zephyria Planum", where: "Medusae Fossae Formasyonu, Mars",
    rock: "Mars'ın en büyük gevşek kül yatağı, yüzlerce metre kalınlığında",
    blurb: "Mars'ın da bir kül yaylası var ve devasa — kabaca Hindistan büyüklüğünde. Yağmurun yardımı olmadan rüzgâr tek başına, milyonlarca yıldır onu yardang denen uzun paralel sırtlara zımparalıyor."
  },
  hardware: {
    kind: "Yörünge aracı", whereNow: "Mars yörüngesinde, sessiz",
    story: "Bu, aralarındaki tuhaf olan: haritanın arkasındaki makine yerde değil, yukarıda. Mars Global Surveyor, MOLA adlı bir lazer taşıyordu; Mars'a yaklaşık 670 milyon atış yapıp her yankının dönüş süresini ölçtü. Gezegenin gerçek şeklini böyle öğrendik — bugüne dek gördüğün her Mars yükselti haritası, burada açabileceğin de dahil, onun ölçümlerinden yapıldı.",
    ending: "2 Kasım 2006'da bir güneş panelini ayarlaması istendi. Bir yazılım hatası yanlış radyatörü Güneş'e çevirdi, batarya aşırı ısındı ve araç sustu. Bir daha hiç cevap vermedi.",
    feel: "Şu anda hâlâ Mars'ın çevresinde dönüyor — başka bir gezegenin yörüngesinde ölü bir uydu, kapatacak kimse yok."
  },
  compare: [
    { label: "Onu ne oydu", earth: "Yağmur, dereler ve don — sonra rüzgâr", target: "Sadece rüzgâr. Milyarlarca yıldır yağmur yok" },
    { label: "Oluşturduğu biçim", earth: "Koniler ve bacalar, çoğu tepesinde sert bir kaya taşır", target: "Yardanglar — uzun sırtlar, hepsi aynı yöne taranmış" },
    { label: "Nasıl ayırt edilir", earth: "Kulelerin arasında yollar, tarlalar ve köyler", target: "Onlarca kilometre boyunca dümdüz paralel giden sırtlar" }
  ],
  lookFor: [
    "Mars'ta her sırtın aynı yöne baktığına dikkat et. O, kayaya donmuş rüzgâr yönü.",
    "Dünya'da vadiler bir ağaç gibi dallanıyor. Dallanma su demek. Mars'ta burada neredeyse hiç yok.",
    "Mars katmanını THEMIS gündüz kızılötesine çevir: kül koyu görünür, çünkü ince toz ısı tutmaz."
  ]
},

"tuzgolu-meridiani": {
  headline: "Su olduğunu kanıtlayan tuz",
  earth: {
    name: "Tuz Gölü", where: "Türkiye",
    rock: "Evaporit — kuruyan suyun bıraktığı tuz ve sülfat kabukları",
    blurb: "Türkiye'nin ikinci büyük gölü yalnızca bir iki metre derinlikte ve çoğu yaz tamamen kuruyup üstünde yürüyebileceğin beyaz bir tuz kabuğu bırakıyor. O kabuk bir kayıttır: ancak suyun oturup sonra çekildiği yerde oluşur."
  },
  target: {
    name: "Endeavour Krateri", where: "Meridiani Planum, Mars",
    rock: "Hematit küreleriyle bezeli sülfat anakayası",
    blurb: "Uçsuz bucaksız düz bir ovada 22 km'lik bir krater. Kenarı, sülfat kayası katmanlarını kesip açığa çıkarıyor — kuruyan bir göl tabanında oluşan mineral ailesinin aynısı. Bir gezgin son yıllarını burada, o katmanları sayfa sayfa okuyarak geçirdi."
  },
  hardware: {
    kind: "Gezgin", whereNow: "Endeavour Krateri'nin kenarında, Perseverance Vadisi'nde park halinde",
    story: "Opportunity 90 Mars günü dayanmak ve yaklaşık bir kilometre yol gitmek üzere yapılmıştı. 5.111 gün dayandı ve 45 kilometre gitti — bir maraton; nitekim NASA son etabına o adı verdi. İnişinden haftalar sonra jarosit ve hematitten yapılma küçük gri küreler buldu; ekip onlara yaban mersini dedi. İki mineral de oluşmak için sıvı su ister. Gezginin sorması için gönderildiği sorunun cevabı buydu.",
    ending: "Haziran 2018'de bir toz fırtınası bütün gezegeni sardı ve Güneş'i kapattı. Opportunity'nin son sinyali 10 Haziran'da geldi. NASA sekiz ay boyunca seslendi. 13 Şubat 2019'da seslenmeyi bıraktı.",
    feel: "Son sözlerinin \"bataryam düşük ve hava kararıyor\" olduğunu okumuş olabilirsin. O cümle, mühendislik verisinin bir gazeteci tarafından şiirleştirilmiş hâli; gezginin gönderdiği bir mesaj değil. Gerçek telemetri bir güç değeri ile bir sıcaklıktı. Bir bakıma bu daha hüzünlü."
  },
  compare: [
    { label: "Geride kalan mineral", earth: "Sodyum ve magnezyum tuzları, jips", target: "Magnezyum ve kalsiyum sülfatları, jarosit" },
    { label: "Su nasıldı", earth: "Tuzlu, sığ, mevsimlik", target: "Tuzlu, sığ — ve yakacak kadar asitli" },
    { label: "Neden hâlâ görünür", earth: "Göl her yıl yeniden dolup kuruyor", target: "Milyarlarca yıldır üstüne yağmur yağmadı" }
  ],
  lookFor: [
    "İki yüzey de şaşırtıcı ölçüde düz ve soluk. Bu düzlük, duran suyun imzası.",
    "Endeavour'ın kenarını bul: düz ovanın katmanları görecek kadar derin yarıldığı tek yer orası.",
    "Dünya'da güney kıyıdaki tuz havuzlarının düz çizgilerine bak. Mars'ta düz çizgi yoktur."
  ]
},

"pamukkale-gusev": {
  headline: "Soğuk bir gezegende kaplıcalar",
  earth: {
    name: "Pamukkale", where: "Türkiye",
    rock: "Traverten — kaplıca suyunun bıraktığı kalsiyum karbonat",
    blurb: "Burada yerden çıkan ılık su, çözünmüş kayayla yüklü. Havayla buluştuğu anda o kayayı bırakıyor ve basamak basamak beyaz teraslar örüyor. Sıcak su artı mineral artı zaman, çok belirgin bir tortu demek."
  },
  target: {
    name: "Home Plate, Columbia Tepeleri", where: "Gusev Krateri, Mars",
    rock: "Opalli silis — sıcak suyun parmak izi",
    blurb: "160 km'lik bir kraterin içinde bir grup alçak tepe. Bir gezgin onları kazıdı ve yalnızca kaplıcaların ve volkanik buhar bacalarının çevresinde oluşan türden neredeyse saf silis buldu. Dünya'daki yaşam tam da böyle yerlere bayılır."
  },
  hardware: {
    kind: "Gezgin", whereNow: "Ekibin Troy adını verdiği noktada, göbeğine kadar yumuşak kuma gömülü",
    story: "Spirit, Opportunity'nin ikiziydi; gezegenin öbür ucuna üç hafta önce indi. Zor araziyi o çekti. Gusev Krateri sıkıcı volkanik kayayla kaplı çıkınca Spirit ufuktaki tepelere doğru sürdü — ve orada, Home Plate'te, Gusev'in bir zamanlar kaplıcaları olduğunu gösteren opalli silisi buldu. Bu keşfi geri geri giderek, yıllar önce bozulmuş bir tekerleği sürükleyerek yaptı.",
    ending: "Nisan 2009'da altındaki kabuk kırıldı ve Spirit yumuşak sülfat kumuna gömüldü. Mühendisler on ay boyunca Dünya'da simüle edebildikleri her kurtulma yolunu denedi. Hiçbiri işe yaramadı. Panellerini kış Güneşi'ne çeviremedi ve 22 Mart 2010'da temelli sustu.",
    feel: "600 metre gitmek üzere tasarlanmıştı. 7.730 metre gitti. Şimdi sıkışmış durumda — ama indiği yerden, söz verilenin yaklaşık on üç katı uzakta sıkışmış durumda."
  },
  compare: [
    { label: "Sıcak suyun bıraktığı mineral", earth: "Kalsiyum karbonat (traverten)", target: "Silis (opal) — başka tarif, aynı mutfak" },
    { label: "Isı kaynağı", earth: "Dünya'nın içiyle ısınan derin yer altı suyu", target: "Volkanik ısı, çoktan soğumuş" },
    { label: "Neden önemli", earth: "Bu havuzlarda mikroplar yaşar ve kayada fosilleşir", target: "Mars'ta hiç mikrop olduysa, saklanacakları yer burası" }
  ],
  lookFor: [
    "Pamukkale yamaçtaki parlak beyaz iz — bu ölçekte yardımsız bulabilirsin.",
    "Gusev'de krater tabanından yükselen Columbia Tepeleri'ni seç. Spirit onlara tırmandı.",
    "Tepeleri daha keskin görmek için Mars'ı Gusev bölgesel mozaiğine çevir."
  ]
},

"karapinar-elysium": {
  headline: "Dinlemek için düz, tozlu bir yer",
  earth: {
    name: "Karapınar volkanik ovası", where: "Konya, Türkiye",
    rock: "Genç bazalt lavı, maar kraterleri, savrulan toz",
    blurb: "Meke ve Acıgöl gibi patlama kraterleriyle noktalanmış bir siyah volkanik kaya ovası; ince toprağı havaya kaldıran rüzgârla sürekli süpürülüyor. Buradaki çiftçiler, Mars'ta bir uzay aracını yenen tozun aynısıyla boğuşuyor."
  },
  target: {
    name: "Elysium Planitia", where: "Mars",
    rock: "Mars'ın en genç lavlarından biri, ince bir toz örtüsü altında",
    blurb: "İlginç olduğu için değil, sıkıcı olduğu için seçildi: düz, güvenli ve sessiz. Bir iniş aracının kıpırdamadan oturup bütün gezegenin sarsıntısını hissedebileceği bir yere ihtiyacı vardı."
  },
  hardware: {
    kind: "İniş aracı", whereNow: "Elysium Planitia'da, bir toz tabakası altında dimdik duruyor",
    story: "InSight bir metre bile yol gitmedi. Tek işi vardı: yere bir sismometre koyup dinlemek. 1.319 Mars depremi duydu ve o titreşimlerin nasıl büküldüğüne, nasıl yansıdığına bakarak Mars'ın neyden yapıldığını çıkardı — kabuk ne kadar kalın, çekirdek ne kadar büyük. Doktorların ultrasonla yaptığını Mars'a yaptı.",
    ending: "InSight güneş ışığıyla çalışıyordu ve Mars tozlu bir yer. Yıllar geçtikçe toz güneş panellerine çöktü, güç düştü. Ekip, rüzgâr panelin üstünü süpürsün diye panele kum döktü. Biraz zaman kazandırdı. Son sinyal 15 Aralık 2022'de geldi.",
    feel: "Sondan bir önceki fotoğrafı öyle tozla kaplı bir selfie ki makine olduğunu zor seçiyorsun. Ekip onu veda olarak kendi elleriyle paylaştı."
  },
  compare: [
    { label: "Yüzey", earth: "Savrulan soluk tozun altında bazalt lavı", target: "Savrulan soluk tozun altında bazalt lavı" },
    { label: "Rüzgâr", earth: "Tarlanın üst toprağını soyacak kadar güçlü", target: "Bir uzay aracını kaplayacak kadar güçlü, temizleyemeyecek kadar zayıf" },
    { label: "Altında ne var", earth: "Burada yaklaşık 35 km kalınlığında kabuk", target: "20–40 km kabuk — InSight bunu içeriden ölçtü" }
  ],
  lookFor: [
    "Karapınar yakınındaki yuvarlak maar kraterlerini bul. Onlar çarpma değil, buhar patlaması.",
    "Elysium Planitia ilk bakışta bomboş görünür. Yaklaş, lav akışlarının önü soluk dalgalar hâlinde belirir.",
    "İkisi de gerçek renkte donuk görünüyor. İkisini de yükselti kabartmasına çevir, sonra uzaklaş — Mars'ın yükselti haritası piksel başına yalnızca 300 metre, nefes alacak yere ihtiyacı var."
  ]
},

"scablands-chryse": {
  headline: "Günlerce süren bir selin izleri",
  earth: {
    name: "Channeled Scablands", where: "Washington, ABD",
    rock: "Felaket selinin çıplak bıraktığı bazalt",
    blurb: "Bir buz barajı yıkıldı ve deniz büyüklüğünde bir göl bu yaylanın üzerinden günler içinde boşaldı; toprağı söküp çıplak kaya, kuru şelaleler ve dev çakıl dalgaları bıraktı. Jeologlar buna kırk yıl boyunca inanmayı reddetti."
  },
  target: {
    name: "Chryse Planitia", where: "Mars",
    rock: "Yukarıdan taşınmış kayalarla dolu sel ovası",
    blurb: "Mars'ın kendi felaket sellerinin döküldüğü yer. Su yukarıda bir yerde yerden fışkırdı, bu ovayı kat etti ve bir kaya tarlası boşalttı. Sonra gitti, kayalar da durdukları yerde kaldı."
  },
  hardware: {
    kind: "İniş aracı", whereNow: "Chryse ovasında; adı Thomas Mutch Anma İstasyonu olarak değiştirildi",
    story: "20 Temmuz 1976'da — Apollo 11'in Ay'a inişinin yedinci yıl dönümünde — Viking 1, Mars yüzeyinde kayda değer bir süre çalışan ilk araç oldu. Başka bir gezegenin yüzeyinden çekilmiş ilk renkli fotoğrafları gönderdi, yıllarca hava durumunu ölçtü ve yaşam aramak için tasarlanmış üç deney yürüttü. Sonuçlar tuhaftı, tartışıldı ve nihayetinde kesin sayılmadı. İnsanlar hâlâ tartışıyor.",
    ending: "Altı yıl dayandı. Kasım 1982'de Dünya'dan gönderilen bir komut, bataryalarını şarjlı tutan yazılımın üstüne yanlışlıkla yazdı. Anten bir daha eve dönmedi. Altı yıllık çalışma, bir komut hatasıyla bitti.",
    feel: "Mars yüzeyinden çekilmiş ilk fotoğrafı o çekti. Çektiği karenin içinde hâlâ duruyor."
  },
  compare: [
    { label: "İşin içindeki su", earth: "Yaklaşık 2.000 kilometreküp, günler içinde boşaldı", target: "Benzer ya da daha fazlası — ve o da günler içinde" },
    { label: "Geriye ne bıraktı", earth: "Çıplak bazalt, kuru çağlayanlar, kaya tarlaları", target: "Çıplak kaya, gözyaşı biçimli adalar, kaya tarlaları" },
    { label: "Ele veren biçim", earth: "Örülen, ayrılan ve yeniden birleşen kanallar", target: "Akış yönünü gösteren gözyaşı biçimli adalar" }
  ],
  lookFor: [
    "Mars'ta gözyaşı biçimli adaları ara — seli yaran ve arkasında akıntı çizgisi bırakan kayalar.",
    "Scablands'te kanalları izle: dallanmıyor, örülüyor. Dallanma yağmur demek, örülme sel demek.",
    "İki arazi de bazalt. Fark şu ki Dünya'daki bir yüzyıldır buğday yetiştiriyor."
  ]
},

"svalbard-vastitas": {
  headline: "Beşgenlere çatlayan zemin",
  earth: {
    name: "Adventdalen", where: "Svalbard, Norveç",
    rock: "Permafrost — yıl boyu buzla çimentolanmış toprak",
    blurb: "Zemini yeterince sert ve yeterince uzun dondur, onlarca metre genişliğinde bir çokgen peteğine çatlar. Buz çatlakları doldurup genişletir. Yukarıdan döşenmiş bir zemine benziyor ve Dünya'da termometre gibi okuyabileceğin ender desenlerden biri."
  },
  target: {
    name: "Green Valley, Vastitas Borealis", where: "Mars, 68° kuzey",
    rock: "Birkaç santim altta su buzuyla çimentolanmış toprak",
    blurb: "Mars'ın kuzey ovası aynı çokgenlerle döşeli, hem de aynı nedenle. Bir iniş aracı tam da buraya gönderildi, çünkü yörünge araçları deseni görmüş ve ne anlama geldiğini tahmin etmişti."
  },
  hardware: {
    kind: "İniş aracı", whereNow: "68° kuzeyde, kutup buzunun altında ezilmiş",
    story: "Phoenix en kısa ömre ve en açık sonuçlardan birine sahipti. Kolu bir hendek kazıdı ve fotoğraflar dibinde parlak beyaz parçalar gösterdi. Günler sonra o parçalar yok olmuştu — kameranın önünde buzdan doğrudan buhara dönüşmüşlerdi. Suyun ipucu değil, çıkarımı değil: Mars'ta su buzu, yok olurken izlendi. Toprakta ayrıca perklorat tuzları buldu; bunlar hem yaşamı zorlaştırıyor hem de bir gün oksijen sağlayabilir.",
    ending: "Phoenix Mars yazında indi ve kışı atlatması hiç beklenmiyordu. Sonbahar gelirken Güneş alçaldı, güç tükendi ve 2 Kasım 2008'de son mesajını gönderdi. İki yıl sonra bir yörünge aracı sahayı fotoğrafladı: kış boyunca biriken karbondioksit buzunun ağırlığı güneş panellerini dümdüz ezmişti.",
    feel: "İşini tam da planlandığı gibi bitirmeye fırsat bulan ve sonra zamanında ölen tek araç oydu."
  },
  compare: [
    { label: "Zemin neden çatlar", earth: "Buzla çimentolanmış toprak şiddetli soğukta büzülür", target: "Buzla çimentolanmış toprak şiddetli soğukta büzülür" },
    { label: "Çokgen boyutu", earth: "Genellikle 10–30 m", target: "Genellikle 2–5 m" },
    { label: "Çatlakların içinde ne var", earth: "Her yıl biraz büyüyen saf buz kamaları", target: "Buz, artı erime noktasını düşüren perklorat tuzları" }
  ],
  lookFor: [
    "Ölçek kilidini aç ve Dünya tarafını iyice yakınlaştır: piksel başına birkaç metreye indiğinde çokgenler belirir. Mars oraya kadar seni takip edemez — bu ovanın en keskin yörünge görüntüleri 5 m/piksel; zaten tam da bu yüzden birinin oraya inmesi gerekti.",
    "NASA, Mars aletlerini Svalbard'da tam da bu benzerlik yüzünden test ediyor. Buradaki Dünya katmanı hava görüntüsü, NASA değil — Landsat kompozitinin bu kadar kuzeyde verisi yok.",
    "Mars'ı Viking renk katmanına çevir: kuzey ovası gezegenin geri kalanından belirgin biçimde daha soluk."
  ]
},

"maunaulu-hadley": {
  headline: "Bir lav nehri ve yanına park eden araba",
  earth: {
    name: "Mauna Ulu lav kanalları", where: "Kīlauea, Hawaiʻi, ABD",
    rock: "1969–1974'te püsküren bazalt lav kanalları ve çökmüş tüpler",
    blurb: "Yokuş aşağı akan lav, kendi soğumuş kayasından duvarlar örer, üstünü kapatır ve boşalıp gider; geriye boş bir taş boru kalır. Apollo ekipleri burada eğitim gördü; Dünya'nın, gitmek üzere oldukları yüzeye en çok benzeyen yerinde yürüdüler."
  },
  target: {
    name: "Hadley Yarığı", where: "Hadley–Apennine, Ay",
    rock: "Kıvrımlı bir yarık — 1,5 km genişliğinde, 300 m derinliğinde lav kanalı",
    blurb: "Ay'ın Apennine dağlarının eteğinde yaklaşık 80 kilometre boyunca kıvrılan bir kanyon. Hawaii'nin lav kanallarıyla aynı oluşum — ama yer çekiminin altıda bir olduğu ve büyümesini durduracak hiçbir şeyin bulunmadığı bir dünyada."
  },
  hardware: {
    kind: "İnsanlı gezici, iniş kademesi ve bilim istasyonu",
    whereNow: "İniş sahasının doğusunda, göğe çevrili olarak park halinde",
    story: "Apollo 15 başka bir dünyaya ilk arabayı götürdü. David Scott ve James Irwin onu üç gün boyunca 27,9 kilometre sürdü; Hadley Yarığı'nın kenarına kadar gidip Ay'da bir lav kanalının içine baktılar. Gezici, iniş aracının yanındaki güvenli düzlükle yetinmek yerine gerçek jeolojiye ulaşacak kadar uzağa gitmelerini sağladı.",
    ending: "Hiçbir şey bozulmadı. İşleri bitince onu iniş aracından biraz uzağa park ettiler, televizyon kamerasını kalkış kademesine çevirdiler ve gittiler — kamera kendi ayrılışlarını çekebilsin diye. Çekti. Sonra öylece kaldı.",
    feel: "Hâlâ orada park halinde ve kendisinden istenen son iş çoktan tamamlanmış durumda. Lunar Reconnaissance Orbiter onu yukarıdan fotoğrafladı: küçük parlak bir nokta ve ona giden tekerlek izleri, yapıldıkları günkü kadar keskin."
  },
  compare: [
    { label: "Nasıl oluştu", earth: "Lav kendi kanalını oydu, üstünü kapattı, sonra boşaldı", target: "Lav kendi kanalını oydu, üstünü kapattı, sonra boşaldı" },
    { label: "Boyut", earth: "Metrelerle onlarca metre arası genişlikte kanallar", target: "1.500 m genişlik, 300 m derinlik, 80 km uzunluk" },
    { label: "Ay'ınki neden bu kadar büyük", earth: "Güçlü yer çekimi, daha soğuk ve koyu lav, bir de dolduran yağmur", target: "Altıda bir yer çekimi, daha akışkan lav ve 3,3 milyar yıldır onu silecek hiçbir şey yok" }
  ],
  lookFor: [
    "Hadley Yarığı bu ölçekte apaçık — gri ovanın üstündeki koyu kıvrım.",
    "Yarığın kenarındaki Apennine dağları, Alpler gibi kıvrılmış doruklar değil; bir çarpma havzasının kenarı.",
    "Dünya'da 1969–74 akıntıları en koyu, en taze zemin. Daha eski akıntılar soluklaşmış ve çoktan yeşermiş."
  ]
},

"snakeriver-procellarum": {
  headline: "Geri döndüğümüz tek parça",
  earth: {
    name: "Craters of the Moon", where: "Snake River Ovası, Idaho, ABD",
    rock: "Bazalt sel lavı, cüruf konileri ve lav ovaları",
    blurb: "Tek bir dağdan değil, uzun çatlaklardan püsküren lavın kurduğu bir ova; bu yüzden yığılmak yerine düz ve koyu biçimde yayılıyor. 1969'da Apollo 14 ekibi volkanik araziyi okumayı öğrenmek için buraya geldi. Adı tesadüf değil."
  },
  target: {
    name: "Oceanus Procellarum", where: "Ay",
    rock: "Mare bazaltı — 3 milyar yıl önce bir havzayı dolduran sel lavı",
    blurb: "Pencereden çıplak gözle görebildiğin koyu lekelerin en büyüğü. Bir deniz değil. Bir lav ovası; Idaho'yla aynı tür kaya, ama havası ve suyu olmayan bir dünyada püskürmüş."
  },
  hardware: {
    kind: "Robotik iniş aracı, sonradan insanlarca ziyaret edildi",
    whereNow: "İkisi de, 163 metre arayla",
    story: "Surveyor 3 1967'de indi, iki hafta çalıştı ve terk edildi. İki buçuk yıl sonra Apollo 12 bilerek aynı noktaya yönlendirildi ve 163 metre öteye kondu — bir ekibin hassas bir hedefe indirilebileceğinin kanıtı. Charles Conrad ve Alan Bean sonra eski robotun yanına yürüdü, onu fotoğrafladı ve televizyon kamerasıyla boru parçalarını kesip eve getirdi.",
    ending: "O parçalar, Ay yüzeyinden yıllarca kaldıktan sonra geri getirilmiş tek donanımdır. Dünya'daki laboratuvarlar onları söküp iki buçuk yıllık boşluğun, radyasyonun, mikrometeorların ve 250°C'lik sıcaklık salınımlarının boyaya, metale ve cama gerçekte ne yaptığını gördü. O günden sonra yapılan her uzay aracı, bu cevap elde tasarlandı.",
    feel: "Challenge'ın başlığı tek bir yerde: terk edilmiş, ama unutulmamış. Surveyor 3'ün büyük kısmı hâlâ orada duruyor — bir kamera eksiğiyle; o kamera bir müzede."
  },
  compare: [
    { label: "Kaya türü", earth: "Çatlaklardan püsküren bazalt", target: "Çatlaklardan püsküren bazalt" },
    { label: "Yaş", earth: "15.000 ile 2.000 yıl arası — jeolojik olarak yeni doğmuş", target: "Yaklaşık 3 milyar yıl, ve neredeyse hiç aşınmamış" },
    { label: "Üstünü ne örtüyor", earth: "Cüruf, toprak, bozkır çalısı", target: "Regolit — çarpmalarla toz hâline getirilmiş kaya" }
  ],
  lookFor: [
    "İkisi de düz, koyu ve neredeyse özelliksiz. Sel bazaltı her dünyada yukarıdan böyle görünür.",
    "Ay'da küçük keskin kraterleri say. Her biri, Dünya'nın atmosferinin durduracağı bir çarpma.",
    "Apollo 12 ve Surveyor 3 sahası burada görülemeyecek kadar küçük — ama üstünde durdukları ova ekranını dolduruyor."
  ]
}

};
