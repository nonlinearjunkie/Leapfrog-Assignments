class TrigonoMetricFunctions extends Function {
  constructor(functionName, functionObjectsArray) {
    super(functionName, functionObjectsArray);
  }
}

class TrigonometricFunctionType {
  constructor(
    functionName,
    amplitude,
    angularFrequency,
    phaseShift,
    verticalShift
  ) {
    this.functionName = functionName;
    this.A = amplitude;
    this.b = angularFrequency;
    this.h = phaseShift;
    this.k = verticalShift;
  }
  renderTrigonometricPlot() {}
}

// Class for Sine wave Equation
//General Sine Wave eqn: y=A*sin(b(x+h))+k

class SineFunction extends TrigonometricFunctionType {
  constructor(
    functionName,
    amplitude,
    angularFrequency,
    phaseShift,
    verticalShift
  ) {
    super(functionName, amplitude, angularFrequency, phaseShift, verticalShift);
  }
}

class CosineFunction extends TrigonometricFunctionType {
  constructor(
    functionName,
    amplitude,
    angularFrequency,
    phaseShift,
    verticalShift
  ) {
    super(functionName, amplitude, angularFrequency, phaseShift, verticalShift);
  }
}

class TangentFunction extends TrigonometricFunctionType {
  constructor(
    functionName,
    amplitude,
    angularFrequency,
    phaseShift,
    verticalShift
  ) {
    super(functionName, amplitude, angularFrequency, phaseShift, verticalShift);
  }
}
