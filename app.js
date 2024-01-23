const express = require('express')
const cors = require('cors')
const router = require('./routes/alunoRoutes')

const app = express()
const port = 3000
app.use(cors())
app.use(express.json())
app.use(express.static('public'))
app.use(express.urlencoded({extended: false}))// tratamento de requisições html
app.set('view engine', 'ejs') //setando que iremos usar o ejs
app.use('/alunos', router)



app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.listen(port, () => {
  console.log(`Example app listening on port http://localhost:${port}`)
})