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
    {
        id: 2,
        description: 'Criação de WebSite',
        amount: 500000,
        date: '25/04/2021',
    },
    {
        id: 3,
        description: 'Internet',
        amount: -20000,
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

const DOM = {

    addTransaction(transaction, index) {
        const tr = document.createElement('tr')
        tr.innerHTML = DOM.innerHTMLTransaction()

    },
    innerHTMLTransaction() {

        const html = `
        <td class="description">Luz</td>
        <td class="expense">- R$ 500,00</td>
        <td class="date">11/04/2021</td>
        <td>
            <img src="./assets/minus.svg" alt="Remover Transação">
        </td>
                    `
        return html
    }
}