import fs from 'fs'

let handler = async (m, { conn }) => {
	let tqto = `*Thanks Too :*
	
- Nurutomo (Base-Sepuh)

- BochilGaming (Base-Sepuh)

- ImYanXiao (Elaina-MD)

- ShirokamiRyzn (Nao-MD)

- Frieren (Rest-APIs)

- Ekuzika (Partner)

- ChandraXD (Partner)

- ZxCoder (Partner)

- Dims (Partner)

- ReellyXD (Partner)

- VynaaChan (Partner)

Script Ini Hasil Dari Recode Script Nao-MD
Dan Di Kode Ulang Oleh: Xyroinee/Zeltoria

*Recode By:*

- ${global.author}
`;
	await conn.sendMessage(m.chat, { image: { url: 'https://telegra.ph/file/5478e28cc3ace94df0d43.jpg' }, caption: tqto }, m)
}
handler.help = ['tqto']
handler.tags = ['main']
handler.command = /^(tqto)$/i;

export default handler;