#!/usr/bin/env node
'use strict'
var reqThen = require('../')
var util = require('util')
var pick = require('lodash.pick')

var url = process.argv[2]
var method = process.argv[3]
var data = process.argv[4]

reqThen(url, { method: method, data: data })
  .then(function (response) {
    console.error('RESPONSE\n========')
    console.error(util.inspect(pick(response.res, [ 'statusCode', 'statusMessage', 'headers' ]), { depth: null }))

    console.error('\nDATA\n====')
    console.log(response.data)
  })
  .catch(function (err) {
    console.error('ERROR: ' + err.message)
  })
