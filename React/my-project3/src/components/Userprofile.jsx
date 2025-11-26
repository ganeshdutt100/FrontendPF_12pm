import React, { useEffect, useState } from 'react'

const Userprofile = ({ userId }) => {
    const [user, setUser] = useState(null)
    useEffect(() => {
        async function fetchData() {
            const res = await fetch(`https://jsonplaceholder.typicode.com/users/${userId}`)

            const data = await res.json();
            setUser(data)
        }
        fetchData();
    }, [userId])
    if (!user) return <div>loading...</div>
    return (
        <div>
            <h2>Name :  {user.name}</h2>
            <h3>Email :  {user.email}</h3>
        </div>
    )
}

export default Userprofile