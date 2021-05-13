function Car(parentElement) {
  this.dy = 5;
  this.x = 0;
  this.y = 0;
  this.left = 50;
  this.width = 50;
  this.height = 80;
  this.element = null;
  this.parentElement = parentElement;
  this.bullets = [];
  this.bulletsCount = 3;
  var that = this;

  this.init = function () {
    var car = document.createElement("div");
    car.style.height = this.height + "px";
    car.style.width = this.width + "px";
    car.setAttribute("class", "player-car");
    car.style.left = this.left + "%";
    var carImg = document.createElement("img");
    carImg.src = "images/cars/car-1.png";
    carImg.style.width = "100%";

    car.appendChild(carImg);
    this.element = car;
    this.parentElement.appendChild(car);
  };

  this.moveLeft = function () {
    if (this.left <= 20) {
      this.left = 20;
      return;
    }

    this.left -= 30;
    this.element.style.left = this.left + "%";
  };

  this.moveRight = function () {
    if (this.left >= 80) {
      this.left = 80;
      return;
    }

    this.left += 30;
    this.element.style.left = this.left + "%";
  };

  this.fireBullet = function () {
    if (this.bulletsCount <= 0) return;
    this.bullets.push(
      new Bullet(this.parentElement, this.left, this.element.offsetTop).init()
    );
    this.bulletsCount--;
  };

  this.moveBullet = function () {
    for (var i = this.bullets.length - 1; i >= 0; i--) {
      if (this.bullets[i].y < -5) {
        this.bullets[i].destroyBullet();
        this.bullets.splice(i, 1);
      } else {
        this.bullets[i].moveBullet();
      }
    }
  };
}

function EnemyCar(parentElement, top, left, dy, carImgId) {
  this.dy = dy || 2;
  this.top = top;
  this.left = left || 50;
  this.width = 50;
  this.height = 80;
  this.element = null;
  this.parentElement = parentElement;
  var that = this;

  this.init = function () {
    var car = document.createElement("div");
    car.style.height = this.height + "px";
    car.style.width = this.width + "px";
    car.setAttribute("class", "enemy-car");
    car.style.left = this.left + "%";
    car.style.top = this.top + "px";
    var carImg = document.createElement("img");
    carImg.src = "images/cars/car-" + carImgId + ".png";
    carImg.style.width = "100%";

    car.appendChild(carImg);
    this.element = car;
    this.parentElement.appendChild(car);
    return this;
  };

  this.moveEnemy = function () {
    this.top += dy;
    this.element.style.top = this.top + "px";
  };

  this.checkCollision = function (playerCar) {
    var car1 = this.element.getBoundingClientRect();
    var car2 = playerCar.element.getBoundingClientRect();

    return (
      car1.x < car2.x + car2.width &&
      car1.x + car1.width > car2.x &&
      car1.y < car2.y + car2.height &&
      car1.y + car1.height > car2.y
    );
  };

  this.checkBulletHit = function (playerCar) {
    return playerCar.bullets.some(function (bullet, i) {
      if (bullet.y <= this.top + this.height && bullet.x === this.left) {
        bullet.destroyBullet();
        playerCar.bullets.splice(i, 1);
        return true; // stop loop
      } else return false;
    }, this);
  };
  this.removeCarElement = function () {
    this.element.remove();
  };
}

