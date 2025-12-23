const {
    fromEuroToDollar,
    fromDollarToYen,
    fromYenToPound
} = require('./app.js');

test("One euro should be 1.07 dollars", () => {
    expect(fromEuroToDollar(1)).toBe(1.07);
});

test("One dollar should be 146.26 yen", () => {
    // 1 dólar → euros → yenes
    // (1 / 1.07) * 156.5 = 146.261682...
    expect(fromDollarToYen(1)).toBeCloseTo(146.26, 2);
});

test("One yen should be 0.00556 pounds", () => {
    // 1 yen → euros → libras
    // (1 / 156.5) * 0.87 = 0.005559...
    expect(fromYenToPound(1)).toBeCloseTo(0.00556, 5);
});
