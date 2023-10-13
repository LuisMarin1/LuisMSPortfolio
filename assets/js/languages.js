// Cambio de Idioma

const flagsElement = document.getElementById("flags");

const textToChange = document.querySelectorAll("[data-section]");

const changeLanguage = async (language) => {
  const requestJson = await fetch(`./assets/languages/${language}.json`);
  const texts = await requestJson.json();
  
  for (const element of textToChange){ 
    const section = element.dataset.section;
    const value = element.dataset.value;

    element.innerHTML = texts[section][value];
  }
};

flagsElement.addEventListener('click', (e) => {
  changeLanguage(e.target.parentElement.dataset.language);
});
