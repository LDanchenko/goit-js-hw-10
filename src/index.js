import debounce from 'lodash.debounce';
import { Notify } from 'notiflix/build/notiflix-notify-aio';
import './sass/main.scss';
import { fetchCountries } from './js/api/fetchCountries';
import countryListItems from './js/components/countrylist.hbs';
import countryInfoItem from './js/components/countryinfo.hbs';
import { handleCountryData } from './js/handledata';

const DEBOUNCE_DELAY = 300;
const input = document.querySelector('#search-box');
const countryList = document.querySelector('.country-list');
const countryInfo = document.querySelector('.country-info');

input.addEventListener(
  'input',
  debounce(event => {
    renderMarkup(countryList, '');
    renderMarkup(countryInfo, '');
    getApiData(event);
  }, DEBOUNCE_DELAY),
);

function handleApiData(data) {
  if (data.length > 10) {
    Notify.info('Too many matches found. Please enter a more specific name.');
    return;
  }

  if (data.length >= 2 && data.length <= 10) {
    const countriesListItems = handleCountryData(data);
    renderMarkup(countryList, countryListItems(countriesListItems));
  }

  if (data.length === 1) {
    const countryData = handleCountryData(data);
    renderMarkup(countryInfo, countryInfoItem(countryData[0]));
  }
}

function renderMarkup(el, markup) {
  el.innerHTML = markup;
}

function handleError(error) {
  if (error === 404) {
    Notify.failure('Oops, there is no country with that name');
  } else {
    Notify.failure('Oops, an error occurred. Please try again later');
  }
}

function getApiData(event) {
  const inputText = event.target.value.trim();
  if (inputText) {
    fetchCountries(inputText)
      .then(data => {
        handleApiData(data);
      })
      .catch(error => {
        handleError(error);
      });
  }
}
