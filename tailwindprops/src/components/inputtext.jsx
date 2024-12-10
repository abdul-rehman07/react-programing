import React, { useContext, useState } from 'react'
import { countercontext } from './createcontext'




function Inputtext() {
    const [number, setnumber] = useState(0)

    const { setdisplay } = useContext(countercontext)

    const display = (e) => {
        e.preventDefault()
        setdisplay({ number })
    }

    return (
        <>
            <div>textvalue</div>
            <input type="text" value={number} placeholder='text' onChange={e => setnumber(e.target.value)}></input>
            <button onClick={display}>press</button>
        </>
    )
}

export default Inputtext
