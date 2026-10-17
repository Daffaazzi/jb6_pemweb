// ===== Hamburger menu (JS-driven, menggantikan checkbox hack) =====
function initNavToggle() {
    const toggleBtn = document.getElementById("nav-toggle-btn");
    const nav = document.querySelector("header nav");
    if (!toggleBtn || !nav) return;

    toggleBtn.addEventListener("click", function () {
        const terbuka = nav.classList.toggle("nav-open");
        toggleBtn.setAttribute("aria-expanded", terbuka ? "true" : "false");
    });
}

// Ambil teks label baris untuk pesan konfirmasi
function labelBaris(row) {
    if (!row) return "data ini";
    if (row.dataset.label) return row.dataset.label;
    const td = row.querySelector("td");
    return td ? td.textContent : "data ini";
}

// ===== Konfirmasi hapus (front-end only, belum ke server) =====
function initHapusConfirm() {
    document.querySelectorAll(".btn-hapus").forEach(function (btn) {
        btn.addEventListener("click", function () {
            const row = btn.closest("tr");
            const yakin = confirm("Yakin ingin menghapus \"" + labelBaris(row) + "\"?");
            if (yakin && row) {
                row.remove();
            }
        });
    });
}

// ===== Filter/pencarian tabel real-time =====
// Hanya mencocokkan kolom data (kolom terakhir "Aksi" diabaikan,
// supaya mengetik "hapus" tidak mencocokkan semua baris).
function initTableFilter() {
    const input = document.getElementById("search-input");
    const table = document.querySelector(".table-responsive table");
    if (!input || !table) return;

    input.addEventListener("keyup", function () {
        const keyword = input.value.trim().toLowerCase();
        const rows = table.querySelectorAll("tbody tr");
        rows.forEach(function (row) {
            const sel = Array.from(row.querySelectorAll("td")).slice(0, -1);
            if (sel.length === 0) return; // baris pesan (loading/error) jangan disaring
            const teks = sel.map(function (td) { return td.textContent; }).join(" ").toLowerCase();
            row.hidden = !teks.includes(keyword);
        });
    });
}

// ===== Validasi form (client-side) =====
function tampilkanError(input, pesan) {
    hapusError(input);
    const span = document.createElement("span");
    span.className = "error";
    span.textContent = pesan;
    input.classList.add("invalid");
    input.setAttribute("aria-invalid", "true");
    input.insertAdjacentElement("afterend", span);
}

function hapusError(input) {
    input.classList.remove("invalid");
    input.removeAttribute("aria-invalid");
    const next = input.nextElementSibling;
    if (next && next.classList.contains("error")) {
        next.remove();
    }
}

// Aturan per field (berdasarkan atribut name). Field lain yang
// memiliki atribut required otomatis dicek "wajib diisi".
const ATURAN_FIELD = {
    tahun: function (v) {
        const n = parseInt(v, 10);
        return (isNaN(n) || n < 1900 || n > 2026) ? "Tahun harus di antara 1900-2026." : "";
    },
    stok: function (v) {
        const n = parseInt(v, 10);
        return (isNaN(n) || n < 0) ? "Stok wajib diisi dan tidak boleh negatif." : "";
    },
    no_hp: function (v) {
        return (v !== "" && !/^[0-9+\-\s]{8,15}$/.test(v)) ? "No. HP hanya berisi angka (8-15 karakter)." : "";
    }
};

function validasiField(input) {
    const nilai = input.value.trim();
    let pesan = "";
    if (input.required && nilai === "") {
        pesan = "Field ini wajib diisi.";
    } else if (ATURAN_FIELD[input.name]) {
        pesan = ATURAN_FIELD[input.name](nilai);
    }
    if (pesan) {
        tampilkanError(input, pesan);
        return false;
    }
    hapusError(input);
    return true;
}

function initValidasiForm() {
    const form = document.getElementById("form-tambah");
    if (!form) return;

    const status = document.getElementById("form-status");
    const fields = Array.from(form.querySelectorAll("input, select"));

    // Hapus pesan error begitu pengguna memperbaiki isian
    fields.forEach(function (f) {
        f.addEventListener("input", function () {
            if (f.classList.contains("invalid")) validasiField(f);
        });
    });

    form.addEventListener("submit", function (e) {
        // Form ini belum dikirim ke server (baru dikerjakan Jobsheet 7+),
        // jadi submit selalu dicegah; hanya validasi + pesan status.
        e.preventDefault();
        if (status) status.textContent = "";

        let pertamaSalah = null;
        fields.forEach(function (f) {
            if (!validasiField(f) && !pertamaSalah) pertamaSalah = f;
        });

        if (pertamaSalah) {
            pertamaSalah.focus();
            return;
        }
        if (status) {
            status.textContent = "Data valid. (Belum disimpan ke server \u2014 akan diproses mulai Jobsheet 7.)";
        }
        form.reset();
    });
}

document.addEventListener("DOMContentLoaded", function () {
    initNavToggle();
    initHapusConfirm();
    initTableFilter();
    initValidasiForm();
});
