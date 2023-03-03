// const express = require('express')
import express from 'express'
import cors from 'cors'
const app = express()
const port = 3000

app.use(cors("*"))

app.get('/api/', (req, res) => {
  res.send('Hello World')
})

app.get('/', (req, res) => {
 res.json({
    "msg":"hello Slivertouch good morning....",
    "backEnd":"Node.js",
    "fontEnd":"react js"
 })
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})