class GaussianFunctions extends Function {
  constructor(functionName, mean, standardDeviation) {
    super(functionName);
    this.mean = mean;
    this.standardDeviation = standardDeviation;
  }

  //X-axis
  /*We only need 1st quadrant and 2nd quadrant as probability values can never be negative */
  drawXAxis() {
    var canvas = document.querySelector("canvas");
    console.log(canvas);
    var cntxt = canvas.getContext("2d");
    cntxt.beginPath();
    cntxt.moveTo(0, canvas.height - 50);
    cntxt.lineTo(canvas.width, canvas.height - 50);
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

    let plotContainerHeading = document.createElement("div");
    plotContainerHeading.setAttribute("class", "plotHeading");
    plotContainerHeading.innerHTML = `<h3> Plot of ${this.functionName} Function</h3>`;
    mainContainer.appendChild(plotContainerHeading);

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
    //Negative value of standard deviation is not practical
    if (this.standardDeviation > 0) {
      console.log("Plot of Gaussian function");

      this.renderPlotOutline();

      var canvas = document.querySelector("canvas");
      var cntxt = canvas.getContext("2d");
      cntxt.beginPath();

      for (let i = -(canvas.width / 10); i < canvas.width / 10; i += 0.1) {
        let x_cord = i;
        //Scale the points
        let xCordScaled = x_cord * 5;
        //Translate the points so that (0,0) lies at mid bottom
        let xCordTranslated = canvas.width / 2 + xCordScaled;

        let variance = this.standardDeviation ** 2;

        let amplitude = 1 / Math.sqrt(2 * Math.PI * variance); // (1/sigma *(sqrt(2*pi)))

        let exponentNumerator = -((i - this.mean) ** 2);
        let expoentDenominator = 2 * variance;
        let exponent = exponentNumerator / expoentDenominator;
        let y_cord = amplitude * Math.E ** exponent;

        let yCordScaled = y_cord * 1000; //Multiply heavily as the results are probabilities are very low
        let yCordTranslated = canvas.height - 50 - yCordScaled;
        cntxt.lineTo(xCordTranslated, yCordTranslated);
      }

      cntxt.strokeStyle = "black";
      cntxt.stroke();
    } else {
      console.log("Standard Deviation cannot be negative");
    }
  }
}
