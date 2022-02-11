import './sass/main.scss';
import { fetchCountries } from './js/api/fetchCountries';
import debounce from 'lodash.debounce';
import countryListItems from './js/components/countrylist.hbs';

const DEBOUNCE_DELAY = 300;
const input = document.querySelector('#search-box');
const countryList = document.querySelector('.country-list');

input.addEventListener(
  'input',
  debounce(event => {
    const inputText = event.target.value.trim();
    if (inputText) {
      fetchCountries(inputText)
        .then(data => {
          console.log(data);
        })
        .catch(error => {
          console.log(error);
        });
    }
  }, DEBOUNCE_DELAY),
);
const moviesList = ['Yehuda Katz', 'Alan Johnson', 'Charles Jolley'];
countryList.innerHTML = countryListItems(moviesList);
