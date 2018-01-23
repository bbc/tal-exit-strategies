/* eslint-env jest */

const { closeWindow } = require('../lib/tal-exit-strategies')

test('closeWindow', () => {
  window.close = jest.fn()

  closeWindow()

  expect(window.close).toHaveBeenCalled()
})
