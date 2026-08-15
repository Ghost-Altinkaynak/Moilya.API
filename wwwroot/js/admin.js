const ICON = {
    overview: '<svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="3" y="3" width="7" height="9" rx="1.5"/><rect x="14" y="3" width="7" height="5" rx="1.5"/><rect x="14" y="12" width="7" height="9" rx="1.5"/><rect x="3" y="16" width="7" height="5" rx="1.5"/></svg>',
    hero: '<svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="3" y="4" width="18" height="14" rx="2"/><path d="M3 15l5-5 4 4 4-4 5 5"/></svg>',
    services: '<svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="3" y="3" width="8" height="8" rx="1.5"/><rect x="13" y="3" width="8" height="8" rx="1.5"/><rect x="3" y="13" width="8" height="8" rx="1.5"/><rect x="13" y="13" width="8" height="8" rx="1.5"/></svg>',
    process: '<svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="6" cy="6" r="2.5"/><circle cx="6" cy="18" r="2.5"/><path d="M6 8.5v7"/><path d="M11 6h10M11 18h10"/></svg>',
    why: '<svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="9"/><path d="M8 12l3 3 5-6"/></svg>',
    stats: '<svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M4 20V10M12 20V4M20 20v-7"/></svg>',
    gallery: '<svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="3" y="3" width="18" height="18" rx="2"/><circle cx="8.5" cy="9" r="1.8"/><path d="M21 16l-5.5-5.5L4 21"/></svg>',
    contact: '<svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07 19.5 19.5 0 01-6-6 19.79 19.79 0 01-3.07-8.67A2 2 0 014.11 2h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 16.92z"/></svg>',
    leads: '<svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M22 12h-6l-2 3h-4l-2-3H2"/><path d="M5.45 5.11L2 12v6a2 2 0 002 2h16a2 2 0 002-2v-6l-3.45-6.89A2 2 0 0016.76 4H7.24a2 2 0 00-1.79 1.11z"/></svg>',
    settings: '<svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="3"/><path d="M19.4 15a1.65 1.65 0 00.33 1.82l.06.06a2 2 0 11-2.83 2.83l-.06-.06a1.65 1.65 0 00-1.82-.33 1.65 1.65 0 00-1 1.51V21a2 2 0 01-4 0v-.09A1.65 1.65 0 009 19.4a1.65 1.65 0 00-1.82.33l-.06.06a2 2 0 11-2.83-2.83l.06-.06A1.65 1.65 0 004.6 15a1.65 1.65 0 00-1.51-1H3a2 2 0 010-4h.09A1.65 1.65 0 004.6 9a1.65 1.65 0 00-.33-1.82l-.06-.06a2 2 0 112.83-2.83l.06.06A1.65 1.65 0 009 4.6a1.65 1.65 0 001-1.51V3a2 2 0 014 0v.09a1.65 1.65 0 001 1.51 1.65 1.65 0 001.82-.33l.06-.06a2 2 0 112.83 2.83l-.06.06A1.65 1.65 0 0019.4 9a1.65 1.65 0 001.51 1H21a2 2 0 010 4h-.09a1.65 1.65 0 00-1.51 1z"/></svg>',
    lock: '<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="4" y="10" width="16" height="11" rx="2"/><path d="M8 10V7a4 4 0 018 0v3"/></svg>',
    back: '<svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M19 12H5M12 19l-7-7 7-7"/></svg>',
    logout: '<svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M9 21H5a2 2 0 01-2-2V5a2 2 0 012-2h4"/><path d="M16 17l5-5-5-5"/><path d="M21 12H9"/></svg>'
};

const NAV_ITEMS = [
    { id: 'overview', label: 'Genel Bakış' },
    { id: 'hero', label: 'Ana Başlık' },
    { id: 'services', label: 'Hizmetler' },
    { id: 'process', label: 'Süreç' },
    { id: 'why', label: 'Neden Biz' },
    { id: 'stats', label: 'İstatistikler' },
    { id: 'gallery', label: 'Galeri' },
    { id: 'contact', label: 'İletişim' },
    { id: 'leads', label: 'Talepler', badge: true },
    { id: 'settings', label: 'Ayarlar' }
];

