const express = require('express')
const TaskController = require('./controllers/taskcontroller')

const routes = express.Router()

routes.post('/task', TaskController.store)
routes.get('/task', TaskController.list)
routes.delete('/task/:id', TaskController.delete)
routes.put('/task/:id', TaskController.update)

routes.get('/', (req, res) => {
  res.render('formulario')
})

module.exports = routes
