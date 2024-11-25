const Blogs = require("../models/blogModel");

const getAllBlogs = async () => {
    try {
        const blog = await Blogs.find();
        return blog;
    } catch (error) {
        throw new Error("Error fetching Blogs from the database")
    }
}
const createBlog = async (blogData) => {
    try {
        const blog = await Blogs.create(blogData);
        return blog;
    } catch (error) {
        console.error("Error creating a new blog:", error);
        throw new Error("Error creating a new blog");
    }
};

module.exports ={
    getAllBlogs,
    createBlog
}