# Jobsheet 4 — UI/UX Design

Sub-CPMK: Merancang UI/UX aplikasi (proyek).

## Perubahan dari Jobsheet 3
- Tidak ada perubahan kode — halaman HTML/CSS tetap sama persis dengan Jobsheet 3.
- Tambah `docs/wireframe.md`: wireframe teks + user flow untuk fitur yang **belum dibangun** (Login, Dashboard Petugas, Peminjaman, Pengembalian, Riwayat).

## Cara menjalankan
Sama seperti Jobsheet 3 — buka `index.html`.

## Catatan
Dokumen `docs/wireframe.md` menjadi acuan struktur HTML baru yang mulai diimplementasikan pada Jobsheet 5 dan seterusnya (interaktivitas JS, lalu PHP/PostgreSQL untuk fitur Login & Peminjaman).

## Catatan Perbaikan (revisi)

- Navbar disamakan di semua halaman: Beranda, Daftar Buku, Tambah Buku, Daftar Anggota, Tambah Anggota (sebelumnya tiap halaman punya set tautan berbeda). Halaman aktif ditandai `aria-current="page"`.
- Atribut `name`/`id` form tidak berubah; `<label>` sekarang berdiri sendiri (tanpa `<br>`), `<th>` memakai `scope="col"`, form diberi `action`/`method`.
- Kartu statistik Beranda dirapikan: judul `<h2>` "Ringkasan" tidak lagi menempati satu sel grid (sebelumnya membuat kartu bergeser dan baris tidak lurus); kartu kini sama tinggi dan, di layar tablet, kartu ketiga melebar penuh.
- Kode sama dengan Jobsheet 3 (sesuai instruksi); hanya ikut perbaikan navbar/aksesibilitas.
