import React, { useContext } from 'react'
import { countercontext } from './createcontext'

function Inputfeild() {
    const { displaying } = useContext(countercontext)
    const { number } = useContext(countercontext)
    return (
        <>
            <div>{number}</div>
            <div>{displaying?.number}</div>

        </>
    )
}

export default Inputfeild
