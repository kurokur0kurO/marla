import img1 from '../../assets/ui-1.png'
import img2 from '../../assets/ui-2.png'
import { About } from '../about'
import { Description } from '../description'
import styles from './styles.module.scss'

export function Ui() {
  return (
    <div className={styles.container}>
      <div className={styles.banner}>
        <img src={img1} />
        <img className={styles.secondImage} src={img2} />
      </div>
      <div className={styles.content}>
        <About category='UI, UX' name='BSM Portfolio Dashboard' />
        <Description text='A dashboard UI redesigning project a demo solution site.' />
      </div>
    </div>
  )
}
