import { CLOUDINARY_PREFIX, createCloudinaryURL } from 'lib/helper/cloudinary';
import Image, { ImageProps } from 'next/image';

export interface MyImageProps extends ImageProps {
  src: string;
}

export default function MyImage({
  width = 960,
  height = 540,
  src,
  ...props
}: MyImageProps) {
  return (
    <Image
      {...props}
      width={width}
      height={height}
      src={src}
      loader={({ src: imgSrc, width: imgWidth, quality }) => {
        const customizations = ['c_', 'e_', 'f_', 'w_'];

        if (customizations.some(c => imgSrc.includes(c))) {
          return `${CLOUDINARY_PREFIX}/${imgSrc}`;
        }

        return createCloudinaryURL(imgSrc, quality || 100, imgWidth).toURL();
      }}
    />
  );
}
