const dateFormatter = (date) => {
  var year = "";
  var month = "";
  var day = "";
  year = date.slice(0, 4);
  day = date.slice(8, 10);
  month = date.slice(5, 7);
  return day + "." + month + "." + year;
};

module.exports = { dateFormatter };
