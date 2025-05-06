import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import HeaderMain from './copmonents/header-main-page'
import Main from './copmonents/main-page'
import FooterMain from './copmonents/footer-main-page'
import './App.css'

function App() {
  return (
    <div>
      <div className="container">
        <HeaderMain />
        <Main />
        <FooterMain />
      </div>
    </div>
  )
}

export default App
