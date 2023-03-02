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

challenge2.addEventListener("click", () => {
  location.href = `../challenge_2/challenge2.html`;
});

challenge3.addEventListener("click", () => {
  location.href = `../challenge_3/challenge3.html`;
});

challenge4.addEventListener("click", () => {
  location.href = `../challenge_4/challenge4.html`;
});

challenge5.addEventListener("click", () => {
  location.href = `../challenge_5/challenge5.html`;
});

// object
const person = {
  found: 2,
  message: "Found 2 persons",
  result: [
    {
      name: {
        common: "John",
        fullName: ["John", "Doe"],
      },
      age: 32,
      isMale: false,
      address: {
        street: "13/A St Joseph",
        house: 10,
      },
    },
    {
      name: {
        common: "Humayoun",
        fullName: ["Humayoun", "Kabir"],
      },
      age: 33,
      isMale: false,
      address: {
        street: "13/A St Lucia",
        house: 11,
      },
    },
  ],
};

const personLeft = getElementsById("personLeft");
const personRight = getElementsById("personRight");

personLeft.innerHTML = `
  <h1 class="text-2xl font-bold my-3 bg-gray-100">Person Name: ${person.result[0].name.common}</h1>
  <h1>age: ${person.result[0].age}</h1>
  <h1>Street: ${person.result[0].address.street}, House No: ${person.result[0].address.house}</h1>
`;

personRight.innerHTML = `
  <h1 class="text-2xl font-bold my-3 bg-gray-100">Person Name: ${person.result[1].name.common}</h1>
  <h1>age: ${person.result[1].age}</h1>
  <h1>Street: ${person.result[1].address.street}, House No: ${person.result[1].address.house}</h1>
`;
