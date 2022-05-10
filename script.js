"use strict";

const alpha = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
const numbers = "0123456789";
const symbols = "!@#$%^&*_-+=";

const password = document.getElementById("password");
const length = document.getElementById("length");
const incNumbers = document.getElementById("numbers");
const incSymbols = document.getElementById("symbols");
const generateBtn = document.getElementById("generate");
const rangeLength = document.getElementById("range-length");
const countLength = document.getElementById("demo");
const copyBtn = document.getElementById("copy");

// for slider
rangeLength.oninput = function () {
  countLength.innerHTML = rangeLength.value;
  let characters = alpha;
  incNumbers.checked ? (characters += numbers) : "";
  incSymbols.checked ? (characters += symbols) : "";

  password.value = generatePassword(rangeLength.value, characters);
};

const generatePassword = (length, characters) => {
  let password = "";
  for (let i = 0; i < length; i++) {
    password += characters.charAt(
      Math.floor(Math.random() * characters.length)
    );
  }
  return password;
};

// copy btn
copyBtn.addEventListener("click", () => {
  if (password.value !== "None") {
    password.select();
    document.execCommand("copy");
    copyBtn.innerText = "Copied";

    setTimeout(function () {
      copyBtn.innerText = "Copy";
    }, 2000);
  }
});
