const path = require("path");

const pathArray = [
  ["scss", "./src/scss"],
  ["@components", "./src/components"],
  ["@actions", "./src/actions"],
  ["@constants", "./src/constants"],
  ["@services", "./src/services"],
  ["@contexts", "./src/contexts"],
  ["@customHooks", "./src/customHooks"],
  ["@utils", "./src/utils"],
  ["@features", "./src/features"],
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