const PANEL_META = {
    overview: { title: 'Genel Bakış', desc: 'Sitenizin ve gelen taleplerin özeti.' },
    hero: { title: 'Ana Başlık', desc: 'Sayfanın en üstünde görünen giriş bölümü.' },
    services: { title: 'Hizmetler', desc: 'Ana sayfada listelenen hizmet kartları.' },
    process: { title: 'Süreç Adımları', desc: 'Sırayla numaralandırılan çalışma adımları.' },
    why: { title: 'Neden Moilya', desc: 'Güven veren maddeler listesi.' },
    stats: { title: 'İstatistikler', desc: 'Sayısal başarı göstergeleri.' },
    gallery: { title: 'Galeri', desc: 'Örnek çalışma kartları.' },
    contact: { title: 'İletişim Bilgileri', desc: 'Telefon, e-posta ve adres bilgileri.' },
    leads: { title: 'Gelen Talepler', desc: 'Formdan gönderilen keşif talepleri.' },
    settings: { title: 'Ayarlar', desc: 'Hesap bilgisi ve şifre yönetimi.' }
};

const LIST_CONFIG = {
    '/api/GuvenMaddeleri': { fields: [{ key: 'metin', label: 'Metin' }, { key: 'siraNo', label: 'Sıra No', numeric: true }], empty: { metin: 'Yeni Madde', siraNo: 0 } },
    '/api/Hizmetler': { fields: [{ key: 'baslik', label: 'Başlık' }, { key: 'aciklama', label: 'Açıklama' }, { key: 'siraNo', label: 'Sıra No', numeric: true }], empty: { baslik: 'Yeni Hizmet', aciklama: '', siraNo: 0 } },
    '/api/SurecAdimlari': { fields: [{ key: 'baslik', label: 'Başlık' }, { key: 'aciklama', label: 'Açıklama' }, { key: 'siraNo', label: 'Sıra No', numeric: true }], empty: { baslik: 'Yeni Adım', aciklama: '', siraNo: 0 } },
    '/api/NedenBiz': { fields: [{ key: 'baslik', label: 'Başlık' }, { key: 'aciklama', label: 'Açıklama' }, { key: 'siraNo', label: 'Sıra No', numeric: true }], empty: { baslik: 'Yeni Madde', aciklama: '', siraNo: 0 } },
    '/api/Istatistikler': { fields: [{ key: 'deger', label: 'Değer' }, { key: 'etiket', label: 'Etiket' }, { key: 'siraNo', label: 'Sıra No', numeric: true }], empty: { deger: '0', etiket: 'Yeni İstatistik', siraNo: 0 } }
};

let currentTab = 'overview';
let leadsCount = 0;
let galeriResimYollari = {};

// ---------- Basit liste panelleri (ortak render + toplu kaydet + sil + ekle) ----------

function renderListPanel(apiPath, items) {
    const config = LIST_CONFIG[apiPath];
    const rows = items.map(item => {
        const inputs = config.fields.map(f => {
            const val = item[f.key] !== undefined ? item[f.key] : '';
            const widthAttr = f.numeric ? ' style="max-width:100px;"' : '';
            return `<input type="text" value="${escapeHtml(String(val))}" data-field="${f.key}" data-numeric="${!!f.numeric}" placeholder="${f.label}"${widthAttr}>`;
        }).join('');
        return `
            <div class="admin-row" data-id="${item.id}" data-path="${apiPath}">
              <div class="admin-row-fields">${inputs}</div>
              <button type="button" class="admin-remove" onclick="silListeSatiri(this)">✕</button>
            </div>`;
    }).join('');

    return `
        <div class="admin-panel">
            ${rows}
            <button type="button" class="admin-add" onclick="ekleListeSatiri('${apiPath}')">+ Ekle</button>
            <button type="button" class="btn btn-primary" style="width:100%;margin-top:16px;" onclick="kaydetListePaneli('${apiPath}')">Tüm Değişiklikleri Kaydet</button>
        </div>`;
}

