# Dokumentasi Proyek — Kopi Banua

Proyek Tugas 1 Pemrograman Web 1 (SIF1303)  
Program Studi S1 Sistem Informasi — Fakultas Teknologi Informasi UNISKA MAB

---

## 1. Masalah Klien dan Tujuan Halaman

- **Profil Usaha**: **Kopi Banua** adalah UMKM kedai kopi rumahan yang berdiri sejak tahun 2021 di Jalan Sultan Adam No. 12, Banjarmasin. Usaha ini mengolah biji kopi Robusta asli dari petani lokal Pengaron yang disangrai segar setiap pagi.
- **Target Pelanggan**: Mahasiswa, pekerja kantoran, dan penikmat kopi lokal di Banjarmasin yang mencari kopi robusta segar dengan harga terjangkau (Rp 12.000 – Rp 20.000).
- **Masalah yang Dipecahkan**: Pelanggan baru sering kesulitan mengetahui daftar menu beserta harga pasti, jam operasional harian, lokasi kedai, serta cara memesan cepat sebelum datang. Halaman *landing page* ini menyatukan seluruh informasi tersebut dalam satu halaman yang ringan, mudah diakses dari ponsel, dan dilengkapi formulir pemesanan langsung.

---

## 2. Keputusan Desain dan Tata Letak

### Palet Warna
Menggunakan tema *Royal Cobalt Blue* yang lebih cerah dan tegas, memberikan kontras komplementer terhadap foto hangat sajian kopi sekaligus melampaui standar aksesibilitas WCAG AA (minimal `4,5 : 1`):

| Variabel CSS | Kode Warna | Peran Visual | Rasio Kontras |
| :--- | :--- | :--- | :--- |
| `--latar` | `#153268` | Latar utama halaman (*Royal Cobalt Blue*) | — |
| `--kartu` | `#1d4285` | Permukaan kartu, header, tabel, form, dan footer (*Bright Cobalt*) | — |
| `--utama` | `#ffffff` | Judul (`h1`, `h2`, `h3`) dan penekanan utama (*Pure White*) | `12,44 : 1` (di latar) |
| `--teks` | `#e3eeff` | Teks paragraf utama (*Ice White*) | `10,63 : 1` (di latar) |
| `--aksen` | `#6fd0ff` | Tombol aksi, harga menu, tautan, dan kepala tabel (*Electric Sky Blue*) | `9,66 : 1` (dengan `--teks-gelap`) |

### Tipografi
- **Judul (`Poppins`, sans-serif)**: Tegas dan mudah dipindai menggunakan ukuran adaptif `clamp()`.
- **Isi (`Inter`, Arial, sans-serif)**: Nyaman dibaca pada layar ponsel maupun desktop dengan `line-height: 1.65`.

### Urutan Hierarki Bagian
1. **Header Lengket & Navigasi**: Memudahkan pengunjung berpindah antarbagian kapan saja tanpa menggulir kembali ke atas.
2. **Hero & Tentang Kami**: Mengenalkan nilai jual utama (biji Robusta Pengaron sangrai pagi) pada pandangan pertama.
3. **Daftar Menu Favorit**: Diletakkan paling atas setelah profil karena merupakan informasi yang paling dicari pengunjung, dilengkapi tombol *Pesan Menu Ini* yang langsung mengisi pilihan menu di formulir.
4. **Jam Buka, Galeri, & Lokasi**: Memberikan bukti visual suasana kedai, proses sangrai, jadwal buka, serta peta lokasi Google Maps.
5. **Kontak, Promo, & Formulir Pemesanan**: Menutup alur kunjungan dengan ajakan bertindak (*call-to-action*).

---

## 3. Tantangan Teknis (Bagian Tersulit) dan Solusinya

1. **Mencegah Gulir Mendatar pada Layar `360px`**
   - *Masalah*: Elemen media seperti `<video>`, `<iframe>` peta, dan `<table>` jam buka cenderung memiliki lebar kaku yang meluber keluar layar ponsel sempit (`360px`).
   - *Solusi*: Menerapkan `max-width: 100%` pada `img`, `video`, dan `iframe`, menghapus atribut lebar piksel statis di HTML, serta membungkus tabel dengan `<div class="bungkus-tabel">` (`overflow-x: auto`).
2. **Sinkronisasi Menu Hamburger & Validasi Formulir Tanpa Error Console**
   - *Masalah*: Pemanggilan `addEventListener` pada elemen DOM yang belum tervalidasi dapat memicu `TypeError` di Console dan menghentikan skrip validasi formulir.
   - *Solusi*: Memastikan setiap selector DOM diperiksa keberadaannya terlebih dahulu, menambahkan atribut `aria-expanded` pada tombol hamburger ponsel, serta memvalidasi nomor WhatsApp (wajib berawalan `08` dan minimal 10 digit) sebelum menampilkan ringkasan pesanan.

---

## 4. Rencana Pengembangan Lanjutan

Bila diberikan waktu pengembangan satu minggu tambahan, fitur yang akan ditambahkan adalah:
1. **Keranjang Pesanan Multi-Menu & Hitung Total Otomatis**: Memungkinkan pelanggan memilih lebih dari satu jenis minuman/makanan sekaligus dan menghitung total harga secara langsung.
2. **Integrasi Kirim Pesanan Otomatis ke API Tautan WhatsApp (`wa.me`)**: Mengarahkan hasil formulir yang sudah tervalidasi langsung menjadi draf pesan WhatsApp siap kirim ke nomor admin kedai.

---

## 5. Daftar Periksa Pengujian & Tangkapan Layar Responsif

| Ukuran Layar | Perangkat Acuan | Tata Letak Utama | Status Gulir Mendatar | Berkas Tangkapan Layar |
| :--- | :--- | :--- | :--- | :--- |
| **`360px`** | Ponsel (*Mobile*) | Menu hamburger aktif, Hero 1 kolom, Kartu Menu 1 kolom, Media 1 kolom | Aman (Tidak ada) | `tampilan-360px.png` |
| **`768px`** | Tablet | Navigasi horizontal, Hero 2 kolom, Kartu Menu 2 kolom, Media 2 kolom | Aman (Tidak ada) | `tampilan-768px.png` |
| **`1440px`** | Desktop | Navigasi horizontal, Hero 2 kolom, Kartu Menu 3 kolom, lebar konten `1100px` | Aman (Tidak ada) | `tampilan-1440px.png` |

### Panduan Menyimpan Tangkapan Layar ke Folder `dokumentasi/`
1. Buka berkas `index.html` menggunakan Chrome atau Edge.
2. Tekan `F12` lalu tekan `Ctrl + Shift + M` untuk mengaktifkan *Device Toolbar*.
3. Ubah lebar layar secara bergantian ke **`360`**, **`768`**, dan **`1440`**, lalu pilih menu **Capture screenshot** / **Capture full size screenshot** pada DevTools dan simpan ketiga gambar ke dalam folder `dokumentasi/` ini dengan nama:
   - `tampilan-360px.png`
   - `tampilan-768px.png`
   - `tampilan-1440px.png`
