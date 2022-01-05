import dynamic from 'next/dynamic'

import styles from '../../components/styles/snake.module.scss'

const SnakeGame = dynamic(
  () =>
    typeof window !== 'undefined' && 'OffscreenCanvas' in window
      ? import('@ulises-codes/bite-me/offscreen')
      : import('@ulises-codes/bite-me/snake'),
  { ssr: false }
)

export default function biteMe() {
  return (
    <div className="page-root">
      <div className={styles['snake-wrapper--div']}>
        {typeof window !== 'undefined' && (
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
              color: '#fafafa',
              subtitleColor: '#eaeaea',
              titleColor: '#F1DD6D',
            }}
            snakeStyle={{
              color: ['#BF43A1', '#F26463', '#F1DD6D', '#2BACB3'],
            }}
            workerPaths={{
              snakeWorker: '/snakeAssets/snakeWorker.js',
              canvasWorker: '/snakeAssets/canvasWorker.js',
            }}
          />
        )}
      </div>
    </div>
  )
}
