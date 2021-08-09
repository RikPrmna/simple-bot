// SC DARI MASTAH HEXAGON
// DI RECODE AMA Itz.Me.Erick
//MAKASIH DAH PAKE 
const
	{
		WAConnection,
		MessageType,
		Presence,
		MessageOptions,
		Mimetype,
		WALocationMessage,
		WA_MESSAGE_STUB_TYPES,
		WA_DEFAULT_EPHEMERAL,
		ReconnectMode,
		ProxyAgent,
		GroupSettingChange,
		waChatKey,
		mentionedJid,
		processTime,
	} = require("@adiwajshing/baileys")
const qrcode = require("qrcode-terminal")
const moment = require("moment-timezone")
const speed = require('performance-now')
const request = require('request');
const { spawn, exec, execSync } = require("child_process")
const fs = require("fs")
const axios = require("axios")
const ffmpeg = require('fluent-ffmpeg')
const { EmojiAPI } = require("emoji-api");
const tik = require('tiktok-scraper-without-watermark')
const ig = require('insta-fetcher')
const emoji = new EmojiAPI()
const fetch = require('node-fetch');
const Fb = require('fb-video-downloader');
const twitterGetUrl = require("twitter-url-direct")
const phoneNum = require('awesome-phonenumber')
const gis = require('g-i-s');
const got = require("got");
const imageToBase64 = require('image-to-base64');
const ID3Writer = require('browser-id3-writer');		
const brainly = require('brainly-scraper')
const yts = require( 'yt-search')
const ms = require('parse-ms')
const toMs = require('ms')
const { error } = require("qrcode-terminal")
const { getBuffer, h2k, generateMessageID, getGroupAdmins, getRandom, banner, start, info, success, close } = require('./lib/functions')
const { color, bgcolor } = require('./lib/color')
const { fetchJson, getBase64, kyun, createExif } = require('./lib/fetcher')
const { yta, ytv, igdl, upload, formatDate } = require('./lib/ytdl')
const { webp2mp4File} = require('./lib/webp2mp4')
const time = moment().tz('Asia/Jakarta').format("HH:mm:ss")
const afk = JSON.parse(fs.readFileSync('./lib/off.json'))
const { sleep, isAfk, cekafk, addafk } = require('./lib/offline')
const samih = JSON.parse(fs.readFileSync('./lib/simi.json'))
const mute = JSON.parse(fs.readFileSync('./database/mute.json'));

//SETTING
multi = true
nopref = false
banChats = true
offline = false
targetpc = '6282130301023'
owner = '6282130301023'
ownername = 'ǀtz.me/Erick' //ganti nama lu
fake = 'ㅤ\nㅤ'
LolKey = ''
XKey = ''
VhKey = ''
numbernye = '0'
waktu = '-'
alasan = '-'
r = '```'
//=================================================//

//test auto read
//erik.chatRead(from, "read")

const time2 = moment().tz('Asia/Jakarta').format('HH:mm:ss')
if(time2 < "23:59:00"){
var ucapanWaktu = 'Konbanwa'
                                        }
if(time2 < "19:00:00"){
var ucapanWaktu = 'Konichiwa'
                                         }
if(time2 < "15:00:00"){
var ucapanWaktu = 'Konichiwa'
                                         }
if(time2 < "11:00:00"){
var ucapanWaktu = 'Ohayou'
                                         }
                                        
module.exports = erik = async (erik, mek) => {
	try {
        if (!mek.hasNewMessage) return
        mek = mek.messages.all()[0]
		if (!mek.message) return
		if (mek.key && mek.key.remoteJid == 'status@broadcast') return
		global.blocked
        	mek.message = (Object.keys(mek.message)[0] === 'ephemeralMessage') ? mek.message.ephemeralMessage.message : mek.message
        	const content = JSON.stringify(mek.message)
		const from = mek.key.remoteJid
		const { text, extendedText, contact, location, liveLocation, image, video, sticker, document, audio, product } = MessageType
		const time = moment.tz('Asia/Jakarta').format('DD/MM HH:mm:ss')
                const type = Object.keys(mek.message)[0]        
                const cmd = (type === 'conversation' && mek.message.conversation) ? mek.message.conversation : (type == 'imageMessage') && mek.message.imageMessage.caption ? mek.message.imageMessage.caption : (type == 'videoMessage') && mek.message.videoMessage.caption ? mek.message.videoMessage.caption : (type == 'extendedTextMessage') && mek.message.extendedTextMessage.text ? mek.message.extendedTextMessage.text : ''.slice(1).trim().split(/ +/).shift().toLowerCase()
                if (multi){
		    var prefix = /^[°•π÷×¶∆£¢€¥®™=|~!#$%^&.?/\\©^z+*@,;E]/.test(cmd) ? cmd.match(/^[°•π÷×¶∆£¢€¥®™=|~!#$%^&.?/\\©^z+*@,;E]/gi) : 'MULTI'
        } else {
            if (nopref){
                prefix = ' '
            } else {
                prefix = prefa
            }
        }
        	body = (type === 'conversation' && mek.message.conversation.startsWith(prefix)) ? mek.message.conversation : (type == 'imageMessage') && mek.message.imageMessage.caption.startsWith(prefix) ? mek.message.imageMessage.caption : (type == 'videoMessage') && mek.message.videoMessage.caption.startsWith(prefix) ? mek.message.videoMessage.caption : (type == 'extendedTextMessage') && mek.message.extendedTextMessage.text.startsWith(prefix) ? mek.message.extendedTextMessage.text : ''
		budy = (type === 'conversation') ? mek.message.conversation : (type === 'extendedTextMessage') ? mek.message.extendedTextMessage.text : ''
		const command = body.slice(1).trim().split(/ +/).shift().toLowerCase()		
		const args = body.trim().split(/ +/).slice(1)
		const isCmd = body.startsWith(prefix)
		const q = args.join(' ')
		const OwnerNumber = [`${6282130301023}@s.whatsapp.net`]
		const botNumber = erik.user.jid
		const botNumberss = erik.user.jid + '@c.us'
		const isGroup = from.endsWith('@g.us')
		let sender = isGroup ? mek.participant : mek.key.remoteJid
		// const isSelfNumber = config.NomorSELF
		// const isOwner = sender.id === isSelfNumber
		const ownerNumber = ['6282130301023@s.whatsapp.net']
		const totalchat = await erik.chats.all()
		const groupMetadata = isGroup ? await erik.groupMetadata(from) : ''
		const groupName = isGroup ? groupMetadata.subject : ''
		const groupId = isGroup ? groupMetadata.jid : ''
		const groupMembers = isGroup ? groupMetadata.participants : ''
		const groupDesc = isGroup ? groupMetadata.desc : ''
		const groupOwner = isGroup ? groupMetadata.owner : ''
		const groupAdmins = isGroup ? getGroupAdmins(groupMembers) : ''
		const isBotGroupAdmins = groupAdmins.includes(botNumber) || false
		const isGroupAdmins = groupAdmins.includes(sender) || false
		const isOwner = ownerNumber.includes(sender)
		const isSimi = isGroup ? samih.includes(from) : false
		const isMuted = isGroup ? mute.includes(from) : false
        const conts = mek.key.fromMe ? erik.user.jid : erik.contacts[sender] || { notify: jid.replace(/@.+/, '') }
        const pushname = mek.key.fromMe ? erik.user.name : conts.notify || conts.vname || conts.name || '-'

         // DATABASE
        const vcard = 'BEGIN:VCARD\n' + 'VERSION:3.0\n' + 'FN:Insect Number\n' + 'ORG:WhatsApp\n' + 'TEL;type=CELL;type=VOICE;waid=0:0\n' + 'END:VCARD';

        const vcard1 = 'BEGIN:VCARD\n' + 'VERSION:3.0\n' + 'FN:NgErikMenSediH\n' + 'ORG:Owner \n' + 'TEL;type=CELL;type=VOICE;waid=6282130301023:+62 821-3030-1023\n' + 'END:VCARD';
        
         
         // MUTE
        if (isMuted){
            if (!mek.key.fromMe && !isOwner) return
            if (chats.toLowerCase().startsWith('unmute')){
                let anu = mute.indexOf(from)
                mute.splice(anu, 1)
                fs.writeFileSync('./database/mute.json', JSON.stringify(mute))
                reply(`Bot telah diunmute di group ini`)
            }
        }
        
        //MESS
		mess = {
			wait: 'WAIT!',
			success: 'Berhasil!',
			dl: '```Downloading!```',
			wrongFormat: 'Format salah, coba liat lagi di menu',
			error: {
				stick: 'Pastikan kalo itu sticker :v',
				Iv: 'Linknya error:v'
			},
			only: {
				group: '❌ Perintah ini hanya bisa di gunakan dalam group! ❌',
					ownerG: '❌ Perintah ini hanya bisa di gunakan oleh owner group! ❌',
					ownerB: '```KHUSUS OWNER NGAB```',
					admin: '❌ Perintah ini hanya bisa di gunakan oleh admin group! ❌',
					Badmin: '❌ Perintah ini hanya bisa di gunakan ketika bot menjadi admin! ❌',
			}
		}
		const isUrl = (url) => {
        return url.match(new RegExp(/https?:\/\/(www\.)?[-a-zA-Z0-9@:%.+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%+.~#?&/=]*)/, 'gi'))
        }

        const reply = (teks) => {
            erik.sendMessage(from, teks, text, {quoted:mek})
        }

        const sendMess = (hehe, teks) => {
            erik.sendMessage(hehe, teks, text)
        }

        const mentions = (teks, memberr, id) => {
            (id == null || id == undefined || id == false) ? erik.sendMessage(from, teks.trim(), extendedText, { contextInfo: { "mentionedJid": memberr } }) : erik.sendMessage(from, teks.trim(), extendedText, { quoted: mek, contextInfo: { "mentionedJid": memberr } })
        }

        const fakestatus = (teks) => {
            erik.sendMessage(from, teks, text, {
                quoted: {
                    key: {
                        fromMe: false,
                        participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "status@broadcast" } : {})
                    },
                    message: {
                        "imageMessage": {
                            "url": "https://mmg.whatsapp.net/d/f/At0x7ZdIvuicfjlf9oWS6A3AR9XPh0P-hZIVPLsI70nM.enc",
                            "mimetype": "image/jpeg",
                            "caption": `*${ucapanWaktu}* 👋 *${pushname}*`,
                            "fileSha256": "+Ia+Dwib70Y1CWRMAP9QLJKjIJt54fKycOfB2OEZbTU=",
                            "fileLength": "28777",
                            "height": 1080,
                            "width": 1079,
                            "mediaKey": "vXmRR7ZUeDWjXy5iQk17TrowBzuwRya0errAFnXxbGc=",
                            "fileEncSha256": "sR9D2RS5JSifw49HeBADguI23fWDz1aZu4faWG/CyRY=",
                            "directPath": "/v/t62.7118-24/21427642_840952686474581_572788076332761430_n.enc?oh=3f57c1ba2fcab95f2c0bb475d72720ba&oe=602F3D69",
                            "mediaKeyTimestamp": "1610993486",
                            "jpegThumbnail": fs.readFileSync('./stik/thumb.jpeg'),
                            "scansSidecar": "1W0XhfaAcDwc7xh1R8lca6Qg/1bB4naFCSngM2LKO2NoP5RI7K+zLw=="
                        }
                    }
                }
            })
        }
        const testing = (teks) => {
            erik.sendMessage(from, teks, text, {
                quoted: {
                    key: {
                        fromMe: false,
                        participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "status@broadcast" } : {})
                    },
                    message: {
                        "documentMessage": {
                            "url": "https://mmg.whatsapp.net/d/f/At0x7ZdIvuicfjlf9oWS6A3AR9XPh0P-hZIVPLsI70nM.enc",
                            "mimetype": "document",
                            "title": `*ACTIVE NGAB*`,
                            "fileSha256": "+Ia+Dwib70Y1CWRMAP9QLJKjIJt54fKycOfB2OEZbTU=",
                            "fileLength": "28777",
                            "height": 1080,
                            "width": 1079,
                            "mediaKey": "vXmRR7ZUeDWjXy5iQk17TrowBzuwRya0errAFnXxbGc=",
                            "fileEncSha256": "sR9D2RS5JSifw49HeBADguI23fWDz1aZu4faWG/CyRY=",
                            "directPath": "/v/t62.7118-24/21427642_840952686474581_572788076332761430_n.enc?oh=3f57c1ba2fcab95f2c0bb475d72720ba&oe=602F3D69",
                            "mediaKeyTimestamp": "1610993486",
                            "jpegThumbnail": fs.readFileSync('./stik/textimg.jpeg'),
                            "scansSidecar": "1W0XhfaAcDwc7xh1R8lca6Qg/1bB4naFCSngM2LKO2NoP5RI7K+zLw=="
                        }
                    }
                }
            })
        }
const fakelink  = (teks) => {
erik.sendMessage(from, teks, text,{contextInfo :{text: 'hi',
"forwardingScore": 1000000000,
isForwarded: false,
sendEphemeral: false,
"externalAdReply": {
                "title": `${ucapanWaktu} 👋 ${pushname}`,
                "body": "",
                "mimetype": "image/jpeg",
                "thumbnailUrl": "https://telegra.ph/file/bbb5eca08130920edbcb4.jpg",
                "thumbnail": fs.readFileSync('./stik/textimg.jpeg'),
                "sourceUrl": ``
},mentionedJid:[sender]}, quoted : mek})
}
        const textImg = (teks) => {
            erik.sendMessage(from, teks, text, {quoted: mek, thumbnail: fs.readFileSync('./stik/textimg.jpeg')})
        }
        const fakethumb = (teks, yes) => {
            erik.sendMessage(from, teks, image, {thumbnail:fs.readFileSync('./stik/fake.jpeg'),quoted:mek,caption:yes})
        }
        const fakegroup = (teks) => {
            erik.sendMessage(from, teks, text, {
                quoted: {
                    key: {
                        fromMe: false,
                        participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "6289523258649-1604595598@g.us" } : {})
                    },
                    message: {
                        "imageMessage": {
                            "url": "https://mmg.whatsapp.net/d/f/At0x7ZdIvuicfjlf9oWS6A3AR9XPh0P-hZIVPLsI70nM.enc",
                            "mimetype": "image/jpeg",
                            "caption": `*${ucapanWaktu}* 👋 *${pushname}*`,
                            "fileSha256": "+Ia+Dwib70Y1CWRMAP9QLJKjIJt54fKycOfB2OEZbTU=",
                            "fileLength": "28777",
                            "height": 1080,
                            "width": 1079,
                            "mediaKey": "vXmRR7ZUeDWjXy5iQk17TrowBzuwRya0errAFnXxbGc=",
                            "fileEncSha256": "sR9D2RS5JSifw49HeBADguI23fWDz1aZu4faWG/CyRY=",
                            "directPath": "/v/t62.7118-24/21427642_840952686474581_572788076332761430_n.enc?oh=3f57c1ba2fcab95f2c0bb475d72720ba&oe=602F3D69",
                            "mediaKeyTimestamp": "1610993486",
                            "jpegThumbnail": fs.readFileSync('./stik/thumb.jpeg'),
                            "scansSidecar": "1W0XhfaAcDwc7xh1R8lca6Qg/1bB4naFCSngM2LKO2NoP5RI7K+zLw=="
                        }
                    }
                }
            })
        }
        const fakevideo = (teks) => {
	 erik.sendMessage(from, teks, text, {
                quoted: {
                    key: {
                        fromMe: false,
                        participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "6289523258649-1604595598@g.us" } : {})
                    },
	           message: { 
                 "videoMessage": { 
                            "url": "https://mmg.whatsapp.net/d/f/At0x7ZdIvuicfjlf9oWS6A3AR9XPh0P-hZIVPLsI70nM.enc",
                            "mimetype": "video/mp4",
                            'seconds': '99999', 
                            "caption": `*${ucapanWaktu}* 👋 *${pushname}*`,
                            "fileSha256": "+Ia+Dwib70Y1CWRMAP9QLJKjIJt54fKycOfB2OEZbTU=",
                            "fileLength": "28777",
                            "height": 1080,
                            "width": 1079,
                            "mediaKey": "vXmRR7ZUeDWjXy5iQk17TrowBzuwRya0errAFnXxbGc=",
                            "fileEncSha256": "sR9D2RS5JSifw49HeBADguI23fWDz1aZu4faWG/CyRY=",
                            "directPath": "/v/t62.7118-24/21427642_840952686474581_572788076332761430_n.enc?oh=3f57c1ba2fcab95f2c0bb475d72720ba&oe=602F3D69",
                            "mediaKeyTimestamp": "1610993486",
                            "jpegThumbnail": fs.readFileSync('./stik/textimg.jpeg'),
                            "scansSidecar": "1W0XhfaAcDwc7xh1R8lca6Qg/1bB4naFCSngM2LKO2NoP5RI7K+zLw=="
                        }
                    }
                }
            })
        }
        const fvideo = (teks) => {
	 erik.sendMessage(from, teks, text, {
                quoted: {
                    key: {
                        fromMe: false,
                        participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "6289523258649-1604595598@g.us" } : {})
                    },
	           message: { 
                 "videoMessage": { 
                 "title":"hallo bang",
                 "h": `Hmm`, 
                 'seconds': '99999', 
                 'caption': `*${ucapanWaktu}* 👋 *${pushname}*`,
                 'jpegThumbnail': fs.readFileSync('./stik/textimg.jpeg')
                        }
                    }
                }
            })
        }
        const fakedoc = (teks) => {
	 erik.sendMessage(from, teks, text, {
                quoted: {
                    key: {
                        fromMe: false,
                        participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "6289523258649-1604595598@g.us" } : {})
                    },
       message: {
                    documentMessage: {
                    'title': `*${ucapanWaktu}* 👋 *${pushname}*`,
                 'jpegThumbnail': fs.readFileSync('./stik/textimg.jpeg')
                        }
                    }
                }
            })
        }
        const fakegc = (teks) => {
	 erik.sendMessage(from, teks, text, {
                quoted: {
                    key: {
                        fromMe: false,
		"participant": "0@s.whatsapp.net",
		"remoteJid": "0@s.whatsapp.net"
	},
	"message": {
		"groupInviteMessage": {
			"groupJid": "628983583288-1620319322@g.us",
			"inviteCode": "HGkRU2CKh2nK2z92kaxgvD",
			"groupName": `${ucapanWaktu} 👋 ${pushname}`, 
"caption": `${ucapanWaktu} 👋 ${pushname}`, 
'jpegThumbnail': fs.readFileSync('./stik/textimg.jpeg')
		                        }
                    }
                }
            })
        }
        const faketroli = (teks) => {
	 erik.sendMessage(from, teks, text, {
                quoted: {

key: {

fromMe: false,

participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: 'status@broadcast' } : {})

},

message: { 

orderMessage: {

itemCount: -18291,

status: 200, 

surface: 200,

message: `${ucapanWaktu} 👋 ${pushname}`,

orderTitle: 'TESTING', 

thumbnail: fs.readFileSync('./stik/textimg.jpeg'),

sellerJid: '0@s.whatsapp.net'
}
                    }
                }
            })
        }
        const otomatis = (teks) => {
erik.sendMessage(from, teks, text,{contextInfo :{text: 'hi',
"forwardingScore": 1000000000,
isForwarded: false,
sendEphemeral: false,
"externalAdReply": {
                "title": `${ucapanWaktu} 👋 ${pushname}\n©Itz.Me.Erick\n#PESAN OTOMATIS`,
                "body": "",
                "mimetype": "image/jpeg",
                "thumbnailUrl": "https://telegra.ph/file/bbb5eca08130920edbcb4.jpg",
                "thumbnail": fs.readFileSync('./stik/textimg.jpeg'),
                "sourceUrl": ``
},mentionedJid:[sender]}, quoted : mek})
}
        const sendStickerFromUrl = async(to, url) => {
                var names = Date.now() / 10000;
                var download = function (uri, filename, callback) {
                    request.head(uri, function (err, res, body) {
                        request(uri).pipe(fs.createWriteStream(filename)).on('close', callback);
                    });
                };
                download(url, './stik' + names + '.png', async function () {
                    console.log('selesai');
                    let filess = './stik' + names + '.png'
                    let asw = './stik' + names + '.webp'
                    exec(`ffmpeg -i ${filess} -vcodec libwebp -filter:v fps=fps=20 -lossless 1 -loop 0 -preset default -an -vsync 0 -s 512:512 ${asw}`, (err) => {
                        let media = fs.readFileSync(asw)
                        erik.sendMessage(to, media, MessageType.sticker,{quoted:mek})
                        fs.unlinkSync(filess)
                        fs.unlinkSync(asw)
                    });
                });
            }
        const sendMediaURL = async(to, url, text="", mids=[]) =>{
                if(mids.length > 0){
                    text = normalizeMention(to, text, mids)
                }
                const fn = Date.now() / 10000;
                const filename = fn.toString()
                let mime = ""
                var download = function (uri, filename, callback) {
                    request.head(uri, function (err, res, body) {
                        mime = res.headers['content-type']
                        request(uri).pipe(fs.createWriteStream(filename)).on('close', callback);
                    });
                };
                download(url, filename, async function () {
                    console.log('done');
                    let media = fs.readFileSync(filename)
                    let type = mime.split("/")[0]+"Message"
                    if(mime === "image/gif"){
                        type = MessageType.video
                        mime = Mimetype.gif
                    }
                    if(mime.split("/")[0] === "audio"){
                        mime = Mimetype.mp4Audio
                    }
                    erik.sendMessage(to, media, type, { quoted: mek, mimetype: mime, caption: text,contextInfo: {"mentionedJid": mids}})
                    
                    fs.unlinkSync(filename)
                });
            }   
