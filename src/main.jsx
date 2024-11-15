import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import { GoogleOAuthProvider } from '@react-oauth/google'
import { App } from './app'
import './index.css'

ReactDOM.createRoot(document.querySelector('[data-js="root"]')).render(
  <React.StrictMode>
    <BrowserRouter>
      <GoogleOAuthProvider clientId="SEU_CLIENT_ID_GOOGLE">
        <App />
      </GoogleOAuthProvider>
    </BrowserRouter>
  </React.StrictMode>,
)
