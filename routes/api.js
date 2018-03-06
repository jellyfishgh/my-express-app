var express = require('express')
var router = express.Router()

const statusContent = {
  '0-0': {
    nkh: '02508081',
    custname: '张三',
    level: '银卡',
    bd: false
  },
  '0-1': {
    nkh: '02508081',
    custname: '张三',
    level: '银卡',
    bd: true
  },
  '1': {},
  '20': {
    errors: [
      {
        title: '公安联网核查信息不符',
        items: ['公安库无头像', '公安非同一张照片', '身份证公安校验失败']
      },
      {
        title: '错误错误错误'
      },
      {
        title: '错误错误错误',
        items: ['error item']
      }
    ]
  },
  '21-0': {
    bd: false,
    errors: [
      {
        title: '身份证影像不符',
        items: ['身份证影像不清晰', '身份证照片不完整'],
        path: 'idcard'
      },
      {
        title: '视频不符',
        items: ['视频用户头像未完整显示', '未朗读文字'],
        path: 'lzsp'
      },
      {
        title: '头部正面照影像不符',
        items: ['头部正面照不符'],
        path: 'yxcj'
      }
    ]
  },
  '21-1': {
    bd: true,
    errors: [
      {
        title: '身份证影像不符',
        items: ['身份证影像不清晰', '身份证照片不完整'],
        path: 'idcard'
      },
      {
        title: '视频不符',
        items: ['视频用户头像未完整显示', '未朗读文字'],
        path: 'lzsp'
      },
      {
        title: '头部正面照影像不符',
        items: ['头部正面照不符'],
        path: 'yxcj'
      }
    ]
  },
  '300': {},
  '301-0': {
    bankName: '中国银行',
    bankCode: '6217123456783288',
    cg: false,
  },
  '301-1': {
    bankName: '中国银行',
    bankCode: '6217123456783288',
    cg: true
  },
  '310-0': {
    pwd: false,
    jy: false
  },
  '310-1': {
    pwd: false,
    jy: true
  },
  '311-0': {
    bankName: '中国银行',
    bankCode: '6217123456783288',
    pwd: true,
    jy: true,
    cg: false
  },
  '311-1': {
    bankName: '中国银行',
    bankCode: '6217123456783288',
    pwd: true,
    jy: true,
    cg: true
  }
}
// const currentStatus = '0'
// const currentStatus = '1'
// const currentStatus = '20'
// const currentStatus = '21'
// const currentStatus = '300'
// const currentStatus = '301'
// const currentStatus = '310'
// const currentStatus = '311'
const statusFilter = currentStatus => ({
  code: '000000',
  msg: '',
  content: {
    status: currentStatus,
    ...statusContent[currentStatus]
  }
})

const route = '/:type?'
const resHandler = (req, res, next) => {
  const { type = 'status' } = req.params
  const { code } = req.body
  res.json(statusFilter(code))
}

router.get(route, resHandler)
router.post(route, resHandler)

module.exports = router
