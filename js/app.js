/* ============================================================
   SISKOM — Interactive Computer System Learning Media
   ============================================================ */

/* ---------- Template video simulasi ----------
   Isi dengan path file video Anda, misalnya:
   const SIM_VIDEO_SRC = 'video/simulasi-sistem-komputer.mp4';
   Biarkan kosong ('') sampai file video tersedia. */
const SIM_VIDEO_SRC = '';

/* ---------- SVG Icon library ---------- */
const iconPaths = {
  motherboard: '<rect x="2" y="3" width="20" height="18" rx="2"/><rect x="6" y="7" width="6" height="6" rx="1"/><path d="M15 7h4M15 10h4M15 13h4M6 16h12"/>',
  cpu: '<rect x="5" y="5" width="14" height="14" rx="2"/><rect x="9" y="9" width="6" height="6"/><path d="M9 2v3M15 2v3M9 19v3M15 19v3M2 9h3M2 15h3M19 9h3M19 15h3"/>',
  ram: '<rect x="2" y="7" width="20" height="10" rx="2"/><path d="M6 17v2M18 17v2M6 10h3v4H6zM11 10h3v4h-3zM16 10h3v4h-3z"/>',
  storage: '<rect x="3" y="4" width="18" height="16" rx="2"/><path d="M3 10h18M7 7h.01M11 7h.01"/><circle cx="12" cy="15" r="2"/>',
  gpu: '<rect x="2" y="6" width="20" height="12" rx="2"/><circle cx="8" cy="12" r="3"/><circle cx="16" cy="12" r="3"/><path d="M18 18v2M6 18v2"/>',
  psu: '<rect x="4" y="4" width="16" height="16" rx="2"/><circle cx="10" cy="11" r="3"/><path d="M17 8v3M20 8v3M14 17h6"/>',
  keyboard: '<rect x="2" y="5" width="20" height="14" rx="2"/><path d="M6 9h.01M10 9h.01M14 9h.01M18 9h.01M6 13h.01M10 13h.01M14 13h.01M18 13h.01M8 16h8"/>',
  mouse: '<rect x="6" y="2" width="12" height="20" rx="6"/><path d="M12 2v7"/>',
  monitor: '<rect x="2" y="3" width="20" height="14" rx="2"/><path d="M8 21h8M12 17v4"/>',
  printer: '<path d="M6 9V3h12v6M6 18H4a2 2 0 0 1-2-2v-5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v5a2 2 0 0 1-2 2h-2"/><rect x="6" y="14" width="12" height="7" rx="1"/>',
  speaker: '<rect x="5" y="2" width="14" height="20" rx="2"/><circle cx="12" cy="15" r="4"/><circle cx="12" cy="7" r="1"/>',
  webcam: '<circle cx="12" cy="11" r="7"/><circle cx="12" cy="11" r="3"/><path d="M9 20h6M12 18v2"/>',
  fan: '<circle cx="12" cy="12" r="9"/><circle cx="12" cy="12" r="2.5"/><path d="M12 9.5c1.5-2.5 4-3.5 5-2 1 1.5 0 4-2.5 4M14.5 12c2.5 1.5 3.5 4 2 5-1.5 1-4 0-4-2.5M12 14.5c-1.5 2.5-4 3.5-5 2-1-1.5 0-4 2.5-4M9.5 12c-2.5-1.5-3.5-4-2-5 1.5-1 4 0 4 2.5"/>'
};

function icon(name) {
  return `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round">${iconPaths[name] || iconPaths.cpu}</svg>`;
}

