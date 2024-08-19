import React from 'react'
import { useParams } from 'react-router-dom'


function User() {
    const {userid} = useParams()
    return (
        <div className='text-center text-white p-4 text-3xl bg-yellow-600'>User :{userid}</div>
    )
}

export default User
