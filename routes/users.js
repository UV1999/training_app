const express = require("express")
const router = express.Router()
const userCollection = require('../schemas/userSchema.js')

router.get('/', (req, res) => {
    console.log(req)
    res.send('User Home Page!')
  })

router.get('/admin', (req, res) => {
    res.send('Admin Home Page!')
  })

router.get('/Developer', (req, res) => {
    res.send('Developer Home Page!')
  })

  router.post('/UserPost', (req, res) => {
    console.log(req.body)
    res.send(req.body)
  })

  module.exports = router