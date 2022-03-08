// function createPhonenumber(arr) {
//   let mask = "(xxx) xxx-xxxx";

//   arr.forEach((i) => {
//     mask = mask.replace("x", i);
//   });

//   return mask;
// }

// console.log(createPhonenumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 0]));

// function createPhonenumber(arr) {
//   let mask = "(xxx) xxx-xxxx";

//   for (let i = 0; i < arr.length; i++) {
//     mask = mask.replace("x", arr[i]);
//   }

//   return mask;
// }

// console.log(createPhonenumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 0]));

// function createPhonenumber(arr) {
//   return `(${arr.slice(0, 3).join("")}) ${arr.slice(3, 6).join("")}-${arr
//     .slice(6)
//     .join("")} `;
// }
// console.log(createPhonenumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 0]));

// function createPhonenumber(arr) {
//   let str = arr.join("");

//   return `(${str.substring(0, 3)}) ${str.substring(3, 6)} - ${str.substring(
//     6,
//     10
//   )}`;
// }

// console.log(createPhonenumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 0]));

// function createNumber(arr) {
//   let num1 = arr.splice(0, 3).join("");
//   let num2 = arr.splice(0, 3).join("");
//   let num3 = arr.splice(0, 4).join("");

//   let newNum = `(${num1}) ${num2}-${num3}`;
//   return newNum;
// }

// console.log(createNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 0]));
