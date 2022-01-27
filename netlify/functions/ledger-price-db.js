const axios = require("axios");
const dateFns = require("date-fns");

const arrayify = (arr) => {
  const timestamp = dateFns.format(new Date(), "yyyy-MM-dd HH:mm:ss");

  return Object.entries(arr).map(([key, value]) => {
    return [
      "P",
      " ",
      timestamp,
      " ",
      key.toUpperCase(),
      " ",
      "$",
      value.usd
    ].join("");
  });
};

exports.handler = async function(event) {
  const { data } = await axios.get(`https://api.coingecko.com/api/v3/simple/price`, {
    params: {
      ids: event.queryStringParameters.ids,
      vs_currencies: "usd",
    },
  });
  
  return {
      statusCode: 200,
      body: arrayify(data).join("\n"),
  };
};
