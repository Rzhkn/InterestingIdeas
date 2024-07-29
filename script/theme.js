//Определение темы страницы на момент загрузки
const theme = document.querySelector("#theme-link");
const icon = document.querySelector("#theme");
if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
    theme.href = "../style/dark.css";
    icon.style.backgroundImage = 'url("../IMG/lightTheme.svg")';
} else {
    icon.style.backgroundImage = 'url("../IMG/darkTheme.svg")';
}

//Определение темы страницы при ее изменении в настройках браузера
window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', event => {
    const newColorScheme = event.matches ? "dark" : "light";

    if (newColorScheme == "dark") {
        theme.href = "../style/dark.css";
        icon.style.backgroundImage = 'url("../IMG/lightTheme.svg")';
    }
    else {
        theme.href = "../style/light.css";
        icon.style.backgroundImage = 'url("../IMG/darkTheme.svg")';
    }
});

//Функция для изменения темы страницы по нажатию на кнопку
function funTheme() {
    if (icon.style.backgroundImage === 'url("../IMG/darkTheme.svg")') {
        theme.href = "../style/dark.css";
        icon.style.backgroundImage = 'url("../IMG/lightTheme.svg")';
    } else {
        theme.href = "../style/light.css";
        icon.style.backgroundImage = 'url("../IMG/darkTheme.svg")';
    }
}
