class SolveEqn {
  constructor(a, b, c) {
    this.a = a;
    this.b = b;
    this.c = c;
  }

  createInputElement(id, name, property) {
    let inputElement = document.createElement("input");
    inputElement.setAttribute("type", "number");
    inputElement.setAttribute("id", id);
    inputElement.setAttribute("name", name);
    inputElement.setAttribute("class", "input-num");
    inputElement.setAttribute("value", property);

    return inputElement;
  }

  createLabelElement(forValue, content) {
    let labelElement = document.createElement("label");
    labelElement.setAttribute("for", forValue);
    labelElement.innerHTML = content;

    return labelElement;
  }

  createButton(content) {
    let buttonElement = document.createElement("button");
    buttonElement.setAttribute("type", "button");
    buttonElement.innerHTML = content;

    return buttonElement;
  }

  createTextDiv(content) {
    let textElement = document.createElement("div");
    textElement.setAttribute("class", "solve-eqn-result");
    textElement.innerHTML = `<p>${content}</p>`;

    return textElement;
  }

  showResult(contentArray) {
    let mainContainer = document.getElementById("container");
    let resultDiv = document.getElementById("result-div");
    resultDiv.innerHTML = "";

    contentArray.forEach(function (content) {
      resultDiv.appendChild(content);
    });

    mainContainer.appendChild(resultDiv);
  }

  findResult() {
    let a = this.a;
    let b = this.b;
    let c = this.c;

    let contentArray = [];

    let eqn = `Equation : ${a}<var>x<sup>2</sup></var> +${b}x+${c}=0`;
    let eqnInfo = this.createTextDiv(eqn);

    let discriminant = b * b - 4 * a * c;

    if (discriminant < 0) {
      let message =
        "No real solutions exist for the given values as discriminant is less than zero";
      let messageDiv = this.createTextDiv(message);
      contentArray = [eqnInfo, messageDiv];
    } else if (discriminant === 0) {
      let root = -(b / (2 * a));

      let message1 = "Only one root as discriminant is equal to zero";
      let messageDiv1 = this.createTextDiv(message1);

      let message2 = `Root : ${root}`;
      let messageDiv2 = this.createTextDiv(message2);

      contentArray = [eqnInfo, messageDiv1, messageDiv2];
    } else {
      let num1 = -b + Math.sqrt(discriminant);
      let num2 = -b - Math.sqrt(discriminant);
      let den = 2 * a;

      let root1 = num1 / den;
      root1 = root1.toFixed(2);

      let root2 = num2 / den;
      root2 = root2.toFixed(2);

      let message1 = `Root-1 : ${root1}`;
      let messageDiv1 = this.createTextDiv(message1);

      let message2 = `Root-2 : ${root2}`;
      let messageDiv2 = this.createTextDiv(message2);

      contentArray = [eqnInfo, messageDiv1, messageDiv2];
    }

    this.showResult(contentArray);
  }

  renderInputForm() {
    let self = this;
    let mainContainer = document.getElementById("container");
    mainContainer.innerHTML = "";

    let inputFormContainer = document.createElement("div");
    inputFormContainer.setAttribute("class", "eqn-inp-form");

    let aInputElement = this.createInputElement("a", "a", this.a);
    let alabelElement = this.createLabelElement(
      "a",
      "<var>x<sup>2</sup></var> +"
    );
    inputFormContainer.appendChild(aInputElement);
    inputFormContainer.appendChild(alabelElement);

    let bInputElement = this.createInputElement("b", "b", this.b);
    let blabelElement = this.createLabelElement("b", "x +");
    inputFormContainer.appendChild(bInputElement);
    inputFormContainer.appendChild(blabelElement);

    let cInputElement = this.createInputElement("c", "c", this.c);
    inputFormContainer.appendChild(cInputElement);

    let buttondiv = document.createElement("div");
    let buttonElement = this.createButton("Find Solution");
    buttonElement.setAttribute("class", "submit-btn");
    buttondiv.appendChild(buttonElement);

    mainContainer.appendChild(inputFormContainer);
    mainContainer.appendChild(buttondiv);

    let resultDiv = document.createElement("div");
    resultDiv.setAttribute("id", "result-div");
    mainContainer.appendChild(resultDiv);

    buttonElement.addEventListener("click", function () {
      let a = parseFloat(aInputElement.value);
      let b = parseFloat(bInputElement.value);
      let c = parseFloat(cInputElement.value);

      self.a = a;
      self.b = b;
      self.c = c;

      self.findResult();
    });
  }
}
