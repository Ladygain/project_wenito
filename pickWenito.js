const utils = require('./utils');

let names = ["똘기", "떵이", "호치", "새초미", "드라고", "요롱이", "마초", "미미", "몽키", "키키", "강냉이", "찡찡이"];

const pickWenito = () =>
  utils.zip([utils.shuffle(names), utils.shuffle(names)]);

module.exports = { pickWenito };
