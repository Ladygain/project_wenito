const fs = require("fs");

const read = path =>
  new Promise((resolve, reject) => {
    fs.readFile(path, "utf8", (err, data) => {
      if (err) return reject(err);
      return resolve(data);
    });
  });

const write = (path, data) =>
  new Promise((resolve, reject) => {
    fs.writeFile(path, data, err => {
      if (err) return reject(err);
      return resolve(true);
    });
  });

module.exports = {
  read,
  write
};
