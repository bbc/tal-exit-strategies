/* eslint-env jest */

const { tivoCore } = require('../')

test('tivoCore', () => {
  const exit = jest.fn()

  window.tivo = {
    core: {
      exit
    }
  }

  tivoCore()

  expect(exit).toHaveBeenCalled()
})
