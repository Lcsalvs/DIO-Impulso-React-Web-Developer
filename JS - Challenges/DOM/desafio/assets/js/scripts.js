const body = document.getElementsByTagName('body')[0];
const h1 = document.getElementById('page-title');
const footer = document.getElementsByTagName('footer')[0];
const button = document.getElementById('btn');

const darkModeClass = 'dark-mode';

button.addEventListener('click', changeMode);

function changeMode() {
  changeClasses();
  changeText();
}

function changeClasses() {
  btn.classList.toggle(darkModeClass);
  h1.classList.toggle(darkModeClass);
  body.classList.toggle(darkModeClass);
  footer.classList.toggle(darkModeClass);
}

function changeText() {
  const lightMode = 'Light Mode';
  const darkMode = 'Dark Mode';

  if(body.classList.contains(darkModeClass)) {
    button.innerHTML = lightMode;
    h1.innerHTML = `${darkMode} ON`;
    return;
  }

    button.innerHTML = darkMode;
    h1.innerHTML = `${lightMode} ON`;
}