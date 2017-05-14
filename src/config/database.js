const mongoose = require('mongoose')

mongoose.Promise = global.Promise
module.exports = mongoose.connect('mongodb://localhost/todo')

//perguntar sobre o erro... colocar no git hub