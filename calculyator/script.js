"use strict";

let input = document.getElementsByTagName("input")[0];
let equal = document.querySelector(".equal");
let clear = document.getElementById("clear");
let operators = document.querySelectorAll(".operators");
let numbBtn = document.querySelectorAll(".numb");

clear.addEventListener("click", function () {
  input.value = "";
});

numbBtn.forEach((item) => {
  item.addEventListener("click", function () {
    input.value += item.innerText;
  });
});

equal.addEventListener("click", function () {
  //    let inp=input.value.split("")

  //   console.log(input.value.includes("×"));
  if (input.value.includes("+")) {
    let result = 0;
    input.value.split("+").forEach((num) => {
      result += Number(num);
    });
    input.value = result;
  } else if (input.value.includes("x")) {
    let result = 1;
    input.value.split("x").forEach((num) => {
      result *= Number(num);
    });
    input.value = result;
  } else if (item == "-") {
    let result = 0;
    input.value.split("-");
    let [first, ...other] = input;
    let pre_result = 0;
    other.forEach((item) => {
      pre_result += Number(item);
    });
    result = first - pre_result;
    input.value = result;
  } else if (item == "&divide;") {
    let result = 1;
    input.value.split("&divide;");
    let [first, ...other] = input;
    let pre_result = 1;
    other.forEach((item) => {
      pre_result *= Number(item);
    });
    result = first / pre_result;
    input.value = result;
  }
});

let back = document.querySelector(".backspace");
back.addEventListener("click", function () {
  input.value = input.value.slice(0, -1);

});
