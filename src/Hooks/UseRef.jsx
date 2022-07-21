import React, { useEffect, useState, useRef } from 'react';

//Если хотим сохранить что-то между рендерами, сохраняет свое состояние и не вызывает рендер

function UseRef() {

    const[value,setValue] = useState("initial")
    const renderCount = useRef(1)
    const inputRef = useRef(null)
    const focus = () => inputRef.current.focus()
    const prevValue = useRef("")

    useEffect(() => {
        renderCount.current++
    })

    useEffect(() => {
        prevValue.current = value
    })

    return (
        <div>
            <h1>Rednders: {renderCount.current}</h1>
            <h2>Previous State: {prevValue.current}</h2>
            <input ref={inputRef} type="text" onChange={e => setValue(e.target.value)} value={value}/>
            <button onClick={focus}>Focus</button>
        </div>
    );
}

export default UseRef;