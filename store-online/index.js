let priceGeneral = 0;
let listProduct = document.querySelector('#list-products');
let resultPriceGeneral = document.querySelector('#result-price-general');
let mensageError = document.querySelector('#mensage-error');

function addProduct() {
    let amount = document.querySelector('#amount').value;
    let product = document.querySelector('#product').value;
    let nameProduct = product.split('-')[0];
    let priceProduct = parseInt(product.split('R$ ')[1]);
    let priceFinal = priceProduct * amount;

    mensageError.innerHTML = '';
    document.querySelector('#amount').value = '';

    // Validation field
    if (amount == '') {
        mensageError.innerHTML = `<span class='container__span--danger'>Preencha o campo de quantidade</span>`;
        return;
    }

    // Validation amount
    if (amount < 1) {
        mensageError.innerHTML = `<span class='container__span--danger'>${amount} de quantidade, negada!</span>`;
        return;
    }

    listProduct.innerHTML += `
        <li class="container__item">
            <span class="container__emphasis">${amount}x</span>
            ${nameProduct}
            <span class="container__emphasis">R$ ${priceFinal}</span>
        </li>
    `;

    priceGeneral += priceFinal;
    resultPriceGeneral.textContent = `R$ ${priceGeneral}`;
    document.querySelector('#button-restart').removeAttribute('disabled');
}

function showMessageError(rule, mensage) {
    return rule ? mensageError.innerHTML += `${mensage}` : '';
}

function restart() {
    document.querySelector('#button-restart').setAttribute('disabled', true);
    listProduct.innerHTML = '';
    resultPriceGeneral.textContent = 'R$ 0';
    mensageError.innerHTML = '';
    priceGeneral = 0;
}