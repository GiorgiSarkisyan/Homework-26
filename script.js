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
// მეშვიდე დავალება:შექმენით ცვლადები სადაც თქვენს შესახებ ინფორმაციას შეინახავთ (სახელი, გვარი, ასაკი, პროფესია);
//  ეცადეთ ააწყოთ წინადადება სადაც გამოიყენებთ ზემოთ შექმნილ ცვლადებს (მაგალითად: მე ვარ  ეკა კაპანაძე, ვარ 20 წლის, პროფესიით  ვარ არქიტექტორი)
//  დაწერეთ შემდეგი პირობა, თუ თქვენი ასაკი მეტია 18ზე დაბეჭდეთ კონსოლში , "სრულწლოვანია" სხვა დანარჩენ შემთხვევაში , "არ არის სრულწლოვანი" 
//  შექმენით 4 ცვლადი 2 string ტიპის, 2 number ტიპის მნიშნელობის, დაწერეთ შემდეგი მათემატიკური ოპერაციები ამ ცვლადებზე (+,-)
let person = {
    firstName: "giorgi",
    lastName: "Sarkisiani",
    age: 17,
    profession: "javascript programmer"
}
console.log(`my name is ${person.firstName} ${person.lastName}. i am ${person.age} years old. my profession is ${person.profession}.`)
if (person.age < 18) {
    console.log("არასრულწლოვანია")
}
else{
    console.log("სრულწლოვანია")
}
let cvladi1 = ""
let cvladi2 = ""
let cvladi3 = ""
let cvladi4 = ""
let stringi = "abdal"
let stringi2 = "ladba"
let telephonisNomeri = 555379429
let realuritelephonisNomeri = 555379429
let chxubi = telephonisNomeri + realuritelephonisNomeri
console.log(chxubi)
// 1. შექმენით  5 ელემენტიანი მასივი, რომლის შიგნითაც განთავსებული იქნება ფერები და ინდექსაციით დაბეჭდეთ ყველა ეემენტი; console.log(მასივი[მასივისინდექსი])
// 2. შექმენით ობიექტი  car, რომელსაც გადასცემთ შემდეგ პარამეტრებს name, type, price დაწერეთ წინადადება, სადაც ობიექტის  ცვლადების გამოყენებით აღწერთ მანქანას.
// 3. html დოკუმენტში შექმენით p ელემენტი, დაასელექთეთ აიდით და ჯავასკრიპტით მიანიჭეთ შემდეგი სტილები: 
// ფერი: ლურჯი;
// ფონტის ზომა: 30px;
// ასოებს შორის დაშორება: 20px;
// უკანა ფონის ფერი: შავი
// 4. დასელექთებული ელემენტის დაჭერაზე, შეცვალეთ უკანა ფონის ფერი.
let colors = ["red","white","black","orange","blue"]
console.log(colors[0])
console.log(colors[1])
console.log(colors[2])
console.log(colors[3])
console.log(colors[4])
let manqana = {
    name: "rolce royce",
    type: "sedan",
    price: "ori milioni dollari"
}
console.log(`es manqana aris gadasarevi ${manqana.name} da tan aris ${manqana.type} da tan ver daijereb da ${manqana.price} ghirs.`)
// დაწერეთ ფუნქცია რომელსაც გამოიძახებთ ღილაკის კლიკის დროს და შეცვლით h1ის უკანა ფონის ფერს და ფონტის ზომას;
// დაწრეთ ფუნქცია რომელიც არგუმენტად მიიღებს ორ პარამეტრს და უკან დაბრუნებს  გადაცემული ორი პარამეტრის ნამრავლს;
// დაწერეთ ფუნქცია რომელიც ყოველ 5000 წამში კონსოლში დალოგავს ტექსტს "async function";
// გადახედეთ განვლილ მასალას.
function getSum(a,b) {
    ab = a*b
    return ab
}
let ad = 4;
let ax = 6;
console.log(getSum(ad,ax))
setInterval(() => {
    console.log("async function");
  }, 5000);