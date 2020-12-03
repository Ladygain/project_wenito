const utils = {};

utils.splitAt = (i, xs) => {
  let a = xs.slice(0, i);
  let b = xs.slice(i, xs.length);
  return [a, b];
};

utils.shuffle = xs => xs.slice(0).sort(() => 0.5 - Math.random());

utils.zip = xs => {
  return xs[0].map((_, i) => {
    return xs.map(x => {
      return x[i];
    });
  });
};

module.exports = utils;
