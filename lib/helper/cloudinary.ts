import { CloudConfig, CloudinaryImage, URLConfig } from '@cloudinary/url-gen';
import { Resize } from '@cloudinary/url-gen/actions';

const ratios = [
  { w: 696, h: 391.5 },
  { w: 696, h: 522 },
  { w: 696, h: 696 },
];

export const CLOUDINARY_PREFIX = 'https://res.cloudinary.com/da3fgujdy';

export const constructURLPrefix = (w: number, h: number, suffix: string) => {
  return `"https://res.cloudinary.com/da3fgujdy/c_fit,h_${h},w_${w}/${suffix}"`;
};

export const generateURLs = (url: string) => {
  return ratios.map(({ w, h }) => constructURLPrefix(w, h, url));
};

export const constructMetaURL = (w: number, h: number, suffix: string) => {
  return `https://res.cloudinary.com/da3fgujdy/c_fit,h_${h},w_${w}/${suffix}`;
};

const cloudConfig = new CloudConfig({
  cloudName: 'da3fgujdy',
});

const urlConfig = new URLConfig({ secure: true });

export const createCloudinaryURL = (
  src: string,
  quality: number,
  width: number
) => {
  return new CloudinaryImage(src, cloudConfig, urlConfig)
    .quality(quality)
    .resize(Resize.scale().width(width));
};
