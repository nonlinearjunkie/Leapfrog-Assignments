class LogarithmicFunctions extends Function {
  constructor(functionName, base) {
    super(functionName);
    this.base = base;
  }

  getBaseLog(x, y) {
    return Math.log(y) / Math.log(x);
  }

  //X-axis
  /*We only need 1st quadrant for logarithmic functions as logarithm does not exists for negative numbers 
  and output of logaithm is also always positive */
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
    cntxt.moveTo(50, 0);
    cntxt.lineTo(50, canvas.height);
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
    //The base of logarithm must be greater than 0
    if (this.base > 0) {
      console.log("Plot of Logarithmic function");

      this.renderPlotOutline();

      var canvas = document.querySelector("canvas");
      var cntxt = canvas.getContext("2d");
      cntxt.beginPath();

      for (let i = 0; i < canvas.width; i += 0.1) {
        let x_cord = i;
        //Scale the points
        let xCordScaled = x_cord * 5;
        //Translate the points so that (0,0) lies at bottom left end
        let xCordTranslated = 50 + xCordScaled;

        let y_cord = this.getBaseLog(this.base, i);

        let yCordScaled = y_cord * 10;
        let yCordTranslated = canvas.height - 50 - yCordScaled;
        cntxt.lineTo(xCordTranslated, yCordTranslated);
      }

      cntxt.strokeStyle = "black";
      cntxt.stroke();
    } else {
      console.log("Logarithm exists only for positive bases");
    }
  }
}
