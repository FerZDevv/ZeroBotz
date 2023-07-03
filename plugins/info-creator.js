import fetch from 'node-fetch'
let handler = async (m, { conn, usedPrefix, text, args, command }) => {
let who = m.mentionedJid && m.mentionedJid[0] ? m.mentionedJid[0] : m.fromMe ? conn.user.jid : m.sender
let name = await conn.getName(who)

  const sentMsg = await conn.sendContactArray(m.chat, [
    [`${nomorwa}`, `${await conn.getName(nomorwa+'@s.whatsapp.net')}`, `𝙁𝙚𝙧𝙕𝘿𝙚𝙫 𝙓𝘿 𖤍. `, `My Skill Just Copas`, `Admin@𝙁𝙚𝙧𝙕𝘿𝙚𝙫 𝙓𝘿 𖤍.`, `Indonesia`, `https://tiktok.com/@ferdy_648`, `Developer 𝙕𝙚𝙧𝙤𝘽𝙤𝙩𝙯 𖤍`],
    [`${conn.user.jid.split('@')[0]}`, `${await conn.getName(conn.user.jid)}`, `Whatsapp Bot`, `Jangan Di Spam`, `Nothing`, `Indonesia`, `https://github.com/ZeroBotz-MD/ZeroBotz-MD`, `Hanya Bot Pasaran Yang Sering Error`]
  ], m)
  await conn.sendFile(m.chat, "./vn/menu.m4a", 'aokaok.mp3', null, m, true, {
		type: "audioMessage",
		ptt: true,
	})
  } 

handler.help = ['owner', 'creator']
handler.tags = ['main']
handler.command = /^(owner|creator)/i
export default handler