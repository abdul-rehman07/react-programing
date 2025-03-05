import React, { useState } from 'react'

function NewTask({ onAdd }) {
    const [enteredTast, setEnteredTask] = useState("");

    function handleChange(event) {
        setEnteredTask(event.target.value)
    }

    function handleClick() {
        if (enteredTast.trim() === "") {
            return;
        }
        onAdd(enteredTast)
        setEnteredTask('');

    }


    return (
        <div className='flex items-center gap-4 '>
            <input type="text"
                onChange={handleChange}
                value={enteredTast}
                className='w-64 px-2 py-1 rounded-sm bg-stone-200' />
            <button className='text-stone-700 hover:text-stone-950 ' onClick={handleClick}>ADD Task</button>
        </div>

    )
}

export default NewTask
