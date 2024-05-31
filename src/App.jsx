import { useState } from 'react'
import './App.css'

function App () {
  const [ready, setReady] = useState(false)

  return (
    <main className="h-screen w-full flex items-center justify-center">
      <div className="flex flex-col justify-items-center gap-4">
        <h1 className="text-2xl text-center">Start here</h1>
        <div className="text-center">
          <label htmlFor="ready">Ready? </label>
          <input type="checkbox" id="ready" name="ready" onChange={() => setReady(!ready)} />
        </div>
        <div className="text-2xl text-center">{ready ? '👍' : '👎'}</div>
      </div>
    </main>
  )
}

export default App
