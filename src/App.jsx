import { useState } from 'react'

import './App.css'

function App () {
  const [ready, setReady] = useState(false)

  return (
    <main className="h-screen w-full flex flex-col items-center p-10 md:px-20 md:py-10">
      <div className="flex flex-col justify-items-center gap-4">
        <div className="text-center">
          <label htmlFor="ready">Ready? </label>
          <input type="checkbox" id="ready" name="ready" onChange={() => setReady(!ready)} />
        </div>
        <div className="text-2xl text-center">{ready ? '👍' : '👎'}</div>
        <p>Delete everything from <code className="code">&lt;main</code> and <code>&lt;/main&gt;</code> to get started</p>
      </div>

      <article className="prose mt-10">
        <h1>Basic Vite React Starter with JavaScript</h1>
        <p>Includes React, Vite, Tailwind CSS, and Headless UI.</p>
        <h2>Getting Started</h2>
        <ol>
          <li>Clone the repository: <code>git clone git@github.com:FranCarstens/vite-react-starter.git my_app</code></li>
          <li>Install dependencies: <code>npm i</code></li>
          <li>Start the development server: <code>npm run dev</code></li>
        </ol>
        <h2>Build for Production</h2>
        <p><code>npm run build</code></p>
        <h2>Docs and Resources</h2>
        <table>
          <thead>
            <tr>
              <th>Library</th>
              <th>Docs</th>
              <th>Repo</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Vite</td>
              <td><a href="https://vitejs.dev/guide">https://vitejs.dev/guide</a></td>
              <td><a href="https://github.com/vitejs/vite">https://github.com/vitejs/vite</a></td>
            </tr>
            <tr>
              <td>React</td>
              <td><a href="https://react.dev/learn">https://react.dev/learn</a></td>
              <td><a href="https://github.com/facebook/react">https://github.com/facebook/react</a></td>
            </tr>
            <tr>
              <td>Tailwind CSS</td>
              <td><a href="https://tailwindcss.com/docs/utility-first">https://tailwindcss.com/docs/utility-first</a></td>
              <td><a href="https://github.com/tailwindlabs/tailwindcss">https://github.com/tailwindlabs/tailwindcss</a></td>
            </tr>
            <tr>
              <td>Headless UI</td>
              <td><a href="https://headlessui.com/">https://headlessui.com/</a></td>
              <td><a href="https://github.com/tailwindlabs/headlessui">https://github.com/tailwindlabs/headlessui</a></td>
            </tr>
          </tbody>
        </table>
      </article>
    </main>
  )
}

export default App
