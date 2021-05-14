export default function More() {
  const calculateYearsAsDev = () => {
    const start = new Date(2018, 9, 1)
    const now = new Date()

    const diffMilliseconds = now.getTime() - start.getTime()

    const reformatMilliSeconds = (milliseconds: number): number => {
      return Math.round(
        milliseconds / Number((1000 * 60 * 60 * 24 * 365.25).toPrecision(10))
      )
    }

    return reformatMilliSeconds(diffMilliseconds)
  }
  return (
    <>
      <p>
        I'm a second-career Web Developer. The first 11 years of my career were
        spent in the banking industry, in roles ranging from customer service in
        the Consumer, Small Business, and Commercial Banking verticals, to
        Project Manager focusing on Risk and Controls.
      </p>
      <p>
        My passion has always been technology, however, and{' '}
        {calculateYearsAsDev()} years ago I made it my mission to become a
        developer.
      </p>
      <p>
        Today I am a Web Developer, specializing in JavaScript, Python, React,
        Typescript, GraphQL, and other technologies.
      </p>
    </>
  )
}
