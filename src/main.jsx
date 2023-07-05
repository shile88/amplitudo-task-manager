import App from './App.jsx'
import React from 'react'
import ReactDOM from 'react-dom/client'
import { TaskProvider } from './components/context/TaskContext.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <TaskProvider>
      <App />
    </TaskProvider>
  </React.StrictMode>,
)
