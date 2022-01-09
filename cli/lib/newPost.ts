import * as Readline from 'readline'
import * as fs from 'fs'

interface NewPost {
  title: string
  author: string
  publishDate?: string
  excerpt: string
  headerImageSrc?: string
  headerImageAlt?: string
  headerImageCaption?: string
}

const formatDate = (date: Date) => {
  return date.toLocaleDateString('en-us', {
    day: '2-digit',
    month: '2-digit',
    year: 'numeric',
  })
}

export default function createBlogPost(outDir = './blog') {
  const answers: NewPost = {
    title: '',
    author: 'Ulises Himely',
    publishDate: formatDate(new Date()),
    excerpt: '',
  }

  const readline = Readline.createInterface(
    process.stdin,
    process.stdout as unknown as NodeJS.WritableStream
  )

  readline.question('Title: ', title => {
    answers.title = title

    readline.question('Author: ', author => {
      answers.author = author

      readline.question('Publish Date: ', publishDate => {
        if (publishDate && new Date(publishDate)) {
          answers.publishDate = formatDate(new Date(publishDate))
        }

        readline.question('Excerpt: ', excerpt => {
          answers.excerpt = excerpt

          readline.question('Header Image Src: ', headerImageSrc => {
            if (headerImageSrc) {
              answers.headerImageSrc = headerImageSrc
            }

            readline.question('Header Image Alt: ', headerImageAlt => {
              if (headerImageAlt) {
                answers.headerImageAlt = headerImageAlt
              }

              readline.question(
                'Header Image Caption: ',
                headerImageCaption => {
                  if (headerImageCaption) {
                    answers.headerImageCaption = headerImageCaption
                  }

                  const filename = answers.title
                    .toLowerCase()
                    .replace(/ /g, '-')

                  let fileContents = '---\n'

                  for (const [key, value] of Object.entries(answers)) {
                    fileContents += `${key}: "${value}"\n`
                  }

                  fileContents += '---'

                  fs.writeFileSync(`${outDir}/${filename}.mdx`, fileContents)

                  readline.close()
                }
              )
            })
          })
        })
      })

      readline.write(answers.publishDate)
    })

    readline.write('Ulises Himely')
  })
}
