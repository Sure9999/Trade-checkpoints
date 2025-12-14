let mode = "call";

function setMode(m){
mode = m;

document.getElementById("callBox").style.display =
m === "call" ? "block" : "none";

document.getElementById("putBox").style.display =
m === "put" ? "block" : "none";

document.getElementById("final").innerHTML = "NO TRADE";
}

function checkRules(){

if(mode === "call"){

let r1 = Math.random() > 0.5;
let r2 = Math.random() > 0.5;
let r3 = Math.random() > 0.5;
let r4 = Math.random() > 0.5;

document.getElementById("c1").innerHTML =
"Price forms lower high or support with V recovery " + (r1 ? "✅" : "❌");

document.getElementById("c2").innerHTML =
"Two strong green candles closing above previous high " + (r2 ? "✅" : "❌");

document.getElementById("c3").innerHTML =
"Upper swing breaks previous swing high " + (r3 ? "✅" : "❌");

document.getElementById("c4").innerHTML =
"Price trades above second candle high " + (r4 ? "✅" : "❌");

document.getElementById("final").innerHTML =
(r1 && r2 && r4) ? "TRADE FEASIBLE" : "NO TRADE";

}else{

let r1 = Math.random() > 0.5;
let r2 = Math.random() > 0.5;
let r3 = Math.random() > 0.5;
let r4 = Math.random() > 0.5;

document.getElementById("p1").innerHTML =
"Price forms higher low or resistance with V fall " + (r1 ? "✅" : "❌");

document.getElementById("p2").innerHTML =
"Two strong red candles closing below previous low " + (r2 ? "✅" : "❌");

document.getElementById("p3").innerHTML =
"Lower swing breaks previous swing low " + (r3 ? "✅" : "❌");

document.getElementById("p4").innerHTML =
"Price trades below second candle low " + (r4 ? "✅" : "❌");

document.getElementById("final").innerHTML =
(r1 && r2 && r4) ? "TRADE FEASIBLE" : "NO TRADE";
}
}