async function kaydetListePaneli(apiPath) {
    const rows = document.querySelectorAll(`.admin-row[data-path="${apiPath}"]`);
    const istekler = [];

    rows.forEach(row => {
        const id = row.dataset.id;
        const payload = {};
        row.querySelectorAll('[data-field]').forEach(inp => {
            const field = inp.dataset.field;
            const numeric = inp.dataset.numeric === 'true';
            payload[field] = numeric ? parseInt(inp.value || '0', 10) : inp.value;
        });
        istekler.push(api.put(`${apiPath}/${id}`, payload));
    });

    try {
        await Promise.all(istekler);
        showToast('Tüm değişiklikler kaydedildi ✓');
    } catch (e) {
        showToast(e.message || 'Bazı kayıtlar kaydedilemedi');
    }
}

async function silListeSatiri(btn) {
    const row = btn.closest('.admin-row');
    const apiPath = row.dataset.path;
    const id = row.dataset.id;
    if (!confirm('Bu kaydı silmek istediğinize emin misiniz?')) return;
    try {
        await api.del(`${apiPath}/${id}`);
        showToast('Silindi ✓');
        await renderPanel();
    } catch (e) {
        showToast(e.message || 'Silme başarısız oldu');
    }
}

async function ekleListeSatiri(apiPath) {
    const config = LIST_CONFIG[apiPath];
    try {
        await api.post(apiPath, config.empty);
        showToast('Yeni kayıt eklendi');
        await renderPanel();
    } catch (e) {
        showToast(e.message || 'Ekleme başarısız oldu');
    }
}

// ---------- Genel Bakış ----------

async function loadOverview() {
    const [hizmetler, galeri, istatistikler, talepler] = await Promise.all([
        api.get('/api/Hizmetler'),
        api.get('/api/Galeri'),
        api.get('/api/Istatistikler'),
        api.get('/api/Talepler')
    ]);
    leadsCount = talepler.length;
    const son3 = talepler.slice(0, 3);

    document.getElementById('admin-content').innerHTML = `
        <div class="admin-stats-grid">
          <div class="admin-stat-card"><div class="stat-icon">${ICON.leads}</div><b>${leadsCount}</b><span>toplam keşif talebi</span></div>
          <div class="admin-stat-card"><div class="stat-icon">${ICON.services}</div><b>${hizmetler.length}</b><span>hizmet kartı</span></div>
          <div class="admin-stat-card"><div class="stat-icon">${ICON.gallery}</div><b>${galeri.length}</b><span>galeri öğesi</span></div>
          <div class="admin-stat-card"><div class="stat-icon">${ICON.stats}</div><b>${istatistikler.length}</b><span>istatistik</span></div>
        </div>
        <div class="admin-section-title">Hızlı Erişim</div>
        <div class="admin-quick-grid">
          <div class="admin-quick-card" onclick="gitSekmeye('hero')">${ICON.hero}<span>Ana Başlığı Düzenle</span></div>
          <div class="admin-quick-card" onclick="gitSekmeye('gallery')">${ICON.gallery}<span>Galeriyi Güncelle</span></div>
          <div class="admin-quick-card" onclick="gitSekmeye('contact')">${ICON.contact}<span>İletişim Bilgileri</span></div>
        </div>
        <div class="admin-section-title">Son Talepler <a href="#" onclick="gitSekmeye('leads'); return false;">Tümünü Gör →</a></div>
        ${son3.length ? `<table class="leads-table"><thead><tr><th>Ad Soyad</th><th>Telefon</th><th>Bölge</th><th>Tarih</th></tr></thead><tbody>
          ${son3.map(l => `<tr><td><b>${escapeHtml(l.adSoyad)}</b></td><td>${escapeHtml(l.telefon)}</td><td>${escapeHtml(l.bolge)}</td><td>${new Date(l.olusturmaTarihi).toLocaleDateString('tr-TR')}</td></tr>`).join('')}
        </tbody></table>` : `<div class="lead-empty">Henüz keşif talebi yok.</div>`}
    `;
}

