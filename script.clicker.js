//Variables
let money = 0;
let DPS = 0;
let milisecond = 1000;
let wait = 10 * milisecond; 
let DPC = 1;

//Add points when clicked
function Text() {
  money = money + DPC;
}

//Sets h1 to i
setInterval(function () {
  document.getElementById("Text").innerHTML = money = money + DPS;
});

//Sets h1 to i
setInterval(function () {
    document.getElementById("Text").innerHTML = money = money + DPS;
}, wait);

/*
TODO: Make A Shop
*/