//player 1
var r1 = Math.floor((Math.random()* 6)+1);
var i1 = "dice"+r1+".png";
var src1 = "images/"+i1;
var image1 = document.querySelectorAll("img")[0];

image1.setAttribute("src", src1);

//player 2
var r2 = Math.floor((Math.random()* 6)+1);
var i2 = "dice"+r2+".png";
var src2 = "images/"+i2;
var image2 = document.querySelectorAll("img")[1];

image2.setAttribute("src", src2);

if(r1>r2){
    document.querySelector("h1").innerHTML = "Player 1 Wins!";
}
else if(r2>r1){
    document.querySelector("h1").innerHTML = "Player 2 Wins!";
}
else{
    document.querySelector("h1").innerHTML = "Oops! Draw...";
}