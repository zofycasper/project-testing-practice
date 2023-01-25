const analyzeArray = require("./analyzeArray");

test("Average is 4", () => {
    expect(analyzeArray.average).toBe(4);
});

test("Min is 1", () => {
    expect(analyzeArray.min).toBe(1);
});

test("Max is 8", () => {
    expect(analyzeArray.max).toBe(8);
});

test("Length is 6", () => {
    expect(analyzeArray.length).toBe(6);
});

test("Final object is correct ", () => {
    expect(analyzeArray).toStrictEqual({
        average: 4,
        min: 1,
        max: 8,
        length: 6,
    });
});
