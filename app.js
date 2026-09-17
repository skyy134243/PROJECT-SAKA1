/**
 * ============================================================================
 * ROSMERIAN — Sistem Informasi Barang Hilang & Ditemukan Sekolah
 * File: app.js
 * Arsitektur: Vanilla JavaScript Murni (Clean, Modular & Terstruktur)
 * ============================================================================
 * Kode ini sengaja ditulis dengan JavaScript murni tanpa framework agar:
 * 1. Sangat ringan dan langsung berjalan di browser manapun (tinggal double-click index.html).
 * 2. Mudah dibaca dan dipelajari baris demi baris oleh siswa yang ingin belajar coding.
 */

// ================= 1. DATA AWAL (SEED DATA REALISTIS SEKOLAH) =================
const INITIAL_ITEMS = [
  {
    id: "item-101",
    title: "Kunci Motor Vario Hitam + Gantungan Boneka Dino",
    type: "lost", // lost = hilang
    category: "Kunci & Aksesori",
    location: "Area Parkir Motor Belakang",
    date: "2026-09-15",
    contact: "0812-3456-7890 (WA)",
    description: "Kunci kontak motor Honda Vario 125 dengan gantungan boneka dinosaurus rajut warna hijau dan ada gantungan kecil tulisan 'AR'. Terakhir ingat pas jam istirahat kedua.",
    holdingLocation: "",
    image: "https://images.unsplash.com/photo-1582139329536-e7284fece509?w=600&auto=format&fit=crop&q=80",
    reporter: {
      name: "Rian Pratama",
      email: "rian.pratama@sekolah.sch.id",
      class: "Kelas 11 IPA 2",
      avatar: "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=100&auto=format&fit=crop&q=80"
    },
    status: "lost",
    createdAt: 1726401000000,
    claims: []
  },
  {
    id: "item-102",
    title: "Kotak Pensil Faber-Castell Biru Tosca",
    type: "found", // found = ditemukan
    category: "Alat Tulis & Buku",
    location: "Lab Komputer 2 (Meja No. 14)",
    date: "2026-09-16",
    contact: "0857-1122-3344",
    description: "Kotak pensil kain warna biru tosca. Di dalamnya ada beberapa pulpen Pilot G-2, tipe-x pita, dan penggaris besi 15cm. Sudah dititipkan ke Meja Piket Guru.",
    holdingLocation: "Dititipkan ke Meja Piket / Satpam",
    image: "https://images.unsplash.com/photo-1585336261026-7f154054a852?w=600&auto=format&fit=crop&q=80",
    reporter: {
      name: "Siti Rahmawati",
      email: "siti.rahma@sekolah.sch.id",
      class: "Kelas 10 MIPA 2",
      avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&auto=format&fit=crop&q=80"
    },
    status: "found",
    createdAt: 1726487400000,
    claims: []
  },
  {
    id: "item-103",
    title: "Jaket Hoodie Erigo Warna Abu-Abu Gelap",
    type: "lost",
    category: "Pakaian & Jaket",
    location: "Tribun Pinggir Lapangan Basket",
    date: "2026-09-14",
    contact: "0896-5544-2211",
    description: "Jaket hoodie warna abu-abu ukuran L merk Erigo. Ketinggalan sehabis latihan ekskul basket hari Senin sore. Di saku depan ada headset kabel warna putih.",
    holdingLocation: "",
    image: "https://images.unsplash.com/photo-1556905055-8f358a7a47b2?w=600&auto=format&fit=crop&q=80",
    reporter: {
      name: "Fajar Maulana",
      email: "fajar.m@sekolah.sch.id",
      class: "Kelas 12 IPS 1",
      avatar: "https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?w=100&auto=format&fit=crop&q=80"
    },
    status: "lost",
    createdAt: 1726314600000,
    claims: []
  },
  {
    id: "item-104",
    title: "Kartu Pelajar & Kartu Perpustakaan a.n Dimas Anggara",
    type: "found",
    category: "Dompet & Kartu",
    location: "Meja Kantin Bu Sri",
    date: "2026-09-16",
    contact: "0813-8899-0011",
    description: "Kartu Pelajar OSIS dan kartu perpustakaan tergeletak di meja kantin bersama uang kertas. Sudah dititipkan aman di Ruang BK.",
    holdingLocation: "Dititipkan ke Ruang BK / Kesiswaan",
    image: "https://images.unsplash.com/photo-1589829545856-d10d557cf95f?w=600&auto=format&fit=crop&q=80",
    reporter: {
      name: "Nabila Putri",
      email: "nabila.p@sekolah.sch.id",
      class: "Kelas 11 Akuntansi",
      avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=100&auto=format&fit=crop&q=80"
    },
    status: "resolved", // Sudah diambil kembali
    createdAt: 1726480000000,
    claims: [
      {
        claimedBy: "Dimas Anggara",
        proof: "NIS saya 22231045, kartu perpustakaan ada barcode nomor 8821.",
        contact: "0812-9988-7766",
        date: "2026-09-16"
      }
    ]
  }
];

