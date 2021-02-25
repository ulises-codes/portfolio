export default async function motionFeatures() {
  const { AnimationFeature, ExitFeature, GesturesFeature } = await import(
    'framer-motion'
  )

  return [AnimationFeature, ExitFeature, GesturesFeature]
}
