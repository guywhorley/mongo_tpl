// model schema and validations
var mongoose = require('mongoose')

var DogSchema = new mongoose.Schema({
  name: {type: String},
  info: {type: String}
}, {timestamps: true})

// register the schema as a model
var Dog = mongoose.model('Dog', DogSchema)
