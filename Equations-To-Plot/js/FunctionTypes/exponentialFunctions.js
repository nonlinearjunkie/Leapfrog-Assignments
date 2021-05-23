class ExponentialFunctions extends Function {
  constructor(functionName, base) {
    super(functionName);
    this.base = base; //base of the power
  }

  //X-axis
  drawXAxis() {
    var canvas = document.querySelector("canvas");
    console.log(canvas);
    var cntxt = canvas.getContext("2d");
    cntxt.beginPath();
    cntxt.moveTo(0, canvas.height / 2);
    cntxt.lineTo(canvas.width, canvas.height / 2);
    cntxt.strokeStyle = "#FF0000";
    cntxt.stroke();
  }

  //Y-axis
  drawYAxis() {
    var canvas = document.querySelector("canvas");
    var cntxt = canvas.getContext("2d");
    cntxt.beginPath();
    cntxt.moveTo(canvas.width / 2, 0);
    cntxt.lineTo(canvas.width / 2, canvas.height);
    cntxt.strokeStyle = "#FF0000";
    cntxt.stroke();
  }

  renderPlotOutline() {
    let mainContainer = document.getElementById("container");
    let plotContainer = document.createElement("div");
    mainContainer.innerHTML = "";

    let canvasElement = document.createElement("canvas");
    canvasElement.width = 700;
    canvasElement.height = 700;
    plotContainer.appendChild(canvasElement);
    plotContainer.setAttribute("class", "plot-container");
    mainContainer.appendChild(plotContainer);

    console.log(canvasElement);
    this.drawXAxis();
    this.drawYAxis();
  }

  renderPlot() {
    //exponential plots only exist for positive bases
    if (this.base > 0) {
      console.log("Plot of exponential function");

      this.renderPlotOutline();

      var canvas = document.querySelector("canvas");
      var cntxt = canvas.getContext("2d");
      cntxt.beginPath();

      //The very high base and very low base will have high values of extreme points. To fit the points, we scale them heavily
      if (this.base >= 4 || this.base <= 0.3) {
        for (let i = -canvas.width / 60; i < canvas.width / 60; i += 0.01) {
          let x_cord = i;
          //Scale the points
          let xCordScaled = x_cord * 30;
          //Translate the points so that (0,0) lies at centre
          let xCordTranslated = canvas.width / 2 + xCordScaled;

          let y_cord = this.base ** i;

          let yCordScaled = y_cord * 0.001;
          let yCordTranslated = canvas.height / 2 - yCordScaled;
          cntxt.lineTo(xCordTranslated, yCordTranslated);
        }
      } else {
        for (let i = -canvas.width / 40; i < canvas.width / 40; i += 0.1) {
          let x_cord = i;
          //Scale the points
          let xCordScaled = x_cord * 20;
          //Translate the points so that (0,0) lies at centre
          let xCordTranslated = canvas.width / 2 + xCordScaled;

          let y_cord = this.base ** i;

          let yCordScaled = y_cord * 0.01;
          let yCordTranslated = canvas.height / 2 - yCordScaled;
          cntxt.lineTo(xCordTranslated, yCordTranslated);
        }
      }

      cntxt.strokeStyle = "black";
      cntxt.stroke();
    } else {
      console.log(
        "Exponential Plots are only defined for positive base values"
      );
    }
  }
}
