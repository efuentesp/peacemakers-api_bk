restify = require 'restify'

server = restify.createServer
  name: 'peacemakers-api'

server.pre restify.pre.userAgentConnection()

server.get '/api/:name', (req, res, next) ->
  res.send 'Hello ' + req.params.name

server.listen 8080, ->
  console.log '%s listening at %s', server.name, server.url