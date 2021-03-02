import Image from 'next/image'

type MyImageProps = {
  src: string
  width?: number
  height?: number
  alt: string
}

export default function MyImage({
  width = 960,
  height = 540,
  ...props
}: MyImageProps) {
  return <Image width={width} height={height} objectFit="cover" {...props} />
}
