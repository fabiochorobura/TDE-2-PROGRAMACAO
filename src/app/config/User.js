//cria tabela bd
const mongoose = require('mongoose')

const Users = new mongoose.Schema({
    username: {type: String},
    password: {type: String}
})

const User = mongoose.model("Users", Users)

module.exports = User