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
