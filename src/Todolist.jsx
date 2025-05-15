import React from 'react'

const Todolist = () => {

    const items = [
        {
            id: 1,
            task: "Task 1"
        },
        {
            id: 2,
            task: "Task 2"
        },
        {
            id: 3,
            task: "Task 3"
        },
        {
            id: 4,
            task: "Task 4"
        },
    ]
    return (
        <>
            <div className='bg-amber-200 w-[500px] p-7 '>
                <div className='bg-sky-400 text-white rounded-2xl p-4'>
                    <h1 className='text-center font-bold text-4xl'>TodoList</h1>
                    <input className='border-2 rounded-2xl px-3 py-2 focus:outline-none' type="text" placeholder='Enter Task...' />
                    <button className='border-1 mx-4 py-2 px-4 rounded-2xl bg-amber-300 active: cursor-pointer'>Add Task</button>

                </div>

                <div className=''>
                    {
                        items.map((e) => {
                            return (
                                <div key={e.id} className='flex justify-between py-3 px-2'>
                                    <p>{e.task}</p>
                                    <div className="">
                                        <button className='border-1 mx-4 py-2 px-4 rounded-2xl bg-amber-300 active: cursor-pointer'>Delete</button>
                                        <button className='border-1 mx-4 py-2 px-4 rounded-2xl bg-amber-300 active: cursor-pointer'>Edit</button>
                                    </div>
                                </div>
                            )
                        }
                        )
                    }
                </div>
            </div>
        </>
    )
}

export default Todolist
