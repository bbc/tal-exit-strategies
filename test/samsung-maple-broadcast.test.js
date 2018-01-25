/* eslint-env jest */

const { samsungMapleBroadcast } = require('../')

test('samsungMapleBroadcast', () => {
  const sendExitEvent = jest.fn()

  window.Common = {
    API: {
      Widget: function () {
        return {
          sendExitEvent
        }
      }
    }
  }

  samsungMapleBroadcast()

  expect(sendExitEvent).toHaveBeenCalled()
})