//FUNCTION
            cekafk(afk)
            if (!mek.key.remoteJid.endsWith('@g.us') && offline){
            if (!mek.key.fromMe){
            if (isAfk(mek.key.remoteJid)) return
            addafk(mek.key.remoteJid)
            heheh = ms(Date.now() - waktu) 
            erik.sendMessage(mek.key.remoteJid,`@${owner} Sedang Offline!\n\n*Alasan :* ${alasan}\n*Sejak :* ${heheh.hours} Jam, ${heheh.minutes} Menit, ${heheh.seconds} Detik lalu\n\nSilahkan Hubungi Lagi Nanti`, MessageType.text,{contextInfo:{ mentionedJid: [`${owner}@s.whatsapp.net`],'stanzaId': "B826873620DD5947E683E3ABE663F263", 'participant': "0@s.whatsapp.net", 'remoteJid': 'status@broadcast', 'quotedMessage': {"imageMessage": {"caption": "*OFFLINE*", 'jpegThumbnail': fs.readFileSync('./stik/thumb.jpeg')}}}})
            }
            }   
        if (mek.key.remoteJid.endsWith('@g.us') && offline) {
        if (!mek.key.fromMe){
        if (mek.message.extendedTextMessage != undefined){
        if (mek.message.extendedTextMessage.contextInfo != undefined){
        if (mek.message.extendedTextMessage.contextInfo.mentionedJid != undefined){
        for (let ment of mek.message.extendedTextMessage.contextInfo.mentionedJid) {
        if (ment === `${owner}@s.whatsapp.net`){
        if (isAfk(mek.key.remoteJid)) return
        addafk(mek.key.remoteJid)
        heheh = ms(Date.now() - waktu)
        erik.sendMessage(mek.key.remoteJid,`@${owner} Sedang Offline!\n\n *Alasan :* ${alasan}\n *Sejak :* ${heheh.hours} Jam, ${heheh.minutes} Menit, ${heheh.seconds} Detik lalu\n\nSilahkan Hubungi Lagi Nanti`, MessageType.text,{contextInfo:{ mentionedJid: [`${owner}@s.whatsapp.net`],'stanzaId': "B826873620DD5947E683E3ABE663F263", 'participant': "0@s.whatsapp.net", 'remoteJid': 'status@broadcast', 'quotedMessage': {"imageMessage": {"caption": "*OFFLINE*", 'jpegThumbnail': fs.readFileSync('./stik/thumb.jpeg')}}}})
          }
        }
            }
          }
        }
      }
    }
    
    const simih = async (text) => {
	try {
		const sami = await fetch(`https://simsumi.herokuapp.com/api?text=${text}`, {method: 'GET'})
		const res = await sami.json()
		return res.success
	} catch {
		return 'Shui ga tau kamu ngomong apa, bahasa Mars?'
	}
}

//========================================================================================================================//
		colors = ['red', 'white', 'black', 'blue', 'yellow', 'green']
		const isMedia = (type === 'imageMessage' || type === 'videoMessage')
		const isQuotedImage = type === 'extendedTextMessage' && content.includes('imageMessage')
		const isQuotedVideo = type === 'extendedTextMessage' && content.includes('videoMessage')
		const isQuotedAudio = type === 'extendedTextMessage' && content.includes('audioMessage')
		const isQuotedSticker = type === 'extendedTextMessage' && content.includes('stickerMessage')
      	if (!isGroup && isCmd) console.log('\x1b[1;31m~\x1b[1;37m>', '[\x1b[1;32mEXEC\x1b[1;37m]', time, color(command), 'from', color(sender.split('@')[0]), 'args :', color(args.length))
      	//if (!isGroup && !isCmd) console.log('\x1b[1;31m~\x1b[1;37m>', '[\x1b[1;31mTEXT\x1b[1;37m]', time, color('Message'), 'from', color(sender.split('@')[0]), 'args :', color(args.length))
     	if (isCmd && isGroup) console.log('\x1b[1;31m~\x1b[1;37m>', '[\x1b[1;32mEXEC\x1b[1;37m]', time, color(command), 'from', color(sender.split('@')[0]), 'in', color(groupName), 'args :', color(args.length))
      	//if (!isCmd && isGroup) console.log('\x1b[1;31m~\x1b[1;37m>', '[\x1b[1;31mTEXT\x1b[1;37m]', time, color('Message'), 'from', color(sender.split('@')[0]), 'in', color(groupName), 'args :', color(args.length))
		if (!mek.key.fromMe && banChats === true) return

