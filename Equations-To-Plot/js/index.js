let constantAlgebraicObj = new Constant("Constant", 4);
let linearAlgebraicObj = new Linear("Linear", 4, 5);
let quadraticAlgebraicObj = new Quadratic("Quadratic", 4, 5, 6);
let cubicAlgebraicObj = new Cubic("Cubic", 4, 5, 6, 7);

let algebraicFcnObj = new AlgebraicFunctions("Algebraic", [
  constantAlgebraicObj,
  linearAlgebraicObj,
  quadraticAlgebraicObj,
  cubicAlgebraicObj,
]);

let trigonometricFcnObj = new TrigonoMetricFunctions("Trigonometric");
let exponentialFcnObj = new ExpenentialFunctions("Exponential");
let logarithmicFcnObj = new LogarithmicFunctions("Logarithmic");
let hyperbolicFcnObj = new HyperbolicFunctions("Hyperbolic");
let gaussianFunctionObj = new GaussianFunctions("Gaussian PDF");

let homeDisplayObj = new HomeDisplay([
  algebraicFcnObj,
  trigonometricFcnObj,
  exponentialFcnObj,
  logarithmicFcnObj,
  hyperbolicFcnObj,
  gaussianFunctionObj,
]);

homeDisplayObj.dispayFunctionTypes();
