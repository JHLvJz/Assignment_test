export const floatControl = (strAmount) => {
  const periodIndex = strAmount.indexOf(".");
  const numberAmount = Number(strAmount);

  return { periodIndex, numberAmount };
};

export const intControl = (strAmount) => {
  return Number(strAmount);
};
