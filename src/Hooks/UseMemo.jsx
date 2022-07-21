import React, { useEffect, useState, useMemo } from 'react';


function complexCompute(num) {
    let i = 0
    while (i < 1000000000) i++
    return num * 2
}


function UseMemo() {

    const [number, setNumber] = useState(42)
    const computed = useMemo(() => {
        return complexCompute(number)
    }, [number])


    const [colored, setColored] = useState(false)

    const styles = useMemo(() => ({
        color: colored ? "blue" : "black"
    }), [colored])


    useEffect(() => {
        console.log("styles changed")
    }, [styles])



    return (

        <div>

            <h1 style={styles}>Calc Number: {computed}</h1>
            <button onClick={() => setNumber(prev => prev + 1)}>Increase</button>
            <button onClick={() => setNumber(prev => prev - 1)}>Decrease</button>
            <button onClick={() => setColored(prev => !prev)}>Change Color</button>

        </div>

    );
}

export default UseMemo;