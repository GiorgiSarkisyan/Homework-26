// 1
let number = 99

function getJeradi (test) {
    if (test % 3 === 0) {
        return true;
    }
    else {
        return false;
    }
}
console.log(getJeradi(number))
// 2
let insert = "EUR"
function getCurrencySymbolFromCode (test) {
    if (test === "USD") {
        return "$";
    }
    else if (test === "GEL") {
        return "ლ";
    }
    else  (test === "EUR") 
        return "euro";
}
// 3
function transformToUppercase(str) {
    return str.toUpperCase();
  }
let text = "my name is john"
console.log(transformToUppercase(text))
// 4
function calculateProfit(sPrice, cPrice) {
    let profit = sPrice - cPrice;
    let profitPercentage = (profit / cPrice) * 100;
    return profitPercentage;
    }
let a = 2.80;
let b = 2.30;
let ab = calculateProfit(a,b)
console.log(ab)
// 5
const words = [0,1,2,3,4,5,6,7,8,9,10];
const result = words.filter(word => word % 2 === 0);
console.log(result);
// 6
const cars = [
    {
        name: "BMW",
        type: "sedan",
        capacity: 8,
    },
    { 
        name: "MERCEDES-BENZ",
        type: "sedan",
        capacity: 8,
        
    },
    {
        name: "ALFA ROMEO",
        type: "sedan",
        capacity: 8,
    }
]
function getName(text, str) {
    const foundCar = text.find((car) => car.name === str);
    return foundCar;
}
cars.find((item)=> {
    console.log(item.name)
})