/* ---------- Component data ---------- */
const components = [
  {
    id: 'cpu', name: 'CPU (Prosesor)', cat: 'proses', catLabel: 'Proses & Kontrol', icon: 'cpu',
    desc: 'Central Processing Unit — otak komputer yang menjalankan seluruh instruksi dan perhitungan.',
    fungsi: 'Menjalankan instruksi program, melakukan operasi aritmetika dan logika, serta mengendalikan jalannya seluruh sistem komputer.',
    fakta: 'Kecepatan CPU diukur dalam GHz (miliar siklus per detik). Prosesor modern memiliki beberapa inti (core) agar bisa mengerjakan banyak tugas sekaligus.',
    ipos: 'CPU adalah pusat tahap PROSES. Ia mengambil data dari input, mengolahnya, lalu menentukan hasil yang akan dikirim ke penyimpanan atau output.'
  },
  {
    id: 'motherboard', name: 'Motherboard', cat: 'proses', catLabel: 'Proses & Kontrol', icon: 'motherboard',
    desc: 'Papan sirkuit utama yang menjadi "rumah" dan penghubung seluruh komponen komputer.',
    fungsi: 'Menyediakan soket dan jalur (bus) agar CPU, RAM, kartu grafis, dan perangkat lainnya dapat saling terhubung dan berkomunikasi.',
    fakta: 'Motherboard juga memiliki chipset yang mengatur lalu lintas data antara CPU dengan komponen lain, seperti jalan raya di dalam komputer.',
    ipos: 'Motherboard menjadi "jaringan jalan" tempat data bergerak dari input menuju CPU, memori, dan output.'
  },
  {
    id: 'ram', name: 'RAM', cat: 'penyimpanan', catLabel: 'Penyimpanan', icon: 'ram',
    desc: 'Random Access Memory — memori sementara tempat data yang sedang digunakan disimpan.',
    fungsi: 'Menyimpan program dan data yang sedang diproses CPU agar dapat diakses dengan sangat cepat. Semakin besar RAM, semakin banyak aplikasi yang bisa dibuka bersamaan.',
    fakta: 'RAM bersifat volatil: isinya akan hilang ketika komputer dimatikan. Itulah sebabnya pekerjaan yang belum disimpan akan hilang saat listrik padam.',
    ipos: 'RAM berperan sebagai meja kerja sementara pada tahap PROSES, menampung data sebelum disimpan permanen atau ditampilkan.'
  },
  {
    id: 'storage', name: 'Storage (SSD/HDD)', cat: 'penyimpanan', catLabel: 'Penyimpanan', icon: 'storage',
    desc: 'Penyimpanan permanen tempat sistem operasi, program, dan file disimpan.',
    fungsi: 'Menyimpan data secara permanen, termasuk sistem operasi, aplikasi, dokumen, foto, dan video meskipun komputer sudah dimatikan.',
    fakta: 'SSD (Solid State Drive) menggunakan memori flash sehingga jauh lebih cepat dan tahan guncangan dibanding HDD (Hard Disk Drive) yang berputar seperti piringan.',
    ipos: 'Storage adalah tahap PENYIMPANAN. Data dari RAM ditulis ke sini agar tetap tersedia untuk digunakan kembali di kemudian hari.'
  },
  {
    id: 'gpu', name: 'Kartu Grafis (GPU)', cat: 'proses', catLabel: 'Proses & Kontrol', icon: 'gpu',
    desc: 'Komponen khusus yang memproses dan menghasilkan tampilan grafis di layar.',
    fungsi: 'Mengubah data menjadi gambar, warna, dan animasi yang ditampilkan ke monitor. Sangat penting untuk game, desain, dan pengolahan video.',
    fakta: 'GPU memiliki ribuan inti kecil yang bekerja paralel, jauh lebih banyak daripada CPU, sehingga sangat cepat untuk perhitungan grafis.',
    ipos: 'GPU menyiapkan hasil olahan CPU menjadi bentuk visual sebelum dikirim ke perangkat OUTPUT (monitor).'
  },
  {
    id: 'psu', name: 'Catu Daya (PSU)', cat: 'proses', catLabel: 'Proses & Kontrol', icon: 'psu',
    desc: 'Power Supply Unit yang menyuplai listrik ke seluruh komponen di dalam casing.',
    fungsi: 'Mengubah arus listrik AC dari stopkontak menjadi arus DC (tegangan rendah) yang dibutuhkan motherboard, CPU, dan komponen lainnya.',
    fakta: 'Daya PSU diukur dalam Watt. PSU dengan daya yang terlalu kecil bisa membuat komputer mati mendadak saat bekerja berat.',
    ipos: 'PSU bukan pengolah data, tetapi tanpa suplai listriknya, seluruh alur INPUT → PROSES → OUTPUT tidak akan berjalan.'
  },
  {
    id: 'keyboard', name: 'Keyboard', cat: 'input', catLabel: 'Perangkat Input', icon: 'keyboard',
    desc: 'Perangkat input utama untuk memasukkan teks, angka, dan perintah ke komputer.',
    fungsi: 'Menerjemahkan setiap penekanan tombol menjadi kode biner yang dikirim ke CPU sebagai instruksi atau data.',
    fakta: 'Tombol pada keyboard memiliki sakelar di bawahnya. Saat ditekan, sakelar menutup rangkaian dan chip pengontrol mengirim kode ke komputer.',
    ipos: 'Keyboard adalah contoh perangkat INPUT — titik awal masuknya data ke dalam sistem komputer.'
  },
  {
    id: 'mouse', name: 'Mouse', cat: 'input', catLabel: 'Perangkat Input', icon: 'mouse',
    desc: 'Perangkat penunjuk yang menggerakkan kursor di layar.',
    fungsi: 'Mendeteksi pergerakan dan klik untuk memberikan perintah seperti memilih, membuka, atau menggeser objek di layar.',
    fakta: 'Mouse optik menggunakan sensor kecil yang memotret permukaan ribuan kali per detik untuk mendeteksi arah gerakan.',
    ipos: 'Mouse termasuk INPUT: mengubah gerakan fisik tangan menjadi sinyal digital yang dipahami komputer.'
  },
  {
    id: 'webcam', name: 'Webcam & Mikrofon', cat: 'input', catLabel: 'Perangkat Input', icon: 'webcam',
    desc: 'Perangkat untuk memasukkan gambar/video dan suara ke dalam komputer.',
    fungsi: 'Menangkap citra dan suara lalu mengubahnya menjadi data digital agar bisa diproses, disimpan, atau dikirim melalui aplikasi.',
    fakta: 'Kamera digital merekam gambar sebagai jutaan titik (piksel), sedangkan mikrofon mengubah gelombang suara menjadi sinyal listrik.',
    ipos: 'Webcam dan mikrofon adalah INPUT yang menyuplai data multimedia ke sistem untuk diproses lebih lanjut.'
  },
  {
    id: 'monitor', name: 'Monitor', cat: 'output', catLabel: 'Perangkat Output', icon: 'monitor',
    desc: 'Layar yang menampilkan hasil proses komputer dalam bentuk visual.',
    fungsi: 'Menampilkan teks, gambar, dan video hasil olahan komputer agar bisa dilihat pengguna secara langsung.',
    fakta: 'Gambar di monitor tersusun dari jutaan piksel. Kerapatan piksel disebut resolusi, misalnya 1920 × 1080 (Full HD).',
    ipos: 'Monitor adalah perangkat OUTPUT — tahap akhir ketika hasil proses ditampilkan kepada pengguna.'
  },
  {
    id: 'printer', name: 'Printer', cat: 'output', catLabel: 'Perangkat Output', icon: 'printer',
    desc: 'Perangkat yang mencetak data digital ke atas kertas.',
    fungsi: 'Menghasilkan salinan fisik (hard copy) dari dokumen atau gambar yang ada di komputer.',
    fakta: 'Printer inkjet menyemprotkan tinta mikro ke kertas, sedangkan printer laser menggunakan toner dan panas seperti mesin fotokopi.',
    ipos: 'Printer termasuk OUTPUT: mengubah hasil digital menjadi bentuk fisik yang bisa dipegang.'
  },
  {
    id: 'speaker', name: 'Speaker', cat: 'output', catLabel: 'Perangkat Output', icon: 'speaker',
    desc: 'Perangkat yang menghasilkan suara dari sinyal digital komputer.',
    fungsi: 'Mengubah sinyal listrik menjadi gelombang suara sehingga pengguna bisa mendengar musik, notifikasi, atau suara dari video.',
    fakta: 'Kartu suara mengubah data digital menjadi sinyal analog sebelum dikirim ke speaker agar terdengar oleh telinga manusia.',
    ipos: 'Speaker adalah OUTPUT yang menyajikan hasil proses dalam bentuk audio.'
  }
];

const catColors = {
  input: '#4ade80', proses: '#38bdf8', penyimpanan: '#fbbf24', output: '#fb923c'
};

/* ---------- Utility helpers ---------- */
const $ = (sel) => document.querySelector(sel);
const $$ = (sel) => Array.from(document.querySelectorAll(sel));
const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms));
const shuffle = (arr) => {
  const a = [...arr];
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
};

