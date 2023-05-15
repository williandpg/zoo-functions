const data = require('../data/zoo_data');

const employeeResp = (employeeId) => {
  const employee = data.employees.find((idEmployee) =>
    (idEmployee.id === employeeId.id) || (idEmployee.firstName === employeeId.name));
  if (employee === undefined) {
    throw new Error('Informações inválidas');
  }
};

const getEmployeesCoverage = () => {
  // seu código aqui
};

module.exports = getEmployeesCoverage;
