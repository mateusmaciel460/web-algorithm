let counter = 0;
let mensageCounter = document.querySelector('#mensage-counter');

function rent(id) {
    let game = document.querySelector(`#game-${id}`);
    let image = game.querySelector('img');
    let button = game.querySelector('button');

    statusButton(button, image);
    mensageCounter.textContent = `Total de filmes alugados: ${counter}`;
}

function statusButton(button, image) {
    let nameButtonPrimary = 'container__button--blue';
    let nameButtonSecondary = 'container__button--gray';

    if (button.classList[1] == nameButtonPrimary) {
        button.classList.add(nameButtonSecondary);
        button.classList.remove(nameButtonPrimary);

        image.classList.add('container__image--opacity');

        button.textContent = 'Devolver';
        counter++;
    } else {
        button.classList.add(nameButtonPrimary);
        button.classList.remove(nameButtonSecondary);

        image.classList.remove('container__image--opacity');

        button.textContent = 'Alugar';
        counter--;
    }
}