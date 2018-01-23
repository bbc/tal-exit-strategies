/* eslint-env jest */

const { samsungMapleBroadcast } = require('../lib/tal-exit-strategies')

test('samsungMapleBroadcast', () => {
  const sendReturnEvent = jest.fn()
  window.Common = {
    API: {
      Widget: function () {
        return { sendReturnEvent }
      }
    }
  }

  samsungMapleBroadcast()

  expect(sendReturnEvent).toHaveBeenCalled()
})
