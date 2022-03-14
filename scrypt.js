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
