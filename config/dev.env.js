'use strict'
const merge = require('webpack-merge')
const prodEnv = require('./prod.env')

module.exports = merge(prodEnv, {
  NODE_ENV: '"https://en-top.cn/index.php"',
  API_ROOT:'"https://en-top.cn/index.php"',
})
