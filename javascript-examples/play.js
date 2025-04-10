// operator examples

// spread operator
const numbers = [1, 2, 3];
const newNumbers = [...numbers, 4];
console.log(newNumbers);

// rest operator
const filter = (...args) => {
  return args.filter((el) => el === 1);
};
console.log(filter(1, 2, 3));

// destructuring
const person = {
  name: "Max",
};

const newPerson = {
  ...person,
  age: 28,
};

console.log(newPerson);

// destructuring arrays
const nums = [1, 2, 3];
[num1, , num3] = nums;
console.log(num1, num3);

// reference and primitive types
const user = {
  name: "Max",
};

const secondUser = user;
user.name = "Manu";
console.log(secondUser);

// spread operator
const people = {
  name: "Max",
};

const secondPeople = {
  ...people,
};

people.name = "Manu";

console.log(secondPeople);

// array functions
// map
const numso = [1, 2, 3];
const doubleNumArray = numbers.map((num) => {
  return num * 2;
});

console.log(numbers);

// filter
const filterNumArray = numbers.filter((num) => {
  return num === 1;
});

console.log(filterNumArray);

// reduce
const reduceNumArray = numbers.reduce((curResult, curValue) => {
  return curResult * curValue;
}, 1);

console.log(reduceNumArray);

// find

const findNumArray = numbers.find((num) => {
  return num === 1;
});

console.log(findNumArray);

// findIndex
const findIndexNumArray = numbers.findIndex((num) => {
  return num === 1;
});

console.log(findIndexNumArray);

// chaining
const chainNumArray = numbers
  .map((num) => {
    return num * 2;
  })
  .filter((num) => {
    return num === 2;
  });

console.log(chainNumArray);

// async code
const fetchData = () => {
  const promise = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("Done!");
    }, 1500);
  });
  return promise;
};

setTimeout(() => {
  console.log("Timer is done!");
  fetchData()
    .then((text) => {
      console.log(text);
      return fetchData();
    })
    .then((text2) => {
      console.log(text2+"2");
    });
}, 2000);
console.log("Hello!");
console.log("Hi!");
