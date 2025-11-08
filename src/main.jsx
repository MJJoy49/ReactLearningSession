import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import HookuseState from './reactConcepts/HookuseState.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>

    <HookuseState />
  </StrictMode>
)