let toastTimer;
function showToast(msg) {
  const toast = $('#toast');
  toast.textContent = msg;
  toast.classList.add('show');
  clearTimeout(toastTimer);
  toastTimer = setTimeout(() => toast.classList.remove('show'), 2500);
}

/* ---------- Navbar & reveal ---------- */
function initNavbar() {
  const navbar = $('#navbar');
  const toggle = $('#navToggle');
  const links = $('#navLinks');

  window.addEventListener('scroll', () => {
    navbar.classList.toggle('scrolled', window.scrollY > 20);
  });

  toggle.addEventListener('click', () => {
    toggle.classList.toggle('active');
    links.classList.toggle('open');
  });
  $$('.nav-link').forEach((link) => {
    link.addEventListener('click', () => {
      toggle.classList.remove('active');
      links.classList.remove('open');
    });
  });

  const sections = ['beranda', 'penjelasan', 'simulasi', 'game'];
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        $$('.nav-link').forEach((l) => l.classList.toggle('active', l.getAttribute('href') === `#${entry.target.id}`));
      }
    });
  }, { rootMargin: '-40% 0px -55% 0px' });
  sections.forEach((id) => {
    const el = document.getElementById(id);
    if (el) observer.observe(el);
  });

  const revealObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        revealObserver.unobserve(entry.target);
      }
    });
  }, { threshold: 0.08 });
  $$('[data-reveal]').forEach((el) => revealObserver.observe(el));
}

/* ---------- Component cards + filter + modal ---------- */
function initComponents() {
  const grid = $('#componentGrid');
  grid.innerHTML = components.map((c) => `
    <button class="comp-card" data-cat="${c.cat}" data-id="${c.id}">
      <span class="comp-arrow"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M7 17L17 7M8 7h9v9"/></svg></span>
      <div class="comp-icon">${icon(c.icon)}</div>
      <h3>${c.name}</h3>
      <p>${c.desc}</p>
      <span class="comp-cat" style="color:${catColors[c.cat]}">${c.catLabel}</span>
    </button>
  `).join('');

  // Filter
  $$('.filter-btn').forEach((btn) => {
    btn.addEventListener('click', () => {
      $$('.filter-btn').forEach((b) => b.classList.remove('active'));
      btn.classList.add('active');
      const filter = btn.dataset.filter;
      $$('.comp-card').forEach((card) => {
        card.classList.toggle('hidden', filter !== 'semua' && card.dataset.cat !== filter);
      });
    });
  });

  // Open modal
  $$('.comp-card').forEach((card) => {
    card.addEventListener('click', () => {
      const c = components.find((x) => x.id === card.dataset.id);
      if (!c) return;
      $('#modalIcon').innerHTML = icon(c.icon);
      $('#modalIcon').style.color = catColors[c.cat];
      $('#modalBadge').textContent = c.catLabel;
      $('#modalBadge').style.color = catColors[c.cat];
      $('#modalTitle').textContent = c.name;
      $('#modalDesc').textContent = c.desc;
      $('#modalFungsi').textContent = c.fungsi;
      $('#modalFakta').textContent = c.fakta;
      $('#modalIpos').textContent = c.ipos;
      $('#modal').classList.add('open');
      $('#modal').setAttribute('aria-hidden', 'false');
      document.body.style.overflow = 'hidden';
    });
  });

  // Close modal
  function closeModal() {
    $('#modal').classList.remove('open');
    $('#modal').setAttribute('aria-hidden', 'true');
    document.body.style.overflow = '';
  }
  $$('[data-close]').forEach((el) => el.addEventListener('click', closeModal));
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && $('#modal').classList.contains('open')) closeModal();
  });
}

/* ---------- Simulation video template ---------- */
function initSimulationVideo() {
  const video = $('#simVideo');
  const placeholder = $('#simVideoPlaceholder');
  if (!video || !placeholder) return;

  function showVideo() {
    video.style.display = 'block';
    placeholder.style.display = 'none';
  }

  if (!SIM_VIDEO_SRC) {
    video.style.display = 'none';
    return;
  }

  const source = document.createElement('source');
  source.src = SIM_VIDEO_SRC;
  source.type = 'video/mp4';
  video.appendChild(source);
  video.load();
  video.addEventListener('loadedmetadata', showVideo);
  video.addEventListener('canplay', showVideo);
  placeholder.addEventListener('click', () => video.play().catch(() => {}));
  video.addEventListener('error', () => {
    placeholder.style.display = '';
    placeholder.querySelector('p').textContent = 'Video belum bisa dimuat. Periksa kembali path file video.';
  });
}

/* ---------- Motherboard explorer ---------- */
const mbParts = {
  cpu: { name: 'Prosesor (CPU)', desc: 'Dipasang pada soket CPU. Berfungsi sebagai otak yang menjalankan semua instruksi dan perhitungan komputer.', icon: 'cpu' },
  ram: { name: 'Slot RAM', desc: 'Tempat memasang modul memori RAM. Panjangnya biasanya vertikal dan bersebelahan dengan CPU agar aksesnya cepat.', icon: 'ram' },
  gpu: { name: 'Slot GPU / PCIe', desc: 'Slot ekspansi untuk kartu grafis. GPU mengolah data menjadi gambar yang ditampilkan ke monitor.', icon: 'gpu' },
  storage: { name: 'Penyimpanan (SSD)', desc: 'Area untuk modul SSD (M.2/SATA) tempat sistem operasi dan file disimpan secara permanen.', icon: 'storage' },
  chipset: { name: 'Chipset', desc: 'Mengatur komunikasi dan lalu lintas data antara CPU, RAM, GPU, dan perangkat lainnya di motherboard.', icon: 'motherboard' },
  psu: { name: 'Konektor Catu Daya', desc: 'Tempat coloknya kabel PSU yang menyuplai listrik ke motherboard dan seluruh komponen.', icon: 'psu' }
};

