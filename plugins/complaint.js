import fs from 'fs'
import fetch from 'node-fetch'
let handler  = async (m, { conn, usedPrefix: _p }) => {
let info = `*Loading . . .*`

let td = 'application/vnd.openxmlformats-officedocument.wordprocessingml.document'
const message = {
            document: { url: thumbdoc },
            jpegThumbnail: await (await fetch(thumbdoc)).buffer(), fileName: global.wm2, mimetype: td, fileLength: '9999999', pageCount: '999',
            caption: titlebot,
            footer: wm,
            templateButtons: [
                {
                    urlButton: {
                        displayText: 'Customer Service',
                        url: ${swa},
                    }
                },
                {
                    urlButton: {
                        displayText: '📞 Owner',
                        url: `${swa},

                    }
                },
                {
                    quickReplyButton: {
                        displayText: 'OKE👍',
                        id: 'Ok'
                    }
                },
            ]
        }
        conn.sendMessage(m.chat, message)
conn.reply(m.chat, info, m, { contextInfo: { externalAdReply: {title: global.wm, body: 'Report main² tidak akan di respon', sourceUrl: snh, thumbnail: await (await fetch(`https://i.ibb.co/CJPs6pH/20221203-095917.jpg`)).buffer()  }}})
}
handler.help = ['complaint']
handler.tags = ['group','info']
handler.command = /^(complaint)$/i

handler.register = true
handler.exp = 3

export default handler
