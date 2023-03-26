import img1 from '../../assets/ui-1.png'
import img2 from '../../assets/ui-2.png'
import { About } from '../about'
import { Description } from '../description'
import styles from './styles.module.scss'

export function Toro() {
  return (
    <div className={styles.container}>
      <div className={styles.banner}>
        <img src={img1} />
        <img className={styles.secondImage} src={img2} />
      </div>
      <div className={styles.content}>
        <About category='Website Design, UI, UX, Branding, Iconography' name='Toro Cloud' />
        <Description text='Various visual design requirements in 6+ years as in-house designer.' />
      </div>
    </div>
  )
}
