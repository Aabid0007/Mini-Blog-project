const asyncHandler = require("express-async-handler")
const blogService = require("../services/blogService")

// get /api/blogs
const getBlogs = asyncHandler(async (req, res) => {
    const blog = await blogService.getAllBlogs();
    res.status(200).json(blog);
});

// create new Blog
const createBlogs = asyncHandler(async (req, res) => {
    console.log("request body is:",req.body);
    const {image, heading, title, description} =req.body;
    try {
        if (!image || !heading || !title || !description) {
            res.status(400);
          return;
        }
        const blogData = { image, heading, title, description };
        const blog = await blogService.createBlog(blogData);
        
        res.status(201).json(blog);
    } catch (error) {
        console.error("Error creating a new blog:", error);
        res.status(500).json({ error: "Internal Server Error" });
    }
});


module.exports = { getBlogs, createBlogs };



