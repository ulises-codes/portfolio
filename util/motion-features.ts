export default async function motionFeatures() {
  const {
    AnimationFeature,
    ExitFeature,
    GesturesFeature,
    AnimateLayoutFeature,
  } = await import('framer-motion')

  return [AnimationFeature, AnimateLayoutFeature, ExitFeature, GesturesFeature]
}
