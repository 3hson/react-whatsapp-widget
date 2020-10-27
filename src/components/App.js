import React from 'react'
import styles from './App.module.css'

export default function App({
  company_name = 'Ann0nIT',
  txt_reply_time = 'Typically replies within a day',
  message = `Hello! 👋🏼
  What can we do for you?`,
  txt_button = 'Send'
}) {
  return <div className={styles.root}>content</div>
}
