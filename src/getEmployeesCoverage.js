const data = require('../data/zoo_data');

const employeeResp = (employeeId) => {
  const getEmployee = data.employees.find((idEmployee) =>
    (idEmployee.id === employeeId.id) || (idEmployee.firstName
      === employeeId.name) || (idEmployee.lastName === employeeId.name));
  if (getEmployee === undefined) {
    throw new Error('Informações inválidas');
  }
  const specieResp = getEmployee.responsibleFor.map((idSpecies) =>
    data.species.find((idEsp) => idEsp.id === idSpecies));
  const specieName = specieResp.map((element) => element.name);
  const specieLocation = specieResp.map((element) => element.location);
  const specieObj = {
    id: getEmployee.id,
    fullName: `${getEmployee.firstName} ${getEmployee.lastName}`,
    species: specieName,
    locations: specieLocation,
  };
  return specieObj;
};

const getEmployeesCoverage = (info) => {
  // seu código aqui
  const employeesCover = data.employees.map((emplayeeIdSpecie) => employeeResp(emplayeeIdSpecie));
  if (info === undefined) {
    return employeesCover;
  } if (info.id || info.name) {
    return employeeResp(info);
  }
};

module.exports = getEmployeesCoverage;
