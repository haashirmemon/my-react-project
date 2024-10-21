import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import UserContextProvider from './components/context/usercontext.jsx'
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <UserContextProvider>

      < App />

    </UserContextProvider>
  </StrictMode>,
)
