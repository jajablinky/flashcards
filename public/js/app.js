const showHint = document.getElementsByTagName('button')[1];
const hint = document.getElementsByClassName('hint')[0];
showHint.addEventListener('click', (e) => {
    hint.style.display = 'block';
    showHint.style.display = 'none';
});