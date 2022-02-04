const { Router } = require("express");

const { getUnit } = require("../services/Unit.service.js");

const router = Router();

//GET:
router.get("/get", getUnit);

module.exports = router;
