cbs hofs closures


Callback function wo function hota hai jo kisi aur function ko argument ke roop me pass hota hai, aur baad me us function ke andar call hota hai.

function abcd(val){
    val()
}

abcd(function(){
    console.log("Hello")
})


hofs function wo function hota hai jo accept kre doosra function in parameter ya fir return kre ek aur function .
1
function hofs(cb){
    cb();
}

hofs(function(){
    console.log("I am a callback");
});

2
function hofs(){
    return function(){
        console.log("Returned function");
    };
}

const fn = hofs();
fn();


closure wo hote hai jo return kre ek function or jo function return kiya hai wo use kre parent function ka koi variable

function backgroundColor(){
    let backgroundcolor = "red";
    return function textcolor(){
      let color = backgroundcolor;
      console.log(color);   
    }
}

const fn = backgroundColor();
fn();