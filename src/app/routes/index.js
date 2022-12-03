// rotas do projeto
const login = require ('./login')

const routes = (app)=>{
    app.use(login)
}
module.exports = routes