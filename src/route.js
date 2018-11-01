import React from 'react'
import {BrowserRouter, Route,Switch} from "react-router-dom";
import Roles from './routers/Roles'
import Home from './routers/homepage'

export const App=()=>{
  return (
    <BrowserRouter>
      <div>
        <Route path='/' exact component={Home}/>
        <Route path='/roles' exact component={Roles}/>
      </div>
    </BrowserRouter>
  )
}
