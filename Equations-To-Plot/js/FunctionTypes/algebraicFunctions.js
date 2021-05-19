class AlgebraicFunctions extends Function {
  constructor(functionName, algebraicFunctionObjectsArray) {
    super(functionName);
    this.algebraicFunctionObjectsArray = algebraicFunctionObjectsArray;
  }

  //render all the types of algebraic functions
  renderFunctionTypes() {
    console.log("Algebraic Functions rTypes");
    let contentsArray = this.algebraicFunctionObjectsArray;
    let mainContainer = document.getElementById("container");
    mainContainer.innerHTML = ""; //Empty the section container
    let algebraicFunctionObjectsContainer = document.createElement("div");
    let algebraicFunctionObjectsList = document.createElement("ul");

    algebraicFunctionObjectsList.setAttribute(
      "class",
      " function-types-ul clearfix"
    );

    mainContainer.appendChild(algebraicFunctionObjectsContainer);
    algebraicFunctionObjectsContainer.appendChild(algebraicFunctionObjectsList);

    contentsArray.forEach(function (algebraicFcnObj) {
      console.log(algebraicFcnObj.functionName);
      let algebraicFcnElement = document.createElement("li");
      algebraicFcnElement.setAttribute("class", "function-type-li left");
      algebraicFcnElement.innerText = algebraicFcnObj.functionName;
      algebraicFunctionObjectsList.appendChild(algebraicFcnElement);
    });
  }
}

class AlgebraicFunctionType {
  constructor(functionName) {
    this.functionName = functionName;
  }
  renderAlgebraicPlot() {}
}

//Constant algebraic Function Eqn: y=c (c->Constant)
class Constant extends AlgebraicFunctionType {
  constructor(functionName, constantValue) {
    super(functionName);
    this.constant = constantValue;
  }

  renderAlgebraicPlot() {
    console.log("Constant Algebraic Function Rendered");
  }
}

//Linear Algebraic Function Eqn: y=mx+c (m->Slope c-> y-intercept)
class Linear extends AlgebraicFunctionType {
  constructor(functionName, slopeValue, yInterceptValue) {
    super(functionName);
    this.slope = slopeValue;
    this.yIntercept = yInterceptValue;
  }

  renderAlgebraicPlot() {
    console.log("Linear Algebraic Function Rendered");
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

  renderAlgebraicPlot() {
    console.log("Quadratic Algebraic Function Rendered");
  }
}

//Cubic Algebraic Equation: y=ax**2+bx+c

class Cubic extends AlgebraicFunctionType {
  constructor(functionName, a, b, c, d) {
    super(functionName);
    this.a = a;
    this.b = b;
    this.c = c;
    this.d = d;
  }

  renderAlgebraicPlot() {
    console.log("Cubic Algebraic Function Rendered");
  }
}
