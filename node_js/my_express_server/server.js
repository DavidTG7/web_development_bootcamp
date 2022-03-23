
const express = require('express')
const app = express()
const port = 3000

  app.get('/', (req, res) => {
    res.send('<h1>Hello David!</h1>')
  })

  app.get('/contact', function(req, res) {
    res.send("<h2>Contact me at: davidthekoa@gmail.com")
  })

  app.get('/about', function (req, res) {
    res.send("<p>Hello, I'm David, I'm a full stack developer!<br>I love learning about programming and TECH.<br>I love playing my guitar and singing my songs!<br>Nice to meet you my friend!</p>")
  })

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
