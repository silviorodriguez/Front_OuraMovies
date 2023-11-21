import axios from 'axios'

const BASE_URL = 'https://long-ruby-colt-hat.cyclic.app'
// sis existe un token lo inyecta en la cabecera de la peticion 
axios.interceptors.request.use(
    (config) => {
        const token = localStorage.getItem('token')
        if (token) {
            config.headers.Authorization = `Bearer ${token}`
        }
        return config
    },
    (error) => {
        return Promise.reject(error)
    }
)

const registerUserService = (data) => axios.post(`${BASE_URL}/api/users`, data)
const loginUserService = (data) => axios.post(`${BASE_URL}/api/users/login`, data)
const getSingleUserService = (id) =>axios.get(`${BASE_URL}/api/movies/${id}`)
const getMovies = () =>axios.get(`${BASE_URL}/api/movies/`)
const registerMovie = (data) => axios.post(`${BASE_URL}/api/movies/register`, data)

export { registerUserService, loginUserService, getSingleUserService, getMovies, registerMovie }
