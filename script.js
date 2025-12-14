let mode = "call";

let callRules = [false,false,false,false];
let putRules  = [false,false,false,false];

function setMode(m){
mode = m;

document.getElementById("callBox").style.display =
m === "call" ? "block" : "none";

document.getElementById("putBox").style.display =
m === "put" ? "block" : "none";

document.getElementById("final").innerHTML = "NO TRADE";
}

function toggleRule(id,index){
let rules = mode === "call" ? callRules : putRules;
rules[index] = !rules[index];

document.getElementById(id).innerHTML =
document.getElementById(id).innerHTML.split("❌")[0]
.split("✅")[0] +
(rules[index] ? " ✅" : " ❌");
}

function checkRules(){

let rules = mode === "call" ? callRules : putRules;

if(rules[0] && rules[1] && rules[3]){
document.getElementById("final").innerHTML = "TRADE FEASIBLE";
}else{
document.getElementById("final").innerHTML = "NO TRADE";
}
}
