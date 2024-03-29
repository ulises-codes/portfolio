import hydrate from 'next-mdx-remote/hydrate';

import Link from 'next/link';

import MyImage from 'util/MyImage';
import type { MyImageProps } from 'util/MyImage';

import styles from './styles.module.scss';

import type { BlogPostProps } from 'interfaces/blog';
import type { HTMLAttributes } from 'react';
import SocialIcons from 'components/SocialIcons';
import BlogPostSEO from 'util/SEO/BlogPostSEO';
import { AVATAR as avatar } from 'util/SEO';
import AnchorLink from 'util/AnchorLink';

export default function BlogPost({
  source,
  meta,
  slug,
  placeholderImg,
}: BlogPostProps) {
  const content = hydrate(source, {
    components: {
      img: (props: MyImageProps) => (
        <span className={styles.blogImageWrapper}>
          <MyImage
            {...props}
            className={styles.blogImage}
            objectFit='contain'
          />
        </span>
      ),
      h1: (props: HTMLAttributes<HTMLHeadingElement>) => (
        <h1 className='title' {...props} />
      ),
      h2: AnchorLink,
      a: (props: HTMLAttributes<HTMLAnchorElement>) => (
        <a
          {...props}
          className='link'
          rel='noreferrer onoopener nofollow'
          target='_blank'
        />
      ),
    },
  });

  const publishDate = new Date(meta.publishDate).toLocaleDateString(undefined, {
    month: 'short',
    day: 'numeric',
    year: 'numeric',
  });

  return (
    <>
      <BlogPostSEO title={meta.title} meta={meta} slug={slug} avatar={avatar} />
      <article className={styles.blogPost}>
        <div className='blog-heading'>
          <div className={styles.titleWrapper}>
            <h1 className='title'>{meta.title}</h1>
          </div>
          <div className='single-line-divider' />
          <div className={[styles.meta, 'blog-meta'].join(' ')}>
            <Link href='/' rel='author' className={styles.author}>
              <MyImage
                layout='intrinsic'
                src={avatar}
                width={30}
                height={30}
                alt=''
                role='presentation'
                className={styles.avatar}
              />
              <span>{meta.author}</span>
            </Link>
            <div className={styles.social}>
              <SocialIcons size={18} />
            </div>
            <time dateTime={publishDate}>{publishDate}</time>
          </div>
          <div className='single-line-divider' />
        </div>
        <figure className={styles.headerImageFigure}>
          <MyImage
            className='contained-img'
            src={meta.headerImageSrc}
            height={540}
            width={960}
            alt={meta.headerImageAlt}
            priority={true}
            placeholder='blur'
            blurDataURL={placeholderImg}
          />
          <figcaption>{meta.headerImageCaption}</figcaption>
        </figure>
        <div>
          <p>{meta.excerpt}</p>
        </div>
        <div>{content}</div>
      </article>
    </>
  );
}
