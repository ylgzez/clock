import React, {useState, useRef, useContext} from 'react'

const ClockContext = React.createContext()

const ClockProvider = ({children}) => {
  const [isSession, setIsSession] = useState(true)
  const [breakLength, setBreakLength] = useState(5)
  const [sessionLength, setSessionLength] = useState(25)
  const [currentCount, setCurrentCount] = useState(1500)
  const [isPaused, setIsPaused] = useState(true)
  const timerIdRef = useRef(null)

  const toggleIsSession = () => {
    const state = !isSession // To fix stale state in setInterval
    setIsSession(state)
    return state
  }
  
  return (
    <ClockContext.Provider value={{
      isSession, setIsSession, toggleIsSession,
      breakLength, setBreakLength,
      sessionLength, setSessionLength,
      currentCount, setCurrentCount,
      isPaused, setIsPaused,
      timerIdRef,
    }}>
      {children}
    </ClockContext.Provider>
  )
}

export const useClockContext = () => {
  return useContext(ClockContext)
}

export {ClockContext, ClockProvider}
