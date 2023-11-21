import React from 'react'
import useForm from '@/hooks/useForm'
import { useNavigate } from 'react-router-dom'
import { registerMovie } from '@/services/userServices'
import '@/styles/form.css'
import logo from '@/assets/react.svg'

const Dashboard = () => {
  const navigate = useNavigate()
  const datos = {
    adult: '',
    backdrop_path: '',
    genre_ids: '',
    original_language: '',
    original_title: '',
    overview: '',
    popularity: '',
    poster_path: '',
    release_date: '',
    title: '',
    video: '',
    vote_average: '',
    vote_count: '',
    texto: '',
    user: '',
    
  }

  const sendData = async (data) => {
    try {
      const response = await registerMovie(data)
      if (response.status === 201) {
        console.log('Pelicula Creada Exitosamente')
        navigate('/dashboard')
      }
    } catch (error) {
      console.error('Ocurrio un error en Register Movie', error.message)
    }
  }

  const { input, handleInputChange, handleSubmit } = useForm(sendData, datos)
  return (
    <main className='form-signin w-100 m-auto'>
      <form onSubmit={handleSubmit}>
        <img className='mb-4' src={logo} alt='' width={72} height={57} />
        <h1 className='h3 mb-3 fw-normal'>Register Movie</h1>

        <div className='form-floating'>
          <input
            type='Boolean'
            className='form-control'
            id='adult'
            name='adult'
            value={input.adult}
            onChange={handleInputChange}
            placeholder='adult'
          />
          <label htmlFor='adult'>Adult</label>
        </div>


        <div className='form-floating'>
          <input
            type='String'
            className='form-control'
            id='backdrop_path'
            name='backdrop_path'
            value={input.backdrop_path}
            onChange={handleInputChange}
            placeholder='https://url'
          />
          <label htmlFor='backdrop_path'>Imagin</label>
        </div>

        <div className='form-floating'>
          <input
            type='String'
            className='form-control'
            id='genre_ids'
            name='genre_ids'
            value={input.genre_ids}
            onChange={handleInputChange}
            placeholder='genre_ids'
          />
          <label htmlFor='genre_ids'>Geners</label>
        </div>

        <div className='form-floating'>
          <input
            type='String'
            className='form-control'
            id='original_language'
            name='original_language'
            value={input.original_language}
            onChange={handleInputChange}
            placeholder='original_language'
          />
          <label htmlFor='original_language'>Language</label>
        </div>

        <div className='form-floating'>
          <input
            type='String'
            className='form-control'
            id='original_title'
            name='original_title'
            value={input.original_title}
            onChange={handleInputChange}
            placeholder='original_title'
          />
          <label htmlFor='original_title'>Title Original</label>
        </div>

        <div className='form-floating'>
          <input
            type='String'
            className='form-control'
            id='overview'
            name='overview'
            value={input.overview}
            onChange={handleInputChange}
            placeholder='genre_ids'
          />
          <label htmlFor='overview'>Overview</label>
        </div>

        <div className='form-floating'>
          <input
            type='Number'
            className='form-control'
            id='popularity'
            name='popularity'
            value={input.popularity}
            onChange={handleInputChange}
            placeholder='popularity'
          />
          <label htmlFor='popularity'>Popularity</label>
        </div>

        <div className='form-floating'>
          <input
            type='String'
            className='form-control'
            id='poster_path'
            name='poster_path'
            value={input.poster_path}
            onChange={handleInputChange}
            placeholder='poster_path'
          />
          <label htmlFor='poster_path'>Poster</label>
        </div>

        <div className='form-floating'>
          <input
            type='Date'
            className='form-control'
            id='release_date'
            name='release_date'
            value={input.release_date}
            onChange={handleInputChange}
            placeholder='release_date'
          />
          <label htmlFor='release_date'>Date</label>
        </div>

        <div className='form-floating'>
          <input
            type='String'
            className='form-control'
            id='title'
            name='title'
            value={input.title}
            onChange={handleInputChange}
            placeholder='title'
          />
          <label htmlFor='title'>Title</label>
        </div>

        <div className='form-floating'>
          <input
            type='Boolean'
            className='form-control'
            id='video'
            name='video'
            value={input.video}
            onChange={handleInputChange}
            placeholder='video'
          />
          <label htmlFor='video'>Video</label>
        </div>

        <div className='form-floating'>
          <input
            type='Number'
            className='form-control'
            id='vote_average'
            name='vote_average'
            value={input.vote_average}
            onChange={handleInputChange}
            placeholder='vote_average'
          />
          <label htmlFor='vote_average'>Vote</label>
        </div>

        <div className='form-floating'>
          <input
            type='Number'
            className='form-control'
            id='vote_count'
            name='vote_count'
            value={input.vote_count}
            onChange={handleInputChange}
            placeholder='vote_count'
          />
          <label htmlFor='vote_count'>Vote Count</label>
        </div>

        <div className='form-floating'>
          <input
            type='String'
            className='form-control'
            id='texto'
            name='texto'
            value={input.texto}
            onChange={handleInputChange}
            placeholder='texto'
          />
          <label htmlFor='texto'>Text</label>
        </div>

        <div className='form-floating'>
          <input
            type='String'
            className='form-control'
            id='user'
            name='user'
            value={input.user}
            onChange={handleInputChange}
            placeholder='user'
          />
          <label htmlFor='user'>User</label>
        </div>

        <button className='btn btn-primary w-100 py-2' type='submit'>
          Sign Up
        </button>
        <p className='mt-5 mb-3 text-body-secondary'>© 2017–2023</p>
      </form>
    </main>
  )
}

export default Dashboard
