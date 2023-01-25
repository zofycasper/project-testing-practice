const sum = require("./sum");
const multiple = require("./multiple");
const divide = require("./divide");

test("2 + 3 is equal to 5", () => {
    expect(sum(2, 3)).toBe(5);
});

test("2 * 3 is equal to 6", () => {
    expect(multiple(2, 3)).toBe(6);
});

test("10 divide by 5 equals 2", () => {
    expect(divide(10, 5)).toBe(2);
});
