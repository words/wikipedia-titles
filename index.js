#!/usr/bin/env node

const fs = require('fs')
const path = require('path')
const byline = require('byline')
const stream = fs.createReadStream(path.join(__dirname, 'titles'), {encoding: 'utf8'})
module.exports = byline(stream)