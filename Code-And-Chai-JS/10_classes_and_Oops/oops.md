function Snacks(name){
    this.name = name
}

let s1 = new Snacks("Kurkure");

In the above function, we have created a function called Snacks. This function takes in a parameter called name. The function then creates a variable called this.name and assigns it the value of name.

ab isme agar this.name ke baad this.price then this.color banayenge to wo ek extra jagah lega jo storage badhayega to hum PROTOTPE ka use krenge snack.parameter.price ke use krenge snack.parameter.color jise use krne se ek extra space nhi lega aur storage ek baar hi use krege 

function Snacks(name){
    this.name = name
}

Snacks.prototype.price = 100;
Snacks.prototype.color = "red";

let s1 = new Snacks("Kurkure");
let s2 = new Snacks("Biscuits");
let s3 = new Snacks("Chocolate");

In the above function, we have created a function called Snacks. This function takes in a parameter called name. The function then creates a variable called this.name and assigns it the value of name.

ab isme agar this.name ke baad this.price then this.color banayenge to wo ek extra jagah lega jo storage badhayega to hum PROTOTPE ka use krenge snack.parameter.price ke use krenge snack.parameter.color jise use krne se ek extra space nhi lega aur storage ek baar hi use krege 

function Snacks(name){
    this.name = name
}

Snacks.prototype.price = 100;
Snacks.prototype.color = "red";

let s1 = new Snacks("Kurkure");
let s2 = new Snacks("Biscuits");
let s3 = new Snacks("Chocolate");

///////////////////////////////////////////

• 	The constructor is a blueprint for employees.
• 	The prototype is like a shared toolbox of functions that all employees can use.
• 	If you give values while creating an employee, those values are used.
• 	If you don’t give values, the object falls back to the default values defined in the blueprint/prototype.

function Employee(name = "Unknown", age = 0, id = 0, salary = 0){
    this.name = name;
    this.age = age;
    this.id = id;
    this.salary = salary;
}

Employee.prototype.display = function(){
    console.log(`Name: ${this.name}, Age: ${this.age}, ID: ${this.id}, Salary: ${this.salary}`);
}

// Case 1: Passing all arguments
var emp1 = new Employee("John", 30, 123456, 50000);
emp1.display();  
// Output: Name: John, Age: 30, ID: 123456, Salary: 50000

// Case 2: Not passing any arguments
var emp2 = new Employee();
emp2.display();  
// Output: Name: Unknown, Age: 0, ID: 0, Salary: 0

// Case 3: Passing only some arguments
var emp3 = new Employee("Alice", 25);
emp3.display();  
// Output: Name: Alice, Age: 25, ID: 0, Salary: 0;
 