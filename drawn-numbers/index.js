let mensageResult = document.querySelector('#mensage-result');
let mensageError = document.querySelector('#mensage-error');

function drawn() {
    let numberMin = document.querySelector('#min').value;
    let numberMax = document.querySelector('#max').value;
    let amount = document.querySelector('#amount').value;

    let diffNumbers = (numberMax - numberMin) + 1;

    let listNumberRandom = [];
    let numberRandom;

    mensageError.innerHTML = '';
    if (diffNumbers < amount) {
        mensageError.innerHTML = `
            <span class='container__span--danger' id='mensage-error'>
                A quantidade deve ser igual ou menor que ${diffNumbers}
            </span>
        `;
        return;
    }

    if ((numberMin || numberMax || amount) == '') {
        mensageError.innerHTML = `
            <span class='container__span--danger'>
                Preencha todos os campos
            </span>
        `;
        return;
    }

    for (let i = 0; i < amount; i++) {
        numberRandom = drawNumberRandom(numberMax, numberMin);

        while (listNumberRandom.includes(numberRandom)) {
            numberRandom = drawNumberRandom(numberMax, numberMin);
        }

        listNumberRandom.push(numberRandom);
    }

    mensageResult.textContent = `Números sorteados: ${listNumberRandom.join(', ')}`;

    document.querySelector('#amount').value = '';
    document.querySelector('#button-restart').removeAttribute('disabled');
}   

function restart() {
    document.querySelector('#button-restart').setAttribute('disabled', true);
    document.querySelector('#min').value = '';
    document.querySelector('#max').value = '';
    document.querySelector('#amount').value = '';

    mensageError.innerHTML = '';
    mensageResult.textContent = 'Números sorteados: nenhum';
}

function drawNumberRandom(max, min) {
    return parseInt(Math.random() * (max - min + 1) + min) + 1;
}