// ---------- Ana Başlık (Hero + Güven Şeridi) ----------

async function loadHero() {
    const [anaSayfa, guvenMaddeleri] = await Promise.all([
        api.get('/api/AnaSayfa'),
        api.get('/api/GuvenMaddeleri')
    ]);
    const m = anaSayfa.manset || {};

    document.getElementById('admin-content').innerHTML = `
        <div class="admin-panel">
          <div class="admin-field"><label>Site Adı (logo)</label><input type="text" id="hero-siteAdi" value="${escapeHtml(m.siteAdi || 'Moilya')}"></div>
          <div class="admin-field"><label>Üst etiket</label><input type="text" id="hero-ustBaslik" value="${escapeHtml(m.ustBaslik || '')}"></div>
          <div class="admin-field"><label>Başlık (düz kısım)</label><input type="text" id="hero-anaBaslik" value="${escapeHtml(m.anaBaslik || '')}"></div>
          <div class="admin-field"><label>Başlık (vurgulu kısım)</label><input type="text" id="hero-vurguluBaslik" value="${escapeHtml(m.vurguluBaslik || '')}"></div>
          <div class="admin-field" style="margin-bottom:0;"><label>Alt açıklama</label><textarea id="hero-aciklamaMetni">${escapeHtml(m.aciklamaMetni || '')}</textarea></div>
          <button type="button" class="btn btn-primary" style="width:100%;margin-top:16px;" onclick="kaydetManset()">Manşeti Kaydet</button>
        </div>
        <div class="admin-sub" style="margin:-6px 0 10px;">Güven Şeridi — hero altında görünen kısa maddeler.</div>
        ${renderListPanel('/api/GuvenMaddeleri', guvenMaddeleri)}
    `;
}

async function kaydetManset() {
    const payload = {
        siteAdi: document.getElementById('hero-siteAdi').value,
        ustBaslik: document.getElementById('hero-ustBaslik').value,
        anaBaslik: document.getElementById('hero-anaBaslik').value,
        vurguluBaslik: document.getElementById('hero-vurguluBaslik').value,
        aciklamaMetni: document.getElementById('hero-aciklamaMetni').value
    };
    try {
        await api.put('/api/AnaSayfa/manset', payload);
        showToast('Manşet kaydedildi ✓');
    } catch (e) {
        showToast(e.message || 'Kaydetme başarısız oldu');
    }
}

// ---------- İletişim ----------

async function loadContact() {
    const c = (await api.get('/api/Iletisim')) || {};
    document.getElementById('admin-content').innerHTML = `
        <div class="admin-panel">
          <div class="admin-field"><label>Telefon</label><input type="text" id="c-telefon" value="${escapeHtml(c.telefon || '')}"></div>
          <div class="admin-field"><label>E-posta</label><input type="text" id="c-eposta" value="${escapeHtml(c.eposta || '')}"></div>
          <div class="admin-field"><label>Instagram</label><input type="text" id="c-instagram" value="${escapeHtml(c.instagram || '')}"></div>
          <div class="admin-field"><label>Adres / Şehir</label><input type="text" id="c-adres" value="${escapeHtml(c.adres || '')}"></div>
          <div class="admin-field" style="margin-bottom:0;"><label>Harita konumu</label><input type="text" id="c-harita" value="${escapeHtml(c.haritaAramasi || '')}" placeholder="Örn. Kadıköy, İstanbul"></div>
          <button type="button" class="btn btn-primary" style="margin-top:16px;" onclick="kaydetIletisim()">İletişim Bilgilerini Kaydet</button>
        </div>
    `;
}

