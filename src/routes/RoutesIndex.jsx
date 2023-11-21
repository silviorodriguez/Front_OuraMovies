import React from 'react'
import { Routes, Route, Navigate } from 'react-router-dom'
import { useAuthContext} from '@/hooks/useAuthContext'
import { Home, Dashboard, Login, Secret, Signup, Details } from '@/pages'

const RoutesIndex = () => {
  const { isAuth } = useAuthContext()
  return (
    <Routes>
      <Route path='/' element={<Home />} />
      <Route
       path='/dashboard'
       element={
        isAuth
          ?<Dashboard />
          : <Navigate to='/login' replace />
      }
      />
      <Route path='/login' element={<Login />} />
      <Route path='/secret' element={<Secret />} />
      <Route path='/signup' element={<Signup />} />
      <Route path='/details/:title' element={<Details />} />
    </Routes>
  )
}

export default RoutesIndex
