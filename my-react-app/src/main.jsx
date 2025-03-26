import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import {AuthContextProvider} from "../src/contexts/AuthContext.jsx"
import{ChatContextProvider} from "../src/contexts/ChatContex.jsx"

createRoot(document.getElementById('root')).render(
  <AuthContextProvider>
  <ChatContextProvider>
  <StrictMode>
    <App />
  </StrictMode>
  </ChatContextProvider>
  </AuthContextProvider>
)
