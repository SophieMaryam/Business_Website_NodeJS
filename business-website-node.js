const express = require('express')
const app = express()

app.use(express.static('public'))

// app.get('/', function(req,res){
// 	res.send("I'm working");
// })

app.listen(3001, function () {
  console.log('Example app listening on port 3001!')
})