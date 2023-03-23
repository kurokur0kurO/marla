import React from 'react'
import { Hero } from '../hero'
import { Nav } from '../nav'
import { Ui } from '../ui'
import styles from './styles.module.scss'

function App() {
  const [enabled, setEnabled] = React.useState(false);

  React.useEffect(() => {
    const password = prompt('cutest person in the world?')
    if (password === 'marlamarlamarla') {
      setEnabled(true);
    }
  }, [])

  return (
    enabled ?
    <div className={styles.app}>
      <Nav />
      <Hero />
      <Ui />
    </div> :
    <div />
  )
}

export default App
