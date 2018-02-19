const stream = require('.')
const titles = []
jest.setTimeout(20 * 1000)

test('wikipedia-titles', (done) => {
  expect.assertions(2)
  stream
    .on('data', (title) => {
      titles.push(title)
    })
    .on('end', () => {
      expect(titles.length > 10 * 1000).toBe(true)
      expect(typeof titles[0]).toEqual('string')
      done()
    })
})
