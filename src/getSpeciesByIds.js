const data = require('../data/zoo_data');

const getSpeciesByIds = (...ids) => {
  // seu código aqui
  const speciesByIds = ids.map((id) => data.species.find((specie) => specie.id === id));
  return speciesByIds;
};

module.exports = getSpeciesByIds;
