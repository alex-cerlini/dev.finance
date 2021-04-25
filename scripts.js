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

const transactions = [
    {
        id: 1,
        description: 'Luz',
        amount: -50000,
        date: '25/04/2021',
    },
]

const Transaction = {
    incomes() {
        // somar as entradas
    },
    expenses() {
        // somar as saídas
    },
    total() {
        // entradas - saídas
    }
}