const INITIAL_NOTIFICATIONS = [
  {
    id: "notif-1",
    title: "Laporan Temuan Baru!",
    text: "Siti Rahmawati menemukan 'Kotak Pensil Faber-Castell' di Lab Komputer 2.",
    type: "found",
    itemId: "item-102",
    time: "Baru saja",
    read: false
  },
  {
    id: "notif-2",
    title: "Peringatan Barang Hilang!",
    text: "Rian Pratama kehilangan 'Kunci Motor Vario' di Area Parkir Belakang.",
    type: "lost",
    itemId: "item-101",
    time: "2 jam lalu",
    read: false
  },
  {
    id: "notif-3",
    title: "Barang Berhasil Dikembalikan! 🎉",
    text: "Kartu Pelajar a.n Dimas Anggara telah berhasil diserahkan di Ruang BK.",
    type: "resolved",
    itemId: "item-104",
    time: "1 hari lalu",
    read: true
  }
];

// ================= 2. STATE MANAGER APLIKASI =================
const app = {
  // Data State
  items: [],
  notifications: [],
  currentUser: null,

  // Filter & Search State
  filterStatus: 'all',     // 'all' | 'lost' | 'found' | 'resolved'
  filterCategory: 'all',   // 'all' | nama kategori
  searchQuery: '',
  sortOrder: 'newest',

  // Active form temporary state
  activeReportType: 'lost',
  tempUploadedPhoto: null,
  activeDetailItem: null,

  /**
   * Inisialisasi Aplikasi saat halaman dimuat
   */
  init() {
    this.loadFromStorage();
    this.renderAuth();
    this.renderStats();
    this.renderFeed();
    this.renderNotifications();
    this.setDefaultFormDate();
  },

  /**
   * Membaca data dari localStorage atau memakai data seed awal
   */
  loadFromStorage() {
    const storedItems = localStorage.getItem('rosmerian_items');
    if (storedItems) {
      try {
        this.items = JSON.parse(storedItems);
      } catch (e) {
        this.items = [...INITIAL_ITEMS];
      }
    } else {
      this.items = [...INITIAL_ITEMS];
      this.saveItemsToStorage();
    }

    const storedNotifs = localStorage.getItem('rosmerian_notifs');
    if (storedNotifs) {
      try {
        this.notifications = JSON.parse(storedNotifs);
      } catch (e) {
        this.notifications = [...INITIAL_NOTIFICATIONS];
      }
    } else {
      this.notifications = [...INITIAL_NOTIFICATIONS];
      this.saveNotifsToStorage();
    }

    const storedUser = localStorage.getItem('rosmerian_user');
    if (storedUser) {
      try {
        this.currentUser = JSON.parse(storedUser);
      } catch (e) {
        this.currentUser = null;
      }
    }
  },

  saveItemsToStorage() {
    localStorage.setItem('rosmerian_items', JSON.stringify(this.items));
  },

  saveNotifsToStorage() {
    localStorage.setItem('rosmerian_notifs', JSON.stringify(this.notifications));
  },

  saveUserToStorage() {
    if (this.currentUser) {
      localStorage.setItem('rosmerian_user', JSON.stringify(this.currentUser));
    } else {
      localStorage.removeItem('rosmerian_user');
    }
  },

  // ================= 3. AUTENTIKASI GOOGLE SISWA =================
  renderAuth() {
    const container = document.getElementById('authContainer');
    if (!container) return;

    if (this.currentUser) {
      // Tampilan jika sudah login
      container.innerHTML = `
        <div class="user-nav-profile" title="Akun: ${this.escapeHtml(this.currentUser.name)} (${this.escapeHtml(this.currentUser.class)})">
          <img src="${this.currentUser.avatar || 'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=100'}" alt="Avatar">
          <div class="user-nav-meta">
            <span class="user-nav-name">${this.escapeHtml(this.currentUser.name)}</span>
            <span class="user-nav-role">${this.escapeHtml(this.currentUser.class)}</span>
          </div>
          <button class="logout-icon-btn" onclick="app.logout(event)" title="Keluar / Logout">
            <i class="fa-solid fa-arrow-right-from-bracket"></i>
          </button>
        </div>
      `;
    } else {
      // Tampilan tombol Masuk dengan Google
      container.innerHTML = `
        <button class="btn btn-google btn-sm" onclick="app.openGoogleLoginModal()">
          <svg viewBox="0 0 48 48" width="16" height="16" style="margin-right:2px;">
            <path fill="#EA4335" d="M24 9.5c3.54 0 6.71 1.22 9.21 3.6l6.85-6.85C35.9 2.38 30.47 0 24 0 14.62 0 6.51 5.38 2.56 13.22l7.98 6.19C12.43 13.72 17.74 9.5 24 9.5z"/>
            <path fill="#4285F4" d="M46.98 24.55c0-1.57-.15-3.09-.38-4.55H24v9.02h12.94c-.58 2.96-2.26 5.48-4.78 7.18l7.73 6c4.51-4.18 7.09-10.36 7.09-17.65z"/>
            <path fill="#FBBC05" d="M10.53 28.59c-.48-1.45-.76-2.99-.76-4.59s.27-3.14.76-4.59l-7.98-6.19C.92 16.46 0 20.12 0 24c0 3.88.92 7.54 2.56 10.78l7.97-6.19z"/>
            <path fill="#34A853" d="M24 48c6.48 0 11.93-2.13 15.89-5.81l-7.73-6c-2.15 1.45-4.92 2.3-8.16 2.3-6.26 0-11.57-4.22-13.47-9.91l-7.98 6.19C6.51 42.62 14.62 48 24 48z"/>
          </svg>
          <span>Masuk Siswa</span>
        </button>
      `;
    }
  },

  openGoogleLoginModal() {
    this.openModal('googleLoginModalBackdrop');
  },

  loginAsDemo(name, email, className, avatar) {
    this.currentUser = { name, email, class: className, avatar };
    this.saveUserToStorage();
    this.renderAuth();
    this.closeModal('googleLoginModalBackdrop');
    this.showToast(`Selamat datang, ${name}! Siap melaporkan atau membantu teman.`, 'success');
  },

  loginWithCustomGoogle(event) {
    event.preventDefault();
    const name = document.getElementById('customGoogleName').value.trim();
    const email = document.getElementById('customGoogleEmail').value.trim();
    const className = document.getElementById('customGoogleClass').value.trim();

    if (!name || !email) return;

    this.currentUser = {
      name,
      email,
      class: className || 'Siswa',
      avatar: `https://api.dicebear.com/7.x/bottts/svg?seed=${encodeURIComponent(name)}`
    };
    this.saveUserToStorage();
    this.renderAuth();
    this.closeModal('googleLoginModalBackdrop');
    this.showToast(`Berhasil masuk sebagai ${name} (${email})`, 'success');
  },

  logout(event) {
    if (event) event.stopPropagation();
    if (confirm("Apakah Anda yakin ingin keluar dari akun ROSMERIAN?")) {
      this.currentUser = null;
      this.saveUserToStorage();
      this.renderAuth();
      this.showToast("Anda telah keluar dari akun.", "info");
    }
  },

  // ================= 4. FEED & STATISTIK =================
  renderStats() {
    const lostCount = this.items.filter(i => i.status === 'lost').length;
    const foundCount = this.items.filter(i => i.status === 'found').length;
    const resolvedCount = this.items.filter(i => i.status === 'resolved').length;

    document.getElementById('statLostCount').textContent = lostCount;
    document.getElementById('statFoundCount').textContent = foundCount;
    document.getElementById('statResolvedCount').textContent = resolvedCount;
  },

  getFilteredItems() {
    return this.items.filter(item => {
      // 1. Filter Status
      if (this.filterStatus !== 'all' && item.status !== this.filterStatus) {
        return false;
      }
      // 2. Filter Kategori
      if (this.filterCategory !== 'all' && item.category !== this.filterCategory) {
        return false;
      }
      // 3. Search Query
      if (this.searchQuery.trim() !== '') {
        const q = this.searchQuery.toLowerCase();
        const inTitle = item.title.toLowerCase().includes(q);
        const inLocation = item.location.toLowerCase().includes(q);
        const inDesc = item.description.toLowerCase().includes(q);
        const inCategory = item.category.toLowerCase().includes(q);
        if (!inTitle && !inLocation && !inDesc && !inCategory) {
          return false;
        }
      }
      return true;
    }).sort((a, b) => {
      if (this.sortOrder === 'newest') {
        return (b.createdAt || 0) - (a.createdAt || 0);
      } else {
        return (a.createdAt || 0) - (b.createdAt || 0);
      }
    });
  },

  renderFeed() {
    const grid = document.getElementById('itemsGrid');
    const emptyState = document.getElementById('emptyState');
    const countBadge = document.getElementById('feedItemCount');
    const filtered = this.getFilteredItems();

    countBadge.textContent = `${filtered.length} barang`;

    if (filtered.length === 0) {
      grid.innerHTML = '';
      emptyState.style.display = 'block';
      return;
    }

    emptyState.style.display = 'none';
    grid.innerHTML = filtered.map(item => {
      // Badge Status
      let badgeHtml = '';
      if (item.status === 'lost') {
        badgeHtml = `<span class="card-badge badge-lost"><i class="fa-solid fa-bullhorn"></i> HILANG</span>`;
      } else if (item.status === 'found') {
        badgeHtml = `<span class="card-badge badge-found"><i class="fa-solid fa-hand-holding-heart"></i> DITEMUKAN</span>`;
      } else {
        badgeHtml = `<span class="card-badge badge-resolved"><i class="fa-solid fa-circle-check"></i> SELESAI</span>`;
      }

      const defaultImg = item.status === 'lost' 
        ? 'https://images.unsplash.com/photo-1584438784894-089d6a62b8fa?w=600&auto=format&fit=crop&q=80'
        : 'https://images.unsplash.com/photo-1549465220-1a8b9238cd48?w=600&auto=format&fit=crop&q=80';

      const displayImg = item.image || defaultImg;

      return `
        <article class="item-card" onclick="app.openDetailModal('${item.id}')">
          <div class="item-card-image">
            <img src="${displayImg}" alt="${this.escapeHtml(item.title)}" loading="lazy">
            ${badgeHtml}
            <span class="card-category-tag">${this.escapeHtml(item.category)}</span>
          </div>
          <div class="item-card-body">
            <h3 class="item-card-title">${this.escapeHtml(item.title)}</h3>
            <p class="item-card-desc">${this.escapeHtml(item.description)}</p>
            <div class="item-card-meta">
              <div class="meta-row">
                <i class="fa-solid fa-location-dot"></i>
                <span>${this.escapeHtml(item.location)}</span>
              </div>
              <div class="meta-row">
                <i class="fa-regular fa-clock"></i>
                <span>${this.formatDate(item.date)}</span>
              </div>
            </div>
          </div>
          <div class="item-card-footer">
            <div class="reporter-badge">
              <img class="reporter-avatar" src="${item.reporter?.avatar || 'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=100'}" alt="Avatar">
              <span>${this.escapeHtml(item.reporter?.name || 'Siswa')}</span>
            </div>
            <span class="text-btn">Detail & Klaim &rarr;</span>
          </div>
        </article>
      `;
    }).join('');
  },

  // ================= 5. SISTEM NOTIFIKASI PINTAR & WEB NOTIFICATION =================
  renderNotifications() {
    const list = document.getElementById('notifList');
    const badge = document.getElementById('notifBadgeCount');
    const unreadCount = this.notifications.filter(n => !n.read).length;

    if (unreadCount > 0) {
      badge.textContent = unreadCount > 9 ? '9+' : unreadCount;
      badge.style.display = 'inline-block';
    } else {
      badge.style.display = 'none';
    }

    if (this.notifications.length === 0) {
      list.innerHTML = `
        <div style="text-align:center; padding: 2rem 1rem; color: var(--text-muted);">
          <i class="fa-regular fa-bell-slash" style="font-size:2rem; margin-bottom:0.5rem; display:block;"></i>
          <p style="font-size:0.85rem;">Belum ada notifikasi siaran saat ini.</p>
        </div>
      `;
      return;
    }

    list.innerHTML = this.notifications.map(n => {
      let icon = '<i class="fa-solid fa-bullhorn"></i>';
      let iconClass = 'lost';
      if (n.type === 'found') {
        icon = '<i class="fa-solid fa-hand-holding-heart"></i>';
        iconClass = 'found';
      } else if (n.type === 'resolved') {
        icon = '<i class="fa-solid fa-check"></i>';
        iconClass = 'resolved';
      }

      return `
        <div class="notif-card ${n.read ? '' : 'unread'}" onclick="app.handleNotifClick('${n.id}', '${n.itemId}')">
          <div class="notif-icon ${iconClass}">
            ${icon}
          </div>
          <div class="notif-body">
            <span class="notif-text"><strong>${this.escapeHtml(n.title)}</strong> ${this.escapeHtml(n.text)}</span>
            <span class="notif-time">${n.time}</span>
          </div>
        </div>
      `;
    }).join('');
  },

  toggleNotifDrawer(forceState) {
    const drawer = document.getElementById('notifDrawer');
    const overlay = document.getElementById('notifOverlay');
    const isOpen = drawer.classList.contains('active');
    const targetState = typeof forceState === 'boolean' ? forceState : !isOpen;

    if (targetState) {
      drawer.classList.add('active');
      overlay.classList.add('active');
    } else {
      drawer.classList.remove('active');
      overlay.classList.remove('active');
    }
  },

  handleNotifClick(notifId, itemId) {
    // Tandai sudah dibaca
    const notif = this.notifications.find(n => n.id === notifId);
    if (notif) notif.read = true;
    this.saveNotifsToStorage();
    this.renderNotifications();
    this.toggleNotifDrawer(false);

    if (itemId) {
      this.openDetailModal(itemId);
    }
  },

  markAllNotifsRead() {
    this.notifications.forEach(n => n.read = true);
    this.saveNotifsToStorage();
    this.renderNotifications();
    this.showToast("Semua notifikasi telah ditandai dibaca.", "info");
  },

  /**
   * Mengaktifkan Notifikasi Browser Resmi (Web Push Permission)
   */
  requestBrowserNotification() {
    if (!("Notification" in window)) {
      alert("Peramban web ini tidak mendukung notifikasi desktop.");
      return;
    }

    Notification.requestPermission().then(permission => {
      if (permission === "granted") {
        this.showToast("Notifikasi web diaktifkan! Anda akan menerima update langsung.", "success");
        new Notification("ROSMERIAN Aktif", {
          body: "Anda akan mendapatkan pemberitahuan seketika saat ada barang hilang di sekolah.",
          icon: "https://images.unsplash.com/photo-1582139329536-e7284fece509?w=100"
        });
        document.getElementById('browserPermBanner').style.display = 'none';
      } else {
        this.showToast("Izin notifikasi tidak diberikan.", "warning");
      }
    });
  },

  /**
   * Mengirim broadcast notifikasi: Suara Chime + In-App Toast + Browser Web Notification
   */
  broadcastItemAlert(item, type) {
    const isLost = type === 'lost';
    const notifTitle = isLost ? '🚨 Peringatan Barang Hilang Baru!' : '✨ Barang Ditemukan di Sekolah!';
    const notifDesc = `${item.reporter.name} melaporkan: ${item.title} di ${item.location}`;

    // 1. Simpan ke riwayat notifikasi
    const newNotif = {
      id: "notif-" + Date.now(),
      title: notifTitle,
      text: notifDesc,
      type: type,
      itemId: item.id,
      time: "Baru saja",
      read: false
    };
    this.notifications.unshift(newNotif);
    this.saveNotifsToStorage();
    this.renderNotifications();

    // 2. Play soft chime synth audio (Audio Web API bawaan tanpa file mp3 luar)
    this.playChimeSound();

    // 3. Tampilkan Toast di pojok bawah
    this.showToast(`<strong>${notifTitle}</strong><p>${item.title}</p>`, isLost ? 'danger' : 'success');

    // 4. Tampilkan Push Notification jika diizinkan
    if ("Notification" in window && Notification.permission === "granted") {
      new Notification(notifTitle, {
        body: `${item.title} (${item.location}). Klik untuk cek rincian.`,
        icon: item.image || "https://images.unsplash.com/photo-1582139329536-e7284fece509?w=100"
      });
    }
  },

  playChimeSound() {
    try {
      const AudioCtx = window.AudioContext || window.webkitAudioContext;
      if (!AudioCtx) return;
      const ctx = new AudioCtx();
      const osc = ctx.createOscillator();
      const gain = ctx.createGain();

      osc.type = 'sine';
      osc.frequency.setValueAtTime(587.33, ctx.currentTime); // D5
      osc.frequency.exponentialRampToValueAtTime(880, ctx.currentTime + 0.15); // A5

      gain.gain.setValueAtTime(0.2, ctx.currentTime);
      gain.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + 0.35);

      osc.connect(gain);
      gain.connect(ctx.destination);
      osc.start();
      osc.stop(ctx.currentTime + 0.35);
    } catch (e) {
      // Browser audio policy mungkin membatasi jika belum interaksi klik
    }
  },

  // ================= 6. PELAPORAN BARANG =================
  openReportModal(type = 'lost') {
    // Pastikan user sudah login
    if (!this.currentUser) {
      this.openGoogleLoginModal();
      this.showToast("Silakan masuk dengan akun Google siswa terlebih dahulu untuk melapor.", "warning");
      return;
    }

    this.switchReportType(type);
    this.openModal('reportModalBackdrop');
  },

  switchReportType(type) {
    this.activeReportType = type;
    const titleEl = document.getElementById('reportModalTitle');
    const labelLoc = document.getElementById('labelLocation');
    const holdingGroup = document.getElementById('groupHoldingLocation');
    const radioLost = document.querySelector('input[name="reportType"][value="lost"]');
    const radioFound = document.querySelector('input[name="reportType"][value="found"]');

    if (type === 'lost') {
      if (radioLost) radioLost.checked = true;
      titleEl.textContent = 'Laporkan Barang Hilang';
      labelLoc.innerHTML = 'Perkiraan Lokasi Hilang <span class="required">*</span>';
      holdingGroup.style.display = 'none';
    } else {
      if (radioFound) radioFound.checked = true;
      titleEl.textContent = 'Laporkan Barang Ditemukan';
      labelLoc.innerHTML = 'Lokasi Ditemukan <span class="required">*</span>';
      holdingGroup.style.display = 'block';
    }
  },

  handlePhotoSelect(event) {
    const file = event.target.files[0];
    if (!file) return;

    if (file.size > 3.5 * 1024 * 1024) {
      alert("Ukuran gambar terlalu besar! Maksimal 3.5MB.");
      return;
    }

    const reader = new FileReader();
    reader.onload = (e) => {
      this.tempUploadedPhoto = e.target.result;
      document.getElementById('photoPreviewImg').src = this.tempUploadedPhoto;
      document.getElementById('photoPreviewContainer').style.display = 'flex';
      document.getElementById('photoPlaceholder').style.display = 'none';
    };
    reader.readAsDataURL(file);
  },

  removeSelectedPhoto(event) {
    if (event) event.stopPropagation();
    this.tempUploadedPhoto = null;
    document.getElementById('formItemPhoto').value = '';
    document.getElementById('photoPreviewContainer').style.display = 'none';
    document.getElementById('photoPlaceholder').style.display = 'flex';
  },

  setDefaultFormDate() {
    const dateInput = document.getElementById('formItemDate');
    if (dateInput) {
      const today = new Date().toISOString().split('T')[0];
      dateInput.value = today;
    }
  },

  submitReport(event) {
    event.preventDefault();

    if (!this.currentUser) {
      alert("Sesi Anda habis. Harap masuk kembali.");
      this.openGoogleLoginModal();
      return;
    }

    const title = document.getElementById('formItemTitle').value.trim();
    const category = document.getElementById('formItemCategory').value;
    const location = document.getElementById('formItemLocation').value.trim();
    const date = document.getElementById('formItemDate').value;
    const contact = document.getElementById('formItemContact').value.trim();
    const desc = document.getElementById('formItemDesc').value.trim();
    const holdingLocation = this.activeReportType === 'found' ? document.getElementById('formHoldingLocation').value : '';

    if (!title || !category || !location || !desc || !contact) {
      alert("Harap lengkapi semua kolom bertanda bintang (*)");
      return;
    }

    const newItem = {
      id: "item-" + Date.now(),
      title,
      type: this.activeReportType,
      category,
      location,
      date,
      contact,
      description: desc,
      holdingLocation,
      image: this.tempUploadedPhoto || "",
      reporter: {
        name: this.currentUser.name,
        email: this.currentUser.email,
        class: this.currentUser.class,
        avatar: this.currentUser.avatar
      },
      status: this.activeReportType,
      createdAt: Date.now(),
      claims: []
    };

    // Tambahkan ke depan list
    this.items.unshift(newItem);
    this.saveItemsToStorage();

    // Reset Form
    document.getElementById('reportForm').reset();
    this.removeSelectedPhoto();
    this.setDefaultFormDate();
    this.closeModal('reportModalBackdrop');

    // Update UI
    this.renderStats();
    this.renderFeed();

    // Siarkan Notifikasi ke seluruh siswa
    this.broadcastItemAlert(newItem, newItem.type);
  },

  // ================= 7. DETAIL BARANG & VERIFIKASI KLAIM =================
  openDetailModal(itemId) {
    const item = this.items.find(i => i.id === itemId);
    if (!item) return;

    this.activeDetailItem = item;
    const badgeEl = document.getElementById('detailModalBadge');
    const titleEl = document.getElementById('detailModalTitle');
    const imgEl = document.getElementById('detailModalImage');
    const holderInfo = document.getElementById('detailHolderInfo');
    const holderText = document.getElementById('detailHolderText');
    const catEl = document.getElementById('detailModalCategory');
    const locEl = document.getElementById('detailModalLocation');
    const dateEl = document.getElementById('detailModalDate');
    const repEl = document.getElementById('detailModalReporter');
    const descEl = document.getElementById('detailModalDesc');
    const actionSec = document.getElementById('detailActionSection');

    // Reset form klaim jika sebelumnya terbuka
    this.toggleClaimForm(false);

    // Set Data
    titleEl.textContent = item.title;
    catEl.textContent = item.category;
    locEl.textContent = item.location;
    dateEl.textContent = this.formatDate(item.date);
    repEl.textContent = `${item.reporter.name} (${item.reporter.class || 'Siswa'})`;
    descEl.textContent = item.description;

    const defaultImg = item.status === 'lost'
      ? 'https://images.unsplash.com/photo-1584438784894-089d6a62b8fa?w=600&auto=format&fit=crop&q=80'
      : 'https://images.unsplash.com/photo-1549465220-1a8b9238cd48?w=600&auto=format&fit=crop&q=80';
    imgEl.src = item.image || defaultImg;

    // Status Badge & Tombol Aksi
    if (item.status === 'lost') {
      badgeEl.className = 'badge badge-lost';
      badgeEl.innerHTML = '<i class="fa-solid fa-bullhorn"></i> DICARI / HILANG';
      holderInfo.style.display = 'none';

      actionSec.innerHTML = `
        <div style="background-color:var(--lost-bg); padding:0.85rem; border-radius:var(--radius-md); border:1px solid var(--lost-border); margin-bottom:0.5rem;">
          <strong style="color:var(--lost-color); font-size:0.84rem;"><i class="fa-solid fa-phone"></i> Kontak Pelapor:</strong>
          <p style="font-size:0.88rem; font-weight:700; margin-top:0.2rem;">${this.escapeHtml(item.contact)}</p>
        </div>
        <div style="display:flex; gap:0.5rem; flex-wrap:wrap;">
          <a href="https://wa.me/${this.cleanPhoneForWa(item.contact)}" target="_blank" class="btn btn-primary" style="flex:1;">
            <i class="fa-brands fa-whatsapp"></i> Hubungi Pemilik di WA
          </a>
          <button class="btn btn-outline" onclick="app.markItemResolved('${item.id}')" title="Jika barang sudah ditemukan dan kembali ke pemilik">
            <i class="fa-solid fa-circle-check text-green"></i> Tandai Selesai
          </button>
        </div>
      `;
    } else if (item.status === 'found') {
      badgeEl.className = 'badge badge-found';
      badgeEl.innerHTML = '<i class="fa-solid fa-hand-holding-heart"></i> DITEMUKAN';

      if (item.holdingLocation) {
        holderInfo.style.display = 'flex';
        holderText.textContent = item.holdingLocation;
      } else {
        holderInfo.style.display = 'none';
      }

      actionSec.innerHTML = `
        <div style="background-color:var(--found-bg); padding:0.85rem; border-radius:var(--radius-md); border:1px solid var(--found-border); margin-bottom:0.5rem;">
          <strong style="color:var(--found-color); font-size:0.84rem;"><i class="fa-solid fa-box"></i> Lokasi Penyimpanan Saat Ini:</strong>
          <p style="font-size:0.88rem; font-weight:700; margin-top:0.2rem;">${this.escapeHtml(item.holdingLocation || 'Disimpan oleh penemu')}</p>
        </div>
        <div style="display:flex; gap:0.5rem; flex-wrap:wrap;">
          <button class="btn btn-primary" style="flex:1;" onclick="app.toggleClaimForm(true)">
            <i class="fa-solid fa-shield-halved"></i> Ini Barang Saya! (Ajukan Klaim)
          </button>
          <button class="btn btn-outline" onclick="app.markItemResolved('${item.id}')">
            <i class="fa-solid fa-circle-check text-green"></i> Selesai Dikembalikan
          </button>
        </div>
      `;
    } else {
      badgeEl.className = 'badge badge-resolved';
      badgeEl.innerHTML = '<i class="fa-solid fa-circle-check"></i> TELAH SELESAI / DIKEMBALIKAN';
      holderInfo.style.display = 'none';

      let claimInfoHtml = '';
      if (item.claims && item.claims.length > 0) {
        const lastClaim = item.claims[item.claims.length - 1];
        claimInfoHtml = `
          <div style="background-color:#f1f5f9; padding:0.85rem; border-radius:var(--radius-md); border:1px solid #cbd5e1; font-size:0.82rem; margin-top:0.5rem;">
            <strong>Riwayat Serah Terima:</strong> Telah diambil oleh <em>${this.escapeHtml(lastClaim.claimedBy)}</em> pada ${lastClaim.date}.
          </div>
        `;
      }

      actionSec.innerHTML = `
        <div style="background-color:#f8fafc; padding:0.85rem; border-radius:var(--radius-md); border:1px solid var(--border-light); text-align:center;">
          <p style="color:var(--text-muted); font-size:0.85rem;"><i class="fa-solid fa-lock"></i> Kasus barang ini telah ditutup karena telah berhasil dikembalikan ke pemiliknya.</p>
        </div>
        ${claimInfoHtml}
      `;
    }

    this.openModal('detailModalBackdrop');
  },

  toggleClaimForm(show) {
    const box = document.getElementById('claimFormBox');
    if (!box) return;
    box.style.display = show ? 'block' : 'none';
    if (show) {
      box.scrollIntoView({ behavior: 'smooth' });
    }
  },

  submitClaim(event) {
    event.preventDefault();

    if (!this.currentUser) {
      alert("Harap masuk dengan akun Google terlebih dahulu.");
      this.openGoogleLoginModal();
      return;
    }

    const proof = document.getElementById('claimProofInput').value.trim();
    const contact = document.getElementById('claimContactInput').value.trim();

    if (!proof || !contact) {
      alert("Harap isi bukti kepemilikan dan nomor kontak Anda.");
      return;
    }

    if (!this.activeDetailItem) return;

    // Catat klaim
    const claimRecord = {
      claimedBy: this.currentUser.name,
      proof: proof,
      contact: contact,
      date: new Date().toLocaleDateString('id-ID')
    };

    if (!this.activeDetailItem.claims) {
      this.activeDetailItem.claims = [];
    }
    this.activeDetailItem.claims.push(claimRecord);

    // Otomatis tandai sebagai selesai / proses serah terima
    this.activeDetailItem.status = 'resolved';
    this.saveItemsToStorage();

    // Broadcast update
    const resolvedNotif = {
      id: "notif-" + Date.now(),
      title: "Barang Berhasil Diklaim! 🎉",
      text: `${this.currentUser.name} telah mengajukan klaim untuk '${this.activeDetailItem.title}'.`,
      type: "resolved",
      itemId: this.activeDetailItem.id,
      time: "Baru saja",
      read: false
    };
    this.notifications.unshift(resolvedNotif);
    this.saveNotifsToStorage();

    this.closeModal('detailModalBackdrop');
    this.renderStats();
    this.renderFeed();
    this.renderNotifications();

    this.showToast("Pengajuan klaim Anda telah dicatat! Silakan hubungi penemu / guru piket untuk serah terima.", "success");
  },

  markItemResolved(itemId) {
    const item = this.items.find(i => i.id === itemId);
    if (!item) return;

    if (confirm(`Tandai barang '${item.title}' sebagai SELESAI (sudah kembali ke pemilik)?`)) {
      item.status = 'resolved';
      this.saveItemsToStorage();
      this.closeModal('detailModalBackdrop');
      this.renderStats();
      this.renderFeed();
      this.showToast(`Status '${item.title}' diubah menjadi Selesai.`, "success");
    }
  },

  // ================= 8. FILTER & PENCARIAN =================
  handleSearch(val) {
    this.searchQuery = val;
    const clearBtn = document.getElementById('clearSearchBtn');
    if (clearBtn) {
      clearBtn.style.display = val.length > 0 ? 'block' : 'none';
    }
    this.renderFeed();
  },

  clearSearch() {
    const input = document.getElementById('searchInput');
    if (input) input.value = '';
    this.searchQuery = '';
    document.getElementById('clearSearchBtn').style.display = 'none';
    this.renderFeed();
  },

  filterByStatus(status, element) {
    this.filterStatus = status;
    document.querySelectorAll('.tab-btn').forEach(btn => btn.classList.remove('active'));
    if (element) element.classList.add('active');
    this.renderFeed();
  },

  filterByCategory(category, element) {
    this.filterCategory = category;
    document.querySelectorAll('.chip-btn').forEach(chip => chip.classList.remove('active'));
    if (element) element.classList.add('active');
    this.renderFeed();
  },

  handleSort(order) {
    this.sortOrder = order;
    this.renderFeed();
  },

  resetFilters() {
    this.filterStatus = 'all';
    this.filterCategory = 'all';
    this.clearSearch();

    document.querySelectorAll('.tab-btn').forEach(btn => {
      btn.classList.toggle('active', btn.dataset.status === 'all');
    });
    document.querySelectorAll('.chip-btn').forEach(chip => {
      chip.classList.toggle('active', chip.dataset.category === 'all');
    });
    this.renderFeed();
  },

  // ================= 9. HELPER MODAL & TOAST =================
  openModal(modalId) {
    const modal = document.getElementById(modalId);
    if (modal) {
      modal.classList.add('active');
      document.body.style.overflow = 'hidden';
    }
  },

  closeModal(modalId) {
    const modal = document.getElementById(modalId);
    if (modal) {
      modal.classList.remove('active');
      document.body.style.overflow = '';
    }
  },

  showToast(messageHtml, type = 'info') {
    const container = document.getElementById('toastContainer');
    if (!container) return;

    const toast = document.createElement('div');
    toast.className = `toast toast-${type}`;
    
    let icon = '<i class="fa-solid fa-circle-info text-green"></i>';
    if (type === 'danger') icon = '<i class="fa-solid fa-triangle-exclamation" style="color:var(--lost-color);"></i>';
    if (type === 'success') icon = '<i class="fa-solid fa-circle-check" style="color:var(--found-color);"></i>';

    toast.innerHTML = `
      ${icon}
      <div class="toast-content">
        ${messageHtml}
      </div>
    `;

    container.appendChild(toast);

    setTimeout(() => {
      toast.style.opacity = '0';
      toast.style.transform = 'translateY(10px)';
      toast.style.transition = 'all 0.3s ease';
      setTimeout(() => toast.remove(), 300);
    }, 4500);
  },

  formatDate(dateStr) {
    if (!dateStr) return "-";
    try {
      const d = new Date(dateStr);
      return d.toLocaleDateString('id-ID', { day: 'numeric', month: 'short', year: 'numeric' });
    } catch (e) {
      return dateStr;
    }
  },

  cleanPhoneForWa(phoneStr) {
    if (!phoneStr) return "";
    let clean = phoneStr.replace(/\D/g, '');
    if (clean.startsWith('0')) {
      clean = '62' + clean.slice(1);
    }
    return clean;
  },

  escapeHtml(str) {
    if (!str) return "";
    return String(str)
      .replace(/&/g, "&amp;")
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;")
      .replace(/"/g, "&quot;")
      .replace(/'/g, "&#039;");
  }
};

// Pasang Listener Modal saat klik di luar area card
window.addEventListener('click', (e) => {
  if (e.target.classList.contains('modal-backdrop')) {
    e.target.classList.remove('active');
    document.body.style.overflow = '';
  }
});

// Jalankan aplikasi saat seluruh DOM selesai dibaca
document.addEventListener('DOMContentLoaded', () => {
  app.init();
});
