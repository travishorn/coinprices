const axios = require("axios");

const arrayify = (arr) => {
  return Object.entries(arr).map(([key, value]) => {
    return {
      id: key,
      ...value,
    };
  });
};

exports.handler = async function(event) {
  const { data } = await axios.get(`https://api.coingecko.com/api/v3/simple/price`, {
    params: {
      ids: event.queryStringParameters.ids,
      vs_currencies: event.queryStringParameters.vs_currencies,
    },
  });
  
  return {
      statusCode: 200,
      body: JSON.stringify(arrayify(data)),
  };
};
