#!/usr/bin/env node

const fs = require('fs')
const path = require('path')
const byline = require('byline')
const stream = byline(fs.createReadStream(path.join(__dirname, 'titles'), {encoding: 'utf8'}))
const args = process.argv.slice(2)
const query = args[0]

stream.on('data', (line) => {
  if (query) {
    if (line.match(query)) console.log(line)
  } else {
    console.log(line)
  }
})