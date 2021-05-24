class HyperbolicFunctions extends Function {
  constructor(functionName, functionObjectsArray) {
    super(functionName, functionObjectsArray);
  }
}

class HyperbolicFunctionType {
  constructor(functionName, amplitude, frequency) {
    this.functionName = functionName;
    this.A = amplitude;
    let angularFrequency = 2 * Math.PI * frequency;
    this.b = angularFrequency;
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

  renderPlot() {}
}

// Class for sinh Equation
//General sinh eqn: y=A*sinh(bx)

class SinhFunction extends HyperbolicFunctionType {
  constructor(functionName, amplitude, frequency) {
    super(functionName, amplitude, frequency);
  }

  renderPlot() {
    console.log("render plot of sinh");

    //assign properties to variables ( y=A*sinh(bx))
    let A = this.A;
    let b = this.b;

    this.renderPlotOutline();

    var canvas = document.querySelector("canvas");
    var cntxt = canvas.getContext("2d");
    cntxt.beginPath();

    for (let i = -canvas.width / 20; i < canvas.width / 20; i += 0.1) {
      let x_cord = i;
      //Scale the points
      let xCordScaled = x_cord * 10;
      //Translate the points so that (0,0) lies at centre
      let xCordTranslated = canvas.width / 2 + xCordScaled;

      let y_cord = A * Math.sinh(b * i);
      let yCordScaled = y_cord * 10;
      let yCordTranslated = canvas.height / 2 - yCordScaled;

      cntxt.lineTo(xCordTranslated, yCordTranslated);
    }

    cntxt.strokeStyle = "black";
    cntxt.stroke();
  }
}

// Class for cosh Equation
//General cosh eqn: y=A*cosh(bx)

class CoshFunction extends HyperbolicFunctionType {
  constructor(functionName, amplitude, frequency) {
    super(functionName, amplitude, frequency);
  }

  renderPlot() {
    console.log("render plot of cosh");

    //assign properties to variables ( y=A*sinh(bx))
    let A = this.A;
    let b = this.b;

    this.renderPlotOutline();

    var canvas = document.querySelector("canvas");
    var cntxt = canvas.getContext("2d");
    cntxt.beginPath();

    //Scaling factor is high for X-axis and very low for Y-axis because the Y-values are very high for large values of x
    for (let i = -canvas.width / 40; i < canvas.width / 40; i += 0.01) {
      let x_cord = i;
      //Scale the points
      let xCordScaled = x_cord * 20;
      //Translate the points so that (0,0) lies at centre
      let xCordTranslated = canvas.width / 2 + xCordScaled;

      let y_cord = A * Math.cosh(b * i);
      let yCordScaled = y_cord * 0.001;
      let yCordTranslated = canvas.height / 2 - yCordScaled;

      cntxt.lineTo(xCordTranslated, yCordTranslated);
    }

    cntxt.strokeStyle = "black";
    cntxt.stroke();
  }
}

// Class for tanhh Equation
//General tanh eqn: y=A*tanh(bx)

class TanhFunction extends HyperbolicFunctionType {
  constructor(functionName, amplitude, frequency) {
    super(functionName, amplitude, frequency);
  }

  renderPlot() {
    console.log("render plot of tanh");

    console.log("render plot of sinh");

    //assign properties to variables ( y=A*sinh(bx))
    let A = this.A;
    let b = this.b;

    this.renderPlotOutline();

    var canvas = document.querySelector("canvas");
    var cntxt = canvas.getContext("2d");
    cntxt.beginPath();

    for (let i = -canvas.width / 20; i < canvas.width / 20; i += 0.1) {
      let x_cord = i;
      //Scale the points
      let xCordScaled = x_cord * 10;
      //Translate the points so that (0,0) lies at centre
      let xCordTranslated = canvas.width / 2 + xCordScaled;

      let y_cord = A * Math.tanh(b * i);
      let yCordScaled = y_cord * 10;
      let yCordTranslated = canvas.height / 2 - yCordScaled;

      cntxt.lineTo(xCordTranslated, yCordTranslated);
    }

    cntxt.strokeStyle = "black";
    cntxt.stroke();
  }
}
