/* eslint-env jest */

const { closeWindow } = require('../')

test('closeWindow', () => {
  window.close = jest.fn()

  closeWindow()

  expect(window.close).toHaveBeenCalled()
})
