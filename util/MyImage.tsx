import Image, { ImageProps } from 'next/image'

export type MyImageProps = Readonly<ImageProps> & {
  layout?: 'fixed' | 'intrinsic' | 'responsive'
}

export default function MyImage({
  width = 960,
  height = 540,
  layout = 'responsive',
  src,
  ...props
}: MyImageProps) {
  return (
    <Image
      {...props}
      width={width}
      height={height}
      objectFit="cover"
      layout={layout}
      src={`https://res.cloudinary.com/da3fgujdy/${src}`}
    />
  )
}
