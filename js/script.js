var randomLoc = Math.floor(Math.random() * 5);
var location1 = randomLoc, location2 = location1 + 1, location3 = location2 + 1;

var guess;

var hits = 0;
var guesses = 0;
var isSunk = false;

while (isSunk == false) {
  guess = prompt("Redy, aim, fire!(enter a number 0-6):");
  if (guess < 0 || guess > 6 || null) {
    alert("Please enter a valid cell number!");
  } else {
    guesses = guesses + 1;
    if (guess == location1 || guess == location2 || guess == location3) {
      alert("HIT!");
      hits += 1;
      if (hits === 3) {
        isSunk = true;
        alert("You sank my battleship");
        } 
      } else {
        alert("MISS!");
    }
  }
}

var status =   "you took " + guesses + " guesses to sink the batleship, " + "which means you shoopting accuaracy was " + (3/guesses);
alert(status);

