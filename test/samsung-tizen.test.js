/* eslint-env jest */

const { samsungTizen } = require('../')

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
