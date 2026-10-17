# Jobsheet 5 — JavaScript DOM & Event

Sub-CPMK: Menerapkan manipulasi DOM & event JavaScript.

## Perubahan dari Jobsheet 4
- Tambah `assets/js/app.js`.
- Hamburger menu: checkbox hack (CSS) diganti tombol + JS (`nav.classList.toggle("nav-open")`).
- Form Tambah Buku & Tambah Anggota: validasi client-side (`initValidasiForm`) — field wajib, rentang tahun, stok non-negatif — pesan error tampil inline via manipulasi DOM (`insertAdjacentElement`).
- Tabel Daftar Buku & Daftar Anggota: kolom pencarian real-time (`initTableFilter`) yang menyaring baris via `keyup`.
- Tombol Hapus (`.btn-hapus`): menampilkan `confirm()` lalu menghapus baris dari tampilan (masih front-end saja, belum ke server).

## Cara menjalankan
Buka `index.html` di browser. Coba: submit form kosong (muncul error), ketik di kolom cari (tabel tersaring), klik Hapus (muncul konfirmasi).

## Catatan
- Validasi di sini murni client-side dan bisa dilewati (nonaktifkan JS). Validasi server-side ditambahkan di Jobsheet 7 sebagai lapisan kedua yang wajib.
- Hapus baris di jobsheet ini hanya menghilangkan dari tampilan (belum persisten) — akan diganti proses hapus sungguhan ke database mulai Jobsheet 9.

## Catatan Perbaikan (revisi)

- Navbar disamakan di semua halaman: Beranda, Daftar Buku, Tambah Buku, Daftar Anggota, Tambah Anggota (sebelumnya tiap halaman punya set tautan berbeda). Halaman aktif ditandai `aria-current="page"`.
- Atribut `name`/`id` form tidak berubah; `<label>` sekarang berdiri sendiri (tanpa `<br>`), `<th>` memakai `scope="col"`, form diberi `action`/`method`.
- Kartu statistik Beranda dirapikan: judul `<h2>` "Ringkasan" tidak lagi menempati satu sel grid (sebelumnya membuat kartu bergeser dan baris tidak lurus); kartu kini sama tinggi dan, di layar tablet, kartu ketiga melebar penuh.
- Form diberi `novalidate`: sebelumnya atribut `required`/`min`/`max` diproses browser lebih dulu sehingga pesan error JavaScript tidak pernah tampil.
- Validasi kini berlaku untuk semua field wajib (termasuk form Anggota: Nama, No. Anggota; No. HP angka), error hilang saat diperbaiki, dan ada pesan status saat data valid (belum dikirim ke server).
- Pencarian hanya mencocokkan kolom data (kolom Aksi diabaikan, sebelumnya mengetik "hapus" cocok ke semua baris).
