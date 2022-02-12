export function handleCountryData(data) {
  return data.map(country => {
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
}