async function kaydetIletisim() {
    const payload = {
        telefon: document.getElementById('c-telefon').value,
        eposta: document.getElementById('c-eposta').value,
        instagram: document.getElementById('c-instagram').value,
        adres: document.getElementById('c-adres').value,
        haritaAramasi: document.getElementById('c-harita').value
    };
    try {
        await api.put('/api/Iletisim', payload);
        showToast('İletişim bilgileri kaydedildi ✓');
    } catch (e) {
        showToast(e.message || 'Kaydetme başarısız oldu');
    }
}

// ---------- Galeri ----------

async function loadGallery() {
    const [galeri, hizmetler] = await Promise.all([
        api.get('/api/Galeri'),
        api.get('/api/Hizmetler')
    ]);
    galeriResimYollari = {};

    const rows = galeri.map(g => {
        const thumbStyle = g.resimYolu
            ? `background-image:url('${escapeHtml(g.resimYolu)}')`
            : `background:linear-gradient(160deg, ${escapeHtml(g.renk1)}, ${escapeHtml(g.renk2)})`;
        const options = hizmetler.map(h => `<option value="${h.id}" ${g.hizmetId === h.id ? 'selected' : ''}>${escapeHtml(h.baslik)}</option>`).join('');
        return `
            <div class="admin-row admin-row-gallery" data-id="${g.id}">
              <div class="gallery-thumb" style="${thumbStyle}" id="thumb-${g.id}"></div>
              <div class="admin-row-fields">
                <input type="text" value="${escapeHtml(g.baslik)}" id="baslik-${g.id}" placeholder="Başlık">
                <select id="hizmet-${g.id}">
                  <option value="">— Hizmet seçilmedi —</option>
                  ${options}
                </select>
                <div class="gallery-upload-row">
                  <label class="admin-upload-btn">
                    Fotoğraf Yükle / Değiştir
                    <input type="file" accept="image/*" onchange="fotografYukle(${g.id}, this)">
                  </label>
                  ${g.resimYolu ? `<button type="button" class="admin-remove-img-btn" onclick="fotografKaldir(${g.id})">Fotoğrafı Kaldır</button>` : ''}
                </div>
                <div style="display:flex; gap:10px;">
                  <div style="flex:1;"><span class="admin-color-label">Renk 1 (fotoğraf yoksa)</span><input type="color" value="${g.renk1}" id="renk1-${g.id}"></div>
                  <div style="flex:1;"><span class="admin-color-label">Renk 2 (fotoğraf yoksa)</span><input type="color" value="${g.renk2}" id="renk2-${g.id}"></div>
                </div>
                <input type="text" value="${g.siraNo}" id="sira-${g.id}" placeholder="Sıra No" style="max-width:100px;">
              </div>
              <div style="display:flex; flex-direction:column; gap:6px;">
                <button type="button" class="admin-upload-btn" onclick="kaydetGaleriSatiri(${g.id})">Kaydet</button>
                <button type="button" class="admin-remove" onclick="silGaleriSatiri(${g.id})">✕</button>
              </div>
            </div>`;
    }).join('');

    document.getElementById('admin-content').innerHTML = `
        <div class="admin-panel">
          <div class="admin-sub" style="margin-top:0;">Fotoğraf yüklemek anlık kaydedilmez — yükledikten sonra o satırın "Kaydet" butonuna basmayı unutmayın.</div>
          ${rows}
          <button type="button" class="admin-add" onclick="ekleGaleriSatiri()">+ Ekle</button>
        </div>
    `;
}

async function fotografYukle(id, inputEl) {
    const dosya = inputEl.files && inputEl.files[0];
    if (!dosya) return;
    const formData = new FormData();
    formData.append('dosya', dosya);
    try {
        const sonuc = await api.upload('/api/Galeri/yukle', formData);
        galeriResimYollari[id] = sonuc.resimYolu;
        document.getElementById(`thumb-${id}`).style.backgroundImage = `url('${sonuc.resimYolu}')`;
        showToast('Fotoğraf yüklendi — şimdi Kaydet\'e basın');
    } catch (e) {
        showToast(e.message || 'Fotoğraf yüklenemedi');
    }
}

