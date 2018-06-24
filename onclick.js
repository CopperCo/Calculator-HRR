var firstNumber = 0;
var secondNumber = 0;
var operator = "";
var result = 0;
var operatorChoosen = false;

// FUNCTIONS

function initialState() {
  var firstNumber = 0;
  var secondNumber = 0;
  var operator = "";
  var result = 0;
  var operatorChoosen = false;
  $("#first-number").empty();
  $("#operator").empty();
  $("#second-number").empty();
  $("#result").empty();
}

function add(x, y) {
  return Number(x) + Number(y);
}

function subtract(x, y) {
  return Number(x) - Number(y);
}

function multiply(x, y) {
  return Number(x) * Number(y);
}

function divide(x, y) {
  return Number(x) / Number(y);
}

function powerOf(x, y) {
  return Math.pow(Number(x), Number(y));
}

// onClick

$(".number").click(function() {
  var buttonClicked = this;
  if (operatorChoosen == false) {
    buttonValue = buttonClicked.value;
    $("#first-number").text(buttonValue);
    operatorChoosen = true;
    firstNumber = buttonValue;
  } else {
    buttonValue2 = buttonClicked.value;
    $("#second-number").text(buttonValue2);
    secondNumber = buttonValue2;
  }
});

$(".operator").click(function() {
  var buttonClicked = this;
  if (buttonClicked.value == "plus") {
    $("#operator").text("+");
    operator = "+";
  } else if (buttonClicked.value == "minus") {
    $("#operator").text("-");
    operator = "-";
  } else if (buttonClicked.value == "times") {
    $("#operator").text("x");
    operator = "x";
  } else if (buttonClicked.value == "divide") {
    $("#operator").text("/");
    operator = "/";
  } else if (buttonClicked.value == "power") {
    $("#operator").text("^");
    operator = "^";
  }
});

$(".equal").click(function() {
  var buttonClicked = this;
  $("#result").text("=");
  if (operator == "+") {
    $("#result").text("=" + add(firstNumber, secondNumber));
  } else if (operator == "-") {
    $("#result").text("=" + subtract(firstNumber, secondNumber));
  } else if (operator == "x") {
    $("#result").text("=" + multiply(firstNumber, secondNumber));
  } else if (operator == "/") {
    $("#result").text("=" + divide(firstNumber, secondNumber));
  } else if (operator == "^") {
    $("#result").text("=" + powerOf(firstNumber, secondNumber));
  }
});

$(".clear").click(function() {
  initialState();
});