function initMotherboard() {
  const tray = $('#mbTray');
  const feedback = $('#mbFeedback');
  const detailIcon = $('#mbDetailIcon');
  const detailTitle = $('#mbDetailTitle');
  const detailDesc = $('#mbDetailDesc');
  let selectedTile = null;
  let score = 0;

  function setFeedback(msg, type = '') {
    feedback.textContent = msg;
    feedback.className = `mb-feedback ${type}`;
  }

  function showDetail(id) {
    const part = mbParts[id];
    if (!part) return;
    detailIcon.innerHTML = icon(part.icon);
    detailTitle.textContent = part.name;
    detailDesc.textContent = part.desc;
  }

  function selectTile(tile) {
    if (tile.classList.contains('placed')) return;
    $$('.mb-tile.selected').forEach((t) => t.classList.remove('selected'));
    tile.classList.add('selected');
    selectedTile = tile;
    showDetail(tile.dataset.part);
    setFeedback(`"${mbParts[tile.dataset.part].name}" dipilih. Seret ke posisinya atau ketuk posisi di papan.`);
  }

  function tryPlace(tile, slot) {
    if (!tile || !slot || slot.classList.contains('filled')) {
      setFeedback('Posisi itu sudah terisi, pilih posisi lain.', 'error');
      return;
    }
    if (slot.dataset.slot === tile.dataset.part) {
      slot.classList.remove('over', 'wrong');
      slot.classList.add('filled');
      tile.classList.remove('selected');
      tile.classList.add('placed');
      tile.style.opacity = '';
      slot.appendChild(tile);
      tile.classList.add('land');
      setTimeout(() => tile.classList.remove('land'), 420);
      selectedTile = null;
      score++;
      $('#mbScore').textContent = score;
      showDetail(tile.dataset.part);
      setFeedback(`Benar! ${mbParts[tile.dataset.part].name} berada di posisi yang tepat.`, 'success');
      if (score === 6) {
        setFeedback('Selesai! Keenam komponen berhasil dirakit di motherboard.', 'success');
        tray.innerHTML = '<div class="mb-tray-done">Semua komponen terpasang</div>';
        showToast('Tata letak motherboard berhasil dirakit!');
      }
    } else {
      slot.classList.add('wrong');
      setTimeout(() => slot.classList.remove('wrong'), 450);
      setFeedback(`Belum tepat. ${mbParts[tile.dataset.part].name} tidak berada di posisi ini.`, 'error');
    }
  }

  function bindTile(tile) {
    tile.addEventListener('click', () => selectTile(tile));
    tile.addEventListener('pointerdown', (e) => {
      if (tile.classList.contains('placed')) return;
      e.preventDefault();
      selectTile(tile);

      const startX = e.clientX;
      const startY = e.clientY;
      let ghost = null;
      let moved = false;
      let targetX = startX;
      let targetY = startY;
      let currentX = startX;
      let currentY = startY;
      let rafId = null;

      // Ghost mengikuti pointer dengan easing halus (bukan loncat-loncat)
      function followPointer() {
        currentX += (targetX - currentX) * 0.32;
        currentY += (targetY - currentY) * 0.32;
        const tilt = Math.max(-5, Math.min(5, (targetX - currentX) * 0.12));
        ghost.style.transform = `translate(${currentX}px, ${currentY}px) translate(-50%, -50%) scale(1.06) rotate(${tilt}deg)`;
        rafId = requestAnimationFrame(followPointer);
      }

      function move(ev) {
        if (!moved && Math.hypot(ev.clientX - startX, ev.clientY - startY) < 6) return;
        if (!ghost) {
          moved = true;
          ghost = tile.cloneNode(true);
          ghost.classList.add('drag-ghost');
          ghost.style.width = `${tile.offsetWidth}px`;
          ghost.style.transform = `translate(${startX}px, ${startY}px) translate(-50%, -50%) scale(1.06)`;
          document.body.appendChild(ghost);
          tile.style.opacity = '0.35';
          requestAnimationFrame(() => { ghost.style.opacity = '1'; });
          rafId = requestAnimationFrame(followPointer);
        }
        targetX = ev.clientX;
        targetY = ev.clientY;
        $$('.mb-slot').forEach((s) => s.classList.remove('over'));
        const under = document.elementFromPoint(ev.clientX, ev.clientY);
        const slot = under && under.closest('.mb-slot');
        if (slot && !slot.classList.contains('filled')) slot.classList.add('over');
      }

      function up(ev) {
        window.removeEventListener('pointermove', move);
        window.removeEventListener('pointerup', up);
        window.removeEventListener('pointercancel', up);
        if (!ghost) return;
        if (rafId) cancelAnimationFrame(rafId);

        const under = document.elementFromPoint(ev.clientX, ev.clientY);
        const slot = under && under.closest('.mb-slot');
        const isCorrect = slot && !slot.classList.contains('filled') && slot.dataset.slot === tile.dataset.part;
        const destRect = isCorrect ? slot.getBoundingClientRect() : tile.getBoundingClientRect();
        const destX = destRect.left + destRect.width / 2;
        const destY = destRect.top + destRect.height / 2;

        // Animasi snap ke slot, atau kembali ke kotak jika salah
        ghost.style.transition = 'transform 0.34s cubic-bezier(.2,.85,.25,1), opacity 0.3s ease';
        ghost.style.transform = `translate(${destX}px, ${destY}px) translate(-50%, -50%) scale(${isCorrect ? 0.92 : 1}) rotate(0deg)`;
        if (!isCorrect) ghost.style.opacity = '0';
        $$('.mb-slot').forEach((s) => s.classList.remove('over'));

        setTimeout(() => {
          ghost.remove();
          tile.style.opacity = '';
          if (isCorrect) {
            tryPlace(tile, slot);
          } else if (slot) {
            tryPlace(tile, slot);
          } else {
            setFeedback('Lepaskan komponen tepat di atas posisinya.');
          }
        }, 340);
      }

      window.addEventListener('pointermove', move);
      window.addEventListener('pointerup', up);
      window.addEventListener('pointercancel', up);
    });
  }

  function renderTray() {
    tray.innerHTML = shuffle(Object.keys(mbParts)).map((id) => {
      const p = mbParts[id];
      return `<button type="button" class="mb-tile" data-part="${id}">${icon(p.icon)}<span>${p.name}</span></button>`;
    }).join('');
    $$('.mb-tile').forEach(bindTile);
  }

  function reset() {
    score = 0;
    selectedTile = null;
    $('#mbScore').textContent = '0';
    $$('.mb-slot').forEach((slot) => {
      slot.classList.remove('filled', 'over', 'wrong');
      slot.innerHTML = `<span class="slot-num">${slot.dataset.num}</span>`;
    });
    renderTray();
    detailIcon.innerHTML = '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><circle cx="12" cy="12" r="9"/><path d="M12 8v.01M12 12v4"/></svg>';
    detailTitle.textContent = 'Pilih Komponen';
    detailDesc.textContent = 'Seret komponen dari kotak ke posisi yang tepat, atau ketuk komponen lalu ketuk posisinya.';
    setFeedback('');
  }

  $$('.mb-slot').forEach((slot) => {
    slot.addEventListener('click', () => {
      if (selectedTile && !selectedTile.classList.contains('placed')) {
        tryPlace(selectedTile, slot);
      } else {
        showDetail(slot.dataset.slot);
      }
    });
  });

  $('#mbReset').addEventListener('click', reset);
  reset();
}

