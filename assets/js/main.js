'use strict';

function checkValidity(...inputs) {
    return inputs.every(item => item.className == 'valid');
}

let form = document.forms.myform;
let name = form.elements.name;
let birthyear = form.elements.birthyear;

let pautina = document.createElement('a');
pautina.className = 'pautina';
pautina.setAttribute('href', 'https://club.z-go.ru/')
pautina.innerHTML = 'pautina';

name.oninput = function () {
    if (name.value.length < 2) {
        name.className = 'error';
        name.nextElementSibling.className = 'error';
        name.nextElementSibling.innerHTML = `введи еще ${2 - name.value.length} символ${name.value.length == 1 ? '' : 'а'}`;
    } else {
        name.className = 'valid';
        name.nextElementSibling.className = 'valid';
        name.nextElementSibling.innerHTML = 'данные корректны';
    }
};

birthyear.oninput = function () {
    if (birthyear.value.length < 4) {
        birthyear.className = 'error';
        birthyear.nextElementSibling.className = 'error';
        birthyear.nextElementSibling.innerHTML = `введи еще ${4 - birthyear.value.length} символ${birthyear.value.length == 3 ? '' : 'а'}`;
    } else if (birthyear.value.length > 4) {
        birthyear.className = 'error';
        birthyear.nextElementSibling.className = 'error';
        birthyear.nextElementSibling.innerHTML = `нужно 4 символа`;
    } else if (new Date().getFullYear() - birthyear.value < 18) {
        birthyear.className = 'error';
        birthyear.nextElementSibling.className = 'error';
        birthyear.nextElementSibling.innerHTML = 'тебе нет 18 лет';
    } else {
        birthyear.className = 'valid';
        birthyear.nextElementSibling.className = 'valid';
        birthyear.nextElementSibling.innerHTML = `данные корректны`;
    }
};

form.oninput = function () {
    if (!checkValidity(name, birthyear) && document.body.contains(pautina)) pautina.remove();

    if (checkValidity(name, birthyear)) form.elements.button.className = 'active';
    else form.elements.button.className = '';
};

form.onsubmit = function (event) {
    event.preventDefault();

    if (!checkValidity(name, birthyear)) return;

    document.body.append(pautina);
};

birthyear.onkeydown = function (event) {
    if (event.key == '-' || event.key == '+' || event.code == 'KeyE') {
        event.preventDefault();
    }
};