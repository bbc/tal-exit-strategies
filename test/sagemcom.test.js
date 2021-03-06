/* eslint-env jest */

const { sagemcom } = require('../')

test('sagemcom', () => {
  Object.defineProperty(window.parent, 'postMessage', {
    writable: true,
    value: jest.fn()
  })

  sagemcom()

  expect(window.parent.postMessage).toHaveBeenCalledWith('JS_EVENT_QUIT_THIRD_PARTY', '*')
})
