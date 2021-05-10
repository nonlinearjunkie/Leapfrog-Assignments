function Carousel(parentClassName) {
  self = this;

  this.slideIndex = 0;
  this.inDOM = [];
  this.counter = 0;
  this.functionUnlock = true;
  this.functionQueue = [];

  this.initCarousel = function () {
    this.carouselContainer = document.getElementsByClassName(
      parentClassName
    )[0];
    this.images = document.querySelectorAll("." + parentClassName + " img");
    this.changeButtonContainer = document.createElement("div");
    this.carouselContainer.appendChild(this.changeButtonContainer);

    this.leftButton = document.createElement("div");
    this.leftButton.setAttribute("onclick", "self.slideLeft(true)");
    this.changeButtonContainer.appendChild(this.leftButton);
    this.leftButtonImage = document.createElement("img");
    this.leftButtonImage.setAttribute("src", "images/left.svg");
    this.leftButton.appendChild(this.leftButtonImage);

    this.rightButton = document.createElement("div");
    this.rightButton.setAttribute("onclick", "self.slideRight(true)");
    this.changeButtonContainer.appendChild(this.rightButton);
    this.rightButtonImage = document.createElement("img");
    this.rightButtonImage.setAttribute("src", "images/right.svg");
    this.rightButton.appendChild(this.rightButtonImage);

    this.sliderNavContainer = document.createElement("div");

    for (var i = 0; i < this.images.length; i++) {
      this.inDOM.push(false);
    }

    this.changeButtonContainer.appendChild(this.sliderNavContainer);

    this.indicatorDots = [];

    this.indicatorDotColor = function indicatorDotColor(val) {
      for (var i = 0; i < this.images.length; i++) {
        if (i === val) {
          this.indicatorDots[i].style.background = "#fff";
        } else {
          this.indicatorDots[i].style.background = "transparent";
        }
      }
    };

    this.imagesArray = [];
    for (var i = 0; i < this.images.length; i++) {
      this.imgContainer = document.createElement("div");
      this.imgContainer.setAttribute("class", "img-container");
      this.images[i].parentNode.insertBefore(this.imgContainer, this.images[i]);
      this.imgContainer.appendChild(this.images[i]);
      this.imagesArray.push(this.imgContainer);
      this.carouselContainer.removeChild(this.imgContainer);

      this.indicatorDot = document.createElement("div");
      this.indicatorDot.setAttribute(
        "onclick",
        "self.setSlideIndex(" + i + ")"
      );
      this.sliderNavContainer.appendChild(this.indicatorDot);
      this.indicatorDots.push(this.indicatorDot);
    }

    this.indicatorDots[this.slideIndex].style.backgroundColor = "#fff";

    this.imgs = document.getElementsByClassName("img-container");
    this.imagesArray[this.slideIndex].style.left = "0%";
    this.changeButtonContainer.appendChild(this.imagesArray[this.slideIndex]);
    this.inDOM[0] = true;
  };

  this.initCarousel();

  this.executeFunctionQueue = function executeFunctionQueue() {
    if (this.functionQueue.length > 0) {
      if (this.functionQueue[0] == "right") {
        this.slideRight(true);
      } else if (this.functionQueue[0] == "left") {
        this.slideLeft(true);
      } else if (this.functionQueue[0] == "slideIndex") {
        this.setSlideIndex(this.functionQueue[1]);
        this.functionQueue.shift();
      }

      this.functionQueue.shift();
    }
  };

  this.slideRight = function slideRight(buttonClick) {
    if (this.functionUnlock) {
      this.functionUnlock = false;
      if (buttonClick) {
        tempIndex = this.slideIndex;
        this.slideIndex = (this.slideIndex + 1) % this.images.length;
        this.indicatorDotColor(this.slideIndex);
      }
      var counter = 0;

      if (!this.inDOM[this.slideIndex]) {
        this.imagesArray[this.slideIndex].style.left = "100%";
        this.changeButtonContainer.appendChild(
          this.imagesArray[this.slideIndex]
        );
        this.inDOM[this.slideIndex] = true;
      }
      var rightInterval = setInterval(function () {
        self.imagesArray[self.slideIndex].style.left =
          parseInt(self.imagesArray[self.slideIndex].style.left) - 2 + "%";
        self.imagesArray[tempIndex].style.left =
          parseInt(self.imagesArray[tempIndex].style.left) - 2 + "%";
        counter += 2;

        if (counter == 100) {
          self.changeButtonContainer.removeChild(self.imagesArray[tempIndex]);
          self.inDOM[tempIndex] = false;
          counter = 0;
          self.functionUnlock = true;
          clearInterval(rightInterval);
          self.executeFunctionQueue();
        }
      }, 10);
    } else {
      this.functionQueue.push("right");
    }
  };

  this.slideLeft = function slideLeft(buttonClick) {
    if (this.functionUnlock) {
      this.functionUnlock = false;
      if (buttonClick) {
        tempIndex = this.slideIndex;
        this.slideIndex = this.slideIndex - 1;
        if (this.slideIndex < 0) {
          this.slideIndex = this.images.length - 1;
        }
        this.indicatorDotColor(this.slideIndex);
      }
      var counter = 0;

      if (!this.inDOM[this.slideIndex]) {
        this.imagesArray[this.slideIndex].style.left = "-100%";
        this.changeButtonContainer.appendChild(
          this.imagesArray[this.slideIndex]
        );
        this.inDOM[this.slideIndex] = true;
      }
      var leftInterval = setInterval(function () {
        self.imagesArray[self.slideIndex].style.left =
          parseInt(self.imagesArray[self.slideIndex].style.left) + 2 + "%";
        self.imagesArray[tempIndex].style.left =
          parseInt(self.imagesArray[tempIndex].style.left) + 2 + "%";
        counter += 2;

        if (counter == 100) {
          self.changeButtonContainer.removeChild(self.imagesArray[tempIndex]);
          self.inDOM[tempIndex] = false;
          counter = 0;
          self.functionUnlock = true;
          clearInterval(leftInterval);
          self.executeFunctionQueue();
        }
      }, 10);
    } else {
      this.functionQueue.push("left");
    }
  };

  this.setSlideIndex = function setSlideIndex(val) {
    if (this.functionUnlock) {
      this.indicatorDotColor(val);
      tempIndex = this.slideIndex;
      this.slideIndex = val;
      if (val > tempIndex) {
        this.slideRight(false);
      } else if (val < tempIndex) {
        this.slideLeft(false);
      }
    } else {
      this.functionQueue.push("slideIndex");
      this.functionQueue.push(val);
    }
  };

  this.initStyle = function initStyle() {
    this.carouselContainer.style.border = "1px solid black";
    this.carouselContainer.style.height = "563px";
    this.carouselContainer.style.margin = "0px auto";
    this.carouselContainer.style.overflow = "hidden";
    this.carouselContainer.style.width = "1000px";

    this.changeButtonContainer.style.height = "100%";
    this.changeButtonContainer.style.position = "relative";
    this.changeButtonContainer.style.width = "100%";

    this.leftButton.style.width = "18px";
    this.leftButton.style.paddingLeft = "6px";
    this.leftButton.style.paddingTop = "239px";
    this.leftButton.style.height =
      "calc(100% - " + this.leftButton.style.paddingTop + ")";
    this.leftButton.style.position = "absolute";
    this.leftButton.style.left = "0px";
    this.leftButton.style.zIndex = 10;
    lftBtn = this.leftButton;
    lftBtn.style.backgroundColor = "#ad7e166b";
    this.leftButton.onmouseover = function () {
      lftBtn.style.cursor = "pointer";
    };

    this.rightButton.style.width = "18px";
    this.rightButton.style.paddingLeft = "6px";
    this.rightButton.style.paddingTop = "239px";
    this.rightButton.style.height =
      "calc(100% - " + this.leftButton.style.paddingTop + ")";
    this.rightButton.style.position = "absolute";
    this.rightButton.style.right = "0px";
    this.rightButton.style.zIndex = 10;
    rtBtn = this.rightButton;
    rtBtn.style.backgroundColor = "#ad7e166b";
    this.rightButton.onmouseover = function () {
      rtBtn.style.cursor = "pointer";
    };

    this.sliderNavContainer.style.height = "20px";
    this.sliderNavContainer.style.position = "absolute";
    this.sliderNavContainer.style.bottom = "0px";
    this.sliderNavContainer.style.zIndex = 10;
    this.sliderNavContainer.style.width = 17 * this.images.length + "px";
    this.sliderNavContainer.style.left =
      "calc(50% - " +
      (parseInt(this.sliderNavContainer.style.width) / 2 - 5) +
      "px)";

    for (var i = 0; i < this.images.length; i++) {
      this.imagesArray[i].style.height = "100%";
      this.imagesArray[i].style.width = "100%";
      this.imagesArray[i].style.position = "absolute";
      this.imagesArray[i].style.left = 100 * i + "%";
      this.images[i].style.width = "100%";
      this.images[i].style.height = "100%";

      this.indicatorDots[i].style.width = "10px";
      this.indicatorDots[i].style.height = "10px";
      this.indicatorDots[i].style.borderRadius = "50%";
      this.indicatorDots[i].style.border = "1px solid #fff";
      this.indicatorDots[i].style.marginRight = "5px";
      this.indicatorDots[i].style.display = "inline-block";
      this.indicatorDots[i].style.cursor = "pointer";
    }
  };

  this.initStyle();
}
