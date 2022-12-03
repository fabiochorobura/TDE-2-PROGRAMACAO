const mongoose = require('mongoose')

mongoose.connect('mongodb+srv://fabiochorobura:1234@cluster0.vwwgqpx.mongodb.net/?retryWrites=true&w=majority ')

const db = mongoose.connection
module.exports = db 