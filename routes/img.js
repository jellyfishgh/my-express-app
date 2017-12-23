const fs = require('fs')
const path = require('path')
const express = require('express')
const router = express.Router()
var formidable = require('formidable')

const videos = []
const resHandler = (req, res, next) => {
  var form = new formidable.IncomingForm()
  form.parse(req, function(err, fields, files) {
    console.log('fields', fields)
    console.log('files', files)
    res.send('respond with a resource')
  })
  // const { total, index, video } = req.body
  // videos[index] = video
  // if (index === total - 1) {
  //   const fileName = `video_${new Date().toLocaleDateString()}.mp4`
  //   fs.writeFile(
  //     path.join(__dirname, 'videos', fileName),
  //     ArrayBuffer(videos),
  //     err => {
  //       if (err) throw err
  //       console.log(`${fileName} 创建成功`)
  //     }
  //   )
  // }
}

const route = '/'
router.get(route, resHandler)
router.post(route, resHandler)

module.exports = router
