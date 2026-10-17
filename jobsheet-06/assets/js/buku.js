// Mengambil & menampilkan Daftar Kamera secara asinkron dari data/buku.json
async function muatDaftarBuku() {
    const tbody = document.querySelector(".table-responsive table tbody");
    const loading = document.getElementById("loading-indicator");
    if (!tbody) return;

    if (loading) loading.hidden = false;
    tbody.replaceChildren();

    try {
        // simulasi delay jaringan agar loading indicator terlihat
        await new Promise(function (resolve) { setTimeout(resolve, 600); });

        const res = await fetch("../data/buku.json");
        if (!res.ok) {
            throw new Error("Gagal mengambil data (status " + res.status + ")");
        }
        const daftarBuku = await res.json();

        daftarBuku.forEach(function (item) {
            const tr = document.createElement("tr");
            tr.dataset.label = item.tipe;

            // textContent (bukan innerHTML) supaya data tidak dieksekusi sebagai HTML
            [item.tipe, item.merek, item.tahun, item.stok].forEach(function (nilai) {
                const td = document.createElement("td");
                td.textContent = nilai;
                tr.appendChild(td);
            });

            const tdAksi = document.createElement("td");
            const btnEdit = document.createElement("button");
            btnEdit.type = "button";
            btnEdit.className = "btn-edit";
            btnEdit.textContent = "Edit";
            const btnHapus = document.createElement("button");
            btnHapus.type = "button";
            btnHapus.className = "btn-hapus";
            btnHapus.textContent = "Hapus";
            tdAksi.append(btnEdit, " ", btnHapus);
            tr.appendChild(tdAksi);

            tbody.appendChild(tr);
        });
    } catch (err) {
        const tr = document.createElement("tr");
        const td = document.createElement("td");
        td.colSpan = 5;
        td.textContent = "Gagal memuat data: " + err.message +
            ". Pastikan halaman dibuka lewat server lokal (bukan file://).";
        tr.appendChild(td);
        tbody.replaceChildren(tr);
    } finally {
        if (loading) loading.hidden = true;
    }
}

document.addEventListener("DOMContentLoaded", muatDaftarBuku);
