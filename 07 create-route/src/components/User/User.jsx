import React from 'react'
import { useParams } from 'react-router-dom'
const User = () => {
    const {id} = useParams()
  return (
    <div className='bg-gray-300 text-center text-lg'>User:{id}</div>
  )
}

export default User