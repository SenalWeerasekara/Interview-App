import { async } from '@firebase/util'
import { useState } from 'react'
import { useAuthContext } from './useAuthContext'

export const useSignup = () => {
    const [error, setError] = useState(null)
    const [isLoading, setIsLoading] = useState(null)
    const { dispatch } = useAuthContext()

    const signup = async (email, password, username) => {
        setIsLoading(true)
        setError(null)

        const response = await fetch('/api/user/signup', {
            method : 'POST',
            headers: {'Content-type': 'application/json'},
            body: JSON.stringify({email,password,username})
        })

        const json = await response.json()
        if (!response.ok){
            setIsLoading(false)
            setError(json.error)
        }
        if(response.ok){
            //saving user to local storage
            localStorage.setItem('user', JSON.stringify(json))

            //update Auth context
            dispatch({type: 'LOGIN', payload : json})
            setIsLoading(false)
        }
    }

    return {signup, isLoading, error}
}