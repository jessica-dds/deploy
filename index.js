require('dotenv').config()
const express = require('express')
const knex = require('./conexao')
const cors = require('cors')

const app = express()

app.use(cors())

app.use(express.json())

app.get('/', async (req, res) => {
    return res.json('Api está ok!')
})

// // Simulação de variávies de ambiente
// app.listen(3000, () => {
//     console.log(process.env.JESSICA)
// })


const port = process.env.PORT || 3000

app.listen(port, () => {
    console.log(`Servidor em pé na porta ${port}`)
})