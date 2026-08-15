let hizmetlerListesi = [];
let galeriListesi = [];
let galeriFiltre = 'all'; // 'all' ya da bir hizmetId (sayı, metin olarak)

const CHECK_ICON = '<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M20 6L9 17l-5-5"/></svg>';
const SERVICE_ICONS = [
    '<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="3" y="2" width="18" height="20" rx="1"/><line x1="12" y1="2" x2="12" y2="22"/></svg>',
    '<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M4 3h16v6H4z"/><path d="M4 13h16v8H4z"/></svg>',
    '<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M4 21V9l8-6 8 6v12"/><path d="M9 21v-6h6v6"/></svg>',
    '<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="4" y="2" width="16" height="20" rx="1"/><line x1="4" y1="9" x2="20" y2="9"/><line x1="4" y1="15" x2="20" y2="15"/></svg>'
];

async function initPublicSite() {
    try {
        const [anaSayfa, hizmetler, galeri, iletisim] = await Promise.all([
            api.get('/api/AnaSayfa'),
            api.get('/api/Hizmetler'),
            api.get('/api/Galeri'),
            api.get('/api/Iletisim')
        ]);

        hizmetlerListesi = hizmetler || [];
        galeriListesi = galeri || [];

        renderHero(anaSayfa.manset);
        renderTrust(anaSayfa.guvenMaddeleri);
        renderServices(hizmetlerListesi);
        renderProcess(anaSayfa.surecAdimlari);
        renderWhy(anaSayfa.nedenBiz);
        renderStats(anaSayfa.istatistikler);
        renderGallerySection();
        renderContact(iletisim);
        attachReveal('.reveal');

        return true;
    } catch (e) {
        console.error('Site verileri yüklenemedi:', e);
        const ekran = document.getElementById('loading-screen');
        if (ekran) {
            ekran.innerHTML = '<p style="max-width:320px;text-align:center;color:#A5432F;">Site verileri yüklenemedi. Sunucunun (API) çalıştığından emin olup sayfayı yenileyin.</p>';
        }
        return false;
    }
}

function renderHero(manset) {
    if (!manset) return;
    document.getElementById('hero-eyebrow').textContent = manset.ustBaslik;
    document.getElementById('hero-title-main').textContent = manset.anaBaslik;
    document.getElementById('hero-title-em').textContent = manset.vurguluBaslik;
    document.getElementById('hero-lead').textContent = manset.aciklamaMetni;
}

function renderTrust(list) {
    document.getElementById('trust-list').innerHTML = (list || [])
        .map(t => `<div class="trust-item">${CHECK_ICON}${escapeHtml(t.metin)}</div>`)
        .join('');
}

function renderServices(list) {
    document.getElementById('services-list').innerHTML = (list || []).map((s, i) => `
        <div class="service-card reveal" data-hizmet-id="${s.id}" role="button" tabindex="0"
             onclick="hizmeteGoreGaleriyeGit(this.dataset.hizmetId)"
             onkeydown="if(event.key==='Enter'||event.key===' '){event.preventDefault(); hizmeteGoreGaleriyeGit(this.dataset.hizmetId);}">
          <div class="icon">${SERVICE_ICONS[i % SERVICE_ICONS.length]}</div>
          <h3>${escapeHtml(s.baslik)}</h3><p>${escapeHtml(s.aciklama)}</p>
          <span class="service-link-hint">Örnekleri Gör →</span>
        </div>`).join('');
}

function renderProcess(list) {
    document.getElementById('process-list').innerHTML = (list || []).map((p, i) => `
        <div class="process-step reveal">
          <div class="process-num">${i + 1}</div>
          <h3>${escapeHtml(p.baslik)}</h3><p>${escapeHtml(p.aciklama)}</p>
        </div>`).join('');
}

function renderWhy(list) {
    document.getElementById('why-list').innerHTML = (list || []).map(w => `
        <li>${CHECK_ICON}<div><b>${escapeHtml(w.baslik)}</b><span>${escapeHtml(w.aciklama)}</span></div></li>
    `).join('');
}

function renderStats(list) {
    document.getElementById('stats-list').innerHTML = (list || []).map(s => `
        <div class="stat"><b>${escapeHtml(s.deger)}</b><span>${escapeHtml(s.etiket)}</span></div>
    `).join('');
}

