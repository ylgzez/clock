import React from 'react'
import formatTime from './format'
import { useClockContext } from './context'
import beep from './audio/beep.wav'

const Display = () => {
  const {isSession, currentCount} = useClockContext()
  
  return (
    <section className='display'>
      <div id='timer-label'>{isSession ? 'Session' : 'Break'}</div>
      <div id='time-left'>{formatTime(currentCount)}</div>
      <audio id='beep' src={beep} type='audio/wav'></audio>
    </section>
  )
}

export default Display
