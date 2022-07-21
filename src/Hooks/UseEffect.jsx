import React, { useEffect, useState } from 'react';


function UseEffect() {

    const [type, setType] = useState("users")
    const [data, setData] = useState()
    const [cursorPosition, setCursorPosition] = useState({
        x:0,
        y:0
    })


    useEffect(() => {
        fetch(`https://jsonplaceholder.typicode.com/${type}`)
            .then(response => response.json())
            .then(json => setData(json))
    }, [type])
   
   
    useEffect(() => {
        
        window.addEventListener("mousemove", (event) => {
            setCursorPosition({
                x:event.clientX,
                y:event.clientY,
            })
        })
        
    }, [])


    return (
        <div>

            <h1>Resourses: {type}</h1>
            <button onClick={() => setType("users")}>Users</button>
            <button onClick={() => setType("todos")}>Todo</button>
            <button onClick={() => setType("posts")}>Posts</button>

            <pre style={{textAlign:"justify"}}>{JSON.stringify(cursorPosition, null, 2)}</pre>
        </div>
    );
}

export default UseEffect;