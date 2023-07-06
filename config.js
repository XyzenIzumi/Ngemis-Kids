const chalk = require("chalk")
const fs = require("fs")

global.ownerNumber = ["6283877118785@s.whatsapp.net"]
global.nomerOwner = "6283877118785"
global.nomorOwner = ['6283877118785']
global.namaDeveloper = "Kii Code"
global.namaBot = "Kii Dev Botz"
global.packname = ""
global.author = "Kii Developer"
global.thumb = fs.readFileSync("./thumb.png")
global.tekspushkon = ""
global.tekspushkonv1 = "Assalamualaikum,  Save Aku Zaki Kak/nSaveBack Sebut Nama Ya Kak 😁"
global.tekspushkonv2 = ""
global.tekspushkonv3 = ""

let file = require.resolve(__filename) 
fs.watchFile(file, () => {
fs.unwatchFile(file)
console.log(chalk.redBright(`Update ${__filename}`))
delete require.cache[file]
require(file)
})

/*

Thanks To By IrulLz Dev (Gausah Di Ganti Hargai Gua!!)
Di Jalankan Dan Di Fix Oleh IrulLz Dev & Namamu
Ubah Nomor Owner?
Ganti Di File ./owner.json

*/