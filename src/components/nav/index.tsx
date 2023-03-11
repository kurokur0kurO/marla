import styles from './styles.module.scss'

export function Nav() {

  return (
    <div className={styles.container}>
      <div className={styles.left}>
        <a href='#'>Marlamarlamarla</a>
      </div>
      <div className={styles.right}>
        <a href='#'>I didn't</a>
        <a href='#'>mean to</a>
        <a href='#'>hurt you :(</a>
      </div>
    </div>
  )
}