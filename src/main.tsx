import React from 'react'
import ReactDOM from 'react-dom/client'
import { LoggedOut } from 'core/Templates';

import App from './App.tsx'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <LoggedOut>
      <App />
    </LoggedOut>
  </React.StrictMode>,
)
