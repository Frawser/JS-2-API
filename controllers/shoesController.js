const router = require('express').Router();
const shoesModel = require('../models/shoesModel');


router.get("/", shoesModel.getAllShoes);
router.post("/", shoesModel.createShoes);
router.get("/:id", shoesModel.getShoesById);
router.put("/:id", shoesModel.updateShoesById);
router.delete("/:id", shoesModel.deleteShoesById);

module.exports = router;