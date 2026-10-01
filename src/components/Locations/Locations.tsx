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
          subtitle="В каждой карточке — фото зала, адрес, метро и ориентир по стоимости абонемента."
        />
        <div className={styles.grid}>
          {locations.map((loc, i) => (
            <Reveal key={loc.id} delay={i * 0.1}>
              <article className={styles.card}>
                <div className={styles.media}>
                  <img src={loc.image} alt={loc.imageAlt} loading="lazy" decoding="async" />
                  <span className={styles.metro}>{loc.metro}</span>
                </div>
                <div className={styles.body}>
                  <h3>{loc.name}</h3>
                  <p className={styles.address}>{loc.address}</p>
                  <p className={styles.price}>{loc.priceFrom}</p>
                  <div className={styles.actions}>
                    <a href="#signup" className={styles.primary}>
                      Записаться
                    </a>
                    <a href="#gallery" className={styles.secondary}>
                      Смотреть фото
                    </a>
                  </div>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
