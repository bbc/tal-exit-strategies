/* eslint-env jest */

const { netcastBroadcast } = require('../')

test('netcastBroadcast', () => {
  window.NetCastExit = jest.fn()

  netcastBroadcast()

  expect(window.NetCastExit).toHaveBeenCalled()
})
