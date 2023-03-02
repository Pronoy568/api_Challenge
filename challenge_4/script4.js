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

challenge5.addEventListener("click", () => {
  location.href = `../challenge_5/challenge5.html`;
});

// copy code
function myFunction() {
  // Get the text field
  let copyText = document.getElementById("linkText");
  let inputField = document.getElementById("myInput");
  copyText.select();
  navigator.clipboard.writeText(copyText.value);

  // Alert the copied text
  alert("Copied the text: " + copyText.value);
  copyText.value = "";
  inputField.value = "";
}

let shortenBtn = document.getElementById("shortenBtn");

shortenBtn.addEventListener("click", () => {
  let inputField = document.getElementById("myInput").value;
  linkInfo(inputField);
});

const linkInfo = (urlLink) => {
  const url = `https://api.shrtco.de/v2/shorten?url=${urlLink}`;
  fetch(url)
    .then((res) => res.json())
    .then((data) => showLink(data));
};

let inputField = document.getElementById("myInput");
const generator = document.getElementById("generator");

const showLink = (data) => {
  if (data.ok) {
    generator.innerHTML = `
      <div class="text-center mt-12">
        <input
          class="shadow-lg shadow-gray-300 hover:shadow-gray-200 border border-slate-100 rounded-lg w-1/4 h-8 px-2 py-4 m-2"
          type="text" value=${
            data.result.full_short_link
              ? data.result.full_short_link
              : "<p>Enter Valid Link</p>"
          } id="linkText" placeholder="Copy Link">
        <button class="opacity-75 bg-gray-100 px-3 py-2 rounded-lg text-stone-900 m-2" onclick="myFunction()">Copy link</button>
      </div>
      `;
  } else {
    generator.innerHTML = `
      <div class="text-center mt-12 text-red-600">
        <p>${data.error}></p>
      </div>
      `;
    inputField.value = "";
  }
};
