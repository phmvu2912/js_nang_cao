const restaurant = {
    name : "Nha hang A",
    location : "Q.Nam Tu Liem, Hanoi, Vietnam",
    categories : ["Vietnames", "Vegetarian", "Organic"],
    starterMenu : ["Salad", "Garlic Bread", "Focaccia"],
    mainMenu : ["Pho", "Bun cha", "Bun bo"],
    openingHours : {
        thu : {
            open : 12,
            close : 22
        },
        fri : {
            open : 11,
            close : 23
        },
        sat : { //open 24/24
            open : 0,
            close : 24
        }
    }
}

// const {name, openingHours, categories} = restaurant;

// // console.log(name, openingHours, categories);

// const {name : restaurantName, openingHours : hours, categories : tags } = restaurant;

// console.log(restaurantName);

// console.log(`${restaurantName} có những loại đồ ăn như: ${tags} và thời gian mở cửa như sau: 
// Vào thứ 5: Thời gian mở cửa từ ${hours.thu.open}h - ${hours.thu.close}h
// Vào thứ 6: Thời gian mở cửa từ ${hours.fri.open}h - ${hours.fri.close}h
// Vào thứ 7: Thời gian mở cửa từ ${hours.sat.open}h - ${hours.sat.close}h`);

const mainMenu = [...restaurant.mainMenu, "Thit cho"];

const menu = [...restaurant.starterMenu, ...restaurant.mainMenu];
console.log(menu);