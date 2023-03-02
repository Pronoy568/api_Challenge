function getElementsById(id) {
  const elements = document.getElementById(id);
  return elements;
}

const challenge1 = getElementsById("challenge1");
const challenge2 = getElementsById("challenge2");
const challenge3 = getElementsById("challenge3");
const challenge4 = getElementsById("challenge4");
const challenge5 = getElementsById("challenge5");
const challenge6 = getElementsById("challenge6");

challenge1.addEventListener("click", () => {
  location.href = `../challenge_1/challenge1.html`;
});

challenge2.addEventListener("click", () => {
  location.href = `../challenge_2/challenge2.html`;
});

challenge4.addEventListener("click", () => {
  location.href = `../challenge_4/challenge4.html`;
});

challenge5.addEventListener("click", () => {
  location.href = `../challenge_5/challenge5.html`;
});

// display data

const countryDataLoad = () => {
  const url = `https://restcountries.com/v3.1/all`;
  fetch(url)
    .then((response) => response.json())
    .then((data) => countryDisplay(data));
};

const countryDisplay = (countries) => {
  const showCountry = getElementsById("showCountry");
  showCountry.innerHTML = "";

  countries.map((country) => {
    const countryDiv = document.createElement("div");
    countryDiv.innerHTML = `
     <div class="w-3/4 mx-auto my-4 p-4 bg-slate-100 border border-slate-100 hover:bg-slate-200 rounded-lg shadow-lg shadow-gray-200">
       <img class="w-4/5 mx-auto" src=${country.flags.svg} />
       <h1 class="w-4/5 mx-auto my-3 text-2xl font-medium">Name: ${
         country.name.common
       }</h1>
       <h1 class="w-4/5 mx-auto text-xl">Capital: ${
         country.capital ? country.capital[0] : "No Capital"
       }</h1>
       <h1 class="w-4/5 mx-auto text-md">Region: ${country.region}</h1>
       <h1 class="w-4/5 mx-auto text-md">Population: ${country.population}</h1>
     </div>
    `;
    showCountry.appendChild(countryDiv);
  });
};

countryDataLoad();

const allCountry = getElementsById("allCountry");
const asiaCountry = getElementsById("asiaCountry");
const EuropeCountry = getElementsById("EuropeCountry");

allCountry.addEventListener("click", () => {
  countryDataLoad();
});

asiaCountry.addEventListener("click", () => {
  asiaCountryLoad();
});

EuropeCountry.addEventListener("click", () => {
  EuropeCountryLoad();
});

const asiaCountryLoad = () => {
  const url = `https://restcountries.com/v3.1/region/Asia`;
  fetch(url)
    .then((response) => response.json())
    .then((data) => countryDisplay(data));
};

const EuropeCountryLoad = () => {
  const url = `https://restcountries.com/v3.1/region/europe`;
  fetch(url)
    .then((response) => response.json())
    .then((data) => countryDisplay(data));
};
