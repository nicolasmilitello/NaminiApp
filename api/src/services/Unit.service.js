const { Unit } = require("../db.js");

const getUnit = async (req, res) => {
  try {
    const response = await Unit.findAll();
    res.status(200).send(response);
  } catch (e) {
    console.log(e);
    res.status(400).send(e);
  }
};

module.exports = {
  getUnit,
};