function fotografKaldir(id) {
    galeriResimYollari[id] = null;
    const thumb = document.getElementById(`thumb-${id}`);
    const renk1 = document.getElementById(`renk1-${id}`).value;
    const renk2 = document.getElementById(`renk2-${id}`).value;
    thumb.style.backgroundImage = 'none';
    thumb.style.background = `linear-gradient(160deg, ${renk1}, ${renk2})`;
    showToast('Fotoğraf kaldırıldı — Kaydet\'e basmayı unutmayın');
}

async function kaydetGaleriSatiri(id) {
    const payload = {
        baslik: document.getElementById(`baslik-${id}`).value,
        renk1: document.getElementById(`renk1-${id}`).value,
        renk2: document.getElementById(`renk2-${id}`).value,
        siraNo: parseInt(document.getElementById(`sira-${id}`).value || '0', 10),
        hizmetId: document.getElementById(`hizmet-${id}`).value ? parseInt(document.getElementById(`hizmet-${id}`).value, 10) : null
    };

    try {
        if (galeriResimYollari[id] !== undefined) {
            payload.resimYolu = galeriResimYollari[id];
        } else {
            const mevcutListe = await api.get('/api/Galeri');
            const mevcutKayit = mevcutListe.find(x => x.id === id);
            payload.resimYolu = mevcutKayit ? mevcutKayit.resimYolu : null;
        }
        await api.put(`/api/Galeri/${id}`, payload);
        delete galeriResimYollari[id];
        showToast('Galeri öğesi kaydedildi ✓');
    } catch (e) {
        showToast(e.message || 'Kaydetme başarısız oldu');
    }
}

async function silGaleriSatiri(id) {
    if (!confirm('Bu galeri öğesini silmek istediğinize emin misiniz?')) return;
    try {
        await api.del(`/api/Galeri/${id}`);
        showToast('Silindi ✓');
        await renderPanel();
    } catch (e) {
        showToast(e.message || 'Silme başarısız oldu');
    }
}

async function ekleGaleriSatiri() {
    try {
        await api.post('/api/Galeri', { baslik: 'Yeni Çalışma', renk1: '#B8703E', renk2: '#3B2A1F', siraNo: 0, hizmetId: null });
        showToast('Yeni galeri öğesi eklendi');
        await renderPanel();
    } catch (e) {
        showToast(e.message || 'Ekleme başarısız oldu');
    }
}

// ---------- Talepler ----------

async function loadLeads() {
    const talepler = await api.get('/api/Talepler');
    leadsCount = talepler.length;

    document.getElementById('admin-content').innerHTML = talepler.length ? `
        <table class="leads-table">
          <thead><tr><th>Ad Soyad</th><th>Telefon</th><th>Bölge</th><th>Mesaj</th><th>Tarih</th><th>İşlendi</th><th></th></tr></thead>
          <tbody>
            ${talepler.map(t => `
              <tr>
                <td><b>${escapeHtml(t.adSoyad)}</b></td>
                <td>${escapeHtml(t.telefon)}</td>
                <td>${escapeHtml(t.bolge)}</td>
                <td>${escapeHtml(t.mesaj || '—')}</td>
                <td>${new Date(t.olusturmaTarihi).toLocaleString('tr-TR')}</td>
                <td><input type="checkbox" ${t.islendiMi ? 'checked' : ''} onchange="talepIslendiGuncelle(${t.id}, this.checked)"></td>
                <td><button class="lead-del" onclick="talepSil(${t.id})">Sil</button></td>
              </tr>`).join('')}
          </tbody>
        </table>
    ` : `<div class="lead-empty">Henüz keşif talebi yok.</div>`;
}

async function talepIslendiGuncelle(id, islendiMi) {
    try {
        await api.put(`/api/Talepler/${id}`, { islendiMi });
        showToast('Güncellendi ✓');
    } catch (e) {
        showToast(e.message || 'Güncellenemedi');
    }
}

