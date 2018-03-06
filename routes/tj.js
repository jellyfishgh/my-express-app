const express = require('express')
const router = express.Router()

const videos = []
const resHandler = name => (req, res, next) => {
  console.log(req[name])
  res.end('200')
}

const route = '/'
router.get(route, resHandler('query'))
router.post(route, resHandler('params'))

module.exports = router
