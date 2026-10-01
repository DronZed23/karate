import { locations } from '../../data/content';
import { Reveal } from '../Reveal/Reveal';
import { SectionHeading } from '../SectionHeading/SectionHeading';
import styles from './Locations.module.css';

export function Locations() {
  return (
    <section className={styles.section} id="locations">
      <div className={styles.container}>
        <SectionHeading
          kicker="04 · Филиалы"
          title="Выберите ближайший зал"
          subtitle="В каждой карточке — адрес, метро и ориентир по стоимости абонемента."
        />
        <div className={styles.grid}>
          {locations.map((loc, i) => (
            <Reveal key={loc.id} delay={i * 0.1}>
              <article className={styles.card}>
                <div className={styles.metro}>{loc.metro}</div>
                <h3>{loc.name}</h3>
                <p className={styles.address}>{loc.address}</p>
                <p className={styles.price}>{loc.priceFrom}</p>
                <div className={styles.actions}>
                  <a href="#signup" className={styles.primary}>
                    Записаться
                  </a>
                  <a href={`#signup`} className={styles.secondary}>
                    Подробнее
                  </a>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
