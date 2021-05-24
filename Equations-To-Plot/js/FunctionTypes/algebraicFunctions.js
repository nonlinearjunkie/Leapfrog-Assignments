class AlgebraicFunctions extends Function {
  constructor(functionName, functionObjectsArray) {
    super(functionName, functionObjectsArray);
  }
}

class AlgebraicFunctionType {
  constructor(functionName) {
    this.functionName = functionName;
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
    mainContainer.setAttribute("class", "clearfix");
    let plotContainer = document.createElement("div");
    plotContainer.setAttribute("class", "plot-container left");
    mainContainer.innerHTML = "";

    let plotContainerHeading = document.createElement("div");
    plotContainerHeading.setAttribute("class", "plotHeading");
    plotContainerHeading.innerHTML = `<h3> Plot of ${this.functionName} Algebraic Function</h3>`;
    plotContainer.appendChild(plotContainerHeading);

    let plotDiv = document.createElement("div");
    let canvasElement = document.createElement("canvas");
    canvasElement.width = 700;
    canvasElement.height = 700;

    plotDiv.appendChild(canvasElement);
    plotContainer.appendChild(plotDiv);

    plotDiv.setAttribute("class", "plot-div");
    mainContainer.appendChild(plotContainer);

    this.drawXAxis();
    this.drawYAxis();
  }

  renderPlot() {}
}

//Constant algebraic Function Eqn: y=c (c->Constant)
class Constant extends AlgebraicFunctionType {
  constructor(functionName, constantValue) {
    super(functionName);
    this.constant = constantValue;
  }

  renderPlot() {
    console.log("Constant Algebraic Function Rendered");
    console.log(this);
    this.renderPlotOutline();

    var canvas = document.querySelector("canvas");
    var cntxt = canvas.getContext("2d");
    cntxt.beginPath();

    for (let i = -canvas.width / 2; i < canvas.width / 2; i += 0.1) {
      let x_cord = i;
      //Scale the points
      let xCordScaled = x_cord * 10;
      //Translate the points so that (0,0) lies at centre
      let xCordTranslated = canvas.width / 2 + xCordScaled;

      let y_cord = this.constant;
      let yCordScaled = y_cord * 10;
      let yCordTranslated = canvas.height / 2 - yCordScaled;

      cntxt.lineTo(xCordTranslated, yCordTranslated);
    }

    cntxt.strokeStyle = "black";
    cntxt.stroke();
  }
}

//Linear Algebraic Function Eqn: y=mx+c (m->Slope c-> y-intercept)
class Linear extends AlgebraicFunctionType {
  constructor(functionName, slopeValue, yInterceptValue) {
    super(functionName);
    this.slope = slopeValue;
    this.yIntercept = yInterceptValue;
  }

  renderPlot() {
    console.log("Linear Algebraic Function Rendered");
    this.renderPlotOutline();

    var canvas = document.querySelector("canvas");
    var cntxt = canvas.getContext("2d");
    cntxt.beginPath();

    //For loop with increment of 0.1 to make curve smoother
    for (let i = -canvas.width / 2; i < canvas.width / 2; i += 0.1) {
      let x_cord = i;
      //Scale the points
      let xCordScaled = x_cord * 10;
      //Translate the points so that (0,0) lies at centre
      let xCordTranslated = canvas.width / 2 + xCordScaled;

      let y_cord = this.slope * i + this.yIntercept;
      let yCordScaled = y_cord * 10;
      let yCordTranslated = canvas.height / 2 - yCordScaled;
      cntxt.lineTo(xCordTranslated, yCordTranslated);
    }
    cntxt.strokeStyle = "black";
    cntxt.stroke();
  }
}

//Quadratic Algebraic Equation: y=ax**2+bx+c

class Quadratic extends AlgebraicFunctionType {
  constructor(functionName, a, b, c) {
    super(functionName);
    this.a = a;
    this.b = b;
    this.c = c;
  }

  renderPlot() {
    console.log("Quadratic Algebraic Function Rendered");
    this.renderPlotOutline();

    var canvas = document.querySelector("canvas");
    var cntxt = canvas.getContext("2d");
    cntxt.beginPath();

    //For loop with increment of 0.1 to make curve smoother
    for (let i = -canvas.width / 2; i < canvas.width / 2; i += 0.1) {
      let x_cord = i;
      let xCordScaled = x_cord * 10;
      let xCordTranslated = canvas.width / 2 + xCordScaled * 10;
      let y_cord = this.a * i ** 2 + this.b * i + this.c;
      let yCordScaled = y_cord * 10;
      let yCordTranslated = canvas.height / 2 - yCordScaled;
      cntxt.lineTo(xCordTranslated, yCordTranslated);
    }
    cntxt.strokeStyle = "black";
    cntxt.stroke();
  }
}

//Cubic Algebraic Equation: y=ax**3+bx**2+cx+d

class Cubic extends AlgebraicFunctionType {
  constructor(functionName, a, b, c, d) {
    super(functionName);
    this.a = a;
    this.b = b;
    this.c = c;
    this.d = d;
  }

  renderPlot() {
    this.renderPlotOutline();

    var canvas = document.querySelector("canvas");
    var cntxt = canvas.getContext("2d");
    cntxt.beginPath();

    //For loop with increment of 0.1 to make curve smoother
    for (let i = -canvas.width / 2; i < canvas.width / 2; i += 0.1) {
      let x_cord = i;
      //Scale the points
      let xCordScaled = x_cord * 10;
      //Translate the points so that (0,0) lies at centre
      let xCordTranslated = canvas.width / 2 + xCordScaled;

      let y_cord = this.a * i ** 3 + this.b * i ** 2 + this.c * i + this.d;
      let yCordScaled = y_cord * 10;
      let yCordTranslated = canvas.height / 2 - yCordScaled;
      cntxt.lineTo(xCordTranslated, yCordTranslated);
    }
    cntxt.strokeStyle = "black";
    cntxt.stroke();
    console.log("Cubic Algebraic Function Rendered");
  }
}
