var points = [
  { x: 10, y: 20 },
  { x: 15, y: 25 },
  { x: 20, y: 25 },
  { x: 1, y: 6 },
  { x: 18, y: 43 },
  { x: 48, y: 8 },
  { x: 25, y: 13 },
  { x: 25, y: 35 },
  { x: 40, y: 40 },
  { x: 35, y: 40 },
  { x: 45, y: 20 },
];

var mainContainer = document.getElementById("container");
mainContainer.style.width = "500px";
mainContainer.style.height = "500px";
mainContainer.style.backgroundColor = "	#ffffff";
mainContainer.style.margin = "0 auto";
mainContainer.style.border = "4px solid #F2F2F2 ";
mainContainer.style.position = "relative";

var pointIndex = 0;

points.forEach(renderPoints);

function renderPoints(point) {
  point.pointIndex = pointIndex;
  let pointElement = document.createElement("div");
  pointElement.setAttribute("class", "scatter-point");
  pointElement.setAttribute("id", pointIndex);
  pointElement.style.width = "10px";
  pointElement.style.height = "10px";
  pointElement.style.backgroundColor = "blue";
  pointElement.style.borderRadius = "50%";
  pointElement.style.position = "absolute";
  pointElement.style.left = point.x * 10 + "px";
  pointElement.style.top = point.y * 10 + "px";
  mainContainer.appendChild(pointElement);
  pointElement.addEventListener("click", removePoint);
  pointIndex++;
}

function removePoint(event) {
  id = event.target.id;
  idNum = parseInt(id);
  points = deleteByIdValue(points, idNum);
  pointIndex = 0;
  mainContainer.innerHTML = "";
  points.forEach(renderPoints);
}

function deleteByIdValue(collection, idValue) {
  var updatedCollection = collection.filter(function (elem) {
    if (elem["pointIndex"] == idValue) {
      return false;
    } else {
      return true;
    }
  });
  return updatedCollection;
}
