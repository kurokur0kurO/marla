import React from 'react'
import { Branding } from '../branding'
import { Hero } from '../hero'
import { Investment } from '../investment'
import { Nav } from '../nav'
import { Software } from '../software'
import { Toro } from '../toro'
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
      <Branding />
      <Software />
      <Investment />
      <Toro />
    </div> :
    <div />
  )
}

export default App
