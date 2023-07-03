import fetch from 'node-fetch'

let handler = async (m, { conn, usedPrefix, command, text }) => {
if (!text) throw 'Masukan Apikeynya'
let api = await fetch(`https://api.xyroinee.xyz/checkapikeyfree?apikey=${text}`)
let hasil = await api.json()
m.reply(`Apikey: ${hasil.result.apikey}\nLimit: ${hasil.result.limit}`)
}
handler.help = ['cekkey']
handler.tags = ['main']
handler.command = /^(cekkey)$/i

export default handler
