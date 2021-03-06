const express = require('express')
const router = express.Router()
var formidable = require('formidable')

const videos = []
const resHandler = (req, res, next) => {
  var form = new formidable.IncomingForm()
  form.parse(req, function (err, fields, files) {
    console.log('fields', fields)
    console.log('files', files)
    res.render('form', { title: 'Form', params: JSON.stringify(fields) })
  })
}

const route = '/'
router.get(route, resHandler)
router.post(route, resHandler)

module.exports = router
