import { FaArrowDown, FaArrowUp } from "react-icons/fa"
import { useClockContext } from './context'

const SetLength = ({name}) => {
  const {isPaused, 
         breakLength, setBreakLength,
         sessionLength, setSessionLength,
         isSession,
         setCurrentCount,
        } = useClockContext()

  const decrementLength = (name) => {
      const length = name === 'break' ? breakLength : sessionLength
      if (isPaused && length > 1) {
        name === 'break' ? setBreakLength(length - 1) : setSessionLength(length - 1)
        // sync to currentCount
        const timerName = isSession ? 'session' : 'break'
        if (timerName === name) {
          setCurrentCount((length - 1) * 60)
        }
      }
  }

  const incrementLength = (name) => {
    const length = name === 'break' ? breakLength : sessionLength
    if (isPaused && length < 60) {
      name === 'break' ? setBreakLength(length + 1) : setSessionLength(length + 1)
      // sync to currentCount
      const timerName = isSession ? 'session' : 'break'
      if (timerName === name) {
        setCurrentCount((length + 1) * 60)
      }     
    }
  }

  return (
    <section id={name === 'break' ? 'break-label' : 'session-label'}>
      <h2>{`${name} Length`}</h2>
      <div className='set-length'>
        <button id={name === 'break' ? 'break-decrement' : 'session-decrement'} type='button' onClick={()=>decrementLength(name)}><FaArrowDown /></button>
        <p id={name === 'break' ? 'break-length' : 'session-length'}>{name ==='break' ? breakLength : sessionLength}</p>
        <button id={name === 'break' ? 'break-increment' : 'session-increment'} type='button' onClick={()=>incrementLength(name)}><FaArrowUp /></button>
      </div>
    </section>
  )
}

export default SetLength