/* ---------- Simulasi pemasangan motherboard ---------- */
const installData = [
  {
    title: 'Persiapan & Keselamatan', part: null,
    desc: 'Matikan komputer, cabut kabel listrik, dan gunakan gelang anti-statis sebelum menyentuh komponen.',
    tip: 'Listrik statis bisa merusak komponen. Sentuh bagian logam casing untuk melepaskan muatan dari tubuh.'
  },
  {
    title: 'Pasang Prosesor (CPU)', part: 'cpu',
    desc: 'Sejajarkan tanda segitiga kecil pada CPU dengan tanda di soket, lalu turunkan perlahan tanpa menekan.',
    tip: 'Jangan pernah menyentuh pin atau kontak logam CPU — pin sangat mudah bengkok.'
  },
  {
    title: 'Pasang Pendingin (Heatsink)', part: 'cooler',
    desc: 'Oleskan thermal paste setipis kertas, lalu pasang heatsink dan kunci kipas pada bracket pendingin.',
    tip: 'Pendingin menjaga suhu CPU tetap aman saat komputer digunakan.'
  },
  {
    title: 'Pasang Memori (RAM)', part: 'ram',
    desc: 'Buka kunci soket, masukkan modul RAM sampai sejajar, lalu tekan hingga terdengar bunyi "klik" di kedua sisi.',
    tip: 'Perhatikan takikan pada RAM agar cocok dengan soketnya.'
  },
  {
    title: 'Pasang Penyimpanan (SSD)', part: 'storage',
    desc: 'Masukkan modul SSD M.2 ke slot secara miring, lalu tekan dan kencangkan dengan sekrup kecil.',
    tip: 'SSD lebih cepat dan tahan guncangan dibandingkan HDD.'
  },
  {
    title: 'Pasang Kartu Grafis (GPU)', part: 'gpu',
    desc: 'Tekan tombol kunci slot PCIe, masukkan kartu grafis sampai klik, lalu kencangkan bracket ke casing.',
    tip: 'Pastikan kartu masuk penuh agar koneksi PCIe tidak longgar.'
  },
  {
    title: 'Sambung Kabel & Selesai', part: 'cables',
    desc: 'Pasang motherboard ke casing dengan standoff, lalu sambungkan kabel PSU, kabel data, dan kabel front panel.',
    tip: 'Cek kembali semua koneksi sebelum menyalakan komputer.'
  }
];

const installPartsData = {
  cpu: { label: 'CPU', icon: 'cpu', style: '--x:47%;--y:33%;--w:20%;--h:26%' },
  cooler: { label: 'Pendingin', icon: 'fan', style: '--x:47%;--y:33%;--w:27%;--h:32%' },
  ram: { label: 'RAM', icon: 'ram', style: '--x:80%;--y:32%;--w:9%;--h:40%' },
  storage: { label: 'SSD', icon: 'storage', style: '--x:76%;--y:76%;--w:18%;--h:15%' },
  gpu: { label: 'GPU', icon: 'gpu', style: '--x:25%;--y:70%;--w:36%;--h:11%' },
  cables: { label: 'Kabel', icon: 'psu', style: '--x:10%;--y:50%;--w:12%;--h:22%' }
};

let installToken = 0;
let installRunning = false;
let installCurrent = -1;

function initInstallSim() {
  const stepsEl = $('#installSteps');
  const board = $('#installBoard');
  const startBtn = $('#installStart');

  stepsEl.innerHTML = installData.map((s, i) => `
    <button class="install-step" data-step="${i}">
      <span class="step-dot">${i + 1}</span>
      <strong>${s.title}</strong>
    </button>
  `).join('');

  board.insertAdjacentHTML('beforeend', Object.entries(installPartsData).map(([id, p]) => `
    <div class="install-part" data-part="${id}" style="${p.style}">
      ${icon(p.icon)}<span>${p.label}</span>
    </div>
  `).join(''));

  function setStatus(text, cls = '') {
    $('#installDot').className = `status-dot ${cls}`;
    $('#installStatus').textContent = text;
  }

  function applyStep(index, animate = true) {
    installCurrent = index;
    $$('.install-step').forEach((el, i) => {
      el.classList.toggle('active', i === index);
      el.classList.toggle('done', i < index);
    });
    const installedUpTo = installData.slice(0, index + 1).map((s) => s.part);
    $$('.install-part').forEach((p) => {
      const shouldInstall = installedUpTo.includes(p.dataset.part);
      if (shouldInstall && !p.classList.contains('installed')) {
        p.classList.add('installed');
        if (animate) {
          p.classList.add('pop');
          setTimeout(() => p.classList.remove('pop'), 600);
        }
      } else if (!shouldInstall) {
        p.classList.remove('installed', 'pop');
      }
    });
    $('.install-case').classList.toggle('installed', index === installData.length - 1);

    if (index < 0) {
      $('#installNum').textContent = `0 / ${installData.length}`;
      $('#installTitle').textContent = 'Siap Memulai';
      $('#installDesc').textContent = 'Tekan "Mulai" untuk melihat proses pemasangan komponen secara berurutan.';
      $('#installTip').textContent = '';
      $('#installProgress').style.width = '0%';
      return;
    }
    const s = installData[index];
    $('#installNum').textContent = `${index + 1} / ${installData.length}`;
    $('#installTitle').textContent = s.title;
    $('#installDesc').textContent = s.desc;
    $('#installTip').textContent = s.tip;
    $('#installProgress').style.width = `${((index + 1) / installData.length) * 100}%`;
  }

  function pause() {
    installToken++;
    installRunning = false;
    startBtn.disabled = false;
    startBtn.textContent = '▶ Mulai';
  }

  function showIntro() {
    applyStep(-1, false);
    setStatus('Siap memulai pemasangan');
  }

  async function start() {
    if (installRunning) return;
    if (installCurrent >= installData.length - 1) showIntro();
    installRunning = true;
    const myToken = ++installToken;
    startBtn.disabled = true;
    startBtn.textContent = 'Berjalan...';
    setStatus('Pemasangan berjalan...', 'running');

    for (let i = 0; i < installData.length; i++) {
      if (myToken !== installToken) return;
      applyStep(i);
      await delay(Number($('#installSpeed').value));
    }
    if (myToken !== installToken) return;
    installRunning = false;
    startBtn.disabled = false;
    startBtn.textContent = '▶ Ulangi';
    setStatus('Pemasangan selesai!', 'done');
    showToast('Pemasangan motherboard selesai. Semua komponen terpasang dengan benar!');
  }

  function next() {
    pause();
    if (installCurrent >= installData.length - 1) {
      setStatus('Pemasangan selesai!', 'done');
      showToast('Pemasangan motherboard selesai!');
      return;
    }
    applyStep(installCurrent + 1);
    const done = installCurrent === installData.length - 1;
    setStatus(done ? 'Pemasangan selesai!' : `Langkah ${installCurrent + 1} selesai`, done ? 'done' : '');
    if (done) showToast('Pemasangan motherboard selesai!');
  }

  function reset() {
    pause();
    showIntro();
  }

  startBtn.addEventListener('click', start);
  $('#installNext').addEventListener('click', next);
  $('#installReset').addEventListener('click', reset);
  $$('.install-step').forEach((el) => {
    el.addEventListener('click', () => {
      pause();
      const i = Number(el.dataset.step);
      applyStep(i);
      const done = i === installData.length - 1;
      setStatus(done ? 'Pemasangan selesai!' : `Langkah ${i + 1} dipilih`, done ? 'done' : '');
    });
  });

  showIntro();
}

