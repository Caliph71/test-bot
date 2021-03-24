let { performance } = require('perf_hooks')
let handler = async (m, { conn }) => {
  let old = performance.now()
  menghuek = await m.reply('_Testing speed..._')
  let neww = performance.now()
  conn.reply(m.chat, neww - old + 'ms', menghuek)
}
handler.help = ['ping', 'speed']
handler.tags = ['info', 'tools']

handler.command = /^(ping|speed)$/i
module.exports = handler
