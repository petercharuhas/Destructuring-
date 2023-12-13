/* Obj 1 */
let facts = {numPlanets: 8, yearNeptuneDiscovered: 1846};
let {numPlanets, yearNeptuneDiscovered} = facts;

console.log(numPlanets); 
console.log(yearNeptuneDiscovered); 
/* Obj 2 */
let planetFacts = {
    numPlanets: 8,
    yearNeptuneDiscovered: 1846,
    yearMarsDiscovered: 1659
  };
  
  let { numPlanets: planets, ...discoveryYears } = planetFacts;
  
  console.log(discoveryYears);
  
/* Obj 3 */
let result1 = getUserData({firstName: "Alejandro", favoriteColor: "purple"});
console.log(result1); 


let result2 = getUserData({firstName: "Melissa"});
console.log(result2); 


let result3 = getUserData({});
console.log(result3);

/* Arr 1 */
let [first, second, third] = ["Maya", "Marisa", "Chi"];

console.log(first);  
console.log(second); 
console.log(third);  
/* Arr 2 */ 
let [apple, banana, ...restOfFruits] = ["Raindrops on roses", "whiskers on kittens", "bright copper kettles", "warm woolen mittens", "brown paper packages tied up with strings"];

console.log(apple); 
console.log(banana); 
console.log(restOfFruits); 
/* Arr 3 */
let numbers = [10, 20, 30];
[numbers[1], numbers[2]] = [numbers[2], numbers[1]];

console.log(numbers); 

/* Refactor */
const obj = {
    numbers: {
      a: 1,
      b: 2
    }
  };
  
  const { a, b } = obj.numbers;
/* ES5 Arr Swap */
let arr = [1, 2];
[arr[0], arr[1]] = [arr[1], arr[0]];
/* 1 Line */
[arr[0], arr[1]] = [arr[1], arr[0]]
/* raceResults */
const raceResults = ([first, second, third, ...rest]) => ({ first, second, third, rest });


