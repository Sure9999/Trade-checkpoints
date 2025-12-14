let mode = "call";

let callRules = [false,false,false,false];
let putRules  = [false,false,false,false];

function setMode(m){
mode = m;

document.getElementById("final").innerText = "NO TRADE";
document.getElementById("title").innerText =
m === "call" ? "CALL CONDITIONS" : "PUT CONDITIONS";

document.getElementById("call").style.display =
m === "call" ? "block" : "none";

document.getElementById("put").style.display =
m === "put" ? "block" : "none";
}

function toggleRule(id,index){
let rules = mode === "call" ? callRules : putRules;
rules[index] = !rules[index];

let el = document.getElementById(id);
el.innerText = el.innerText.replace("✅","").replace("❌","") +
(rules[index] ? " ✅" : " ❌");
}

function checkRules(){
let rules = mode === "call" ? callRules : putRules;

if(rules[0] && rules[1] && rules[3]){
document.getElementById("final").innerText = "TRADE FEASIBLE";
}else{
document.getElementById("final").innerText = "NO TRADE";
}
}
