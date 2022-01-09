#!/usr/bin/env node
'use strict'
var __importDefault =
  (this && this.__importDefault) ||
  function (mod) {
    return mod && mod.__esModule ? mod : { default: mod }
  }

exports.__esModule = true
var newPost_1 = __importDefault(require('./lib/newPost'))
var args = process.argv.slice(2)
if (args[0] === 'post' && !!args[1]) {
  ;(0, newPost_1['default'])(args[1])
}
