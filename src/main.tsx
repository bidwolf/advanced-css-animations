import React from 'react'
import ReactDOM from 'react-dom/client'
import '@styles/index.scss'
import Router from './pages/router.tsx'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <Router/>
  </React.StrictMode>,
)
