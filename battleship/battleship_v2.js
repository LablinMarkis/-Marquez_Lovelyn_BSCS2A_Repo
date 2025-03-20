var randomloc = Math.floor(Math.random() * 5);

var location1 = randomloc;
var location2 = location1  + 1;
var location3 = location2 + 1;

let guess;
let hits = 0;
let guesses = 0;

let isSunk = false;

while (isSunk) {
    guess = prompt("Ready? Aim and FIRE!(Enter number 0 to 6); ");

    if (guess == null) {
        alert ("Thank you for playing!");
        break;
        


    } else {
        guesses = guesses + 1;

        if (guess == location1 || guess == location2 || guess == location3) {
            alert('Hits')
            hits++;

            if (hits == 3) {
                isSunk = true;
                alert("You sank my battleship")
            }
        } else {
            alert('Miss!')
        }
    }
}
var stats = "You sank my battleship at " + guesses + " guesses" + "and your accuracy is" + (3/guesses);

alert(stats);