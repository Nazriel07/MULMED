# SISKOM — Media Pembelajaran Interaktif Sistem Komputer

**SISKOM** adalah website media pembelajaran interaktif mengenai **Sistem Komputer** yang dirancang agar siswa dapat mempelajari komponen komputer, cara perakitan, serta sistem bilangan secara visual, aman, dan menyenangkan langsung melalui browser.

---

## Isi Website

Website ini terdiri dari beberapa bagian utama yang dapat diakses melalui menu navigasi:

### 1. Beranda (`#beranda`)
- Pengenalan singkat media pembelajaran **SISKOM**.
- Ilustrasi interaktif CPU beserta siklus dasar kerja komputer (**Input → Proses → Output**).
- Tombol pintas untuk langsung menuju materi **Penjelasan** atau **Simulasi**.

### 2. Penjelasan (`#penjelasan`)
Berisi materi pengenalan perangkat keras dan sistem bilangan komputer:
- **Galeri Komponen:** Gambaran visual bentuk fisik komponen komputer (`gambar/komponen-komputer.svg`).
- **12 Kartu Komponen Interaktif:** Dilengkapi filter kategori (*Semua*, *Perangkat Input*, *Proses & Kontrol*, *Penyimpanan*, *Perangkat Output*):
  - **Proses & Kontrol:** CPU (Prosesor), Motherboard, Kartu Grafis (GPU), Catu Daya (PSU).
  - **Penyimpanan:** RAM, Storage (SSD/HDD).
  - **Perangkat Input:** Keyboard, Mouse, Webcam & Mikrofon.
  - **Perangkat Output:** Monitor, Printer, Speaker.
  - Klik setiap kartu untuk membuka **jendela detail** berisi deskripsi, fungsi utama, fakta menarik, serta perannya dalam alur data (IPO).
- **Sistem Bilangan Komputer:** Penjelasan ringkas beserta contoh mengenai empat basis bilangan (**Desimal**, **Biner**, **Oktal**, dan **Heksadesimal**) beserta tips konversinya.

### 3. Simulasi (`#simulasi`)
Berisi sarana praktik visual yang aman tanpa risiko merusak perangkat asli:
- **Template Video Simulasi:** Area pemutar video yang disiapkan untuk menampilkan video simulasi sistem komputer (dapat diaktifkan dengan mengisi path video pada `SIM_VIDEO_SRC` di `js/app.js`).
- **Simulasi Pemasangan Motherboard (7 Langkah):** Panduan bertahap merakit komponen ke motherboard (*Persiapan & Keselamatan → CPU → Pendingin/Heatsink → RAM → SSD → GPU → Kabel & Catu Daya*). Dilengkapi kontrol kecepatan (*Lambat*, *Normal*, *Cepat*), tombol langkah manual, progress bar, dan tips keselamatan.
- **Rakit Tata Letak Motherboard (*Drag & Drop*):** Latihan interaktif memasang 6 komponen (*Catu Daya/PSU*, *RAM*, *CPU*, *GPU/PCIe*, *Chipset*, dan *Storage/SSD*) ke slot yang tepat pada papan motherboard. Mendukung fitur seret (*drag and drop*) maupun ketuk (*tap*) untuk layar sentuh, lengkap dengan panel deskripsi komponen.

### 4. Game Edukatif (`#game`)
Tiga permainan interaktif untuk menguji pemahaman siswa:
- **Kuis Cepat:** 10 soal pilihan ganda seputar sistem komputer dan bilangan, dilengkapi 3 nyawa (`❤️`), umpan balik serta penjelasan jawaban di setiap soal, dan rekap skor/nilai akhir.
- **Cocokkan Komponen:** Permainan mencocokkan 6 ikon komponen komputer dengan namanya yang dilengkapi penghitung waktu (*timer*).
- **Tantangan Bilangan:** Latihan konversi acak antar sistem bilangan (*Desimal ↔ Biner* dan *Desimal ↔ Heksadesimal*) lengkap dengan tips pengerjaan dan pengecekan jawaban instan.

---

## Struktur Proyek

```text
MULMED/
├── index.html      # Struktur halaman dan seluruh bagian website
├── css/
│   └── style.css   # Desain tampilan, animasi, dan tata letak responsif
├── js/
│   └── app.js      # Data materi, logika simulasi, drag & drop, dan 3 game edukatif
├── gambar/         # Aset ilustrasi SVG (hero CPU, galeri komponen, motherboard)
└── README.md       # Dokumentasi isi website
```

## Cara Menjalankan

Buka file `index.html` langsung menggunakan browser modern (Chrome, Edge, Firefox, atau Safari). Tidak memerlukan server tambahan atau instalasi paket apa pun.
