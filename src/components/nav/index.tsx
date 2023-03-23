import styles from './styles.module.scss'

export function Nav() {

  return (
    <div className={styles.container}>
      <div className={styles.left}>
        <a href='#'>Marlamarlamarla</a>
      </div>
      <div className={styles.right}>
        <a href='#'>Work Layers</a>
        <a href='#'>About Assets</a>
        <a href='#'>Contact Page</a>
      </div>
    </div>
  )
}