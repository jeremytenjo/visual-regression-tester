#!/usr/bin/env node

const start = require('./actions/start')

const action = process.argv[2]

switch (action) {
  case 'start':
    start()
    break

  default:
    start()
    break
}
