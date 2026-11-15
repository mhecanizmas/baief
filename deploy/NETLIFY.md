# Netlify'a yayınlama

Bu proje düz HTML/CSS/JS. **Derleme adımı yok**, `npm install` yok, bağımlılık yok.
Netlify'ın yapması gereken tek şey dosyaları olduğu gibi sunmak.

Yapılandırma hazır: repo kökündeki [`netlify.toml`](../netlify.toml). Aşağıdaki
yöntemlerden hangisini seçersen seç, o dosya devreye girer.

> **Not:** `netlify.toml` repo kökünde durmak zorunda. Netlify onu başka
> klasörde aramaz. Bu klasöre taşırsan sessizce yok sayılır — hata vermez,
> sadece ayarların hiçbiri uygulanmaz.

---

## Hangi yöntemi seçmeli

| | Ne zaman | Süre |
|---|---|---|
| **A · GitHub bağlantısı** | Normal durum. Her `git push`ta site kendiliğinden güncellenir. | ~3 dk |
| **B · Sürükle‑bırak** | Hesap bağlamaya vaktin yoksa, sunumdan 10 dakika önce. | ~1 dk |
| **C · Komut satırı** | Terminalden çalışmayı seviyorsan. | ~5 dk |

Yarışma için **A**'yı öneririm: jüriye verdiğin adres, sen kodu düzelttikçe
kendiliğinden tazelenir.

---

## A · GitHub bağlantısı (önerilen)

1. [app.netlify.com](https://app.netlify.com) → giriş yap (GitHub hesabınla
   girebilirsin).
2. **Add new site** → **Import an existing project** → **GitHub**.
3. Netlify repo listesine erişmek için izin ister. `baief` deposunu seç.
4. Ayar ekranı gelir. `netlify.toml` zaten doldurduğu için dokunman gereken
   bir şey yok. Yine de kontrol et:

   | Alan | Olması gereken |
   |---|---|
   | Branch to deploy | `main` |
   | Build command | **boş** |
   | Publish directory | `.` |

   Build command alanına bir şey yazılıysa **sil**. Bu projede derlenecek bir
   şey yok; oraya `npm run build` yazarsan yayın hata verir.

5. **Deploy site**. Yarım dakika sürer.
6. Sana `rastgele-kelime-123456.netlify.app` gibi bir adres verir. Değiştirmek
   için: **Site configuration** → **Site details** → **Change site name**.
   Örneğin `baief` yazarsan adres `baief.netlify.app` olur.

Bundan sonra `main`'e her push ettiğinde site kendiliğinden yeniden yayınlanır.

---

## B · Sürükle‑bırak

1. [app.netlify.com/drop](https://app.netlify.com/drop) adresini aç.
2. **`E:\Ahmet Ozan` klasörünün kendisini** tarayıcı penceresine sürükle.
   İçindeki dosyaları değil, klasörü.
3. Bitti. Adresi hemen verir.

Bu yöntemde `netlify.toml` içindeki başlık ayarları da uygulanır, ama Git
bağlantısı kurulmadığı için **her güncellemede yeniden sürüklemen gerekir.**
Sunumdan önceki son dakika çözümü olarak iyi, kalıcı çözüm olarak değil.

---

## C · Komut satırı

```bash
npm install -g netlify-cli
```

```bash
netlify login
```

```bash
netlify deploy --prod --dir=.
```

İlk `deploy` komutunda yeni site mi oluşturulsun yoksa var olana mı bağlansın
diye sorar. `--prod` bayrağını unutursan yayın "draft" olarak çıkar ve asıl
adres güncellenmez.

---

## Yayından sonra kontrol listesi

Siteyi açıp şunlara bak. Hepsi tamamsa yayın sağlam:

- [ ] İki harita da **görüntü gösteriyor** (siyah değil)
- [ ] Ortadaki ölçek çubuğu bir değer yazıyor (`5 km` gibi)
- [ ] Sağ paneldeki donanım kartında **NASA fotoğrafları** yüklendi
- [ ] Sol listeden başka bir çifte tıklayınca haritalar oraya gidiyor
- [ ] Sağ üstten **EN/TR** geçişi çalışıyor
- [ ] Telefonda açınca iki harita alt alta diziliyor

Başlıkların gerçekten uygulandığını terminalden de doğrulayabilirsin:

```bash
curl -sI https://SENIN-ADRESIN.netlify.app | grep -i "content-security-policy\|cache-control\|x-content-type"
```

Üç satır da dönüyorsa `netlify.toml` okunmuş demektir.

---

## Bir şey ters giderse

| Belirti | Sebebi | Çözümü |
|---|---|---|
| **Haritalar bomboş / siyah** | `netlify.toml` içindeki CSP listesinden bir kaynak eksilmiş | Dosyadaki dokuz origin'in de yerinde olduğunu kontrol et. Tarayıcıda F12 → Console, "Refused to load" satırı hangi adresi söylüyorsa onu listeye ekle |
| **Sayfa açılıyor ama Leaflet yok, harita hiç çizilmiyor** | `script-src` engelledi | Console'da `cdnjs.cloudflare.com` hatası var mı bak |
| **Yazı tipi bozuk görünüyor** | `font-src` / `style-src` engelledi | `fonts.googleapis.com` ve `fonts.gstatic.com` ikisi de listede mi |
| **Fotoğraflar gelmiyor, haritalar çalışıyor** | `connect-src` engelledi | `images-api.nasa.gov` ve `images-assets.nasa.gov` ikisi de gerekli |
| **Kodu güncelledim, site eski hâlini gösteriyor** | Tarayıcı önbelleği | Ctrl+F5. Sunucu tarafı zaten `must-revalidate` ile yapılandırıldı, kalıcı sorun olmamalı |
| **Yayın "Build failed" diyor** | Build command alanına bir şey yazılmış | Netlify → Site configuration → Build & deploy → build command'i boşalt |
| **404 alıyorum** | Publish directory yanlış | `.` olmalı. `dist`, `build`, `public` değil — bu projede öyle klasörler yok |

---

## GitHub Pages ile birlikte

Proje zaten GitHub Pages'te yayında:
**https://mhecanizmas.github.io/baief/**

Netlify'a da yayınlamak ikisinden birini bozmaz — aynı depodan iki ayrı adres
beslenir, ikisi de `main` dalını izler. Pratikte işe yarar bir kullanımı var:
biri çökerse ya da sunum sırasında erişilemezse diğerini açarsın.

Jüriye **tek adres** ver. İkisini birden vermek kafa karıştırır.

---

## Bu ayarların test edilmiş olduğu

`netlify.toml` içindeki içerik güvenlik politikası (CSP) tahminle yazılmadı.
Projede geçen dokuz dış kaynağın tamamı kaynaktan çıkarıldı, politika aynen
`<meta>` etiketi olarak uygulanıp site tarayıcıda açıldı ve şunlar doğrulandı:

- Leaflet yüklendi, uygulama açıldı
- 14 harita karosu geldi, **sıfır** bozuk
- Her iki Google yazı tipi yüklendi
- NASA fotoğraf galerisi doldu
- Altmetre hava görüntüsü katmanında 23 karo geldi, **sıfır** bozuk
- Konsolda **tek bir CSP ihlali yok**

Yani listedeki dokuz origin ne eksik ne fazla. Yeni bir veri kaynağı eklersen
`netlify.toml`'a da eklemeyi unutma, yoksa sessizce engellenir.
