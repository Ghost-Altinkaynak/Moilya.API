const API_BASE = '';
const TOKEN_KEY = 'moilya_admin_token';

function getToken() {
    return localStorage.getItem(TOKEN_KEY);
}

function setToken(token) {
    localStorage.setItem(TOKEN_KEY, token);
}

function clearToken() {
    localStorage.removeItem(TOKEN_KEY);
}

function getTokenPayload() {
    const token = getToken();
    if (!token) return null;
    try {
        return JSON.parse(atob(token.split('.')[1]));
    } catch (e) {
        return null;
    }
}

function isTokenValid() {
    const payload = getTokenPayload();
    if (!payload) return false;
    if (!payload.exp) return true;
    return (payload.exp * 1000) > Date.now();
}

// 401 hatasını çözen düzeltilmiş apiGet
async function apiGet(path) {
    const headers = {};
    const token = getToken();
    if (token) headers['Authorization'] = 'Bearer ' + token;

    const res = await fetch(API_BASE + path, { headers });

    if (res.status === 401) {
        clearToken();
        throw new Error('Oturum süresi doldu, lütfen tekrar giriş yapın.');
    }

    if (!res.ok) {
        throw new Error('Veri alınamadı (HTTP ' + res.status + ')');
    }
    return res.json();
}

async function apiSend(path, method, body) {
    const headers = { 'Content-Type': 'application/json' };
    const token = getToken();
    if (token) headers['Authorization'] = 'Bearer ' + token;

    const res = await fetch(API_BASE + path, {
        method: method,
        headers: headers,
        body: body !== undefined ? JSON.stringify(body) : undefined
    });

    if (res.status === 401) {
        clearToken();
        throw new Error('Oturum süresi doldu, lütfen tekrar giriş yapın.');
    }

    if (!res.ok) {
        let mesaj = 'İşlem başarısız oldu (HTTP ' + res.status + ')';
        try {
            const hata = await res.json();
            if (hata && hata.mesaj) mesaj = hata.mesaj;
        } catch (e) { /* JSON değilse varsayılan mesaj kalır */ }
        throw new Error(mesaj);
    }

    const metin = await res.text();
    return metin ? JSON.parse(metin) : null;
}

async function apiUpload(path, formData) {
    const headers = {};
    const token = getToken();
    if (token) headers['Authorization'] = 'Bearer ' + token;

    const res = await fetch(API_BASE + path, {
        method: 'POST',
        headers: headers,
        body: formData
    });

    if (res.status === 401) {
        clearToken();
        throw new Error('Oturum süresi doldu, lütfen tekrar giriş yapın.');
    }

    if (!res.ok) {
        throw new Error('Dosya yüklenemedi (HTTP ' + res.status + ')');
    }

    return res.json();
}

const api = {
    get: apiGet,
    post: (path, body) => apiSend(path, 'POST', body),
    put: (path, body) => apiSend(path, 'PUT', body),
    del: (path) => apiSend(path, 'DELETE'),
    upload: apiUpload,
    getToken,
    setToken,
    clearToken,
    isTokenValid,
    getTokenPayload
};

function escapeHtml(s) {
    return String(s == null ? '' : s).replace(/[&<>"']/g, c => ({
        '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;'
    }[c]));
}

function showToast(mesaj) {
    const t = document.getElementById('toast');
    if (!t) return;
    t.textContent = mesaj;
    t.classList.add('show');
    setTimeout(() => t.classList.remove('show'), 2200);
}