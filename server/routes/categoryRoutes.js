const express = require("express");
const router = express.Router();
const categoryController = require("../controller/categoryController");

router.get("/", categoryController.getCategories);  
router.post("/", categoryController.addCategory);  
router.put("/:id", categoryController.updateCategory);  
router.delete("/:id", categoryController.deleteCategory); 

module.exports = router;
