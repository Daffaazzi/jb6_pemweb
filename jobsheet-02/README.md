# Jobsheet 2 — CSS3 Styling Dasar

Sub-CPMK: Mengimplementasikan styling dasar dengan CSS3.

## Perubahan dari Jobsheet 1
- Tambah `assets/css/style.css` (box model, Flexbox untuk navbar, CSS Grid untuk kartu statistik Beranda).
- Semua halaman `.html` ditambahkan `<link rel="stylesheet">` ke `style.css` (path relatif menyesuaikan kedalaman folder).
- Struktur HTML **tidak diubah** — hanya tampilan.

## Cara menjalankan
Buka `index.html` langsung di browser.

## Catatan
- Kartu statistik di Beranda memakai `main section:nth-of-type(2)` sebagai grid 3 kolom.
- Class CSS bersifat generik (berbasis tag semantic + `nth-child`) agar bisa dipakai ulang di halaman Anggota tanpa duplikasi class.

## Catatan Perbaikan (revisi)

- Navbar disamakan di semua halaman: Beranda, Daftar Buku, Tambah Buku, Daftar Anggota, Tambah Anggota (sebelumnya tiap halaman punya set tautan berbeda). Halaman aktif ditandai `aria-current="page"`.
- Atribut `name`/`id` form tidak berubah; `<label>` sekarang berdiri sendiri (tanpa `<br>`), `<th>` memakai `scope="col"`, form diberi `action`/`method`.
- Kartu statistik Beranda dirapikan: judul `<h2>` "Ringkasan" tidak lagi menempati satu sel grid (sebelumnya membuat kartu bergeser dan baris tidak lurus); kartu kini sama tinggi dan, di layar tablet, kartu ketiga melebar penuh.
- CSS: daftar menu boleh membungkus (`flex-wrap`), ada gaya fokus keyboard & halaman aktif, warna tombol Edit dibuat lebih kontras.
