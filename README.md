# SISKOM — Media Pembelajaran Interaktif Sistem Komputer

Website pembelajaran interaktif tentang **Sistem Komputer** yang dikembangkan dengan model **ADDIE**. Tersedia tiga fitur utama: **Penjelasan**, **Simulasi**, dan **Game Edukatif**.

## Cara Menjalankan

Cukup buka file `index.html` menggunakan browser modern (Chrome, Edge, Firefox, atau Safari). Tidak memerlukan server, instalasi, atau koneksi internet (kecuali untuk font Google Fonts, yang akan fallback ke font sistem jika offline).

## Struktur File

```
SISKOM/
├── index.html      # Seluruh struktur halaman & konten
├── css/style.css   # Styling, layout responsif, animasi
├── js/app.js       # Data komponen, kuis, simulasi, dan logika game
└── gambar/         # Ilustrasi SVG buatan sendiri (hero, galeri komponen, motherboard)
```

## Fitur & Pemetaan Kebutuhan

| Fitur | Hambatan yang Diatasi | Kebutuhan yang Dipenuhi |
|---|---|---|
| **Penjelasan** — 12 kartu komponen + modal detail & sistem bilangan | Konsep kerja abstrak, keterbatasan fisik perangkat, sulitnya menghafal fungsi | Visualisasi interaktif komponen internal |
| **Simulasi** — animasi alur data Input → Proses → RAM → Storage → Output + simulasi pemasangan motherboard 7 langkah + *drag and drop* tata letak motherboard + template video | Alur data tidak terlihat, risiko kerusakan komponen saat praktik bongkar-pasang | Simulasi alur kerja sistem, latihan merakit yang aman, panduan pemasangan bertahap, tempat video simulasi |
| **Game** — Kuis (10 soal + nyawa), Cocokkan Komponen (6 pasangan + timer), Tantangan Bilangan | Rendahnya motivasi pada materi teknis | Latihan praktik aman dengan umpan balik (*real-time feedback*) |

## Menambahkan Video Simulasi

Bagian **Simulasi** sudah disiapkan template videonya (kosong / berlabel *TEMPLATE*). Cara mengaktifkan:

1. Buat folder `video/` di root proyek, lalu letakkan file video di dalamnya (mis. `video/simulasi-sistem-komputer.mp4`).
2. Buka `js/app.js`, ubah baris paling atas:
   ```js
   const SIM_VIDEO_SRC = 'video/simulasi-sistem-komputer.mp4';
   ```
3. Simpan dan muat ulang halaman. Placeholder otomatis diganti pemutar video saat video siap diputar.

Animasi alur data di bawahnya tetap bisa digunakan sebagai simulasi alternatif.

## Landasan Pengembangan (ADDIE)

- **Analysis** — hambatan dan kebutuhan pembelajaran menjadi dasar pemetaan fitur pada tabel di atas.
- **Design** — setiap fitur dirancang sebagai solusi atas hambatan tersebut.
- **Development** — simulasi interaktif + tiga game edukatif diimplementasikan dengan HTML/CSS/JS murni.
- **Implementation** — media dapat diakses mandiri lewat browser di perangkat apa pun.
- **Evaluation** — skor kuis, pasangan, dan konversi bilangan serta umpan balik langsung menjadi indikator pemahaman siswa.
