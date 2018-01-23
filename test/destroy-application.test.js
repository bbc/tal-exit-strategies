/* eslint-env jest */

const { destroyApplication } = require('../lib/tal-exit-strategies')

describe('destroyApplication', () => {
  it('should call oipf `destroyApplication`', () => {
    const spy = jest.fn()

    window.oipfObjectFactory = {
      isObjectSupported: () => true,
      createApplicationManagerObject: () => ({
        getOwnerApplication: () => ({
          destroyApplication: spy
        })
      })
    }

    destroyApplication()

    expect(spy).toHaveBeenCalled()
  })

  it('should not oipf `destroyApplication`', () => {
    const spy = jest.fn()

    window.oipfObjectFactory = {
      isObjectSupported: () => false,
      createApplicationManagerObject: () => ({
        getOwnerApplication: () => ({
          destroyApplication: spy
        })
      })
    }

    destroyApplication()

    expect(spy).not.toHaveBeenCalled()
  })
})
