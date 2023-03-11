import { Hero } from '../hero'
import { Nav } from '../nav'
import styles from './styles.module.scss'

function App() {
  return (
    <div className={styles.app}>
      <Nav />
      <Hero />
    </div>
  )
}

export default App
