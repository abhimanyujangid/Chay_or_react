import React from 'react'
import { useState } from 'react'
import { useEffect } from 'react'

const Github = () => {
const [data,setData] = useState([])
    useEffect(() => {
      fetch('https://api.github.com/users/abhimanyujangid')
      .then(res => res.json())//covert to json data
      .then(data => {
        console.log(data);
        setData(data)
      })
    }, [])
    
  return (
    <div  className=' text-center m- bg-gray-600 text-white p-4 text-3xl' >GitHub follower: {data.followers} , Name: {data.name}
    <img src={data.avatar_url} alt="Git profile" width={300}/>
    </div>

  )
}

export default Github