/* ---------- Game tabs ---------- */
function initGameTabs() {
  $$('.game-tab').forEach((tab) => {
    tab.addEventListener('click', () => {
      $$('.game-tab').forEach((t) => t.classList.remove('active'));
      $$('.game-panel').forEach((p) => p.classList.remove('active'));
      tab.classList.add('active');
      $(`#game-${tab.dataset.game}`).classList.add('active');
      if (tab.dataset.game === 'cocok' && cocokSeconds === 0) startCocokTimer();
    });
  });
}

/* ---------- Quiz ---------- */
const quizData = [
  {
    q: 'Komponen yang berperan sebagai "otak" komputer adalah ...',
    options: ['Motherboard', 'CPU (Prosesor)', 'RAM', 'Power Supply'],
    answer: 1,
    explain: 'CPU (Central Processing Unit) disebut otak komputer karena menjalankan instruksi dan melakukan seluruh perhitungan.'
  },
  {
    q: 'Berikut ini yang merupakan perangkat INPUT adalah ...',
    options: ['Monitor', 'Printer', 'Keyboard', 'Speaker'],
    answer: 2,
    explain: 'Keyboard memasukkan data ke komputer. Monitor, printer, dan speaker justru adalah perangkat output.'
  },
  {
    q: 'Memori yang bersifat volatil (hilang saat listrik mati) adalah ...',
    options: ['SSD', 'HDD', 'RAM', 'Flashdisk'],
    answer: 2,
    explain: 'RAM menyimpan data sementara dan akan hilang ketika komputer dimatikan, berbeda dengan penyimpanan permanen.'
  },
  {
    q: 'Apa fungsi utama Catu Daya (PSU)?',
    options: ['Menyimpan file permanen', 'Mengubah listrik AC menjadi DC untuk komponen', 'Menampilkan gambar di layar', 'Memproses grafis 3D'],
    answer: 1,
    explain: 'PSU mengubah arus AC dari stopkontak menjadi DC tegangan rendah yang dibutuhkan seluruh komponen komputer.'
  },
  {
    q: 'Perangkat yang digunakan untuk menampilkan hasil proses disebut ...',
    options: ['Input', 'Proses', 'Output', 'Penyimpanan'],
    answer: 2,
    explain: 'Output adalah tahap ketika hasil proses ditampilkan, misalnya lewat monitor, printer, atau speaker.'
  },
  {
    q: 'Bilangan biner 1010 sama dengan bilangan desimal ...',
    options: ['8', '10', '12', '16'],
    answer: 1,
    explain: '1010₂ = (1×8) + (0×4) + (1×2) + (0×1) = 10₁₀.'
  },
  {
    q: 'Dalam sistem heksadesimal, huruf "F" bernilai ...',
    options: ['10', '12', '15', '16'],
    answer: 2,
    explain: 'Heksadesimal memakai 0–9 lalu A=10, B=11, C=12, D=13, E=14, F=15.'
  },
  {
    q: 'Komponen yang menghubungkan semua perangkat di dalam komputer adalah ...',
    options: ['Motherboard', 'Monitor', 'Keyboard', 'Speaker'],
    answer: 0,
    explain: 'Motherboard menyediakan soket dan jalur bus yang menghubungkan CPU, RAM, GPU, dan perangkat lainnya.'
  },
  {
    q: 'Berikut yang termasuk perangkat penyimpanan permanen adalah ...',
    options: ['RAM', 'Cache CPU', 'SSD', 'Register'],
    answer: 2,
    explain: 'SSD (Solid State Drive) menyimpan data tetap meski komputer dimatikan. RAM, cache, dan register bersifat sementara.'
  },
  {
    q: 'Urutan alur kerja data yang benar pada sistem komputer adalah ...',
    options: ['Output → Proses → Input', 'Input → Proses → Output', 'Proses → Input → Output', 'Input → Output → Proses'],
    answer: 1,
    explain: 'Alur IPO: Input (data masuk) → Proses (diolah CPU) → Output (hasil ditampilkan).'
  }
];

let quizState = { index: 0, score: 0, lives: 3, locked: false };

function startQuiz() {
  quizState = { index: 0, score: 0, lives: 3, locked: false };
  $('#kuisQTotal').textContent = quizData.length;
  updateQuizHUD();
  renderQuestion();
}

