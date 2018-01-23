/* eslint-env jest */

const { samsungTizen } = require('../lib/tal-exit-strategies')

test('samsungTizen', () => {
  const exit = jest.fn()

  window.tizen = {
    application: {
      getCurrentApplication: () => ({
        exit
      })
    }
  }

  samsungTizen()

  expect(exit).toHaveBeenCalled()
})
