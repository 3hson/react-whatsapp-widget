import React, { useState } from 'react'

const Context = React.createContext({})

export function WidgetContextProvider({ children }) {
  const [isOpen, setIsOpen] = useState(false)
  const [isNotifOpen, setNotifOpen] = useState(false)

  const handleOpen = () => {
    setIsOpen((prevState) => setIsOpen(!prevState))
  }

  return (
    <Context.Provider
      value={{ isOpen, handleOpen, isNotifOpen, setNotifOpen, setIsOpen }}
    >
      {children}
    </Context.Provider>
  )
}

export default Context
