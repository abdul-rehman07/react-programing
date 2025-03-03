import React, { useRef } from 'react'
import Input from './Input'
import Model from './Model.jsx';

function NewProject({ onAdd, onCancel }) {
    const model = useRef();

    const title = useRef();
    const description = useRef();
    const dueDate = useRef();

    function handleSave() {
        const enterTitle = title.current.value;
        const enterDescription = description.current.value;
        const enterDueDate = dueDate.current.value;

        if (enterTitle.trim() === '' ||
            enterDescription.trim() === '' ||
            enterDueDate.trim() === ''
        ) {
            model.current.open();
            return;
        }

        onAdd({
            title: enterTitle,
            description: enterDescription,
            dueDate: enterDueDate,
        })
    }

    return (
        <>
            <Model ref={model} buttonCaption="okey">
                <h2 className='text-xl font-bold text-stone-700 my-4'>Invalid Input</h2>
                <p className='text-stone-600 mb-4'>opps ... looks like you forget to enter a value </p>
                <p className='text-stone-600 mb-4'>Please make sure you provide a valid value for every input field.</p>
            </Model>
            <div className='w-[35rem] mt-16' >
                <menu className='flex items-center justify-end gap-4 my-4'>
                    <li><button className='text-stone-800  hover:text-stone-950'
                        onClick={onCancel}  >Cancel</button></li>

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
        </>
    )
}

export default NewProject
