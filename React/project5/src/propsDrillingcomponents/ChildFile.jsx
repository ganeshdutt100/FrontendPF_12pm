import React from 'react'
import Button from './Button'

const ChildFile = ({ username }) => {
    return (
        // <div> user: {username}</div>
        <Button username={username} />
    )
}

export default ChildFile