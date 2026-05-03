import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
// import './index.css'
import App from './App.jsx'
import Counter from './components/counter/Counter.jsx'
import BGChange from './components/bgchanger/Bgchanger.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    {/* <Counter />
    <App /> */}
    <BGChange />
  </StrictMode>,
)
