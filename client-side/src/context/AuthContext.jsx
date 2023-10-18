import {useState, useEffect, createContext, useContext} from 'react'
import {useNavigate} from 'react-router-dom'
import jwtDecode from "jwt-decode";

const AuthContext = createContext();

export function useAuth() {
    return useContext(AuthContext)
}

export function AuthProvider({ children }) {
    const navigate = useNavigate()
    const [user, setUser] = useState(null)

    useEffect(() => {
        const userData = getCurrentUser()
        setUser(userData)
    }, [])

    const loginSaveUser = async (data) => {
        const { token }  = data
        localStorage.setItem('userToken', JSON.stringify(token))
        setUser(jwtDecode(token))
    }

    const getCurrentUser = () => {
        try {
            const token = localStorage.getItem('userToken')
            const currentUser = jwtDecode(token)
            return currentUser
        } catch (e) {
            console.log(JSON.stringify(e))
            return null
        }
    }

    const logout = () => {
        localStorage.removeItem('userToken')
        setUser(null)
        navigate("/login")
    }

    const value = {
        user,
        loginSaveUser,
        logout,
        getCurrentUser
    }

    return (
        <AuthContext.Provider value={value}>
            { children }
        </AuthContext.Provider>
    )
}
