// import logo from './logo.svg';
// import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

import Navbar from './components/Navbar'
import HomePage from './pages/HomePage'
import SalesPage from './pages/SalesPage'
import PurchasePage from './pages/PurchasePage'
import AccountPage from './pages/AccountPage'

function App () {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route>
          <Route path='/' element={<HomePage />} />
        </Route>
        <Route>
          <Route path='/sales' element={<SalesPage />} />
        </Route>
        <Route>
          <Route path='/purchase' element={<PurchasePage />} />
        </Route>
        <Route>
          <Route path='/account' element={<AccountPage />} />
        </Route>
        <Route>
          <Route path='/accounting' element={<HomePage />} />
        </Route>
        <Route>
          <Route path='/apps' element={<HomePage />} />
        </Route>
        <Route>
          <Route path='/settings' element={<HomePage />} />
        </Route>
      </Routes>
    </Router>
  )
}

export default App
