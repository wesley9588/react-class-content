import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import NoticePage from './components/NoticePage'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
  <div>
      <h2>공지사항</h2>

    <NoticePage/>
    <NoticePage/>
    <NoticePage/>
    
    
    
    </div>
    </>
  )
}

export default App
