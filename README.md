# Coin Prices

Use CoinGecko API price API. Transform it into an array of objects.

## Purpose

The CoinGecko API returns prices in an object with coin IDs as keys.

https://api.coingecko.com/api/v3/simple/price?ids=bitcoin,ethereum,binancecoin&vs_currencies=usd,btc

```
{
  "binancecoin":{
    "usd": 47.35,
    "btc": 0.00882646
  },
  "bitcoin":{
    "usd": 62088,
    "btc": 1.0
  },
  "ethereum":{
    "usd": 4527.65,
    "btc": 0.07300945
  }
}
```

This API returns prices in an array of objects with the coin ID as a value
alongside the prices.

/.netlify/functions/price?ids=bitcoin,ethereum,binancecoin&vs_currencies=usd,btc

```
[
  {
    "id": "binancecoin",
    "usd": 547.35,
    "btc": 0.00882646
  },
  {
    "id": "bitcoin",
    "usd": 62084,
    "btc": 1
  },
  {
    "id": "ethereum",
    "usd": 4527.65,
    "btc": 0.07300945
  }
]
```

This can be used with
[this custom IMPORTJSON Google Sheets script](https://gist.github.com/paulgambill/cacd19da95a1421d3164)
to display a table.

1. Open a new Google Sheets document
2. Click Tools > Script Editor
3. Replace the default code with the script in the Gist above
4. Rename it `ImportJSON.gs`
5. Click Save
6. In the spreadsheet, use the formula

```
=IMPORTJSON("https://example.com/.netlify/functions/price?ids=bitcoin,ethereum,binancecoin&vs_currencies=usd,btc")
```

This will give you a nice table of prices.

## License

The MIT License

Copyright 2021 Travis Horn

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
