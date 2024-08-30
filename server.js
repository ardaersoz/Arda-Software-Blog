const express = require('express');
const app = express();
const port = 3000;

// Statik dosyaların yer aldığı dizin
app.use(express.static('public'));

// JSON verilerini işlemek için gerekli middleware
app.use(express.json());

// API rotası (GET)
app.get('/api/announcements', (req, res) => {
    res.json([
        { subject: 'Güncelleme', content: 'Yeni güncelleme geldi!' },
        { subject: 'Proje', content: 'Yeni bir proje başlatıldı.' }
    ]);
});

// API rotası (POST)
app.post('/api/announcements', (req, res) => {
    const newAnnouncement = req.body;
    console.log('Yeni duyuru alındı:', newAnnouncement);
    
    // Burada duyuruyu bir veritabanına veya dosyaya kaydedebilirsiniz
    // Şu anda sadece başarıyla alındığını bildiren bir yanıt dönüyoruz
    res.status(201).json(newAnnouncement);
});

// Sunucuyu başlat
app.listen(port, () => {
    console.log(`Sunucu http://localhost:${port} adresinde çalışıyor`);
});
