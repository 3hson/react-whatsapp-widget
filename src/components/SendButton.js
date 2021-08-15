import React from 'react'
import styles from './SendButton.module.css'

export default function SendButton({
  sendButton,
  phoneNumber = '989937789718'
}) {
  return (
    <div className={styles.root}>
      <a
        target='_balnk'
        className={styles.button}
        href={`https://wa.me/${phoneNumber}`}
      >
        {sendButton}
      </a>
    </div>
  )
}
