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
const data = [
  {
    _id: "60795d4e0489a32f948c4167",
    name: "Honda Sedan",
    price: "132",
    description:
      "Vehicle Type: Sedan, Doors: 2, Seats: 2, Luggage: 2 Suitcases / 2 Bags, Transmission: Automatic",
    imageURL: "https://i.ibb.co/54WzQjR/Honda.png",
  },
  {
    _id: "60795e440489a32f948c4168",
    name: "MitoSedan",
    price: "221",
    description:
      "Vehicle Type: Sedan, Doors: 2, Seats: 2, Luggage: 2 Suitcases / 2 Bags, Transmission: Manual",
    imageURL: "https://i.ibb.co/802Rwsq/Mito.png",
  },
  {
    _id: "60795fc20489a32f948c4169",
    name: "Isuzu Tacoma",
    price: "105",
    description:
      "Vehicle Type: Pickup Truck, Doors: 5, Seats: 4, Luggage: 6 Suitcases / 8 Bags, Transmission: Manual",
    imageURL: "https://i.ibb.co/SJK7QYs/isuzu.png",
  },
  {
    _id: "6079615d0489a32f948c416a",
    name: "Chevrolet Crossover",
    price: "434",
    description:
      "Vehicle Type: Crossover, Doors: 5, Seats: 7, Luggage: 5Suitcases / 5Bags, Transmission: Automatic",
    imageURL: "https://i.ibb.co/cv33wPv/2020-08-18-chevrolet-onix-rs.jpg",
  },
];

const car1 = getElementsById("car1");
const car2 = getElementsById("car2");
const car3 = getElementsById("car3");
const car4 = getElementsById("car4");

car1.innerHTML = `
<div>
  <img src=${data[0].imageURL} /> 
  <h1 class="text-2xl font-semibold mt-3">Car Name: ${data[0].name}</h1>
  <h1 class="my-2">Car Detail: ${data[0].description}</h1>
  <button class="bg-sky-900 p-3 rounded text-white">Car Price: ${data[0].price}</button>
</div>
`;

car2.innerHTML = `
<div>
  <img src=${data[1].imageURL} /> 
  <h1 class="text-2xl font-semibold mt-3">Car Name: ${data[1].name}</h1>
  <h1 class="my-2">Car Detail: ${data[1].description}</h1>
  <button class="bg-sky-900 p-3 rounded text-white">Car Price: ${data[1].price}</button>
</div>
`;

car3.innerHTML = `
<div>
  <img src=${data[2].imageURL} /> 
  <h1 class="text-2xl font-semibold mt-3">Car Name: ${data[2].name}</h1>
  <h1 class="my-2">Car Detail: ${data[2].description}</h1>
  <button class="bg-sky-900 p-3 rounded text-white">Car Price: ${data[2].price}</button>
</div>
`;

car4.innerHTML = `
<div>
  <img class="w-11/12 rounded-lg" src=${data[3].imageURL} /> 
  <h1 class="text-2xl font-semibold mt-4">Car Name: ${data[3].name}</h1>
  <h1 class="my-2">Car Detail: ${data[3].description}</h1>
  <button class="bg-sky-900 p-3 rounded text-white">Car Price: ${data[3].price}</button>
</div>
`;
