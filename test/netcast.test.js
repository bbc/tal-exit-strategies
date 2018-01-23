/* eslint-env jest */

const { netcast } = require('../lib/tal-exit-strategies')

test('netcast', () => {
  window.NetCastBack = jest.fn()

  netcast()

  expect(window.NetCastBack).toHaveBeenCalled()
})
