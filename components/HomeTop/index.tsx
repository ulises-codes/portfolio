import { useContext } from 'react'
import dynamic from 'next/dynamic'
import { BoredContext } from 'components/Layout'

const LanguageCells = dynamic(() => import('components/Languages'))
const Snake = dynamic(() => import('@ulises-codes/bite-me'), { ssr: false })
const Divider = dynamic(() => import('util/houdini/Divider'), {
  ssr: false,
  loading: () => <div className="checkerboard-divider--div" />,
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
      <div className="home-page-top--div">
        <div className="site-greeting--div">
          <hgroup>
            <h1 className="site-heading--h1">
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
          <div className="snake-wrapper--div">
            <Snake
              height={300}
              width={300}
              style={{ backgroundColor: '#24748F' }}
              foodImage="/snakeAssets/food.png"
              audioSrc="/snakeAssets/echo.mp3"
              dingSrc="/snakeAssets/ding.mp3"
              gameOverSrc="/snakeAssets/game-over.mp3"
              text={{ color: '#F1DD6D' }}
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
