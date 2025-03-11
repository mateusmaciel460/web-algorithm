let listFriends = [];
let showFriends = document.querySelector('#show-friends');
let showFriendsDrawn = document.querySelector('#show-friends-drawn');
let mensageError = document.querySelector('#mensage-error');

function addFriend() {
    let friend = document.querySelector('#friend').value;
    let friendsLowerCase = listFriends.join(',').toLowerCase();
    let validationFriend = friendsLowerCase.includes(friend.toLowerCase());

    document.querySelector('#friend').value = '';
    mensageError.innerHTML = '';

    if (friend == '') {
        mensageError.innerHTML = `<span class='container__span--danger'>Preencha o campo (amigo)</span>`;
        return;
    }

    if (validationFriend) {
        mensageError.innerHTML = `<span class='container__span--danger'>${friend} já foi adicionado</span>`;
        return;
    }

    if ((listFriends.length + 1) > 3) {
        document.querySelector('#button-drawn-friend').removeAttribute('disabled');
    }

    listFriends.push(friend);
    showFriends.textContent = `${listFriends.join(', ')}`;
}

function drawnFriends() {
    getFriendsOrderRandom(listFriends);
    showFriendsDrawn.innerHTML = '';

    for (let i = 0; i < listFriends.length; i++) {
        if (i == listFriends.length - 1) {
            showFriendsDrawn.innerHTML += `${listFriends[i]} -> ${listFriends[0]}<br/>`;
        } else{
            showFriendsDrawn.innerHTML += `${listFriends[i]} -> ${listFriends[i + 1]}<br/>`;
        }
    }

    document.querySelector('#button-restart').removeAttribute('disabled');
}

function getFriendsOrderRandom(list) {
    list.sort(() => Math.random() - 0.5);
}

function restart() {
    listFriends = [];
    document.querySelector('#button-restart').setAttribute('disabled', true);
    document.querySelector('#button-drawn-friend').setAttribute('disabled', true);

    mensageError.innerHTML = '';
    showFriends.textContent = 'Nenhum amigo adicionado';
    showFriendsDrawn.textContent = 'Nenhum sorteio realizado';
}