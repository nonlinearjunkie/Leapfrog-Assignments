class TrigonoMetricFunctions extends Function {
  constructor(functionName, functionObjectsArray) {
    super(functionName, functionObjectsArray);
  }
}

class TrigonometricFunctionType {
  constructor(functionName, amplitude, frequency, phaseShift, verticalShift) {
    this.functionName = functionName;
    this.A = amplitude;
    let angularFrequency = 2 * Math.PI * frequency;
    this.b = angularFrequency;
    this.h = phaseShift;
    this.k = verticalShift;
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
    plotContainerHeading.innerHTML = `<h3> Plot of ${this.functionName} Function</h3>`;
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

// Class for Sine wave Equation
//General Sine Wave eqn: y=A*sin(b(x+h))+k

class SineFunction extends TrigonometricFunctionType {
  constructor(functionName, amplitude, frequency, phaseShift, verticalShift) {
    super(functionName, amplitude, frequency, phaseShift, verticalShift);
  }

  renderPlot() {
    //assign properties to variables ( y=A * sin(b(x + h)) + k)
    let A = this.A;
    let b = this.b;
    let h = this.h;
    let k = this.k;
    console.log("Sine Trigonomteric Function Rendered");
    console.log(this);
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

      let y_cord = A * Math.sin(b * (i + h)) + k;
      let yCordScaled = y_cord * 10;
      let yCordTranslated = canvas.height / 2 - yCordScaled;

      cntxt.lineTo(xCordTranslated, yCordTranslated);
    }

    cntxt.strokeStyle = "black";
    cntxt.stroke();
  }
}

class CosineFunction extends TrigonometricFunctionType {
  constructor(functionName, amplitude, frequency, phaseShift, verticalShift) {
    super(functionName, amplitude, frequency, phaseShift, verticalShift);
  }

  renderPlot() {
    //assign properties to variables ( y=A * cos(b(x + h)) + k)
    let A = this.A;
    let b = this.b;
    let h = this.h;
    let k = this.k;
    console.log("Sine Trigonomteric Function Rendered");
    console.log(this);
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

      let y_cord = A * Math.cos(b * (i + h)) + k;
      let yCordScaled = y_cord * 10;
      let yCordTranslated = canvas.height / 2 - yCordScaled;

      cntxt.lineTo(xCordTranslated, yCordTranslated);
    }

    cntxt.strokeStyle = "black";
    cntxt.stroke();
  }
}

class TangentFunction extends TrigonometricFunctionType {
  constructor(functionName, amplitude, frequency, phaseShift, verticalShift) {
    super(functionName, amplitude, frequency, phaseShift, verticalShift);
  }

  renderPlot() {
    //assign properties to variables ( y=A * tan(b(x + h)) + k)
    let A = this.A;
    let b = this.b;
    let h = this.h;
    let k = this.k;
    console.log("Tangent Trigonomteric Function Rendered");
    this.renderPlotOutline();

    let canvas = document.querySelector("canvas");
    let cntxt = canvas.getContext("2d");
    let isBeginPath = true; //flag to check if we need to create a seperate line as tangen curve has several discontinuities

    for (let i = -canvas.width / 20; i < canvas.width / 20; i += 0.1) {
      let x_cord = i;
      //Scale the points
      let xCordScaled = x_cord * 10;
      //Translate the points so that (0,0) lies at centre
      let xCordTranslated = canvas.width / 2 + xCordScaled;

      let cosineValue = A * Math.cos(b * (i + h)) + k; //calculate cosine value to check value of tangent is infinite

      if (Math.abs(cosineValue) <= 6.12e-10) {
        isBeginPath = true; //complete the stroke and strat new stroke once we have very high value(tends to infinite)
        cntxt.strokeStyle = "black";
        cntxt.stroke();
      } else {
        if (isBeginPath) {
          cntxt.beginPath();
        }

        let y_cord = A * Math.tan(b * (i + h)) + k;
        let yCordScaled = y_cord * 10;
        let yCordTranslated = canvas.height / 2 - yCordScaled;
        cntxt.lineTo(xCordTranslated, yCordTranslated);
        isBeginPath = false;
      }
    }
    cntxt.strokeStyle = "black";
    cntxt.stroke();
  }
}