function renderGallerySection() {
    const filtersEl = document.getElementById('gallery-filters');
    const secenekler = ['all', ...hizmetlerListesi.map(h => String(h.id))];

    filtersEl.innerHTML = secenekler.map(val => {
        const label = val === 'all'
            ? 'Tümü'
            : ((hizmetlerListesi.find(h => String(h.id) === val) || {}).baslik || '');
        const active = String(galeriFiltre) === val ? 'active' : '';
        return `<button type="button" class="filter-chip ${active}" data-val="${val}" onclick="setGalleryFilter(this.dataset.val)">${escapeHtml(label)}</button>`;
    }).join('');

    const items = galeriFiltre === 'all'
        ? galeriListesi
        : galeriListesi.filter(g => String(g.hizmetId) === String(galeriFiltre));

    const listEl = document.getElementById('gallery-list');

    if (!items.length) {
        listEl.innerHTML = `<div class="gallery-empty">Bu hizmet için henüz görsel eklenmedi.<br><button type="button" class="link-btn" onclick="setGalleryFilter('all')">Tüm çalışmaları gör</button></div>`;
    } else {
        listEl.innerHTML = items.map(g => {
            const bg = g.resimYolu
                ? `background-image:url('${escapeHtml(g.resimYolu)}'); background-size:cover; background-position:center;`
                : `background:linear-gradient(160deg, ${escapeHtml(g.renk1)}, ${escapeHtml(g.renk2)});`;
            return `<div class="gallery-item reveal" style="${bg}"><div class="caption">${escapeHtml(g.baslik)}</div></div>`;
        }).join('');
    }

    attachReveal('#gallery-list .reveal');
}

function setGalleryFilter(val) {
    galeriFiltre = val;
    renderGallerySection();
}

function hizmeteGoreGaleriyeGit(hizmetId) {
    setGalleryFilter(hizmetId);
    const hedef = document.getElementById('galeri');
    if (hedef) hedef.scrollIntoView({ behavior: 'smooth', block: 'start' });
}

function attachReveal(secici) {
    const io = new IntersectionObserver((entries) => {
        entries.forEach(e => {
            if (e.isIntersecting) {
                e.target.classList.add('in');
                io.unobserve(e.target);
            }
        });
    }, { threshold: 0.12 });

    document.querySelectorAll(secici).forEach(el => {
        el.classList.remove('in');
        io.observe(el);
    });
}

function instagramUrlUret(instagram) {
    if (!instagram) return 'https://instagram.com/';
    const kullaniciAdi = instagram.trim().replace(/^@/, '');
    return `https://instagram.com/${kullaniciAdi}`;
}

function renderContact(c) {
    if (!c) return;

    const telTemiz = escapeHtml((c.telefon || '').replace(/\s/g, ''));
    const instagramUrl = escapeHtml(instagramUrlUret(c.instagram));

    document.getElementById('contact-info').innerHTML = `
        <a href="tel:${telTemiz}"><svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07 19.5 19.5 0 01-6-6 19.79 19.79 0 01-3.07-8.67A2 2 0 014.11 2h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 16.92z"/></svg>${escapeHtml(c.telefon)}</a>
        <a href="mailto:${escapeHtml(c.eposta)}"><svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M4 4h16v16H4z"/><path d="M22 6l-10 7L2 6"/></svg>${escapeHtml(c.eposta)}</a>
        <a href="${instagramUrl}" target="_blank" rel="noopener"><svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="2" y="2" width="20" height="20" rx="5"/><circle cx="12" cy="12" r="4"/><circle cx="17.5" cy="6.5" r="1"/></svg>${escapeHtml(c.instagram || '')}</a>
    `;

    document.getElementById('footer-contact').innerHTML = `
        <li><a href="tel:${telTemiz}">${escapeHtml(c.telefon)}</a></li>
        <li><a href="mailto:${escapeHtml(c.eposta)}">${escapeHtml(c.eposta)}</a></li>
        <li><a href="${instagramUrl}" target="_blank" rel="noopener">${escapeHtml(c.instagram || '')}</a></li>
        <li>${escapeHtml(c.adres || '')}</li>
    `;

    const haritaSorgusu = (c.haritaAramasi && c.haritaAramasi.trim()) ? c.haritaAramasi : c.adres;
    const kodlanmis = encodeURIComponent(haritaSorgusu || '');
    document.getElementById('map-frame').src = `https://www.google.com/maps?q=${kodlanmis}&output=embed`;
    document.getElementById('map-directions-link').href = `https://www.google.com/maps/dir/?api=1&destination=${kodlanmis}`;
    document.getElementById('map-address').textContent = c.adres || '';
}

document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('lead-form');
    form.addEventListener('submit', async (e) => {
        e.preventDefault();
        const not = document.getElementById('form-note');
        const veri = {
            adSoyad: document.getElementById('f-ad').value,
            telefon: document.getElementById('f-tel').value,
            bolge: document.getElementById('f-semt').value,
            mesaj: document.getElementById('f-mesaj').value
        };
        try {
            await api.post('/api/Talepler', veri);
            not.textContent = 'Teşekkürler! En kısa sürede sizi arayacağız.';
            form.reset();
        } catch (err) {
            not.textContent = 'Bir sorun oluştu, lütfen bizi doğrudan arayın.';
        }
    });
});