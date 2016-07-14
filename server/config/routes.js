// Route Handlers

// require the controller
var dogs = require('../controllers/dogs.js')

// exposing this module via module.exports
// when used in server.js, 'app' will be passed into this module. Thus,
// each method in here can then access app, AND has access to the Dog

module.exports = function (app) {

  // index - show all dobes
  app.get('/', function (req, res) {
    dogs.index(req, res)
  })

  // new dobe
  app.get('/dobes/new', function (req, res) {
    dogs.new(req, res)
  })

  // show dobe details
  app.get('/dobes/:id', function (req, res) {
    dogs.show(req, res)
  })

  // create dobe
  app.post('/dobes', function (req, res) {
    dogs.create(req, res)
  })

  // edit dobe
  app.get('/dobes/:id/edit', function (req, res) {
    dogs.edit(req, res)
  })

  // update dobe
  app.post('/dobes/:id', function (req, res) {
    dogs.update(req, res)
  })

  // delete dobe
  app.post('/dobes/:id/destroy', function (req, res) {
    dogs.delete(req, res)
  })
} // module
