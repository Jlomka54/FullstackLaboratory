const currnetTheme = JSON.parse(localStorage.getItem('currentTheme')) || 'red';

document.body.dataset.theme = currnetTheme;
