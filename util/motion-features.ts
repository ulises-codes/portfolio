export default async function motionFeatures() {
  const { AnimationFeature, ExitFeature, AnimateLayoutFeature } = await import(
    'framer-motion'
  )

  return [AnimationFeature, AnimateLayoutFeature, ExitFeature]
}
