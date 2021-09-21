import React from 'react'
import { useClockContext } from './context'
import { FaPlay, FaPause } from 'react-icons/fa'
import { HiRefresh } from 'react-icons/hi'

const TimerCtrl = () => {
  const {timerIdRef, 
         setIsSession, toggleIsSession,
         breakLength, setBreakLength,
         sessionLength, setSessionLength,
         currentCount, setCurrentCount,
         isPaused, setIsPaused,
        } = useClockContext()
  
  React.useEffect(()=>{
    if (!isPaused) {
      timerIdRef.current = setInterval(()=>{
      if (currentCount === 0) {
          console.log('switch timer')
          const isSession = toggleIsSession()
          isSession ? setCurrentCount(sessionLength * 60) : setCurrentCount(breakLength * 60)
        } else {
          console.log('count down')
          if (currentCount - 1 === 0) {
            document.getElementById('beep').play()
          }
          setCurrentCount(currentCount - 1)
        }       
      }, 1000)
      return () => {clearInterval(timerIdRef.current)}
    }
  })

  const toggleStartStop = () => {
    if (isPaused) {
      console.log('play')
      setIsPaused(false)      
    } else {
      console.log('pause')
      clearInterval(timerIdRef.current)
      setIsPaused(true)
    }
  }
  
  /*const play = () => {
    console.log('play')
    setIsPaused(false)
  }

  const pause = () => {
    console.log('pause')
    clearInterval(timerIdRef.current)
    setIsPaused(true)
  }*/

  const refresh = () => {
    console.log('reset')
    document.getElementById('beep').pause()
    document.getElementById('beep').currentTime = 0
    clearInterval(timerIdRef.current)
    setIsSession(true)
    setIsPaused(true)
    setBreakLength(5)
    setSessionLength(25)
    setCurrentCount(1500)
  }

  return (
    <section>
      <button id='start_stop' type='button' onClick={toggleStartStop}>{isPaused? <FaPlay /> : <FaPause />}</button>
      <button id='reset' type='button' onClick={refresh}><HiRefresh /></button>
    </section>
  )
}

export default TimerCtrl
