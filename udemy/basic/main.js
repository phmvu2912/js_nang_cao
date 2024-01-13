const myCountry = "Vietnam";
let population = 90;
const isIsland = true;
let language;

console.log(myCountry);
console.log(`Ở ${myCountry} ${isIsland ? 'có đảo' : 'không có đảo'}`);

let half = population % 50;
console.log(`Nếu dân số ở ${myCountry} bị chia 1 nửa thì dân số còn lại là: ${half}`);

population++;
console.log(population);

let Finland = 6;
// if(myCountry > Finland) {

// }

console.log((population >= 33) ? "Vietnam đông dân hơn" : "Vietnam có số dân thấp hơn số dân trung bình của 1 quốc gia");

const description = `${myCountry} is in Asia, and it's 90 millions people speak Vietnamese!`;
console.log(description)


if(population >  33) {
    console.log("Vietnam's population is 22 million below average")
}