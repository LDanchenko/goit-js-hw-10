import './css/styles.css';
import { fetchCountries } from './js/api/fetchCountries';
import debounce from 'lodash.debounce';

const DEBOUNCE_DELAY = 300;
const input = document.querySelector('#search-box');

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
  }, 300),
);
