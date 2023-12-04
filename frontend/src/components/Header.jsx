import React from 'react'
import { NavLink } from 'react-router-dom'

export default function Header() {

  const activeLink = "font-semibold  bg-redcolor px-2 py-1 rounded-xl";

  return (
    <div>
      <div className='flex items-center justify-end h-12 bg-bluecolor'>
        <ul className='flex gap-5 px-5 text-white'>
          <li><NavLink to="/" className={({ isActive }) => (isActive ? activeLink : "")}> Home </NavLink></li>
          <li><NavLink to="/add_word" className={({ isActive }) => (isActive ? activeLink : "")}> Add New Word </NavLink></li>
          {/* <li><NavLink to="/guide" className={({ isActive }) => (isActive ? activeLink : "")}> Guide </NavLink></li> */}
        </ul>
      </div>
    </div>
  )
}
