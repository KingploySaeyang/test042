const express = require("express");
const router = express.Router();
// Import Controller
const {addbook, updatebook, deletebook, getbookAll, getbookOne} = require("../controllers/bookController");
// APIs Routing Config
router.post("/",addbook);
router.put("/:id",updatebook);
router.delete("/",deletebook);
router.get("/",getbookAll);
router.get("/",getbookOne);
// Export router
module.exports = router;
