import React from 'react'
import styles from './SendButton.module.css'

export default function SendButton({ sendButton, phoneNumber }) {
  return (
    <div className={styles.root}>
      <a
        className={styles.button}
        href={
          /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
            navigator.userAgent
          )
            ? `https://api.whatsapp.com/send?phone=${phoneNumber}`
            : `https://web.whatsapp.com/send?phone=${phoneNumber}`
        }
      >
        {sendButton}
      </a>
    </div>
  )
}
