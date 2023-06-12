import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { BrowserRouter as Router, Route, Routes } from "react-router-dom"
import Login from './Pages/Login/Login'
import SignUp from './Pages/SignUp/SignUp'

function App() {
  const [count, setCount] = useState(0)

  return (
    <Router>
      <Routes>
        <Route element={<Login />} path='/login'></Route>
        <Route element={<SignUp />} path='/sign-up'></Route>

      </Routes>
    </Router>
  )
}

export default App
