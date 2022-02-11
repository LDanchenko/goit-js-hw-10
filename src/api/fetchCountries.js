const BASIC_URL = 'https://restcountries.com/v3.1/name/';

export function fetchCountries(name) {
  return fetch(`${BASIC_URL}${name}`).then(response => {
    if (!response.ok) {
      console.log(response.status);
    }
    return response.json();
  });
}
