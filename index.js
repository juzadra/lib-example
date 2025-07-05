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

const mult = (a, b) => {
  return _.multiply(a, b);
};

module.exports = {
  fullName,
  getMonthCurrent,
  mult,
};


const minus = (a, b) => {
  return _.subtract(a, b);
}