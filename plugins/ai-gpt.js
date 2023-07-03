import fetch from 'node-fetch'

let handler = async(m, { conn, text }) => {
  if (!text) throw `Mau Nanya Apa?`
  m.reply(wait)
  try {
    let res = await fetch(`https://api.xyroinee.xyz/api/others/chatgpt?q=${text}&apikey=${global.xyro}`)
    let zel = await res.json()
   m.reply(zel.data)
   } catch (e) {
   throw e
   }
}
handler.help = ['gpt'] 
handler.tags = ['ai']
handler.command = /^(gpt)$/i
handler.limit = true
export default handler