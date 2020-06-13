const { randomHex } = require("../src/randomize")

test('matches hex', () => {
    const hexRegex = /^#([A-Fa-f0-9]{6}|[A-Fa-f0-9]{3})$/;
    const hex = randomHex();
    expect(hex).toMatch(hexRegex);
  });