import { useState } from 'react'
import Navbar from './Components/Navbar/Navbar'

const [theme, settheme] = useState("light")

function App() {
  
  return (
    <>
      <Navbar theme={theme} settheme={settheme}/>
    </>
  )
}

export default App
