import { events } from '../../data/content';
import { Reveal } from '../Reveal/Reveal';
import { SectionHeading } from '../SectionHeading/SectionHeading';
import styles from './Events.module.css';

export function Events() {
  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <SectionHeading
          kicker="07 · Календарь"
          title="Соревнования, аттестации, рост"
          subtitle="Клуб живёт спортивной жизнью — от сборов до международных стартов."
        />
        <ul className={styles.list}>
          {events.map((ev, i) => (
            <Reveal key={ev.title} delay={i * 0.08}>
              <li className={styles.listItem}>
                <div className={styles.thumb}>
                  <img src={ev.image} alt={ev.imageAlt} loading="lazy" decoding="async" />
                </div>
                <div className={styles.copy}>
                  <time className={styles.date} dateTime={ev.date}>
                    {ev.date}
                  </time>
                  <span className={styles.title}>{ev.title}</span>
                </div>
              </li>
            </Reveal>
          ))}
        </ul>
      </div>
    </section>
  );
}
