// callback function 
// function abcd(val){
//     val()
// }

// abcd(function(){
//     console.log("Hello")
// })


// hofs function

// function hofs(cb){
//     cb();
// }

// hofs(function(){
//     console.log("I am a callback");
// });


// return example
// function hofs(){
//     return function(){
//         console.log("Returned function");
//     };
// }

// const fn = hofs();
// fn();


// closures

function backgroundColor(){
    let backgroundcolor = "red";
    return function textcolor(){
      let color = backgroundcolor;
      console.log(color);   
    }
}

const fn = backgroundColor();
fn();