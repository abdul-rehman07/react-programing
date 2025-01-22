import React from 'react'

function UserInput() {
    return (
        <section
            id='user-input'>
            <div className='input-group'>
                <p>
                    <label >Initial investment</label>
                    <input type="number" required />
                </p >
                <p>
                    <label >Annual investment</label>
                    <input type="number" required />
                </p>
            </div>
            <div className='input-group'>

                <p>
                    <label >Expected Return</label>
                    <input type="number" required />
                </p>
                <p>
                    <label >Duration</label>
                    <input type="number" required />
                </p>
            </div>
        </section >
    )
}

export default UserInput
