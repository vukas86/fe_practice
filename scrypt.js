// const niz = [9, 212, 213, 1, 204, 56];

// console.log(niz.at(5));
// console.log(niz.at(0));
// console.log(niz.at(-2));

// const rece = "cao kako si ti?";

// console.log(rece.at(4));
// console.log(rece.at(8));
// console.log(rece.at(-3));

/* var first = [1, 2];
var secon = [1, 2];

console.log(first == secon);

const pera = {
  poe: 4,
  score: () => {
    this.poe++;
    this.poe++;
    this.poe++;
  },
}; */

/* const str = () => ({
  ime: "jana",
});

console.log(str().name);
 */

// const arr = [];
// arr.x = 3;
// console.log(arr);

// const incremenet = document.querySelector("#increment");
// const count = document.querySelector("#count");
// const decremenet = document.querySelector("#decrement");

// incremenet.addEventListener("click", () => {
//   count.innerText = Number(count.innerText) + 1;
// });

// decremenet.addEventListener("click", () => {
//   count.innerText = Number(count.innerText) - 1;
// });

// const arr = [1, 2, 3, 43, 78, 992, 2, 4345, 1];
// const arr2 = [12, 34, 12];
// console.log(arr2.sort((a, b) => a - b));

// function hasDuplicates(nums) {
//   nums.sort((a, b) => a - b);

//   if (nums.length > 1) {
//     for (let i = 1, len = nums.length; i < len; i++) {
//       if (nums[i] == nums[i - 1]) return true;
//     }
//   }
//   return false;
// }

// console.log(hasDuplicates(arr));

const array = [10, 20, "30", [40], ["50"]];

const numArr = array.map(Number);
console.log(numArr);

const strArr = array.map(String);
console.log(strArr);

// To check if array incl.certain number
const array2 = [23, 12, 1, 27, 93, 122, 15, 21];

console.log(array2.includes(5));
console.log(array2.includes(23));
console.log(array2.includes(125));
console.log(array2.slice(-1));

// Random Numbers
function getRandomNum(min, max) {
  return Math.floor(Math.random() * (max - min) + min);
}

console.log(getRandomNum(23, 123));

// Mask Numbers

const fullNum = "8937498274283749328474983742";
const last8Dgtls = fullNum.slice(-8);
const maskedNum = last8Dgtls.padStart(fullNum.length, "*");

console.log(maskedNum);

/////////////////////////////////////////////////
// Array Destructuring

// const animals = ["Pas", "Macka", "Konj"];
// const dogVar = animals[0];
// const catVar = animals[1];
// const horseVar = animals[2];

// const [firstElement, secondElement, thirdElement] = animals;

// const [dog, cate, horse] = animals;
// console.log(cate);

// const fruits = ["Banana", "Jabuka", "Narandza"];

// const [, apple] = fruits;
// const [, , orange] = fruits;
// console.log(apple);

// class Alien {
//   constructor(name, phrase) {
//     this.name = name;
//     this.phrase = phrase;
//     this.spieces = "alien";
//   }
//   fly = () => {
//     console.lo("zzzzzzzzzzzzz");
//   };
// }

///////////////////////////////
// SORT an ARRAY
// const arr = [44, 81, 23, 2, 64, 25, 100];

// const sortArr = arr.sort((a, b) => {
//   return b - a;
// });
// console.log(sortArr);

///////////////////////
// Generator Function

// function* g1() {
//   console.log("Hello");
//   yield "Yield 1 ran";
//   console.log("Wolr");
//   yield "yeidel 2 ran";
//   return "Returned...";
// }

// var g = g1();
// // console.log(g.next().value);
// // console.log(g.next().value);
// // console.log(g.next().value);

// for (let val of g) {
//   console.log(val);
// }

// function* generatorExample() {
//   let a = 0;

//   yield 8;
//   yield 9;
//   yield 10;

//   return 11;
// }

// const generator = generatorExample();

// console.log(generator.next());
// console.log(generator.next());
// console.log(generator.next());
// console.log(generator.next());

// USAGE OF VARIABLES INSIDE GENERATORS

// I want: 1, 4, 9, 16, 25, 36...
// function* createSquaredNumGen(max) {
//   let n = 0;

//   while (n < max) {
//     n++;
//     yield n * n;
//   }
// }

// for (const n of createSquaredNumGen(10)) {
//   console.log(n);
// }

// Retrive random unique values from an array
// function* createUniqueRanGen(array) {
//   const available = array;

//   while (available.length !== 0) {
//     const randomIn = Math.floor(Math.random() * available.length);
//     const value = available[randomIn];

//     //remove the used value from the list of available values
//     available.splice(randomIn, 1);

//     yield value;
//   }
// }

// const names = ["Pera", "Mina", "Laza", "Rakel"];
// const uniqueNames = createUniqueRanGen(names);

// for (const name of uniqueNames) {
//   console.log(name);
// }
/////////////////////////////////
// MEMOIZATION

// const memoize = (fn) => {
//   const cache = {};
//   return function (...args) {
//     if (cache[args]) {
//       return cache[args];
//     }
//     const result = fn(...args);
//     cache[args] = result;
//     return result;
//   };
// };

// const ridicSlowFun = (num) => {
//   for (let i = 0; i <= num; i++) {
//     if (i == num) {
//       return i;
//     }
//   }
// };

// const fastFunction = memoize(ridicSlowFun);
// fastFunction(200000000);

// console.time();
// // console.log(ridicSlowFun(2000000000));
// console.log(fastFunction(20000000));
// console.timeEnd();

// console.time();
// // console.log(ridicSlowFun(2000000000));
// console.log(fastFunction(20000000));
// console.timeEnd();

////////////////////////////////////
// OBJECTS
// let car = {
//   name: "volvo",
//   year: 1989,
//   color: "red",
// };

// console.log(car);
// console.log("/////////////////////////////////////");
// car.type = "cabrio";

// Object.defineProperty(car, "type", {
//   writable: true,
//   enumerable: true,
//   configurable: false,
//   value: "gas",
// });

// let NewCar = {
//   model: "Yugo",
//   color: "green",
// };

// let ElectricCar = Object.create(NewCar);

// console.log(JSON.stringify(car));

// function Person(name, age) {
//   (this.name = name), (this.age = age);
// }

// let person1 = new Person("Pera", 35);
// let person2 = new Person("Zmka", 44);
// console.log(person1, person2);

////////////////////////////////////
// Array Methods
// Join
// const arr1 = ["cat", "mouse", "tiger"];
// console.log(arr1.join("-"));
// // Slice
// console.log(arr1.slice(0, 1));

const objectLiterals = {};

const objectConstructor = new Object();

const gimli = {
  name: "Gimli",
  race: "Dwarf",
  weapon: "axe",
  greet: function () {
    return `Hi, my name is ${this.name}`;
  },
};

gimli.age = 139;

gimli.fight = function () {
  return `Gimli attacks with an ${this.weapon}`;
};

gimli.weapon = "battle axe";

delete gimli.weapon;

console.log(gimli);
console.log(Object.keys(gimli));
