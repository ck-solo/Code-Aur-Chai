// singleton
// Object.create

// object literals

const mySym = Symbol("key1")


const JsUser = {
    name: "chandan", 
    [mySym]: "mykey1",
    age: 18,
    location: "Delhi",
    email: "kuchbhicom",
    isLoggedIn: false,
    lastLoginDays: ["Monday", "Saturday"]
}

// console.log(JsUser.email)
// console.log(JsUser["email"])
// console.log(JsUser["full name"])
// console.log(JsUser[mySym])

JsUser.email = "chatgptcom"
// Object.freeze(JsUser)
JsUser.email = "javascript.com"
// console.log(JsUser);

JsUser.greeting = function(){
    console.log("Hello JS user");
}
JsUser.greetingTwo = function(){
    console.log(`Hello JS user, ${this.name}`);
}

console.log(JsUser.greeting());
console.log(JsUser.greetingTwo());