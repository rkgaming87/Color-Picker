import React, { useState } from 'react'

const Colorpicker = () => {
    const [color, setColor] = useState("#FFFFFF");
    return (
        <div>
            <h1>Color Picker</h1>
            <p>Picked Color:{color}</p>
            <input type="color" />
        </div>
    )
}

export default Colorpicker
