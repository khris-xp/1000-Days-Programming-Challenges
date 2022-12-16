let clickButton = document.getElementById('play-button');
let message = document.getElementById('message');

function showMessage() {
    message.innerHTML = `<h1>I'm Clicked!!!</h1>`
}

clickButton.addEventListener('click', showMessage);