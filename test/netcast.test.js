/* eslint-env jest */

const { netcast } = require('../')

test('netcast', () => {
  window.NetCastBack = jest.fn()

  netcast()

  expect(window.NetCastBack).toHaveBeenCalled()
})
