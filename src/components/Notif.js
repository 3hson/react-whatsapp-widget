import React, { useContext } from 'react'
import styles from './notif.module.css'
import WidgetContext from '../context/widgetContext'

function Notif({ notif }) {
  const { isNotifOpen, setNotifOpen } = useContext(WidgetContext)
  React.useEffect(() => {
    setTimeout(() => {
      setNotifOpen(true)
    }, 500)
    setTimeout(() => {
      setNotifOpen(false)
    }, 10000)
  }, [])

  return notif ? (
    <div className={`${styles.notif} ${isNotifOpen ? styles.show : ''}`}>
      <span>{notif}</span>
    </div>
  ) : null
}

export default Notif
