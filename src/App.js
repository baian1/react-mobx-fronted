import React from "react";
import {observer,inject} from 'mobx-react';
import Header from './components/Header'
/*
const App =inject('my')(observer(({my})=>{
    console.log(my);
        return(
            <div><button onClick={my.Add}>add</button>{my.total}</div>
            );
}))
*/

@inject('rolestore2') @observer class App extends React.Component{
    render(){
        return(
            <div>
                <Header/>
            </div>
        );
    }
}

export default App;
