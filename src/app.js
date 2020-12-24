// Object programming
// function constructors implementing prototypal inheritance
function Person(firstName, lastName, age){

    this.firstName = firstName;
    this.lastName = lastName;
    this.age = age;
}

Person.prototype.fullName = function(){
    return `${this.firstName} ${this.lastName}`;
}

const person = new Person("Jade", "Doe", 20);
// console.log(person);

// Ensuring that an instance of an object can inherit a method from another object
Student.prototype = Object.create(Person.prototype);
// Ensuring that the constructor of a given object gets its own prefix
Student.prototype.constructor = Student;

function Student(firstName, lastName, age){
    Person.call(this, firstName, lastName, age);
    this.registeredCourses = [];

    this._registerCourses = function(courseId){
        this.registeredCourses.push(courseId);
    }
    this._getCourses = function(){
        return `${this.fullName} 
        ${this.registeredCourses.join(", ")}`;
    }
}

let student = new Student("Jame", "Doe", 20);
student._registerCourses("APT907");
student._registerCourses("APT987");
student._registerCourses("APT997");
// console.log(student);


// Person class
class People{
    constructor(firstName, lastName, age){
        this.firstName = firstName;
        this.lastName = lastName;
        this.age = age;
    }
   fullName(){
        return `${this.firstName} ${this.lastName}`;
    }
}

let p2 = new People("Jane", "Doe", 20);


// class for pupils enrolled in computer science courses 
class Pupils extends People{
    constructor(firstName, lastName, age){
        super(firstName, lastName, age);
        this._registeredCourses = [];
    }
    _registerCourses(coursedId){
        this._registeredCourses.push(coursedId);
    }
    _getCourses(){
        return `${this.fullName()} ${this._registeredCourses.join(", ")}`;
    }
}

const p3 = new Pupils("Jake", "Thomas", 22);
p3._registerCourses("IST9087");
p3._registerCourses("IST9088");
p3._registerCourses("IST9089");
p3._registerCourses("IST9090");
console.log(p3._getCourses());

// Multidimensional arrays
let activities = [
    ["Work", 6],
    ["Commute", 2],
    ["Eat", 1],
    ["Sleep", 6],
];
activities.push(["Programming", 4]);
activities.splice(0, 0, ["Work out", 1]);

activities.forEach((activity) => {
    let percentage = (((activity[1])/ 24 ) * 100).toFixed();
    activity[2] = `${percentage}%`
})

console.table(activities);

// iterating the array using for... loop
// obtain the inner elements of the container array
for(let x = 0; x < activities.length; ++x){
   // obtain the length of the inner array
   let innerArrayLength = activities[x].length;

   for(let y = 0; y < innerArrayLength; ++y){
       console.log(`${x} ${y} : ${activities[x][y]}`);
   }
}

let shoppingCart = [
    {product: "Iphone 8",
     qty: 1,
     amount: 899},

     {product: "Screen protector",
     qty: 1,
     amount: 99},

     {product: "Casing",
     qty: 1,
     amount:  190},
]

let total = shoppingCart.reduce((acc, curr) => {
    return acc + curr.qty * curr.amount;
}, 0);

console.log(total);

// map() method to transform an array an include the results in a new array
let circles = [10, 30, 90];

let area = 0;
let areas = [];

for(let x = 0; x < circles.length; ++x){
    area = Math.floor(Math.PI * circles[x] * circles[x]);
    areas.push(area);
}
console.table(areas);

let circleAreas = circles.map(function(radius){
    return Math.floor(Math.PI * radius * radius);
});

console.table(circleAreas);

// counter constructor
function Counter(){
    this.count = 0;
    let self = this;

    return{
        increase: function(){
            self.count++;
        },
        current: function(){
            return self.count;
        },
        reset: function(){
            self.count = 0;
        }
    }
}

let counter = new Counter();
let num = [1, 2, 9];
let numSum = 0;

num.forEach(function(value){
    numSum += value;
    this.increase();

}, counter);

console.log(numSum);
console.log(counter.current());

// filter method creating a new array that contain subset elements of the original array
let cities = [
    {name: 'Los Angeles', population: 3792621},
    {name: 'New York', population: 8175133},
    {name: 'Chicago', population: 2695598},
    {name: 'Houston', population: 2099451},
    {name: 'Philadelphia', population: 1526006}
];
let urbanArea = [];

for(let x = 0; x < cities.length; ++x){
   if(cities[x].population > 3000000){
        urbanArea.push(cities[x]);
   }

}
console.table(urbanArea);

let bigCities = cities.filter(function(value){
    return value.population > 3000000;
})

console.log(bigCities);