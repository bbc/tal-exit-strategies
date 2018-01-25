/* eslint-env jest */

const { samsungMaple } = require('../')

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
