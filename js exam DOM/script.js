//task1

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

  document.querySelector("#mainDiv").style.width =
  document.querySelector("#widthInput").value ;

  document.querySelector("#mainDiv").style.height =
  document.querySelector("#heightInput").value ;

  document.querySelector("#mainDiv").style.borderWidth =
  document.querySelector("#borderInput").value;

  document.querySelector("#mainDiv").style.border =
    document.querySelector("#borderSelect").value;

  document.querySelector("#mainDiv").style.backgroundColor =
    document.querySelector("#backgroundSelect").value;

    document.querySelector("#mainDiv").style.borderColor =
    document.querySelector("#borderColorSelect").value;

    document.querySelector("#mainDiv").style.color =
    document.querySelector("#colorSelect").value;

});

//Task 4

inputWidth.addEventListener("change", function () {
  let newWidth = Number(document.querySelector("#inputWidth").value);
  width = document.querySelector("#div").style.width.split("px");
  div.style.width = Number(width[0]) + newWidth + "px";
  newWidth.value = "";
});
inputHeight.addEventListener("change", function () {
  let newHeight = Number(document.querySelector("#inputHeight").value);
  height = document.querySelector("#div").style.height.split("px");
  div.style.height = Number(height[0]) + newHeight + "px";
  newHeight.value = "";
});
inputBorder.addEventListener("change", function () {
 let newBorder = Number(document.querySelector("#inputBorder").value);
  border = document.querySelector("#div").style.borderWidth.split("px");
  div.style.borderWidth = Number(border[0]) + newBorder + "px";
  newBorder.value = "";
});


//task11

 let accordion = document.getElementsByClassName("accordion");
 let panel = document.getElementsByClassName("panel");
 let i;

 for (i = 0; i <accordion.length; i++) {
  accordion[i].addEventListener("click", function(){
    this.classList.toggle("active");
    let panel =this.nextElementSibling;
    if (panel.style.display === "block"){
      panel.style.display ="none";
    }else {
      panel.style.display = "block";
    }

  })
 }
