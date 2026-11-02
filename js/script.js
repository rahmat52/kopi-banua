const tombolMenu = document.querySelector(".tombol-menu");
const daftarMenu = document.querySelector("nav ul");

if (tombolMenu && daftarMenu) {
  tombolMenu.addEventListener("click", function () {
    const sedangTampil = daftarMenu.classList.toggle("tampil");
    tombolMenu.setAttribute("aria-expanded", String(sedangTampil));
  });

  const tautanNavigasi = daftarMenu.querySelectorAll("a");
  tautanNavigasi.forEach(function (tautan) {
    tautan.addEventListener("click", function () {
      daftarMenu.classList.remove("tampil");
      tombolMenu.setAttribute("aria-expanded", "false");
    });
  });
}

const hargaMenu = {
  "Kopi Susu Gula Aren": 18000,
  "Americano Panas": 15000,
  "Kopi Tubruk Banua": 12000,
  "Cappuccino": 20000,
  "Teh Tarik": 18000,
  "Roti Bakar Srikaya": 15000
};

const tombolPesanKartu = document.querySelectorAll(".kartu-menu a");
const pilihanMenu = document.querySelector("#pilihan-menu");
const inputJumlah = document.querySelector("#jumlah");
const estimasiHarga = document.querySelector("#estimasi-harga strong");

function perbaruiEstimasiHarga() {
  if (!pilihanMenu || !inputJumlah || !estimasiHarga) {
    return;
  }
  const hargaSatuan = hargaMenu[pilihanMenu.value] || 0;
  const jumlah = Number(inputJumlah.value);
  const jumlahValid = Number.isFinite(jumlah) && jumlah > 0 ? Math.min(jumlah, 20) : 0;
  const total = hargaSatuan * jumlahValid;
  estimasiHarga.textContent = "Rp " + total.toLocaleString("id-ID");
}

if (pilihanMenu && inputJumlah) {
  pilihanMenu.addEventListener("change", perbaruiEstimasiHarga);
  inputJumlah.addEventListener("input", perbaruiEstimasiHarga);
}

if (tombolPesanKartu.length > 0 && pilihanMenu) {
  tombolPesanKartu.forEach(function (tautan) {
    tautan.addEventListener("click", function () {
      const kartu = tautan.closest(".kartu-menu");
      const judulMenu = kartu ? kartu.querySelector("h3") : null;
      if (judulMenu) {
        pilihanMenu.value = judulMenu.textContent.trim();
        perbaruiEstimasiHarga();
      }
    });
  });
}

const formPesan = document.querySelector("#form-pesan");
const inputNama = document.querySelector("#nama");
const inputWa = document.querySelector("#wa");
const statusPesanan = document.querySelector("#status-pesanan");

function tampilkanStatus(pesan, apakahSukses) {
  if (!statusPesanan) {
    return;
  }
  statusPesanan.textContent = pesan;
  statusPesanan.classList.remove("status-sukses", "status-peringatan");
  statusPesanan.classList.add(apakahSukses ? "status-sukses" : "status-peringatan");
}

if (formPesan && inputNama && inputWa && pilihanMenu && inputJumlah) {
  formPesan.addEventListener("submit", function (e) {
    e.preventDefault();

    const nama = inputNama.value.trim();
    const waBersih = inputWa.value.replace(/[\s-]/g, "");
    const menuDipilih = pilihanMenu.value;
    const jumlah = Number(inputJumlah.value);

    if (nama.length < 2) {
      tampilkanStatus("Mohon isi nama lengkap minimal 2 karakter.", false);
      inputNama.focus();
      return;
    }

    if (waBersih.length < 10) {
      tampilkanStatus("Nomor WhatsApp minimal 10 digit.", false);
      alert("Nomor WhatsApp minimal 10 digit.");
      inputWa.focus();
      return;
    }

    if (!/^08[0-9]{8,11}$/.test(waBersih)) {
      tampilkanStatus("Nomor WhatsApp harus diawali 08 dan berisi 10–13 angka.", false);
      inputWa.focus();
      return;
    }

    if (!menuDipilih) {
      tampilkanStatus("Silakan pilih salah satu menu terlebih dahulu.", false);
      pilihanMenu.focus();
      return;
    }

    if (!Number.isInteger(jumlah) || jumlah < 1 || jumlah > 20) {
      tampilkanStatus("Jumlah pesanan harus antara 1 sampai 20.", false);
      inputJumlah.focus();
      return;
    }

    const totalBayar = (hargaMenu[menuDipilih] || 0) * jumlah;
    tampilkanStatus(
      "Terima kasih, " + nama + "! Pesanan " + jumlah + "x " + menuDipilih + " (Rp " + totalBayar.toLocaleString("id-ID") + ") berhasil dicatat. Kami akan menghubungi " + waBersih + ".",
      true
    );
    formPesan.reset();
    inputJumlah.value = "1";
    perbaruiEstimasiHarga();
  });
}
