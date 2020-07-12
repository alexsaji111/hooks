import React, { useState, useEffect } from 'react'

function HookMouse() {
    const [x, setX] = useState(0)
    const [y, setY] = useState(0)

    const logMousePosition = e =>{
        console.log('Mouse Event')
        setX(e.clientX)
        setY(e.clientY)
    }
    useEffect(() => {
        console.log('useEffect called')
        window.addEventListener('mousemove', logMousePosition)

        return ()=>{
            console.log('component unmount')
            window.removeEventListener('mousemove' , logMousePosition)
        }
    },[])

    return (
        <div>
            Hook X - {x}  Hook Y - {y}
        </div>
    )
}

export default HookMouse
