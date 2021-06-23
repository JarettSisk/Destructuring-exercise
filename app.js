// // 1
// let facts = {numPlanets: 8, yearNeptuneDiscovered: 1846};
// let {numPlanets, yearNeptuneDiscovered} = facts;

// console.log(numPlanets); // ?
// // Answer: it returns the value of numPlanets which is 8
// console.log(yearNeptuneDiscovered); // ?
// // Answer: it returns the value of yearNeptuneDiscover whih is 1846


// // 2
// let planetFacts = {
//     numPlanets: 8,
//     yearNeptuneDiscovered: 1846,
//     yearMarsDiscovered: 1659
//   };
  
//   let {numPlanets, ...discoveryYears} = planetFacts;
  
//   console.log(discoveryYears); // ?
// // Answer: discovery years is an object that contains all the key / values of of the object except for numPlanets.


// // 3
// function getUserData({firstName, favoriteColor="green"}){
//     return `Your name is ${firstName} and you like ${favoriteColor}`;
//   }
  
//   getUserData({firstName: "Alejandro", favoriteColor: "purple"}) // ?
// // Answer: "Your name is Alejandro and you like purple"
//   getUserData({firstName: "Melissa"}) // ?
// // Answer: "Your name is Melissa and you like green"
//   getUserData({}) // ?
// // Answer: "Your name is undefined and you like green"


// // 4
// let [first, second, third] = ["Maya", "Marisa", "Chi"];

// console.log(first); // ?
// // Answer: "Maya"
// console.log(second); // ?
// // Answer: "Marisa"
// console.log(third); // ?
// // Answer: "Chi"


// // 5 
// let [raindrops, whiskers, ...aFewOfMyFavoriteThings] = [
//     "Raindrops on roses",
//     "whiskers on kittens",
//     "Bright copper kettles",
//     "warm woolen mittens",
//     "Brown paper packages tied up with strings"
//   ]
  
// console.log(raindrops); // ?
// // Answer: "Raindrops and roses"
// console.log(whiskers); // ?
// // Answer: Whiskers on kittens
// console.log(aFewOfMyFavoriteThings); // ?
// // Answer: An array that contains the rest of the items


// // 6
// let numbers = [10, 20, 30];
// [numbers[1], numbers[2]] = [numbers[2], numbers[1]]

// console.log(numbers) // ?
// // Answer: [10, 30, 20] above uses destructuring to swap the values in each variable


// 7 
// Answer:
  const obj = {
      numbers: {
          a: 1,
          b: 2
      }
  }

  let {numbers: {a, b}} = obj;

  console.log(a,b);

// 8
// Answer:
const arr = [1,2];

[arr[0], arr[1]] = [arr[1], arr[0]];

console.log(arr);

// 9
// Answer:
const raceResults = ([first, second, third, ...rest]) => ({first, second, third, rest});

console.log(raceResults(['Tom', 'Margaret', 'Allison', 'David', 'Pierre']))





