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

    if ((a == "PHONE CHARGER AND BATTERY BANK" || a == "Phone charger and battery bank" || a == "phone charger and battery bank") && 
    (b == "FLASHLIGHT" || b == "Flashlight" || b == "flashlight") && 
    (c == "RADIO" || c == "Radio" || c == "radio") && 
    (d == "FIRST AID KIT" || d == "First aid kit" || d == "first aid kit") &&
    (e == "SEASONAL CLOTHING" || e == "Seasonal clothing" || e == "seasonal clothing") &&
    (f == "FOOD AND WATER" || f == "food and water" || f == "Food and water") &&
    (g == "EMERGENCY PLAN" || g == "Emergency Plan" || g == "emergency plan") &&
    (h == "WHISTLE" || h == "Whistle" || h == "whistle")
    ){
        //document.getElementById("output").innerHTML = "CORRECT!"
        alert("CONGRATULATIONS! You have passed this test! The SECRET CODE is 'EMERGENCY'");
    } else{
        //document.getElementById("output").innerHTML ="WRONG!"
        alert("FAIL! Please Try Again! Take note that the answers are case sensitive. Try answering in all uppercase or lowercase");
    }
}