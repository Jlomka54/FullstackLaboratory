import { updateActiveSlideColor } from './about-me';

const themePicker = document.querySelector('.theme-picker_container');

document.body.dataset.theme =
  JSON.parse(localStorage.getItem('currentTheme')) || 'red';

themePicker.addEventListener('click', updateThemeColor);

function updateThemeColor(event) {
  if (event.target.nodeName !== 'BUTTON') {
    return;
  }

  const pickedColor = event.target.dataset.color;

  document.body.dataset.theme = pickedColor;
  updateActiveSlideColor();

  localStorage.setItem('currentTheme', JSON.stringify(pickedColor));
}
