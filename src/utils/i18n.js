import en from '../locales/en.js';
import tr from '../locales/tr.js';

const locales = {en, tr};

const storedLang = localStorage.getItem('lang');
const defaultLang = document.documentElement.lang || 'en';
const lang = storedLang || defaultLang;

export function t(key) {
  return locales[lang][key] || key;
}

export function setLang(newLang) {
  localStorage.setItem('lang', newLang);
  document.documentElement.lang = newLang;
}
