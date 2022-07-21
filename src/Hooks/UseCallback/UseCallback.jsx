import React, { useState, useCallback } from 'react';
import ItemsList from './ItemsList';


//Фукция не менялась при каждом рендере, а кэшировалась. Похоже на Мемо

function UseCallback() {

    const [colored, setColored] = useState(false)
    const [count, setCount] = useState(1)


    const styles = {
        color: colored ? "blue" : "black"
    }

    const generateItemsFromAPI = useCallback( () => {
        return new Array(count).fill("").map((_,idx) => `Element ${idx + 1}`)
    }, [count])

    return (

        <div>

            <h1 style={styles}>Number of elements: {count}</h1>
            <button onClick={() => setCount(prev => prev + 1)}>Add</button>
            <button onClick={() => setColored(prev => !prev)}>change</button>

            <ItemsList getItems={generateItemsFromAPI}/>

        </div>

    );
}

export default UseCallback