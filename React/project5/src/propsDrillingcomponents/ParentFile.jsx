import React from 'react'
import ChildFile from './ChildFile'

const ParentFile = ({ username }) => {
    return (
        // <div>user: {username}</div>
        <ChildFile username={username} />
    )
}

export default ParentFile