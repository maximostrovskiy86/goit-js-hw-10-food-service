import itemTpl from '../templates/item-menu.hbs';
import dataArray from '../menu.json';

const refs = {
  listItemMenu: document.querySelector('.js-menu'),
  themeCheckbox: document.querySelector('#theme-switch-toggle'),
  body: document.body,
}

const makeMenuMarkup = (dataArray) => {
  return dataArray.map(itemTpl).join('');
}

const menuMarkup = makeMenuMarkup(dataArray);
refs.listItemMenu.insertAdjacentHTML('beforeend', menuMarkup);


const themeColor = {
  LIGHT: 'light-theme',
  DARK: 'dark-theme',
};

const changeColorTheme = (e) => {
  const colorTheme = e.target.checked ? themeColor.DARK : themeColor.LIGHT;
  setColorDarkTheme(colorTheme);
  updateColorTheme(colorTheme);
}

refs.themeCheckbox.addEventListener('change', changeColorTheme);

const setColorDarkTheme = (colorTheme) => {
  localStorage.setItem('theme', colorTheme);
}

const updateColorTheme = (colorThemeBody) => {
  refs.body.className = colorThemeBody;
}

function start() {
  const data = localStorage.getItem('theme') || themeColor.LIGHT;
  refs.body.className = data;
  refs.themeCheckbox.checked = data === themeColor.DARK;
}

start();







