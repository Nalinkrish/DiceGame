
// first random number

function rollTheDice() {
    setTimeout(function () {  // addtional function to give time

var randomNumber1 = Math.random() * 6 + 1;
var randomNumber2 = Math.random() * 6 + 1;

randomNumber1 = Math.floor(randomNumber1);
randomNumber2 = Math.floor(randomNumber2);

//select a random image
var randomImage1 = "images/dice" + randomNumber1 + ".png";
var randomImage2 = "images/dice" + randomNumber2 + ".png";

//select player 1 image and change the src attributes
document.querySelector(".image1").setAttribute("src", randomImage1);
document.querySelector(".image2").setAttribute("src", randomImage2);

if (randomNumber1 > randomNumber2){
    document.querySelector("h1").innerHTML = "Player 1 Wins"
}
else if (randomNumber1 < randomNumber2){
    document.querySelector("h1").innerHTML = "Player 2 Wins"
}
else{
    document.querySelector("h1").innerHTML = "Match Draw"
}
 }, 2500);
   

}


// function rollTheDice() {
//     setTimeout(function () {


//         var randomNumber1 = Math.floor(Math.random() * 6 ) + 1;
//         var randomNumber2 = Math.floor(Math.random() * 6 ) + 1;

//         var randomImage1 = "images/dice" + "dice" +randomImage1 + "png"
//         var randomImage2 = "images/dice" + "dice" +randomImage2 + "png"
    
//         document.querySelector(".image1").setAttribute("src",randomImage1);
//         document.querySelector(".image2").setAttribute("src",randomImage2);
    
//         if (randomNumber1 > randomNumber2){
//             document.querySelector("h1").innerHTML = "Player 1 Wins"
//         }
//         else if (randomNumber1 < randomNumber2){
//             document.querySelector("h1").innerHTML = "Player 2 Wins"
//         }
//         else{
//             document.querySelector("h1").innerHTML = "Match Draw"
//         }
//     }, 2500);
   

// }