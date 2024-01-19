// ARROW FUNCTION
// const addNumber = (a, b) => {
//     return a + b;
// };

// //Implicit Return
// const subtract = (a, b) =>  a - b ;

// //Create an object
// const newObj = () => ({
//     name: 'Dao Vu',
// }); 

// console.log(newObj);


// PARAMS - ARGUMENTS || THAMN SỐ - ĐỐI SỐ

// Default Params || Tham số mặc định
function registerUser(user = 'Bot') {
    // Old way - before using `=`
    // if (!user) {
    //   user = 'Bot';
    // }
  
    return user + ' is registered';
  }
  
  

// Rest Params:
//Khi truyền tham số trong 1 hàm, sử dụng ... sau tên biến sẽ cho phép đặt 1 só lượng biến tham số không xác định và gom chúng thành 1 mảng
function sum(...numbers) {
    let total = 0;
  
    for (const num of numbers) {
      total += num;
    }
  
    return total;
  }

//   console.log(sum(1, 2, 3)); //6

// Objects as params  || Khi tham số là đối tượng
// const user = {
//     id: 1,
//     name: 'John',
// };
// function loginUser(user) {
//     return `The user ${user.name} with the id of ${user.id} is logged in`;
// }

// console.log(loginUser(user));
// console.log(
//     loginUser({
//         id: 2,
//         name: 'Sara',
//     })
// );

// Arrays as params || Khi tham số là 1 mảng
// function getRandom(arr) {
//     const randomIndex = Math.floor(Math.random() * arr.length);
  
//     const item = arr[randomIndex];
  
//     console.log(item);
//   }
  
//   getRandom([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);


// GLOBAL FUNCTION SCOPE 

// // Global scope variable || Biến toàn cục
// const x = 100;

// console.log(x, 'in global');

// function run() {
//     // Access global vars in functions
//     console.log(window.innerHeight);
//     // Local scope
//     console.log(x, 'in function');
// }
// run();

// // Access global vars in blocks
// if (true) {
//     console.log(x, 'in block');
//   }

// function add() {
//     // Overwriting global x (variable shadowing) //Ghi đè giá trị biến toàn cục
//     const x = 1;
//     const y = 50;
//     console.log(x + y);
// }
  
// // Can not access a function scoped variable in global scope 
// // console.log(y);

// add();


// BLOCK SCOPE || BIẾN CỤC BỘ

// const x = 100;

// // An If statement is a block || Khối câu lệnh If là 1 "block"
// if (true) {
//   console.log(x);
//   const y = 200;
//   console.log(x + y);
// }

// // console.log(y); // ReferenceError: y is not defined

// // A loop is a block || 1 vòng lặp cũng là 1 block
// for (let i = 0; i <= 10; i++) {
//     console.log(i);
// }
// // console.log(i); // ReferenceError: i is not defined

// // Using var || Dùng var khi khai báo biến sẽ truy cập được từ bên trong block
// // if (true) {
// //     const a = 500;
// //     let b = 600;
// //     var c = 700; //used var
// //   }
  
// //   console.log(c);

// // var IS function scoped
// function run() {
//     var d = 100;
//     console.log(d);
//   }
  
//   run();
  
// // console.log(d);


// // NESTED SCOPE ||

// function first() {
//     const x = 100;
  
//     function second() {
//       const y = 200; //block scope
//       console.log(x + y);
//     }
  
//     // console.log(y); // can not access y in second()
  
//     second();
// }
  
// first();

// if (true) {
//     const x = 100;

//     if (x === 100) {
//         const y = 200;
//         console.log(x + y);
//     }

//     // console.log(y);
// }

//DECLARATION VS EXPRESSION || KHAI BÁO VÀ BIỂU THỨC


console.log(addDollarSign(100));
// Function Declaration || Khai báo hàm
function addDollarSign(value) {
    return '$' + value;
}

// When using declarations, you can invoke the function before the declaration. With expressions, you can not
// Khi khai báo hàm, bạn có thể gọi hàm trước khi khai báo(VD trên), còn đối với biểu thức thì không thể

// Function Expression
const addPlusSign = function (value) {
    return `+ ${value}`;
};

console.log(addPlusSign(200));


//iife giúp tạo nhanh 1 hàm


// FUNCTION CHALLENGES

//Challenges 1: Tạo 1 hàm quy đổi từ độ F -> độ C, có thể sử dụng arrow function (trong 1 dòng)
// Công thức quy đổi từ độ F sang C : (độ F - 32)*5/9 hoặc 0.555
const getCelsius = (temperatureF) => {
    return temperatureC = (temperatureF - 32) * 5/9;
}

console.log(getCelsius(99.5));


// Challenge 2: Tạo 1 arrow function nhận vào là 1 mảng và trả về  1 đối tượng có số nhỏ nhất và lớn nhất

const minMax = (...numbers) => {
    const max = Math.max(...numbers);
    const min = Math.min(...numbers);

    return objMinMax = {
        min: min,
        max: max
    }
}

console.log(minMax(0, 1, 2, 3, 5, 675467))

// Challenge 3: dùng iife (Biểu thức hàm được gọi ngay lập tức),
// lấy chiều dài và chiều rộng của hình chữ nhật, xuất nó ra bằng console một thông báo ngay khi tải trang.

console.log((function(length, width) {
    const rectangle = length * width;
    const output = `Hình chữ nhật có chiều dài là ${length} và chiều cao là ${width} có diện tích bằng ${rectangle}`;
    return output;
})(10, 5));