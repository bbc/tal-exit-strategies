/* eslint-env jest */

const { netcastBroadcast } = require('../lib/tal-exit-strategies')

test('closeWindow', () => {
  window.NetCastExit = jest.fn()

  netcastBroadcast()

  expect(window.NetCastExit).toHaveBeenCalled()
})
