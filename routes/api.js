var express = require('express')
var router = express.Router()

const statusContent = {
  '0': {
    nkh: '02508081',
    level: '银卡'
  },
  '20': {
  },
  '21': {

  },
  '300': {

  },
  '301': {

  },
  '310': {

  },
  '311': {

  }
}
const currentStatus = '0'
// const currentStatus = '20'
// const currentStatus = '21'
// const currentStatus = '300'
// const currentStatus = '301'
// const currentStatus = '310'
// const currentStatus = '311'
const status = {
  code: '000000',
  msg: '',
  content: {
    status: currentStatus,
    ...statusContent[currentStatus]
  }
}

const json = {
  status
}

const route = '/:type?'
const resHandler = (req, res, next) => {
  console.log(req.body)
  const { type = 'status' } = req.params
  res.json(json[type] || json.status)
}

router.get(route, resHandler)
router.post(route, resHandler)

module.exports = router
