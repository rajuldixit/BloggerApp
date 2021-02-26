const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const blogTypeSchema = new Schema({
    bType: {
        type: String,
        required: true
    }
});

const BlogType = mongoose.model('blogType', blogTypeSchema);
module.exports = BlogType; 
