import React, { useContext } from 'react'
import styles from './App.module.css'
import WidgetContext from '../context/widgetContext'
import useOnClickOutside from 'use-onclickoutside'

import Header from './Header'
import ChatSection from './ChatSection'
import SendButton from './SendButton'

export default function App(props) {
  const { isOpen, handleOpen, setIsOpen } = useContext(WidgetContext)
  const ref = React.useRef(null)
  useOnClickOutside(ref, () => setIsOpen(false))
  return (
    <div className={`${styles.root} ${isOpen ? styles.open : styles.close}`}>
      <Header handleOpen={handleOpen} {...props} />
      <div ref={ref}>
        <ChatSection {...props} />
      </div>
      <SendButton {...props} />
    </div>
  )
}
