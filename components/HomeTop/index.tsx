import { useContext } from 'react'
import dynamic from 'next/dynamic'
import { BoredContext } from 'components/Layout'

import styles from './styles.module.scss'

const LanguageCells = dynamic(() => import('components/Languages'))

const SnakeGame = dynamic(() => import('@ulises-codes/bite-me/offscreen'), {
  ssr: false,
})

// import { SnakeGame } from '@ulises-codes/bite-me/dist'

const Divider = dynamic(() => import('util/houdini/Divider'), {
  ssr: false,
  loading: () => <div className="divider-placeholder--div" />,
})

const Underline = dynamic(() => import('util/houdini/Underline'), {
  ssr: false,
  loading: () => (
    <h2 className="section-title--h2">I make stuff for the web with code.</h2>
  ),
})

export default function HomeTop() {
  const isBored = useContext(BoredContext)

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
        {!isBored ? (
          <LanguageCells />
        ) : (
          <div className={styles['snake-wrapper--div']}>
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
          </div>
        )}
      </div>
      <Divider />
    </div>
  )
}
