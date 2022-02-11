import './css/styles.css';
import { fetchCountries } from './api/fetchCountries';

const DEBOUNCE_DELAY = 300;

fetchCountries('peru')
  .then(data => {
    console.log(data);
  })
  .catch(error => {
    console.log(error);
  });
