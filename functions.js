// functions.js

function addTwoNumbers(num1, num2) {
  return num1 + num2
}

function sayHello(theName) {
  if (theName === 'Will') {
    return 'No more testing Will!'
  } else {
    return "Hi there " + theName + "!"
  }
}

function buildCar(theColor, vehicle) {
  if (vehicle) {
    return carInfo = {type: 'truck'}
  } else if (!vehicle && theColor) {
    return carDetails = {color: theColor}
  }
  else return {}
  }  





module.exports = {
    addTwoNumbers,
     sayHello,
     buildCar
}