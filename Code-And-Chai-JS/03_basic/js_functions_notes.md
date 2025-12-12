# 📘 JavaScript Functions -- Notes & Explanations

## 1. **`sayMyName()`**

``` js
function sayMyName(){
    console.log("Hello")
    console.log("Hello")
    console.log("Hello")
    console.log("Hello")
    console.log("Hello")
    console.log("Hello")
}
```

### ✔ Meaning

-   This function prints `"Hello"` six times.
-   It takes **no parameters**.
-   It is an example of a **simple function** with repeated
    `console.log()` statements.

## 2. **`addTwoNumbers(number1, number2)`**

``` js
function addTwoNumbers(number1, number2){
    return number1 + number2
}

const result = addTwoNumbers(3, 5)
```

### ✔ Meaning

-   This function accepts two numbers as parameters.
-   It **adds them** and **returns** the result.
-   Demonstrates returning values and using parameters.

## 3. **`loginUserMessage(username = "sam")`**

``` js
function loginUserMessage(username = "sam"){
    if(!username){
        console.log("Please enter a username");
        return
    }
    return `${username} just logged in`
}
```

### ✔ Meaning

-   Takes a username and returns a login message.
-   If no username is passed, prints a message.
-   Shows default parameters and conditional checks.

## 4. **`calculateCartPrice(val1, val2, ...num1)`**

``` js
function calculateCartPrice(val1, val2, ...num1){
    return num1
}
```

### ✔ Meaning

-   Uses the rest operator (`...`) to collect extra arguments in an
    array.
-   Returns the remaining values.

## 5. **`handleObject(anyobject)`**

``` js
function handleObject(anyobject){
    console.log(`Username is ${anyobject.username} and price is ${anyobject.price}`);
}
```

### ✔ Meaning

-   Accepts an object and logs its properties.
-   Demonstrates object passing and property access.

## 6. **`returnSecondValue(getArray)`**

``` js
function returnSecondValue(getArray){
    return getArray[1]
}
```

### ✔ Meaning

-   Accepts an array and returns its second element.
-   Shows array indexing inside functions.
