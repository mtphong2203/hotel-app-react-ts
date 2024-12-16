import { Route, BrowserRouter as Router, Routes } from 'react-router-dom'
import './App.css'
import Home from './pages/Home'
import About from './pages/About'
import Contact from './pages/Contact'
import CustomerLayout from './shared/layouts/CustomerLayout'

function App() {
  return (
    <div className="App min-h-screen flex flex-col">
      <Router>
        <Routes>
          <Route
            path="/"
            element={
              <CustomerLayout>
                <Home />
              </CustomerLayout>
            }
          />
          <Route
            path="/about"
            element={
              <CustomerLayout>
                <About />
              </CustomerLayout>
            }
          />
          <Route
            path="/contact"
            element={
              <CustomerLayout>
                <Contact />
              </CustomerLayout>
            }
          />
        </Routes>
      </Router>
    </div>
  )
}

export default App
