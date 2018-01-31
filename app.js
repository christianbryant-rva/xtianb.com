var express = require('express')
var app = express()

// app.use(function(req, res, next) {
//     console.log('hey')
// })

app.get('/', (req, res) => res.send('Hello Christian'))


app.listen(3000, ()=> console.log("Christian's example App listening on port 3000!"))
