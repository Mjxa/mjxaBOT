const TelegramBot = require('node-telegram-bot-api');

// replace the value below with the Telegram token you receive from @BotFather
const token = '789409250:AAEJl48yV-9JmQUuTqcjLeVF7rRYGjaYhUA';

// Create a bot that uses 'polling' to fetch new updates
const bot = new TelegramBot(token, {polling: true});
bot.sendMessage(500896595,`Вона працюэ`)

const http = require('http');
const https = require('https');
http.createServer().listen(process.env.PORT || 5000).on('request', function(req, res){
    res.end('')
});
setInterval(function(){
    https.get('https://app-mjxajl-bot.herokuapp.com/')
},300000)




// Matches "/echo [whatever]"

// bot.onText(/\/echo (.+)/, (msg, match) => {
//   // 'msg' is the received Message from Telegram
//   // 'match' is the result of executing the regexp above on the text content
//   // of the message

//   const chatId = msg.chat.id;
//   const resp = match[1]; // the captured "whatever"

//   // send back the matched "whatever" to the chat
//   bot.sendMessage(chatId, resp);
// });

// Listen for any kind of message. There are different kinds of
// messages.

bot.on('message', (msg) => {
  const chatId = msg.chat.id;
  switch (msg.text) {
      case "/deadline":
      let deadline = 1552417200
      bot.sendMessage(chatId,`Через ${((deadline - msg.date)/3600).toFixed(0)} : ${((deadline - msg.date)%3600/60).toFixed(0)} тобі пезда `);
      console.log(msg)
          
          break;
  
      default:
      bot.sendMessage(chatId,"zdarowa")
          break;
  }})
