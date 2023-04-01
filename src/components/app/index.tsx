import React from 'react'
import { Archives } from '../archives'
import { Branding } from '../branding'
import { Hero } from '../hero'
import { Investment } from '../investment'
import { Nav } from '../nav'
import { Software } from '../software'
import { Toro } from '../toro'
import { Ui } from '../ui'
import styles from './styles.module.scss'

function App() {
  const [enabled, setEnabled] = React.useState(localStorage.getItem('pwd') === '1');

  React.useEffect(() => {
    if (enabled) return;

    const password = prompt('cutest person in the world?')
    if (password === 'marlamarlamarla') {
      setEnabled(true);
      localStorage.setItem('pwd', '1');
    }
  }, [enabled])

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
      <Archives />
    </div> :
    <div />
  )
}

export default App
