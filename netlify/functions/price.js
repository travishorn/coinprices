const axios = require("axios");

exports.handler = async function(event, context) {
  const ids = event.queryStringParameters.ids;
  const vs_currencies = event.queryStringParameters.vs_currencies;

  const { data: cgRes } = await axios.get(`https://api.coingecko.com/api/v3/simple/price`, {
    params: {
      ids,
      vs_currencies,
    },
  });

  const output = [];

  Object.entries(cgRes).forEach(([cgCoinId, cgCurrencies]) => {
    const coinObj = {
      id: cgCoinId,
    };

    Object.entries(cgCurrencies).forEach(([cgCurrencyId, value]) => {
      coinObj[cgCurrencyId] = value;
    });

    output.push(coinObj);
  });
  
  return {
      statusCode: 200,
      body: JSON.stringify(output),
  };
};
