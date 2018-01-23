/* eslint-env jest */

const { samsungMaple } = require('../lib/tal-exit-strategies')

test('samsungMaple', () => {
  const sendReturnEvent = jest.fn()

  window.Common = {
    API: {
      Widget: function () {
        return {
          sendReturnEvent
        }
      }
    }
  }

  samsungMaple()

  expect(sendReturnEvent).toHaveBeenCalled()
})
