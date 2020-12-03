const utils = require('./utils');

const people = ["똘기", "떵이", "호치", "새초미", "드라고", "요롱이", "마초", "미미", "몽키", "키키", "강냉이", "찡찡이"];
const desk = (list) => {
  const result = utils.shuffle(list);
  console.log(result.map((el, idx) => `😝${idx + 1}번 자리 사람은 👉 ${el}`));
};

desk(people);
