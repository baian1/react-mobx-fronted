import {observable,action,autorun} from 'mobx';
import axios from 'axios';

export class RoleStore {

  @observable roles=[];
  @observable Loading=true;

  constructor(){
    this.loadRoles();
  }

  @action
  loadRoles(){
    axios
      .get('/api/roles')
      .then((response)=>{
        console.log(response.data);
        this.roles=response.data;
      })
      .catch(function (error) {
        console.log(error);
      })
  }

  creatRoles(value){
    axios
      .post('/api/roles',{
        name:value.name,
        display_name:value.display_name,
        description:value.description,
      })
      .then((response)=>{
        console.log(response);
        this.loadRoles();
      })
      .catch(function (error) {
        console.log(error);
      });
  }

  deleteRoles(id){
    axios.delete(`/api/roles/${id}`)
      .then((response)=>{
        console.log(response);
        this.loadRoles();
      })
      .catch(function (error) {
        console.log(error);
      });
  }

  updateRoles(id,value){
    axios.patch(`/api/roles/${id}`,{
      name:value.name,
      display_name:value.display_name,
      description:value.description,
    })
      .then((response)=>{
        console.log(response);
        this.loadRoles();
      })
      .catch(function (error) {
        console.log(error);
      });
  }
}
