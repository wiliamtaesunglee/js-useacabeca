var location1 = 3;
var location2 = 4;
var location3 = 5;

var guess;

var hits = 0;
var guesses = 0;
var isSunk = false;

while (isSunk == false); {
  guesses = prompt("Redy, aim, fire!(enter a number 0-6):");
  if (guess < 0 || guesses > 6 || null) {
    alert("Please enter a valid cell number!");
  }else {
    guesses += 1;
    if (guesses == location1 || guesses == location2 || guesses == location3) {
      alert("HIT!");
      hits += 1;
      if (hits == 3) {
        isSunk = true;
        alert("You sank my battleship");
        } 
      } else {
        alert("MISS!");
    }
  }
}

var stats =   ${"you took"} + guesses + ${"guesses to sink the batleship,"} + ${"which means you shoopting accuaracy was"} + (3/guesses);
alert(status);

