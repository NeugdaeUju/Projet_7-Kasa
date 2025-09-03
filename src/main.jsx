import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import Footer from './pages/Footer.jsx'
// Import des styleSheet
import './style.scss'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
    <Footer />
  </StrictMode>,
)
