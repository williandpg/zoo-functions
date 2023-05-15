const data = require('../data/zoo_data');

const countAnimals = (animal) => {
  // seu código aqui
  if (animal === undefined) {
    const animalsSpecies = {};
    data.species.forEach((specie) => {
      animalsSpecies[specie.name] = specie.residents.length;
    });
    return animalsSpecies;
  }
  if (animal.sex === undefined) {
    return data.species.find((specie) => animal.species === specie.name)
      .residents.length;
  }
  return data.species.find((specie) => animal.species === specie.name)
    .residents.filter((resident) => resident.sex === animal.sex).length;
};

module.exports = countAnimals;
