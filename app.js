const express = require('express')
const morgan = require('morgan')
const cors = require('cors')
const router = require('./router')
const errorHandler = require('./middleware/error-handler.js') 
require('./model')


const app = express()

app.use(morgan('dev'))
app.use(express.json())
app.use(cors())

// 挂载路由
app.use('/api',router)
// 挂载统一处理服务器错误中间件
app.use(errorHandler())

const port = 3000

app.get('/', (req, res) => res.send('Hello World!'))
app.listen(port, () => console.log(`Example app listening on port ${port}!`))