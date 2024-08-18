const path = require("path");

const pathArray = [
  ["scss", "./src/scss"],
  ["Components", "./src/Components"],
  ["Actions", "./src/Actions"],
  ["Constants", "./src/Constants"],
  ["Services", "./src/Services"],
  ["Contexts", "./src/Contexts"],
  ["CustomHooks", "./src/CustomHooks"],
  ["utils", "./src/utils"],
  ["features", "./src/features"],
];

const keyValue = pathArray.reduce((acc, curr) => {
  const [key, value] = curr;
  acc[key] = path.join(__dirname, value);

  return acc;
}, {});

module.exports = {
  keyValue,
  array: pathArray,
};
