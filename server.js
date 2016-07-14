// === configuration ===
var express = require('express')
var app = express()

// body parser
var bodyParser = require('body-parser')
app.use(bodyParser.urlencoded({extended: true}))

// override
var methodOverride = require('method-override')

// path to public and views
var path = require('path')
app.use(express.static(path.join(__dirname, './client/public')))
app.set('views', path.join(__dirname, './client/views'))
app.set('view engine', 'ejs')

// === mongoose ===
// require config file which does the rest
require('./server/config/mongoose.js')

// === routes ===
var routes_setter = require('./server/config/routes.js')
routes_setter(app)

// === listening ===
app.listen(8000, function () {
  console.log('>> Listening at port 8000')
})
