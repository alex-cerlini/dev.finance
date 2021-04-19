Modal = {
    open() {
        // Abrir modal
        // Adicionar classe active ao modal
        document.querySelector('.modal-overlay').classList.add('active');
    },
    close() {
        // Fechar modal
        // Remover classe active do modal
        document.querySelector('.modal-overlay').classList.remove('active')
    }
}