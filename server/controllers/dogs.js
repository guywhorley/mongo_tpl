// controller //
// must load the Dog model since db calls are made here
var mongoose = require('mongoose')
var Dog = mongoose.model('Dog')

module.exports = {

  // index - show all dobes
  index: function (req, res) {
    Dog.find({}, function (err, dobes) {
      res.render('index', {dobes})
    })
  },

  // new dobe
  new: function (req, res) {
    res.render('new')
  },

  // show dobe details
  show: function (req, res) {
    console.log('id: ', req.params.id)
    Dog.find({_id: req.params.id}, function (err, data) {
      if (err) {
        console.log('>> Err with lookup on dog.')
        res.redirect('/')
      }else {
        console.log('Dog: ', data)
        res.render('show', {data})
      }
    })
  },

  // create dobe
  create: function (req, res) {
    console.log('create: ', req.body)
    var d = new Dog()
    d.name = req.body.name
    d.info = req.body.info
    d.save(function (err, data) {
      if (err) { console.log('>> Error saving new dog:', err)}else { console.log('>> Created new dog: ', data.name)}
    })
    res.redirect('/')
  },

  // edit dobe
  edit: function (req, res) {
    Dog.find({_id: req.params.id}, function (err, data) {
      if (err) {
        console.log('>> Unable to find dog for edit.')
        res.redirect('/')
      } else {
        res.render('edit', {data})
      }
    })
  },

  // update dobe
  update: function (req, res) {
    Dog.update({_id: req.params.id}, {name: req.body.name, info: req.body.info}, function (err) {
      if (err) { console.log('>> Error with dog update.')}
      res.redirect('/')
    })
  },

  // delete dobe
  delete: function (req, res) {
    Dog.remove({_id: req.params.id}, function (err) {
      if (err) { console.log('>> Error deleting record.')}
      res.redirect('/')
    })
  }

} // module
