function handleInput(event, index) {
  const inputs = document.querySelectorAll(".input-container input");
  const currentInput = event.target;
  if (currentInput.value.length === 1 && index < inputs.length - 1) {
    inputs[index + 1].focus();
  }

  checkAllInputsFilled();
}

function checkAllInputsFilled() {
  const inputs = document.querySelectorAll(".input-container input");
  const button = document.getElementById("convertButton");
  let allFilled = true;

  inputs.forEach((input) => {
    if (input.value === "") {
      allFilled = false;
    }
  });

  if (allFilled) {
    button.classList.remove("disabled");
  } else {
    button.classList.add("disabled");
  }
}

function converterBinarioParaDecimal() {
  const button = document.getElementById("convertButton");
  if (button.classList.contains("disabled")) {
    return;
  }

  const inputs = document.querySelectorAll(".input-container input");
  let binario = "";
  inputs.forEach((input) => {
    binario += input.value;
  });

  const decimal = parseInt(binario, 2);
  if (!isNaN(decimal)) {
    document.getElementById("resultado").textContent =
      "Decimal equivalente: " + decimal;
  } else {
    document.getElementById("resultado").textContent =
      "Por favor, insira um número binário válido.";
  }
}

function resetInputs() {
  const inputs = document.querySelectorAll(".input-container input");
  inputs.forEach((input) => {
    input.value = "";
  });
  document.getElementById("resultado").textContent = "";
  document.getElementById("convertButton").classList.add("disabled");
  inputs[0].focus();
}
