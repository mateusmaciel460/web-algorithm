let listNumbers = [
    { idTicket: 1, nameTicket: 'galeria', amountTicket: 50 },
    { idTicket: 2, nameTicket: 'superior', amountTicket: 40 },
    { idTicket: 3, nameTicket: 'inferior', amountTicket: 70 },
];

let listTickets = document.querySelector('#list-tickets');
let mensageError = document.querySelector('#mensage-error');

function alertError(mensage) {
    mensageError.innerHTML = `
        <span class='container__span--danger'>${mensage}</span>
    `;
}

function showTicketInitial() {
    listNumbers.forEach((ticket) => {
        listTickets.innerHTML += `
            <li class='container__item'>
                ${ticket.amountTicket} - ${ticket.nameTicket}
            </li>
        `;
    });
}

function showTicketsAction(typeTicket, amount) {
    listTickets.innerHTML = '';
    mensageError.innerHTML = '';
    let textChair = amount > 1 ? 'cadeiras disponíveis' : 'cadeira disponível';

    listNumbers.forEach((ticket) => {
        if ((ticket.amountTicket == 0 || amount > ticket.amountTicket) && (ticket.nameTicket == typeTicket)) {
            alertError(`Não temos ${amount} ${textChair} para (${typeTicket}).`);
            return;
        }

        if (typeTicket == ticket.nameTicket) {
            ticket.amountTicket -= amount;
        }
    });

    showTicketInitial();
}

function addTicket() {
    let amount = document.querySelector('#amount').value;
    let typeTicket = document.querySelector('#type-ticket').value;

    document.querySelector('#amount').value = '';

    if (amount == '') {
        alertError('Preencha o campo de quantidade.');
        return;
    }

    if (amount <= 0) {
        alertError(`Digite um valor maior que 0, não ${amount}.`);
        return;
    }

    showTicketsAction(typeTicket, amount);
}

function restart() {
    
}

showTicketInitial();