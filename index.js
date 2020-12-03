const fs = require("./fs");
const path = require("path");
const { pickWenito } = require("./pickWenito");



const giver = pickWenito().map(el => el[0]);
const taker = pickWenito().map(el => el[1]);

for (let i = 0; i < giver.length; i++) {
  if (giver[i] === taker[i]) {
    console.log("🚨🚨🚨🚨🚨🚨🚨🚨🚨다시 뽑으세요🚨🚨🚨🚨🚨🚨🚨🚨🚨");
  } else {
    fs.read(path.join(__dirname, `./wenito.md`))
      .then(data => {
        const newContent = data.replace(
          "<<<wenito>>>",
          `당신의 Wenito는 바로바로.. 👉 ${taker[i]}`
        );
        return newContent;
      })
      .then(content => {
        fs.write(path.join(__dirname, `./${giver[i]}.md`), content).then(() => {
          console.log("위니또 저장쓰~~🤩");
        });
      });
  }
}
