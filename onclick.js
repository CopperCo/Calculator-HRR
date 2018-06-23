var firstNumber = 0;
var secondNumber = 0;
var operator = '';
var result = 0;
var operatorChoosen = false;

// FUNCTIONS

function initialState() {
  var firstNumber = 0;
  var secondNumber = 0;
  var operator = '';
  var result = 0;
  var operatorChoosen = false;
}

function add(x, y) {
  return x + y;
}

function subtract(x, y) {
  return x - y;
}

function multiply(x, y) {
  return x * y;
}

function divide(x, y) {
  return x / y;
}

function powerOf(x, y) {
  return Math.pow(x, y);
}

// onClick

$('.number').click(function() {
  var buttonClicked = this;
  if (operatorChoosen == false) {
    $('#first-number').text(buttonClicked.value);
    operatorChoosen = true;
    firstNumber = 0;
  } else {
    $('#second-number').text(buttonClicked.value);
  }
});

$('.operator').click(function() {
  var buttonClicked = this;
  if (buttonClicked.value == 'plus') {
    $('#operator').text('+');
  } else if (buttonClicked.value == 'minus') {
    $('#operator').text('-');
  } else if (buttonClicked.value == 'times') {
    $('#operator').text('x');
  } else if (buttonClicked.value == 'divide') {
    $('#operator').text('/');
  } else if (buttonClicked.value == 'power') {
    $('#operator').text('^');
  }
});

$('.equal').click(function() {
  $('#result').text('=');
  if (buttonClicked.value == 'plus') {
    add();
  } else if (buttonClicked.value == 'minus') {
    subtract();
  } else if (buttonClicked.value == 'times') {
    multiply();
  } else if (buttonClicked.value == 'divide') {
    divide();
  } else if (buttonClicked.value == 'power') {
    powerOf();
  }
});
