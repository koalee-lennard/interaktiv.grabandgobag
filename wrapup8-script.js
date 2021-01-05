function validateAnswer(){
    //var test = document.getElementById("test");
    //test.innerHTML += "clicked! ";
    //document.getElementById("test").innerHTML = "checkbox clicked!";

    var a = document.getElementById("input1").value;
    var b = document.getElementById("input2").value;
    var c = document.getElementById("input3").value;
    var d = document.getElementById("input4").value;
    var e = document.getElementById("input5").value;
    var f = document.getElementById("input6").value;
    var g = document.getElementById("input7").value;
    var h = document.getElementById("input8").value;

    if ((a == "PHONE CHARGER AND BATTERY BANK") && 
    (b == "FLASHLIGHT") && 
    (c == "RADIO") && 
    (d == "FIRST AID KIT") &&
    (e == "SEASONAL CLOTHING") &&
    (f == "FOOD AND WATER") &&
    (g == "EMERGENCY PLAN") &&
    (h == "WHISTLE")
    ){
        //document.getElementById("output").innerHTML = "CORRECT!"
        alert("PASS");
    } else{
        //document.getElementById("output").innerHTML ="WRONG!"
        alert("FAIL");
    }
}