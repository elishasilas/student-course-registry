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