switch (command) {
    case 'menu':
    case 'help':
    case '?':
    	var menu = `╒════════════════════
├Owner  : *${ownername}*
├ wa.me/6282130301023
├Lib        : *Baileys V.3.5.1*
├Prefix   :${multi ? '*[MULTI-PREFIX]*' : '*[NO-PREFIX]*'}
├Mode   : ${banChats ? '*[SELF-MODE]*' : '*[PUBLIC-MODE]*'}
├════════════════════
├➤ MAIN
├ ➪ ${prefix}help
├ ➪ ${prefix}menu
├ ➪ ${prefix}?
├────────────────────
├➤ MAKER
├❒ ${prefix}sticker
├❒ ${prefix}stickergif
├❒ ${prefix}stickernobg
├❒ ${prefix}stickerwm <author|packname>
├❒ ${prefix}take <author|packname>
├❒ ${prefix}fdeface
├❒ ${prefix}emoji <emoji>
├❒ ${prefix}ttp <teks>
├❒ ${prefix}attp <teks>
├────────────────────
├➤ CONVERT
├❒ ${prefix}toimg
├❒ ${prefix}tovid
├❒ ${prefix}getimage
├❒ ${prefix}tomp3
├❒ ${prefix}tomp4
├❒ ${prefix}slow
├❒ ${prefix}fast
├❒ ${prefix}reverse
├❒ ${prefix}tourl
├────────────────────
├➤ FUN
├❒ ${prefix}apakah
├❒ ${prefix}bisakah
├❒ ${prefix}kapankah
├❒ ${prefix}gay
├❒ ${prefix}flip
├❒ ${prefix}dice
├❒ ${prefix}fitnah
├❒ ${prefix}fitnahpc
├❒ ${prefix}kontak
├────────────────────
├➤ ANIMANGA
├❒ ${prefix}character <query>
├❒ ${prefix}waifu <random>
├❒ ${prefix}anime <anime name>
├❒ ${prefix}manga <manga name>
├❒ ${prefix}quote <random>
├❒ ${prefix}wait  <reply image>
├────────────────────
├➤ ISLAM
├❒ ${prefix}listsurah 
├❒ ${prefix}alquran
├❒ ${prefix}alquranaudio
├❒ ${prefix}asmaulhusna
├❒ ${prefix}kisahnabi <name>
├❒ ${prefix}jadwalsholat <place name>
├────────────────────
├➤ IMAGE
├❒ ${prefix}image <query>
├❒ ${prefix}ssweb <url>
├❒ ${prefix}randomimage <random>
├❒ ${prefix}nulis <teks>
├❒ ${prefix}puisi <random>
├❒ ${prefix}pinterest <query>
├❒ ${prefix}pinterest2 <query>
├❒ ${prefix}wallpaper <query>
├❒ ${prefix}wallpaper2 <query>
├────────────────────
├➤ SEARCHING
├❒ ${prefix}ytsearch <query>
├❒ ${prefix}igstalk <query>
├❒ ${prefix}igstalk2 <query>
├❒ ${prefix}brainly <query>
├❒ ${prefix}github <query>
├❒ ${prefix}lirik <query>
├❒ ${prefix}cuaca  <query>
├❒ ${prefix}translate <bahasa> <teks>
├❒ ${prefix}playstore <apk name>
├❒ ${prefix}zodiak
├────────────────────
├➤ DOWNLOAD
├❒ ${prefix}playmp3 <query>
├❒ ${prefix}playmp4 <query>
├❒ ${prefix}ytmp3 <link>
├❒ ${prefix}ytmp4 <link>
├❒ ${prefix}ig <link>
├❒ ${prefix}twitter <link>
├❒ ${prefix}tiktok <link>
├❒ ${prefix}tiktokaudio <link>
├❒ ${prefix}fb <link> 
├────────────────────
├➤ OTHER
├❒ ${prefix}readmore <teks|teks>
├❒ ${prefix}inspect <link gc>
├❒ ${prefix}ping
├❒ ${prefix}status
├❒ ${prefix}runtime
├❒ ${prefix}get
├❒ ${prefix}owner
├────────────────────
├➤ GROUP
├❒ ${prefix}getpic <@tag>
├❒ ${prefix}getbio <@tag>
├❒ ${prefix}linkgc
├❒ ${prefix}admin
├❒ ${prefix}ping
├❒ ${prefix}ping2
├❒ ${prefix}tagall
├❒ ${prefix}tagall2
├❒ ${prefix}hidetag
├❒ ${prefix}kontag
├❒ ${prefix}sticktag
├❒ ${prefix}totag
├❒ ${prefix}open <true/false>
├❒ ${prefix}close <true/false>
├❒ ${prefix}group <open/close>
├❒ ${prefix}delete
├❒ ${prefix}closetime
├❒ ${prefix}opentime
├❒ ${prefix}promote
├❒ ${prefix}demote
├❒ ${prefix}simi (enable/disable)
├❒ ${prefix}setname
├❒ ${prefix}setdesc
├────────────────────
├➤ OWNER
├❒ ${prefix}off
├❒ ${prefix}on
├❒ ${prefix}self
├❒ ${prefix}public
├❒ ${prefix}setthumb
├❒ ${prefix}settextimg
├❒ ${prefix}setfakeimg
├❒ ${prefix}setreply
├❒ ${prefix}settarget
├❒ ${prefix}join
├❒ ${prefix}leave
├❒ ${prefix}upswteks
├❒ ${prefix}upswimage
├❒ ${prefix}upswvideo
├❒  >
├❒  <
├❒  =>
├❒ $
├────────────────────
╘════════════════════

❏ *©Itz.Me/Erick* ❏`
        	fakelink(menu)
           	break
           
       case 'donasi':
       case 'donate':
     var donate = `╭──────「 *DONASI* 」
├❒ *PULSA:*
├➪ Telkomsel: 082130301023
├➪ Axis          : 
│
├❒ *SAWERIA:*
├➪ https://saweria.co/ItzMeErick
╰──────「 *${ownername}* 」`
        textImg(donate)
        break
           
           case 'credits':
           case 'sc':
           case 'sourcecode':
       var credits = `╒═══ ❰ *CREDITS* ❱ ═══
│Bot ini menggunakan base Hexa
│Link: https://github.com/Hexagonz/SELF-HX
│
│Di Recode oleh Itz.Me.Erick
│Link: https://github.com/Shuichi126/simple-bot
├────────────────────
├➪ *THANKS TO*
│
├❒ *Baileys* https://github.com/adiwajshing/Baileys
├❒ *MhankBarBar* https://github.com/MhankBarBar
├❒ *MRHRTZ* https://github.com/MRHRTZ
├❒ *Lolhuman* https://github.com/LoL-Human
├❒ *Penyedia api Dan creator bot lainnya*
╘═══ ❰ *${ownername}* ❱ ═══`
         fakelink(credits)
         break
         
//OWNER
    case 'on':
            if (!mek.key.fromMe && !isOwner) return reply(mess.only.ownerB)
            offline = false
            fakestatus(' ``ANDA TELAH ONLINE``` ')
            break       
    case 'status':
            fakestatus(`*STATUS*\n${offline ? '> OFFLINE' : '> ONLINE'}\n${banChats ? '> SELF-MODE' : '> PUBLIC-MODE'}`)
            break
    case 'off':
            if (!mek.key.fromMe && !isOwner) return reply(mess.only.ownerB)
            offline = true
            waktu = Date.now()
            anuu = args.join(' ') ? args.join(' ') : '-'
            alasan = anuu
            fakestatus(' ```ANDA TELAH OFFLINE``` ')
            break
     case 'ht':
            if (!mek.key.fromMe && !isOwner) return reply(mess.only.ownerB)
            var value = body.slice(3)
            var group = await erik.groupMetadata(from)
            var member = group['participants']
            var mem = []
            member.map( async adm => {
            mem.push(adm.id.replace('c.us', 's.whatsapp.net'))
            })
            var options = {
            text: value,
            contextInfo: { mentionedJid: mem },
            quoted: mek
            }
            erik.sendMessage(from, options, text)
            break
    case 'kontag':
            if (!mek.key.fromMe && !isOwner) return reply(mess.only.ownerB)
            pe = args.join('')
            entah = pe.split('|')[0]
            nah = pe.split('|')[1]
            if (isNaN(entah)) return reply('Invalid phone number');
            members_ids = []
            for (let mem of groupMembers) {
            members_ids.push(mem.jid)
            }
            vcard = 'BEGIN:VCARD\n'
            + 'VERSION:3.0\n'
            + `FN:${nah}\n`
            + `TEL;type=CELL;type=VOICE;waid=${entah}:${phoneNum('+' + entah).getNumber('internasional')}\n`
            + 'END:VCARD'.trim()
            erik.sendMessage(from, {displayName: `${nah}`, vcard: vcard}, contact, {contextInfo: {"mentionedJid": members_ids}})
            break
    case 'sticktag':
            if (!mek.key.fromMe && !isOwner) return reply(mess.only.ownerB)
            if ((isMedia && !mek.message.videoMessage || isQuotedSticker) && args.length == 0) {
            encmedia = isQuotedSticker ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : mek
            file = await erik.downloadAndSaveMediaMessage(encmedia, filename = getRandom())
            value = args.join(" ")
            var group = await erik.groupMetadata(from)
            var member = group['participants']
            var mem = []
            member.map(async adm => {
            mem.push(adm.id.replace('c.us', 's.whatsapp.net'))
            })
            var options = {
                contextInfo: { mentionedJid: mem },
               quoted: mek
            }
            ini_buffer = fs.readFileSync(file)
            erik.sendMessage(from, ini_buffer, sticker, options)
            fs.unlinkSync(file)
            } else {
            reply(`*Reply sticker yang sudah dikirim*`)
            }
            break
    case 'totag':
            if (!mek.key.fromMe && !isOwner) return reply(mess.only.ownerB)
            if ((isMedia && !mek.message.videoMessage || isQuotedSticker) && args.length == 0) {
            encmedia = isQuotedSticker ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : mek
            file = await erik.downloadAndSaveMediaMessage(encmedia, filename = getRandom())
            value = args.join(" ")
            var group = await erik.groupMetadata(from)
            var member = group['participants']
            var mem = []
            member.map(async adm => {
            mem.push(adm.id.replace('c.us', 's.whatsapp.net'))
            })
            var options = {
                contextInfo: { mentionedJid: mem },
                quoted: mek
            }
            ini_buffer = fs.readFileSync(file)
            erik.sendMessage(from, ini_buffer, sticker, options)
            fs.unlinkSync(file)
            } else if ((isMedia && !mek.message.videoMessage || isQuotedImage) && args.length == 0) {
            encmedia = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : mek
            file = await erik.downloadAndSaveMediaMessage(encmedia, filename = getRandom())
            value = args.join(" ")
            var group = await erik.groupMetadata(from)
            var member = group['participants']
            var mem = []
            member.map(async adm => {
            mem.push(adm.id.replace('c.us', 's.whatsapp.net'))
            })
            var options = {
                contextInfo: { mentionedJid: mem },
                quoted: mek
            }
            ini_buffer = fs.readFileSync(file)
            erik.sendMessage(from, ini_buffer, image, options)
            fs.unlinkSync(file)
        } else if ((isMedia && !mek.message.videoMessage || isQuotedAudio) && args.length == 0) {
            encmedia = isQuotedAudio ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : mek
            file = await erik.downloadAndSaveMediaMessage(encmedia, filename = getRandom())
            value = args.join(" ")
            var group = await erik.groupMetadata(from)
            var member = group['participants']
            var mem = []
            member.map(async adm => {
            mem.push(adm.id.replace('c.us', 's.whatsapp.net'))
            })
            var options = {
            	mimetype : 'audio/mp4',
            	ptt : true,
                contextInfo: { mentionedJid: mem },
                quoted: mek
            }
            ini_buffer = fs.readFileSync(file)
            erik.sendMessage(from, ini_buffer, audio, options)
            fs.unlinkSync(file)
        }  else if ((isMedia && !mek.message.videoMessage || isQuotedVideo) && args.length == 0) {
            encmedia = isQuotedVideo ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : mek
            file = await erik.downloadAndSaveMediaMessage(encmedia, filename = getRandom())
            value = args.join(" ")
            var group = await erik.groupMetadata(from)
            var member = group['participants']
            var mem = []
            member.map(async adm => {
            mem.push(adm.id.replace('c.us', 's.whatsapp.net'))
            })
            var options = {
            	mimetype : 'video/mp4',
                contextInfo: { mentionedJid: mem },
                quoted: mek
            }
            ini_buffer = fs.readFileSync(file)
            erik.sendMessage(from, ini_buffer, video, options)
            fs.unlinkSync(file)
        } else{
          reply(`reply gambar/sticker/audio/video dengan caption ${prefix}totag`)
        }
        break
     case 'totag':
            if (!mek.key.fromMe && !isOwner) return reply(mess.only.ownerB)
            if ((isMedia && !mek.message.videoMessage || isQuotedSticker) && args.length == 0) {
            encmedia = isQuotedSticker ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : mek
            file = await erik.downloadAndSaveMediaMessage(encmedia, filename = getRandom())
            value = args.join(" ")
            var group = await erik.groupMetadata(from)
            var member = group['participants']
            var mem = []
            member.map(async adm => {
            mem.push(adm.id.replace('c.us', 's.whatsapp.net'))
            })
            var options = {
                contextInfo: { mentionedJid: mem },
                quoted: mek
            }
            ini_buffer = fs.readFileSync(file)
            erik.sendMessage(from, ini_buffer, sticker, options)
            fs.unlinkSync(file)
            } else if ((isMedia && !mek.message.videoMessage || isQuotedImage) && args.length == 0) {
            encmedia = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : mek
            file = await erik.downloadAndSaveMediaMessage(encmedia, filename = getRandom())
            value = args.join(" ")
            var group = await erik.groupMetadata(from)
            var member = group['participants']
            var mem = []
            member.map(async adm => {
            mem.push(adm.id.replace('c.us', 's.whatsapp.net'))
            })
            var options = {
                contextInfo: { mentionedJid: mem },
                quoted: mek
            }
            ini_buffer = fs.readFileSync(file)
            erik.sendMessage(from, ini_buffer, image, options)
            fs.unlinkSync(file)
        } else if ((isMedia && !mek.message.videoMessage || isQuotedAudio) && args.length == 0) {
            encmedia = isQuotedAudio ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : mek
            file = await erik.downloadAndSaveMediaMessage(encmedia, filename = getRandom())
            value = args.join(" ")
            var group = await erik.groupMetadata(from)
            var member = group['participants']
            var mem = []
            member.map(async adm => {
            mem.push(adm.id.replace('c.us', 's.whatsapp.net'))
            })
            var options = {
                mimetype : 'audio/mp4',
                ptt : true,
                contextInfo: { mentionedJid: mem },
                quoted: mek
            }
            ini_buffer = fs.readFileSync(file)
            erik.sendMessage(from, ini_buffer, audio, options)
            fs.unlinkSync(file)
        }  else if ((isMedia && !mek.message.videoMessage || isQuotedVideo) && args.length == 0) {
            encmedia = isQuotedVideo ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : mek
            file = await erik.downloadAndSaveMediaMessage(encmedia, filename = getRandom())
            value = args.join(" ")
            var group = await erik.groupMetadata(from)
            var member = group['participants']
            var mem = []
            member.map(async adm => {
            mem.push(adm.id.replace('c.us', 's.whatsapp.net'))
            })
            var options = {
                mimetype : 'video/mp4',
                contextInfo: { mentionedJid: mem },
                quoted: mek
            }
            ini_buffer = fs.readFileSync(file)
            erik.sendMessage(from, ini_buffer, video, options)
            fs.unlinkSync(file)
        } else{
          reply(`reply gambar/sticker/audio/video dengan caption ${prefix}totag`)
        }
        break
    case 'broadcast':
                    if (sender.split("@")[0] != owner) return reply(mess.only.ownerB)
                    list_chat = await erik.chats.all()
                    ini_text = args.join(" ")
                    for (let chat of list_chat) {
                        sendMess(chat.jid, ini_text)
                    }
                    break
    case 'settarget':
            if (!mek.key.fromMe && !isOwner) return reply(mess.only.ownerB)
            if(!q) return reply(`${prefix}settarget 628xxxxx`)
            targetpc = args[0]
            fakegroup(`Succes Mengganti target fitnahpc : ${targetpc}`)
            break
     case 'public':
          	if (!mek.key.fromMe) return fakestatus('```KHUSUS OWNER```')
          	if (banChats === false) return
          	// var taged = ben.message.extendedTextMessage.contextInfo.mentionedJid[0]
          	banChats = false
          	fakestatus(`「 *PUBLIC-MODE* 」`)
          	break
     case 'self':
          	if (!mek.key.fromMe) return fakestatus('```KHUSUS OWNER```')
          	if (banChats === true) return
          	uptime = process.uptime()
         	 // var taged = ben.message.extendedTextMessage.contextInfo.mentionedJid[0]
         	banChats = true
          	fakestatus(`「 *SELF-MODE* 」`)
          	break
     case 'upswteks':
            if (!mek.key.fromMe && !isOwner) return reply(mess.only.ownerB)
            if (!q) return fakestatus('Isi teksnya!')
            erik.sendMessage('status@broadcast', `${q}`, extendedText)
            fakegroup(`Sukses Up story wea teks ${q}`)
            break
    case 'upswimage':
            if (!mek.key.fromMe && !isOwner) return reply(mess.only.ownerB)
            if (isQuotedImage) {
            const swsw = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : mek
            cihcih = await erik.downloadMediaMessage(swsw)
            erik.sendMessage('status@broadcast', cihcih, image, { caption: `${q}` })
            bur = `Sukses Upload Story Image dengan Caption: ${q}`
            erik.sendMessage(from, bur, text, { quoted: mek })
            } else {
            fakestatus('Reply gambarnya!')
            }
            break
    case 'upswvideo':
            if (!mek.key.fromMe && !isOwner) return reply(mess.only.ownerB)
            if (isQuotedVideo) {
            const swsw = isQuotedVideo ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : mek
            cihcih = await erik.downloadMediaMessage(swsw)
            erik.sendMessage('status@broadcast', cihcih, video, { caption: `${q}` }) 
            bur = `Sukses Upload Story Video dengan Caption: ${q}`
            erik.sendMessage(from, bur, text, { quoted: mek })
            } else {
            fakestatus('reply videonya!')
            }
            break
     case 'hidetag':
			if (!mek.key.fromMe && !isOwner) return reply(mess.only.ownerB)
			if (!isGroup) return reply(mess.only.group)
			var value = args.join(' ')
			var group = await erik.groupMetadata(from)
			var member = group['participants']
			var mem = []
			member.map(async adm => {
			mem.push(adm.id.replace('c.us', 's.whatsapp.net'))
			})
			var optionshidetag = {
			text: value,
			contextInfo: { mentionedJid: mem },
			quoted: mek
			}
			erik.sendMessage(from, optionshidetag, text)
			break
     case 'leave': 
                    if (!mek.key.fromMe && !isOwner) return reply(mess.only.ownerB)
				    if (!isGroup) return reply(mess.only.group)
			    	anu = await erik.groupLeave(from, `Bye All Member *${groupMetadata.subject}*`, groupId)
	                break
	 case 'setreply':
	 case 'setfake':
	                if (!mek.key.fromMe && !isOwner) return reply(mess.only.ownerB)
			if (!q) return fakegroup(mess.wrongFormat)
			fake = q
			fakegroup(`Succes Mengganti Conversation Fake : ${q}`)
			break
	case 'setfakeimg':
	        if (!mek.key.fromMe && !isOwner) return reply(mess.only.ownerB)
        	if ((isMedia && !mek.message.videoMessage || isQuotedImage || isQuotedSticker) && args.length == 0) {
          	boij = isQuotedImage || isQuotedSticker ? JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo : mek
			delb = await erik.downloadMediaMessage(boij)
			fs.writeFileSync(`./stik/fake.jpeg`, delb)
			fakestatus('Sukses')
        	} else {
            reply(`Kirim gambar dengan caption ${prefix}sethumb`)
          	}
			break	
	case 'setthumb':
	        if (!mek.key.fromMe && !isOwner) return reply(mess.only.ownerB)
	        if ((isMedia && !mek.message.videoMessage || isQuotedImage || isQuotedSticker) && args.length == 0) {
          	boij = isQuotedImage || isQuotedSticker ? JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo : mek
			delb = await erik.downloadMediaMessage(boij)
			fs.writeFileSync(`./stik/thumb.jpeg`, delb)
			fakestatus('Sukses')
        	} else {
            reply(`Kirim gambar dengan caption ${prefix}sethumb`)
          	}
			break
	  case 'settextimg':
	        if (!mek.key.fromMe && !isOwner) return reply(mess.only.ownerB)
	        if ((isMedia && !mek.message.videoMessage || isQuotedImage || isQuotedSticker) && args.length == 0) {
          	boij = isQuotedImage || isQuotedSticker ? JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo : mek
			delb = await erik.downloadMediaMessage(boij)
			fs.writeFileSync(`./stik/textimg.jpeg`, delb)
			fakestatus('Sukses')
        	} else {
            reply(`Kirim gambar dengan caption ${prefix}sethumb`)
          	}
			break
      case '>':
	        if (!mek.key.fromMe && !isOwner) return reply(mess.only.ownerB)
			if (!q) return fakegroup(mess.wrongFormat)
			exec(q, (err, stdout) => {
			if (err) return fakegroup(`Itz.Me/Erick:~ ${err}`)
			if (stdout) {
			fakegroup(stdout)
			}
			})
		    break 
    case 'join':
            try {
            if (!mek.key.fromMe && !isOwner) return reply(mess.only.ownerB)
            if (!isUrl(args[0]) && !args[0].includes('whatsapp.com')) return reply(mess.Iv)
            hen = args[0]
            if (!q) return fakestatus('Masukan link group')
            var codeInvite = hen.split('https://chat.whatsapp.com/')[1]
            if (!codeInvite) return fakegroup ('pastikan link sudah benar!')
            var response = await erik.acceptInvite(codeInvite)
            fakestatus('SUKSES')
            } catch {
            fakegroup('LINK ERROR!')
            }
            break
           case 'register':
               if (!isGroup) return reply(mess.only.group);
               if (!mek.key.fromMe && !isOwner) return reply(mess.only.ownerB)
               if (args.length < 1) return reply('wrong format')
               if (args[0] === 'nsfw') {
                  if (isNsfw) return reply('Nsfw has registered');
                  nsfw.push(from);
                  fs.writeFileSync('./lib/nsfw.json', JSON.stringify(nsfw));
                  reply(`\`\`\`✔️Sukses mengaktifkan nsfw di group\`\`\` *${groupMetadata.subject}*`);
               } else if (args[0] === 'false') {
                  nsfw.splice(from, 1);
                  fs.writeFileSync('./lib/nsfw.json', JSON.stringify(nsfw));
                  reply(`\`\`\`✔️Sukes menonaktifkan nsfw di group\`\`\` *${groupMetadata.subject}*`);
               }
               break
          case 'unregister':
               if (!isGroup) return reply(mess.only.group);
               if (!mek.key.fromMe && !isOwner) return reply(mess.only.ownerB)
               if (args.length < 1) return reply('wrong format');
               if (args[0] === 'false') {
                  if (isNsfw) return reply('Nsfw has registered');
                  nsfw.push(from);
                  fs.writeFileSync('./lib/nsfw.json', JSON.stringify(nsfw));
                  reply(`\`\`\`✔️Sukses mengaktifkan nsfw di group\`\`\` *${groupMetadata.subject}*`)
               } else if (args[0] === 'nsfw') {
                  nsfw.splice(from, 1);
                  fs.writeFileSync('./lib/nsfw.json', JSON.stringify(nsfw));
                  reply(`\`\`\`✔️Sukes menonaktifkan nsfw di group\`\`\` *${groupMetadata.subject}*`);
               }
               break
          case 'register':
               if (!mek.key.fromMe && !isOwner) return reply(mess.only.ownerB)
               if (!isGroup) return reply(mess.only.group)
               if (args.length < 1) return reply('wrong format')
               if (args[0] === 'simi') {
                  if (isSimi) return reply('Simi is registered')
                  samih.push(from)
                  fs.writeFileSync('./lib/simi.json', JSON.stringify(samih))
                  reply(`\`\`\`✔️Sukses mengaktifkan nsfw di group\`\`\` *${groupMetadata.subject}*`)
               } else if (args[0] === 'false2') {
                  samih.splice(from, 1);
                  fs.writeFileSync('./lib/simi.json', JSON.stringify(samih))
                  reply(`\`\`\`✔️Sukes menonaktifkan nsfw di group\`\`\` *${groupMetadata.subject}*`)
               }
               break
           case 'unregister':
               if (!mek.key.fromMe && !isOwner) return reply(mess.only.ownerB)
               if (!isGroup) return reply(mess.only.group)
               if (args.length < 1) return reply('wrong format')
               if (args[0] === 'false2') {
                  if (isSimi) return reply('Simi is registered')
                  samih.push(from)
                  fs.writeFileSync('./lib/simi.json', JSON.stringify(samih))
                  reply(`\`\`\`✔️Sukses mengaktifkan nsfw di group\`\`\` *${groupMetadata.subject}*`)
               } else if (args[0] === 'simi') {
                  samih.splice(from, 1);
                  fs.writeFileSync('./lib/simi.json', JSON.stringify(samih))
                  reply(`\`\`\`✔️Sukes menonaktifkan nsfw di group\`\`\` *${groupMetadata.subject}*`)
               }
               break
        case 'mute':
                if (!isGroup) return reply(mess.only.group)
                if (!mek.key.fromMe && !isOwner) return reply(mess.only.ownerB)
                if (isMuted) return reply(`udah mute`)
                mute.push(from)
                fs.writeFileSync('./database/mute.json', JSON.stringify(mute))
                reply(`Bot berhasil dimute di chat ini`)
                break
        case 'setprefix':
			if (!mek.key.fromMe && !isOwner) return reply(mess.only.ownerB)
			if (args.length < 1) return reply('Teksnya?')
				prefix = args[0]
				reply('Sukses')
				break 
				case 'setprefix2':
                if (!mek.key.fromMe && !isOwner) return reply(mess.only.ownerB)
                if (args.length < 1) return reply(`Masukkan prefix\nOptions :\n=> multi\n=> nopref`)
                if (q === 'multi'){
                    multi = true
                    reply(`Berhasil mengubah prefix ke ${q}`)
                } else if (q === 'nopref'){
                    multi = false
                    nopref = true
                    reply(`Berhasil mengubah prefix ke ${q}`)
                } else {
                    multi = false
                    nopref = false
                    prefa = `${q}`
                    reply(`Berhasil mengubah prefix ke ${q}`)
                }
                break
               
//MAKER
     case 'ttp':
             if (args.length == 0) return reply(`Masukan Teks\nContoh: ${prefix + command} NgErikMenSediH`)
                    ini_txt = args.join(" ")
                    ini_buffer = await getBuffer(`https://api.lolhuman.xyz/api/${command}?apikey=${LolKey}&text=${ini_txt}`)
                    await erik.sendMessage(from, ini_buffer, sticker, { quoted: mek })
                    break
      case 'attp':
                    if (args.length == 0) return reply(`Masukan Teks!!\nContoh: ${prefix + command} NgErikMenSediH`)
                    ini_txt = args.join(" ")
                    ini_buffer = await getBuffer(`https://api.lolhuman.xyz/api/${command}?apikey=${LolKey}&text=${ini_txt}`)
                    await erik.sendMessage(from, ini_buffer, sticker, { quoted: mek })
                    break
    case 'sticker': 
    case 'stiker':
    case 'stickergif':
    case 'stikergif':
    case 'sg':
    case 's':
            if ((isMedia && !mek.message.videoMessage || isQuotedImage) && args.length == 0) {
            const encmedia = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : mek
            const media = await erik.downloadAndSaveMediaMessage(encmedia)
                ran = '666.webp'
                await ffmpeg(`./${media}`)
                .input(media)
                .on('start', function (cmd) {
                     console.log(`Started : ${cmd}`)
                })
                .on('error', function (err) {
                 console.log(`Error : ${err}`)
                fs.unlinkSync(media)
                reply('error')
                })
                .on('end', function () {
                console.log('Finish')
                erik.sendMessage(from, fs.readFileSync(ran), sticker, {quoted: mek})
                 fs.unlinkSync(media)
                fs.unlinkSync(ran)
                })
                .addOutputOptions([`-vcodec`, `libwebp`, `-vf`, `scale='min(320,iw)':min'(320,ih)':force_original_aspect_ratio=decrease,fps=15, pad=320:320:-1:-1:color=white@0.0, split [a][b]; [a] palettegen=reserve_transparent=on:transparency_color=ffffff [p]; [b][p] paletteuse`])
                .toFormat('webp')
                .save(ran)
                } else if ((isMedia && mek.message.videoMessage.seconds < 11 || isQuotedVideo && mek.message.extendedTextMessage.contextInfo.quotedMessage.videoMessage.seconds < 11) && args.length == 0) {
                const encmedia = isQuotedVideo ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : mek
                const media = await erik.downloadAndSaveMediaMessage(encmedia)
            ran = '999.webp'
            reply(mess.wait)
            await ffmpeg(`./${media}`)
            .inputFormat(media.split('.')[1])
            .on('start', function (cmd) {
            console.log(`Started : ${cmd}`)
            })
            .on('error', function (err) {
            console.log(`Error : ${err}`)
            fs.unlinkSync(media)
            tipe = media.endsWith('.mp4') ? 'video' : 'gif'
            reply(`Gagal, pada saat mengkonversi ${tipe} ke stiker`)
            })
            .on('end', function () {
            console.log('Finish')
            erik.sendMessage(from, fs.readFileSync(ran), sticker, {quoted: mek})
            fs.unlinkSync(media)
            fs.unlinkSync(ran)
                })
                .addOutputOptions([`-vcodec`, `libwebp`, `-vf`, `scale='min(320,iw)':min'(320,ih)':force_original_aspect_ratio=decrease,fps=15, pad=320:320:-1:-1:color=white@0.0, split [a][b]; [a] palettegen=reserve_transparent=on:transparency_color=ffffff [p]; [b][p] paletteuse`])
                .toFormat('webp')
                .save(ran)
            } else {
                reply(`Kirim gambar dengan caption ${prefix}sticker\nDurasi Sticker Video 1-9 Detik`)
            }
            break
      case 'take':
    case 'colong':
    case 'ambil':
    case 'klaim':
    		if (!isQuotedSticker) return reply('Stiker aja om')
            encmedia = JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo
		    media = await erik.downloadAndSaveMediaMessage(encmedia)
            anu = args.join(' ').split('|')
            satu = anu[0] !== '' ? anu[0] : `Ini Sticker colongan`
            dua = typeof anu[1] !== 'undefined' ? anu[1] : `NgErikMenSediH`
            require('./lib/fetcher.js').createExif(satu, dua)
			require('./lib/fetcher.js').modStick(media, erik, mek, from)
			break
	case 'stikerwm':
	case 'stickerwm':
    case 'swm':
            pe = args.join('')
            var a = pe.split("|")[0];
            var b = pe.split("|")[1];
            if (isMedia && !mek.message.videoMessage || isQuotedImage ) {
            const encmedia = isQuotedImage   ? JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo : mek
             media = await erik.downloadAndSaveMediaMessage(encmedia)
            await createExif(a,b)
            out = getRandom('.webp')
            ffmpeg(media)
            .on('error', (e) => {
            console.log(e)
            erik.sendMessage(from, 'Terjadi kesalahan', 'conversation', { quoted: mek })
            fs.unlinkSync(media)
            })
            .on('end', () => {
            _out = getRandom('.webp')
            spawn('webpmux', ['-set','exif','./stik/data.exif', out, '-o', _out])
            .on('exit', () => {
            erik.sendMessage(from, fs.readFileSync(_out),'stickerMessage', { quoted: mek })
            fs.unlinkSync(out)
            fs.unlinkSync(_out)
            fs.unlinkSync(media)
            })
            })
            .addOutputOptions([`-vcodec`,`libwebp`,`-vf`,`scale='min(320,iw)':min'(320,ih)':force_original_aspect_ratio=decrease,fps=15, pad=320:320:-1:-1:color=white@0.0, split [a][b]; [a] palettegen=reserve_transparent=on:transparency_color=ffffff [p]; [b][p] paletteuse`])
            .toFormat('webp')
            .save(out) 
            } else if ((isMedia && mek.message.videoMessage.seconds < 11 || isQuotedVideo && mek.message.extendedTextMessage.contextInfo.quotedMessage.videoMessage.seconds < 11) && args.length == 0) {
            const encmedia = isQuotedVideo ? JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo : mek
            const media = await erik.downloadAndSaveMediaMessage(encmedia)
            pe = args.join('')
            var a = pe.split("|")[0];
            var b = pe.split("|")[1];
            await createExif(a,b)
            out = getRandom('.webp')
            ffmpeg(media)
            .on('error', (e) => {
            console.log(e)
            erik.sendMessage(from, 'Terjadi kesalahan', 'conversation', { quoted: mek })
            fs.unlinkSync(media)
            })
            .on('end', () => {
            _out = getRandom('.webp')
            spawn('webpmux', ['-set','exif','./stik/data.exif', out, '-o', _out])
            .on('exit', () => {
            erik.sendMessage(from, fs.readFileSync(_out),'stickerMessage', { quoted: mek })
            fs.unlinkSync(out)
            fs.unlinkSync(_out)
            fs.unlinkSync(media)
            })
            })
            .addOutputOptions([`-vcodec`,`libwebp`,`-vf`,`scale='min(320,iw)':min'(320,ih)':force_original_aspect_ratio=decrease,fps=15, pad=320:320:-1:-1:color=white@0.0, split [a][b]; [a] palettegen=reserve_transparent=on:transparency_color=ffffff [p]; [b][p] paletteuse`])
            .toFormat('webp')
            .save(out)       
            } else {
            reply(`Kirim gambar dengan caption ${prefix}swm teks|teks atau tag gambar yang sudah dikirim`)
            }
            break
    case 'emoji':
			if (!q) return fakegroup('emojinya?')
			qes = args.join(' ')
			emoji.get(`${qes}`).then(emoji => {
			teks = `${emoji.images[4].url}`
    		sendStickerFromUrl(from,`${teks}`)	
    		console.log(teks)
   			})
    		break
    case 'stickernobg':
    case 'snobg':
                    if ((isMedia && !mek.message.videoMessage || isQuotedImage) && args.length == 0) {
                        const encmedia = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : mek
                        filePath = await erik.downloadAndSaveMediaMessage(encmedia)
                        file_name = getRandom('.png')
                        file_name2 = getRandom('.webp')
                        request({
                            url: `https://api.lolhuman.xyz/api/removebg?apikey=${LolKey}`,
                            method: 'POST',
                            formData: {
                                "img": fs.createReadStream(filePath)
                            },
                            encoding: "binary"
                        }, function(error, response, body) {
                            fs.unlinkSync(filePath)
                            fs.writeFileSync(file_name, body, "binary")
                            ffmpeg(`./stik/${file_name}`)
                                .input(file_name)
                                .on('error', function(err) {
                                    console.log(err)
                                    fs.unlinkSync(file_name)
                                })
                                .on('end', function() {
                                    erik.sendMessage(from, fs.readFileSync(file_name2), sticker, { quoted: mek })
                                    fs.unlinkSync(file_name2)
                                })
                                .addOutputOptions([`-vcodec`, `libwebp`, `-vf`, `scale='min(320,iw)':min'(320,ih)':force_original_aspect_ratio=decrease,fps=15, pad=320:320:-1:-1:color=white@0.0, split [a][b]; [a] palettegen=reserve_transparent=on:transparency_color=ffffff [p]; [b][p] paletteuse`])
                                .toFormat('webp')
                                .save(file_name2)
                        });
                    } else {
                        reply(`Kirim gambar dengan caption ${prefix}sticker atau tag gambar yang sudah dikirim`)
                    }
                    break
            
//CONVERT
      
    case 'toimg':
    case 'getimage':
			if (!isQuotedSticker) return reply('Reply Sticker nya!')
			reply(mess.wait)
			encmedia = JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo
			media = await erik.downloadAndSaveMediaMessage(encmedia)
			ran = getRandom('.png')
			exec(`ffmpeg -i ${media} ${ran}`, (err) => {
			fs.unlinkSync(media)
			if (err) return reply('Yah gagal, coba ulangi!')
			buffer = fs.readFileSync(ran)
			fakethumb(buffer,'©Itz.Me/Erick')
			fs.unlinkSync(ran)
			})
			break
    case 'tomp4':
    case 'tovid':
            if ((isMedia && !mek.message.videoMessage || isQuotedSticker) && args.length == 0) {
            ger = isQuotedSticker ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : mek
            owgi = await erik.downloadAndSaveMediaMessage(ger)
            webp2mp4File(owgi).then(res=>{
            sendMediaURL(from,res.result,'©Itz.Me/Erick')
            })
            }else {
            reply('reply sticker gif')
            }
            fs.unlinkSync(owgi)
            break
      case 'tomp3':
            if (!isQuotedVideo) return fakegroup('Reply videonya!')
            fakegroup(mess.wait)
            encmedia = JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo
            media = await erik.downloadAndSaveMediaMessage(encmedia)
            ran = getRandom('.mp4')
            exec(`ffmpeg -i ${media} ${ran}`, (err) => {
            fs.unlinkSync(media)
            if (err) return fakegroup(`Err: ${err}`)
            buffer453 = fs.readFileSync(ran)
            erik.sendMessage(from, buffer453, audio, { mimetype: 'audio/mp4', quoted: mek })
            fs.unlinkSync(ran)
            })
            break
      case 'slow':
            if (!isQuotedVideo) return fakegroup('Reply videonya!')
            fakegroup(mess.wait)
            encmedia = JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo
            media = await erik.downloadAndSaveMediaMessage(encmedia)
            ran = getRandom('.mp4')
            exec(`ffmpeg -i ${media} -filter_complex "[0:v]setpts=2*PTS[v];[0:a]atempo=0.5[a]" -map "[v]" -map "[a]" ${ran}`, (err) => {
            fs.unlinkSync(media)
            if (err) return fakegroup(`Err: ${err}`)
            buffer453 = fs.readFileSync(ran)
            erik.sendMessage(from, buffer453, video, { mimetype: 'video/mp4', quoted: mek })
            fs.unlinkSync(ran)
            })
            break
    case 'reverse':
            if (!isQuotedVideo) return fakegroup('Reply videonya!')
            encmedia = JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo
            media = await erik.downloadAndSaveMediaMessage(encmedia)
            ran = getRandom('.mp4')
            exec(`ffmpeg -i ${media} -vf reverse -af areverse ${ran}`, (err) => {
            fs.unlinkSync(media)
            if (err) return fakegroup(`Err: ${err}`)
            buffer453 = fs.readFileSync(ran)
            erik.sendMessage(from, buffer453, video, { mimetype: 'video/mp4', quoted: mek })
            fs.unlinkSync(ran)
            })
            break
      case 'fast':
            if (!isQuotedVideo) return fakegroup('Reply videonya!')
            fakegroup(mess.wait)
            encmedia = JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo
            media = await erik.downloadAndSaveMediaMessage(encmedia)
            ran = getRandom('.mp4')
            exec(`ffmpeg -i ${media} -filter_complex "[0:v]setpts=0.5*PTS[v];[0:a]atempo=2[a]" -map "[v]" -map "[a]" ${ran}`, (err) => {
            fs.unlinkSync(media)
            if (err) return fakegroup(`Err: ${err}`)
            buffer453 = fs.readFileSync(ran)
            erik.sendMessage(from, buffer453, video, { mimetype: 'video/mp4', quoted: mek })
            fs.unlinkSync(ran)
            })
            break
      case 'fdeface':
            ge = args.join('')           
            var pe = ge.split("|")[0];
            var pen = ge.split("|")[1];
            var pn = ge.split("|")[2];
            var be = ge.split("|")[3];
            const fde = `kirim/reply image dengan capion ${prefix}fdeface link|title|desc|teks`
            if (args.length < 1) return reply (fde)
            const dipes = isQuotedSticker || isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo : mek
            const tipes = await erik.downloadAndSaveMediaMessage(dipes)        
            const bufer = fs.readFileSync(tipes)
            const desc = `${pn}`
            const title = `${pen}`
            const url = `${pe}`
            const buu = `https://${be}`
    		var anu = {
        	detectLinks: false
    		}
    		var mat = await erik.generateLinkPreview(url)
    		mat.title = title;
    		mat.description = desc;
    		mat.jpegThumbnail = bufer;
   			mat.canonicalUrl = buu; 
    		erik.sendMessage(from, mat, MessageType.extendedText, anu)
            break
     case 'tourl':
            if ((isMedia && !mek.message.videoMessage || isQuotedImage || isQuotedVideo ) && args.length == 0) {
            boij = isQuotedImage || isQuotedVideo ? JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo : mek
            owgi = await erik.downloadMediaMessage(boij)
            res = await upload(owgi)
            reply(res)
            } else {
            reply('kirim/reply gambar/video')
            }
            break
            
//FUN

    case 'apakah':
     	    apakah = body.slice(1)
    	    const apa =['Iya','Tidak','Bisa Jadi','Mungkin','Gak Tau Dah','Mohon Di Ulangi']
            const kah = apa[Math.floor(Math.random() * apa.length)]
    	    erik.sendMessage(from, 'Pertanyaan : *'+apakah+'*\n\nJawaban : '+ kah, text, { quoted: mek })
    	    break
      case 'kapankah':
        			kapankah = body.slice()
        		    const kapan =['Ntar Pas Kiamat','Besok','Lusa','Tadi','4 Hari Lagi','5 Hari Lagi','6 Hari Lagi','1 Minggu Lagi','2 Minggu Lagi','3 Minggu Lagi','1 Bulan Lagi','2 Bulan Lagi','3 Bulan Lagi','4 Bulan Lagi','5 Bulan Lagi','6 Bulan Lagi','1 Tahun Lagi','2 Tahun Lagi','3 Tahun Lagi','4 Tahun Lagi','5 Tahun Lagi','6 Tahun Lagi','1 Abad lagi','3 Hari Lagi','gatau dah']
        			const koh = kapan[Math.floor(Math.random() * kapan.length)]
        		    erik.sendMessage(from, 'Pertanyaan : *'+kapankah+'*\n\nJawaban : '+ koh, text, { quoted: mek })
    				break
   	case 'bisakah':
        			bisakah = body.slice(1)
        		    const bisa =['Tentu Saja Bisa! Kamu Adalah Orang Paling Homky','Gak Bisa Ajg Aowkwowk','Hmm Gua Gak Tau Yaa, tanya ama bapakau','Ulangi Tod Gua Ga Paham']
        			const keh = bisa[Math.floor(Math.random() * bisa.length)]
        		    erik.sendMessage(from, 'Pertanyaan : *'+bisakah+'*\n\nJawaban : '+ keh, text, { quoted: mek })
        			break
        case 'gay':
     	    gay= body.slice(1)
    	    const g =['0%','10%','20%','%30%','40%','50%','60%','70%','100%']
            const ay = g[Math.floor(Math.random() * g.length)]
    	    erik.sendMessage(from, 'Tingkat kecocokannya Adalah : '+ ay, text, { quoted: mek })
    	    break
         case 'flip':
            flip = body.slice(1)
	        const fl =['Heads','Tails','Heads','Tails']
            const ip = fl[Math.floor(Math.random() * fl.length)]
	        erik.sendMessage(from, ip, text, { quoted: mek })
            break
    case 'dice':
            dice = body.slice(1)
            const di =['1','2','3','4','5','6']
            const ce = di[Math.floor(Math.random() * di.length)]
            erik.sendMessage(from, ce, text, { quoted: mek })
            break
     case 'fitnah':
            if (args.length < 1) return reply(`Contoh :\n${prefix}fitnah [@tag|pesan|balasanbot]]\n\nEx : \n${prefix}fitnah @tagmember|hai|hai juga`)
            var gh = args.join('')
            mentioned = mek.message.extendedTextMessage.contextInfo.mentionedJid
            var replace = gh.split("|")[0];
            var target = gh.split("|")[1];
            var bot = gh.split("|")[2];
            erik.sendMessage(from, `${bot}`, text, {quoted: { key: { fromMe: false, participant: `${mentioned}`, ...(from ? { remoteJid: from } : {}) }, message: { conversation: `${target}` }}})
            break
     case 'fitnahpc':
            if(!q) return reply(`${prefix}fitnahpc teks target|teks lu`)
            jids = `${targetpc}@s.whatsapp.net` // nomer target
            var split = args.join(' ').replace(/@|\d/gi, '').split('|')
            var taged = mek.message.extendedTextMessage.contextInfo.mentionedJid[0]
            var options = {contextInfo: {quotedMessage: {extendedTextMessage: {text: split[0]}}}}
            const responye = await erik.sendMessage(jids, `${split[1]}`, MessageType.text, options)
            await erik.deleteMessage(jids, { id: responye.messageID, remoteJid: jids, fromMe: true })
            break
            
//GROUP

case 'ping':
if (!mek.key.fromMe && !isGroupAdmins && !isOwner) return reply(mess.only.admin)
if (!isGroup) return reply(mess.only.group)
var nom = erik.participant
members_id = []
	teks = '```pesan: '+q+'```\n\n\n'
	for (let mem of groupMembers){
	teks += `➵ *@${mem.jid.split('@')[0]}*\n`
	members_id.push(mem.jid)
	}
mentions(teks, members_id, true)
break
     case 'ping2':
if (!mek.key.fromMe && !isGroupAdmins && !isOwner) return reply(mess.only.admin)
if(!q) return reply('Ingfonya apa?')
if (!isGroup) return reply(mess.only.group)
var nom = erik.participant
members_id = []
	teks = '\n'
	for (let mem of groupMembers) {
	teks += `┃  *@${mem.jid.split('@')[0]}*\n`
	members_id.push(mem.jid)
	}
mentions(`┏━━━━\n┃\n┃ *Nama Group :* ${groupName}\n┃ *Total Member :* ${groupMembers.length}\n┃ *Info :*  ${q}\n┃\n┗━━━━\n\n┏━━━━\n┃`+teks+'┃\n┗━━━━', members_id, true)
break
     case 'tagall':
if (!mek.key.fromMe && !isOwner && !isGroupAdmins) return reply(mess.only.admin)
teks = '```pesan: '+q+'```\n\n\n'
n = 1
yoi = [' ']
for(let i of groupMembers){
wo = yoi[Math.floor(Math.random() * yoi.length)]
teks += `*[${n++}]* @${i.jid.split("@")[0]}   ${wo.toUpperCase()}\n`
}
erik.sendMessage(from, teks, text,{contextInfo: {mentionedJid: groupMembers.map(me => me.jid)}})
break
case 'tagall2':
if (!mek.key.fromMe && !isOwner && !isGroupAdmins&& !isOwner) return reply(mess.only.admin)
teks = ' '
yoi = [q]
for(let i of groupMembers){
wo = yoi[Math.floor(Math.random() * yoi.length)]
teks += `@${i.jid.split("@")[0]} ${wo.toUpperCase()}\n`
}
erik.sendMessage(from, teks, text,{contextInfo: {mentionedJid: groupMembers.map(me => me.jid)}})
break
case 'wameall':
if (!mek.key.fromMe && !isOwner && !isGroupAdmins&& !isOwner) return reply(mess.only.admin)
teks = ''
yoi = [q]
for(let i of groupMembers){
wo = yoi[Math.floor(Math.random() * yoi.length)]
teks += `➵ wa.me/${i.jid.split("@")[0]} ${wo.toUpperCase()}\n`
}
erik.sendMessage(from, teks, text,{contextInfo: {mentionedJid: groupMembers.map(me => me.jid)}})
break
case 'wameall2':
no = 0
member = groupMembers
teks = '*LIST MEMBER*\n\n\n'
for (var i of groupMembers)
{
teks += ` wa.me/${i.jid.split('@')[0]}\n`
}
fakestatus(teks)
break
     case 'listadmins':
	 case 'listadmin':
	 case 'adminlist':
	 case 'adminslist':
	 case 'admin':
					if (!isGroup) return reply(mess.only.group)
					teks = `Group *${groupMetadata.subject}*\nTotal : ${groupAdmins.length}\nPesan: ${q}\nMention by: ${pushname}\n\n`
					no = 0
					for (let admon of groupAdmins) {
						no += 1
						teks += `[${no.toString()}] @${admon.split('@')[0]}\n`
					}
					mentions(teks, groupAdmins, true)
					break
     case 'linkgc':
     case 'linkgrouo':
     case 'linkgrup':
     case 'grouplink':
            if (!isGroup) return reply(mess.only.group)
            if (!isBotGroupAdmins) return reply(mess.only.Badmin)
            linkgc = await erik.groupInviteCode (from)
            yeh = `https://chat.whatsapp.com/${linkgc}\n\nlink Group *${groupName}*`
            erik.sendMessage(from, yeh, text, {quoted: mek})
            break
      case 'getpic':
                if (args.length == 0) return reply(`Tag Nomornya!!`)
				if (mek.message.extendedTextMessage != undefined){
					mentioned = mek.message.extendedTextMessage.contextInfo.mentionedJid
					try {
						pic = await erik.getProfilePicture(mentioned[0])
					} catch {
						pic = 'https://i.ibb.co/Tq7d7TZ/age-hananta-495-photo.png'
					}
					thumb = await getBuffer(pic)
					erik.sendMessage(from, thumb, MessageType.image, {quoted: mek })
				    }
				break
		case 'getbio':
				if (args.length == 0) return reply(`Tag Nomornya!!`)
                var yy = mek.message.extendedTextMessage.contextInfo.mentionedJid[0]
                var p = await erik.getStatus(`${yy}`, MessageType.text)
                reply(p.status)
                if (p.status == 401) {
                reply("Status Profile Not Found")
                }
                break
		case 'close':
               if (!isGroup) return reply(mess.only.group)
               if (!mek.key.fromMe && !isOwner && !isGroupAdmins&& !isOwner) return reply(mess.only.admin)
               if (!isBotGroupAdmins) return reply(mess.only.Badmin)
               if (args[0] === 'false') {
                  reply('```Sukses Membuka Group```')
                  erik.groupSettingChange(from, GroupSettingChange.messageSend, false)
               } else if (args[0] === 'true') {
                  reply('```Sukses Menutup Group```')
                  erik.groupSettingChange(from, GroupSettingChange.messageSend, true)
               }
               break
           case 'open':
               if (!isGroup) return reply(mess.only.group)
              if (!mek.key.fromMe && !isOwner && !isGroupAdmins&& !isOwner) return reply(mess.only.admin)
               if (!isBotGroupAdmins) return reply(mess.only.Badmin)
               if (args[0] === 'true') {
                  reply('```Sukses Membuka Group```')
                  erik.groupSettingChange(from, GroupSettingChange.messageSend, false)
               } else if (args[0] === 'false') {
                  reply('```Sukses Menutup Group```')
                  erik.groupSettingChange(from, GroupSettingChange.messageSend, true)
               }
               break
           case 'group':
               if (!isGroup) return reply(mess.only.group)
               if (!mek.key.fromMe && !isOwner && !isGroupAdmins&& !isOwner) return reply(mess.only.admin)
               if (!isBotGroupAdmins) return reply(mess.only.Badmin)
               if (args[0] === 'open') {
                  reply('```Sukses Membuka Group```')
                  erik.groupSettingChange(from, GroupSettingChange.messageSend, false)
               } else if (args[0] === 'close') {
                  reply('```Sukses Menutup Group```')
                  erik.groupSettingChange(from, GroupSettingChange.messageSend, true)
               }
               break
           case 'promote':
            case 'pm':
               if (!isGroup) return reply(mess.only.group);
               if (!mek.key.fromMe && !isOwner && !isGroupAdmins&& !isOwner) return reply(mess.only.admin)
               if (!isBotGroupAdmins) return reply(mess.only.Badmin);
               if (mek.message.extendedTextMessage === undefined || mek.message.extendedTextMessage === null) return reply('Tag target yang ingin di jadi admin!');
               mentioned = mek.message.extendedTextMessage.contextInfo.mentionedJid;
               if (mentioned.length > 1) {
                  teks = 'Perintah di terima, anda menjdi admin :\n';
                  for (let _ of mentioned) {
                     teks += `@${_.split('@')[0]}\n`;
                  }
                  mentions(teks, mentioned, true);
                  erik.groupMakeAdmin(from, mentioned);
               } else {
                  mentions(`Perintah di terima, @${mentioned[0].split('@')[0]} Kamu Menjadi Admin Di Group *${groupMetadata.subject}*`, mentioned, true);
                  erik.groupMakeAdmin(from, mentioned);
               }
               break;
            case 'delete':
            case 'del':
            case 'd':
               if (!isGroup) return reply(mess.only.group)
               if (!mek.key.fromMe && !isOwner && !isGroupAdmins&& !isOwner) return reply(mess.only.admin)
               erik.deleteMessage(from, { id: mek.message.extendedTextMessage.contextInfo.stanzaId, remoteJid: from, fromMe: true })
               break;
            case 'demote':
               if (!isGroup) return reply(mess.only.group)
               if (!mek.key.fromMe && !isOwner && !isGroupAdmins&& !isOwner) return reply(mess.only.admin)
               if (!isBotGroupAdmins) return reply(mess.only.Badmin)
               if (mek.message.extendedTextMessage === undefined || mek.message.extendedTextMessage === null) return reply('Tag target yang ingin di tidak jadi admin!')
               mentioned = mek.message.extendedTextMessage.contextInfo.mentionedJid;
               if (mentioned.length > 1) {
                  teks = 'Perintah di terima, anda tidak menjadi admin :\n'
                  for (let _ of mentioned) {
                     teks += `@${_.split('@')[0]}\n`
                  }
                  mentions(teks, mentioned, true);
                  erik.groupDemoteAdmin(from, mentioned)
               } else {
                  mentions(`Perintah di terima, Menurunkan : @${mentioned[0].split('@')[0]} Menjadi Member`, mentioned, true)
                  erik.groupDemoteAdmin(from, mentioned)
               }
               break
           case 'closetime':
               if (!isGroup) return reply(mess.only.group);
               if (!mek.key.fromMe && !isOwner && !isGroupAdmins&& !isOwner) return reply(mess.only.admin)
               if (!isBotGroupAdmins) return reply(mess.only.Badmin);
               erik.updatePresence(from, Presence.composing);
               if (args[1] == 'detik') {
                  var timer = args[0] + '000';
               } else if (args[1] == 'menit') {
                  var timer = args[0] + '0000';
               } else if (args[1] == 'jam') {
                  var timer = args[0] + '00000';
               } else {
                  return reply('*pilih:*\ndetik\nmenit\njam\n\n*contoh*\n10 detik');
               }
               setTimeout(() => {
                  var nomor = mek.participant;
                  const close = {
                     text: `*Grup telah ditutup, saat ini hanya admin yang dapat mengirim pesan*`,
                     contextInfo: { mentionedJid: [nomor] },
                  };
                  erik.groupSettingChange(from, GroupSettingChange.messageSend, true);
                  reply(close);
               }, timer);
               break;
          case 'opentime':
               if (!isGroup) return reply(mess.only.group);
               if (!mek.key.fromMe && !isOwner && !isGroupAdmins&& !isOwner) return reply(mess.only.admin)
               if (!isBotGroupAdmins) return reply(mess.only.Badmin);
               erik.updatePresence(from, Presence.composing);
               if (args[1] == 'detik') {
                  var timer = args[0] + '000';
               } else if (args[1] == 'menit') {
                  var timer = args[0] + '0000';
               } else if (args[1] == 'jam') {
                  var timer = args[0] + '00000';
               } else {
                  return reply('*pilih:*\ndetik\nmenit\njam\n\n*contoh*\n10 detik');
               }
               setTimeout(() => {
                  var nomor = mek.participant;
                  const open = {
                     text: `Grup telah dibuka, saat ini semua peserta dapat mengirim pesan*`,
                     contextInfo: { mentionedJid: [nomor] },
                  };
                  erik.groupSettingChange(from, GroupSettingChange.messageSend, false);
                  reply(open);
               }, timer);
               break;
           case 'setname':
               if (!isGroup) return reply(mess.only.group);
               if (!mek.key.fromMe && !isOwner && !isGroupAdmins&& !isOwner) return reply(mess.only.admin)
               if (!isBotGroupAdmins) return reply(mess.only.Badmin);
               erik.groupUpdateSubject(from, `${body.slice(9)}`);
               erik.sendMessage(from, `\`\`\`✔Sukses Mengganti Nama Group Menjadi\`\`\` *${body.slice(9)}*`, text, { quoted: mek });
               break;
            case 'setdesc':
               if (!isGroup) return reply(mess.only.group);
               if (!mek.key.fromMe && !isOwner && !isGroupAdmins&& !isOwner) return reply(mess.only.admin)
               if (!isBotGroupAdmins) return reply(mess.only.Badmin);
               erik.groupUpdateDescription(from, `${body.slice(9)}`);
               erik.sendMessage(from, `\`\`\`✔Sukses Mengganti Deskripsi Group\`\`\` *${groupMetadata.subject}* Menjadi: *${body.slice(9)}*`, text, { quoted: mek });
               break;
           case 'add':
               if (!isGroup) return reply(mess.only.group);
               if (!mek.key.fromMe && !isOwner) return reply(mess.only.ownerB)
               if (!isBotGroupAdmins) return reply(mess.only.Badmin);
               if (args.length < 1) return reply('Yang mau di add siapa??');
               if (args[0].startsWith('08')) return reply('Gunakan kode negara Gan');
               try {
                  num = `${args[0].replace(/ /g, '')}@s.whatsapp.net`;
                  erik.groupAdd(from, [num]);
               } catch (e) {
                  console.log('Error :', e);
                  reply('Gagal menambahkan target, mungkin karena di private');
               }
               break;
            case 'kick':
               if (!isGroup) return reply(mess.only.group);
               if (!mek.key.fromMe && !isOwner) return reply(mess.only.ownerB)
               if (!isBotGroupAdmins) return reply(mess.only.Badmin);
               if (mek.message.extendedTextMessage === undefined || mek.message.extendedTextMessage === null) return reply('Tag target yang ingin di tendang!');
               mentioned = mek.message.extendedTextMessage.contextInfo.mentionedJid;
               if (mentioned.length > 1) {
                  teks = 'Perintah di terima, mengeluarkan :\n';
                  for (let _ of mentioned) {
                     teks += `@${_.split('@')[0]}\n`;
                  }
                  mentions(teks, mentioned, true);
                  erik.groupRemove(from, mentioned);
               } else {
                  mentions(`Perintah di terima, mengeluarkan : @${mentioned[0].split('@')[0]}`, mentioned, true);
                  erik.groupRemove(from, mentioned);
               }
               break
            case 'kicktime':
               if (!isGroup) return reply(mess.only.group);
               if (!mek.key.fromMe && !isOwner) return reply(mess.only.ownerB)
               if (!isBotGroupAdmins) return reply(mess.only.Badmin);
               if (mek.message.extendedTextMessage === undefined || mek.message.extendedTextMessage === null) return reply('Tag target yang ingin di tendang!');
               mentioned = mek.message.extendedTextMessage.contextInfo.mentionedJid;
               setTimeout(() => {
                  erik.sendMessage(from, 'Yok Sama Al-fatihah', text);
               }, 8000);
               setTimeout(() => {
                  reply('sukses min:D');
               }, 7000);
               setTimeout(() => {
                  erik.groupRemove(from, mentioned);
               }, 6000);
               setTimeout(() => {
                  erik.sendMessage(from, `Bismilah Kick @${mentioned[0].split('@')[0]}`, text); // ur cods
               }, 5000);
               setTimeout(() => {
                  erik.sendMessage(from, '.', text);
               }, 2500);
               setTimeout(() => {
                  reply('Perintah Diterima');
               }, 0);
               break
        case 'infogc':
            case 'groupinfo':
            case 'infogrup':
            case 'grupinfo':
            case 'info':
            case 'infogroup':
               erik.updatePresence(from, Presence.composing);
               if (!isGroup) return reply(mess.only.group);
               try {
                  ppUrl = await erik.getProfilePicture(from);
               } catch {
                  ppUrl = 'https://i0.wp.com/www.gambarunik.id/wp-content/uploads/2019/06/Top-Gambar-Foto-Profil-Kosong-Lucu-Tergokil-.jpg';
               }
               buffer = await getBuffer(ppUrl);
               erik.sendMessage(from, buffer, image, { quoted: mek, caption: `*NAME* : ${groupName}\n*MEMBER* : ${groupMembers.length}\n*ADMIN* : ${groupAdmins.length}\n*DESK* : ${groupDesc}` });
               break;
            case 'demoteall':
            case 'da':
                if (!mek.key.fromMe && !isOwner) return reply(mess.only.ownerB)
                if (!isGroup) return reply(mess.only.group);
                members_id = []
		for (let mem of groupMembers) {
	   	members_id.push(mem.jid)
	  	}
                erik.groupDemoteAdmin(from, members_id)
                break
          case 'tagme':
                mentions(`@${sender.split("@")[0]}`, [sender], true)
                break
//ANIMANGA

     case 'character':
                case 'char':
                    if (args.length == 0) return reply(`Masukan Nama Characternya!\nContoh: ${prefix + command} Oshino Shinobu`)
                    query = args.join(" ")
                    get_result = await fetchJson(`https://api.lolhuman.xyz/api/character?apikey=${LolKey}&query=${query}`)
                    get_result = get_result.result
                    ini_txt = `➵ Id : ${get_result.id}\n`
                    ini_txt += `➵ Name : ${get_result.name.full}\n`
                    ini_txt += `➵ Native : ${get_result.name.native}\n`
                    ini_txt += `➵ Favorites : ${get_result.favourites}\n`
                    ini_txt += `➵ Media : \n`
                    ini_media = get_result.media.nodes
                    for (var x of ini_media) {
                        ini_txt += `- ${x.title.romaji} (${x.title.native})\n`
                    }
                    ini_txt += `\nDescription : \n${get_result.description.replace(/__/g, "_")}`
                    thumbnail = await getBuffer(get_result.image.large)
                    await erik.sendMessage(from, thumbnail, image, { quoted: mek, caption: ini_txt })
                    break
              case 'charid':
                    if (args.length == 0) return reply(`Masukan Nama Characternya!\nContoh: ${prefix + command} Oshino Shinobu`)
                    query = args.join(" ")
                    get_result = await fetchJson(`https://myanimelist.net/character/<ID>=${ID}`)
                    get_result = get_result.result
                    ini_txt = `➵ Id : ${get_result.id}\n`
                    ini_txt += `➵ Name : ${get_result.name.full}\n`
                    ini_txt += `➵ Native : ${get_result.name.native}\n`
                    ini_txt += `➵ Favorites : ${get_result.favourites}\n`
                    ini_txt += `➵ Media : \n`
                    ini_media = get_result.media.nodes
                    for (var x of ini_media) {
                        ini_txt += `- ${x.title.romaji} (${x.title.native})\n`
                    }
                    ini_txt += `\nDescription : \n${get_result.description.replace(/__/g, "_")}`
                    thumbnail = await getBuffer(get_result.image.large)
                    await erik.sendMessage(from, thumbnail, image, { quoted: mek, caption: ini_txt })
                    break
                 case 'anime':
                    try{
                    if (args.length == 0) return reply(`Masukan Nama Animenya!\nContoh: ${prefix + command} Gotoubun No Hanayome`)
                    query = args.join(" ")
                    get_result = await fetchJson(`https://api.lolhuman.xyz/api/anime?apikey=${LolKey}&query=${query}`)
                    get_result = get_result.result
                    ini_txt = `➵ Id : ${get_result.id}\n`
                    ini_txt += `➵ Id MAL : ${get_result.idMal}\n`
                    ini_txt += `➵ Title : ${get_result.title.romaji}\n`
                    ini_txt += `➵ English : ${get_result.title.english}\n`
                    ini_txt += `➵ Native : ${get_result.title.native}\n`
                    ini_txt += `➵ Format : ${get_result.format}\n`
                    ini_txt += `➵ Episodes : ${get_result.episodes}\n`
                    ini_txt += `➵ Duration : ${get_result.duration} mins.\n`
                    ini_txt += `➵ Status : ${get_result.status}\n`
                    ini_txt += `➵ Season : ${get_result.season}\n`
                    ini_txt += `➵ Season Year : ${get_result.seasonYear}\n`
                    ini_txt += `➵ Source : ${get_result.source}\n`
                    ini_txt += `➵ Start Date : ${get_result.startDate.day} - ${get_result.startDate.month} - ${get_result.startDate.year}\n`
                    ini_txt += `➵ End Date : ${get_result.endDate.day} - ${get_result.endDate.month} - ${get_result.endDate.year}\n`
                    ini_txt += `➵ Genre : ${get_result.genres.join(", ")}\n`
                    ini_txt += `➵ Synonyms : ${get_result.synonyms.join(", ")}\n`
                    ini_txt += `➵ Score : ${get_result.averageScore}%\n`
                    ini_txt += `➵ Characters : \n`
                    ini_character = get_result.characters.nodes
                    for (var x of ini_character) {
                        ini_txt += `- ${x.name.full} (${x.name.native})\n`
                    }
                    ini_txt += `\nDescription : ${get_result.description}`
                    thumbnail = await getBuffer(get_result.coverImage.large)
                    await erik.sendMessage(from, thumbnail, image, { quoted: mek, caption: ini_txt })
                    } catch(err) {
                    e = String(err)
                    reply(e)
                    }
                    break
           case 'manga':
                    try{
                    if (args.length == 0) return reply(`Masukan Nama MangaNya!\nContoh: ${prefix + command} Dororo`)
                    query = args.join(" ")
                    get_result = await fetchJson(`https://api.lolhuman.xyz/api/manga?apikey=${LolKey}&query=${query}`)
                    get_result = get_result.result
                    ini_txt = `➵ Id : ${get_result.id}\n`
                    ini_txt += `➵ Id MAL : ${get_result.idMal}\n`
                    ini_txt += `➵ Title : ${get_result.title.romaji}\n`
                    ini_txt += `➵ English : ${get_result.title.english}\n`
                    ini_txt += `➵ Native : ${get_result.title.native}\n`
                    ini_txt += `➵ Format : ${get_result.format}\n`
                    ini_txt += `➵ Chapters : ${get_result.chapters}\n`
                    ini_txt += `➵ Volume : ${get_result.volumes}\n`
                    ini_txt += `➵ Status : ${get_result.status}\n`
                    ini_txt += `➵ Source : ${get_result.source}\n`
                    ini_txt += `➵ Start Date : ${get_result.startDate.day} - ${get_result.startDate.month} - ${get_result.startDate.year}\n`
                    ini_txt += `➵ End Date : ${get_result.endDate.day} - ${get_result.endDate.month} - ${get_result.endDate.year}\n`
                    ini_txt += `➵ Genre : ${get_result.genres.join(", ")}\n`
                    ini_txt += `➵ Synonyms : ${get_result.synonyms.join(", ")}\n`
                    ini_txt += `➵ Score : ${get_result.averageScore}%\n`
                    ini_txt += `➵ Characters : \n`
                    ini_character = get_result.characters.nodes
                    for (var x of ini_character) {
                        ini_txt += `- ${x.name.full} (${x.name.native})\n`
                    }
                    ini_txt += `\nDescription : ${get_result.description}`
                    thumbnail = await getBuffer(get_result.coverImage.large)
                    await erik.sendMessage(from, thumbnail, image, { quoted: mek, caption: ini_txt })
                    } catch(err) {
                    e = String(err)
                    reply(e)
                    }
                    break
                case 'otakudesu':
                case 'od':
                    if (args.length == 0) return reply(`Masukan Nama Animenya!\nContoh: ${prefix + command} Sword Art Online`)
                    query = args.join(" ")
                    get_result = await fetchJson(`https://api.lolhuman.xyz/api/otakudesusearch?apikey=${LolKey}&query=${query}`)
                    get_result = get_result.result
                    ini_txt = `➵ Title : ${get_result.title}\n`
                    ini_txt += `➵ Japanese : ${get_result.japanese}\n`
                    ini_txt += `➵ Judul : ${get_result.judul}\n`
                    ini_txt += `➵ Type : ${get_result.type}\n`
                    ini_txt += `➵ Episode : ${get_result.episodes}\n`
                    ini_txt += `➵ Aired : ${get_result.aired}\n`
                    ini_txt += `➵ Producers : ${get_result.producers}\n`
                    ini_txt += `➵ Genre : ${get_result.genres}\n`
                    ini_txt += `➵ Duration : ${get_result.duration}\n`
                    ini_txt += `➵ Studios : ${get_result.status}\n`
                    ini_txt += `➵ Rating : ${get_result.rating}\n`
                    ini_txt += `➵ Credit : ${get_result.credit}\n`
                    get_link = get_result.link_dl
                    for (var x in get_link) {
                        ini_txt += `\n\n*${get_link[x].title}*\n`
                        for (var y in get_link[x].link_dl) {
                            ini_info = get_link[x].link_dl[y]
                            ini_txt += `\n\`\`\`Reso : \`\`\`${ini_info.reso}\n`
                            ini_txt += `\`\`\`Size : \`\`\`${ini_info.size}\n`
                            ini_txt += `\`\`\`Link : \`\`\`\n`
                            down_link = ini_info.link_dl
                            for (var z in down_link) {
                                ini_txt += `${z} - ${down_link[z]}\n`
                            }
                        }
                    }
                    textImg(ini_txt)
                    break
     case 'wait':
                    if ((isMedia && !mek.message.videoMessage || isQuotedImage) && args.length == 0) {
                        const encmedia = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : mek
                        const filePath = await erik.downloadAndSaveMediaMessage(encmedia, filename = getRandom());
                        const form = new FormData();
                        const stats = fs.statSync(filePath);
                        const fileSizeInBytes = stats.size;
                        const fileStream = fs.createReadStream(filePath);
                        form.append('img', fileStream, { knownLength: fileSizeInBytes });
                        const options = {
                            method: 'POST',
                            credentials: 'include',
                            body: form
                        }
                        get_result = await fetchJson(`https://api.lolhuman.xyz/api/wait?apikey=${LolKey}`, {...options })
                        fs.unlinkSync(filePath)
                        get_result = get_result.result
                        ini_video = await getBuffer(get_result.video)
                        ini_txt = `Anilist id : ${get_result.anilist_id}\n`
                        ini_txt += `MAL id : ${get_result.mal_id}\n`
                        ini_txt += `Title Romaji : ${get_result.title_romaji}\n`
                        ini_txt += `Title Native : ${get_result.title_native}\n`
                        ini_txt += `Title English : ${get_result.title_english}\n`
                        ini_txt += `at : ${get_result.at}\n`
                        ini_txt += `Episode : ${get_result.episode}\n`
                        ini_txt += `Similarity : ${get_result.similarity}`
                        await erik.sendMessage(from, ini_video, video, { quoted: mek, caption: ini_txt })
                    } else {
                        reply(`Kirim gambar dengan caption ${prefix + command} atau tag gambar yang sudah dikirim`)
                    }
                    break
     case 'quotes':
     case 'quote':
                    quotes = await fetchJson(`https://api.lolhuman.xyz/api/random/quotesnime?apikey=${LolKey}`)
                    quotes = quotes.result
                    quote = quotes.quote
                    char = quotes.character
                    anime = quotes.anime
                    episode = quotes.episode
                    textImg(`_${quote}_\n\n➵ *Character: ${char}*\n➵ *Anime: ${anime}*\n➵ *${episode}*`)
                    break
              case 'otakulast':
						anu = await fetchJson(`https://api.vhtear.com/otakulatest&apikey=${VhKey}`, {method: 'get'})
						if (anu.error) return reply(anu.error)
						teks = '=================\n\n'
						for (let i of anu.result.data) {
							teks += `*Title* : ${i.title}\n*Link* : ${i.link}\n*Published* : ${i.datetime}\n\n=================\n\n`
						}
						fakestatus(teks.trim())
						break
                    
//ISLAM

            case 'listsurah':
                    get_result = await fetchJson(`https://api.lolhuman.xyz/api/quran?apikey=${LolKey}`)
                    get_result = get_result.result
                    ini_txt = 'List Surah:\n'
                    for (var x in get_result) {
                        ini_txt += `${x}. ${get_result[x]}\n`
                    }
                    reply(ini_txt)
                    break
                case 'alquran':
                    if (args.length < 1) return reply(`Contoh: ${prefix + command} 18 or ${prefix + command} 18/10 or ${prefix + command} 18/1-10`)
                    urls = `https://api.lolhuman.xyz/api/quran/${args[0]}?apikey=${LolKey}`
                    quran = await fetchJson(urls)
                    result = quran.result
                    ayat = result.ayat
                    ini_txt = `QS. ${result.surah} : 1-${ayat.length}\n\n`
                    for (var x of ayat) {
                        arab = x.arab
                        nomor = x.ayat
                        latin = x.latin
                        indo = x.indonesia
                        ini_txt += `${arab}\n${nomor}. ${latin}\n${indo}\n\n`
                    }
                    ini_txt = ini_txt.replace(/<u>/g, "").replace(/<\/u>/g, "")
                    ini_txt = ini_txt.replace(/<strong>/g, "").replace(/<\/strong>/g, "")
                    ini_txt = ini_txt.replace(/<u>/g, "").replace(/<\/u>/g, "")
                    reply(ini_txt)
                    break
                case 'alquranaudio':
                    if (args.length == 0) return reply(`Contoh: ${prefix + command} 18 \nAtau\n ${prefix + command} 18/10`)
                    surah = args[0]
                    ini_buffer = await getBuffer(`https://api.lolhuman.xyz/api/quran/audio/${surah}?apikey=${LolKey}`)
                    await erik.sendMessage(from, ini_buffer, audio, { quoted: mek, mimetype: Mimetype.mp4Audio })
                    break
                case 'asmaulhusna':
                    get_result = await fetchJson(`https://api.lolhuman.xyz/api/asmaulhusna?apikey=${LolKey}`)
                    get_result = get_result.result
                    ini_txt = `➵ No : ${get_result.index}\n`
                    ini_txt += `➵ Latin: ${get_result.latin}\n`
                    ini_txt += `➵ Arab : ${get_result.ar}\n`
                    ini_txt += `➵ Indonesia : ${get_result.id}\n`
                    ini_txt += `➵ English : ${get_result.en}`
                    reply(ini_txt)
                    break
                case 'kisahnabi':
                    if (args.length == 0) return reply(`Contoh: ${prefix + command} Adam`)
                    query = args.join(" ")
                    get_result = await fetchJson(`https://api.lolhuman.xyz/api/kisahnabi/${query}?apikey=${LolKey}`)
                    get_result = get_result.result
                    ini_txt = `➵ Name : ${get_result.name}\n`
                    ini_txt += `➵ Lahir : ${get_result.thn_kelahiran}\n`
                    ini_txt += `➵ Umur : ${get_result.age}\n`
                    ini_txt += `➵ Tempat : ${get_result.place}\n`
                    ini_txt += `➵ Story : \n${get_result.story}`
                    reply(ini_txt)
                    break
                   case 'jadwalsholat':
                    if (args.length == 0) return reply(`Nama Tempatnya?\nContoh: ${prefix + command} Yogyakarta`)
                    daerah = args.join(" ")
                    get_result = await fetchJson(`https://api.lolhuman.xyz/api/sholat/${daerah}?apikey=${LolKey}`)
                    get_result = get_result.result
                    ini_txt = `➵ Wilayah : ${get_result.wilayah}\n`
                    ini_txt += `➵ Tanggal : ${get_result.tanggal}\n`
                    ini_txt += `➵ Sahur : ${get_result.sahur}\n`
                    ini_txt += `➵ Imsak : ${get_result.imsak}\n`
                    ini_txt += `➵ Subuh : ${get_result.subuh}\n`
                    ini_txt += `➵ Terbit : ${get_result.terbit}\n`
                    ini_txt += `➵ Dhuha : ${get_result.dhuha}\n`
                    ini_txt += `➵ Dzuhur : ${get_result.dzuhur}\n`
                    ini_txt += `➵ Ashar : ${get_result.ashar}\n`
                    ini_txt += `➵ Maghrib : ${get_result.imsak}\n`
                    ini_txt += `I➵ sya : ${get_result.isya}`
                    reply(ini_txt)
                    break
 
//IMAGE
     case 'image':
            if (args.length < 1) return reply('Masukan Query!')
            const gimg = args.join('');
            reply(mess.dl)
            gis(gimg, async (error, result) => {
            n = result
            images = n[Math.floor(Math.random() * n.length)].url
            erik.sendMessage(from,{url:images},image,{quoted:mek})
            });
            break
     case 'randomimage':
				case 'randomimg':
				case 'rimg':
				case'rimage':
				     reply(mess.wait)
					anu = await fetchJson(`https://fdciabdul.tech/api/pinterest?keyword=gambarnya`, {method: 'get'})
					lo = JSON.parse(JSON.stringify(anu));
					li =  lo[Math.floor(Math.random() * lo.length)];
					nye = await getBuffer(li)
					erik.sendMessage(from, nye, image, { caption: 'NIH', quoted: mek })
					break
	 case 'ssweb':
            reply(mess.dl)
            lah = args.join(" ")
            jir = await getBuffer(`https://shot.screenshotapi.net/screenshot?&url=${lah}&output=image&file_type=png&wait_for_event=load`)
            erik.sendMessage(from, jir, image,{quoted: mek,caption:'©Itz.Me/Erick'})
            break
     case 'pinterest':
                    if (args.length == 0) return reply(`Masukan Query!\nContoh: ${prefix + command} sunrise anime`)
                    query = args.join(" ")
                    reply(mess.dl)
                    ini_url = await fetchJson(`https://api.lolhuman.xyz/api/pinterest?apikey=${LolKey}&query=${query}`)
                    ini_url = ini_url.result
                    ini_buffer = await getBuffer(ini_url)
                    await erik.sendMessage(from, ini_buffer, image, { quoted: mek })
                    break
        case 'pinterest2':
                    if (args.length == 0) return reply(`Masukan Query!\nContoh: ${prefix + command} sunset anime`)
                    query = args.join(" ")
                    reply(mess.dl)
                    get_result = await fetchJson(`https://api.lolhuman.xyz/api/pinterest2?apikey=${LolKey}&query=${query}`)
                    get_result = get_result.result
                    for (var x = 0; x <= 5; x++) {
                        var ini_buffer = await getBuffer(get_result[x])
                        await erik.sendMessage(from, ini_buffer, image)
                    }
                    break
         case 'wallpaper':
                    if (args.length == 0) return reply(`Example: ${prefix + command} loli kawaii`)
                    query = args.join(" ")
                    reply (mess.dl)
                    get_result = await fetchJson(`https://api.lolhuman.xyz/api/wallpaper?apikey=${LolKey}&query=${query}`)
                    ini_buffer = await getBuffer(get_result.result)
                    await erik.sendMessage(from, ini_buffer, image, { quoted: mek })
                    break
         case 'wallpaper2':
                    if (args.length == 0) return reply(`Example: ${prefix + command} loli kawaii`)
                    query = args.join(" ")
                    reply (mess.dl)
                    get_result = await fetchJson(`https://api.lolhuman.xyz/api/wallpaper2?apikey=${LolKey}&query=${query}`)
                    ini_buffer = await getBuffer(get_result.result)
                    await erik.sendMessage(from, ini_buffer, image, { quoted: mek })
                    break
     case 'nulis':
            reply (mess.wait)
			anuf = args.join(' ').split('|')
			let nulisdls = await getBuffer(`https://xteam.xyz/magernulis?nama=${anuf[0]}&kelas=${anuf[1]}&text=${anuf[2]}&APIKEY=${XKey}`,{ method: 'get'})
	        erik.sendMessage(from,nulisdls,image,{mimetype:'image/jpeg',quoted:mek,caption:'©Itz.Me/Erick'})
			break
	 case 'puisi':
	           reply (mess.wait)
               pus = await getBuffer(`https://api.vhtear.com/puisi_image&apikey=${VhKey}`, { method: 'get' })
               erik.sendMessage(from, pus, image, { quoted: mek })
               break
            
//SEARCHING
         case 'youtube':
         case 'yt':
if(!q) return reply('Mau cari apa diyoutube?')
try{
	ysearch = await yts(q)
}catch(e){
	return reply(mess.error.api)
}
teks = `*Y O U T U B E  S E A R C H*\nTotal : ${ysearch.all.length}\n\n`
for(let i of ysearch.all){
	teks += ` Title :` + i.title + '\n'
	teks += ` Url :` + i.url + '\n'
	teks += ` Durasi :` + i.timestamp + '\n'
	teks += ` Upload :` + i.ago + '\n\n-----------------------------\n\n'
}
sendMediaURL(from, ysearch.all[0].thumbnail, teks)
break
case 'getmusic':
if(!q) return reply('Masukkan nomo urutnya!')
if(!m.quoted) return reply('Reply pesan hasil pencarian youtube!')
quee = '*Y O U T U B E  S E A R C H*'
qteks = m.quoted.text
if(qteks.includes(quee)){
jmlh = m.quoted.text.split('Total : ')[1].split('\n')[0]
if(isNaN(args[0])) return reply('Input harus berupa nomor!')
if(args[0].text > jmlh) return reply(`Hanya Tersedia ${jmlh} Pilihan\nSilahkan coba pilih lagi dibawah angka ${jmlh}`)
    try{
    pilih = JSON.stringify(await eval(`${args[0]}-1`), null, 2)    
    downm = await yta(m.quoted.text.split('-----------------------------')[pilih].split('Url :')[1].split('\n')[0])
    const { dl_link, thumb, title, filesizeF, filesize } = downm
    if(Number(filesize) >= 50000){
        short = await axios.get(`https://tinyurl.com/api-create.php?url=${dl_link}`)
        return sendMediaURL(from, thumb, `*P L A Y  M U S I C*\n\n${shp} Judul : ${title}\n${shp} Size : ${filesizeF}\n${shp} Link : ${short.data}\n\n${mess.oversize}`)
    }
    teks = `*P L A Y  M U S I C*\n\n${shp} Judul : ${title}\n${shp} Size : ${filesizeF}\n\nTunggu sebentar\nMusic segera dikirim`
    erik.sendFileFromUrl(from, thumb, tod, teks)
    erik.sendFileFromUrl(from, dl_link, tod)
    }catch(e){
    reply(mess.error.api)
}
}
else{
    return reply('Reply pesan hasil pencarian youtube!')
}
break
case 'getvideo':
if(!q) return reply('Masukkan nomo urutnya!')
if(!mek.quoted) return reply('Reply pesan hasil pencarian youtube!')
quee = '*Y O U T U B E  S E A R C H*'
qteks = mek.quoted.text
if(qteks.includes(quee)){
jmlh = mek.quoted.text.split('Total : ')[1].split('\n')[0]
if(isNaN(args[0])) return reply('Input harus berupa nomor!')
if(args[0].text > jmlh) return reply(`Hanya Tersedia ${jmlh} Pilihan\nSilahkan coba pilih lagi dibawah angka ${jmlh}`)
    try{
    pilih = JSON.stringify(await eval(`${args[0]}-1`), null, 2)    
    downm = await ytv(mek.quoted.text.split('-----------------------------')[pilih].split('Url :')[1].split('\n')[0])
    const { dl_link, thumb, title, filesizeF, filesize } = downm
    if(Number(filesize) >= 50000){
        short = await axios.get(`https://tinyurl.com/api-create.php?url=${dl_link}`)
        return sendMediaURL(from, thumb, `*P L A Y  V I D E O*\n\n${shp} Judul : ${title}\n${shp} Size : ${filesizeF}\n${shp} Link : ${short.data}\n\n${mess.oversize}`)
    }
    teks = `*P L A Y  V I D E O*\n\n${shp} Judul : ${title}\n${shp} Size : ${filesizeF}\n\nTunggu sebentar\nMusic segera dikirim`
    erik.sendFileFromUrl(from, thumb, tod, teks)
    erik.sendFileFromUrl(from, dl_link, tod)
    }catch(e){
    reply(mess.error.api)
}
}
else{
    return reply('Reply pesan hasil pencarian youtube!')
}
break
         case 'google':
                    if (args.length == 0) return reply(`Apanya Yang mau di cari bujank??\nContoh: ${prefix + command} Cara biar ga jadi beban keluarga`)
                    query = args.join(" ")
                    get_result = await fetchJson(`https://api.lolhuman.xyz/api/gsearch?apikey=${LolKey}&query=${query}`)
                    get_result = get_result.result
                    ini_txt = 'Google Search : \n'
                    for (var x of get_result) {
                        ini_txt += `Title : ${x.title}\n`
                        ini_txt += `Link : ${x.link}\n`
                        ini_txt += `Desc : ${x.desc}\n\n`
                    }
                    reply(ini_txt)
                    break
         case 'brainly':
			if (args.length < 1) return reply('Pertanyaan apa')
          	brien = args.join(' ')
			brainly(`${brien}`).then(res => {
			teks = '❉───────────────────────❉\n'
			for (let Y of res.data) {
			teks += `\n*「 _BRAINLY_ 」*\n\n*➸ Pertanyaan:* ${Y.pertanyaan}\n\n*➸ Jawaban:* ${Y.jawaban[0].text}\n❉──────────────────❉\n`
			}
			erik.sendMessage(from, teks, text,{quoted:mek,detectLinks: false})                        
            })              
			break
    case 'igstalk':
            if (!q) return fakegroup('Usernamenya?')
            ig.fetchUser(`${args.join(' ')}`).then(Y => {
            console.log(`${args.join(' ')}`)
            ten = `${Y.profile_pic_url_hd}`
            teks = `*ID* : ${Y.profile_id}\n*Username* : ${args.join('')}\n*Full Name* : ${Y.full_name}\n*Bio* : ${Y.biography}\n*Followers* : ${Y.followers}\n*Following* : ${Y.following}\n*Private* : ${Y.is_private}\n*Verified* : ${Y.is_verified}\n\n*Link* : https://instagram.com/${args.join('')}`
            sendMediaURL(from,ten,teks) 
            })      
            break
         case 'igstalk2':
                    if (args.length == 0) return reply(`Contoh: ${prefix + command} shuichi_126`)
                    username = args[0]
                    ini_result = await fetchJson(`https://api.lolhuman.xyz/api/stalkig/${username}?apikey=${LolKey}`)
                    ini_result = ini_result.result
                    ini_buffer = await getBuffer(ini_result.photo_profile)
                    ini_txt = `➵ Username : ${ini_result.username}\n`
                    ini_txt += `➵ Full Name : ${ini_result.fullname}\n`
                    ini_txt += `➵ Posts : ${ini_result.posts}\n`
                    ini_txt += `➵ Followers : ${ini_result.followers}\n`
                    ini_txt += `➵ Following : ${ini_result.following}\n`
                    ini_txt += `➵ Bio : ${ini_result.bio}`
                    erik.sendMessage(from, ini_buffer, image, { caption: ini_txt })
                    break
              case 'github':
                    if (args.length == 0) return reply(`Contoh: ${prefix + command} HexagonZ`)
                    username = args[0]
                    ini_result = await fetchJson(`https://api.lolhuman.xyz/api/github/${username}?apikey=${LolKey}`)
                    ini_result = ini_result.result
                    ini_buffer = await getBuffer(ini_result.avatar)
                    ini_txt = `➵ Name : ${ini_result.name}\n`
                    ini_txt += `➵ Link : ${ini_result.url}\n`
                    ini_txt += `➵ Public Repo : ${ini_result.public_repos}\n`
                    ini_txt += `➵ Public Gists : ${ini_result.public_gists}\n`
                    ini_txt += `➵ Followers : ${ini_result.followers}\n`
                    ini_txt += `➵ Following : ${ini_result.following}\n`
                    ini_txt += `➵ Bio : ${ini_result.bio}`
                    erik.sendMessage(from, ini_buffer, image, { caption: ini_txt })
                    break
		      case 'translate':
		      case 'tr':
                    if (args.length == 0) return reply(`Contoh: ${prefix + command} en rebahan`)
                    kode_negara = args[0]
                    args.shift()
                    ini_txt = args.join(" ")
                    get_result = await fetchJson(`https://api.lolhuman.xyz/api/translate/auto/${kode_negara}?apikey=${LolKey}&text=${ini_txt}`)
                    get_result = get_result.result
                    init_txt = `➵ From : ${get_result.from}\n`
                    init_txt += `➵ To : ${get_result.to}\n`
                    init_txt += `➵ Original : ${get_result.original}\n`
                    init_txt += `➵ Translated : ${get_result.translated}\n`
                    init_txt += `➵ Pronunciation : ${get_result.pronunciation}\n`
                    reply(init_txt)
                    break
                case 'lirik':
                case 'lyrics':
                case 'lyric':
                    if (args.length == 0) return reply(`Contoh: ${prefix + command} Alan Walker Alone`)
                    query = args.join(" ")
                    get_result = await fetchJson(`https://api.lolhuman.xyz/api/lirik?apikey=${LolKey}&query=${query}`)
                    reply(get_result.result)
                    break
    case 'ytsearch':
	case 'youtube':
	case 'youtubesearch':
	case 'yts':
			if (args.length < 1) return reply('Tolong masukan query!')
			var srch = args.join('');
			try {
        	var aramas = await yts(srch);
   			} catch {
        	return await erik.sendMessage(from, 'Error!', MessageType.text, dload)
    		}
    		aramat = aramas.all 
    		var tbuff = await getBuffer(aramat[0].image)
    		var ytresult = '';
    		ytresult += '「 *YOUTUBE SEARCH* 」'
    		ytresult += '\n________________________\n\n'
   			aramas.all.map((video) => {
        	ytresult += '❏ Title: ' + video.title + '\n'
            ytresult += '❏ Link: ' + video.url + '\n'
            ytresult += '❏ Durasi: ' + video.timestamp + '\n'
            ytresult += '❏ Upload: ' + video.ago + '\n________________________\n\n'
    		});
    		ytresult += '◩ *©Itz.Me/Erick*'
    		await fakethumb(tbuff,ytresult)
			break
	 case 'cuaca':
			if (args.length < 1) return reply('Masukan Nama Kota nya!\nContoh: ${prefix + command} Jakarta')
			weathers = args.join(' ')	
		    let wearesult = await fetchJson(`https://xteam.xyz/cuaca?kota=${weathers}&APIKEY=${XKey}`,{ method: 'get'})
		    me = `*「 _CUACA_ 」*\n\n*➸ Kota:* ${wearesult.message.kota}\n*➸ Hari:* ${wearesult.message.hari}\n*➸ Cuaca:* ${wearesult.message.cuaca}\n*➸ Desk:* ${wearesult.message.deskripsi}\n*➸ Suhu:* ${wearesult.message.suhu}\n*➸ Pressure:* ${wearesult.message.pressure}\n*➸ Kelembapan:* ${wearesult.message.kelembapan}\n*➸ Angin:* ${wearesult.message.angin}`
    	    erik.sendMessage(from, me, text,{quoted:mek,detectLinks: false}) 
			break
	 case 'playstore':
               ps = `${body.slice(11)}`
               anu = await fetchJson(`https://api.vhtear.com/playstore?query=${ps}&apikey=${VhKey}`, { method: 'get' })
               store = '======================\n'
               for (let ply of anu.result) {
                  store += `• *Nama Apk:* ${ply.title}\n• *ID:* ${ply.app_id}\n• *Developer:* ${ply.developer}\n• *Deskripsi:* ${ply.description}\n• *Link Apk:* ${ply.url}\n=====================\n`
               }
               reply(store.trim())
               break
          case 'wiki':
			const wimki = {
					contextInfo: {
					quotedMessage: {
					extendedTextMessage: {
					text: split,
									}
								}
							}
						}
					var teks = body.slice(6)
					axios.get(`https://alfians-api.herokuapp.com/api/wiki?q=${teks}`).then((res) => {
						erik.sendMessage(from, '[ WAIT ] Searching...⏳ silahkan tunggu', MessageType.text, wimki)
						let hasil = `Menurut Wikipedia:\n\n${res.data.result}`;
						erik.sendMessage(from, hasil ,MessageType.text, wimki);
					})
					break
			
//DOWNLOAD

     case 'playmp3':
			if (args.length === 0) return reply(`Kirim perintah *${prefix}play* _Judul lagu yang akan dicari_`)
            var srch = args.join('')
    		aramas = await yts(srch);
    		aramat = aramas.all 
   			var mulaikah = aramat[0].url							
                  try {
                    yta(mulaikah)
                    .then((res) => {
                        const { dl_link, thumb, title, filesizeF, filesize } = res
                        axios.get(`https://tinyurl.com/api-create.php?url=${dl_link}`)
                        .then(async (a) => {
                        if (Number(filesize) >= 100000) return sendMediaURL(from, thumb, `*PLAY MUSIC*\n\n*Title* : ${title}\n*Ext* : MP3\n*Filesize* : ${filesizeF}\n*Link* : ${a.data}\n\n_Untuk durasi lebih dari batas disajikan dalam mektuk link_`)
                        const captions = `*PLAY MUSIC*\n\n*Title* : ${title}\n*Ext* : MP3\n*Size* : ${filesizeF}\n*Link* : ${a.data}\n\n_Silahkan tunggu file media sedang dikirim mungkin butuh beberapa menit_`
                        sendMediaURL(from, thumb, captions)
                        await sendMediaURL(from, dl_link).catch(() => reply('error'))
                        })                
                        })
                        } catch (err) {
                        reply(mess.error.api)
                        }
                   break
        case 'ig':
                    if (args.length == 0) return reply(`Example: ${prefix + command} https://www.instagram.com/p/CJ8XKFmJ4al/?igshid=1acpcqo44kgkn`)
                    ini_url = args[0]
                    ini_url = await fetchJson(`https://api.lolhuman.xyz/api/instagram?apikey=${LolKey}&url=${ini_url}`)
                    ini_url = ini_url.result
                    ini_type = image
                    if (ini_url.includes(".mp4")) ini_type = video
                    ini_buffer = await getBuffer(ini_url)
                    await erik.sendMessage(from, ini_buffer, ini_type, { quoted: mek })
                    break
        case 'playmp4':
            if (args.length === 0) return reply(`Contoh: *${prefix}video* _Judul lagu yang akan dicari_`)
            var srch = args.join('')
            aramas = await yts(srch);
            aramat = aramas.all 
            var mulaikah = aramat[0].url                            
                  try {
                    ytv(mulaikah)
                    .then((res) => {
                        const { dl_link, thumb, title, filesizeF, filesize } = res
                        axios.get(`https://tinyurl.com/api-create.php?url=${dl_link}`)
                        .then(async (a) => {
                        if (Number(filesize) >= 100000) return sendMediaURL(from, thumb, `*PLAY VIDEO*\n\n*Title* : ${title}\n*Ext* : MP3\n*Filesize* : ${filesizeF}\n*Link* : ${a.data}\n\n_Untuk durasi lebih dari batas disajikan dalam mektuk link_`)
                        const captions = `*PLAY VIDEO*\n\n*Title* : ${title}\n*Ext* : MP4\n*Size* : ${filesizeF}\n*Link* : ${a.data}\n\n_Silahkan tunggu file media sedang dikirim mungkin butuh beberapa menit_`
                        sendMediaURL(from, thumb, captions)
                        await sendMediaURL(from, dl_link).catch(() => reply('error'))
                        })                
                        })
                        } catch (err) {
                        reply(mess.error.api)
                        }
                   break
	case 'ytmp4':
			if (args.length === 0) return reply(`Kirim perintah *${prefix}ytmp4 [linkYt]*`)
			let isLinks2 = args[0].match(/(?:https?:\/{2})?(?:w{3}\.)?youtu(?:be)?\.(?:com|be)(?:\/watch\?v=|\/)([^\s&]+)/)
			if (!isLinks2) return reply(mess.error.Iv)
				try {
				reply(mess.dl)
				ytv(args[0])
				.then((res) => {
				const { dl_link, thumb, title, filesizeF, filesize } = res
				axios.get(`https://tinyurl.com/api-create.php?url=${dl_link}`)
				.then((a) => {
				if (Number(filesize) >= 40000) return sendMediaURL(from, thumb, `*YTMP 4!*\n\n*Title* : ${title}\n*Ext* : MP3\n*Filesize* : ${filesizeF}\n*Link* : ${a.data}\n\n_Untuk durasi lebih dari batas disajikan dalam mektuk link_`)
				const captionsYtmp4 = `*Data Berhasil Didapatkan!*\n\n*Title* : ${title}\n*Ext* : MP4\n*Size* : ${filesizeF}\n\n_Silahkan tunggu file media sedang dikirim mungkin butuh beberapa menit_`
				sendMediaURL(from, thumb, captionsYtmp4)
				sendMediaURL(from, dl_link).catch(() => reply(mess.error.api))
				})		
				})
				} catch (err) {
			    reply(mess.error.api)
				}
				break
	case 'ytmp3':
			if (args.length === 0) return reply(`Kirim perintah *${prefix}ytmp3 [linkYt]*`)
			let isLinks = args[0].match(/(?:https?:\/{2})?(?:w{3}\.)?youtu(?:be)?\.(?:com|be)(?:\/watch\?v=|\/)([^\s&]+)/)
			if (!isLinks) return reply(mess.error.Iv)
				try {
				reply(mess.dl)
				yta(args[0])
				.then((res) => {
				const { dl_link, thumb, title, filesizeF, filesize } = res
				axios.get(`https://tinyurl.com/api-create.php?url=${dl_link}`)
				.then((a) => {
			    if (Number(filesize) >= 30000) return sendMediaURL(from, thumb, `*Data Berhasil Didapatkan!*\n\n*Title* : ${title}\n*Ext* : MP3\n*Filesize* : ${filesizeF}\n*Link* : ${a.data}\n\n_Untuk durasi lebih dari batas disajikan dalam mektuk link_`)
				const captions = `*YTMP3*\n\n*Title* : ${title}\n*Ext* : MP3\n*Size* : ${filesizeF}\n\n_Silahkan tunggu file media sedang dikirim mungkin butuh beberapa menit_`
				sendMediaURL(from, thumb, captions)
				sendMediaURL(from, dl_link).catch(() => reply(mess.error.api))
				})
				})
				} catch (err) {
				reply(mess.error.api)
				}
				break
	case 'tiktok':
 		if (!isUrl(args[0]) && !args[0].includes('tiktok.com')) return reply(mess.Iv)
 		if (!q) return fakegroup('Linknya?')
 		reply(mess.wait)
	    let result = await fetchJson(`http://lolhuman.herokuapp.com/api/tiktok?apikey=${LolKey}&url=${args[0]}`,{ method: 'get'})
    		me = `*「 TIKTOK DL 」*\n\n*Title* : ${result.result.title}\n*Desc* : ${result.result.description}\n*Duration* : ${result.result.duration} detik\n*Like* : ${result.result.statistic.diggCount}\n*Play* : ${result.result.statistic.playCount}\n*Komentar* : ${result.result.statistic.commentCount}\n*Share* : ${result.result.shareCount}`
		    me2 = `*「 CREATOR 」*\n\n*Username* : ${result.result.author.username}\n*Nickname*: ${result.result.author.nickname}`
        erik.sendMessage(from,{url:`${result.result.author.avatar}`},image,{mimetype:'image/jpeg',quoted:mek,caption:me2})
        erik.sendMessage(from,{url:`${result.result.link}`},video,{mimetype:'video/mp4',quoted:mek,caption:me})
     	break
      case 'tiktokaudio':
            if (!isUrl(args[0]) && !args[0].includes('tiktok.com')) return reply(mess.Iv)
            if (!q) return fakegroup('Linknya?')
            reply(mess.dl)
            let resulttoks = await getBuffer(`http://lolhuman.herokuapp.com/api/tiktokmusic?apikey=${LolKey}&url=${args[0]}`,{ method: 'get'})	
            erik.sendMessage(from,resulttoks,audio,{mimetype:'audio/mp4',filename : `tiktodaudio`,quoted:mek})
                break
    case 'fb':
                    if (args.length == 0) return reply(`Example: ${prefix + command} https://id-id.facebook.com/SamsungGulf/videos/video-bokeh/561108457758458/`)
                    ini_url = args[0]
                    ini_url = await fetchJson(`https://api.lolhuman.xyz/api/facebook?apikey=${LolKey}&url=${ini_url}`)
                    ini_url = ini_url.result[0].link
                    ini_buffer = await getBuffer(ini_url)
                    await erik.sendMessage(from, ini_buffer, video, { quoted: mek })
                    break
    case'twitter':
            if (!isUrl(args[0]) && !args[0].includes('twitter.com')) return reply(mess.Iv)
            if (!q) return fakegroup('Linknya?')
            ten = args[0]
            var res = await twitterGetUrl(`${ten}`)
            .then(g => {
            ren = `${g.download[2].url}`
            sendMediaURL(from,ren,'DONE')
            })
            break
     case 'owner':
               erik.sendMessage(from, { displayname: 'jeff', vcard: vcard1 }, MessageType.contact, { quoted: mek });
               erik.sendMessage(from, '*_Kalo mau save, pc dlu ye tod_*', text, { quoted: mek });
               break
    case 'get':
            if(!q) return reply('linknya?')
            fetch(`${args[0]}`).then(res => res.text())  
            .then(bu =>{
            fakestatus(bu)
            })   
            break
     case 'zippyshare':
                    if (!mek.key.fromMe && !isOwner) return reply(mess.only.ownerB)
                    if (args.length == 0) return reply(`Example: ${prefix + command} https://www51.zippyshare.com/v/5W0TOBz1/file.html`)
                    ini_url = args[0]
                    ini_url = await fetchJson(`https://api.lolhuman.xyz/api/zippyshare?apikey=${LolKey}&url=${ini_url}`)
                    ini_url = ini_url.result
                    ini_txt = `File Name : ${ini_url.name_file}\n`
                    ini_txt += `Size : ${ini_url.size}\n`
                    ini_txt += `Date Upload : ${ini_url.date_upload}\n`
                    ini_txt += `Download Url : ${ini_url.download_url}`
                    reply(ini_txt)
                    break
                   
//OTHER

    case 'readmore':
               if (args.length < 1) return reply('teks nya mana om?');
               var kls = body.slice(9);
               var has = kls.split('|')[0];
               var kas = kls.split('|')[1];
               if (args.length < 1) return reply(mess.blank);
               erik.sendMessage(
                  from,
                  `${has}‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎${kas}`,
                  text,
                  { quoted: mek }
               );
               break
    case 'kontak':
            pe = args.join(' ') 
            entah = pe.split('|')[0]
            nah = pe.split('|')[1]
            if (isNaN(entah)) return reply('Invalid phone number');
            vcard = 'BEGIN:VCARD\n'
            + 'VERSION:3.0\n'
            + `FN:${nah}\n`
            + `TEL;type=CELL;type=VOICE;waid=${entah}:${phoneNum('+' + entah).getNumber('internasional')}\n`
            + 'END:VCARD'.trim()
            erik.sendMessage(from, {displayName: `${nah}`, vcard: vcard}, contact)
            break
    case 'runtime':
            run = process.uptime() 
            teks = `${kyun(run)}`
            fakegroup(teks)
            break  
	case 'speed':
	case 'test':
			const timestamp = speed();
			const latensi = speed() - timestamp
			exec(`neofetch --stdout`, (error, stdout, stderr) => {
			const child = stdout.toString('utf-8')
			const teks = child.replace(/Memory:/, "Ram:")
			const pingnya = `*${teks}Speed: ${latensi.toFixed(4)} Second*`
			testing(pingnya)
			})
			break  
    case 'inspect':
            try {
            if (!isUrl(args[0]) && !args[0].includes('whatsapp.com')) return reply(mess.Iv)
            if (!q) return reply('masukan link wa')
            cos = args[0]
            var net = cos.split('https://chat.whatsapp.com/')[1]
            if (!net) return reply('pastikan itu link https://whatsapp.com/')
            jids = []
            let { id, owner, subject, subjectOwner, desc, descId, participants, size, descOwner, descTime, creation} = await erik.query({ 
            json: ["query", "invite",net],
            expect200:true })
            let par = `*Id* : ${id}
${owner ? `*Owner* : @${owner.split('@')[0]}` : '*Owner* : -'}
*Nama Gc* : ${subject}
*Gc dibuat Tanggal* : ${formatDate(creation * 1000)}
*Jumlah Member* : ${size}
${desc ? `*Desc* : ${desc}` : '*Desc* : tidak ada'}
*Id desc* : ${descId}
${descOwner ? `*Desc diubah oleh* : @${descOwner.split('@')[0]}` : '*Desc diubah oleh* : -'}\n*Tanggal* : ${descTime ? `${formatDate(descTime * 1000)}` : '-'}\n\n*Kontak yang tersimpan*\n`
           for ( let y of participants) {
             par += `> @${y.id.split('@')[0]}\n*Admin* : ${y.isAdmin ? 'Ya' : 'Tidak'}\n`
             jids.push(`${y.id.replace(/@c.us/g,'@s.whatsapp.net')}`)
             }
             jids.push(`${owner ? `${owner.replace(/@c.us/g,'@s.whatsapp.net')}` : '-'}`)
             jids.push(`${descOwner ? `${descOwner.replace(/@c.us/g,'@s.whatsapp.net')}` : '-'}`)
             erik.sendMessage(from,par,text,{quoted:mek,contextInfo:{mentionedJid:jids}})
             } catch {
             reply('Link error')
             }
             break
default:
if(budy === 'P'){
if (!mek.key.fromMe && !isOwner) return
faketroli('```ACTIVE```')
}
if(budy.includes('@6282130301023')){
otomatis(kenapa ngetag owner ku?')
}
if(budy.includes('Assalamualaikum')){
reply('Waalaikumsalam')
}
if(budy.includes('yntkts')){
reply('yo ndak tau kok tanya saya?')
}
if(budy.includes('YNTKTS')){
reply('yo ndak tau kok tanya saya?')
}
if(budy.includes('Yntkts')){
reply('yo ndak tau kok tanya saya?')
}
if (budy.startsWith('$')){
if (!mek.key.fromMe && !isOwner) return reply(mess.only.ownerB) 
console.log(color('[EXEC]'), color(moment(mek.messageTimestamp * 3000).format('DD/MM/YY HH:mm:ss'), 'yellow'), color(`EXEC broo`))
var babi = budy.slice(1)
exec(babi, (err, asuu) => {
if(err) return reply(`${err}`)
if (asuu) {
textImg(`${asuu}`)
}
})
erik.sendMessage(from, '```executing...```', text, { quoted: mek });
}
if (budy.startsWith('>')){
if (!mek.key.fromMe && !isOwner) return
console.log(color('[EVAL]'), color(moment(mek.messageTimestamp * 1000).format('DD/MM/YY HH:mm:ss'), 'yellow'), color(`Eval V1 brooo`))
ras = budy.slice(1)
function _(rem) {
ren = JSON.stringify(rem,null,2)
pes = util.format(ren)
reply(pes)
}
try{q
reply(require('util').format(eval(`(async () => { ${ras} })()`)))
} catch(err) {
e = String(err)
reply(e)
}
}
if (budy.startsWith('<')){
try {
if (!mek.key.fromMe) return reply('```KHUSUS OWNER```')
return erik.sendMessage(from, JSON.stringify(eval(budy.slice(2)),null,'\t'),text, {quoted: mek})
} catch(err) {
e = String(err)
reply(e)
}
}  

	}
if (isGroup && budy != undefined) {
	} else {
	console.log(color('[TEXT]', 'red'), 'SELF-MODE', color(sender.split('@')[0]))
	}		
	} catch (e) {
    e = String(e)
    if (!e.includes("this.isZero")) {
	console.log('Message : %s', color(e, 'green'))
        }
	// console.log(e)
	}
}


	
    
