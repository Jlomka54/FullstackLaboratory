import { updateActiveSlideColor } from './about-me';

const themeColorBtns = document.querySelectorAll('button[data-color]');

document.body.dataset.theme =
  JSON.parse(localStorage.getItem('currentTheme')) || 'red';

themeColorBtns.forEach(btn => btn.addEventListener('click', updateThemeColor));

function updateThemeColor(event) {
  const pickedColor = event.target.dataset.color;
  document.body.dataset.theme = pickedColor;
  updateActiveSlideColor();

  localStorage.setItem('currentTheme', JSON.stringify(pickedColor));
}
