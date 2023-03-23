import arrowSvg from '../../assets/arrow.svg'
import diamondSvg from '../../assets/diamond.svg'
import cursorSvg from '../../assets/cursor.svg'
import styles from './styles.module.scss'

export function Hero() {
  return (
    <div className={styles.container}>
      <div className={styles.outer}>
        <div className={styles.box}>
          <div className={styles.header}>
            Hi, I'm Marla.
          </div>
          <div className={styles.message}>
            I’m a Designer with a skills in in  UI/UX , Branding, Advertising and Copywriting. 
          </div>
          <div>
            <div className={styles.corners}></div>
            <div className={styles.corners}></div>
            <div className={styles.corners}></div>
            <div className={styles.corners}></div>
          </div>
          <div>
            <div className={styles.circles}>+</div>
            <div className={styles.circles}>+</div>
            <div className={styles.circles}>+</div>
            <div className={styles.circles}>+</div>
          </div>
          <img className={styles.arrow} src={arrowSvg} />
        </div>
        <img className={styles.diamond} src={diamondSvg} />
        <div className={styles.buttonContainer}>
          <img src={cursorSvg} />
          <button>
            Let's Talk!
          </button>
        </div>
      </div>
    </div>
  )
}