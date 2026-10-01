import { galleryItems } from '../../data/content';
import shared from '../../styles/shared.module.css';
import { Reveal } from '../Reveal/Reveal';
import { SectionHeading } from '../SectionHeading/SectionHeading';
import styles from './Gallery.module.css';

export function Gallery() {
  return (
    <section className={`${shared.sectionAlt} ${styles.section}`} id="gallery">
      <div className={shared.shell}>
        <SectionHeading
          kicker="06 · Галерея"
          title="Увидеть тренировку своими глазами"
          subtitle="Реальные занятия, залы и старты учеников клуба «Сюдзин»."
          align="center"
        />
        <div className={styles.grid}>
          {galleryItems.map((item, i) => (
            <Reveal
              key={item.src}
              delay={i * 0.06}
              className={`${styles.cell} ${item.featured ? styles.featuredWrap : ''}`}
            >
              <figure className={`${styles.item} ${item.featured ? styles.featured : ''}`}>
                <img src={item.src} alt={item.alt} loading="lazy" decoding="async" />
                <figcaption>{item.caption}</figcaption>
              </figure>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
