import fs from 'fs'

let handler  = async (m, { conn }) => {
let tag = fs.readFileSync('./sticker/tag.webp')
conn.sendFile(m.chat, tag, '', '', m)
}
handler.customPrefix = /^(@62895605816958|<teks> @62895605816958)$/i
handler.command = new RegExp

export default handler