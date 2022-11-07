import { BrowserRouter, Routes as Router, Route } from 'react-router-dom'

import { Home } from './pages/Home'
import { Issue } from './pages/Issue'

export function Routes() {
  return (
    <BrowserRouter>
      <Router>
        <Route path='/' element={<Home />} />
        <Route path='/issue/:id' element={<Issue />} />
      </Router>
    </BrowserRouter>
  )
}