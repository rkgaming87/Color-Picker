import React, { useEffect, useState } from 'react'

const Task1 = () => {
    const [length, setLength] = useState(0);
    const [text, settext] = useState("");
    const [color, setColor] = useState("red");

    function changeColor() {
        if (text.length % 2 == 0) {
            setColor("red");
        }
        else {
            setColor("green");
        }
    }


    useEffect(() => {
        changeColor()
    }, [text])
    // console.log(color)
    return (
        <div>
            <input value={text}
                onChange={(e) => {
                    settext(e.target.value)
                }} className='focus:outline-none border-2 m-4 py-1 px-3' type="text" placeholder='Enter...' />

            <p style={{ color: color }}>Length: {length}</p>
        </div>
    )
}

export default Task1