function updateQuizHUD() {
  $('#kuisScore').textContent = quizState.score;
  $('#kuisQNum').textContent = Math.min(quizState.index + 1, quizData.length);
  $('#kuisLives').textContent = '❤️ '.repeat(Math.max(0, quizState.lives)).trim() || '💔';
}

function renderQuestion() {
  const q = quizData[quizState.index];
  quizState.locked = false;
  $('#quizQuestion').textContent = q.q;
  $('#quizFeedback').textContent = '';
  $('#quizFeedback').className = 'quiz-feedback';
  const next = $('#quizNext');
  next.disabled = true;
  next.textContent = 'Soal Berikutnya →';
  $('#quizOptions').innerHTML = q.options.map((opt, i) => `
    <button class="quiz-option" data-opt="${i}">
      <span class="opt-letter">${String.fromCharCode(65 + i)}</span>
      <span>${opt}</span>
    </button>
  `).join('');
  $$('.quiz-option').forEach((btn) => btn.addEventListener('click', () => selectOption(Number(btn.dataset.opt))));
}

function selectOption(i) {
  if (quizState.locked) return;
  quizState.locked = true;
  const q = quizData[quizState.index];
  const correct = i === q.answer;
  const btns = $$('.quiz-option');
  btns.forEach((b) => b.disabled = true);
  btns[q.answer].classList.add('correct');
  if (!correct) {
    btns[i].classList.add('wrong');
    quizState.lives--;
  } else {
    quizState.score++;
  }
  const fb = $('#quizFeedback');
  fb.className = `quiz-feedback ${correct ? 'success' : 'error'}`;
  fb.innerHTML = `<span class="fb-icon">${correct ? '✅' : '❌'}</span>${correct ? 'Benar! ' : 'Salah. '}${q.explain}`;
  updateQuizHUD();

  const next = $('#quizNext');
  next.disabled = false;
  const isEnd = quizState.index === quizData.length - 1 || quizState.lives <= 0;
  next.textContent = isEnd ? 'Lihat Hasil 🏁' : 'Soal Berikutnya →';
}

function showQuizResult() {
  const pct = Math.round((quizState.score / quizData.length) * 100);
  let message = 'Terus berlatih, kamu pasti bisa! 💪';
  let emoji = '📚';
  if (pct >= 90) { message = 'Luar biasa! Kamu benar-benar menguasai materi ini! 🏆'; emoji = '🏆'; }
  else if (pct >= 70) { message = 'Bagus! Pemahamanmu sudah solid. 🎉'; emoji = '🎉'; }
  else if (pct >= 50) { message = 'Cukup baik, tinggal sedikit lagi untuk sempurna! 👍'; emoji = '👍'; }
  $('#quizBody').innerHTML = `
    <div style="text-align:center;padding:20px 0">
      <div style="font-size:3.5rem">${emoji}</div>
      <h3 style="font-size:1.6rem;margin:10px 0">Kuis Selesai!</h3>
      <p style="color:var(--muted);margin-bottom:20px">${message}</p>
      <div style="display:inline-flex;gap:30px;background:var(--surface);border:1px solid var(--border);border-radius:16px;padding:18px 30px">
        <div><strong style="font-size:2rem;color:var(--cyan);display:block;line-height:1">${quizState.score}</strong><span style="font-size:.8rem;color:var(--muted)">Skor Benar</span></div>
        <div><strong style="font-size:2rem;color:var(--green);display:block;line-height:1">${pct}%</strong><span style="font-size:.8rem;color:var(--muted)">Nilai</span></div>
      </div>
      <div style="margin-top:24px"><button class="btn btn-primary" data-action="restart">🔄 Main Lagi</button></div>
    </div>
  `;
  $('#quizBody').querySelector('[data-action="restart"]').addEventListener('click', () => {
    $('#quizBody').innerHTML = `
      <h3 id="quizQuestion"></h3>
      <div class="quiz-options" id="quizOptions"></div>
      <div class="quiz-feedback" id="quizFeedback"></div>
    `;
    // rebind by re-running render (elements recreated inside existing body)
    quizState = { index: 0, score: 0, lives: 3, locked: false };
    updateQuizHUD();
    renderQuestion();
  });
  // hide next button area after result
  $('#quizNext').disabled = true;
}

function initQuiz() {
  $('#quizNext').addEventListener('click', () => {
    if (quizState.index === quizData.length - 1 || quizState.lives <= 0) {
      showQuizResult();
    } else {
      quizState.index++;
      updateQuizHUD();
      renderQuestion();
    }
  });
  startQuiz();
}

/* ---------- Matching game ---------- */
const matchPairs = ['cpu', 'ram', 'storage', 'keyboard', 'monitor', 'gpu'];
let matchSelected = null;
let cocokSeconds = 0;
let cocokTimerId = null;
let cocokDone = false;

function startCocokTimer() {
  if (cocokTimerId) clearInterval(cocokTimerId);
  cocokSeconds = 0;
  updateCocokTime();
  cocokTimerId = setInterval(() => {
    cocokSeconds++;
    updateCocokTime();
  }, 1000);
}
function updateCocokTime() {
  const m = String(Math.floor(cocokSeconds / 60)).padStart(2, '0');
  const s = String(cocokSeconds % 60).padStart(2, '0');
  $('#cocokTimer').textContent = `${m}:${s}`;
}
function stopCocokTimer() {
  if (cocokTimerId) clearInterval(cocokTimerId);
  cocokTimerId = null;
}

