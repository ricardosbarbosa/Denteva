const fake = require('@sigodenjs/fake')

const products = new Array(100).fill({}).map(() => ({
  id: fake.integer(1, 100000),
  description: fake.word(5),
}))

module.exports = {
  products
} 