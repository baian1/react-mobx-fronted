import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import * as serviceWorker from './serviceWorker';
import {Provider} from 'mobx-react'
import {RoleStore} from './stores/Roles';
import {App} from './route'



const rolestore = new RoleStore();
console.log(rolestore.roles);


const stroe={
  rolestore,
};

ReactDOM.render(<Provider {...stroe}>
  <App/>
</Provider>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
