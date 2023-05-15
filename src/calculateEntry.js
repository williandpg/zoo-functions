const data = require('../data/zoo_data');

const countEntrants = (entrants) => {
  // seu código aqui
  const child = entrants.filter((people) => people.age < 18);
  const adult = entrants.filter((people) => people.age >= 18 && people.age < 50);
  const senior = entrants.filter((people) => people.age >= 50);

  return { child: child.length, adult: adult.length, senior: senior.length };
};

const calculateEntry = (entrants) => {
  // seu código aqui
  if (entrants === undefined || Object.keys(entrants).length === 0) {
    return 0;
  }
  const count = countEntrants(entrants);
  return count.child * 20.99 + count.adult * 49.99 + count.senior * 24.99;
};

module.exports = { calculateEntry, countEntrants };
