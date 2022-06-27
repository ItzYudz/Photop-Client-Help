const { Client } = require('photop-client')
const client = new Client({ username: 'bot username', password: process.env['Pass'] })
client.onPost = (post) => {
  if (post.text == "username") {
    post.chat(`${post.author.username} is your username!`)
    }
  client.onChat = (chat) => {
    chat.reply(`${chat.author.username} is your username!`)
  }
}
