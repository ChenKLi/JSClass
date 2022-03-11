// function hello() {
//   console.log("aaa");
//   console.log("aba");
//   console.log("aac");
// }

// hello();

// const hello2 = function hello(a, b) {
//   return a + b;
// };

// console.log(hello2(1, 2));

// let e = () => {
//   console.log("arrowhere");
// };

// e();

// function sayHello(a, b = 5, c = 8) {
//   console.log(a);
//   console.log(b);
//   console.log(c);
// }

// sayHello(123);

// function plus(a, b) {
//   let result = a + b;
//   return result;
// }

// console.log(plus(3, 9));

// function isAdult(age) {
//   return age >= 18;
// }

// console.log(isAdult(13));
// console.log(isAdult(20));

// function hello(n) {
//   if (n % 1) {
//     console.log("a");
//   } else {
//     console.log("b");
//   }
// }

// hello(5);

// function findLeapYear(year) {
//   if (year % 4 != 0 && (year % 100 == 0 || year % 400 != 0)) {
//     return "平年";
//   }
//   return "閏年";
// }

// console.log(findLeapYear(2019));
// console.log(findLeapYear(2000));
// console.log(findLeapYear(1996));

// forEach
// const list = [1, 2, 3, 4, 5];
// const NewList = [];
// list.forEach(function (x) {
//   NewList.push(x * 2);
// });

// console.log(NewList);

// for迴圈
// const list = [1, 2, 3, 4, 5];
// let result = [];

// for (let i = 0; i < list.length; i++) {
//   result[i] = list[i] * 2;
// }
// console.log(result);

// map
// const list = [1, 2, 3, 4, 5];

// const result = list.map(function (x) {
//   return x * 2;
// });

// console.log(result);

//include
// const list = ["a", "b", "c", "d", "e"];

// console.log(list.indexOf("y"));

let list = ["a", "b", "c", "d"];

list.forEach(function (x, y) {
  console.log(x, y);
});
