var express = require('../src/express/express.js')
// var express = require('expresss')

var app = express()
app.listen(3000, function() {
  console.log(' 测试express, 请打开: http://127.0.0.1:3000')
})

app.use(function(req, res, next) {
  console.log('before1')
  next()
  console.log('after1')
})
// app.use(async function(req, res, next) {
//   console.log('before2')
//   await next()
//   console.log('after2')
// })
app.use(function(req, res, next) {
  console.log('before3')
  next()
  console.log('after3')
})
app.use(function(req, res, next) {
  console.log('before4')
  res.end('hello')
  console.log('after4')
})

// before1
// before3
// before4
// after4
// after3
// after1
