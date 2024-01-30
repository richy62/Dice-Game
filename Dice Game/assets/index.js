// Player 1
var randomNumber1 = Math.floor(Math.random() * 6) + 1;
var randomDiceImage1 = "dice" + randomNumber1 + ".png";
var randomImageSource1 = "./assets/images/" + randomDiceImage1;
document.querySelectorAll("img")[0].setAttribute("src", randomImageSource1);

// Player 2
var randomNumber2 = Math.floor(Math.random() * 6) + 1;
var randomDiceImage2 = "dice" + randomNumber2 + ".png";
var randomImageSource2 = "./assets/images/" + randomDiceImage2;
document.querySelectorAll("img")[1].setAttribute("src", randomImageSource2);

// Player 3
var randomNumber3 = Math.floor(Math.random() * 6) + 1;
var randomDiceImage3 = "dice" + randomNumber3 + ".png";
var randomImageSource3 = "./assets/images/" + randomDiceImage3;
document.querySelectorAll("img")[2].setAttribute("src", randomImageSource3);

// Player 4
var randomNumber4 = Math.floor(Math.random() * 6) + 1;
var randomDiceImage4 = "dice" + randomNumber4 + ".png";
var randomImageSource4 = "./assets/images/" + randomDiceImage4;
document.querySelectorAll("img")[3].setAttribute("src", randomImageSource4);

// Determine the winners and draws
var winners = [];
var draws = [];

// Check for individual wins
if (randomNumber1 >= randomNumber2 && randomNumber1 >= randomNumber3 && randomNumber1 >= randomNumber4) {
  winners.push("Player 1");
} else if (randomNumber2 >= randomNumber1 && randomNumber2 >= randomNumber3 && randomNumber2 >= randomNumber4) {
  winners.push("Player 2");
} else if (randomNumber3 >= randomNumber1 && randomNumber3 >= randomNumber2 && randomNumber3 >= randomNumber4) {
  winners.push("Player 3");
} else if (randomNumber4 >= randomNumber1 && randomNumber4 >= randomNumber2 && randomNumber4 >= randomNumber3) {
  winners.push("Player 4");
}

// Check for draws between pairs
if (randomNumber1 === randomNumber2) {
  draws.push("Player 1 and Player 2");
}
if (randomNumber1 === randomNumber3) {
  draws.push("Player 1 and Player 3");
}
if (randomNumber1 === randomNumber4) {
  draws.push("Player 1 and Player 4");
}
if (randomNumber2 === randomNumber3) {
  draws.push("Player 2 and Player 3");
}
if (randomNumber2 === randomNumber4) {
  draws.push("Player 2 and Player 4");
}
if (randomNumber3 === randomNumber4) {
  draws.push("Player 3 and Player 4");
}

// Display the results
if (winners.length === 1 && draws.length === 0) {
  document.querySelector("h1").innerHTML = "🚩 " + winners[0] + " Wins!";
} else if (winners.length === 0 && draws.length === 1) {
  document.querySelector("h1").innerHTML = "🚩 It's a draw between " + draws[0] + "!";
} else if (winners.length === 1 && draws.length === 1) {
  document.querySelector("h1").innerHTML = "🚩 " + winners[0] + " Wins! It's a draw between " + draws[0] + "!";
} else if (winners.length === 1 && draws.length === 2) {
  document.querySelector("h1").innerHTML = "🚩 " + winners[0] + " Wins! It's a draw between " + draws[0] + " and " + draws[1] + "!";
} else if (winners.length === 2 && draws.length === 0) {
  document.querySelector("h1").innerHTML = "🚩 It's a draw between " + winners[0] + " and " + winners[1] + "!";
} else if (winners.length === 2 && draws.length === 1) {
  document.querySelector("h1").innerHTML = "🚩 It's a draw between " + winners[0] + " and " + winners[1] + ". It's also a draw between " + draws[0] + "!";
} else if (winners.length === 0 && draws.length === 2) {
  document.querySelector("h1").innerHTML = "🚩 It's a draw between " + draws[0] + " and " + draws[1] + "!";
} else if (winners.length === 1 && draws.length === 3) {
  document.querySelector("h1").innerHTML = "🚩 " + winners[0] + " Wins! It's a draw between " + draws[0] + ", " + draws[1] + ", and " + draws[2] + "!";
} else {
  document.querySelector("h1").innerHTML = "It's a four-way draw!";
}
