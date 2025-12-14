let mode = "call";

function setMode(m){
mode = m;
}

function checkRules(){

let r1 = Math.random() > 0.5;
let r2 = Math.random() > 0.5;
let r3 = Math.random() > 0.5;
let r4 = Math.random() > 0.5;

document.getElementById("r1").innerHTML = "Rule 1 " + (r1 ? "✅" : "❌");
document.getElementById("r2").innerHTML = "Rule 2 " + (r2 ? "✅" : "❌");
document.getElementById("r3").innerHTML = "Rule 3 " + (r3 ? "✅" : "❌");
document.getElementById("r4").innerHTML = "Rule 4 " + (r4 ? "✅" : "❌");

if(r1 && r2 && r4){
document.getElementById("final").innerHTML = "TRADE FEASIBLE";
}else{
document.getElementById("final").innerHTML = "NO TRADE";
}
}
