
var msg = document.getElementById("msg1")
var inp = document.getElementById("inp")
var but = document.getElementById("but")
var c1 = 0;

but.addEventListener("click", function()
{   
    var go = true;
    if (c1 == 6){
        alert("You have reached your limit.")
        go = false
    }
    if (go){
        var newm = document.createElement("dl");
        if (inp.value != ""){
            c1 ++;
        }
        newm.innerHTML = inp.value;
        msg.appendChild(newm);
        inp.value = "";
    }
});

var msg2 = document.getElementById("msg2")
var ino = document.getElementById("in")
var bu = document.getElementById("bu")
var c2 = 0;
bu.addEventListener("click", function()
{
    var go = true
    if (c2 == 6){
        alert("You have reached your limit.")
        go = false
    }
    var newm = document.createElement("dl");
    c2 ++;
    newm.innerHTML = ino.value;
    msg2.appendChild(newm);
    ino.value = "";
});
