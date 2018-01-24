/* eslint-env jest */

const Exit = require('../lib/tal-exit-strategies')

const buildConfig = (modifiers = []) => {
  return {
    modules: {
      modifiers: [].concat(modifiers)
    }
  }
}

describe('getStrategyForConfig', () => {
  it('should return the `closeWindow` strategy as expected', () => {
    const config = buildConfig('antie/devices/exit/closewindow')
    const strategy = Exit.getStrategyForConfig(config)

    expect(strategy).toEqual(Exit.closeWindow)
  })

  it('should return the `openCloseWindow` strategy as expected', () => {
    const config = buildConfig('antie/devices/exit/openclosewindow')
    const strategy = Exit.getStrategyForConfig(config)

    expect(strategy).toEqual(Exit.openCloseWindow)
  })

  it('should return the `destroyApplication` strategy as expected', () => {
    const config = buildConfig('antie/devices/exit/destroyapplication')
    const strategy = Exit.getStrategyForConfig(config)

    expect(strategy).toEqual(Exit.destroyApplication)
  })

  it('should return the `history` strategy as expected', () => {
    const config = buildConfig('antie/devices/exit/history')
    const strategy = Exit.getStrategyForConfig(config)

    expect(strategy).toEqual(Exit.history)
  })

  it('should return the `netcast` strategy as expected', () => {
    const config = buildConfig('antie/devices/exit/netcast')
    const strategy = Exit.getStrategyForConfig(config)

    expect(strategy).toEqual(Exit.netcast)
  })

  it('should return the `sagemcom` strategy as expected', () => {
    const config = buildConfig('antie/devices/exit/sagemcom')
    const strategy = Exit.getStrategyForConfig(config)

    expect(strategy).toEqual(Exit.sagemcom)
  })

  it('should return the `samsungMaple` strategy as expected', () => {
    const config = buildConfig('antie/devices/exit/samsung_maple')
    const strategy = Exit.getStrategyForConfig(config)

    expect(strategy).toEqual(Exit.samsungMaple)
  })

  it('should return the `samsungTizen` strategy as expected', () => {
    const config = buildConfig('antie/devices/exit/samsung_tizen')
    const strategy = Exit.getStrategyForConfig(config)

    expect(strategy).toEqual(Exit.samsungTizen)
  })

  it('should return the `tivoCore` strategy as expected', () => {
    const config = buildConfig('antie/devices/exit/tivo')
    const strategy = Exit.getStrategyForConfig(config)

    expect(strategy).toEqual(Exit.tivoCore)
  })

  it('should return the `netcastBroadcast` strategy as expected', () => {
    const config = buildConfig('antie/devices/exit/broadcast/netcast')
    const strategy = Exit.getStrategyForConfig(config)

    expect(strategy).toEqual(Exit.netcastBroadcast)
  })

  it('should return the `samsungMapleBroadcast` strategy as expected', () => {
    const config = buildConfig('antie/devices/exit/broadcast/samsung_maple')
    const strategy = Exit.getStrategyForConfig(config)

    expect(strategy).toEqual(Exit.samsungMapleBroadcast)
  })

  it('should return the expected strategy when the device config contains multiple exit modifiers', () => {
    const config = buildConfig([
      'antie/devices/exit/samsung_maple',
      'antie/devices/exit/broadcast/samsung_maple'
    ])
    const strategy = Exit.getStrategyForConfig(config)

    expect(strategy).toEqual(Exit.samsungMaple)
  })

  it('should return the expected strategy when the device config contains multiple exit modifiers and the exitToBroadcast option is specified', () => {
    const config = buildConfig([
      'antie/devices/exit/samsung_maple',
      'antie/devices/exit/broadcast/samsung_maple'
    ])
    const strategy = Exit.getStrategyForConfig(config, { exitToBroadcast: true })

    expect(strategy).toEqual(Exit.samsungMapleBroadcast)
  })

  it('should return the expected strategy when the device config contains a non broadcast modifier and the exitToBroadcast option is specified', () => {
    const config = buildConfig('antie/devices/exit/samsung_maple')
    const strategy = Exit.getStrategyForConfig(config, { exitToBroadcast: true })

    expect(strategy).toEqual(Exit.samsungMaple)
  })

  it('should return `undefined` if the device config does not contain an exit modifier', () => {
    const config = buildConfig()
    const strategy = Exit.getStrategyForConfig(config)

    expect(strategy).toEqual(undefined)
  })
})
