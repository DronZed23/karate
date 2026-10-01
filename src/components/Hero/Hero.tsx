import { motion, useReducedMotion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';
import { badges } from '../../data/content';
import { LeadForm } from '../LeadForm/LeadForm';
import { Reveal } from '../Reveal/Reveal';
import styles from './Hero.module.css';

export function Hero() {
  const ref = useRef<HTMLElement>(null);
  const reduce = useReducedMotion();
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start start', 'end start'] });
  const bgY = useTransform(scrollYProgress, [0, 1], ['0%', '18%']);
  const contentY = useTransform(scrollYProgress, [0, 1], ['0%', '8%']);

  return (
    <section ref={ref} className={styles.hero} id="about">
      <motion.div className={styles.bg} style={reduce ? undefined : { y: bgY }} aria-hidden>
        <div className={styles.bgImage} />
        <div className={styles.bgMesh} />
        <div className={styles.bgGrain} />
      </motion.div>

      <motion.div className={styles.inner} style={reduce ? undefined : { y: contentY }}>
        <div className={styles.copy}>
          <Reveal>
            <p className={styles.eyebrow}>
              <span className={styles.pulse} />
              Спортивный клуб · Москва · с 2001
            </p>
          </Reveal>

          <Reveal delay={0.08}>
            <h1 className={styles.title}>
              Каратэ для детей,
              <em> где растёт характер</em>
            </h1>
          </Reveal>

          <Reveal delay={0.14}>
            <p className={styles.lead}>
              Клуб «Сюдзин» — профессиональные тренеры, система WKF и три зала у метро. Первое
              занятие — бесплатно.
            </p>
          </Reveal>

          <Reveal delay={0.2}>
            <div className={styles.badges}>
              {badges.map((b, i) => (
                <motion.span
                  key={b}
                  className={styles.badge}
                  initial={reduce ? false : { opacity: 0, scale: 0.92 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.35 + i * 0.07, duration: 0.5 }}
                >
                  {b}
                </motion.span>
              ))}
            </div>
          </Reveal>

          <Reveal delay={0.26}>
            <div className={styles.heroActions}>
              <a href="#signup" className={styles.primaryBtn}>
                Записаться на пробное
              </a>
              <a href="#locations" className={styles.ghostBtn}>
                Выбрать филиал
              </a>
            </div>
          </Reveal>
        </div>

        <Reveal className={styles.formWrap} delay={0.15} y={40}>
          <LeadForm variant="hero" />
        </Reveal>
      </motion.div>

      <div className={styles.scrollHint} aria-hidden>
        <motion.span
          animate={reduce ? undefined : { y: [0, 8, 0] }}
          transition={{ repeat: Infinity, duration: 2.2, ease: 'easeInOut' }}
        />
      </div>
    </section>
  );
}
