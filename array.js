/* 
1. Declare an array named `teaFlavors` that contains the strings `"green tea"`, `"black tea"`, and `"oolong tea"`. 
   Access the first element of the array and store it in a variable named `firstTea`.
*/
let teaFlavors = ["greentea","blacktea","oolongtea"];
let firsttea = teaFlavors[0];
console.log(firsttea);
/* 
2. Declare an array named `cities` containing `"London"`, `"Tokyo"`, `"Paris"`, and `"New York"`. 
   Access the third element in the array and store it in a variable named `favoriteCity`.
*/
let cities = ["London", "Tokyo", "Paris","New York"];
let favoriteCity = cities[2];
console.log(favoriteCity);
/* 
3. You have an array named `teaTypes` containing `"herbal tea"`, `"white tea"`, and `"masala chai"`. 
   Change the second element of the array to `"jasmine tea"`.
*/
let teaTypes = ["herbal tea", "white tea", "masala chai"];;
teaTypes[1] = "jasmine tea";
console.log(teaTypes);
/* 
4. Declare an array named `citiesVisited` containing `"Mumbai"` and `"Sydney"`. 
   Add `"Berlin"` to the array using the `push` method.
*/
let citiesVisited = ["mumbai","sydney"];
citiesVisited.push("Berlin");
console.log(citiesVisited);
/* 
5. You have an array named `teaOrders` with `"chai"`, `"iced tea"`, `"matcha"`, and `"earl grey"`. 
   Remove the last element of the array using the `pop` method and store it in a variable named `lastOrder`.
*/
let teaOrders = ["chai","iced tea","matcha","earl grey"];
let lastorder = teaOrders.pop();
console.log(lastorder);
console.log(teaOrders);
/* 
6. You have an array named `popularTeas` containing `"green tea"`, `"oolong tea"`, and `"chai"`. 
   Create a soft copy of this array named `softCopyTeas`.
*/
let popularTeas = ["green tea","oolong tea","chai"];
let softtcopyteas = popularTeas;
popularTeas.pop();
console.log(softtcopyteas);
console.log(popularTeas);
//creating this soft copy of the array is not a good idea because if we change the original array then the soft copy will also change because they are pointing to the same memory location so to create a hard copy of the array we can use the spread operator or slice method
/* 
7. You have an array named `topCities` containing `"Berlin"`, `"Singapore"`, and `"New York"`. 
   Create a hard copy of this array named `hardCopyCities`.
*/
let topCities = ["berlin","singapore","newyork"];
let hardcopy = [...topCities];
topCities.pop();
console.log(hardcopy);
/* 
8. You have two arrays: `europeanCities` containing `"Paris"` and `"Rome"`, and `asianCities` containing `"Tokyo"` and `"Bangkok"`. 
   Merge these two arrays into a new array named `worldCities`.
*/
let europeanCities = ["paris","Rome"];
let asianCities = ["tokyo","bangkok"];
let worldcities = europeanCities.concat(asianCities);
console.log(worldcities);
/* 
9. You have an array named `teaMenu` containing `"masala chai"`, `"oolong tea"`, `"green tea"`, and `"earl grey"`. 
   Find the length of the array and store it in a variable named `menuLength`.
*/
let teammenu = ["masala chai","oolong tea","green tea","earl grey"];
let menuLength = teammenu.length;
console.log(menuLength);
/* 
10. You have an array named `cityBucketList` containing `"Kyoto"`, `"London"`, `"Cape Town"`, and `"Vancouver"`. 
    Check if `"London"` is in the array and store the result in a variable named `isLondonInList`.
*/
let cityBucketList = ["Kyoto","London","Cape Town","Vancouver"];
let isLondonInList = cityBucketList.includes("London");
console.log(isLondonInList);
