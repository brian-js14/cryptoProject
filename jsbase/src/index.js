const cities = [
  "Ciudad de México",
  "Bogotá",
  "Buenos Aires",
  "Lima",
  "Guadalajara",
];

const randomString = () => {
  const string = cities[Math.floor(Math.random() * cities.length)];
  return string;
};

module.exports = randomString;

const reverseString2 = (str) => {
  return new Promise((resolve, rejeact) => {
    if (!str) {
      rejeact(Error("Error"));
    }
    resolve(str.split("").reverse().join(""));
  });
};
