import { Hero } from '../hero'
import { Nav } from '../nav'
import { Ui } from '../ui'
import styles from './styles.module.scss'

function App() {
  return (
    <div className={styles.app}>
      <Nav />
      <Hero />
      <Ui />
    </div>
  )
}

export default App
