import {observable,action} from 'mobx';
import axios from 'axios';

export class RoleStore {

    @observable roles = [];
    @observable isLoading = true;

    constructor(){
        this.loadTodos();
    }

    @action
    loadTodos(){
        axios.get('/api/roles')
            .then((response)=>{
                console.log(response.data);
                this.roles=response.data;
            })
            .catch(function (error) {
                console.log(error);
            })
    }

    @action creatTodos(value){
        axios.post('/api/roles',{
            name:value.name,
            display_name:value.displayname,
            description:value.description,
        })
        .then(function (response) {
            console.log(response);
        })
            .catch(function (error) {
                console.log(error);
            });
    }

    @action deletTodos(id){
        axios.delete(`/api/roles/${id}`)
            .then(function (response) {
            console.log(response);
        })
            .catch(function (error) {
                console.log(error);
            });
    }

    @action updateTodos(id,value){
        axios.patch(`/api/roles/${id}`,{
            name:value.name,
            display_name:value.displayname,
            description:value.description,
        })
            .then(function (response) {
                console.log(response);
            })
            .catch(function (error) {
                console.log(error);
            });
    }
}
