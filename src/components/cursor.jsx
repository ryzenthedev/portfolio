import React, { useRef } from "react"

export default function MagicCursor(){

    const mainCursor = useRef(null)
    const cursorBorder = useRef(null)

    React.useEffect(() => {
        const main = mainCursor.current
        const border = cursorBorder.current

        if (!main || !border || window.matchMedia('(pointer: coarse)').matches) {
            return undefined
        }

        const handleMouseMove = (event) => {
            const position = `translate3d(${event.clientX}px, ${event.clientY}px, 0) translate(-50%, -50%)`
            main.style.transform = position
            border.style.transform = position
        }

        const handleMouseDown = () => {
            main.classList.add('click')
            border.classList.add('click')
        }

        const handleMouseUp = () => {
            main.classList.remove('click')
            border.classList.remove('click')
        }

        document.addEventListener('mousemove', handleMouseMove)
        document.addEventListener('mousedown', handleMouseDown)
        document.addEventListener('mouseup', handleMouseUp)

        return () => {
            document.removeEventListener('mousemove', handleMouseMove)
            document.removeEventListener('mousedown', handleMouseDown)
            document.removeEventListener('mouseup', handleMouseUp)
        }

    }, [])

    return (
        <>
            <div className="cursor hidden sm:block">
                <div ref={mainCursor} className="main"/>
                <div ref={cursorBorder} className="cursorBorder"/>
            </div>
        </>
    )

}
