const data = require('../data/zoo_data');

const getSpeciesByIds = (...ids) => {
  const SpeciesByIds = ids.map((id) => data.species.find((specie) => specie.id === id));
  return SpeciesByIds;
};

module.exports = getSpeciesByIds;
