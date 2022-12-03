import fetch from "node-fetch"
import { generateWAMessageFromContent } from "@adiwajshing/baileys"

let handler  = async (m, { conn }) => {

 let pp = 'https://i.ibb.co/CJPs6pH/20221203-095917.jpg'
  try {
    pp = await conn.profilePictureUrl(m.sender, 'image')
  } catch (e) {
  }

let msg = await generateWAMessageFromContent(m.chat, { locationMessage: {
  degreesLatitude: 0,
  degreesLongitude: 0,
  name: nameown,
  address: wm,
  url: syt,
  isLive: true,
  accuracyInMeters: 0,
  speedInMps: 0,
  degreesClockwiseFromMagneticNorth: 2,
  comment: '',
  jpegThumbnail: await( await fetch(pp)).buffer()
}}, { quoted: m })

return conn.relayMessage(m.chat, msg.message, {})
}

handler.command = /^loc1$/
handler.owner = false
export default handler
