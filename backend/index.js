const express = require('express')
const { products } = require('./data')
const app = express()
const port = 3000

app.get('/products', (req, res) => {
  res.json(products)
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})