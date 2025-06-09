let outputResults = [];

document.write("<table>");
document.write("<tr><th>Input A</th><th>Operator</th><th>Input B</th><th>Outcome</th></tr>");
//prompts for user to enter
while (true) {
  let firstInput = prompt("Enter the first number:");
  if (firstInput === null) break;

  let secondInput = prompt("Enter the second number:");
  if (secondInput === null) break;

  let mathSymbol = prompt("Enter an operator (+, -, *, /, %):");
  if (mathSymbol === null) break;
//gather correct inputs
  let computedValue;
  if (isNaN(firstInput) || isNaN(secondInput)) {
    computedValue = "Error: Invalid number";
  } else {
    let num1 = parseFloat(firstInput);
    let num2 = parseFloat(secondInput);
//calculate based on operator used
    switch (mathSymbol) {
      case "+":
        computedValue = num1 + num2;
        outputResults.push(computedValue);
        break;
      case "-":
        computedValue = num1 - num2;
        outputResults.push(computedValue);
        break;
      case "*":
        computedValue = num1 * num2;
        outputResults.push(computedValue);
        break;
      case "/":
        computedValue = num2 !== 0 ? num1 / num2 : "Can't divide by 0";
        if (typeof computedValue === "number") outputResults.push(computedValue);
        break;
      case "%":
        computedValue = num2 !== 0 ? num1 % num2 : "Can't modulo by 0";
        if (typeof computedValue === "number") outputResults.push(computedValue);
        break;
      default:
        computedValue = "Enter valid operator";
    }
  }

  document.write(
    "<tr><td>" + firstInput + "</td><td>" + mathSymbol + "</td><td>" + secondInput + "</td><td>" + computedValue + "</td></tr>"
  );
}

document.write("</table>");

if (outputResults.length > 0) {
  const sumTotal = outputResults.reduce((acc, val) => acc + val, 0);
  const smallest = Math.min(...outputResults);
  const largest = Math.max(...outputResults);
  const average = sumTotal / outputResults.length;

  document.write("<h2>Summary</h2>");
  document.write("<table>");
  document.write("<tr><th>Min</th><th>Max</th><th>Avg</th><th>Total</th></tr>");
  document.write(
    `<tr><td>${smallest}</td><td>${largest}</td><td>${average.toFixed(2)}</td><td>${sumTotal}</td></tr>`
  );
  document.write("</table>");
} else {
  document.write("<p>No valid outputs to summarize.</p>");
}
