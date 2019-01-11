var express = require("express");
var currenciesList = require("../currency-rest-server/currency.json");
var currencyRestServer = express();
currencyRestServer.use(function (req, res, next) {

    // Website you wish to allow to connect
    res.setHeader('Access-Control-Allow-Origin', 'http://localhost:8000');

    // Request methods you wish to allow
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');

    // Request headers you wish to allow
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');

    // Set to true if you need the website to include cookies in the requests sent
    // to the API (e.g. in case you use sessions)
    res.setHeader('Access-Control-Allow-Credentials', true);

    // Pass to next layer of middleware
    next();
});

currencyRestServer.listen(3000, () => {
 console.log("Server running on port 3000");
});

//REST urls
currencyRestServer.get("/currencies", (req, res, next) => {
    res.json(currenciesList);
   });

currencyRestServer.get("/currencies/:searchText/:searchPropertie/:fromIndex/:toIndex", (req, res, next) => {
    var searchText = req.params.searchText;
    var searchPropertie = req.params.searchPropertie;
    res.json(searchCurrency(searchText, searchPropertie).slice(req.params.fromIndex, req.params.toIndex));
   });

currencyRestServer.get("/currency/:id", (req, res, next) => {
    var id = req.params.id;
    res.json( currenciesList.find(item => {
        return item.id == id;
     }))
   });

currencyRestServer.get("/searchcurrencies/:searchText/:searchPropertie", (req, res, next) => {

    var searchText = req.params.searchText;
    var searchPropertie = req.params.searchPropertie;
    res.json(searchCurrency(searchText,  searchPropertie));
});

function searchCurrency(searchText, searchPropertie) {
    if(searchText === 'all') {
        return currenciesList;
    }
    return currenciesList.filter(function(item) {
        for (const property in item) {
            if (item[property] === null) {
                continue;
            }

            if (searchPropertie.toString() === 'id'
              && item[property].toString().toLowerCase().includes(searchText.toLowerCase())) {
                return true;
            }
            if (searchPropertie.toString() === 'code'
              && item['attributes']['code'].toString().toLowerCase().includes(searchText.toLowerCase())) {
                return true;
            }
            if (searchPropertie.toString() === 'name'
              && item['attributes']['name'].toString().toLowerCase().includes(searchText.toLowerCase())) {
                return true;
            }
            if (searchPropertie.toString() === 'type'
              && item['attributes']['currency_type'].toString().toLowerCase().includes(searchText.toLowerCase())) {
                return true;
            }
        }
        return false;
    });
}
