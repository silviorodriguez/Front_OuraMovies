import { NavLink } from 'react-router-dom'
import React from 'react'
import { useAuthContext } from '@/hooks/useAuthContext'
import './header.scss'

const Header = () => {

  const { isAuth, logout } = useAuthContext()

  const LinkIsActive = (isActive) => {
    <NavLink to='/secret' className={({ isActive }) => LinkIsActive(isActive)}>Secret</NavLink>
    return isActive ? 'header__item-link header__item-link--is--active' : 'header__item-link'
  }
  return (
    <nav className='header'>
      <NavLink to='/' className='header__logo'>OuraMovies</NavLink>
      <ul className='header__nav-list'>
        <li className='header__list-item'>
          <NavLink to='/' className={({ isActive }) => LinkIsActive(isActive)}>Home</NavLink>
        </li>
        <li className='header__list-item'>
          <NavLink to='/dashboard' className={({ isActive }) => LinkIsActive(isActive)}>Movies</NavLink>
        </li>
        {isAuth
          ? (
            <>
                 <li className='header__list-item'>
          <NavLink
          to='/secret'
          className={({ isActive }) => LinkIsActive(isActive)}>Secret</NavLink>
        </li>

        <li className='header__list-item'>
          <NavLink to='/' 
          className='header__item-link'
          onClick={logout}>
          Logout
          </NavLink>
        </li>
            </>
          )
          : (
            <>
        <li className='header__list-item'>
          <NavLink to='/login' className={({ isActive }) => LinkIsActive(isActive)}>Login</NavLink>
        </li>
        <li className='header__list-item'>
          <NavLink to='/signup' className={({ isActive }) => LinkIsActive(isActive)}>Signup</NavLink>
        </li>
            </>
          )
        }
       
      </ul>
    </nav>
  )
}

export default Header
