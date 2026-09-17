# 🌿 ROSMERIAN — Pusat Informasi Barang Hilang & Ditemukan Sekolah

> **"Temukan, Laporkan, Hubungkan Kembali."**  
> Solusi web berbasis komunitas sekolah untuk melaporkan, mencari, dan mengembalikan barang hilang dengan aman, transparan, dan terintegrasi notifikasi seketika.

---

## 📸 Tampilan & Desain UI
- **Tema:** *Clean Emerald & Crisp White* (Hijau Emerald `#15803d`, Mint Lembut `#ecfdf5`, dan Putih Bersih).
- **Pendekatan Desain:** *Modern Bento Grid Card*, responsif untuk laptop maupun layar ponsel (*mobile-first*), tipografi tajam dengan Plus Jakarta Sans, dan bersih tanpa elemen visual yang berlebihan (*Anti-AI slop*).

---

## ✨ Fitur Unggulan

1. **🔐 Autentikasi Google Siswa (Single Sign-On Simulation)**
   - Masuk menggunakan akun Google / akun sekolah (`@sekolah.sch.id`).
   - Tersimpan aman di `localStorage` peramban.
   - Profil siswa (Nama, Kelas, Avatar) otomatis terlampir di setiap laporan untuk menjaga akuntabilitas dan menghindari spam.

2. **📢 Sistem Pelaporan Ganda (Dual Report):**
   - 🔴 **Lapor Barang Hilang:** Siswa dapat memasukkan nama barang, kategori, perkiraan lokasi terakhir hilang, tanggal kejadian, deskripsi detail ciri fisik, dan nomor WhatsApp.
   - 🟢 **Lapor Barang Ditemukan:** Penemu dapat melampirkan foto barang langsung (melalui kamera / galeri HP dengan konversi Base64 otomatis), lokasi ditemukan, serta memilih tempat penyimpanan aman (*Meja Piket / Pos Satpam*, *Ruang BK*, atau *Disimpan Sendiri*).

3. **⚡ Sistem Notifikasi Siaran (Real-time Broadcast):**
   - **In-App Toast & Audio Chime:** Setiap ada laporan baru, suara nada dering lembut (*Web Audio API*) dan pop-up notifikasi otomatis muncul di pojok layar.
   - **Drawer Notifikasi:** Riwayat pemberitahuan dengan penanda badge jumlah notifikasi baru.
   - **Browser Push Notification:** Dukungan `Notification.requestPermission()` agar siswa menerima notifikasi desktop/HP meskipun tab peramban sedang tidak aktif di depan.

4. **🛡️ Verifikasi Kepemilikan (Anti-Klaim Palsu):**
   - Penemu tidak perlu membuka semua ciri rahasia barang.
   - Pemilik yang ingin mengklaim wajib mengisi pertanyaan verifikasi (misal: isi dompet, wallpaper kunci HP, nomor seri, atau gantungan kunci spesifik).
   - Tautan langsung ke WhatsApp untuk serah terima di *Safe Zone* sekolah.

5. **🔍 Filter & Pencarian Cepat (Live Search):**
   - Filter Status: *Semua*, *Hilang*, *Ditemukan*, *Selesai*.
   - Filter Kategori: *Elektronik*, *Alat Tulis & Buku*, *Pakaian & Jaket*, *Dompet & Kartu*, *Kunci & Aksesori*, *Lainnya*.
   - Pencarian teks instan tanpa perlu reload halaman.

---

## 📂 Struktur File

Proyek ini dibangun menggunakan **Pure HTML5, CSS3, dan Vanilla JavaScript murni** (tanpa framework/bundler rumit) agar mudah dibaca dan dipelajari:

```
ROSMERIAN/
├── index.html       # Struktur halaman web semantik & modal dialog
├── style.css        # Desain CSS modular dengan variabel warna, responsif & efek transisi
├── app.js           # Seluruh logika interaksi, penyimpanan localStorage, audio synth & filter
└── README.md        # Panduan proyek dan dokumentasi lengkap
```

---

## 🚀 Cara Menjalankan Proyek

1. **Unduh atau Clone Repositori ini:**
   ```bash
   git clone https://github.com/skyy134243/PROJECT-SAKA1.git
   ```
2. **Buka Langsung di Browser:**
   - Cukup klik dua kali (double click) file `index.html` di komputer Anda, atau:
   - Gunakan ekstensi *Live Server* di VS Code.
3. Tidak memerlukan instalasi `npm`, `node_modules`, ataupun konfigurasi build tools lainnya. Langsung jalan 100%!

---

## 👨‍💻 Kontribusi & Pengembang
Dibuat untuk ekosistem sekolah **SAKA1** dengan semangat kejujuran dan gotong royong antar siswa.
