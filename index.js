const express = require('express')
const cors = require('cors')
const app = express()

const data = require('./data')

app.use(cors())

app.get('/users/:userId', (req, res) => res.json(data[req.params.userId]))
app.get('/users', (req, res) => res.json(data))
app.post('*', (req, res) => res.sendStatus(201))
app.put('*', (req, res) => res.sendStatus(204))
app.delete('*', (req, res) => res.sendStatus(204))

const PORT = process.env.PORT || 3001
app.listen(PORT, () => console.log(`App listening on port ${PORT}`))
