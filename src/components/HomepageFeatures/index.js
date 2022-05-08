import React from 'react';
import clsx from 'clsx';
import styles from './styles.module.css';

const FeatureList = [
  {
    title: 'Membantu anda memahami hal seputar Luxinity',
    Svg: require('@site/static/img/undraw_reading.svg').default,
    description: (
      <>
        Tujuan dari pembuatan wiki adalah untuk membantu para player baru maupun yang belum mengetahui hal tertentu yang terdapat pada gameplay.
      </>
    ),
  },
  {
    title: 'Diskusi pada discord server yang telah tersedia',
    Svg: require('@site/static/img/undraw_online_chat.svg').default,
    description: (
      <>
        Melakukan diskusi di discord server Luxinity jika artikel pada wiki belum cukup membantu. Di discord server kita, anda dapat berdiskusi dengan admin, maupun beberapa pemain senior lainnya.
      </>
    ),
  },
  {
    title: 'Bermain dengan strategi',
    Svg: require('@site/static/img/undraw_game.svg').default,
    description: (
      <>
        Bermainlah dengan strategi baru, berdasarkan hal yang sudah anda ketahui. Mengetahui hal baru dapat membantu anda meningkat strategi bermain.
      </>
    ),
  },
];

function Feature({ Svg, title, description }) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <Svg className={styles.featureSvg} role="img" />
      </div>
      <div className="text--center padding-horiz--md">
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures() {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
