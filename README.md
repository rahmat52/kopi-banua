# Kopi Banua - Landing Page UMKM

Tugas 1 Pemrograman Web 1 - S1 Sistem Informasi FTI UNISKA MAB

**Nama**  : Rahmat Hidayatul Akhir  
**NPM**   : 2510020033
**Tautan**: https://rahmat52.github.io/kopi-banua/

## Deskripsi

Landing page untuk UMKM kedai kopi rumahan **Kopi Banua** di Jalan Sultan Adam, Banjarmasin. Menampilkan profil usaha kopi Robusta petani Pengaron, daftar menu favorit beserta harga, tabel jam operasional, galeri foto dan video proses sangrai, peta lokasi interaktif, informasi promo, serta formulir pemesanan.

## Teknologi

- **HTML5 Semantik** (`header`, `nav`, `main`, `section`, `article`, `aside`, `figure`, `figcaption`, `footer`)
- **CSS3** (Custom Properties/`:root`, Flexbox, CSS Grid, Media Queries Mobile-First)
- **JavaScript (Vanilla)** (Manipulasi DOM & Validasi Formulir)

## Fitur

1. Navigasi lengket (*sticky header*) dan tombol menu hamburger interaktif pada layar ponsel.
2. Tata letak responsif tanpa gulir mendatar pada tiga ukuran layar (`360px`, `768px`, dan `1440px`).
3. Pemilihan menu otomatis dari kartu menu ke formulir pemesanan.
4. Validasi formulir pemesanan (nama, format & panjang nomor WhatsApp minimal 10 digit, pilihan menu, dan jumlah pesanan) menggunakan JavaScript bebas *error* Console.
5. Optimasi pemuatan halaman dengan `loading="lazy"` pada gambar bawah, `preload="none"` pada video lokal, dan kontras warna aksesibel (WCAG AA).

## Struktur Berkas

```text
kopi-banua/
├── index.html
├── README.md
├── css/
│   └── style.css
├── js/
│   └── script.js
├── img/
│   ├── americano.jpg
│   ├── biji-kopi.jpg
│   ├── kappuccino.jpg
│   ├── kedai.jpg
│   ├── kopi-susu.jpg
│   ├── kopi-tubruk-banua.jpg
│   ├── logo.png
│   ├── proses-sangrai.mp4
│   ├── roti-bakar-srikaya.jpg
│   └── teh-tarik.jpg
└── dokumentasi/
    └── dokumentasi-proyek.md
```