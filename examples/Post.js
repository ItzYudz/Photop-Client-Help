const { Client } = require('photop-client')
const client = new Client({ username: 'bot username', password: process.env['Pass'] })
client.onPost = (post) => {
  if (post.text == "test3") {
    client.post("I'm functioning")
   }
}
