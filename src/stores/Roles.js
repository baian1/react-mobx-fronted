import {observable,action} from 'mobx';
import {loadRoles,creatRoles,deleteRoles,updateRoles} from '../apis/roles'

export class RoleStore {

  @observable roles = [];
  @observable Loading = true;

  constructor() {
    this.loadRoles();
  }

  @action
  async loadRoles() {
    this.roles = await loadRoles();
  }

  async creatRoles(value) {
    await creatRoles(value);
    this.loadRoles();
  }

  async deleteRoles(id) {
    await deleteRoles(id);
    this.loadRoles();
  }

  async updateRoles(id, value) {
    await updateRoles(id, value);
    this.loadRoles();
  }
}
