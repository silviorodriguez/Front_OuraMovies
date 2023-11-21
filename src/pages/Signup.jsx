import React from 'react'
import useForm from '@/hooks/useForm'
import { useNavigate } from 'react-router-dom'
import { registerUserService } from '@/services/userServices'
import '@/styles/form.css'
import logo from '@/assets/react.svg'

const Signup = () => {
  const navigate = useNavigate()
  const datos = {
    name: '',
    email: '',
    password: ''
  }

  const sendData = async (data) => {
    try {
      const response = await registerUserService(data)
      if (response.status === 201) {
        console.log('Usuario Creado Exitosamente')
        navigate('/login')
      }
    } catch (error) {
      console.error('Ocurrio un error en Signup', error.message)
    }
  }

  const { input, handleInputChange, handleSubmit } = useForm(sendData, datos)
  return (
    <main className='form-signin w-100 m-auto'>
      <form onSubmit={handleSubmit}>
        <img className='mb-4' src={logo} alt='' width={72} height={57} />
        <h1 className='h3 mb-3 fw-normal'>Please sign up</h1>

        <div className='form-floating'>
          <input
            type='text'
            className='form-control'
            id='name'
            name='name'
            value={input.name}
            onChange={handleInputChange}
            placeholder='Name'
          />
          <label htmlFor='name'>Firs Name</label>
        </div>


        <div className='form-floating'>
          <input
            type='email'
            className='form-control'
            id='email'
            name='email'
            value={input.email}
            onChange={handleInputChange}
            placeholder='name@example.com'
          />
          <label htmlFor='email'>Email</label>
        </div>

        <div className='form-floating'>
          <input
            type='password'
            className='form-control'
            id='password'
            name='password'
            value={input.password}
            onChange={handleInputChange}
            placeholder='Password'
          />
          <label htmlFor='password'>Password</label>
        </div>

        <button className='btn btn-primary w-100 py-2' type='submit'>
          Sign Up
        </button>
        <p className='mt-5 mb-3 text-body-secondary'>© 2017–2023</p>
      </form>
    </main>
  )
}

export default Signup
