import React, { useEffect, useState } from 'react'
import { useLoaderData } from 'react-router-dom'

function Github() {
    const data = useLoaderData()
//     const [data,setData] = useState([])
// useEffect(() =>{
// // fetch('https://api.instagram.com/users/ig_hunny_007')
// fetch('https://api.github.com/users/abdul-rehman07')
// .then(Response => Response.json())
// .then(data => 
//     {
//         console.log(data);
//         setData(data)
//     })
// },[])

    return (
     <div className='text-center m-4 bg-slate-900 text-3xl text-white p-3 '>Github Follower: {data.name}
     <img src={data.avatar_url} alt="Git Picture" className='p-4 w-44'/>
     </div>   


    )
}

export default Github

export const githubinfoloader = async ( ) =>{
    const Response = await fetch('https://api.github.com/users/abdul-rehman07')
    return Response.json()
}
