import React from "react";
import SetLength from './SetLength'
import Display from './Display'
import TimerCtrl from './TimerCtrl'

function App() {
  return (
    <main>
      <article>
        <h1>25 + 5 Clock</h1>
        <div className='set-lengths'>
          <SetLength name='break'/>
          <SetLength name='session'/>
        </div>
        <Display />
        <TimerCtrl />
      </article>
    </main> 
  )
}

export default App;
