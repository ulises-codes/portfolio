import { useContext } from 'react'
import dynamic from 'next/dynamic'

import { BoredContext } from 'components/Layout'
import ProjectTabs from 'components/Portfolio'

const LanguageCells = dynamic(() => import('components/Languages'))
const Bio = dynamic(() => import('components/Bio'))

const Snake = dynamic(() => import('@ulises-codes/bite-me'), { ssr: false })

const IndexPage = () => {
  const isBored = useContext(BoredContext)

  return (
    <div className="page-root">
      <div className="home-page-top--div">
        <div className="site-greeting--div">
          <h1 className="site-heading--h1">
            <span>GREETINGS.</span>
            <br />
            <span>I AM ULISES.</span>
          </h1>
          <h2 className="section-title--h2">
            I make stuff for the web with code.
          </h2>
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
      <div className="checkerboard-divider--div" />
      <h2 className="section-title--h2">Some Info</h2>
      <Bio />

      <h2 className="section-title--h2">Some Stuff I've Made</h2>
      <ProjectTabs />
      <div className="checkerboard-divider--div" />
    </div>
  )
}

export default IndexPage
