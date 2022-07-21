import React from 'react';
import Alert from './Alert';
import { AlertProvider } from './AlertContext';
import Main from './Main';


function UseContext() {


    return (

        <AlertProvider>
            <div>

                <Alert />
                <Main />

            </div>
        </AlertProvider>

    );
}

export default UseContext;
