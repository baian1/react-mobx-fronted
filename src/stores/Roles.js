import {observable,action} from 'mobx';
import {loadRoles,createRole,deleteRoles,updateRole} from '../apis/roles'

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

  async createRole(value) {
    await createRole(value);
    this.loadRoles();
  }

  async deleteRoles(id) {
    await deleteRoles(id);
    this.loadRoles();
  }

  async updateRole(id, value) {
    await updateRole(id, value);
    this.loadRoles();
  }
}
