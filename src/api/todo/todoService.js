const Todo = require('./todo.js')

//get: pega todos os elementos.
// get(id): pega o elemento com o id especificado.
//post: insert
//put: alteração
//delete: remoção
Todo.methods(['get','post','put','delete'])

//new: true -> Faz com que ao se aplicar uma atualização em um determinado
//               registro, o retorno seja o registro já alterado.
// runValidators: true -> por default o node-restful não valida update.
//                          
Todo.updateOptions({new: true, runValidators: true})

module.exports = Todo