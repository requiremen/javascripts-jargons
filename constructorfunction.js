// we are going to make a constructor function for creating objects in javascript
function Car(make,model,type){
    // we will use this keyword to explicitly mention that the function will
    // give access to the obejct of to use the paramaeter in the function and define it 
    // in there new object
    this.make = make;
    this.model = model;
    this.type = type;
}
// make a new object out of this cunstructor function
let newcar = new Car("toyota","carmy","sedan");
console.log(newcar)

function Tea(type){
    this.type = type;
    this.about = ()=>{
        return `this is ${this.type}`
    }
}
let newtea = new Tea("green tea")
console.log(newtea.about())

function Tablet(chipset,brand){
    if(!new.target){
        throw new Error("tablet should be called with new keyword")
    }
    this.chipset = chipset
    this.brand = brand
    this.answer = ()=>{
        return `this is the brand of ${brand} and have a chipset of ${chipset}`
    }

}
 
let appletab = new Tablet("appleipad","bionic");
// let samsungtab = Tablet("samsungtab","snapdragon")

console.log(appletab.answer());

function Animal(name){
    this.name = name
    this.namefunction = ()=>{
        return `the name of the pet is ${this.name}`
    }
}
// an the prototype thing we studied for objects is clearly that the function also keeps prototype
// so in this function we have a variable naam which will take the input of name and do things accordingly 
// toh ab ham isme ek aur functionality add karenge 
Animal.prototype.sound = function(){
    return `${this.name} makes a sound`
}
// we added this functionality in the prototype function as well
let dog = new Animal("doggie");
console.log(dog.sound());
console.log(dog.namefunction())
