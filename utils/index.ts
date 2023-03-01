export const floatControl = (strAmount) => {
  const periodIndex = strAmount.indexOf(".");
  const numberAmount = Number(strAmount);

  return { periodIndex, numberAmount };
};

export const intControl = (strAmount) => {
  return Number(strAmount);
};

export const rateCalculate = (raw, rawUsd, targetUsd) => {
  const result = (raw * rawUsd) / targetUsd;
  return result;
};
