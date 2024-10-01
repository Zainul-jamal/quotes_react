import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
// import App from './App.jsx'
import Api from './assets/api'
import './index.css'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Api/>
  </StrictMode>,
)
