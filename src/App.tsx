import { Route, BrowserRouter as Router, Routes } from 'react-router-dom'
import './App.css'
import Home from './pages/customer/Home'
import About from './pages/customer/About'
import Contact from './pages/customer/Contact'
import CustomerLayout from './shared/layouts/CustomerLayout'
import AnonymousLayout from './shared/layouts/AnonymousLayout'
import Login from './pages/auth/Login'
import Register from './pages/auth/Register'

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

          <Route
            path="/auth/login"
            element={
              <AnonymousLayout>
                <Login />
              </AnonymousLayout>
            }
          />
          <Route
            path="/auth/register"
            element={
              <AnonymousLayout>
                <Register />
              </AnonymousLayout>
            }
          />
        </Routes>
      </Router>
    </div>
  )
}

export default App
