const SecretCode = document.getElementById('secret-code');
var j;
var k;
var l;
var m;
var n;
var o;
var p;
var q;
function submit001() {
    b = input1.value;
    c = input2.value;
    d = input3.value;
    e = input4.value;
    f = input5.value;
    g = input6.value;
    h = input7.value;
    i = input8.value;
    if (b == "phone charger and battery bank"){
        j = 1;
        input1.value = b;
    }

    if (c == "flashlight"){
        k = 1;
        input2.value = c;
    }

    if (d == "radio"){
        l = 1;
        input3.value = d;
    }

    if (e == "first aid kit"){
        m = 1;
        input4.value = e;
    }

    if (f == "seasonal clothing"){
        n = 1;
        input5.value = f;
    }

    if (g == "food and water"){
        o = 1;
        input6.value = g;
    }

    if (h == "emergency plan"){
        p = 1;
        input7.value = h;
    }

    if (i =i= "whistle"){
        q = 1;
        input8.value = i;
    }

    if (j==1 && k==1 && l==1 && m==1 && n==1 && o==1 && p==1 && q==1){
        SecretCode.classList.remove("hide");
    }
}