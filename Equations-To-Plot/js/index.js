//Algebraic Functions SubClasses
let constantAlgebraicObj = new Constant("Constant", 4);
let linearAlgebraicObj = new Linear("Linear", 4, 5);
let quadraticAlgebraicObj = new Quadratic("Quadratic", 4, 5, 6);
let cubicAlgebraicObj = new Cubic("Cubic", 4, 5, 6, 7);

//Algebraic Function Object with  SubClasses

let algebraicFcnObj = new AlgebraicFunctions("Algebraic", [
  constantAlgebraicObj,
  linearAlgebraicObj,
  quadraticAlgebraicObj,
  cubicAlgebraicObj,
]);

//Trigonometric Functions SubClasses
let sineObj = new SineFunction("sine", 1, 1, 0, 0);
let cosineObj = new CosineFunction("cosine", 1, 1, 0, 0);
let tangentObj = new TangentFunction("tangent", 1, 1, 0, 0);

//Trigonometric Function Object with  SubClasses

let trigonometricFcnObj = new TrigonoMetricFunctions("Trigonometric", [
  sineObj,
  cosineObj,
  tangentObj,
]);

//Trigonometric Functions SubClasses
let sinhObj = new SinhFunction("sinh", 1, 1);
let coshObj = new CoshFunction("cosh", 1, 1);
let tanhObj = new TanhFunction("tangent", 1, 1);

//Hyperbolic Function Object with  SubClasses
let hyperbolicFcnObj = new HyperbolicFunctions("Hyperbolic", [
  sinhObj,
  coshObj,
  tanhObj,
]);

let exponentialFcnObj = new ExponentialFunctions("Exponential");
let logarithmicFcnObj = new LogarithmicFunctions("Logarithmic");

let gaussianFunctionObj = new GaussianFunctions("Gaussian PDF");

let homeDisplayObj = new HomeDisplay([
  algebraicFcnObj,
  trigonometricFcnObj,
  hyperbolicFcnObj,
  exponentialFcnObj,
  logarithmicFcnObj,
  gaussianFunctionObj,
]);

homeDisplayObj.dispayFunctionTypes();
