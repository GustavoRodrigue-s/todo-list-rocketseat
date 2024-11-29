import rocket from '../../assets/rocket.svg'

import styles from './styles.module.css'

export const Header: React.FC = () => (
  <header className={styles.header}>
    <img src={rocket} />
    <span>
      <strong>to</strong>
      <strong>do</strong>
    </span>
  </header>
)