
let oneEuroIs = {
    "JPY": 156.5,
    "USD": 1.07,
    "GBP": 0.87
};

const fromEuroToDollar = (euros) => {
    return euros * oneEuroIs.USD;
};

const fromDollarToYen = (dollars) => {
    return dollars / oneEuroIs.USD * oneEuroIs.JPY;
};

const fromYenToPound = (yen) => {
    return yen / oneEuroIs.JPY * oneEuroIs.GBP;
};

// Exportamos las funciones
module.exports = {
    fromEuroToDollar,
    fromDollarToYen,
    fromYenToPound
};
