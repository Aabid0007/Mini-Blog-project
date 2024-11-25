const express = require("express");
const router = express.Router();
const { getBlogs,createBlogs } = require("../controllers/blogControllers")

router.route("/",).get(getBlogs);
router.route("/",).post(createBlogs);


module.exports = router;