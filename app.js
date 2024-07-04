const express = require("express");
const unirest = require('unirest')

const app = express();

const port = 3000;



app.get("/", (req, res) => {

  var apiCall = unirest("GET",

    "https://ip-geolocation-ipwhois-io.p.rapidapi.com/json/"

  );

  apiCall.headers({

    "x-rapidapi-host": "ip-geolocation-ipwhois-io.p.rapidapi.com",

    "x-rapidapi-key": "d42e93f52dmshc8bba125c499e43p17f7cbjsn6fbe4c59b01e"

  });

  apiCall.end(function(result) {

    if (res.error) throw new Error(result.error);

    console.log(result.body);

    res.send(result.body);

  });

});

// app.listen(port, () => console.log(`Example app listening on port ${port}!`));
    




module.exports = app