async function talepSil(id) {
    if (!confirm('Bu talebi silmek istediğinize emin misiniz?')) return;
    try {
        await api.del(`/api/Talepler/${id}`);
        showToast('Talep silindi ✓');
        await renderPanel();
    } catch (e) {
        showToast(e.message || 'Silinemedi');
    }
}

// ---------- Ayarlar (Şifre Değiştirme Formu Dahil) ----------

function loadSettings() {
    const payload = api.getTokenPayload();
    const kullaniciAdi = payload && payload.sub ? payload.sub : 'admin';
    document.getElementById('admin-content').innerHTML = `
        <div class="admin-panel">
          <div class="admin-note">${ICON.settings}<span>Giriş yapan kullanıcı: <b>${escapeHtml(kullaniciAdi)}</b></span></div>
          <button type="button" class="btn btn-primary" onclick="cikisYap()">Çıkış Yap</button>
        </div>
        <div class="admin-panel">
          <div class="admin-sub" style="margin-top:0;">Şifreni Değiştir</div>
          <div class="admin-field"><label>Mevcut şifre</label><input type="password" id="sifre-mevcut"></div>
          <div class="admin-field"><label>Yeni şifre</label><input type="password" id="sifre-yeni"></div>
          <div class="admin-field" style="margin-bottom:0;"><label>Yeni şifre (tekrar)</label><input type="password" id="sifre-yeni-tekrar"></div>
          <button type="button" class="btn btn-primary" style="width:100%;margin-top:16px;" onclick="sifreGuncelle()">Şifreyi Güncelle</button>
          <div class="admin-error" id="sifre-hata"></div>
        </div>
    `;
}

async function sifreGuncelle() {
    const mevcut = document.getElementById('sifre-mevcut').value;
    const yeni = document.getElementById('sifre-yeni').value;
    const tekrar = document.getElementById('sifre-yeni-tekrar').value;
    const hataEl = document.getElementById('sifre-hata');
    hataEl.textContent = '';

    if (yeni !== tekrar) {
        hataEl.textContent = 'Yeni şifreler birbiriyle eşleşmiyor.';
        return;
    }

    try {
        await api.post('/api/Auth/sifre-degistir', { mevcutSifre: mevcut, yeniSifre: yeni });
        showToast('Şifre güncellendi ✓');
        document.getElementById('sifre-mevcut').value = '';
        document.getElementById('sifre-yeni').value = '';
        document.getElementById('sifre-yeni-tekrar').value = '';
    } catch (e) {
        hataEl.textContent = e.message || 'Şifre güncellenemedi.';
    }
}

// ---------- Panel yönlendirme / sekme geçişi ----------

async function renderPanel() {
    const content = document.getElementById('admin-content');
    content.innerHTML = '<p style="padding:40px;text-align:center;color:var(--walnut-700);">Yükleniyor…</p>';
    try {
        switch (currentTab) {
            case 'overview': await loadOverview(); break;
            case 'hero': await loadHero(); break;
            case 'services': content.innerHTML = renderListPanel('/api/Hizmetler', await api.get('/api/Hizmetler')); break;
            case 'process': content.innerHTML = renderListPanel('/api/SurecAdimlari', await api.get('/api/SurecAdimlari')); break;
            case 'why': content.innerHTML = renderListPanel('/api/NedenBiz', await api.get('/api/NedenBiz')); break;
            case 'stats': content.innerHTML = renderListPanel('/api/Istatistikler', await api.get('/api/Istatistikler')); break;
            case 'gallery': await loadGallery(); break;
            case 'contact': await loadContact(); break;
            case 'leads': await loadLeads(); break;
            case 'settings': loadSettings(); break;
        }
    } catch (e) {
        content.innerHTML = `<div class="admin-note">${ICON.settings}<span>${escapeHtml(e.message || 'Veri yüklenemedi.')}</span></div>`;
    }
}

