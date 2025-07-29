var randomNumber1=Math.floor(Math.random()*6)+1;
var imgsrc1="./images/dice"+randomNumber1+".png";
document.querySelectorAll("img")[0].setAttribute("src",imgsrc1);

var randomNumber2=Math.floor(Math.random()*6)+1;
var imgsrc2="./images/dice"+randomNumber2+".png";
document.querySelectorAll("img")[1].setAttribute("src",imgsrc2);

if(randomNumber1<randomNumber2){
    document.querySelector("h1").innerHTML="player 2 wins";
}
else if(randomNumber1>randomNumber2){
    document.querySelector("h1").innerHTML="player 1 wins";
}
else{
    document.querySelector("h1").innerHTML="its a draw";
}