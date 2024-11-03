const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT 
global.appUrl=process.env.APP_URL || ""     // put your deploy app/bot url here, for 24/7 for (render , koyeb, glitch)
global.email ="saimsamsun789@gmail.com"
global.location="Lahore,Pakistan."


global.mongodb= process.env.MONGODB_URI || "false" || "mongodb+srv://mohsin:mohsin@cluster0.iauaztt.mongodb.net/?retryWrites=true&w=majority"
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || "false" || "mongodb+srv://mohsin:mohsin@cluster0.iauaztt.mongodb.net/?retryWrites=true&w=majority"

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github=process.env.GITHUB|| "https://github.com/SuhailTechInfo/suhailmd-2.0";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029VagJIAr3bbVBCpEkAM07";
global.website=process.env.GURL || "https://whatsapp.com/channel/0029VagJIAr3bbVBCpEkAM07" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://i.ibb.co/TgwRyHR/Ephoto360-com-166de101e03cd7.jpg" || "https://i.ibb.co/bH1kbX0/a4c0b1af253197d4837ff6760d5b81c0.jpg" ; // SET LOGO FOR IMAGE 
global.caption = process.env.CAPTION || global.caption || "© SuhailTechInfo" 


global.devs = "" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "";




//========================= [ BOT SETTINGS ] ======8===================\\
global.style = process.env.STYLE   || Math.floor(Math.random()*6) || '0'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || process.env.CAN_GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || process.env.CAN_WELCOME || Math.floor(Math.random()*3)  === 1 ?  "true" : "false" ;  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "https://i.ibb.co/pXyNHj8/suhail.jpg" // "image" // set Image/video urls here
global.waPresence= process.env.WAPRESENCE ||  "null" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null,923xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "true"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923444844060,923xxxxxxxx";

