import { coaches } from '../../data/content';
import shared from '../../styles/shared.module.css';
import { Reveal } from '../Reveal/Reveal';
import { SectionHeading } from '../SectionHeading/SectionHeading';
import styles from './Coaches.module.css';

export function Coaches() {
  return (
    <section className={`${shared.sectionBand} ${styles.section}`} id="coaches">
      <div className={shared.shell}>
        <SectionHeading
          kicker="05 · Состав"
          title="Тренируют профессионалы, которые умеют работать с детьми"
          subtitle="Два тренера, единая система подготовки, профильное образование и практика с 1995 года."
          align="center"
          theme="dark"
        />
        <div className={styles.stack}>
          {coaches.map((coach, i) => (
            <Reveal key={coach.name} delay={i * 0.1}>
              <article className={styles.card}>
                <div className={styles.photo}>
                  <img
                    src={coach.image}
                    alt={`${coach.name}, тренер клуба «Сюдзин»`}
                    loading="lazy"
                    width={798}
                    height={599}
                  />
                  <span className={styles.rank}>{coach.rank}</span>
                </div>
                <div className={styles.body}>
                  <h3>{coach.name}</h3>
                  <p className={styles.title}>{coach.title}</p>
                  <p className={styles.bio}>{coach.bio}</p>
                  <footer className={styles.footer}>
                    <span>{coach.branches}</span>
                    <a href={`tel:${coach.phone.replace(/\D/g, '')}`}>{coach.phone}</a>
                  </footer>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
