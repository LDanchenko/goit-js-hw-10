export function handleCountryData(data) {
  const countriesListItems = data.map(country => {
    const {
      flags: { svg },
      name: { official: officialName },
      capital,
      population,
      languages: languagesList,
    } = country;
    const languages = Object.values(languagesList);
    return {
      svg,
      officialName,
      capital,
      population,
      languages,
    };
  });
  return countriesListItems;
}
