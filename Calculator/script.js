const display = document.getElementById("result");
const clearButton = document.getElementById("clear");
const numberButtons = document.querySelectorAll("button[id^='seven'], button[id^='eight'], button[id^='nine'], button[id^='four'], button[id^='five'], button[id^='six'], button[id^='one'], button[id^='two'], button[id^='three'], button[id^='zero'], button[id='decimal']");
const operatorButtons = document.querySelectorAll("button[id^='add'], button[id^='subtract'], button[id^='multiply'], button[id^='divide'], button[id='equals']");
const percentButton = document.getElementById("percent");
const rootButton = document.getElementById("root");
const leftParenthesisButton = document.getElementById("left-parenthesis");
const rightParenthesisButton = document.getElementById("right-parenthesis");
const ansButton = document.getElementById("ans");
const plusMinusButton = document.getElementById("plus-minus");
const deleteButton = document.getElementById("delete");

function evaluateExpression(expression) {
  try {
    return eval(expression);
  } catch (error) {
    return "Error";
  }
}

numberButtons.forEach(button => {
  button.addEventListener("click", () => {
    display.value += button.textContent;
  });
});

clearButton.addEventListener("click", () => {
  display.value = "";
});

operatorButtons.forEach(button => {
  button.addEventListener("click", () => {
    if (button.id === "equals") {
      display.value = evaluateExpression(display.value);
    } else {
      display.value += ` ${button.textContent} `;
    }
  });
});

percentButton.addEventListener("click", () => {
  display.value = `${parseFloat(display.value) / 100}`;
});

rootButton.addEventListener("click", () => {
  display.value = `${Math.sqrt(parseFloat(display.value))}`;
});

leftParenthesisButton.addEventListener("click", () => {
  display.value += " ( ";
});

rightParenthesisButton.addEventListener("click", () => {
  display.value += " ) ";
});

let prevResult = 0;
ansButton.addEventListener("click", () => {
  display.value += prevResult;
});

plusMinusButton.addEventListener("click", () => {
  display.value = `${parseFloat(display.value) * -1}`;
});
deleteButton.addEventListener("click", () => {
  display.value = display.value.slice(0, -1);
});
