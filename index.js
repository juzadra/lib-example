const _ = require("lodash");

const fullName = (name, surname) => {
  return name + " " + surname;
};

function getMonthCurrent() {
  const monthCurrent = new Date().getMonth();

  const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];

  return months[monthCurrent];
}

const multiply = (a, b) => {
  return _.multiply(a, b);
};

const minus = (a, b) => {
  return _.subtract(a, b);
}

module.exports = {
  fullName,
  getMonthCurrent,
  multiply,
  minus
};