global.api_smd = "https://api-smd.onrender.com/" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID  || "SUHAIL_23_20_11_03_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMCxcbiAgICAgICAgMjIyLFxuICAgICAgICAxMzMsXG4gICAgICAgIDE3NSxcbiAgICAgICAgMjQ1LFxuICAgICAgICAxNyxcbiAgICAgICAgNzQsXG4gICAgICAgIDE5MCxcbiAgICAgICAgMjAxLFxuICAgICAgICA4NSxcbiAgICAgICAgMjksXG4gICAgICAgIDk2LFxuICAgICAgICAyNixcbiAgICAgICAgMTEyLFxuICAgICAgICAyNyxcbiAgICAgICAgMTYzLFxuICAgICAgICAyNTEsXG4gICAgICAgIDEwMCxcbiAgICAgICAgMTUzLFxuICAgICAgICAyMjYsXG4gICAgICAgIDEzNixcbiAgICAgICAgMjQ0LFxuICAgICAgICA5OSxcbiAgICAgICAgMTQ4LFxuICAgICAgICAxMjYsXG4gICAgICAgIDkzLFxuICAgICAgICAxMzQsXG4gICAgICAgIDE3OCxcbiAgICAgICAgMjA2LFxuICAgICAgICAzLFxuICAgICAgICAyOCxcbiAgICAgICAgMTA2XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE3OSxcbiAgICAgICAgNjYsXG4gICAgICAgIDEyMCxcbiAgICAgICAgMTgzLFxuICAgICAgICAxNDgsXG4gICAgICAgIDUwLFxuICAgICAgICA0LFxuICAgICAgICAyMTksXG4gICAgICAgIDY2LFxuICAgICAgICAxODksXG4gICAgICAgIDE3NCxcbiAgICAgICAgMjA2LFxuICAgICAgICA0NyxcbiAgICAgICAgOTYsXG4gICAgICAgIDIwOCxcbiAgICAgICAgMTA4LFxuICAgICAgICAxNTYsXG4gICAgICAgIDE1OCxcbiAgICAgICAgMjIsXG4gICAgICAgIDE1LFxuICAgICAgICAxMzksXG4gICAgICAgIDEyMSxcbiAgICAgICAgMjQxLFxuICAgICAgICAyMTQsXG4gICAgICAgIDgzLFxuICAgICAgICAxMjAsXG4gICAgICAgIDE4OSxcbiAgICAgICAgMTUwLFxuICAgICAgICAxNjAsXG4gICAgICAgIDEwMixcbiAgICAgICAgODMsXG4gICAgICAgIDdcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwicGFpcmluZ0VwaGVtZXJhbEtleVBhaXJcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDExMixcbiAgICAgICAgNDEsXG4gICAgICAgIDE0OCxcbiAgICAgICAgMzYsXG4gICAgICAgIDEzMCxcbiAgICAgICAgMTY2LFxuICAgICAgICAyMzIsXG4gICAgICAgIDU4LFxuICAgICAgICAyMjAsXG4gICAgICAgIDIyNSxcbiAgICAgICAgMjAsXG4gICAgICAgIDE4NSxcbiAgICAgICAgMzEsXG4gICAgICAgIDQzLFxuICAgICAgICAxOTUsXG4gICAgICAgIDYsXG4gICAgICAgIDE4MyxcbiAgICAgICAgMjEyLFxuICAgICAgICAxMzEsXG4gICAgICAgIDkzLFxuICAgICAgICAyNDksXG4gICAgICAgIDQ3LFxuICAgICAgICAxMDcsXG4gICAgICAgIDEwNixcbiAgICAgICAgNjksXG4gICAgICAgIDIsXG4gICAgICAgIDUxLFxuICAgICAgICAxODUsXG4gICAgICAgIDc5LFxuICAgICAgICAyMzEsXG4gICAgICAgIDcxLFxuICAgICAgICA2OVxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA0NCxcbiAgICAgICAgMTgxLFxuICAgICAgICAzOSxcbiAgICAgICAgMTgwLFxuICAgICAgICAxNTEsXG4gICAgICAgIDE1NSxcbiAgICAgICAgNDMsXG4gICAgICAgIDE0NixcbiAgICAgICAgMjM5LFxuICAgICAgICAxNjYsXG4gICAgICAgIDE3NSxcbiAgICAgICAgODUsXG4gICAgICAgIDE1LFxuICAgICAgICAyNDUsXG4gICAgICAgIDY3LFxuICAgICAgICA0OCxcbiAgICAgICAgMTg4LFxuICAgICAgICA5OCxcbiAgICAgICAgNTMsXG4gICAgICAgIDIwOSxcbiAgICAgICAgMTY3LFxuICAgICAgICAxOTcsXG4gICAgICAgIDEzOCxcbiAgICAgICAgMjEwLFxuICAgICAgICAxNjYsXG4gICAgICAgIDYwLFxuICAgICAgICAxOTcsXG4gICAgICAgIDE5MyxcbiAgICAgICAgMzEsXG4gICAgICAgIDgsXG4gICAgICAgIDgxLFxuICAgICAgICAyOFxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRJZGVudGl0eUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTEyLFxuICAgICAgICAyMjQsXG4gICAgICAgIDMzLFxuICAgICAgICA2MixcbiAgICAgICAgNzYsXG4gICAgICAgIDE4NCxcbiAgICAgICAgMTc4LFxuICAgICAgICAyMDYsXG4gICAgICAgIDIyOCxcbiAgICAgICAgMTA2LFxuICAgICAgICAyMjAsXG4gICAgICAgIDQsXG4gICAgICAgIDY3LFxuICAgICAgICA1MyxcbiAgICAgICAgMjExLFxuICAgICAgICAyMTMsXG4gICAgICAgIDMyLFxuICAgICAgICAxODQsXG4gICAgICAgIDE3NixcbiAgICAgICAgMTA2LFxuICAgICAgICAxODcsXG4gICAgICAgIDYxLFxuICAgICAgICAxMTQsXG4gICAgICAgIDIwNixcbiAgICAgICAgMjgsXG4gICAgICAgIDgxLFxuICAgICAgICAxODQsXG4gICAgICAgIDI1MCxcbiAgICAgICAgMjE0LFxuICAgICAgICA2NyxcbiAgICAgICAgMjA2LFxuICAgICAgICA5NFxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxNjYsXG4gICAgICAgIDIyLFxuICAgICAgICA3OCxcbiAgICAgICAgMjIxLFxuICAgICAgICAyMDYsXG4gICAgICAgIDEzNyxcbiAgICAgICAgOTQsXG4gICAgICAgIDIxNSxcbiAgICAgICAgMjA4LFxuICAgICAgICAxNDAsXG4gICAgICAgIDE5NyxcbiAgICAgICAgMjI5LFxuICAgICAgICAzNyxcbiAgICAgICAgNjMsXG4gICAgICAgIDc1LFxuICAgICAgICAxMzcsXG4gICAgICAgIDUyLFxuICAgICAgICA2NSxcbiAgICAgICAgMTUzLFxuICAgICAgICA5MCxcbiAgICAgICAgNzAsXG4gICAgICAgIDM1LFxuICAgICAgICA0OCxcbiAgICAgICAgMTY5LFxuICAgICAgICAxNjYsXG4gICAgICAgIDgzLFxuICAgICAgICAxMSxcbiAgICAgICAgMjIwLFxuICAgICAgICA3MixcbiAgICAgICAgMTUyLFxuICAgICAgICAyMjYsXG4gICAgICAgIDE0XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZFByZUtleVwiOiB7XG4gICAgXCJrZXlQYWlyXCI6IHtcbiAgICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDE1MixcbiAgICAgICAgICAyMDYsXG4gICAgICAgICAgNTUsXG4gICAgICAgICAgNzQsXG4gICAgICAgICAgNjksXG4gICAgICAgICAgOTQsXG4gICAgICAgICAgMTY4LFxuICAgICAgICAgIDEzNSxcbiAgICAgICAgICAyMyxcbiAgICAgICAgICA5MyxcbiAgICAgICAgICAxNTEsXG4gICAgICAgICAgOTcsXG4gICAgICAgICAgMjA2LFxuICAgICAgICAgIDYzLFxuICAgICAgICAgIDI1NSxcbiAgICAgICAgICAyMjcsXG4gICAgICAgICAgMTk4LFxuICAgICAgICAgIDI4LFxuICAgICAgICAgIDg1LFxuICAgICAgICAgIDEwNyxcbiAgICAgICAgICA1NyxcbiAgICAgICAgICAyNDMsXG4gICAgICAgICAgODksXG4gICAgICAgICAgNDEsXG4gICAgICAgICAgMTEyLFxuICAgICAgICAgIDE3NyxcbiAgICAgICAgICAxMjIsXG4gICAgICAgICAgMjQzLFxuICAgICAgICAgIDQ4LFxuICAgICAgICAgIDYzLFxuICAgICAgICAgIDIxNSxcbiAgICAgICAgICA4NlxuICAgICAgICBdXG4gICAgICB9LFxuICAgICAgXCJwdWJsaWNcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA4OCxcbiAgICAgICAgICA0NixcbiAgICAgICAgICA3OSxcbiAgICAgICAgICA2NSxcbiAgICAgICAgICAxODAsXG4gICAgICAgICAgMjMsXG4gICAgICAgICAgNzEsXG4gICAgICAgICAgMTg4LFxuICAgICAgICAgIDExLFxuICAgICAgICAgIDExNSxcbiAgICAgICAgICA4NSxcbiAgICAgICAgICAxMzAsXG4gICAgICAgICAgOTEsXG4gICAgICAgICAgMTI0LFxuICAgICAgICAgIDE1NyxcbiAgICAgICAgICAxODQsXG4gICAgICAgICAgMjM5LFxuICAgICAgICAgIDI1MixcbiAgICAgICAgICAzMyxcbiAgICAgICAgICAxMDMsXG4gICAgICAgICAgMjcsXG4gICAgICAgICAgMTE3LFxuICAgICAgICAgIDQxLFxuICAgICAgICAgIDIzNSxcbiAgICAgICAgICAxMSxcbiAgICAgICAgICA2NixcbiAgICAgICAgICAzNSxcbiAgICAgICAgICAxNDksXG4gICAgICAgICAgMjA5LFxuICAgICAgICAgIDE5MCxcbiAgICAgICAgICA3OSxcbiAgICAgICAgICA4MlxuICAgICAgICBdXG4gICAgICB9XG4gICAgfSxcbiAgICBcInNpZ25hdHVyZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE4NSxcbiAgICAgICAgNzcsXG4gICAgICAgIDQzLFxuICAgICAgICAxODAsXG4gICAgICAgIDY4LFxuICAgICAgICA4NSxcbiAgICAgICAgNDcsXG4gICAgICAgIDExMixcbiAgICAgICAgMTgxLFxuICAgICAgICAxNTQsXG4gICAgICAgIDE5NyxcbiAgICAgICAgMTgxLFxuICAgICAgICAxODQsXG4gICAgICAgIDg1LFxuICAgICAgICAxMjcsXG4gICAgICAgIDIzNCxcbiAgICAgICAgMTYsXG4gICAgICAgIDE4NixcbiAgICAgICAgNDUsXG4gICAgICAgIDEwMixcbiAgICAgICAgMTgzLFxuICAgICAgICA3MixcbiAgICAgICAgMTExLFxuICAgICAgICA2MyxcbiAgICAgICAgMTY1LFxuICAgICAgICAxNixcbiAgICAgICAgMjIzLFxuICAgICAgICAxMzEsXG4gICAgICAgIDE4MixcbiAgICAgICAgMTQ3LFxuICAgICAgICAyNixcbiAgICAgICAgNDAsXG4gICAgICAgIDEwMyxcbiAgICAgICAgMTA2LFxuICAgICAgICAxNjEsXG4gICAgICAgIDkzLFxuICAgICAgICAxMjYsXG4gICAgICAgIDcxLFxuICAgICAgICAyMTMsXG4gICAgICAgIDIzMSxcbiAgICAgICAgMTEyLFxuICAgICAgICAxNTEsXG4gICAgICAgIDkxLFxuICAgICAgICA1NixcbiAgICAgICAgNzgsXG4gICAgICAgIDE3MSxcbiAgICAgICAgNjksXG4gICAgICAgIDEyNCxcbiAgICAgICAgMTUsXG4gICAgICAgIDE2LFxuICAgICAgICA4NCxcbiAgICAgICAgMjA5LFxuICAgICAgICAzNyxcbiAgICAgICAgMjQxLFxuICAgICAgICAyMjIsXG4gICAgICAgIDIxNixcbiAgICAgICAgMTI4LFxuICAgICAgICA1NSxcbiAgICAgICAgMTkwLFxuICAgICAgICAxMixcbiAgICAgICAgMTI2LFxuICAgICAgICAxNjIsXG4gICAgICAgIDIyOCxcbiAgICAgICAgMTM2XG4gICAgICBdXG4gICAgfSxcbiAgICBcImtleUlkXCI6IDFcbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25JZFwiOiA3MyxcbiAgXCJhZHZTZWNyZXRLZXlcIjogXCJ0bkFwaUFyZHBpblNtVm5DcVNaWXBSKy9jbXd3bS9HaTJuRWV4Z1BsSDRFPVwiLFxuICBcInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlc1wiOiBbXSxcbiAgXCJuZXh0UHJlS2V5SWRcIjogMzEsXG4gIFwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWRcIjogMzEsXG4gIFwiYWNjb3VudFN5bmNDb3VudGVyXCI6IDAsXG4gIFwiYWNjb3VudFNldHRpbmdzXCI6IHtcbiAgICBcInVuYXJjaGl2ZUNoYXRzXCI6IGZhbHNlXG4gIH0sXG4gIFwiZGV2aWNlSWRcIjogXCJCaFlVRTQ3TlFpdXpEdEtkSFp1X1ZnXCIsXG4gIFwicGhvbmVJZFwiOiBcImRhMzlmODRjLTU3NzMtNGVkZi1iMmJkLTdhZDNjN2ZkZGE5ZVwiLFxuICBcImlkZW50aXR5SWRcIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAxOCxcbiAgICAgIDMsXG4gICAgICAzNyxcbiAgICAgIDE3MixcbiAgICAgIDEwNCxcbiAgICAgIDE1MixcbiAgICAgIDE5NyxcbiAgICAgIDE1MyxcbiAgICAgIDEyNSxcbiAgICAgIDUxLFxuICAgICAgMjQwLFxuICAgICAgNTAsXG4gICAgICA0NSxcbiAgICAgIDEwMSxcbiAgICAgIDE0NSxcbiAgICAgIDE3OSxcbiAgICAgIDIxMCxcbiAgICAgIDE3MixcbiAgICAgIDE3OSxcbiAgICAgIDI0MlxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RlcmVkXCI6IHRydWUsXG4gIFwiYmFja3VwVG9rZW5cIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAxNDAsXG4gICAgICAyMjksXG4gICAgICA4MSxcbiAgICAgIDEwOSxcbiAgICAgIDEyLFxuICAgICAgMTg5LFxuICAgICAgMTcwLFxuICAgICAgMTEsXG4gICAgICAxNzQsXG4gICAgICAyMTAsXG4gICAgICAyNSxcbiAgICAgIDM5LFxuICAgICAgMTI5LFxuICAgICAgNCxcbiAgICAgIDYyLFxuICAgICAgMTIsXG4gICAgICAxODgsXG4gICAgICAxNDQsXG4gICAgICAxMjgsXG4gICAgICAyMzhcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uXCI6IHt9LFxuICBcInBhaXJpbmdDb2RlXCI6IFwiVEUxMkNaODFcIixcbiAgXCJtZVwiOiB7XG4gICAgXCJpZFwiOiBcIjI1NTY3NTEwNDQ5MDo0OEBzLndoYXRzYXBwLm5ldFwiLFxuICAgIFwibGlkXCI6IFwiMTcxMDg2MjMwNjMwNTQwOjQ4QGxpZFwiXG4gIH0sXG4gIFwiYWNjb3VudFwiOiB7XG4gICAgXCJkZXRhaWxzXCI6IFwiQ1ByRXFCMFF5b3FndVFZWUFTQUFLQUE9XCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlS2V5XCI6IFwiY0tQTEJ3Zkl1ckQ3bFJMbHRHb3RWaFk0TVhOVVVNU0pZMXR3TDFRUFN3QT1cIixcbiAgICBcImFjY291bnRTaWduYXR1cmVcIjogXCJSTkMza3hNWHJJK3czTUo1Q1RLZHdMQ2FhbDBhREcvZjhHV25yUXlnZ1R5SFRuOW9iODAzZ1NBekpVTWFNOEU3MllJUlFkSFcwY3pYRGVScnVyRzdDQT09XCIsXG4gICAgXCJkZXZpY2VTaWduYXR1cmVcIjogXCJpRUVSTzV5MDJHYm8vNVRUU05nV0xSVm4wNXFyWXBzN0huWmNaTkI1b21KalNFdTREb1hUa0tIc25JT3FXZDhvSDlQRjM2NGpXMGJvUDZEQklhZFhnUT09XCJcbiAgfSxcbiAgXCJzaWduYWxJZGVudGl0aWVzXCI6IFtcbiAgICB7XG4gICAgICBcImlkZW50aWZpZXJcIjoge1xuICAgICAgICBcIm5hbWVcIjogXCIyNTU2NzUxMDQ0OTA6NDhAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJkZXZpY2VJZFwiOiAwXG4gICAgICB9LFxuICAgICAgXCJpZGVudGlmaWVyS2V5XCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgNSxcbiAgICAgICAgICAxMTIsXG4gICAgICAgICAgMTYzLFxuICAgICAgICAgIDIwMyxcbiAgICAgICAgICA3LFxuICAgICAgICAgIDcsXG4gICAgICAgICAgMjAwLFxuICAgICAgICAgIDE4NixcbiAgICAgICAgICAxNzYsXG4gICAgICAgICAgMjUxLFxuICAgICAgICAgIDE0OSxcbiAgICAgICAgICAxOCxcbiAgICAgICAgICAyMjksXG4gICAgICAgICAgMTgwLFxuICAgICAgICAgIDEwNixcbiAgICAgICAgICA0NSxcbiAgICAgICAgICA4NixcbiAgICAgICAgICAyMixcbiAgICAgICAgICA1NixcbiAgICAgICAgICA0OSxcbiAgICAgICAgICAxMTUsXG4gICAgICAgICAgODQsXG4gICAgICAgICAgODAsXG4gICAgICAgICAgMTk2LFxuICAgICAgICAgIDEzNyxcbiAgICAgICAgICA5OSxcbiAgICAgICAgICA5MSxcbiAgICAgICAgICAxMTIsXG4gICAgICAgICAgNDcsXG4gICAgICAgICAgODQsXG4gICAgICAgICAgMTUsXG4gICAgICAgICAgNzUsXG4gICAgICAgICAgMFxuICAgICAgICBdXG4gICAgICB9XG4gICAgfVxuICBdLFxuICBcInBsYXRmb3JtXCI6IFwiYW5kcm9pZFwiLFxuICBcImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcFwiOiAxNzMwNjc2MDQ2LFxuICBcIm15QXBwU3RhdGVLZXlJZFwiOiBcIkFBQUFBRVU5XCJcbn0iLAogICJhcHAtc3RhdGUtc3luYy1rZXktQUFBQUFFVTkuanNvbiI6ICJ7XCJrZXlEYXRhXCI6XCIrbFA5SjY3Q3VXZFc4dHVaemo2U214TFYwaFA2SzBiZW1NU1pRSnFZTTRZPVwiLFwiZmluZ2VycHJpbnRcIjp7XCJyYXdJZFwiOjYxNDgxNTkxLFwiY3VycmVudEluZGV4XCI6NCxcImRldmljZUluZGV4ZXNcIjpbMCw0XX0sXCJ0aW1lc3RhbXBcIjpcIjBcIn0iCn0="  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.0.1-developement-x",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ GlobalTechInfo ® 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@GlobalTechInfo"),
 
  author : process.env.PACK_AUTHER|| "",
  packname: process.env.PACK_NAME || "",
  botname : process.env.BOT_NAME  || "Suhail-XMD",
  ownername:process.env.OWNER_NAME|| "Suhail-X",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "yepeTQaFk7r9ymusihgXYvdN",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,


  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "private",
  LANG: ( process.env.THEME ||  "SUHAIL"  ).toUpperCase(),



};



