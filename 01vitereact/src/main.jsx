import React from 'react'
import ReactDOM from 'react-dom/client'

import Redirection from './redirection'
import App from './App'

function MyApp() {
  return (
    <div>
      <h1>My App !</h1>
    </div>
  )
}

const reactElement = React.createElement(
  'a',
  {
    'href' : 'eee.google.com', 'target' : '_blank'
  },
  'Click here to google !'
)

ReactDOM.createRoot(document.getElementById('root')).render(
  <App />
)
