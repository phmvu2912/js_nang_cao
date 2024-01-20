// // let x;

// // const arr = [28, 38, 44, 29, 109];

// // let arr1, arr2;




// // // // push() - thêm 1 giá trị vào cuối mảng
// // // arr.push(100);

// // // // // pop() - lấy ra giá trị cuối của mảng
// // // // arr.pop();

// // // // // unshift() - Add a value to the beginning of the array | Thêm 1 giá trị vào đầu mảng
// // // arr.unshift(99);

// // // slice() returns selected elements in an array, as a new array. Slice takes in the index of the first element and the index of the last element to be included in the new array.
// // arr1 = arr.slice(1, 4); //cắt và lấy giá trị của mảng, nhưng không lấy điểm cuối của mảng đã cắt (vd: 1, 4 sẽ lấy giá trị từ điểm bắt đầu[1] - [3] chừa vị trí số [4])

// // // // splice() works like slice() except it takes the index of the first element and the number of elements after that as a second argument. it also mutates the original array where slice() does not
// // arr2 = arr.splice(1, 4); //giống với slice nhưng splice sẽ lấy cả giá trị của điểm cuối cùng, vd: 1, 4 sẽ lấy từ giá trị của điểm số [1] - [4]
 
// // console.log(arr1); //[38, 44, 29]
// // console.log(arr2); //[38, 44, 29, 109]


// //BÀI 2: 
// let x;

// const fruits = ['apple', 'pear', 'orange'];
// const berries = ['strawberry', 'blueberry', 'rasberry'];

// //LỒNG MẢNG
// // //Lồng mảng 'berries' vào mảng 'fruits' 
// // fruits.push(berries);

// //Cách lấy giá trị của mảng 'berries' nằm trong mảng 'fruits'
// // ['apple', 'pear', 'orange', array(3)]
// //     0        1        2        3
// // x = fruits[3][1]; 

// // console.log(x); //blueberry

// // //Tạo 1 biến lồng cả 2 mảng lại
// // let allFruits = [fruits, berries];
// // x = allFruits[1][2];

// // console.log(x);

// // //HÀM NỐI MẢNG - Concat()
// // x = fruits.concat(berries);

// // console.log(x)

// //HÀM KIỂM TRA PHẦN TỬ CÓ PHẢI LÀ MẢNG - isArray()
// x = Array.isArray(fruits); //kiểm tra 'fruits' xem có phải là mảng không và trả về true khi đúng hoặc false khi sai

// console.log(x); //true

//04

// Challenge 1
// const arr = [1, 2, 3, 4, 5];

// // arr.push(0); //thêm 1 giá trị vào cuối mảng. trả về độ dài của mảng, không phải mảng
// // arr.reverse(); //Đảo ngược lại thứ tự mảng
// // arr.unshift(6); //giống push() nhưng thêm giá trị ở đầu mảng

// (arr.push(0)); //6
// (arr.reverse()); //5,4,3,2,1
// (arr.unshift(0)) // 7

// console.log(arr); //0, 0, 5, 4, 3, 2, 1


// // Challenge 2
// const arr1 = [1, 2, 3, 4, 5];
// //            0  1  2  3  4  
// const arr2 = [5, 6, 7, 8, 9, 10];


// // Solution 1
// const arr3 = arr1.slice(0, 4).concat(arr2); //SLICE cắt từ vị trí 0 - 3 và đc nối với mảng arr2 qua concat() tạo thành 1 mảng mới mà không làm hỏng mảng ban đầu
// //KQ: 1,2,3,5,6,7,8,9,10

// // Solution 2
// const arr4 = [...arr1, ...arr2]; //tạo 2 mảng mới bằng toán tử spread và đc gán trong 1 mảng khác (arr4) mà không làm thay đổi 2 mảng ban đầu (arr1 và arr2)
// //KQ: 1, 2, 3, 4, 5, 5, 6, 7, 8, 9, 10 
// arr4.splice(4, 1); //ở vị trí số 4 loại bỏ 1 phần tử trong mảng
// //KQ: 1, 2, 3, 4, 5, 6, 7, 8, 9, 10 
// console.log(arr4);

//===================================================

// //05: object literals
// let x;

// // Creating an object
// const person = {
//   name: 'John Doe',
//   age: 30,
//   isAdmin: true,
//   address: {
//     street: '123 Main st',
//     city: 'Boston',
//     state: 'MA',
//   },
//   hobbies: ['music', 'sports'],
// };

// //2 cách để truy cập thuộc tính của 1 đối tượng
// //c1: dùng .
// x = person.name; //John Doe
// x = person.address.city // Boston
// //c2: dùng []
// y = person['age']; //30
// y = person['hobbies'][1]; //[key][vị_trí_của_giá_trị] => Sports

// //cách update, add function, delete, create 1 thuộc tính
// //UPDATE
// person.name = 'Dao Vu';
// person['isAdmin'] = false;

// //DELETE
// delete person.age;

// //CREATE
// person.hasChildren = false;
// person.age = 21;


// //ADD FUNCTION
// person.greet = function() {
//     console.log(`Hello my name's ${person.name} and I'm ${person.age} years old`);
// }
// const bio = person.greet()
// console.log(bio);

//====================================================
//06: object-spread-methods

// let x;

// // // Create object using the object constructor
// const todo = new Object();

// todo.id = 1;
// todo.name = 'Buy Milk';
// todo.completed = false;

// x = todo;

//Object lồng vào nhau
// const person = {
//     address : {
//         coords: {
//             lat: 42.5454677,
//             lng: -71.35984
//         }
//     }
// }
// x = person.address.coords.lat
// console.log(x)

// const obj1 = { a: 1, b: 2 };
// const obj2 = { c: 3, d: 4 };

// // Spread operator
// const obj3 = { ...obj1, ...obj2 }; //1, 2, 3, 4
// // Same as using ...
// const obj4 = Object.assign({}, obj1, obj2); //phương thức Object.assign() tạo ra đối tượng đích {} rỗng bên trongđể đưa obj1 và 2 tạo thành 1 đối tượng mới, 

// console.log(obj3)
// console.log(obj4)

//MẢNG ĐỐI TƯỢNG - ARRAY OBJECTS

// const todos = [
//     {id: 1, name: "Buy Milk"},
//     {id: 2, name: "Take out trash"},
//     {id: 3, name: "Hang out"},
// ];

// x = todos[1].name;


// x = Object.keys(todo); //trả về 1 mảng chứa các thuộc tính (keys)
// x = Object.keys(todo).length; //Lấy độ dài của 1 đối tươngj
// x = Object.values(todo); //trả về 1 mảng chưa các giá trị (values)
// x = Object.entries(todo); //trả về mảng có chứa những cặp [key - value]
// x = todo.hasOwnProperty('age'); //kiểm tra 1 đối tượng xem có thuộc tính (keys) nào hay không
// console.log(x)

//=====================================================

//07: destructuring-naming
// Setting object properties with the same name as a variable
const firstName = 'John';
const lastName = 'Doe';
const age = 30;

const person = {
  firstName,
  lastName,
  age,
};

// Destructuring object properties
const todo = {
    id: 1,
    title: 'Take out trash',
    user: {
      name: 'John',
    },
  };

  console.log(todo)
  
  const {
    id: todoId, // rename id to todoId
    title,
    user: { name }, // destructuring multiple levels
  } = todo;
  
  console.log(todoId, title, name );

// Destructuring arrays & using the rest/spread operator
const numbers = [23, 67, 33, 49, 52];

const [first, second, ...rest] = numbers;

console.log(first, second, rest);
