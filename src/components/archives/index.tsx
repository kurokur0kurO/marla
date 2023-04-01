import Archive1 from '../../assets/archives/archive-1.png'
import Archive2 from '../../assets/archives/archive-2.png'
import Arrow from '../../assets/archives/arrow.svg'
import styles from './styles.module.scss'

export function Archives() {
  return (
    <div className={styles.outer}>
      <div className={styles.container}>
        <div className={styles.header}>
          <div className={styles.text}>Archives</div>
          <img className={styles.arrow} src={Arrow} />
          <div className={styles.circles} />
        </div>
        <div className={styles.content}>
          <div className={styles.item}>
            <img src={Archive1} />
          </div>
          <div className={styles.item}>
            <img src={Archive2} />
          </div>
          <div className={styles.item}>
            <img src={Archive1} />
          </div>
          <div className={styles.item}>
            <img src={Archive2} />
          </div><div className={styles.item}>
            <img src={Archive1} />
          </div>
          <div className={styles.item}>
            <img src={Archive2} />
          </div><div className={styles.item}>
            <img src={Archive1} />
          </div>
          <div className={styles.item}>
            <img src={Archive2} />
          </div>
        </div>
      </div>
    </div>
  )
}
