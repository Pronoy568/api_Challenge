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

challenge3.addEventListener("click", () => {
  location.href = `../challenge_3/challenge3.html`;
});

challenge4.addEventListener("click", () => {
  location.href = `../challenge_4/challenge4.html`;
});

// display

const dataLoad = () => {
  const url = `https://api.adviceslip.com/advice`;
  fetch(url)
    .then((response) => response.json())
    .then((data) => showData(data));
};

const showTextQuotes = document.getElementById("showTextQuotes");
const showData = (data) => {
  showTextQuotes.innerText = `"${data.slip.advice}"`;
};

const clickBtn = document.getElementById("clickBtn");

clickBtn.addEventListener("click", () => {
  dataLoad();
});
dataLoad();

const searchBtn = document.getElementById("searchBtn");
const inputField = document.getElementById("inputField");

searchBtn.addEventListener("click", () => dataLoadApi());
inputField.addEventListener("keypress", (e) => {
  if (e.key === "Enter") {
    dataLoadApi();
  }
});

const dataLoadApi = () => {
  const inputField = document.getElementById("inputField").value;
  const url = `https://api.adviceslip.com/advice/search/${inputField}`;
  fetch(url)
    .then((response) => response.json())
    .then((data) => showQuotesInSearch(data))
    .catch(() => {
      showError();
    });
};

const showQuotesInSearch = (data) => {
  const slip = data.slips;
  let slips = slip.slice(0, 5);
  const searchTextQuotes = document.getElementById("searchTextQuotes");
  searchTextQuotes.innerText = "";
  for (let slip of slips) {
    const quotesDiv = document.createElement("div");

    quotesDiv.innerHTML = `
    <div class="rounded-lg bg-sky-200 border shadow-lg shadow-sky-100 mt-10 mb-10 w-3/4 mx-auto text-center">
        <p class="m-10 text-4xl font-bold text-lime-900">${slip.advice}</p>
    </div>
    `;
    searchTextQuotes.appendChild(quotesDiv);
  }
};

const showError = () => {
  const searchTextQuotes = document.getElementById("searchTextQuotes");
  searchTextQuotes.innerHTML = `
  <p class="mt-10 text-4xl font-bold text-red-500 text-center">
  search valid text
  </p>
  `;
};
