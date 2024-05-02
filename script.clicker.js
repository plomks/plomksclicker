/*
JavaScript
*/

//Variables.
/*
Can mess with varriables with and "//&" by it.
*/
let money = 0; //&
let DPS = 0; //&
let miliseconds = 1000;
let seconds = 1 * miliseconds;
let x = 1; //&
let wait = x * seconds;
let DPC = 1; //&
let changeDPS = 1;
let changeDPC = 1;
let dollar = "$";
let DPSL = " DPS";
let DPCL = " DPC";
let DPSPRICE = 5;
let DPCPRICE = 5;

//Add points when clicked.
function Text() {
  money = money + DPC; console.log("money = ", money);
  document.getElementById("Text").innerHTML = money;
}

//Money.
setInterval(function () {
  document.getElementById("Text").innerHTML = money;
});

//Changes money per second.
setInterval(function () {
    document.getElementById("Text").innerHTML = money = money + DPS;
}, wait);

//Sets DPS buy button to changeDPS + DPSL (# DPS)
setInterval(function (){
  document.getElementById("DPS_BUTTON").innerHTML = changeDPS + DPSL;
});

//Sets DPS price to DPSPRICE + dollar (#$)
setInterval(function () {
  document.getElementById("DPS_PRICE").innerHTML = DPSPRICE + dollar;
});

//Sets DPC buy button to changeDPC + DPCL (# DPC)
setInterval(function (){
  document.getElementById("DPC_BUTTON").innerHTML = changeDPC + DPCL;
});

//Sets DPC price to DPCPRICE + dollar (#$)
setInterval(function () {
  document.getElementById("DPC_PRICE").innerHTML = DPCPRICE + dollar;
});

/*
Shop
*/

//Buy DPS
function ADDDPS() {
  if (money >= DPSPRICE) {
    DPS = DPS + changeDPS;
    money = money - DPSPRICE;
    changeDPS = changeDPS + 1;
    DPSPRICE = DPSPRICE + 5;
  }
}

//Buy DPC
function ADDDPC() {
  if (money >= DPCPRICE) {
    DPC = DPC + changeDPC;
    money = money - DPCPRICE;
    changeDPC = changeDPC + 1;
    DPCPRICE = DPCPRICE + 5;
  }
}