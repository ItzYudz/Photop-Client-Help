# Photop Client Help
Photop Client is a npm package to create a photop bot (https://app.photop.live), but the original github doesn't have enough instructions. So, I created a github with a more full detailed one with all the knowledge I have.
## Recommended Coding Sites/Apps
I recommend either VSCode (Visual Studio Code), or Replit. VSCode is a  application, while Replit is a website.
## Get started
To get started, run `npm i photop-client@latest` in the coding terminal or shell. Make sure to use node.js. To actually use Photop Client, add this code to your code:
```js
const { Client } = require('photop-client')
const client = new Client({ username: 'bot username', password: 'bot password' })
```
If you are on VSCode, this is fine, but if you are on a public coding site like Replit, make sure the replace `'bot password'` with `process.env['Pass']` after you create a secret with the key as `Pass` and the value your password. Example: Key: `Pass` Value: `bot password`. Make sure that the word inside process.env is the same as the key you put for the secret. (If you can't how to build a secret, it is also known as a enviromental variable.
```js
const { Client } = require('photop-client')
const client = new Client({ username: 'bot username', password: process.env['Pass'] })
```
## Chat on a Post
To make your bot chat on a post, you need to use onPost and post.chat.
```js
client.onPost = (post) => {
  if (post.text == "test") {
    post.chat("I'm working")
  }
}
```
This code responds `I'm working` to a post that has `test`. You can change the values on the code above that are inside quotation marks.
## Reply to a Chat
To make your bot reply on a chat, you need to use onChat, post.chat, and chat.reply. This also requires you to connect the code with your onPost code, so it will be a little longer.
```js
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
```
## Make the bot post
This makes it so the bot posts when you chat/post something and uses client.post.
```js
client.onPost = (post) => {
  if (post.text == "test3") {
    client.post("I'm functioning")
   }
}
```
I hope that was enough, and I'll be updating this soon. You can take a look at some code in https://github.com/@ItzYudz/Photop-Client-Help/blob/examples/.
