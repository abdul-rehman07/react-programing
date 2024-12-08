import React, { useContext } from 'react'
import { countercontext } from './createcontext'

function Inputfeild() {
    // const numbercount = useContext(countercontext)
    const { displaying } = useContext(countercontext)
    return (
        <>
            {/* <div>{numbercount}</div> */}
            <div>{displaying.number}</div>

        </>
    )
}

export default Inputfeild
