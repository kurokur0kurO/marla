import starSvg from '../../assets/star.svg'
import smileySvg from '../../assets/smiley.svg'
import styles from './styles.module.scss'

export function Description({ text }: props) {
  return (
    <div className={styles.container}>
      <div className={styles.top}>
        { text }
      </div>
      <div className={styles.bottom}>
        <img src={starSvg} />
        <img src={smileySvg} />
        <div className={styles.circles} />
      </div>
    </div>
  )
}

type props = {
  text: string;
}
