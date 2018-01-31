var express = require('express')
var app = express()


// respond with simple string when a GET req is made to homepage

app.get('/about', function(req, res, next) {
  if (req.path === '/about') {
      res.send('ABOUT')
  } else {
    next()
  }

})

app.get('/home', function(req, res, next) {
    if (req.path === '/home') {
      res.send('HOME')
    } else {
      next()
    }
})

app.get('/resume', function(req, res, next) {
    if (req.path === '/resume') {
      res.send('RESUME')
    } else {
      next()
    }
})

app.get('/contact', function(req, res, next) {
    if (req.path === '/contact') {
      res.send('CONTACT')
    } else {
      next()
    }
})



app.use(function(req, res){
  console.log('WooHoooooooo! EXPRESS ')
})

app.listen(3000, ()=> console.log("Christian's example App listening on port 3000!"))
