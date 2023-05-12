const data = require('../data/zoo_data');

const getAnimalsOlderThan = (animal, age) => {
  // seu código aqui
  const minimumAge = data.species.find((specie) => specie.name === animal);
  return minimumAge.residents.every((resident) => resident.age >= age);
};

module.exports = getAnimalsOlderThan
