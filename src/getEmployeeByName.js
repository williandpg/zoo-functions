const data = require('../data/zoo_data');

const getEmployeeByName = (employeeName) => {
  // seu código aqui
  if (employeeName === undefined) {
    return {};
  }
  return data.employees.find((employeeFind) =>
    employeeFind.firstName === employeeName || employeeFind.lastName === employeeName);
};

module.exports = getEmployeeByName;
