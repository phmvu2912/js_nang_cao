// Lab 1.1.1 & 1.1.2: Tạo 1 mảng cầu thủ cho mỗi đội & mỗi đội có 1 biến GK đầu tiên và 1 mảng chứa các cầu thủ còn lại
let gk;
let team1, draw, team2;


//Đội 1
const Bayern_Muchen= [
    gk = "Neuer",
    fieldPlayers = [
        'Davies', 
        'Muller', 
        'Lewandowski',
        'Kimmich'
    ]
];

//Đội 2
const Man_Utd = [
    gk = "DeGea",
    fieldPlayers = [
        'Maguire', 
        'Casemiro', 
        'Rashford',
        'Bruno'
    ]
];

//Lab 1.1.3: Tạo 1 mảng bao gồm cầu thủ 2 đội
const allPlayers = [Bayern_Muchen, Man_Utd];

//Lab 1.1.4: tạo 1 mảng mới gồm các cầu thủ ban đầu của 1 đội rồi thay 3 cầu thủ mới vào

let subs = [
    'Thiago', 
    'Coutinho',
    'Perisic'
];

//Sử dụng hàm concat()
// const players1Final = Bayern_Muchen.concat(subs);

//Hoặc sử dụng toán tử spread (...)
const players1Final = [...Bayern_Muchen, ...subs];
//Lab 1.1.6: Tạo 1 hàm nhận vào 1 số cầu thủ ghi bàn (sử dụng toán tử spread) và in ra tên cầu thủ đó cùng với số cầu thủ đã ghi bàn

function printGoals(playerScored) {

}

console.log(players1Final);