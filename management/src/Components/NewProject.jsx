import React, { useRef } from 'react'
import Input from './Input'

function NewProject({ onAdd }) {
    const title = useRef();
    const description = useRef();
    const dueDate = useRef();

    function handleSave() {
        const enterTitle = title.current.value;
        const enterDescription = description.current.value;
        const enterDueDate = dueDate.current.value;

        onAdd({
            title: enterTitle,
            description: enterDescription,
            dueDate: enterDueDate,
        })
    }

    return (
        <div className='w-[35rem] mt-16' >
            <menu className='flex items-center justify-end gap-4 my-4'>
                <li><button className='text-stone-800  hover:text-stone-950'>Cancel</button></li>

                <li><button className='px-6 py-2 bg-stone-800 text-stone-50 hover:bg-stone-950 rounded-xl'
                    onClick={handleSave}
                >Save</button></li>
            </menu>
            <div>
                <Input ref={title} label="Tile" />
                <Input ref={description} label="Description" textarea />
                <Input type='date' ref={dueDate} label="Due date" />
            </div>
        </div>
    )
}

export default NewProject
