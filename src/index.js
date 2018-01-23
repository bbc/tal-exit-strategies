function closeWindow () {
  window.close()
}

function openCloseWindow () {
  window.open('', '_self')
  window.close()
}

function destroyApplication () {
  try {
    var factory = window.oipfObjectFactory
    if (factory.isObjectSupported('application/oipfApplicationManager')) {
      factory
        .createApplicationManagerObject()
        .getOwnerApplication(window.document)
        .destroyApplication()
    }
  } catch (e) {}
}

function history () {}
function netcast () {}
function sagemcom () {}
function samsungMaple () {}
function samsungTizen () {}
function tivo () {}
function netcastBroadcast () {}
function samsungMapleBroadcast () {}

var modifierMap = {
  'antie/devices/exit/closewindow': closeWindow,
  'antie/devices/exit/destroyapplication': destroyApplication,
  'antie/devices/exit/history': history,
  'antie/devices/exit/netcast': netcast,
  'antie/devices/exit/openclosewindow': openCloseWindow,
  'antie/devices/exit/sagemcom': sagemcom,
  'antie/devices/exit/samsung_maple': samsungMaple,
  'antie/devices/exit/samsung_tizen': samsungTizen,
  'antie/devices/exit/tivo': tivo,
  'antie/devices/exit/broadcast/netcast': netcastBroadcast,
  'antie/devices/exit/broadcast/samsung_maple': samsungMapleBroadcast
}

function getStrategyForConfig (config) {
  config = config || {}

  const modifier = (config.modifiers || []).reduce(function (m, c) {
    return c.indexOf('exit') > -1 ? c : m
  }, '')

  return modifierMap[modifier]
}

export default {
  getStrategyForConfig,
  closeWindow,
  openCloseWindow,
  destroyApplication,
  history,
  netcast,
  sagemcom,
  samsungMaple,
  samsungTizen,
  tivo,
  netcastBroadcast,
  samsungMapleBroadcast
}
