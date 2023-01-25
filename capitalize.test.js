const capitalize = require("./capitalize");

test("First character is capitalized", () => {
    expect(capitalize("team")).toBe("Team");
});
