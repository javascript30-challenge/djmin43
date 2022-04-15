const dogs = [
  { name: "Snickers", age: 2 },
  { name: "hugo", age: 8 },
];

function makeGreen() {
  const p = document.querySelector("p");
  p.style.color = "#BADA55";
  p.style.fontSize = "50px";
}

// Regular
console.log("hello");

// Interpolated
console.log("hello i am %s string", "austin");

// Styled
console.log("%c i am some great text", "font-size:50px");

// warning!
console.warn("oh no");

// Error :|
console.error("shit!");

// Info
console.info("crocodiles eat 3-4 people per year");

// Testing
console.assert(1 === 1, "that is wrong");

// clearing
console.clear();

// Viewing DOM Elements
const p = document.querySelector("p");
console.dir(p);

// Grouping together
dogs.forEach((dog) => {
  console.group(`${dog.name}`);
  console.log(`${dog.name} is austin`);
  console.groupEnd(`${dog.name}`);
});

// counting
console.count("Wes");

// timing
console.time("fetching data");
fetch("https://api.github.com/users/wesbos")
  .then((data) => data.json)
  .then((data) => {
    console.timeEnd("fetching data");
  });
