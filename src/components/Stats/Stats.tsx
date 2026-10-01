import { motion, useReducedMotion } from 'framer-motion';
import { stats } from '../../data/content';
import { useMediaQuery } from '../../hooks/useMediaQuery';
import styles from './Stats.module.css';

export function Stats() {
  const reduce = useReducedMotion();
  const isMobile = useMediaQuery('(max-width: 767px)');

  if (isMobile || reduce) {
    return (
      <section className={styles.stats} aria-label="Клуб в цифрах">
        <div className={`${styles.track} ${styles.trackStatic}`}>
          <ul className={styles.grid}>
            {stats.map((item) => (
              <li key={item.label}>
                <strong>{item.value}</strong>
                <span>{item.label}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>
    );
  }

  return (
    <section className={styles.stats} aria-label="Клуб в цифрах">
      <div className={styles.track}>
        <motion.ul
          className={styles.list}
          animate={{ x: ['0%', '-50%'] }}
          transition={{ repeat: Infinity, duration: 28, ease: 'linear' }}
        >
          {[...stats, ...stats].map((item, i) => (
            <li key={`${item.label}-${i}`}>
              <strong>{item.value}</strong>
              <span>{item.label}</span>
            </li>
          ))}
        </motion.ul>
      </div>
    </section>
  );
}
