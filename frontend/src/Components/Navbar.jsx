import React from 'react'
import { Link } from 'react-router-dom'
const Navbar = () => {
  return (
    <header>
        <div className='container'>
            <Link to="/">Your List</Link>
        </div>
    </header>
  )
}

export default Navbar