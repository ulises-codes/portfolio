import { useContext, useEffect, useState } from 'react'

import { BoredContext } from 'components/Layout'

import styles from './styles.module.scss'
import type {
  GameProps,
  OffscreenGameProps,
} from '@ulises-codes/bite-me/dist/types'

import dynamic from 'next/dynamic'

import LanguageCells from 'components/HomePage/Languages'
import Divider from 'util/houdini/Divider'
import Underline from 'util/houdini/Underline'

export default function HomeTop() {
  const isBored = useContext(BoredContext)

  const [SnakeGame, setSnakeGame] = useState<any>()

  useEffect(() => {
    async function importGame() {
      if (isBored && !SnakeGame) {
        if ('OffscreenCanvas' in window) {
          const Game = dynamic<OffscreenGameProps>(
            () => import('@ulises-codes/bite-me/offscreen')
          )

          setSnakeGame(() => Game)
        } else {
          const Game = dynamic<GameProps>(
            () => import('@ulises-codes/bite-me/snake')
          )

          setSnakeGame(() => Game)
        }
      }
    }

    importGame()
  }, [isBored])

  return (
    <div>
      <div className={styles['home-page-top--div']}>
        <div className={styles['site-greeting--div']}>
          <hgroup>
            <h1>
              <span>Greetings.</span>
              <br />
              <span>I am Ulises.</span>
            </h1>
            <Underline>
              <h2 className="subtitle">I'm a web developer.</h2>
            </Underline>
          </hgroup>
        </div>
        <div className={styles['top-right--div']}>
          {isBored && SnakeGame ? (
            <div className={styles['snake-wrapper--div']}>
              <SnakeGame
                style={{
                  backgroundColor: getComputedStyle(
                    document.querySelector('body') as HTMLBodyElement
                  ).getPropertyValue('--game-background'),
                }}
                food={{ src: '/snakeAssets/food.png' }}
                audioSrc="/snakeAssets/echo.mp3"
                dingSrc="/snakeAssets/ding.mp3"
                gameOverSrc="/snakeAssets/game-over.mp3"
                text={{
                  color: '#2a2a2a',
                  subtitleColor: '#fafafa',
                  titleColor: '#F1DD6D',
                }}
                snakeStyle={{
                  color: ['#BF43A1', '#F26463', '#F1DD6D', '#2BACB3'],
                }}
                publicPath="/snakeAssets/worker.js"
              />
            </div>
          ) : (
            <LanguageCells />
          )}
        </div>
      </div>
      <Divider />
    </div>
  )
}
