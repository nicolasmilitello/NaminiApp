const { Router } = require("express");
//importo las funciones de servicio:
const { getUnit } = require("../services/Unit.service.js");

const router = Router();

//GET:
router.get("/get", getUnit);

module.exports = router;
