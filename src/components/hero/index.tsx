import React from 'react'
import arrowSvg from '../../assets/arrow.svg'
import diamondSvg from '../../assets/diamond.svg'
import cursorSvg from '../../assets/cursor.svg'
import styles from './styles.module.scss'

export function Hero() {
  const [btnText, setBtnText] = React.useState('I hope you forgive me')
  const changeBtnText = () => {
    setBtnText('ilysm :\'(')
  }

  return (
    <div className={styles.container}>
      <div className={styles.dash}></div>
      <div className={styles.outer}>
        <div className={styles.box}>
          <div className={styles.header}>
            Hi, Marla.
          </div>
          <div className={styles.message}>
            Napaka insensitive ko. Palagi kitang nasasaktan. I'm sorry.
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
          <button onMouseEnter={changeBtnText}>
            { btnText }
          </button>
        </div>
      </div>
    </div>
  )
}