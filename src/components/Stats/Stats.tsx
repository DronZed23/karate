import { motion, useReducedMotion } from 'framer-motion';
import { stats } from '../../data/content';
import styles from './Stats.module.css';

export function Stats() {
  const reduce = useReducedMotion();

  return (
    <section className={styles.stats} aria-label="Клуб в цифрах">
      <div className={styles.track}>
        <motion.ul
          className={styles.list}
          animate={reduce ? undefined : { x: ['0%', '-50%'] }}
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
