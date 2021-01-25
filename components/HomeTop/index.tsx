import { useContext, useEffect, useState } from 'react'

import { BoredContext } from 'components/Layout'

import styles from './styles.module.scss'
import type { GameProps } from '@ulises-codes/bite-me/dist/bite-me'

import LanguageCells from 'components/Languages'
import Divider from 'util/houdini/Divider'
import Underline from 'util/houdini/Underline'

export default function HomeTop() {
  const isBored = useContext(BoredContext)

  const [SnakeGame, setSnakeGame] = useState<
    (props: GameProps) => JSX.Element
  >()

  useEffect(() => {
    async function importGame() {
      if (isBored && !SnakeGame) {
        if ('OffscreenCanvas' in window) {
          const game = await import('@ulises-codes/bite-me/offscreen').then(
            mod => mod.default
          )
          setSnakeGame(
            (() => game as unknown) as (props: GameProps) => JSX.Element
          )
        } else {
          const game = await import('@ulises-codes/bite-me/snake').then(
            mod => mod.default
          )
          setSnakeGame(
            (() => game as unknown) as (props: GameProps) => JSX.Element
          )
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
              <span>GREETINGS.</span>
              <br />
              <span>I AM ULISES.</span>
            </h1>
            <Underline>
              <h2 className="section-title--h2">
                I make stuff for the web with code.
              </h2>
            </Underline>
          </hgroup>
        </div>
        <div className={styles['top-right--div']}>
          {!isBored ? (
            <LanguageCells />
          ) : (
            <div className={styles['snake-wrapper--div']}>
              {SnakeGame && (
                <SnakeGame
                  style={{ backgroundColor: '#24748F' }}
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
                />
              )}
            </div>
          )}
        </div>
      </div>
      <Divider />
    </div>
  )
}
