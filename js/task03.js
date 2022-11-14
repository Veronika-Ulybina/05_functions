'use strict';

const calculate = (totalSum, productCount, promoCode) => {
  let resultMoney = totalSum;
  let count = productCount;
  let code = promoCode;

  if (count > 10) {
    resultMoney *= 0.03;
  }

  if (resultMoney > 30000) {
    resultMoney = (resultMoney - 30000) * 0.15;
  }

  if (code === "METHED") {
    resultMoney *= 0.1;
  }

  if (code === "G3H2Z1" && resultMoney > 2000) {
    resultMoney -= 500;
  }

  return resultMoney;
}

console.log(calculate(100000, 15, "G3H2Z1"));
