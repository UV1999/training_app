const express = require("express")
const router = express.Router()

router.get('/', (req, res) => {
    console.log(req)
    res.send('Name Home Page!')
  })

router.get('/Uvan', (req, res) => {
    res.send('Uvan Home Page!')
  })

router.get('/Sankar', (req, res) => {
    res.send('Sankar Home Page!')
  })

router.get('/:name', (req, res) => {
    console.log(req.params)
    res.send(req.params.name)
  })

  module.exports = router