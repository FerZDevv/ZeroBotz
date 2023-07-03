import fs from 'fs'
let handler = async (m, { conn, text }) => {
    m.reply('65r5XpwYCY')
}
handler.help = ['getapi']
handler.tags = ['owner']
handler.command = /^(g(et)?api?key|getapi)$/i

handler.owner = true

export default handler