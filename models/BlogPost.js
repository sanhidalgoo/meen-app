const mongoose = require('mongoose');

const Schema = mongoose.Schema;
const BlogPostSchema = new Schema({
    title: String,
    body: w
})

const BlogPost = mongoose.model('BlogPost', BlogPostSchema);

module.export = BlogPost