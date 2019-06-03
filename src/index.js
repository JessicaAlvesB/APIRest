const server = require('./server')

server.listen(3001 || process.env.PORT, () =>
  console.log('Servidor rodando ...')
)
