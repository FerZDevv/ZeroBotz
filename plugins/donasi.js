let handler = async (m, { conn }) => {
let fotonya = 'https://telegra.ph/file/992b516e260348facd74f.jpg'
let sewa = `Hai Kak, Ingin Donasi?, Silahkan Donasi Ke Payment Yang Ada Di Bawah, Dengan Kamu Berdonasi Berarti Kamu Berkontribusi Dalam Perkembangan Bot Ini..


❏──「 *Payment* 」
│ • *Pulsa1:* [085878075754]
│ • *Pulsa2:* [0895605816958]
│ • *Trakteer:* [${global.ptrakterr}]
│ • *Saweria:* [${global.psaweria}]
❏──────────────๑


Terima Kasih Yang Sudah Donasi, Berapapun Donasi Kamu Akan Sangat Saya Hargain >,<
`
conn.sendFile(m.chat, fotonya, 'anu.jpg', sewa, m)
}
handler.help = ['sewa']
handler.tags = ['main']
handler.command = /^(donasi|donate)$/i

export default handler