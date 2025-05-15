import React, { useState } from 'react'

const Todolist = () => {

    const [addInput, setAddInput] = useState("");
    const [items, setItems] = useState(
        [
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
    )
    function addTask() {
        if (!addInput) return alert("Input text is empty!");
        setItems((prev) => [...prev, {
            id: Date.now(),
            task: addInput
        }]);
        setAddInput("");

    }

    function deleteTask(id) {
        setItems(prev => prev.filter(e => e.id != id))
    }

    function editTask(id) {
        const tempArray = [...items];
        const index = tempArray.findIndex((e) => e.id == id);
        const new_input = prompt(`Edit todo no. ${index}`, tempArray[index].task);

        if (!new_input) return;

        tempArray[index].task = new_input;
        setItems(tempArray);
    }


    return (

        <div className='h-screen w-full bg-blue-500 flex items-center justify-center'>
            <div className=' bg-amber-200 border shadow-md w-[800px] p-7 rounded-2xl'>
                <div className='bg-sky-400 text-white rounded-2xl p-4'>
                    <h1 className='text-center mb-3 font-bold text-4xl'>TodoList</h1>
                    <div className='flex text-black'>
                        <input value={addInput} onChange={(e) => { setAddInput(e.target.value) }} className='border flex-1 py-2 rounded-2xl px-3  focus:outline-none' type="text" placeholder='Enter Task...' />
                        <button onClick={addTask} className='border-1 mx-4 py-2 px-4 rounded-2xl bg-amber-300 active: cursor-pointer'>Add Task</button>
                    </div>

                </div>

                <div className=''>
                    {
                        items.map((e) => {
                            return (
                                <div key={e.id} className='flex justify-between py-3 px-2'>
                                    <p>{e.task}</p>
                                    <div className="">
                                        <button onClick={() => deleteTask(e.id)} className='border-1 mx-4 py-2 px-4 rounded-2xl bg-amber-300 active: cursor-pointer'>Delete</button>
                                        <button onClick={() => editTask(e.id)} className='border-1 mx-4 py-2 px-4 rounded-2xl bg-amber-300 active: cursor-pointer'>Edit</button>
                                    </div>
                                </div>
                            )
                        }
                        )
                    }
                </div>
            </div>

        </div>

    )
}

export default Todolist
