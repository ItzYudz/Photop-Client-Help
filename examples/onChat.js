const { Client } = require('photop-client')
const client = new Client({ username: 'bot username', password: process.env['Pass'] })
client.onPost = (post) => {
  if (post.text == "test") {
    post.chat("I'm working")
  }
  post.onChat = (chat) => {
    if (chat.text == "test2") {
      chat.reply("Hi, I'm still working")
      }
   }
}
