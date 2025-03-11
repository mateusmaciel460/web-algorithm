let elementProjects = document.querySelector('#element-projects');
let listProjects = [
    { idProject: 1, imgProject: 'HT1FLRk6/001.png', pathProject: 'number-secret', nameProject: 'Número Secreto' },
    { idProject: 2, imgProject: 'sDFtMW7/002.png', pathProject: 'drawn-numbers', nameProject: 'Sorteador' },
    { idProject: 3, imgProject: '5Xh7jJcc/003.png', pathProject: 'games', nameProject: 'Games' },
    { idProject: 4, imgProject: 'XrZG07CZ/004.png', pathProject: 'store-online', nameProject: 'Loja Online' },
    { idProject: 5, imgProject: 'LzzPc1cQ/006.png', pathProject: 'ticket-online', nameProject: 'Ingresso Online' },
    { idProject: 6, imgProject: 'LXjRbHTH/005.png', pathProject: 'friend-secret', nameProject: 'Amigo Secreto' },
    { idProject: 7, imgProject: 'YBK1j48D/007.png', pathProject: 'project-base', nameProject: 'Projeto Base' }
];

function showListProjects() {
    listProjects.forEach((project) => {
        elementProjects.innerHTML += `
            <div class="container__layer container__vertical">
                <img src="https://i.ibb.co/${project.imgProject}" alt="Imagem padrão" class="container__image"/>
                <p class="container__text">${project.nameProject}</p>
                <button class="container__button container__button--blue">
                    <a href="${project.pathProject}/" target="_blank" class="container__link">Acessar</a>
                </button>
            </div>`;
    });
}

showListProjects();