import { contacts } from '../../data/content';
import { useMediaQuery } from '../../hooks/useMediaQuery';
import styles from './MobileDock.module.css';

export function MobileDock() {
  const isMobile = useMediaQuery('(max-width: 767px)');
  if (!isMobile) return null;

  const primaryPhone = contacts.phones[0];

  return (
    <div className={styles.dock} role="region" aria-label="Быстрые действия">
      <a href={`tel:${primaryPhone.replace(/\D/g, '')}`} className={styles.phone}>
        Позвонить
      </a>
      <a href="#signup" className={styles.signup}>
        Записаться
      </a>
    </div>
  );
}