// Game type
function Game(parentElement) {
  var enemyCars = [];

  var player = {
    car: null,
    score: 0,
    start: false,
    speed: 4,
    enemyDestroyCounter: 0,
    keys: {
      ArrowLeft: false,
      ArrowRight: false,
      Enter: false,
    },
    updateKey: function (e) {
      if (this.keys[e.key] == "undefined") return;
      this.keys[e.key] = true;
    },
  };

  this.highScore = {
    name: "unknown",
    score: 0,
  };

  this.parentElement = parentElement;
  this.AltScreen = parentElement.querySelector(".welcome-screen");
  this.startButton = document.getElementById("start-button");
  console.log(this.startButton);
  this.gameArea = parentElement.querySelector(".app");
  this.highway = null;
  this.gameCounter = 0;

  var that = this;

  this.init = function () {
    this.startButton.addEventListener("click", this.start.bind(this));

    this.highScore = localStorage.getItem("carGameHighScore")
      ? JSON.parse(localStorage.getItem("carGameHighScore"))
      : this.highScore;

    this.highway = new HighWay(this.gameArea);
  };

  this.start = function () {
    player.car = new Car(this.gameArea);
    player.car.init();
    player.start = true;

    this.AltScreen.classList.add("hide");
    this.startButton.classList.add("hide");
    this.gameArea.classList.remove("hide");
    this.gameArea.focus();
    this.highway.init();
    this.statsScreen();
    this.gameArea.addEventListener("keydown", player.updateKey.bind(player));

    window.requestAnimationFrame(this.gameLoop.bind(this));
  };

  this.statsScreen = function () {
    var scoreScreen = document.createElement("div");
    scoreScreen.style.position = "absolute";
    scoreScreen.style.top = "0";
    scoreScreen.style.left = "40px";
    scoreScreen.innerHTML = "<h2>Score</h2><h2>" + player.score + "</h2>";
    this.parentElement.appendChild(scoreScreen);
    this.scoreScreen = scoreScreen;

    var highScoreScreen = document.createElement("div");
    highScoreScreen.style.position = "absolute";
    highScoreScreen.style.top = "0";
    highScoreScreen.style.right = "80px";
    highScoreScreen.innerHTML =
      "<h2>HighScore</h2><h2>" + this.highScore.score + "</h2>";
    this.parentElement.appendChild(highScoreScreen);
    this.highScoreScreen = highScoreScreen;
  };

  this.updateStats = function () {
    this.scoreScreen.innerHTML = "<h2>Score</h2><h2>" + player.score + "</h2>";
  };

  this.gameLoop = function () {
    if (player.keys.ArrowLeft) {
      player.keys.ArrowLeft = false;
      player.car.moveLeft();
    }

    if (player.keys.ArrowRight) {
      player.keys.ArrowRight = false;
      player.car.moveRight();
    }

    if (player.keys.Enter) {
      player.car.fireBullet();
      player.keys.Enter = false;
    }

    this.highway.moveHighWay(player.speed);
    player.car.moveBullet();
    var hitFlag = false;
    var carsToBeRemoved = [];

    enemyCars.forEach(function (enemy, i) {
      if (enemy.checkCollision(player.car)) {
        console.log("HIT !!");

        enemy.element.style.transform = "rotate(20deg)";
        player.car.element.style.transform = "rotate(-20deg)";
        console.log("GameOVER score: ", player.score);
        var gameOverScreen = document.createElement("text");
        gameOverScreen.innerHTML =
          "<h2>GAME OVER</h2><h2>SCORE: " + player.score + "</h2>";
        gameOverScreen.style.position = "absolute";
        gameOverScreen.style.height = "100%";
        gameOverScreen.style.width = "100%";
        gameOverScreen.style.color = "#fff";
        gameOverScreen.style.display = "flex";
        gameOverScreen.style.flexDirection = "column";
        gameOverScreen.style.justifyContent = "center";
        gameOverScreen.style.alignItems = "center";
        that.gameArea.appendChild(gameOverScreen);

        if (player.score > that.highScore.score) {
          that.highScore.score = player.score;
          localStorage.setItem(
            "carGameHighScore",
            JSON.stringify(that.highScore)
          );
        }
        hitFlag = true;
        return;
      }

      enemy.moveEnemy();

      if (enemy.checkBulletHit(player.car)) {
        player.score++;
        enemy.removeCarElement();
        carsToBeRemoved.push(i);
      }

      if (enemy.top > 500 + 50) {
        enemy.removeCarElement();
        carsToBeRemoved.push(i);
        player.score += 1;
        player.enemyDestroyCounter++;

        if (player.score % 5 === 0) {
          player.car.bulletsCount = 3;
          console.log("Armor reloaded");
        }
        console.log("enemy car passed without hit score: " + player.score);
        if (
          player.enemyDestroyCounter > 0 &&
          player.enemyDestroyCounter % 5 == 0
        ) {
          player.speed += 1;

          console.log("speed increased", player.speed);
          enemyCars.forEach(function (el) {
            el.dy = player.speed;
          });
        }
      }
    });

    carsToBeRemoved.sort(function (a, b) {
      return b - a;
    });
    carsToBeRemoved.forEach(function (i) {
      enemyCars.splice(i, 1);
    });

    if (this.gameCounter % 120 === 0) {
      enemyCars.push(
        new EnemyCar(
          that.gameArea,
          -330,
          20 + getRandomNumber(0, 2) * 30,
          3,
          getRandomNumber(1, 3)
        ).init()
      );
    }
    if (!hitFlag) {
      this.gameCounter++;
      this.updateStats();
      window.requestAnimationFrame(that.gameLoop.bind(that));
    }
  };
}

function HighWay(parentElement) {
  this.parentElement = parentElement;
  this.element = null;
  this.y1 = 0;
  this.y2 = 0;
  this.images = null;

  var imgDimensions = null;

  this.init = function () {
    this.images = this.parentElement.getElementsByClassName("highway-image");

    imgDimensions = this.images[0].getBoundingClientRect();

    this.y2 = -imgDimensions.height;

    this.images[1].style.top = this.y2 + "px";

    return this;
  };

  this.moveHighWay = function (speed = 5) {
    if (this.y1 > 600) {
      this.y1 = this.y2 - (imgDimensions.height - speed);
    } else {
      this.y1 += speed;
    }

    if (this.y2 > 600) {
      this.y2 = this.y1 - (imgDimensions.height - speed);
    } else {
      this.y2 += speed;
    }

    this.images[0].style.top = this.y1 + "px";
    this.images[1].style.top = this.y2 + "px";
  };
}

function getRandomNumber(min, max) {
  return Math.floor(Math.random() * (max - min) + min);
}

function Bullet(parentElement, x, y) {
  this.x = x;
  this.y = y;

  this.dy = 3;

  this.width = 35;
  this.height = 20;

  this.element = null;
  this.parentElement = null;

  this.init = function () {
    this.parentElement = parentElement;

    var bullet = document.createElement("div");
    bullet.style.height = this.height + "px";
    bullet.style.width = this.width + "px";

    bullet.style.backgroundColor = "cecece";
    bullet.style.backgroundImage = 'url("images/missile.png")';
    bullet.style.backgroundSize = "cover";
    bullet.style.position = "absolute";

    bullet.style.left = this.x + "%";
    bullet.style.transform = "translate(-50%)";
    bullet.style.top = this.y - this.height + "px";

    this.parentElement.appendChild(bullet);

    this.element = bullet;
    return this;
  };

  this.moveBullet = function () {
    this.y -= this.dy;
    this.element.style.top = this.y + "px";
  };

  this.destroyBullet = function () {
    this.element.remove();
  };
}

var app = document.getElementById("gameArena");
var game = new Game(app);
game.init();
