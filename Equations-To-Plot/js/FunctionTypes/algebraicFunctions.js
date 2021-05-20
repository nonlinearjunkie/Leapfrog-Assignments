class AlgebraicFunctions extends Function {
  constructor(functionName, functionObjectsArray) {
    super(functionName, functionObjectsArray);
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
