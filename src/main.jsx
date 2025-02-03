import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import '../src/i18.js'
import { AuthProvider } from "./context/AuthContext";

createRoot(document.getElementById('root')).render(
  <StrictMode  >
    <AuthProvider>
      <App />
    </AuthProvider>
  </StrictMode>
)
