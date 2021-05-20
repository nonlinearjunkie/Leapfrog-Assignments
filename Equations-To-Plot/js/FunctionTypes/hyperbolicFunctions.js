class HyperbolicFunctions extends Function {
  constructor(functionName, functionObjectsArray) {
    super(functionName, functionObjectsArray);
  }
}

class HyperbolicFunctionType {
  constructor(functionName, amplitude, angularFrequency) {
    this.functionName = functionName;
    this.A = amplitude;
    this.b = angularFrequency;
  }
  renderHyperbolicPlot() {}
}

// Class for sinh Equation
//General sinh eqn: y=A*sinh(bx)

class SinhFunction extends HyperbolicFunctionType {
  constructor(functionName, amplitude, angularFrequency) {
    super(functionName, amplitude, angularFrequency);
  }
}

// Class for cosh Equation
//General cosh eqn: y=A*cosh(bx)

class CoshFunction extends HyperbolicFunctionType {
  constructor(functionName, amplitude, angularFrequency) {
    super(functionName, amplitude, angularFrequency);
  }
}

// Class for tanhh Equation
//General tanh eqn: y=A*tanh(bx)

class TanhFunction extends HyperbolicFunctionType {
  constructor(functionName, amplitude, angularFrequency) {
    super(functionName, amplitude, angularFrequency);
  }
}
