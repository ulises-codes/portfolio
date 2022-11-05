import type { PageProps } from 'interfaces';
import dynamic from 'next/dynamic';
import Head from 'next/head';
import type { GetStaticProps } from 'next';
import { createContext } from 'react';
import { BlogPostInfo } from 'interfaces/blog';
import { imgToBase64 } from 'lib/helper/imgToBase64';

const HomePageSections = dynamic(() => import('components/HomePage'));

export const LatestPostContext = createContext<BlogPostInfo | undefined>(
  undefined
);

export default function IndexPage({
  latestPost,
  theme,
  postPlaceholderImg,
}: PageProps) {
  return (
    <>
      <Head key='home-page-tags'>
        <link
          href={`/fonts/${
            theme.titleFont ? theme.titleFont.toLowerCase() : 'bungee-shade'
          }.woff2`}
          rel='preload'
          as='font'
          type='font/woff2'
          crossOrigin='anonymous'
        />
      </Head>
      <LatestPostContext.Provider
        value={{ ...latestPost, placeholderImg: postPlaceholderImg }}
      >
        <HomePageSections />
      </LatestPostContext.Provider>
    </>
  );
}

export const getStaticProps: GetStaticProps = async () => {
  const { getLatestPost } = await import('lib/markdown/getPosts');

  const latestPost = getLatestPost();

  const postPlaceholderImg = await imgToBase64(
    `${process.env.CLOUDINARY_PREFIX}f_auto,e_blur:100,w_10/${latestPost.meta.headerImageSrc}`
  );

  return {
    props: {
      latestPost,
      postPlaceholderImg,
    },
    revalidate: 1,
  };
};
