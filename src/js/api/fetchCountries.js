const BASIC_URL = 'https://restcountries.com/v3.1/name/';

export function fetchCountries(name) {
  return fetch(`${BASIC_URL}${name}?fields=name,capital,population,flags,languages`).then(
    response => {
      if (!response.ok) {
        return Promise.reject(response.status);
      }
      return response.json();
    },
  );
}
