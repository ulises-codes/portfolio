import styles from './styles.module.scss';
import LatestPost from 'components/HomePage/LatestPost';

export default function HomeTop() {
  return (
    <div>
      <div className={styles['home-page-top--div']}>
        <div className={styles['site-greeting--div']}>
          <hgroup>
            <h1>
              <span>Greetings.</span>
              <br />
              <span>I am Ulises.</span>
            </h1>
            <h2 className='subtitle'>I'm a developer.</h2>
          </hgroup>
        </div>
        <div className={styles['top-right--div']}>
          <LatestPost />
        </div>
      </div>
      <div className='checkerboard' />
    </div>
  );
}
