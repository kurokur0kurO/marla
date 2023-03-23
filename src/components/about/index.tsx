import styles from './styles.module.scss'

export function About({
  category, name
}: props) {
  return (
    <div className={styles.container}>
      <div className={styles.category}>{ category } /</div>
      <div className={styles.name}>{ name }</div>
      <div className={styles.box}></div>
    </div>
  )
}

type props = {
  category: string;
  name: string;
}