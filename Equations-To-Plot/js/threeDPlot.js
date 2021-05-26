class ThreeDPlot {
  contructor() {}

  createThreeDPlot() {
    let threedPlotContainer = document.createElement("div");
    threedPlotContainer.setAttribute("class", "threed-plot-container ");

    let canvasElement = document.createElement("canvas");
    canvasElement.width = 1100;
    canvasElement.height = 700;

    threedPlotContainer.appendChild(canvasElement);

    return threedPlotContainer;
  }

  renderthreedDPlot() {
    let mainContainer = document.getElementById("container");
    let plotContainer = this.createThreeDPlot();
    mainContainer.innerHTML = "";
    mainContainer.appendChild(plotContainer);

    let canvasElement = document.querySelector("canvas");
    let context = canvasElement.getContext("2d");
    let increment = 0.01;

    const backgroundColor = {
      r: 0,
      g: 0,
      b: 0,
      a: 0.01,
    };

    function animate() {
      context.fillStyle = `rgba(${backgroundColor.r}, ${backgroundColor.g}, ${backgroundColor.b}, ${backgroundColor.a})`;
      context.fillRect(0, 0, canvasElement.width, canvasElement.height);
      //context.clearRect(0, 0, canvasElement.width, canvasElement.height);
      context.beginPath();

      for (let i = 0; i < canvasElement.width; i++) {
        let xCord = i;
        let yCord = 100 * Math.sin(xCord * 0.1 + increment);
        let yCordTranslated = yCord + canvasElement.height / 2;
        context.lineTo(i, yCordTranslated);
      }

      context.strokeStyle = `#a22`;
      context.stroke();
      increment += 0.01;
    }
    for (let i = 0; i < 200; i++) {
      animate();
    }
  }
}
