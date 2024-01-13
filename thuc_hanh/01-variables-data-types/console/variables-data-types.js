// 01: CONSOLE:
// // // Log number
// // console.log(100);

// // // Log string
// // console.log('Hello World');

// // Log a variable
// const x = 100;
// console.log(x);

// // // Group console commands
// // console.group('simple');
// // console.log(x);
// // console.error('Alert');
// // console.warn('Warning');
// // console.groupEnd();

// // Add CSS to logs
// const styles = 'padding: 10px; background-color: white; color: green';
// console.log('%cHello World', styles);

// // Log multiple values
// console.log(20, 'Hello', true);

// // Log object as table
// console.table({ name: 'Brad', email: 'brad@gmail.com' });

// BÀI 2: COMMENT
// Comment 1 dòng
//============================================

//02: comments-shortcuts
/*
Comment nhiều dòng
console.log(100);

console.log('Hello World');

console.log(20, 'Hello', true);
*/
//===========================================

// 03: variables
// dùng var, let , const
// hạn chế dùng var

// let firstName = 'John';
// const lastName = 'Doe';
// let age = 30;

// console.log(firstName + ' ' + lastName + ' ' + age);

// QUY TẮC ĐẶT TÊN
// - CÁC CHỮ CÁI TỪ A - Z, SỐ, GẠCH CHÂN VÀ DẤU $
// - KHÔNG THỂ BẮT ĐẦU BẰNG CHỮ SỐ

// Multi-Word Formatting
// firstName = camelCase
// first_name = underscore
// FirstName = PascalCase
// firstname = lowercase

// Object 

// const personA = {
//     name: "John",
//     age: 30,
//     hasBike: true,
//     subject: "Js Nâng Cao"
// }

// const personB = {
//     name: "Brad",
// }

// personB.age = 35;
// personB.hasBike = false;
// personB.subject = "ECMA Script";

// console.log(personA);
// console.log(personB);


// // Khai báo nhiều giá trị cùng lúc
// let a, b, c;
// //=====================================================

// //04: data-types

// //kiểu Strings
// let string = "Dao Vu"; //"" | ''

// //kiểu Number
// let number = 1;

// //kiểu Boolean
// let isNumber = true; //đặt tên biến boolean bắt đầu với từ has hoặc is (vd: isNumber, hasMarried)

// //kiểu Null
// let apNumber = null;

// //kiểu Undefined
// const score = undefined;

// //hàm
// function sayHello() { //hàm thường được đặt tên theo động từ (vd: sayHello(), getId(),...)
//     console.log("Hello");
// }
// const output = sayHello();

// //typeof 
// console.log(typeof output); //trả về tên kiểu dữ liệu. 

//=====================================================

//05: stack heap

const name = 'John';
const age = 30;

const person = {
    name: 'Brad',
    age: 40,
};

let newName = name;
newName = 'Jonathan';

let newPerson = person;
person.name = "Bradley";

console.log(person, newPerson);

//======================================================

//06: type conversion

let amount = 'Hello';
//chuyển đổi từ chuỗi sang số
amount = parseInt(amount);
amount = +amount;
amount = Number(amount);
//=> NaN, type: Number

//chuyển đổi số sang chuỗi
amount = amount.toString();
amount = String(amount);

//chuỗi -> số thập phân
amount = parseFloat(amount);

//số -> boolean
amount = Boolean(amount);

console.log(amount, typeof amount);

// Ways to get NaN
console.log(Math.sqrt(-1));
console.log(1 + NaN);
console.log(undefined + undefined);
console.log('foo' / 3);

//==================================================

//07: