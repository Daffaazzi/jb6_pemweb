# Jobsheet 3 — Responsive Design

Sub-CPMK: Membangun tampilan responsif.

## Perubahan dari Jobsheet 2
- Tambah `<meta name="viewport">` di semua halaman.
- Navbar: hamburger menu memakai teknik **checkbox hack** murni CSS (`input[type=checkbox] + label`), aktif di layar ≤480px.
- Tabel dibungkus `<div class="table-responsive">` agar bisa di-scroll horizontal di layar sempit.
- Tambah media query di `style.css`: grid kartu statistik 3 → 2 → 1 kolom mengikuti breakpoint tablet/mobile.

## Cara menjalankan
Buka `index.html` di browser, uji dengan DevTools responsive mode pada 3 breakpoint (mobile ≤480px, tablet ~768px, desktop ≥1024px).

## Catatan
- Hamburger di jobsheet ini masih murni CSS (checkbox hack). Di Jobsheet 5 akan diganti dengan toggle berbasis JavaScript.

## Catatan Perbaikan (revisi)

- Navbar disamakan di semua halaman: Beranda, Daftar Buku, Tambah Buku, Daftar Anggota, Tambah Anggota (sebelumnya tiap halaman punya set tautan berbeda). Halaman aktif ditandai `aria-current="page"`.
- Atribut `name`/`id` form tidak berubah; `<label>` sekarang berdiri sendiri (tanpa `<br>`), `<th>` memakai `scope="col"`, form diberi `action`/`method`.
- Kartu statistik Beranda dirapikan: judul `<h2>` "Ringkasan" tidak lagi menempati satu sel grid (sebelumnya membuat kartu bergeser dan baris tidak lurus); kartu kini sama tinggi dan, di layar tablet, kartu ketiga melebar penuh.
- Checkbox hack tetap murni CSS, tetapi checkbox tidak lagi `display:none` sehingga hamburger bisa dioperasikan dengan keyboard.
