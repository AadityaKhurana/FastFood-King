var count = 0;
var count1 = 0;
var count2 = 0;
var count3 = 0;
var count4 = 0;
var count5 = 0;
var count6 = 0;
var count7 = 0;
var count8 = 0;
var count9 = 0;
var count10 = 0;
var count11 = 0;

function add() {
    count += 1;
    document.getElementById('counter').innerHTML = count;
}
function add1() {
    count1 += 1;
    document.getElementById('counter1').innerHTML = count1;
}
function add2() {
    count2 += 1;
    document.getElementById('counter2').innerHTML = count2;
}
function add3() {
    count3 += 1;
    document.getElementById('counter3').innerHTML = count3;
}
function add4() {
    count4 += 1;
    document.getElementById('counter4').innerHTML = count4;
}
function add5() {
    count5 += 1;
    document.getElementById('counter5').innerHTML = count5;
}
function add6() {
    count6 += 1;
    document.getElementById('counter6').innerHTML = count6;
}
function add7() {
    count7 += 1;
    document.getElementById('counter7').innerHTML = count7;
}
function add8() {
    count8 += 1;
    document.getElementById('counter8').innerHTML = count8;
}
function add9() {
    count9 += 1;
    document.getElementById('counter9').innerHTML = count9;
}
function add10() {
    count10 += 1;
    document.getElementById('counter10').innerHTML = count10;
}
function add11() {
    count11 += 1;
    document.getElementById('counter11').innerHTML = count11;
}
function subtract(){
    count -= 1;
    document.getElementById('counter').innerHTML = count;
}
function subtract1(){
    count1 -= 1;
    document.getElementById('counter1').innerHTML = count1;
}
function subtract2(){
    count2 -= 1;
    document.getElementById('counter2').innerHTML = count2;
}
function subtract3(){
    count3 -= 1;
    document.getElementById('counter3').innerHTML = count3;
}
function subtract4(){
    count4 -= 1;
    document.getElementById('counter4').innerHTML = count4;
}
function subtract5(){
    count5 -= 1;
    document.getElementById('counter5').innerHTML = count5;
}
function subtract6(){
    count6 -= 1;
    document.getElementById('counter6').innerHTML = count6;
}
function subtract7(){
    count7 -= 1;
    document.getElementById('counter7').innerHTML = count7;
}
function subtract8(){
    count8 -= 1;
    document.getElementById('counter8').innerHTML = count8;
}
function subtract9(){
    count9 -= 1;
    document.getElementById('counter9').innerHTML = count9;
}
function subtract10(){
    count10 -= 1;
    document.getElementById('counter10').innerHTML = count10;
}
function subtract11(){
    count11 -= 1;
    document.getElementById('counter11').innerHTML = count11;
}
function cart() {
    var x = document.getElementById("item1");
    if (count == 0) {
      x.style.display = "none";
    } 
    else {
      x.style.display = "block";
      document.getElementById('item1text').innerHTML = "Quantity: "+ count+"<br>"+"Amount to be paid: "+(count*500);
    }
}
function cart1() {
    var x = document.getElementById("item2");
    if (count1 == 0) {
      x.style.display = "none";
    } 
    else {
      x.style.display = "block";
      document.getElementById('item2text').innerHTML = "Quantity: "+ count1+"<br>"+"Amount to be paid: "+(count1*700);
    }
}
function cart2() {
    var x = document.getElementById("item3");
    if (count2 == 0) {
      x.style.display = "none";
    } 
    else {
      x.style.display = "block";
      document.getElementById('item3text').innerHTML = "Quantity: "+ count2+"<br>"+"Amount to be paid: "+(count2*600);
    }
}
function cart3() {
    var x = document.getElementById("item4");
    if (count3 == 0) {
      x.style.display = "none";
    } 
    else {
      x.style.display = "block";
      document.getElementById('item4text').innerHTML = "Quantity: "+ count3+"<br>"+"Amount to be paid: "+(count3*800);
    }
}
function cart4() {
    var x = document.getElementById("item5");
    if (count4 == 0) {
      x.style.display = "none";
    } 
    else {
      x.style.display = "block";
      document.getElementById('item5text').innerHTML = "Quantity: "+ count4+"<br>"+"Amount to be paid: "+(count4*1000);
    }
}
function cart5() {
    var x = document.getElementById("item6");
    if (count5 == 0) {
      x.style.display = "none";
    } 
    else {
      x.style.display = "block";
      document.getElementById('item6text').innerHTML = "Quantity: "+ count5+"<br>"+"Amount to be paid: "+(count5*1200);
    }
}
function cart6() {
    var x = document.getElementById("item7");
    if (count6 == 0) {
      x.style.display = "none";
    } 
    else {
      x.style.display = "block";
      document.getElementById('item7text').innerHTML = "Quantity: "+ count6+"<br>"+"Amount to be paid: "+(count6*800);
    }
}
function cart7() {
    var x = document.getElementById("item8");
    if (count7 == 0) {
      x.style.display = "none";
    } 
    else {
      x.style.display = "block";
      document.getElementById('item8text').innerHTML = "Quantity: "+ count7+"<br>"+"Amount to be paid: "+(count7*800);
    }
}
function cart8() {
    var x = document.getElementById("item9");
    if (count8 == 0) {
      x.style.display = "none";
    } 
    else {
      x.style.display = "block";
      document.getElementById('item9text').innerHTML = "Quantity: "+ count8+"<br>"+"Amount to be paid: "+(count8*150);
    }
}
function cart9() {
    var x = document.getElementById("item10");
    if (count9 == 0) {
      x.style.display = "none";
    } 
    else {
      x.style.display = "block";
      document.getElementById('item10text').innerHTML = "Quantity: "+ count9+"<br>"+"Amount to be paid: "+(count9*50);
    }
}
function cart10() {
    var x = document.getElementById("item11");
    if (count10 == 0) {
      x.style.display = "none";
    } 
    else {
      x.style.display = "block";
      document.getElementById('item11text').innerHTML = "Quantity: "+ count10+"<br>"+"Amount to be paid: "+(count10*200);
    }
}
function cart11() {
    var x = document.getElementById("item12");
    if (count11 == 0) {
      x.style.display = "none";
    } 
    else {
      x.style.display = "block";
      document.getElementById('item12text').innerHTML = "Quantity: "+ count11+"<br>"+"Amount to be paid: "+(count11*80);
    }
}
function hide(){
    var y = document.getElementById('cart')
    y.style.display = "none";
    window.scrollTo(0, 0);
}

function hidemain(){
    var z = document.getElementById('mainbody')
    z.style.display = "none";
    var y = document.getElementById('cart')
    y.style.display = "block";
    window.scrollTo(0, 0);
}
function total(){
	document.getElementById('total').innerHTML = "Total Payable"+"<div><img src='currency.png' style='width: 5%; float: left;'>"+ ((count*500)+(count1*700)+(count2*600)+(count3*800)+(count4*1000)+(count5*1200)+(count6*800)+(count7*800)+(count8*150)+(count9*50)+(count10*200)+(count11*80));
}

function mix(){
    hidemain();
    cart()
    cart1()
    cart2()
    cart3()
    cart4()
    cart5()
    cart6()
    cart7()
    cart8()
    cart9()
    cart10()
    cart11()
    total()
}