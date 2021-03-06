/* eslint-env jest */

const { history } = require('../')

test('history', () => {
  Object.defineProperties(window.history, {
    length: {
      writable: true,
      value: 10
    },
    go: {
      writable: true,
      value: jest.fn()
    }
  })

  history()

  expect(window.history.go).toHaveBeenCalledWith(-9)
})
