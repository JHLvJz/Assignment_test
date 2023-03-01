const { default: axios } = require("axios");

const getUsdInfo = (tokenType) => {
  const APIList = {
    ETH: "ethereum",
    USDT: "tether",
    USDC: "usd-coin",
    DAI: "dai",
    AAVE: "aave",
    WBTC: "bitcoin",
    AXS: "axie-infinity",
    COMP: "compound-coin",
    CRV: "curve-dao-token",
    ENS: "ethereum-name-service",
  };
  const path = `${process.env.Mesher_API_SERVER_URL}${APIList[tokenType]}`;
  const tokenKey = APIList[tokenType];
  return { path, tokenKey };
};

export default getUsdInfo;
