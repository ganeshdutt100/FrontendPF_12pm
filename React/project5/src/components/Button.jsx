import React, { useContext } from 'react'
import UserContext from '../context/UserContext'


const Button = () => {
    const user = useContext(UserContext)
    return (
        <div>
            <p>name  :  {user.name}</p>
            <p>course :  {user.course}</p>
        </div>
    )
}

export default Button