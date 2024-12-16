import { Link } from 'react-router-dom'

const Header = () => {
  return (
    <header className="bg-blue-500 text-white flex justify-between items-center px-2 shadow-md">
      <Link to="/">HotelApp</Link>
      <nav className="navbar">
        <ul className="nav-list flex">
          <li className="nav-item">
            <Link to="/" className="nav-link p-2 block hover:bg-blue-700">
              Home
            </Link>
          </li>
          <li className="nav-item">
            <Link
              to="/contact"
              className="nav-link p-2 block hover:bg-blue-700"
            >
              Contact
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/about" className="nav-link p-2 block hover:bg-blue-700">
              About
            </Link>
          </li>
        </ul>
      </nav>
      <div className="profile">
        <ul className="nav-list flex items-center">
          <li className="nav-item">
            <Link
              to="/auth/login"
              className="nav-link p-2 block hover:bg-blue-700"
            >
              Login
            </Link>
          </li>
          <li className="nav-item">
            <Link
              to="/auth/register"
              className="nav-link p-2 block hover:bg-blue-700"
            >
              Register
            </Link>
          </li>
        </ul>
      </div>
    </header>
  )
}

export default Header
