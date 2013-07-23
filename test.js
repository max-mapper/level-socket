var levelSocket = require('./')

var opts = {
  staticPath: './www',
  port: 8080,
  devMode: false,
  location: 'data.db',
  whitelist: ['http://localhost:9966']
}

var server = levelSocket(opts)

server.listen(opts.port, function() {
  console.log('running on', opts.port)
})