#!/usr/bin/env node
import newBlogPost from './lib/newPost'

const args = process.argv.slice(2)

if (args[0] === 'post' && !!args[1]) {
  newBlogPost(args[1])
}

