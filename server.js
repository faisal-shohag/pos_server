// 
import terminalLink from 'terminal-link';
import ip from 'ip';
// 
import express from "express"
import "dotenv/config"
import cookieParser from 'cookie-parser';

import get from './Api/get.js';
import post from './Api/post.js';
import update from './Api/update.js';
import dlt from './Api/delete.js';
import authentication from './Authentication/Auth.js';
import { api_key_mid } from './Middlewares/APIKey.js';

const app = express()
const PORT = process.env.PORT || 3000


//*middlewares
app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(cookieParser())

app.get('/', (req, res) => {
    res.send("🚀 Working fine!")
})

app.use(api_key_mid)
app.use(authentication)
app.use(get)
app.use(post)
app.use(update)
app.use(dlt)



app.listen(PORT, () => {
    const localhost = terminalLink('on localhost:', `localhost:${PORT}`);
    const network = terminalLink('On your network:', `${ip.address()}:${PORT}`);
    console.log(`🚀 App is Running\n${localhost}\n${network}`)
})
