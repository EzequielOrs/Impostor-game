import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './styles/globals.css'
import { ImpostorApp } from './ImpostorApp'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <ImpostorApp />
  </StrictMode>,
)
