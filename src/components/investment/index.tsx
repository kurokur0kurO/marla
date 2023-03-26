import img1 from '../../assets/ui-1.png'
import img2 from '../../assets/ui-2.png'
import { About } from '../about'
import { Description } from '../description'
import styles from './styles.module.scss'

export function Investment() {
  return (
    <div className={styles.container}>
      <div className={styles.banner}>
        <img src={img1} />
        <img className={styles.secondImage} src={img2} />
      </div>
      <div className={styles.content}>
        <About category='Logo, Website Design, Branding' name='Investment Platform' />
        <Description text='Working on a Wireframe and corporate branding not provided, UI designs are suggested.' />
      </div>
    </div>
  )
}
