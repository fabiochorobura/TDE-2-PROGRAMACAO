// valida usuario
const Cadastro = require('../config/User')

class LogController {

    async logPost(req, res) {
        try {
            const username = req.body.username
            const password = req.body.password
            const procurarUsuario = await Cadastro.findOne({'username': username, 'password': password})

            if(!procurarUsuario){
                return res.render('index')

            } else {
                req.session.username = username

                return res.render('inicio', {username: username})
            }
        } catch(error) {
            return res.send(error)
        }
    }

    async pageIni(req, res) {
        try {
            return res.render('index')

        } catch(error) {
            return res.send(error)
        }
    }
}

module.exports = new LogController()
