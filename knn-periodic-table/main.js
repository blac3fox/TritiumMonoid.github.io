// Creates an empty array to store the periodic table elements.
var elements = [];

// Creates variables for the UI.
var txtAtomicNumber = document.getElementById("txtAtomicNumber");
var selK            = document.getElementById("selK");
var selData         = document.getElementById("selData");
var divElements     = document.getElementById("divElements");
var divPrediction   = document.getElementById("divPrediction");
var divElement      = document.getElementById("divElement");

// Downloads a file.
function post(url, params, callback) {
    var http = new XMLHttpRequest();
    http.open("POST", url, false);
    //http.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
    http.onreadystatechange = function() {
        if(http.readyState == 4 && http.status == 200) {
          callback(http.responseText);
        }
    }
    http.send(params);
}

// Downloads and assings the data set.
post("periodic-table.json", null, response => elements = JSON.parse(response));
elements.forEach(e => divElements.appendChild(createElementDiv(e)));

// Makes a prediction using the K-NN algorithm.
function predict() {
  var k = selK.value;
  var data = selData.value;
  var number = txtAtomicNumber.value;
  if (isNaN(parseInt(number)) || number > elements.length || number <= 0) {
    alert("Invalid number");
    return;
  }
  divElements.innerHTML = "";
  var indexes =
    generateRandomList(0, elements.length, elements.length * data / 3);
  var computedElements = elements
  .filter(e => indexes.includes(parseFloat(e["Atomic number"])))
  .map(e => [computeDistance([[number, parseFloat(e["Atomic number"])]]), e])
  .sort((a, b) => a[0] - b[0])
  .filter(e => !isNaN(e[0]) && e[0] != 0)
  .map(e => e[1])
  .slice(0, k);

  computedElements.forEach(e => divElements.appendChild(createElementDiv(e)));

  var predictedElement = {};
  predictedElement["Atomic number"] = number;
  predictedElement["Symbol"] = elements[number - 1]["Symbol"];
  predictedElement["Name"] = "Predicted " + elements[number - 1]["Name"];
  predictedElement["Block"] = computedElements
    .map(e => e["Block"])
    .reduce(countDifferent, [])
    .sort((a, b) => b[1] - a[1])[0][0];
  predictedElement["Group"] = computedElements
    .map(e => e["Group"])
    .reduce(countDifferent, [])
    .sort((a, b) => b[1] - a[1])[0][0];
  predictedElement["Period"] = computedElements
    .map(e => e["Period"])
    .reduce(countDifferent, [])
    .sort((a, b) => b[1] - a[1])[0][0];
  predictedElement["Relative atomic mass"] = computedElements
    .map(e => parseFloat(e["Relative atomic mass"]))
    .reduce((a, b) => a + b, 0) / k;
  predictedElement["State at 20°C"] = computedElements
    .map(e => e["State at 20°C"])
    .reduce(countDifferent, [])
    .sort((a, b) => b[1] - a[1])[0][0];
  predictedElement["Density (g cm−3)"] = computedElements
    .map(e => parseFloat(e["Density (g cm−3)"]))
    .reduce((a, b) => a + b, 0) / k;
  predictedElement["Boiling point"] = {};
  predictedElement["Boiling point"]["C"] = computedElements
    .map(e => parseFloat(e["Boiling point"]["C"]))
    .reduce((a, b) => a + b, 0) / k;
  predictedElement["Boiling point"]["F"] = computedElements
    .map(e => parseFloat(e["Boiling point"]["F"]))
    .reduce((a, b) => a + b, 0) / k;
  predictedElement["Boiling point"]["K"] = computedElements
    .map(e => parseFloat(e["Boiling point"]["K"]))
    .reduce((a, b) => a + b, 0) / k;
  predictedElement["Melting point"] = {};
  predictedElement["Melting point"]["C"] = computedElements
    .map(e => parseFloat(e["Melting point"]["C"]))
    .reduce((a, b) => a + b, 0) / k;
  predictedElement["Melting point"]["F"] = computedElements
    .map(e => parseFloat(e["Melting point"]["F"]))
    .reduce((a, b) => a + b, 0) / k;
  predictedElement["Melting point"]["K"] = computedElements
    .map(e => parseFloat(e["Melting point"]["K"]))
    .reduce((a, b) => a + b, 0) / k;

  divPrediction.innerHTML = "";
  divPrediction.appendChild(createElementDiv(predictedElement));
  divPrediction.appendChild(createElementDiv(elements[number - 1]));

}

// Computes the distance between different elements in a matrix.
function computeDistance(matrix) {
  // Euclidean distance.
  return Math.sqrt(matrix.map(e => Math.pow(e[0] - e[1], 2))
  .reduce((a, v) => a + v));
}

// Generates a list of different random numbers.
function generateRandomList(inf, sup, size) {
  if (sup - inf >= size) {
    list = [];
    while(list.length < size) {
      var number = Math.round(Math.random() * sup + inf);
      if (!list.includes(number)) {
        list.push(number);
      }
    }
    return list;
  }
  else {
    return null;
  }
}

// Gets the amount of times an element repeats itself in an array.
function countDifferent(a, b) {
  var isIncluded = false;
  for (var i = 0; i < a.length; i++) {
    if (a[i][0] == b) {
      isIncluded = true;
      break;
    }
  }
  if (!isIncluded) {
    a.push([b, 1]);
  }
  else {
    a[i][1]++;
  }
  return a;
}

// Creates a div with the data of an element.
function createElementDiv(e) {
  var htmlElement = document.createElement("div");
  htmlElement.className = "element";
  htmlElement.innerHTML = divElement.innerHTML;
  var children = htmlElement.children;
  children[0].children[1].innerHTML = e["Atomic number"];
  children[1].children[1].innerHTML = e["Symbol"];
  children[2].children[1].innerHTML = e["Name"];
  children[3].children[1].innerHTML = e["Block"];
  children[4].children[1].innerHTML = e["Group"];
  children[5].children[1].innerHTML = e["Period"];
  children[6].children[1].innerHTML = e["Relative atomic mass"];
  children[7].children[1].innerHTML = e["State at 20°C"];
  children[8].children[1].innerHTML = e["Density (g cm−3)"];
  children[9].children[1].children[0].children[1].innerHTML =
    e["Boiling point"]["C"];
  children[9].children[1].children[1].children[1].innerHTML =
    e["Boiling point"]["F"];
  children[9].children[1].children[2].children[1].innerHTML =
    e["Boiling point"]["K"];
  children[10].children[1].children[0].children[1].innerHTML =
    e["Melting point"]["C"];
  children[10].children[1].children[1].children[1].innerHTML =
    e["Melting point"]["F"];
  children[10].children[1].children[2].children[1].innerHTML =
    e["Melting point"]["K"];
  return htmlElement;
}
