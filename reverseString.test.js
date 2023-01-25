const reverseString = require("./reverseString");

test("The string is reversed", () => {
    expect(reverseString("team")).toBe("maet");
});
