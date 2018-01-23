/* eslint-env jest */

const { tivoCore } = require('../lib/tal-exit-strategies')

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
