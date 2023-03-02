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
  location.href = `./challenge_1/challenge1.html`;
});

challenge2.addEventListener("click", () => {
  location.href = `./challenge_2/challenge2.html`;
});

challenge3.addEventListener("click", () => {
  location.href = `./challenge_3/challenge3.html`;
});

challenge4.addEventListener("click", () => {
  location.href = `./challenge_4/challenge4.html`;
});

challenge5.addEventListener("click", () => {
  location.href = `./challenge_5/challenge5.html`;
});
