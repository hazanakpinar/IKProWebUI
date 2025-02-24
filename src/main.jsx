import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import { AuthProvider } from './context/AuthContext.jsx'
import { DataProvider } from './context/DataContext.jsx'
import './index.css'
import { BrowserRouter } from 'react-router-dom'


createRoot(document.getElementById('root')).render(
  <BrowserRouter>
  <AuthProvider>
    <DataProvider>
      <App />
    </DataProvider>
    </AuthProvider>
  </BrowserRouter>
)