function initMatching() {
  function build() {
    matchSelected = null;
    cocokDone = false;
    stopCocokTimer();
    cocokSeconds = 0;
    updateCocokTime();
    $('#cocokScore').textContent = '0';
    const fb = $('#cocokFeedback');
    fb.textContent = '';
    fb.className = 'quiz-feedback';

    const pics = shuffle(matchPairs);
    const names = shuffle(matchPairs);

    $('#matchPictures').innerHTML = pics.map((id, i) => {
      const c = components.find((x) => x.id === id);
      return `<button class="match-item" data-type="pic" data-match="${id}"><span class="match-num">${i + 1}</span><span class="match-icon">${icon(c.icon)}</span><span>Gambar ${i + 1}</span></button>`;
    }).join('');

    $('#matchNames').innerHTML = names.map((id, i) => {
      const c = components.find((x) => x.id === id);
      return `<button class="match-item" data-type="name" data-match="${id}"><span class="match-num">${i + 1}</span><span>${c.name}</span></button>`;
    }).join('');

    $$('.match-item').forEach((el) => el.addEventListener('click', () => handleMatch(el)));
    startCocokTimer();
  }

  function handleMatch(el) {
    if (cocokDone || el.classList.contains('matched')) return;
    const type = el.dataset.type;
    const id = el.dataset.match;

    if (!matchSelected) {
      matchSelected = { type, id, el };
      el.classList.add('selected');
      return;
    }
    if (matchSelected.type === type) {
      matchSelected.el.classList.remove('selected');
      matchSelected = { type, id, el };
      el.classList.add('selected');
      return;
    }

    const first = matchSelected;
    matchSelected = null;
    first.el.classList.remove('selected');

    if (first.id === id) {
      first.el.classList.add('matched');
      el.classList.add('matched');
      const score = $$('.match-item.matched').length / 2;
      $('#cocokScore').textContent = score;
      const fb = $('#cocokFeedback');
      fb.className = 'quiz-feedback success';
      fb.innerHTML = `<span class="fb-icon">✅</span> Tepat! ${components.find((x) => x.id === id).name} berhasil dicocokkan.`;
      if (score === matchPairs.length) {
        cocokDone = true;
        stopCocokTimer();
        fb.innerHTML = `<span class="fb-icon">🎉</span> Selesai! Semua ${matchPairs.length} pasangan benar dalam ${$('#cocokTimer').textContent}. Hebat!`;
        showToast('🎮 Matching selesai — semua pasangan benar!');
      }
    } else {
      first.el.classList.add('wrong-flash');
      el.classList.add('wrong-flash');
      setTimeout(() => {
        first.el.classList.remove('wrong-flash');
        el.classList.remove('wrong-flash');
      }, 450);
      const fb = $('#cocokFeedback');
      fb.className = 'quiz-feedback error';
      fb.innerHTML = '<span class="fb-icon">❌</span> Belum cocok, coba pasangan lain!';
    }
  }

  $('#cocokReset').addEventListener('click', build);
  build();
  stopCocokTimer(); // timer starts when tab is opened
}

/* ---------- Number conversion game ---------- */
let bilState = { answer: '', round: 1, value: 0, target: '', sourceLabel: '', locked: false };

function normalizeAnswer(str) {
  return str.trim().toUpperCase().replace(/^0+(?=\d)/, '');
}

function newBilQuestion() {
  const value = Math.floor(Math.random() * 240) + 10; // 10..249
  const types = shuffle(['dec2bin', 'bin2dec', 'dec2hex', 'hex2dec']);
  const type = types[0];
  let display, base, target, answer;

  if (type === 'dec2bin') {
    display = String(value); base = 'Desimal (basis 10)'; target = 'Biner'; answer = value.toString(2);
  } else if (type === 'bin2dec') {
    display = value.toString(2); base = 'Biner (basis 2)'; target = 'Desimal'; answer = String(value);
  } else if (type === 'dec2hex') {
    display = String(value); base = 'Desimal (basis 10)'; target = 'Heksadesimal'; answer = value.toString(16).toUpperCase();
  } else {
    display = value.toString(16).toUpperCase(); base = 'Heksadesimal (basis 16)'; target = 'Desimal'; answer = String(value);
  }

  bilState = { answer, round: bilState.round, value, target, locked: false };
  $('#bilValue').textContent = display;
  $('#bilBase').textContent = base;
  $('#bilTarget').textContent = target;
  $('#bilRound').textContent = bilState.round;
  $('#bilInput').value = '';
  $('#bilInput').className = '';
  $('#bilInput').disabled = false;
  $('#bilCheck').disabled = false;
  $('#bilNext').hidden = true;
  const fb = $('#bilFeedback');
  fb.textContent = '';
  fb.className = 'quiz-feedback';

  const hints = {
    'Biner': 'Tips: bagi bilangan dengan 2 secara berulang, lalu baca sisa dari bawah ke atas.',
    'Desimal': 'Tips: jumlahkan 2ⁿ (untuk biner) atau 16ⁿ (untuk heksadesimal) pada setiap digit bernilai 1 / digit aktif.',
    'Heksadesimal': 'Tips: bagi dengan 16. Sisa 10–15 ditulis A–F.'
  };
  $('#bilHint').textContent = hints[target];
}

function initBilangan() {
  newBilQuestion();

  $('#bilCheck').addEventListener('click', checkBil);
  $('#bilInput').addEventListener('keydown', (e) => {
    if (e.key === 'Enter') {
      if (!$('#bilNext').hidden) nextBil();
      else checkBil();
    }
  });
  $('#bilNext').addEventListener('click', nextBil);

  function checkBil() {
    if (bilState.locked) return;
    const raw = $('#bilInput').value.trim();
    if (!raw) {
      const fb = $('#bilFeedback');
      fb.className = 'quiz-feedback error';
      fb.textContent = '⚠️ Masukkan jawaban terlebih dahulu!';
      return;
    }
    bilState.locked = true;
    const correct = normalizeAnswer(raw) === normalizeAnswer(bilState.answer);
    const fb = $('#bilFeedback');
    const input = $('#bilInput');
    if (correct) {
      $('#bilScore').textContent = Number($('#bilScore').textContent) + 1;
      input.classList.add('correct');
      input.disabled = true;
      $('#bilCheck').disabled = true;
      fb.className = 'quiz-feedback success';
      fb.innerHTML = `<span class="fb-icon">✅</span> Benar! Jawabannya ${bilState.answer}.`;
      $('#bilNext').hidden = false;
      showToast('✅ Konversi benar! +1 skor');
    } else {
      input.classList.add('wrong');
      setTimeout(() => input.classList.remove('wrong'), 500);
      fb.className = 'quiz-feedback error';
      fb.innerHTML = `<span class="fb-icon">❌</span> Belum benar. Coba perhatikan lagi sistem bilangannya!`;
      bilState.locked = false;
    }
  }

  function nextBil() {
    bilState.round++;
    newBilQuestion();
  }
}

/* ---------- Init all ---------- */
document.addEventListener('DOMContentLoaded', () => {
  initNavbar();
  initComponents();
  initSimulationVideo();
  initMotherboard();
  initInstallSim();
  initGameTabs();
  initQuiz();
  initMatching();
  initBilangan();
});

