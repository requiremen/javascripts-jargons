/* 
1. Write a function named `makeTea` that takes one parameter, `typeOfTea`, and returns a string like `"Making green tea"` when called with `"green tea"`. 
Store the result in a variable named `teaOrder`.
*/
function maketea(typeoftea){
    console.log(`making ${typeoftea}`);
}
maketea("akshat");
/* 
2. Create a function named `orderTea` that takes one parameter, `teaType`. Inside this function, create another function named `confirmOrder` that returns a message like `"Order confirmed for chai"`. 
Call `confirmOrder` from within `orderTea` and return the result.
*/
function oredertea(teatype){
    function confirmorder(){
        return `order is confirmed for ${teatype}`;
    }
    return confirmorder();
}
let order = oredertea("chai");
console.log(order);
/* 
3. Write an arrow function named `calculateTotal` that takes two parameters: `price` and `quantity`. The function should return the total cost by multiplying the `price` and `quantity`. 
Store the result in a variable named `totalCost`.
*/
calculatetotal = (price,quatity)=>{
    let totalcost= price*quatity;
    console.log(totalcost);
}
calculatetotal(10,5);
/* 
4. Write a function named `processTeaOrder` that takes another function, `makeTea`, as a parameter and calls it with the argument `"earl grey"`. 
Return the result of calling `makeTea`.
*/
function maketea(teaoftype){
    return `maketea: ${teaoftype}`;
}

function processteaorder(fn){
    return fn("earl grey");
}
const tea = processteaorder(maketea);
console.log(tea);

