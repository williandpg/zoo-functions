const data = require('../data/zoo_data');

const getOldestFromFirstSpecies = (id) => {
  // seu código aqui
  const employeeResp = data.employees.find((employee) => employee.id === id).responsibleFor[0];
  const respAnimal = data.species.filter((animal) => animal.id === employeeResp)[0].residents
    .reduce((animal01, animal02) => (animal01.age > animal02.age ? animal01 : animal02));
  return Object.values(respAnimal);
};

module.exports = getOldestFromFirstSpecies;