function gitSekmeye(tab) {
    currentTab = tab;
    renderSidebar();
    renderHeader();
    renderPanel();
}

function renderSidebar() {
    document.getElementById('admin-sidebar').innerHTML = `
        <div class="brand-row"><a href="#top" class="logo">moil<span>y</span>a</a></div>
        <small style="padding:0 12px 14px; display:block; margin-top:-16px;">Yönetim Paneli</small>
        <nav class="admin-nav">
          ${NAV_ITEMS.map(n => `
            <button type="button" class="admin-nav-item ${currentTab === n.id ? 'active' : ''}" onclick="gitSekmeye('${n.id}')">
              ${ICON[n.id]}<span>${n.label}</span>
              ${n.badge ? `<span class="admin-nav-badge">${leadsCount}</span>` : ''}
            </button>`).join('')}
        </nav>
        <div class="admin-nav-divider"></div>
        <div class="admin-sidebar-foot">
          <a href="#top">${ICON.back}<span>Siteyi Görüntüle</span></a>
          <button type="button" onclick="cikisYap()">${ICON.logout}<span>Çıkış Yap</span></button>
        </div>
    `;
}

function renderHeader() {
    const meta = PANEL_META[currentTab];
    document.getElementById('admin-header').innerHTML = `<div><h2>${meta.title}</h2><p>${meta.desc}</p></div>`;
}

// ---------- Giriş / Çıkış ----------

function renderLoginScreen() {
    document.getElementById('admin-login-screen').style.display = 'flex';
    document.getElementById('admin-layout').style.display = 'none';
    document.getElementById('admin-login-screen').innerHTML = `
        <div>
          <div class="admin-login">
            <div class="lock-badge">${ICON.lock}</div>
            <div class="brand">moilya</div>
            <h2>Yönetim Girişi</h2>
            <p>Devam etmek için kullanıcı adı ve şifreni gir.</p>
            <input type="text" id="login-kullanici" placeholder="Kullanıcı adı" value="admin" style="margin-bottom:10px;">
            <input type="password" id="login-sifre" placeholder="Şifre">
            <button class="btn btn-primary" onclick="girisYap()">Giriş Yap</button>
            <div class="admin-error" id="admin-error"></div>
          </div>
          <div style="text-align:center;"><a href="#top" class="admin-back-link">← Siteye dön</a></div>
        </div>`;
    document.getElementById('login-sifre').addEventListener('keydown', e => { if (e.key === 'Enter') girisYap(); });
}

async function girisYap() {
    const kullaniciAdi = document.getElementById('login-kullanici').value;
    const sifre = document.getElementById('login-sifre').value;
    try {
        const sonuc = await api.post('/api/Auth/login', { kullaniciAdi, sifre });
        api.setToken(sonuc.token);
        currentTab = 'overview';
        await renderAdminRoot();
    } catch (e) {
        document.getElementById('admin-error').textContent = 'Kullanıcı adı veya şifre hatalı.';
    }
}

function cikisYap() {
    api.clearToken();
    location.hash = '';
}

// ---------- Kök yönlendirme ----------

async function renderAdminRoot() {
    if (!api.isTokenValid()) {
        renderLoginScreen();
        return;
    }
    document.getElementById('admin-login-screen').style.display = 'none';
    document.getElementById('admin-layout').style.display = 'flex';
    renderSidebar();
    renderHeader();
    await renderPanel();
}

function handleHashRoute() {
    if (location.hash.replace('#', '') === 'admin') {
        document.getElementById('public-view').style.display = 'none';
        document.getElementById('admin-view').style.display = 'block';
        renderAdminRoot();
    } else {
        document.getElementById('public-view').style.display = 'block';
        document.getElementById('admin-view').style.display = 'none';
    }
}

document.addEventListener('DOMContentLoaded', async () => {
    const basarili = await initPublicSite();
    if (basarili) {
        document.getElementById('loading-screen').style.display = 'none';
    }
    handleHashRoute();
    window.addEventListener('hashchange', handleHashRoute);
});