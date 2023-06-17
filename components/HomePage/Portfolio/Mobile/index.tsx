import Link from 'next/link';
import { FunctionComponent } from 'react';
import MyImage from 'util/MyImage';
import mobileApps from './mobileApps';
import styles from './styles.module.scss';

interface MobileProjectsProps {}

const MobileProjects: FunctionComponent<MobileProjectsProps> = () => {
  return (
    <section>
      <p>
        These apps were created with{' '}
        <Link
          href='https://flutter.dev'
          target='_blank'
          rel='noreferrer noopener'
          className='link'
        >
          Flutter
        </Link>
        .
      </p>
      <div className={styles.mobileApps}>
        {mobileApps.map((app) => (
          <article className={['surface', styles.mobileApp].join(' ')}>
            <Link href={app.link}>
              <span className={styles.title}>
                <MyImage
                  src={`f_auto/ulises.codes/mobile-app-thumbnails/${app.name
                    .toLowerCase()
                    .split(' ')
                    .join('_')}/icon.png`}
                  width={128}
                  height={128}
                  alt=''
                  role='presentation'
                  style={{ objectFit: 'cover', borderRadius: 8 }}
                />
                <h4>{app.name}</h4>
              </span>
            </Link>
          </article>
        ))}
      </div>
    </section>
  );
};

export default MobileProjects;
