function hideModal() {
    document.getElementById('custom-modal-overlay').classList.remove('show');
}

function showInfoModal(title, message) {
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