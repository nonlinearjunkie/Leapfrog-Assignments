//Exercise(2)

function displayStars(nRows) {
  for (i = nRows; i > 0; i--) {
    toBePrinted = "";
    for (j = 1; j <= i; j++) {
      toBePrinted += "*";
    }
    console.log(toBePrinted);
  }
}

displayStars(5);

//Exercise(3)

var myObj = {
  name: "Suraj Joshi",
  address: "Mahendranagar,Nepal",
  email: "surajjoshi0123@gmail.com",
  interests: ["Programming", "Music", "Economics", "Photography"],
  education: [
    {
      name: "Sunrise Public Higher Secondary School",
      enrolledDate: "2004",
    },
    {
      name: "Radiant Higher Secondary School",
      enrolledDate: "2014",
    },
    {
      name: "Kantipur Engineering College",
      enrolledDate: "2016",
    },
  ],
};

myObj["education"].forEach(function (elem) {
  schoolDetails = `Name: ${elem.name},Date:${elem.enrolledDate} `;
  console.log(schoolDetails);
});

//Exercise(4)

var fruits = [
  { id: 1, name: "Banana", color: "Yellow" },
  { id: 2, name: "Apple", color: "Red" },
];

function searchByName(arrayName, valuename) {
  var filteredArray = arrayName.filter(function (elem) {
    for (var property in elem) {
      if (elem[property] === valuename) {
        return true;
      }
    }
    return false;
  });
  return filteredArray[0];
}

function searchByKey(arrayName, keyName, valueName) {
  var filteredArray = arrayName.filter(function (elem) {
    if (elem[keyName] === valueName) {
      return true;
    }
    return false;
  });

  return filteredArray[0];
}

var apple = searchByName(fruits, "Apple");
console.log(apple);

console.log(searchByKey(fruits, "name", "Apple"));

//Exercise(5)

function transform(collection, tranFunc) {
  transformedCollection = collection.map(tranFunc);
  return transformedCollection;
}

var numbers = [1, 2, 3, 4];
var output = transform(numbers, function (num) {
  return num * 2;
});

console.log(output);

//Exercise-6
function sortBy(array, key) {
  function compare(a, b) {
    if (a[key] > b[key]) {
      return 1;
    } else if (a[key] < b[key]) {
      return -1;
    } else {
      return 0;
    }
  }
  sortedArray = array.sort(compare);
  return sortedArray;
}

var arr = [
  {
    id: 1,
    name: "John",
  },
  {
    id: 2,
    name: "Mary",
  },
  {
    id: 3,
    name: "Andrew",
  },
];

var sorted = sortBy(arr, "name");

console.log(sorted);

//Exercise-7

// From this
// var input = {
//   1: {
//     id: 1,
//     name: "John",
//     children: [
//       { id: 2, name: "Sally" },
//       { id: 3, name: "Mark", children: [{ id: 4, name: "Harry" }] },
//     ],
//   },
//   5: {
//     id: 5,
//     name: "Mike",
//     children: [{ id: 6, name: "Peter" }],
//   },
// };

// To this
// var output = {
//   1: { id: 1, name: "John", children: [2, 3] },
//   2: { id: 2, name: "Sally" },
//   3: { id: 3, name: "Mark", children: [4] },
//   4: { id: 4, name: "Harry" },
//   5: { id: 5, name: "Mike", children: [6] },
//   6: { id: 6, name: "Peter" },
// };

function normalize(myObj) {
  var normalizedObj = {};
  var normalizedObjKey = 1;

  function createSeperateObject(objectValue) {
    var normalizedObjValue = {};
    normalizedObjValue["id"] = objectValue["id"];
    normalizedObjValue["name"] = objectValue["name"];

    if (objectValue["children"]) {
      normalizedObjChildrenValue = [];

      objectValue["children"].forEach(function (child) {
        normalizedObjChildrenValue.push(child["id"]);
      });
      normalizedObjValue["children"] = normalizedObjChildrenValue;
    }
    normalizedObj[normalizedObjKey] = normalizedObjValue;
    normalizedObjKey += 1;

    if (objectValue["children"]) {
      objectValue["children"].forEach(function (child) {
        createSeperateObject(child);
      });
    }
  }

  for (var property in myObj) {
    var myObjValue = myObj[property];

    createSeperateObject(myObjValue);
  }

  return normalizedObj;
}

var input = {
  1: {
    id: 1,
    name: "John",
    children: [
      { id: 2, name: "Sally" },
      { id: 3, name: "Mark", children: [{ id: 4, name: "Harry" }] },
    ],
  },
  5: {
    id: 5,
    name: "Mike",
    children: [{ id: 6, name: "Peter" }],
  },
};

output = normalize(input);
console.log(output);
