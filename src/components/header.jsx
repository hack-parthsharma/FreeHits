import React from 'react'
import freehitlogo from '../images/freehitLogo.png'

const Header = ({ searchTerm, setSearchTerm }) => {
  return (
    <header className="title-bar" name="Top">
      <h1>
        Feed Freebies
      </h1>
      <ul className="hnav-links">
        <li>
          <input
            type="text"
            placeholder=" Search for a tool or category..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </li>
      </ul>
    </header>
  )
}

export default Header
