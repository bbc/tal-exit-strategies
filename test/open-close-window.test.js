/* eslint-env jest */

const { openCloseWindow } = require('../')

test('closeWindow', () => {
  window.open = jest.fn()
  window.close = jest.fn()

  openCloseWindow()

  expect(window.open).toHaveBeenCalledWith('', '_self')
  expect(window.close).toHaveBeenCalled()
})
