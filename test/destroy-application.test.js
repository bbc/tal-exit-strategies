/* eslint-env jest */

const { destroyApplication } = require('../')

describe('destroyApplication', () => {
  it('should call oipf `destroyApplication` as expected', () => {
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

  it('should not call oipf `destroyApplication` as expected', () => {
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
