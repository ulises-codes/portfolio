import Head from 'next/head';
import type { ReactNode } from 'react';

type SEOProps = {
  title?: string;
  children?: ReactNode;
};

export default function SEO({
  title = 'Developer and Human Being',
  children,
}: SEOProps) {
  return (
    <Head key='seo-tags'>
      <title>Ulises Himely | {title}</title>
      {children ? (
        children
      ) : (
        <>
          <meta
            name='description'
            content='Ulises Himely is a Web Developer, specializing in React, Typescript, GraphQL, and other technologies. He is also an avid human being. There is no proof that aliens are living among us in disguise.'
          />
          <meta property='og:title' content='Ulises Himely | Web Developer' />
          <meta
            property='og:image'
            content='https://res.cloudinary.com/da3fgujdy/image/upload/c_fill,g_north_west,h_630,q_100,w_1200/v1610482183/ulises.codes/portfolio-screenshot_uz1fon.png'
          />
          <meta property='og:image:width' content='1200' />
          <meta property='og:image:height' content='630' />
          <meta property='og:url' content='https://ulises.codes/blog' />
          <meta property='og:type' content='website' />
          <meta name='twitter:card' content='summary_large_image' />
          <meta name='twitter:site' content='@uliseshimely' />
          <meta name='twitter:title' content='Ulises Himely | Web Developer' />
          <meta
            name='twitter:description'
            content='Ulises Himely is a Web Developer, specializing in React, Typescript, GraphQL, and other technologies. He is also an avid human being. There is no proof that aliens are living among us in disguise.'
          />
          <meta
            name='twitter:image'
            content='https://res.cloudinary.com/da3fgujdy/image/upload/c_fill,g_north_west,h_630,q_100,w_1200/v1610482183/ulises.codes/portfolio-screenshot_uz1fon.png'
          />
          <meta
            name='twitter:image:alt'
            content='Screenshot of website ulises.codes'
          />
        </>
      )}
    </Head>
  );
}

export const AVATAR =
  'e_improve/v1613346960/ulises.codes/avatars/IMG_6191_ywrvt1.jpg';
