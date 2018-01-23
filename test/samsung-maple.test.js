/* eslint-env jest */

const { samsungMaple } = require('../lib/tal-exit-strategies')

test('samsungMaple', () => {
  const spy = jest.fn()

  window.Common = {
    API: {
      Widget: () => ({
        sendReturnEvent: spy
      })
    }
  }

  samsungMaple()

  expect(spy).toHaveBeenCalled()
})
