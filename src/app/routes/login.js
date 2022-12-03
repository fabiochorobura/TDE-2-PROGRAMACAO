//rotas de login
const express = require('express')
const LoginController = require('../controller/LoginController')
const router = express.Router()


router
    .get('/', LoginController.pageIni)
    .post('/', LoginController.logPost)

module.exports = router