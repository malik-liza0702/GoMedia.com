const express = require("express");
const router = express.Router();
const {verifyAdmin}=require("../Middleware");

const {createBlog,updateBlog,deleteBlog,getAllBlog} = require("../controllers/Blog")

router.post("/create",createBlog);
router.put('/update/:id',verifyAdmin,updateBlog);
router.delete('/delete/:id',verifyAdmin,deleteBlog);
router.get('/blogs',getAllBlog)

module.exports = router;