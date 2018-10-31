import React from 'react'
import {BrowserRouter, Route} from "react-router-dom";
import Roles from './routers/Roles'

export const App=()=>{
    return (
        <BrowserRouter>
            <div>
                <Route path='/' component={Roles}/>
            </div>
        </BrowserRouter>
    )
}
