import React from 'react'
import styles from './SendButton.module.css'

export default function SendButton({ sendButton, phoneNumber }) {
  return (
    <div className={styles.root}>
      <a
        target='_balnk'
        className={styles.button}
        href={`https://web.whatsapp.com/send?phone=${phoneNumber}`}
      >
        {sendButton}
      </a>
    </div>
  )
}