global.ELEVENLAB_API_KEY = process.env.ELEVENLAB_API_KEY || "0cdb1aed858329b9793413672094ce0d";
global.aitts_Voice_Id = process.env.AITTS_ID|| "37";





















global.rank = "updated"
global.isMongodb = false; 
let file = require.resolve(__filename)
fs.watchFile(file, () => { fs.unwatchFile(file);console.log(`Update'${__filename}'`);delete require.cache[file];	require(file); })
 

// ========================= [ Disables in V.1.2.8 ] ===============================\\  
  //style : process.env.STYLE || "2",  // put '1' & "2" here to check bot styles
  //readmessage:process.env.READ_MESSAGE|| "false",
  //warncount: process.env.WARN_COUNT || 3,
  //userImages:process.env.USER_IMAGES|| "text",  // SET IMAGE AND VIDEO URL FOR BOT MENUS 
  //disablepm: process.env.DISABLE_PM || "false",
  //MsgsInLog: process.env.MSGS_IN_LOG|| "false", // "true"  to see messages , "log" to open logs , "false" to hide logs messages
  //readcmds:process.env.READ_COMMANDS|| "false", 
  //alwaysonline:process.env.WAPRESENCE|| "unavailable", // 'unavailable' | 'online' | 'composing' | 'recording' | 'paused'
  //read_status: process.env.AUTO_READ_STATUS || "false",
  //save_status: process.env.AUTO_SAVE_STATUS || "false",
  //aitts_Voice_Id : process.env.AITTS_ID || "37",
  //ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY  || "",
