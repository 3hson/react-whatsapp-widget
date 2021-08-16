import React, { useContext } from 'react'
import styles from './App.module.css'
import WidgetContext from '../context/widgetContext'
import useOnClickOutside from 'use-onclickoutside'

import Header from './Header'
import ChatSection from './ChatSection'
import SendButton from './SendButton'

export default function App(props) {
  const { isOpen, handleOpen, setIsOpen } = useContext(WidgetContext)
  const disableNextClick = () => {
    const listener = (evt) => {
      evt.stopPropagation()
      document.removeEventListener('click', listener, true)
    }
    document.addEventListener('click', listener, true)
  }

  const ref = React.useRef(null)
  useOnClickOutside(ref, () => {
    if (isOpen) {
      setIsOpen(false)
      disableNextClick()
    }
  })
  useOnClickOutside(ref, () => setIsOpen(false))
  return (
    <div
      ref={ref}
      className={`${styles.root} ${isOpen ? styles.open : styles.close}`}
    >
      <Header handleOpen={handleOpen} {...props} />
      <ChatSection {...props} />
      <SendButton {...props} />
    </div>
  )
}
