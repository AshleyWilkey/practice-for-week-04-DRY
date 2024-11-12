function getNum(num1, num2, comparator) {
  if (comparator === "bigger") {
    return num1 > num2 ? num1 : num2;
  } else if (comparator === "smaller") {
    return num1 < num2 ? num1 : num2;
  }
}

function multiplyBiggerNumByTwo(num1, num2) {
  const bigNum = getNum(num1, num2, "bigger");
  return bigNum * 2;
}

function divideBiggerNumByThree(num1, num2) {
  const bigNum = getNum(num1, num2, "bigger");
  return bigNum / 3;
}

function eatMostTacos(sum1, sum2) {
  const bigNum = getNum(sum1, sum2, "bigger");
  return `I ate ${bigNum} tacos.`;
}

function adoptSmallerDog(weight1, weight2) {
  const smallDog = getNum(weight1, weight2, "smaller");
  return `I adopted a dog that weighs ${smallDog} pounds.`;
}

/**************************************************************************/
/* DO NOT CHANGE THE CODE BELOW */
module.exports = {
  multiplyBiggerNumByTwo,
  divideBiggerNumByThree,
  eatMostTacos,
  adoptSmallerDog,
};
