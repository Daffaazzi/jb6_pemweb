# Jobsheet 1 — HTML5 Semantic Skeleton

Sub-CPMK: Menyusun struktur halaman web dengan HTML5 semantic.

## Isi tahap ini
- `index.html` — Beranda dengan ringkasan statistik (dummy).
- `buku/list.html` — tabel daftar buku statis (5 baris dummy).
- `buku/tambah.html` — form tambah buku (belum diproses).
- `anggota/list.html` — tabel daftar anggota statis (tugas mandiri).
- `anggota/tambah.html` — form tambah anggota (tugas mandiri).

## Cara menjalankan
Buka `index.html` langsung di browser (belum butuh server).

## Catatan
- Belum ada CSS/JS — fokus murni pada struktur semantic (`header`, `nav`, `main`, `section`, `article`, `footer`) dan penamaan atribut `name`/`id` yang akan dipakai kembali di jobsheet berikutnya.

## Catatan Perbaikan (revisi)

- Navbar disamakan di semua halaman: Beranda, Daftar Buku, Tambah Buku, Daftar Anggota, Tambah Anggota (sebelumnya tiap halaman punya set tautan berbeda). Halaman aktif ditandai `aria-current="page"`.
- Atribut `name`/`id` form tidak berubah; `<label>` sekarang berdiri sendiri (tanpa `<br>`), `<th>` memakai `scope="col"`, form diberi `action`/`method`.
- Kartu statistik Beranda dirapikan: judul `<h2>` "Ringkasan" tidak lagi menempati satu sel grid (sebelumnya membuat kartu bergeser dan baris tidak lurus); kartu kini sama tinggi dan, di layar tablet, kartu ketiga melebar penuh.
- Tabel anggota diisi 4 baris dummy (A001–A004) agar selaras dengan `data/anggota.json` di Jobsheet 6; nomor HP memakai `type="tel"`.
