import { createContext, useState, useEffect } from 'react'
import { jwtDecode } from 'jwt-decode'

// 1. Crear el contexto
const AuthContext = createContext()

// 2. Crear el proveedor del Contexto (provider) 
const AuthProvider = ({children}) => {
    const [isAuth, setIsAuth] = useState(false) // ¿estoy Autenticado?
    const [userPayload, setUserPayload] = useState(null) // JWT Payload decodificado 

    const login = (token) => {
        localStorage.setItem('token', token) // guardamos el token en el localStore
        const decodedPayload = jwtDecode(token)
        setUserPayload(decodedPayload)
        setIsAuth(true)
    }

    const logout = () => {
        localStorage.removeItem('token') // borro el token del localstore 
        setUserPayload(null) // Borro el payload del estado
        setIsAuth(false) // estoy deslogueado 
    }

    useEffect(() => {
       const token = localStorage.getItem('token')
       if (token) {
        const decodedPayload = jwtDecode(token)
        setUserPayload(decodedPayload)
        setIsAuth(true)
       }
    }, [])

    const values = {
        isAuth,
        userPayload,
        login,
        logout
    }
    return(
        <AuthContext.Provider value={values}>
            {children}
        </AuthContext.Provider>
    )
}

export { AuthProvider, AuthContext}
