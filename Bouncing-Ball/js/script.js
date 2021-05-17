var container = document.getElementById("container");

container.style.height = "700px";
container.style.width = "700px";
container.style.border = "5px solid rgb(228 220 220)";
container.style.margin = "0 auto";
container.style.position = "relative";

var directionDown = true;

function createBall() {
  var ball = document.createElement("div");
  ball.setAttribute("id", "ball");
  ball.style.height = "150px";
  ball.style.width = "150px";
  ball.style.borderRadius = "50%";
  ball.style.backgroundColor = "#fa7";
  ball.style.position = "absolute";
  ball.style.left = "40%";
  container.appendChild(ball);
}

createBall();

let downSpeed = 1;
let upSpeed = 7;
let gravity = 0.05;

function moveBallDown() {
  let ball = document.getElementById("ball");
  let ballY = ball.style.top;
  if (ballY === "") {
    ballY = "0px";
  }
  ballYVal = parseInt(ballY);
  if (ballYVal < 550) {
    ballYVal += downSpeed;
    downSpeed += gravity;
    ball.style.top = ballYVal + "px";
  } else {
    directionDown = false;
    upSpeed = 7;
  }
}

function moveBallUp() {
  let ball = document.getElementById("ball");
  let ballY = ball.style.top;
  if (ballY === "") {
    ballY = "0px";
  }
  ballYVal = parseInt(ballY);
  if (ballYVal > 0) {
    ballYVal -= upSpeed;
    upSpeed -= gravity;
    ball.style.top = ballYVal + "px";
    console.log(speed);
  } else {
    directionDown = true;
    downSpeed = 1;
  }
}

function animateBall() {
  if (directionDown) {
    moveBallDown();
  } else {
    moveBallUp();
  }
}

setInterval(animateBall, 10);
