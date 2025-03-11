let listaNumbers = [];
let numberMax = 5;
let numberMin = 1;
let numberSecret = getNumberSecret();
let numberKick;
let attempts = 1;

let mensageError = document.querySelector('#mensage-error');

function kick() {
    numberKick = document.querySelector('#kick').value;

    mensageError.innerHTML = '';

    // Validation
    if (numberKick == '') {
        mensageError.innerHTML += `
            <span class='container__span--danger'>
                Preencha o campo chute!
            </span>`;
        return;
    }

    if ((numberKick < numberMin) || (numberKick > numberMax)) {
        mensageError.innerHTML += `
            <span class='container__span--danger'>
                Número máximo: ${numberMax} | Número mínimo: ${numberMin}
            </span>
        `;

        return;
    }

    if (numberKick == numberSecret) {
        let textAttempt = attempts > 1 ? 'tentativas' : 'tentativa';
        let mensageResult = `Parabéns, você o número secreto ${numberSecret} com ${attempts} ${textAttempt}`;

        showMessageOnScreen('h1', 'Você acertou!');
        showMessageOnScreen('p', mensageResult);

        document.querySelector('#button-restart').removeAttribute('disabled');
        document.querySelector('#button-kick').setAttribute('disabled', true);
    } else {
        if (numberKick > numberSecret) {
            showMessageOnScreen('p', `O número secreto é menor que ${numberKick}`);
        } else {
            showMessageOnScreen('p', `O número secreto é maior que ${numberKick}`);
        }

        attempts++;
    }

    document.querySelector('#kick').value = '';
}

function getNumberSecret() {
    let numberRandom = parseInt(Math.random() * numberMax + numberMin);

    if (listaNumbers.length == numberMax) {
        listaNumbers = [];
    }

    if (listaNumbers.includes(numberRandom)) {
        return getNumberSecret();
    } else {
        listaNumbers.push(numberRandom);
        return numberRandom;
    }
}

function restart() {
    document.querySelector('#button-restart').setAttribute('disabled', true);
    document.querySelector('#button-kick').removeAttribute('disabled');
    numberSecret = getNumberSecret();
    attempts = 1;
    showMessageInitialOnScreen();
}

function showMessageOnScreen(tag, text) {
    let field = document.querySelector(tag);
    field.textContent = text;
}

function showMessageInitialOnScreen() {
    showMessageOnScreen('h1', 'Jogo do Número Secreto');
    showMessageOnScreen('p', `Escolha um número entre ${numberMin} e ${numberMax}`);
}

showMessageInitialOnScreen();