// let x;

// const arr = [28, 38, 44, 29, 109];

// let arr1, arr2;




// // // push() - thêm 1 giá trị vào cuối mảng
// // arr.push(100);

// // // // pop() - lấy ra giá trị cuối của mảng
// // // arr.pop();

// // // // unshift() - Add a value to the beginning of the array | Thêm 1 giá trị vào đầu mảng
// // arr.unshift(99);

// // slice() returns selected elements in an array, as a new array. Slice takes in the index of the first element and the index of the last element to be included in the new array.
// arr1 = arr.slice(1, 4); //cắt và lấy giá trị của mảng, nhưng không lấy điểm cuối của mảng đã cắt (vd: 1, 4 sẽ lấy giá trị từ điểm bắt đầu[1] - [3] chừa vị trí số [4])

// // // splice() works like slice() except it takes the index of the first element and the number of elements after that as a second argument. it also mutates the original array where slice() does not
// arr2 = arr.splice(1, 4); //giống với slice nhưng splice sẽ lấy cả giá trị của điểm cuối cùng, vd: 1, 4 sẽ lấy từ giá trị của điểm số [1] - [4]
 
// console.log(arr1); //[38, 44, 29]
// console.log(arr2); //[38, 44, 29, 109]


//BÀI 2: 
let x;

const fruits = ['apple', 'pear', 'orange'];
const berries = ['strawberry', 'blueberry', 'rasberry'];

//LỒNG MẢNG
// //Lồng mảng 'berries' vào mảng 'fruits' 
// fruits.push(berries);

//Cách lấy giá trị của mảng 'berries' nằm trong mảng 'fruits'
// ['apple', 'pear', 'orange', array(3)]
//     0        1        2        3
// x = fruits[3][1]; 

// console.log(x); //blueberry

// //Tạo 1 biến lồng cả 2 mảng lại
// let allFruits = [fruits, berries];
// x = allFruits[1][2];

// console.log(x);

// //HÀM NỐI MẢNG - Concat()
// x = fruits.concat(berries);

// console.log(x)

//HÀM KIỂM TRA PHẦN TỬ CÓ PHẢI LÀ MẢNG - isArray()
x = Array.isArray(fruits); //kiểm tra 'fruits' xem có phải là mảng không và trả về true khi đúng hoặc false khi sai

console.log(x); //true

