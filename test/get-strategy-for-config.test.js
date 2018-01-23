/* eslint-env mocha, chai */

const { expect } = require('chai')
const Exit = require('../lib/tal-exit-strategies')

const deviceConfig = {
  modifiers: [
    'antie/devices/anim/styletopleft',
    'antie/devices/mediaplayer/html5',
    'antie/devices/mediaplayer/live/seekable',
    'antie/devices/data/nativejson',
    'antie/devices/logging/default',
    'antie/devices/logging/alert',
    'antie/devices/logging/xhr',
    'antie/devices/logging/jstestdriver',
    'antie/devices/storage/cookie',
    'antie/devices/parentalguidance/appdefaultpghandler'
  ]
}

const buildConfig = (modifier) => {
  const max = deviceConfig.modifiers.length - 1
  const index = Math.floor(Math.random() * max)
  const modifiers = [ ...deviceConfig.modifiers ]

  modifiers.splice(index, 0, modifier)

  return { ...deviceConfig, modifiers }
}

describe('getStrategyForConfig', function () {
  it('should return the `closeWindow` strategy as expected', function () {
    const config = buildConfig('antie/devices/exit/closewindow')
    const strategy = Exit.getStrategyForConfig(config)

    expect(strategy).to.equal(Exit.closeWindow)
  })

  it('should return the `openCloseWindow` strategy as expected', function () {
    const config = buildConfig('antie/devices/exit/openclosewindow')
    const strategy = Exit.getStrategyForConfig(config)

    expect(strategy).to.equal(Exit.openCloseWindow)
  })

  it('should return the `destroyApplication` strategy as expected', function () {
    const config = buildConfig('antie/devices/exit/destroyapplication')
    const strategy = Exit.getStrategyForConfig(config)

    expect(strategy).to.equal(Exit.destroyApplication)
  })

  it('should return the `history` strategy as expected', function () {
    const config = buildConfig('antie/devices/exit/history')
    const strategy = Exit.getStrategyForConfig(config)

    expect(strategy).to.equal(Exit.history)
  })

  it('should return the `netcast` strategy as expected', function () {
    const config = buildConfig('antie/devices/exit/netcast')
    const strategy = Exit.getStrategyForConfig(config)

    expect(strategy).to.equal(Exit.netcast)
  })

  it('should return the `sagemcom` strategy as expected', function () {
    const config = buildConfig('antie/devices/exit/sagemcom')
    const strategy = Exit.getStrategyForConfig(config)

    expect(strategy).to.equal(Exit.sagemcom)
  })

  it('should return the `samsungMaple` strategy as expected', function () {
    const config = buildConfig('antie/devices/exit/samsung_maple')
    const strategy = Exit.getStrategyForConfig(config)

    expect(strategy).to.equal(Exit.samsungMaple)
  })

  it('should return the `samsungTizen` strategy as expected', function () {
    const config = buildConfig('antie/devices/exit/samsung_tizen')
    const strategy = Exit.getStrategyForConfig(config)

    expect(strategy).to.equal(Exit.samsungTizen)
  })

  it('should return the `tivo` strategy as expected', function () {
    const config = buildConfig('antie/devices/exit/tivo')
    const strategy = Exit.getStrategyForConfig(config)

    expect(strategy).to.equal(Exit.tivo)
  })

  it('should return the `netcastBroadcast` strategy as expected', function () {
    const config = buildConfig('antie/devices/exit/broadcast/netcast')
    const strategy = Exit.getStrategyForConfig(config)

    expect(strategy).to.equal(Exit.netcastBroadcast)
  })

  it('should return the `samsungMapleBroadcast` strategy as expected', function () {
    const config = buildConfig('antie/devices/exit/broadcast/samsung_maple')
    const strategy = Exit.getStrategyForConfig(config)

    expect(strategy).to.equal(Exit.samsungMapleBroadcast)
  })

  it('should return `undefined` when a modifier cannot be matched', function () {
    const strategy = Exit.getStrategyForConfig({ modifiers: [] })

    expect(strategy).to.equal(undefined)
  })

  it('should return `undefined` when no config is provided', function () {
    const strategy = Exit.getStrategyForConfig()

    expect(strategy).to.equal(undefined)
  })
})
