const mongoose = require("mongoose");

const blogSchema = mongoose.Schema({
    image: {
        type: String,
        required: [true, "please add the blog image"],
    },
    heading: {
        type: String,
        required: [true, "Please add the blog heading"],
    },
    title: {
        type: String,
        required: [true, "Please add the blog title"],
    },
    description: {
        type: String,
        required: [true, "Please add the blog description"],
    },
},
    {
        timestamps: true,
    }
);

module.exports = mongoose.model("Blog", blogSchema);