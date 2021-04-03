import Image, { ImageProps } from 'next/image'

export type MyImageProps = Partial<ImageProps> & {
  layout?: 'fixed' | 'intrinsic' | 'responsive'
}

export default function MyImage({
  width = 960,
  height = 540,
  layout = 'responsive',
  objectFit = 'cover',
  src,
  ...props
}: MyImageProps) {
  return (
    <Image
      {...props}
      width={width}
      height={height}
      objectFit={objectFit}
      layout={layout}
      src={`https://res.cloudinary.com/da3fgujdy/${src}`}
    />
  )
}
