function squareNumber() {
  let input = prompt('Enter a number');
  let squaredInput = Number(input) ** 2;
  alert(squaredInput);
  return squaredInput;
}

function multiplyNumber() {
  let multiplicand = prompt('Enter the first number');
  let multiplier = prompt('Enter the second number');
  let product = multiplier * multiplicand;
  alert(product);
  return product;
}
