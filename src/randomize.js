function randomHex() {
  return "#" + Math.floor(Math.random() * 16777215).toString(16);
}

module.exports.randomHex = randomHex;
