const data = require('../data/zoo_data');

const isManager = (id) => {
  // seu código aqui
  const isManagerId = data.employees.some((employess) =>
    employess.managers.includes(id));
  return isManagerId;
};

const getRelatedEmployees = (managerId) => {
  // seu código aqui
  if (isManager(managerId) === false) {
    throw new Error('O id inserido não é de uma pessoa colaboradora gerente!');
  }
  const managerIds = data.employees.filter((idManager) =>
    idManager.managers.includes(managerId));
  return managerIds.map((manager) => `${manager.firstName} ${manager.lastName}`);
};

module.exports = { isManager, getRelatedEmployees };
