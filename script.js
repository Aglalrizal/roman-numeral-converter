const intToRoman = (x) => {
  const val = [1000, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1];
  const syms = [
    "M",
    "CM",
    "D",
    "CD",
    "C",
    "XC",
    "L",
    "XL",
    "X",
    "IX",
    "V",
    "IV",
    "I",
  ];

  let roman = "";

  for (let i = 0; i < val.length; i++) {
    while (x >= val[i]) {
      x -= val[i];
      roman += syms[i];
    }
  }

  return roman;
};

const input = document.getElementById("number");
const convertBtn = document.getElementById("convert-btn");
const result = document.getElementById("output");
convertBtn.addEventListener("click", () => {
  if (!input.value) {
    result.textContent = "Please enter a valid number";
  } else if (input.value < 1) {
    result.textContent = "Please enter a number greater than or equal to 1";
  } else if (input.value > 3999) {
    result.textContent = "Please enter a number less than or equal to 3999";
  } else {
    result.textContent = intToRoman(input.value);
  }
});
