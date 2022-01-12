#!/usr/bin/env node
import newBlogPost from './lib/newPost'

const args = process.argv.slice(2)

switch (args[0]) {
  case 'create':
    newBlogPost(args[1])

    break
}
