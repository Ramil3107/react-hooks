import React from 'react';
import { useAlert } from './AlertContext';


function Main() {

    const {show} = useAlert()

    return (
        <div>
            <h1>Hello from Context</h1>
            <button onClick={(() => show("This text from Main.js"))}>Show Alert</button>
        </div>
    );
}

export default Main;
