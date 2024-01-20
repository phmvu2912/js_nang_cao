// IF STATEMENTS

// If Statement Syntax
// if (true) {
//     console.log('This is true');
// }

// if (false) {
//     console.log('This is NOT true');
// }
  

// Evaluation expressions
// const x = 10;
// const y = 5;

// // if (x >= y) {
// //   console.log(`${x} lớn hơn hoặc bằng ${y}`);
// // }

// // if (x === y) {
// //   console.log(`${x} is equal to ${y}`);
// // } else {
// //   console.log(`${x} is NOT equal to ${y}`);
// // }

// // Block scope
// if (x !== y) {
//     const z = 20;
//     console.log(`${z} is 20`);
// }
  
// // console.log(z); // Throw error

// // Shorthand If/Else || Câu lệnh if/else viết tắt 
// if (x >= y)
//   console.log(`${x} is greater than or equal to ${y}`),
//     console.log('This is true');
// else console.log('This is false');


// IF ELSE NESTING

// const d = new Date(10, 30, 2022, 6, 0, 0);
// //                  m / d / y  / h
// const hour = d.getHours();

// if (hour < 12) {
//     console.log('Good Morning');
// } else if (hour < 18) {
//     console.log('Good Afternoon');
// } else {
//     console.log('Good Night');
// }

// // Nested If || if lồng nhau
// if (hour < 12) {
//     console.log('Good Morning');
  
//     if (hour === 6) {
//       console.log('Wake Up!');
//     }
// } else if (hour < 18) {
//     console.log('Good Afternoon');
// } else {
//     console.log('Good Night');
  
//     if (hour >= 20) {
//       console.log('zzzzzzzz');
//     }
// }
  
// if (hour >= 7 && hour < 15) {
//     console.log('It is work time!');
// }
  
// if (hour === 6 || hour === 20) {
//     console.log('Brush your teeth!');
// }


// SWITCHES

// const d = new Date(2022, 1, 10, 19, 0, 0);
// const month = d.getMonth();
// const hour = d.getHours();

// // Immediate value evaluation
// switch (month) {
//   case 1:
//     console.log('It is January');
//     break;
//   case 2:
//     console.log('It is February');
//     break;
//   case 3:
//     console.log('It is March');
//     break;
//   default:
//     console.log('It is not Jan, Feb or March');
// }

// // Range evaluation
// switch (true) {
//     case hour < 12:
//         console.log('Good Morning');
//         break;
//     case hour < 18:
//         console.log('Good Afternoon');
//         break;
//     default:
//         console.log('Good Night');
// }


// CACULATOR CHALLENGE

// const caculator = (num1, num2, operator) => {
//     let result;
//     switch(operator) {
//         case '+': {
//             result = num1 +  num2;
//             break;
//         } 
//         case '-': {
//             result = num1 -  num2;
//             break;
//         } 
//         case '*': {
//             result = num1 *  num2;
//             break;
//         } 
//         case '/': {
//             result = num1 /  num2;
//             break;
//         } 
//     }
//     console.log(result);
//     return result;
// }

// caculator(5, 5, '*');


// TRUTHY - FALSY

// Falsy Values:
// - false
// - 0
// - "" or '' (Empty string)
// - null
// - undefined
// - NaN

// Truthy Values:
// - Everything else that is not falsy
// - true
// - '0' (0 in a string)
// - ' ' (space in a string)
// - 'false' (false in a string)
// - [] (empty array)
// - {} (empty object)
// - function () {} (empty function)


// LOGICAL OPERATORS

// console.log(10 < 20 && 30 > 15 && 40 > 30); // Must all be true || Tất cả đều đúng
// console.log(10 > 20 || 30 < 15); // Only one has to be true || 1/2 vế đúng

// && - Will return first falsy value or the last value
let a;

a = 10 && 20;
a = 10 && 20 && 30;
a = 10 && 0 && 30;
a = 10 && '' && 0 && 30;

console.log(a);