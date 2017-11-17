#!/usr/bin/env node

const fs = require('fs')
const path = require('path')
const byline = require('byline')
const stream = byline(fs.createReadStream(path.join(__dirname, 'titles'), {encoding: 'utf8'}))
const args = require('minimist')(process.argv.slice(2))
const query = args._[0]

stream.on('data', (line) => {
  if (args.url || args.urls || args.u) line = 'https://en.wikipedia.org/wiki/' + line

  if (query) {
    const pattern = new RegExp(query, 'i')
    if (line.match(pattern)) console.log(line)
  } else {
    console.log(line)
  }
})