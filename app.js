var Car = document.getElementById('TheCar');
var Button = document.getElementById('TheButton');
var Direction = "right";
var POS = 0;
var Score = document.getElementById('score')
var speed = 5;
var R = 0;
var L = 0;
var leftscore = [];
var rightscore = [];
var totalscore = 0;

//This function is showing an example of a for loop and while loop. This is not ideal, but meets the requirement!

function KeepScore() {
    var i = 0;
    totalscore = 0;
    for (i = 0; i < leftscore.length; i++) {
        totalscore++;
    }
    while (i < leftscore.length + rightscore.length) {
        i++;
        totalscore++;
    }
// Using back ticks to create a special string, I don't have to keep using the "+" character and quotations.
Score.innerHTML = `The Car has hit the left wall ${leftscore.length} times, and the right wall ${rightscore.length} times. For a total of ${totalscore}  collisions.`;

}


function STOPInterval() {
    clearInterval(R);
    clearInterval(L);

}


// Pretty obvious what this is doing, changes the Button text, Car picture, stops one function and starts the other.
function ChangeDirection() {

    if (Direction === "left") {
        STOPInterval();
        Button.value = "Go Left!";
        Button.style.backgroundColor = "blue";
        Direction = "right";
        Car.src = "carRight.png";
        R = setInterval(moveRight, 25);

    } else {
        STOPInterval();
        Button.value = "Go Right!";
        Button.style.backgroundColor = "red";
        Direction = "left";
        Car.src = "carLeft.png";
        L = setInterval(moveLeft, 25);

    }
}

function moveRight() {
    if (speed <= 0){speed = 1}
    if (POS > 250) {
        rightscore.push('HIT');
        KeepScore();
        STOPInterval();
        ChangeDirection();
    }
    POS = POS + speed;
    Car.style.left = (POS) + "px";

}

function moveLeft() {
    if (speed <= 0){speed = 1}
    if (POS < -225) {
        leftscore.push('HIT');
        KeepScore();
        STOPInterval();
        ChangeDirection();
    }
    POS = POS - speed;
    Car.style.left = (POS) + "px";
}
