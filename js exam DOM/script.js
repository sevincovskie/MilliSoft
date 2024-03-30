function performOperation(operation) {
  let num1 = parseFloat(document.getElementById("num1").value);
  let num2 = parseFloat(document.getElementById("num2").value);
  let resultElement = document.getElementById("result");
  if (isNaN(num1) || isNaN(num2)) {
    resultElement.textContent = "Düzgün daxil edilməmiş ədəd";
    return;
  }
  switch (operation) {
    case "add":
      resultElement.textContent = "Nəticə: " + (num1 + num2);
      break;
    case "subtract":
      resultElement.textContent = "Nəticə: " + (num1 - num2);
      break;
    case "multiply":
      resultElement.textContent = "Nəticə: " + num1 * num2;
      break;
    case "divide":
      if (num2 !== 0) {
        resultElement.textContent = "Nəticə: " + num1 / num2;
      } else {
        resultElement.textContent = "0-a bölmək mümkün deyil";
      }
      break;
    default:
      resultElement.textContent = "Yanlış əməliyyat";
  }
}
function clearFields() {
  document.getElementById("num1").value = "";
  document.getElementById("num2").value = "";
  document.getElementById("result").textContent = "Result: ";
}

//task 2

function reverseWord() {
  let word = document.getElementById("word").value;

  let convertWord = "";
  for (let i = word.length - 1; i >= 0; i--) {
    convertWord += word[i];
  }

  document.getElementById("netice").innerText = "Netice: " + convertWord;
  document.getElementById("word").value = "";
}

//task 3 divin dizaynini deyismek

let widthInput = document.getElementById("widthInput").value;
let heightInput = document.getElementById("heightInput").value;
let borderInput = document.getElementById("borderInput").value;

document.querySelector("#submitBtn").addEventListener("click", function () {
  console.log(document.querySelector("#backgroundSelect").value);

  
  document.querySelector("#mainDiv").style.backgroundColor =
    document.querySelector("#backgroundSelect").value;

    document.querySelector("#mainDiv").style.borderStyle =
    document.querySelector("#borderSelect").value;

    document.querySelector("#mainDiv").style.color =
    document.querySelector("#colorSelect").value;


    document.querySelector("#mainDiv").style.border=
    document.querySelector("#borderColorSelect").value;



});
