function resetModalIcon() {
    const iconEl = document.getElementById('modal-icon');
    if (iconEl) {
        iconEl.classList.remove('show');
        iconEl.innerHTML = '';
    }
}

function hideModal() {
    const overlay = document.getElementById('custom-modal-overlay');
    if (overlay) overlay.classList.remove('show');
    resetModalIcon();
}

function showInfoModal(title, message) {
    resetModalIcon();
    document.getElementById('modal-title').textContent = title;
    document.getElementById('modal-message').textContent = message;
    document.getElementById('modal-actions').innerHTML = `
        <button type="button" class="btn btn-ghost" id="modal-close-btn">Kapat</button>
    `;
    document.getElementById('custom-modal-overlay').classList.add('show');
    document.getElementById('modal-close-btn').onclick = () => hideModal();
}

function showConfirmModal(title, message) {
    return new Promise((resolve) => {
        resetModalIcon();
        document.getElementById('modal-title').textContent = title;
        document.getElementById('modal-message').textContent = message;
        document.getElementById('modal-actions').innerHTML = `
            <button type="button" class="btn btn-ghost" id="modal-cancel-btn">İptal</button>
            <button type="button" class="btn modal-btn-danger" id="modal-confirm-btn">Sil</button>
        `;
        document.getElementById('custom-modal-overlay').classList.add('show');
        document.getElementById('modal-cancel-btn').onclick = () => {
            hideModal();
            resolve(false);
        };
        document.getElementById('modal-confirm-btn').onclick = () => {
            hideModal();
            resolve(true);
        };
    });
}

function showLeadSuccessModal(waLink) {
    const CHECK_ICON = '<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M20 6L9 17l-5-5"/></svg>';
    const iconEl = document.getElementById('modal-icon');
    if (iconEl) {
        iconEl.innerHTML = CHECK_ICON;
        iconEl.classList.add('show');
    }
    document.getElementById('modal-title').textContent = 'Talebiniz Alındı!';
    document.getElementById('modal-message').textContent = '24 saat içinde sizinle iletişime geçeceğiz.';

    const actionsHtml = waLink
        ? `<a href="${waLink}" target="_blank" rel="noopener" class="btn btn-primary" style="text-decoration:none;">WhatsApp'tan da Yazın</a>
           <button type="button" class="btn btn-ghost" id="modal-close-btn">Kapat</button>`
        : `<button type="button" class="btn btn-primary" id="modal-close-btn">Tamam</button>`;

    document.getElementById('modal-actions').innerHTML = actionsHtml;
    document.getElementById('custom-modal-overlay').classList.add('show');
    document.getElementById('modal-close-btn').onclick = () => hideModal();
}

document.addEventListener('DOMContentLoaded', () => {
    const overlay = document.getElementById('custom-modal-overlay');
    if (overlay) {
        overlay.addEventListener('click', (e) => {
            if (e.target.id === 'custom-modal-overlay') hideModal();
        });
    }
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape') hideModal();
    });
});