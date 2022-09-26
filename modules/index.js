import * as allPercentage from "./percentage.js";
import { fixRoundingErrors, calculateAspectRatio } from "./aspect-ratio.js";

// MODULO
const mod1 = document.querySelector("#modulo_1");
const mod2 = document.querySelector("#modulo_2");
const modR = document.querySelector("#modulo_result");

mod1.addEventListener("input", (e) => {
  const remainder = allPercentage.modulo(mod1.value, mod2.value);
//   console.log(sum);

modR.value = fixRoundingErrors(remainder);
});

mod2.addEventListener("input", (e) => {
    const remainder = allPercentage.modulo(mod1.value, mod2.value);
//   console.log(sum);

  modR.value = fixRoundingErrors(remainder);
});

// PERCENTAGE

const p1 = document.querySelector("#percentage_1");
const p2 = document.querySelector("#percentage_2");
const pR = document.querySelector("#percentage_result");

p1.addEventListener("input", (e) => {
  const result = allPercentage.percentage(p1.value, p2.value);
//   console.log(sum);

  pR.value = result;
});

p2.addEventListener("input", (e) => {
    const result = allPercentage.percentage(p1.value, p2.value);
//   console.log(sum);

  pR.value = result;
});


// PERCENTAGE OF

const pOf1 = document.querySelector("#percentageOf_1");
const pOf2 = document.querySelector("#percentageOf_2");
const pOfR = document.querySelector("#percentageOf_result");

pOf1.addEventListener("input", (e) => {
  const result = allPercentage.percentageOf(pOf1.value, pOf2.value);
//   console.log(sum);

  pOfR.value = result;
});

pOf2.addEventListener("input", (e) => {
    const result = allPercentage.percentageOf(pOf1.value, pOf2.value);
//   console.log(sum);

  pOfR.value = result;
});

// DIFFERENCE

const d1 = document.querySelector("#difference_1");
const d2 = document.querySelector("#difference_2");
const dR = document.querySelector("#difference_result");

d1.addEventListener("input", (e) => {
  const result = allPercentage.difference(d1.value, d2.value);
//   console.log(sum);

  dR.value = result;
});

d2.addEventListener("input", (e) => {
    const result = allPercentage.difference(d1.value, d2.value);
//   console.log(sum);

  dR.value = result;
});


// ASPECT RATIO

const r1 = document.querySelector("#ratio_1");
const r2 = document.querySelector("#ratio_2");
const newWidth = document.querySelector("#ratio_result-width");
const newHeight = document.querySelector("#ratio_result-height");

newHeight.addEventListener("input", (e) => {
  const result = calculateAspectRatio(r1.value, r2.value, newWidth.value);
//   console.log(sum);

  newHeight.value = result;
});

newHeight.addEventListener("input", (e) => {
    const result = calculateAspectRatio(r1.value, r2.value, newWidth.value);
    //   console.log(sum);
    
      newHeight.value = result;
});

