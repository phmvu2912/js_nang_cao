let mess =  "";
const game = {
    Bayern_Muchen : [
        gk = 'Neuer',
        fieldPlayers = [
            'Davies',
            'Muller', 
            'Lewandowski', 
            'Kimmich'
        ]
    ],
    Man_Utd : [
        gk = 'DeGea',
        fieldPlayers = [
            'Maguire',
            'Bruno', 
            'Rashford', 
            'Casemiro'
        ]
    ],
    odds : {
        team1 : 6.5,
        draw : 3.25,
        team2 : 1.33
    },
    matchResult : '',

}

//3
let allPlayers = [game.Bayern_Muchen, game.Man_Utd];

//4
const subs = [
    'Thiago', 
    'Coutinho', 
    'Perisic'
]
let players1Final = [...game.Bayern_Muchen.concat(subs)];

//5

//6 
function printGoals(allPlayers) {
    let scored = {
        Muller : 1,
        Lewandowski : 3
    }

    console.log(scored)
}

//7 

const team1 = game.odds.team1;
const draw = game.odds.draw;
const team2 = game.odds.team2;

function runGame(team1, draw, team2) {
    if(team1 < draw && team1 < team2) {
        mess = "Team 1 is Winner";
    } 
    else if (team2 < draw && team2 < team1) {
        mess = "Team 2 is Winner";
    }
    else {
        mess = "Draw"
    }

    console.log(mess);
}

let kq = "Danh sách ghi bàn: " + printGoals(allPlayers);
console.log(kq);
runGame(team1, draw, team2);  

