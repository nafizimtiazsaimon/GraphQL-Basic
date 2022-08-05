const mongoose = require('mongoose');

const bookSchema = mongoose.Schema({
    id : Int32Array,
    name: String,
    authorId: Int32Array
})

const authorSchema = mongoose.Schema({
    id : Int32Array,
    name: String
})

module.exports = mongoose.model('Schema', bookSchema, authorSchema);